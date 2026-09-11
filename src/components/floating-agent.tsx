import { Bot, HelpCircle, Loader2, Plus, RotateCcw, Send, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { demoPrompts } from '../lib/demo-data';
import type { ChatMessage, DemoAct } from '../lib/types';

interface Props {
  messages: ChatMessage[];
  currentAct: DemoAct;
  isTyping: boolean;
  onRunAct: (act: DemoAct) => void;
  onReset: () => void;
}

const PADDING = 16;
const CHAT_WIDTH = 390;
const CHAT_HEIGHT = 515;
const AGENT_WIDTH = 96;
const AGENT_HEIGHT = 76;

export default function FloatingAgent({ messages, currentAct, isTyping, onRunAct, onReset }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [chatDimensions, setChatDimensions] = useState({ width: CHAT_WIDTH, height: CHAT_HEIGHT });
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);
  const dragStartRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0, hasMoved: false });
  const placementRef = useRef<{ vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }>({ vertical: 'top', horizontal: 'right' });

  const lastAct = demoPrompts[demoPrompts.length - 1]?.act ?? 0;
  const nextAct = Math.min(lastAct, currentAct + 1) as DemoAct;
  const nextPrompt = demoPrompts.find((prompt) => prompt.act === nextAct);
  const scriptedInputText = currentAct >= lastAct ? '' : nextPrompt?.text ?? '';

  const getAgentScreenPos = (posX: number, posY: number) => {
    if (typeof window === 'undefined') return { top: 600, bottom: 676, left: 1000, right: 1096 };
    const bottom = window.innerHeight - 24 + posY;
    const top = bottom - AGENT_HEIGHT;
    const right = window.innerWidth - 24 + posX;
    const left = right - AGENT_WIDTH;
    return { top, bottom, left, right };
  };

  const getPlacements = (posX: number, posY: number) => {
    if (typeof window === 'undefined') return { vertical: 'top' as const, horizontal: 'right' as const };

    const agent = getAgentScreenPos(posX, posY);
    const agentCenterX = agent.left + AGENT_WIDTH / 2;
    const agentCenterY = agent.top + AGENT_HEIGHT / 2;
    const midX = window.innerWidth / 2;
    const midY = window.innerHeight / 2;
    const prev = placementRef.current;
    let vertical = prev.vertical;
    let horizontal = prev.horizontal;

    if (prev.vertical === 'top') {
      if (agentCenterY < midY - 50) vertical = 'bottom';
    } else if (agentCenterY > midY + 50) {
      vertical = 'top';
    }

    if (prev.horizontal === 'left') {
      if (agentCenterX > midX + 80) horizontal = 'right';
    } else if (agentCenterX < midX - 80) {
      horizontal = 'left';
    }

    placementRef.current = { vertical, horizontal };
    return { vertical, horizontal };
  };

  const getClampedPosition = (targetX: number, targetY: number) => {
    if (typeof window === 'undefined') return { x: targetX, y: targetY };

    const { vertical, horizontal } = getPlacements(targetX, targetY);
    const agent = getAgentScreenPos(targetX, targetY);
    let boxLeft = agent.left;
    let boxRight = agent.right;
    let boxTop = agent.top;
    let boxBottom = agent.bottom;

    if (isOpen) {
      if (horizontal === 'left') boxRight = agent.left + chatDimensions.width;
      else boxLeft = agent.right - chatDimensions.width;

      if (vertical === 'bottom') boxBottom = agent.bottom + 12 + chatDimensions.height;
      else boxTop = agent.top - 12 - chatDimensions.height;
    }

    let adjustX = 0;
    let adjustY = 0;
    if (boxLeft < PADDING) adjustX = PADDING - boxLeft;
    else if (boxRight > window.innerWidth - PADDING) adjustX = window.innerWidth - PADDING - boxRight;
    if (boxTop < PADDING) adjustY = PADDING - boxTop;
    else if (boxBottom > window.innerHeight - PADDING) adjustY = window.innerHeight - PADDING - boxBottom;

    return { x: targetX + adjustX, y: targetY + adjustY };
  };

  const { vertical: verticalPlacement, horizontal: horizontalPlacement } = getPlacements(position.x, position.y);
  const chatTranslateY = verticalPlacement === 'bottom' ? AGENT_HEIGHT + 12 : -(chatDimensions.height + 12);
  const chatTranslateX = horizontalPlacement === 'left' ? Math.max(0, chatDimensions.width - AGENT_WIDTH) : 0;
  const transformOrigin = `${horizontalPlacement === 'left' ? 'left' : 'right'} ${verticalPlacement === 'bottom' ? 'top' : 'bottom'}`;

  useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      const { offsetWidth, offsetHeight } = chatRef.current;
      if (offsetWidth && offsetHeight) setChatDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [isOpen]);

  useEffect(() => {
    const ensureWithinBounds = () => setPosition((prev) => getClampedPosition(prev.x, prev.y));
    const rafId = requestAnimationFrame(ensureWithinBounds);
    window.addEventListener('resize', ensureWithinBounds);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', ensureWithinBounds);
    };
  }, [isOpen, chatDimensions.width, chatDimensions.height]);

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - dragStartRef.current.startX;
      const deltaY = event.clientY - dragStartRef.current.startY;
      if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) dragStartRef.current.hasMoved = true;
      setPosition(getClampedPosition(dragStartRef.current.posX + deltaX, dragStartRef.current.posY + deltaY));
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - dragStartRef.current.startX;
      const deltaY = touch.clientY - dragStartRef.current.startY;
      if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) dragStartRef.current.hasMoved = true;
      setPosition(getClampedPosition(dragStartRef.current.posX + deltaX, dragStartRef.current.posY + deltaY));
    };

    const stopDragging = () => setIsDragging(false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopDragging);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, isOpen, chatDimensions.width, chatDimensions.height]);

  const handleStartDrag = (clientX: number, clientY: number, target: HTMLElement) => {
    if (target.closest('input, textarea, button, .no-drag')) return;
    setIsDragging(true);
    dragStartRef.current = { startX: clientX, startY: clientY, posX: position.x, posY: position.y, hasMoved: false };
  };

  const handleSendMessage = () => {
    if (isTyping || currentAct >= lastAct || !nextPrompt) return;
    onRunAct(nextPrompt.act);
  };

  const handleResetPosition = () => {
    placementRef.current = { vertical: 'top', horizontal: 'right' };
    setPosition(getClampedPosition(0, 0));
  };

  return (
    <div
      ref={containerRef}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isDragging ? 'none' : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="fixed bottom-6 right-6 z-[850] select-none"
    >
      <div
        ref={chatRef}
        style={{
          transform: `translate3d(${chatTranslateX}px, ${chatTranslateY}px, 0) scale(${isOpen ? 1 : 0.88})`,
          transformOrigin,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: !hasMountedRef.current
            ? 'none'
            : isDragging
              ? 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease-out'
              : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="absolute right-0 top-0 flex h-[480px] max-h-[calc(100vh-120px)] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/70 shadow-[0_24px_70px_rgba(0,0,0,0.16),0_1px_2px_rgba(255,255,255,0.9)_inset] backdrop-blur-3xl backdrop-saturate-200 will-change-transform dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-[0_28px_80px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.1)_inset] sm:h-[515px] sm:w-[390px]"
      >
        <div className={`relative flex items-center justify-between border-b border-white/50 bg-white/40 px-4.5 pb-2.5 pt-3 backdrop-blur-md dark:border-white/10 dark:bg-white/5 ${isDragging ? 'cursor-grabbing' : ''}`}>
          <div className="pointer-events-none mt-1 flex items-center gap-2">
            <div className="relative flex size-6 items-center justify-center rounded-full border border-white/90 bg-white/80 text-zinc-800 shadow-xs dark:border-white/15 dark:bg-zinc-800/80 dark:text-zinc-200">
              <Bot className="size-3.5" />
              <span className="absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 ring-2 ring-white/90 dark:ring-zinc-950" />
            </div>
            <span className="text-[12px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Travel AI Agent</span>
          </div>

          <div className="no-drag mt-1 flex items-center gap-1">
            <button type="button" onClick={onReset} title="開啟新對話" className="cursor-pointer rounded-lg p-1 text-zinc-500 transition-colors hover:bg-white/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100">
              <Plus className="size-3.5" />
            </button>
            <button type="button" onClick={handleResetPosition} title="重置視窗位置" className="cursor-pointer rounded-lg p-1 text-zinc-500 transition-colors hover:bg-white/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100">
              <RotateCcw className="size-3.5" />
            </button>
            <button onClick={() => setIsOpen(false)} title="收合對話框" className="cursor-pointer rounded-lg p-1 text-zinc-500 transition-colors hover:bg-white/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100">
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4 text-[12.5px] scrollbar-thin">
          {messages.map((message) => {
            const isAssistant = message.sender === 'assistant';
            return (
              <div key={message.id} className={`flex items-start gap-2.5 animate-fade-in-up ${isAssistant ? '' : 'justify-end'}`}>
                {isAssistant && (
                  <div className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-amber-100/90 shadow-xs dark:border-amber-900/60">
                    <span className="text-sm">👦</span>
                  </div>
                )}
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 font-normal leading-relaxed shadow-xs ${isAssistant
                  ? 'rounded-tl-sm border border-white/90 bg-white/65 text-zinc-800 shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-zinc-200'
                  : 'rounded-tr-sm border border-white/20 bg-zinc-900/90 font-medium text-white shadow-sm backdrop-blur-xl dark:border-white/40 dark:bg-white/90 dark:text-zinc-950'
                }`}>
                  {isAssistant && message.toolName && (
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 shadow-xs dark:bg-emerald-500/20 dark:text-emerald-300">
                      <Sparkles className="size-3 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{message.toolName}</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-start gap-2.5 animate-fade-in-up">
              <div className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-purple-200/80 bg-purple-100/80 dark:border-purple-800 dark:bg-purple-950/80">
                <Sparkles className="size-3.5 animate-spin text-purple-600" />
              </div>
              <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm border border-white/80 bg-white/70 px-3.5 py-2.5 text-xs text-zinc-700 shadow-xs backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-zinc-300">
                <Loader2 className="size-3.5 animate-spin text-purple-500" />
                <span>正在分析需求與規劃行程中...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="no-drag border-t border-white/50 bg-white/40 p-3 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <form onSubmit={(event) => { event.preventDefault(); handleSendMessage(); }} className="relative flex items-center rounded-2xl border border-white/90 bg-white/60 px-3 py-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl focus-within:border-white focus-within:ring-2 focus-within:ring-zinc-400/30 dark:border-white/15 dark:bg-black/40">
            <input
              type="text"
              value={scriptedInputText}
              readOnly
              aria-readonly="true"
              placeholder="行程內容會自動帶入..."
              className="flex-1 cursor-default bg-transparent py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-100 dark:placeholder:text-zinc-500"
            />
            <button type="submit" disabled={isTyping || currentAct >= lastAct} className="cursor-pointer rounded-xl p-1.5 text-zinc-400 transition-colors hover:bg-white/70 hover:text-zinc-900 disabled:pointer-events-none disabled:opacity-30 dark:hover:bg-white/10 dark:hover:text-zinc-100">
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div
          onMouseDown={(event) => {
            event.preventDefault();
            handleStartDrag(event.clientX, event.clientY, event.currentTarget as HTMLElement);
          }}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            if (touch) handleStartDrag(touch.clientX, touch.clientY, event.currentTarget as HTMLElement);
          }}
          onClick={(event) => {
            if (dragStartRef.current.hasMoved) {
              event.preventDefault();
              event.stopPropagation();
              return;
            }
            setIsOpen((prev) => !prev);
          }}
          title="按住可任意拖拽移動，點擊展開或收合對話"
          className={`group flex cursor-grab flex-col items-center transition-transform duration-200 hover:scale-105 active:scale-95 ${isDragging ? 'scale-105 cursor-grabbing' : ''}`}
        >
          <div className="relative flex size-13 items-center justify-center overflow-hidden rounded-[22px] border border-white/90 bg-white/75 shadow-[0_12px_36px_rgba(0,0,0,0.16),inset_0_1px_2px_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-200 dark:border-white/20 dark:bg-zinc-900/75 dark:shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="relative flex size-10 items-center justify-center rounded-xl border border-white/80 bg-gradient-to-b from-white/90 via-zinc-200/90 to-zinc-300/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.1)] dark:border-white/15 dark:from-zinc-700/90 dark:via-zinc-800/90 dark:to-zinc-900/90">
              <div className="absolute top-1 h-2.5 w-5.5 rounded-t-full border-t-2 border-zinc-700 dark:border-zinc-300" />
              <Bot className="z-10 size-5.5 text-zinc-800 dark:text-zinc-100" />
              <div className="absolute left-0.5 top-3 size-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <div className="absolute right-0.5 top-3 size-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <span className="absolute right-1 top-1 size-2 animate-pulse rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
            </div>
          </div>
          <div className="mt-1 rounded-full border border-white/90 bg-white/80 px-2.5 py-0.5 shadow-2xs backdrop-blur-xl dark:border-white/15 dark:bg-zinc-900/80">
            <span className="text-[10.5px] font-extrabold tracking-tight text-zinc-800 drop-shadow-2xs dark:text-zinc-200">{isOpen ? 'Close' : 'Ask Me'}</span>
          </div>
        </div>

        <button type="button" onClick={handleResetPosition} className="no-drag flex size-8.5 cursor-pointer items-center justify-center rounded-full border border-white/90 bg-white/75 text-zinc-600 shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl transition-all hover:scale-105 hover:text-zinc-900 active:scale-95 dark:border-white/20 dark:bg-zinc-900/75 dark:text-zinc-300 dark:hover:text-white" title="使用說明與拖拽提示">
          <HelpCircle className="size-4" />
        </button>
      </div>
    </div>
  );
}
