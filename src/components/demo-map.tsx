import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Car, ChevronRight, Clock, Footprints, Hotel, Layers, MapPin, Plane, Route, Send, Sparkles, Train, Utensils } from 'lucide-react';
import { itineraryOriginTrip } from '../lib/itinerary-json-data';
import type { DayItinerary, HighlightKind, ItineraryStop, StopCategory, TransitMode, Trip } from '../lib/types';
import { resolveAssetUrl } from '../lib/utils';

interface Props {
  trip: Trip;
  selectedDay: number;
  highlight?: Record<string, HighlightKind>;
  selectedRoute?: { fromId: string; toId: string };
  optimized: boolean;
  onSelectDay: (day: number) => void;
}

const cartoKey = (import.meta.env.VITE_CARTO_API_KEY as string | undefined) || 'cb1_3gqo_2_43e895b036e140d9ca923985';
const lightTiles = `https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png?api_key=${cartoKey}`;

function pinIcon(num: number, optimized: boolean) {
  return L.divIcon({
    className: 'demo-pin',
    html: `<div class="demo-pin-inner ${optimized ? 'optimized' : ''}">${num}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
}

function decodeGooglePolyline(encoded: string): L.LatLngTuple[] {
  let index = 0;
  let lat = 0;
  let lng = 0;
  const coordinates: L.LatLngTuple[] = [];

  while (index < encoded.length) {
    let shift = 0;
    let result = 0;
    let byte = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20 && index < encoded.length);

    lat += (result & 1) ? ~(result >> 1) : (result >> 1);
    shift = 0;
    result = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20 && index < encoded.length);

    lng += (result & 1) ? ~(result >> 1) : (result >> 1);
    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
}

function transitPath(transitPolyline: string | undefined, fallback: L.LatLngTuple[]): L.LatLngTuple[] {
  if (!transitPolyline) return fallback;
  try {
    const decoded = decodeGooglePolyline(transitPolyline);
    return decoded.length >= 2 ? decoded : fallback;
  } catch {
    return fallback;
  }
}

function stopLatLng(stop: ItineraryStop): L.LatLngTuple | null {
  if (typeof stop.lat !== 'number' || typeof stop.lng !== 'number') return null;
  return [stop.lat, stop.lng];
}

function buildRouteSegments(day: DayItinerary | undefined): L.LatLngTuple[][] {
  if (!day) return [];
  const segments: L.LatLngTuple[][] = [];
  day.stops.slice(0, -1).forEach((stop, index) => {
    const nextStop = day.stops[index + 1];
    const from = stopLatLng(stop);
    const to = stopLatLng(nextStop);
    const fallback = from && to ? [from, to] : [];
    const path = transitPath(day.transits[index]?.polyline, fallback);
    if (path.length >= 2) segments.push(path);
  });
  return segments;
}

function formatRouteDistance(meters: number) {
  if (!meters) return '—';
  return meters >= 1000 ? `${(meters / 1000).toFixed(1)} 公里` : `${meters} 公尺`;
}

function formatRouteDuration(seconds: number) {
  if (!seconds) return '—';
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} 分鐘`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} 小時 ${rest} 分鐘` : `${hours} 小時`;
}

function formatStopTime(stop: ItineraryStop) {
  return `${String(stop.time.hour).padStart(2, '0')}:${String(stop.time.minute).padStart(2, '0')}`;
}

function formatStopDuration(stop: ItineraryStop) {
  if (stop.category === 'lodging' && stop.duration.hours === 0 && stop.duration.minutes === 0) return '住宿過夜';
  const parts: string[] = [];
  if (stop.duration.hours) parts.push(`${stop.duration.hours} 小時`);
  if (stop.duration.minutes) parts.push(`${stop.duration.minutes} 分鐘`);
  return parts.length ? `停留 ${parts.join(' ')}` : '短暫停留';
}

function categoryIcon(category: StopCategory) {
  const cls = 'size-3.5 text-zinc-500';
  if (category === 'eat') return <Utensils className={cls} />;
  if (category === 'play') return <MapPin className={cls} />;
  if (category === 'lodging') return <Hotel className={cls} />;
  return <Plane className={cls} />;
}

function transitIcon(mode: TransitMode) {
  const cls = 'size-3.5 text-zinc-500';
  if (mode === 'transit') return <Train className={cls} />;
  if (mode === 'walk') return <Footprints className={cls} />;
  return <Car className={cls} />;
}

function transitText(mode: TransitMode, duration: string) {
  const label = mode === 'drive' ? '車程' : mode === 'transit' ? '地鐵' : '步行';
  return `${label} ${duration.replace('車程：', '').replace('地鐵：', '').replace('步行：', '')}`;
}

export default function DemoMap({ trip, selectedDay, highlight = {}, selectedRoute, optimized, onSelectDay }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const layerGroup = useRef<L.LayerGroup | null>(null);
  const activeDay = useMemo(() => trip.days.find((d) => d.dayIndex === selectedDay) ?? trip.days[0], [trip, selectedDay]);
  const originalComparisonDay = useMemo(() => itineraryOriginTrip.days.find((day) => day.dayIndex === selectedDay), [selectedDay]);
  const stops = activeDay?.stops ?? [];
  const showOptimizationComparison = optimized && selectedDay === 2 && !!originalComparisonDay;
  const dayDistance = useMemo(() => activeDay?.transits.reduce((sum, transit) => sum + (transit.distanceValue ?? 0), 0) ?? 0, [activeDay]);
  const dayDuration = useMemo(() => activeDay?.transits.reduce((sum, transit) => sum + (transit.durationValue ?? 0), 0) ?? 0, [activeDay]);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;
    const map = L.map(mapRef.current, { zoomControl: true, attributionControl: false, scrollWheelZoom: true }).setView([34.68, 135.50], 12);
    L.tileLayer(lightTiles, {
      subdomains: 'abcd',
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    mapInstance.current = map;
    layerGroup.current = L.layerGroup().addTo(map);
    setTimeout(() => map.invalidateSize(), 80);
    return () => {
      map.remove();
      mapInstance.current = null;
      layerGroup.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    const group = layerGroup.current;
    if (!map || !group) return;
    group.clearLayers();
    if (stops.length === 0) return;

    const geoStops = stops.filter((stop) => typeof stop.lat === 'number' && typeof stop.lng === 'number');
    const latlngs = geoStops.map((stop) => [stop.lat!, stop.lng!] as L.LatLngTuple);
    const routeLayers: L.Polyline[] = [];

    if (showOptimizationComparison) {
      buildRouteSegments(originalComparisonDay).forEach((path) => {
        const line = L.polyline(path, {
          color: '#f43f5e',
          weight: 3,
          opacity: 0.58,
          dashArray: '6 8',
          lineCap: 'round',
          lineJoin: 'round'
        }).addTo(group);
        line.bringToBack();
        routeLayers.push(line);
      });
    }

    stops.slice(0, -1).forEach((stop, index) => {
      const nextStop = stops[index + 1];
      const transit = activeDay?.transits[index];
      const hasFallbackCoords = typeof stop.lat === 'number' && typeof stop.lng === 'number' && typeof nextStop.lat === 'number' && typeof nextStop.lng === 'number';
      const fallback: L.LatLngTuple[] = hasFallbackCoords ? [[stop.lat!, stop.lng!], [nextStop.lat!, nextStop.lng!]] : [];
      const path = transitPath(transit?.polyline, fallback);
      if (path.length < 2) return;
      const isSelected = !!selectedRoute && stop.id === selectedRoute.fromId && nextStop.id === selectedRoute.toId;
      const line = L.polyline(path, {
        color: isSelected ? '#f59e0b' : optimized ? '#10b981' : '#60a5fa',
        weight: isSelected ? 7 : optimized ? 5 : 4,
        opacity: isSelected ? 0.98 : optimized ? 0.94 : 0.86,
        dashArray: transit?.polyline ? undefined : '10 8',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(group);
      if (optimized) line.bringToFront();
      routeLayers.push(line);
    });

    geoStops.forEach((stop) => {
      const originalIndex = stops.findIndex((candidate) => candidate.id === stop.id);
      const marker = L.marker([stop.lat!, stop.lng!], { icon: pinIcon(originalIndex + 1, optimized || highlight[stop.id] === 'optimized') }).addTo(group);
      marker.bindPopup(`<b>${originalIndex + 1}. ${stop.name}</b><br/><span>${String(stop.time.hour).padStart(2, '0')}:${String(stop.time.minute).padStart(2, '0')} · ${stop.address ?? ''}</span>`);
    });

    if (latlngs.length === 0 && routeLayers.length === 0) return;
    const selectedLayer = selectedRoute ? routeLayers.find((_, index) => stops[index]?.id === selectedRoute.fromId && stops[index + 1]?.id === selectedRoute.toId) : undefined;
    const seedBounds = latlngs.length > 0 ? L.latLngBounds(latlngs) : routeLayers[0].getBounds();
    const routeBounds = selectedLayer?.getBounds() ?? routeLayers.reduce((bounds, layer) => bounds.extend(layer.getBounds()), seedBounds);
    map.fitBounds(routeBounds, { padding: [50, 50], maxZoom: selectedRoute ? 14 : 13 });
    setTimeout(() => map.invalidateSize(), 160);
  }, [stops, selectedRoute, optimized, highlight, showOptimizationComparison, originalComparisonDay, activeDay]);

  return (
    <div className="relative h-[calc(100vh-170px)] min-h-[620px] overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
      <div ref={mapRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[450] h-32 bg-gradient-to-b from-zinc-950/55 to-transparent" />

      <div className="absolute left-5 top-5 z-[500] flex max-h-[calc(100%-40px)] w-[460px] flex-col rounded-3xl border border-zinc-200/70 bg-white/94 p-4 text-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl animate-fade-in-up dark:border-zinc-800/70 dark:bg-white/94 dark:text-zinc-950">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm font-black"><Layers className="size-4 text-zinc-600" />每日細節地圖</div>
            <p className="mt-1 text-[11px] text-zinc-500">大阪每日路線與景點順序</p>
          </div>
          {optimized && <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-700">已最佳化</span>}
        </div>

        <div className="mt-3 grid grid-cols-5 gap-1.5">
          {trip.days.map((day) => (
            <button key={day.dayIndex} onClick={() => onSelectDay(day.dayIndex)} className={`min-w-0 rounded-full border px-2 py-1.5 text-center text-[10px] font-bold leading-none transition-all ${selectedDay === day.dayIndex ? 'border-zinc-950 bg-zinc-950 text-white shadow-sm' : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100'}`}>D{day.dayIndex}</button>
          ))}
        </div>

        {activeDay && (
          <div className="mt-3 min-h-0 overflow-y-auto pr-1 scrollbar-thin">
            <div className="mb-4 rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-3">
              <div className="flex items-center gap-2 text-sm font-bold"><MapPin className="size-4 text-pink-500" />{activeDay.title}</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
                <div className="rounded-xl border border-zinc-200 bg-white p-2"><b className="block text-sm text-zinc-900">{activeDay.stops.length}</b><span className="text-zinc-500">景點</span></div>
                <div className="rounded-xl border border-zinc-200 bg-white p-2"><b className="block text-sm text-zinc-900">{formatRouteDistance(dayDistance)}</b><span className="text-zinc-500">路程</span></div>
                <div className="rounded-xl border border-zinc-200 bg-white p-2"><b className="block text-sm text-zinc-900">{formatRouteDuration(dayDuration)}</b><span className="text-zinc-500">交通</span></div>
              </div>
            </div>

            <div className="relative pl-7">
              <div className="absolute left-4 top-4 bottom-4 w-px border-l border-dashed border-zinc-300" />
              <div className="space-y-4">
                {activeDay.stops.map((stop, idx) => {
                  const transit = activeDay.transits[idx];
                  const kind = highlight[stop.id];
                  return (
                    <div key={stop.id} className="relative">
                      <div className="absolute -left-[30px] top-9 z-10 grid size-8 place-items-center rounded-full border border-zinc-200 bg-white text-xs font-bold text-zinc-900 shadow-sm">
                        {idx + 1}
                      </div>

                      <div className={`overflow-hidden rounded-2xl border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all ${kind === 'optimized' ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-zinc-200/80'}`}>
                        <div className="flex min-h-32">
                          <div className="relative w-32 shrink-0 overflow-hidden bg-zinc-100">
                            <img src={resolveAssetUrl(stop.imageUrl)} alt={stop.name} className="h-full w-full object-cover" loading="lazy" />
                            <div className="absolute left-2 top-2 grid size-6 place-items-center rounded-full bg-zinc-950/80 text-[11px] font-bold text-white backdrop-blur-sm">{idx + 1}</div>
                          </div>
                          <div className="relative min-w-0 flex-1 p-3 pr-11">
                            <div className="mb-2 flex items-center gap-2">
                              <span className="grid size-7 place-items-center rounded-full border border-zinc-200 bg-zinc-100">{categoryIcon(stop.category)}</span>
                              <span className="text-sm font-black text-zinc-900">{formatStopTime(stop)}</span>
                              {kind === 'optimized' && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">最佳順序</span>}
                            </div>
                            <h3 className="line-clamp-2 text-sm font-black leading-5 text-zinc-950">{stop.name}</h3>
                            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-500">
                              <span>{formatStopDuration(stop)}</span>
                              {stop.note && <span className="max-w-[190px] truncate rounded-md bg-zinc-100 px-1.5 py-0.5">{stop.note}</span>}
                            </div>
                            {stop.address && <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-400"><MapPin className="size-3 shrink-0" /><span className="truncate">{stop.address}</span></div>}
                            <div className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm"><Send className="size-3.5 rotate-45" /></div>
                          </div>
                        </div>
                      </div>

                      {transit && idx < activeDay.stops.length - 1 && (
                        <div className="relative my-3 pl-3">
                          <button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-zinc-500 shadow-sm transition hover:bg-zinc-50">
                            {transitIcon(transit.mode)}
                            <span>{transitText(transit.mode, transit.duration)}</span>
                            <ChevronRight className="size-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {optimized && !showOptimizationComparison && (
        <div className="absolute bottom-5 left-1/2 z-[500] -translate-x-1/2 rounded-full border border-emerald-400/20 bg-zinc-950/80 px-5 py-3 text-sm font-bold text-white shadow-2xl backdrop-blur-2xl animate-scale-up">
          <Sparkles className="mr-2 inline size-4 text-emerald-300" />路線已更新，最佳化路網以綠色高亮呈現
        </div>
      )}

      {selectedRoute && (
        <div className="absolute bottom-5 right-5 z-[500] rounded-2xl border border-amber-400/20 bg-zinc-950/80 px-4 py-3 text-xs text-amber-100 shadow-xl backdrop-blur-2xl"><Route className="mr-2 inline size-4" />高亮：大阪城公園 → 天神橋筋</div>
      )}
    </div>
  );
}
