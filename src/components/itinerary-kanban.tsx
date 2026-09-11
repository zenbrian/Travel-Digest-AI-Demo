import { Car, Clock, Footprints, Hotel, MapPin, Plane, Plus, Sparkles, Train, Utensils } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { HighlightKind, ItineraryStop, StopCategory, TransitMode, Trip } from '../lib/types';
import { resolveAssetUrl } from '../lib/utils';

interface Props {
  trip: Trip;
  highlight?: Record<string, HighlightKind>;
  onSelectStop?: (dayIndex: number, stopId: string) => void;
}

const categoryMap: Record<StopCategory, { label: string; Icon: typeof MapPin }> = {
  play: { label: '景點', Icon: MapPin },
  eat: { label: '吃喝', Icon: Utensils },
  lodging: { label: '住宿', Icon: Hotel },
  other: { label: '移動', Icon: Plane }
};

function formatTime(stop: ItineraryStop) {
  return `${String(stop.time.hour).padStart(2, '0')}:${String(stop.time.minute).padStart(2, '0')}`;
}

function formatDuration(stop: ItineraryStop) {
  if (stop.category === 'lodging' && stop.duration.hours === 0 && stop.duration.minutes === 0) return '住宿過夜';
  const parts: string[] = [];
  if (stop.duration.hours) parts.push(`${stop.duration.hours} 小時`);
  if (stop.duration.minutes) parts.push(`${stop.duration.minutes} 分鐘`);
  return parts.length ? `停留 ${parts.join(' ')}` : '短暫停留';
}

function transitIcon(mode: TransitMode) {
  const cls = 'size-3.5 text-zinc-500 dark:text-zinc-400';
  if (mode === 'transit') return <Train className={cls} />;
  if (mode === 'walk') return <Footprints className={cls} />;
  return <Car className={cls} />;
}

function cardClass(kind?: HighlightKind) {
  const base = 'relative flex flex-col overflow-hidden rounded-2xl border bg-white dark:bg-zinc-950 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-zinc-300/80 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer select-none';
  if (kind === 'added') return `${base} border-emerald-500/12 ring-1 ring-emerald-500/10 animate-soft-glow`;
  if (kind === 'updated') return `${base} border-emerald-500/15 ring-1 ring-emerald-500/12 animate-soft-glow`;
  if (kind === 'optimized') return `${base} border-emerald-300/50 dark:border-emerald-800/60`;
  return `${base} border-zinc-200/70 dark:border-zinc-800/80`;
}

