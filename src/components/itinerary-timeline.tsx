import { Clock, Footprints, Hotel, MapPin, Plane, Train, Utensils } from 'lucide-react';
import type { Trip } from '../lib/types';

interface Props {
  trip: Trip;
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export default function ItineraryTimeline({ trip, selectedDay, onSelectDay }: Props) {
  const activeDay = trip.days.find((day) => day.dayIndex === selectedDay) ?? trip.days[0];
  if (!activeDay) return null;

  const iconFor = (category: string) => {
    const cls = 'size-4 text-zinc-500 dark:text-zinc-400';
    if (category === 'eat') return <Utensils className={cls} />;
    if (category === 'lodging') return <Hotel className={cls} />;
    if (category === 'other') return <Plane className={cls} />;
    return <MapPin className={cls} />;
  };

  return (
    <div className="grid grid-cols-[220px_1fr] gap-5">
      <aside className="rounded-3xl border border-zinc-200/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/55">
        <div className="px-2 pb-2 text-xs font-black text-zinc-500 dark:text-zinc-400">每日細節</div>
        <div className="space-y-1">
          {trip.days.map((day) => <button key={day.dayIndex} onClick={() => onSelectDay(day.dayIndex)} className={`w-full rounded-2xl px-3 py-2 text-left text-xs font-bold transition-all ${day.dayIndex === selectedDay ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950' : 'text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900'}`}>{day.dateStr}<span className="ml-2 font-medium opacity-70">{day.title}</span></button>)}
        </div>
      </aside>
      <main className="rounded-3xl border border-zinc-200/70 bg-white/70 p-5 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/55">
        <h2 className="text-xl font-black tracking-tight text-zinc-950 dark:text-white">{activeDay.title}</h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{activeDay.summary}</p>
        <div className="mt-6 space-y-4">
          {activeDay.stops.map((stop, idx) => <div key={stop.id} className="relative flex gap-4 animate-fade-in-up" style={{ animationDelay: `${idx * 70}ms` }}>
            <div className="flex flex-col items-center"><div className="grid size-10 place-items-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">{iconFor(stop.category)}</div>{idx < activeDay.stops.length - 1 && <div className="my-2 h-12 border-l border-dashed border-zinc-300 dark:border-zinc-700" />}</div>
            <div className="min-w-0 flex-1 rounded-2xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"><div className="flex items-center justify-between gap-3"><h3 className="font-bold text-zinc-950 dark:text-white">{stop.name}</h3><span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400"><Clock className="size-3" />{String(stop.time.hour).padStart(2, '0')}:{String(stop.time.minute).padStart(2, '0')}</span></div>{stop.note && <p className="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{stop.note}</p>}{idx < activeDay.transits.length && <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300"><Train className="size-3" />{activeDay.transits[idx].duration}</div>}</div>
          </div>)}
        </div>
      </main>
    </div>
  );
}
