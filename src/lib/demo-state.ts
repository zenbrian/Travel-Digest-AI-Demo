import { emptyTrip } from './demo-data';
import { itineraryDay2SortedTrip, itineraryOriginTrip } from './itinerary-json-data';
import type { DemoAct, DemoState, HighlightKind, ItineraryStop, Trip } from './types';

const highlightedRoute = { fromId: 'stop-1-0-1789110184237', toId: 'stop-1-1-1789110184237' };
const updatedStopId = 'stop-1-0-1789110184237';

const bonusStop: ItineraryStop = {
  id: 'stop-demo-bonus-hozenji-yokocho',
  name: '法善寺橫丁夜間散步',
  time: { hour: 21, minute: 40 },
  duration: { hours: 0, minutes: 45 },
  category: 'play',
  imageUrl: '/place-images/stop-0-2-1789110184237.jpg',
  address: '1 Chome Nanba, Chuo Ward, Osaka, 542-0076日本',
  note: '石板小巷與水掛不動尊，適合作為道頓堀夜遊的精緻收尾。',
  lat: 34.667812,
  lng: 135.502115
};

export const createInitialDemoState = (): DemoState => ({
  act: 0,
  trip: cloneTrip(emptyTrip),
  viewMode: 'kanban',
  selectedDay: 1,
  selectedRoute: undefined,
  highlight: {},
  optimized: false,
  generated: false
});

export const cloneTrip = (trip: Trip): Trip => JSON.parse(JSON.stringify(trip)) as Trip;

export const createGeneratedTrip = (): Trip => cloneTrip(itineraryOriginTrip);

const withHighlight = (id: string, kind: HighlightKind): Record<string, HighlightKind> => ({ [id]: kind });

export function applyDemoAct(previous: DemoState, act: DemoAct): DemoState {
  switch (act) {
    case 1:
      return {
        ...previous,
        act,
        trip: createGeneratedTrip(),
        viewMode: 'kanban',
        selectedDay: 1,
        selectedRoute: undefined,
        highlight: {},
        optimized: false,
        generated: true
      };
    case 2: {
      const trip = addBonusStop(previous.trip.days.length ? previous.trip : createGeneratedTrip());
      return {
        ...previous,
        act,
        trip,
        viewMode: 'kanban',
        selectedDay: 1,
        selectedRoute: undefined,
        highlight: withHighlight(bonusStop.id, 'added'),
        optimized: false,
        generated: true
      };
    }
    case 3: {
      const trip = updateCastlePark(previous.trip.days.length ? previous.trip : createGeneratedTrip());
      return {
        ...previous,
        act,
        trip,
        viewMode: 'kanban',
        selectedDay: 2,
        selectedRoute: undefined,
        highlight: withHighlight(updatedStopId, 'updated'),
        optimized: false,
        generated: true
      };
    }
    case 4:
      return {
        ...previous,
        act,
        trip: previous.trip.days.length ? previous.trip : createGeneratedTrip(),
        viewMode: 'map',
        selectedDay: 2,
        selectedRoute: highlightedRoute,
        highlight: {},
        optimized: false,
        generated: true
      };
    case 5: {
      const trip = applyDay2Sorted(previous.trip.days.length ? previous.trip : createGeneratedTrip());
      return {
        ...previous,
        act,
        trip,
        viewMode: 'map',
        selectedDay: 2,
        selectedRoute: undefined,
        highlight: {
          'stop-1-5-1789110184237': 'optimized',
          'stop-1-4-1789110184237': 'optimized',
          'stop-1-3-1789110184237': 'optimized',
          'stop-1-2-1789110184237': 'optimized'
        },
        optimized: true,
        generated: true
      };
    }
    default:
      return createInitialDemoState();
  }
}

export function clearHighlight(state: DemoState): DemoState {
  return { ...state, highlight: {} };
}


function addBonusStop(input: Trip): Trip {
  const trip = cloneTrip(input);
  const day = trip.days.find((d) => d.dayIndex === 1);
  if (!day || day.stops.some((stop) => stop.id === bonusStop.id)) return trip;
  day.stops.push(cloneTrip({ id: 'tmp', title: '', subtitle: '', days: [{ dayIndex: 0, dateStr: '', title: '', summary: '', stops: [bonusStop], transits: [] }] }).days[0].stops[0]);
  day.transits.push({ id: 'transit-demo-hozenji-yokocho', mode: 'walk', duration: '步行：6 分鐘', distanceText: '450 公尺' });
  return trip;
}

function updateCastlePark(input: Trip): Trip {
  const trip = cloneTrip(input);
  const stop = trip.days.flatMap((d) => d.stops).find((s) => s.id === updatedStopId);
  if (stop) {
    stop.duration = { hours: 2, minutes: 30 };
    stop.note = '可外觀拍照或入天守閣參觀；記得線上預約天守閣門票，並保留時間看西之丸庭園。';
  }
  return trip;
}

function applyDay2Sorted(input: Trip): Trip {
  const trip = cloneTrip(input);
  const sortedDay2 = cloneTrip(itineraryDay2SortedTrip).days.find((day) => day.dayIndex === 2);
  if (!sortedDay2) return trip;

  const dayIndex = trip.days.findIndex((day) => day.dayIndex === 2);
  if (dayIndex === -1) {
    trip.days.push(sortedDay2);
  } else {
    trip.days[dayIndex] = sortedDay2;
  }
  trip.subtitle = 'Day 2 已重新排序，路線與景點順序已同步更新。';
  return trip;
}

export const getAssistantReply = (act: DemoAct): string => {
  switch (act) {
    case 1:
      return '已建立大阪五天四夜行程，並整理每日景點、照片與真實路線。';
    case 2:
      return '已加入「法善寺橫丁夜間散步」，並以柔和提示標示新增結果。';
    case 3:
      return '已更新大阪城公園：停留時間延長，並加上線上預約天守閣與西之丸庭園備註。';
    case 4:
      return '已切到地圖並高亮 Day 2 大阪城公園到天神橋筋商店街的實際路線。';
    case 5:
      return '已完成 Day 2 智慧排序，景點順序與路線已更新，並保留原路線做視覺對照。';
    default:
      return '嗨，我是 Travel Digest AI。點擊下方建議即可開始規劃行程。';
  }
};
