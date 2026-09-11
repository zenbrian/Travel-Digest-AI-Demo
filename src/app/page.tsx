import { Calendar, LayoutGrid, Map, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import DemoMap from '../components/demo-map';
import FloatingAgent from '../components/floating-agent';
import ItineraryKanban from '../components/itinerary-kanban';
import ItineraryTimeline from '../components/itinerary-timeline';
import NavigationSidebar from '../components/navigation-sidebar';
import StopDetailModal from '../components/stop-detail-modal';
import { demoPrompts } from '../lib/demo-data';
import { applyDemoAct, clearHighlight, createInitialDemoState, getAssistantReply } from '../lib/demo-state';
import type { ChatMessage, DemoAct, ItineraryStop } from '../lib/types';

const nowTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export default function Page() {
  const [demoState, setDemoState] = useState(createInitialDemoState);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'hello', sender: 'assistant', text: '你好！我是 Travel Digest AI。告訴我你的旅行偏好，我會協助整理行程、路線與每日安排。', timestamp: '10:00' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('itinerary');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedStop, setSelectedStop] = useState<ItineraryStop | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    try {
      localStorage.removeItem('DEMO_THEME');
    } catch {}
  }, []);

  const tripStopsCount = useMemo(() => demoState.trip.days.reduce((sum, day) => sum + day.stops.length, 0), [demoState.trip]);

  const runAct = (act: DemoAct) => {
    const prompt = demoPrompts.find((p) => p.act === act);
    if (!prompt || isTyping) return;
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: 'user', text: prompt.text, timestamp: nowTime() }]);
    setIsTyping(true);

    window.setTimeout(() => {
      setDemoState((prev) => applyDemoAct(prev, act));
      setMessages((prev) => [...prev, { id: `a-${Date.now()}`, sender: 'assistant', text: getAssistantReply(act), timestamp: nowTime(), toolName: prompt.toolName }]);
      setIsTyping(false);
    }, act === 1 ? 850 : 620);
  };

  useEffect(() => {
    if (demoState.highlight && Object.keys(demoState.highlight).length > 0) {
      const timer = window.setTimeout(() => setDemoState((prev) => clearHighlight(prev)), 3600);
      return () => window.clearTimeout(timer);
    }
  }, [demoState.highlight]);

  const reset = () => {
    setDemoState(createInitialDemoState());
    setSelectedStop(null);
    setMessages([{ id: `reset-${Date.now()}`, sender: 'assistant', text: '行程已重置。可以重新從「載入五天四夜行程」開始。', timestamp: nowTime() }]);
  };

  const openStop = (dayIndex: number, stopId: string) => {
    const day = demoState.trip.days.find((d) => d.dayIndex === dayIndex);
    setSelectedStop(day?.stops.find((s) => s.id === stopId) ?? null);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <NavigationSidebar activeTab={activeNavTab} onTabChange={setActiveNavTab} isCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed((v) => !v)} tripDaysCount={demoState.trip.days.length || 5} tripStopsCount={tripStopsCount} />

      <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="z-20 flex h-20 shrink-0 items-center justify-between border-b border-zinc-200/60 bg-white/70 px-7 backdrop-blur-2xl dark:border-zinc-800/80 dark:bg-zinc-950/65">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400"><Calendar className="size-3.5" />AI Travel Planner · Osaka Itinerary</div>
            <h1 className="mt-1 truncate text-2xl font-black tracking-tight text-zinc-950 dark:text-white">{demoState.trip.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="mr-2 hidden items-center gap-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900 lg:flex">
              <button onClick={() => setDemoState((prev) => ({ ...prev, viewMode: 'kanban' }))} className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all ${demoState.viewMode === 'kanban' ? 'bg-white text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'}`}><LayoutGrid className="size-4" />行程看板</button>
              <button onClick={() => setDemoState((prev) => ({ ...prev, viewMode: 'map' }))} className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all ${demoState.viewMode === 'map' ? 'bg-white text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'}`}><Map className="size-4" />每日細節地圖</button>
            </div>
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-600 transition hover:text-zinc-950 shadow-xs"><RotateCcw className="size-4" />一鍵重置</button>
          </div>
        </header>

        <section className="min-h-0 flex-1 overflow-auto p-7 scrollbar-thin">
          {activeNavTab !== 'itinerary' ? (
            <div className="grid h-[calc(100vh-220px)] place-items-center rounded-3xl border border-dashed border-zinc-300 bg-white/55 text-center dark:border-zinc-800 dark:bg-zinc-950/30"><div><Calendar className="mx-auto mb-3 size-8 text-zinc-400" /><h2 className="text-xl font-black">目前位於「我的行程」</h2><p className="mt-2 text-sm text-zinc-500">其他功能暫不可用，請先完成行程規劃。</p></div></div>
          ) : demoState.viewMode === 'map' && demoState.trip.days.length > 0 ? (
            <DemoMap trip={demoState.trip} selectedDay={demoState.selectedDay} onSelectDay={(day) => setDemoState((prev) => ({ ...prev, selectedDay: day }))} highlight={demoState.highlight} selectedRoute={demoState.selectedRoute} optimized={demoState.optimized} />
          ) : demoState.viewMode === 'kanban' ? (
            <ItineraryKanban trip={demoState.trip} highlight={demoState.highlight} onSelectStop={openStop} />
          ) : (
            <ItineraryTimeline trip={demoState.trip} selectedDay={demoState.selectedDay} onSelectDay={(day) => setDemoState((prev) => ({ ...prev, selectedDay: day }))} />
          )}
        </section>
      </main>

      <FloatingAgent messages={messages} currentAct={demoState.act} isTyping={isTyping} onRunAct={runAct} onReset={reset} />
      <StopDetailModal stop={selectedStop} onClose={() => setSelectedStop(null)} />
    </div>
  );
}
