import { Clock, MapPin, X } from 'lucide-react';
import type { ItineraryStop } from '../lib/types';
import { resolveAssetUrl } from '../lib/utils';

interface Props {
  stop: ItineraryStop | null;
  onClose: () => void;
}

export default function StopDetailModal({ stop, onClose }: Props) {
  if (!stop) return null;
  const time = `${String(stop.time.hour).padStart(2, '0')}:${String(stop.time.minute).padStart(2, '0')}`;
  return (
    <div className="fixed inset-0 z-[900] grid place-items-center bg-black/40 p-6 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-56"><img src={resolveAssetUrl(stop.imageUrl)} alt={stop.name} className="h-full w-full object-cover" /><button onClick={onClose} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/45 text-white backdrop-blur-xl"><X className="size-4" /></button></div>
        <div className="p-5">
          <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">{stop.name}</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400"><span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900"><Clock className="size-3" />{time}</span><span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900"><MapPin className="size-3" />{stop.address}</span></div>
          {stop.note && <p className="mt-4 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">{stop.note}</p>}
        </div>
      </div>
    </div>
  );
}
