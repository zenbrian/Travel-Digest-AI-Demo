export type StopCategory = 'play' | 'eat' | 'lodging' | 'other';
export type TransitMode = 'drive' | 'transit' | 'walk';
export type ViewMode = 'kanban' | 'map';
export type DemoAct = 0 | 1 | 2 | 3 | 4 | 5;
export type HighlightKind = 'added' | 'updated' | 'optimized';

export interface ItineraryTime {
  hour: number;
  minute: number;
}

export interface ItineraryDuration {
  hours: number;
  minutes: number;
}

export interface ItineraryStop {
  id: string;
  name: string;
  time: ItineraryTime;
  duration: ItineraryDuration;
  category: StopCategory;
  imageUrl: string;
  address?: string;
  phone?: string;
  note?: string;
  hasAlert?: boolean;
  mapUrl?: string;
  lat?: number;
  lng?: number;
}

export interface TransitInfo {
  id: string;
  mode: TransitMode;
  duration: string;
  distanceText?: string;
  priceText?: string;
  polyline?: string;
  distanceValue?: number;
  durationValue?: number;
  locked?: boolean;
}

export interface DayItinerary {
  dayIndex: number;
  dateStr: string;
  title: string;
  summary: string;
  stops: ItineraryStop[];
  transits: TransitInfo[];
}

export interface Trip {
  id: string;
  title: string;
  subtitle: string;
  days: DayItinerary[];
}

export interface DemoState {
  act: DemoAct;
  trip: Trip;
  viewMode: ViewMode;
  selectedDay: number;
  selectedRoute?: { fromId: string; toId: string };
  highlight?: Record<string, HighlightKind>;
  optimized: boolean;
  generated: boolean;
}

export interface DemoPrompt {
  act: DemoAct;
  shortLabel: string;
  text: string;
  toolName: string;
}

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  toolName?: string;
}