export default function ItineraryKanban({ trip, highlight = {}, onSelectStop }: Props) {
  const boardRef = useRef<HTMLDivElement>(null);
  const highlightedRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const targetId = Object.entries(highlight).find(([, kind]) => kind === 'added' || kind === 'updated')?.[0];
    if (!targetId) return;

    window.setTimeout(() => {
      highlightedRefs.current[targetId]?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }, 120);
  }, [highlight]);

  if (trip.days.length === 0) {
    return (
      <div className="grid h-[calc(100vh-180px)] place-items-center rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/55 dark:bg-zinc-950/30 backdrop-blur-xl">
        <div className="max-w-md text-center animate-fade-in-up">
          <div className="mx-auto mb-5 grid size-14 place-items-center rounded-3xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-xl"><Sparkles className="size-6" /></div>
          <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">準備建立大阪行程</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">點擊浮動 AI 助理中的第一個建議，開始建立大阪 5 天 4 夜完整行程。</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={boardRef} className="relative flex w-full gap-5 overflow-x-auto pb-6 pt-2 select-none scrollbar-thin rounded-2xl">
      {trip.days.map((day) => (
        <div key={day.dayIndex} className="flex w-80 shrink-0 flex-col rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/35 backdrop-blur-md p-4 animate-fade-in-up" style={{ animationDelay: `${day.dayIndex * 80}ms` }}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm tracking-tight flex items-center gap-1.5">
                <span className="bg-primary/5 dark:bg-white/5 border border-zinc-200/60 dark:border-zinc-800 rounded px-1.5 py-0.5 text-xs text-zinc-600 dark:text-zinc-300">{day.dateStr}</span>
                <span className="truncate">{day.title}</span>
              </h3>
              <p className="mt-1 text-[11px] leading-5 text-zinc-500 dark:text-zinc-500">{day.summary}</p>
            </div>
            <span className="rounded-full bg-zinc-200/60 dark:bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">{day.stops.length}</span>
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-260px)] pr-0.5 scrollbar-thin">
            {day.stops.map((stop, idx) => {
              const cat = categoryMap[stop.category];
              const kind = highlight[stop.id];
              const isUpdated = kind === 'updated';
              const isAdded = kind === 'added';
              const CatIcon = cat.Icon;
              return (
                <div key={stop.id} ref={(node) => { highlightedRefs.current[stop.id] = node; }} className="group/card flex flex-col gap-3 animate-fade-in-up scroll-mt-8 scroll-mb-8" style={{ animationDelay: `${(day.dayIndex * 80) + (idx * 55)}ms` }}>
                  <div onClick={() => onSelectStop?.(day.dayIndex, stop.id)} className={cardClass(kind)}>
                    {(isAdded || isUpdated) && (
                      <span className="absolute right-2 top-2 z-10 rounded-full border border-emerald-200 bg-emerald-50/90 px-2 py-0.5 text-[10px] font-bold text-emerald-700 backdrop-blur-xl animate-label-float dark:border-emerald-900 dark:bg-emerald-950/90 dark:text-emerald-300">{isAdded ? '+ 已加入' : '已更新'}</span>
                    )}
                    <div className="relative h-28 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 pointer-events-none">
                      <img src={resolveAssetUrl(stop.imageUrl)} alt={stop.name} className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      <div className="absolute top-2 left-2 flex items-center gap-1.5">
                        <span className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold border backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 text-zinc-900 dark:text-zinc-100 shadow-sm">{formatTime(stop)}</span>
                      </div>
                      {kind === 'optimized' && <div className="absolute bottom-2 right-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">最佳順序</div>}
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-snug mb-2 transition-colors group-hover/card:text-primary">{stop.name}</h4>
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium border bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800"><CatIcon className="size-3.5 text-zinc-500 dark:text-zinc-400" />{cat.label}</span>
                        <span className={`inline-flex items-center gap-1 rounded-md border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 px-1.5 py-0.5 text-[10px] text-zinc-500 dark:text-zinc-400 ${isUpdated ? 'animate-number-pop ring-1 ring-emerald-400/25' : ''}`}><Clock className="size-3" />{formatDuration(stop)}</span>
                      </div>
                      {stop.note && <p className={`text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-1.5 border border-zinc-100 dark:border-zinc-800/30 ${isUpdated ? 'animate-scale-up' : 'line-clamp-2'}`}>{stop.note}</p>}
                      {stop.address && <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-900 text-[10px] text-zinc-400 dark:text-zinc-500"><p className="flex items-center gap-1"><MapPin className="size-3 shrink-0" /><span className="truncate">{stop.address}</span></p></div>}
                    </div>
                  </div>

                  {idx < day.stops.length - 1 && day.transits[idx] && (
                    <div className="mx-auto flex items-center gap-2 py-1">
                      <div className="h-4 border-l-2 border-dashed border-zinc-300 dark:border-zinc-700" />
                      <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium shadow-[0_1px_3px_rgba(0,0,0,0.01)] backdrop-blur-sm transition-colors ${day.transits[idx].locked ? 'border-emerald-300/60 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300' : 'border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300'}`}>{transitIcon(day.transits[idx].mode)}<span>{day.transits[idx].duration}</span></div>
                      <div className="h-4 border-l-2 border-dashed border-zinc-300 dark:border-zinc-700" />
                    </div>
                  )}
                </div>
              );
            })}
            <button className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 py-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 transition-all cursor-default"><Plus className="size-4" /><span>新增項目</span></button>
          </div>
        </div>
      ))}
      <button className="flex w-80 shrink-0 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-900/5 py-12 text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-all cursor-default"><Plus className="size-5 mb-1.5" /><span>新增第 {trip.days.length + 1} 天</span></button>
    </div>
  );
}
