import type { DemoPrompt, ItineraryStop, Trip } from './types';

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const osakaCastleStop: ItineraryStop = {
  id: 'd1-osaka-castle',
  name: '大阪城天守閣',
  time: { hour: 16, minute: 30 },
  duration: { hours: 1, minutes: 30 },
  category: 'play',
  imageUrl: img('photo-1590559899731-a382839e5549'),
  address: '大阪府大阪市中央區大阪城1-1',
  note: '午後光線很適合拍攝天守閣與護城河。',
  lat: 34.687315,
  lng: 135.526201
};

export const emptyTrip: Trip = {
  id: 'demo-empty',
  title: '大阪五天四夜精選行程',
  subtitle: '點擊第一個建議，開始整理大阪五天四夜行程。',
  days: []
};

export const fullOsakaTrip: Trip = {
  id: 'osaka-5d4n-demo',
  title: '大阪 5 天 4 夜自由行',
  subtitle: '道頓堀、美食街區、歷史名城與近郊慢旅行',
  days: [
    {
      dayIndex: 1,
      dateStr: 'Day 1',
      title: '難波・心齋橋初探',
      summary: '抵達大阪後以市中心美食與夜景暖身。',
      stops: [
        {
          id: 'd1-kix',
          name: '關西國際機場抵達',
          time: { hour: 10, minute: 20 },
          duration: { hours: 1, minutes: 0 },
          category: 'other',
          imageUrl: img('photo-1436491865332-7a61a109cc05'),
          address: '大阪府泉佐野市泉州空港北1',
          note: '領取 ICOCA，搭乘南海電鐵前往難波。',
          lat: 34.434722,
          lng: 135.244167
        },
        {
          id: 'd1-hotel',
          name: '難波飯店 Check-in',
          time: { hour: 13, minute: 30 },
          duration: { hours: 1, minutes: 0 },
          category: 'lodging',
          imageUrl: img('photo-1566073771259-6a8506099945'),
          address: '大阪市中央區難波周邊',
          note: '寄放行李、整理票券。',
          lat: 34.665442,
          lng: 135.500023
        },
        {
          id: 'd1-shinsaibashi',
          name: '心齋橋筋商店街',
          time: { hour: 15, minute: 0 },
          duration: { hours: 1, minutes: 10 },
          category: 'play',
          imageUrl: img('photo-1542051841857-5f90071e7989'),
          address: '大阪府大阪市中央區心齋橋筋',
          note: '逛藥妝與特色小店，保留彈性時間。',
          lat: 34.673709,
          lng: 135.501823
        },
        {
          id: 'd1-dotonbori',
          name: '道頓堀固力果看板',
          time: { hour: 18, minute: 30 },
          duration: { hours: 2, minutes: 0 },
          category: 'eat',
          imageUrl: img('photo-1601042879364-f3947d3f9c16'),
          address: '大阪府大阪市中央區道頓堀1丁目',
          note: '章魚燒、串炸與河岸夜景。',
          lat: 34.668723,
          lng: 135.501333
        }
      ],
      transits: [
        { id: 't-d1-1', mode: 'transit', duration: '南海電鐵：45分', distanceText: '45 km', priceText: '930 日圓' },
        { id: 't-d1-2', mode: 'walk', duration: '步行：12分', distanceText: '900 m' },
        { id: 't-d1-3', mode: 'walk', duration: '步行：8分', distanceText: '650 m' }
      ]
    },
    {
      dayIndex: 2,
      dateStr: 'Day 2',
      title: '梅田・中之島・夜景',
      summary: '建築、河岸咖啡與城市展望台。',
      stops: [
        {
          id: 'd2-umeda-sky',
          name: '梅田藍天大廈 空中庭園',
          time: { hour: 10, minute: 0 },
          duration: { hours: 1, minutes: 30 },
          category: 'play',
          imageUrl: img('photo-1503899036084-c55cdd92da26'),
          address: '大阪府大阪市北區大淀中1-1-88',
          note: '建議先上展望台避開午後人潮。',
          lat: 34.705295,
          lng: 135.490641
        },
        {
          id: 'd2-lucua',
          name: 'LUCUA Osaka 午餐',
          time: { hour: 12, minute: 15 },
          duration: { hours: 1, minutes: 20 },
          category: 'eat',
          imageUrl: img('photo-1555396273-367ea4eb4db5'),
          address: '大阪府大阪市北區梅田3-1-3',
          note: '美食樓層選擇多，適合雨天備案。',
          lat: 34.702485,
          lng: 135.495951
        },
        {
          id: 'd2-nakanoshima',
          name: '中之島公園散步',
          time: { hour: 14, minute: 20 },
          duration: { hours: 1, minutes: 20 },
          category: 'play',
          imageUrl: img('photo-1518005020951-eccb494ad742'),
          address: '大阪府大阪市北區中之島',
          note: '河岸咖啡與中央公會堂外觀拍攝。',
          lat: 34.693738,
          lng: 135.504257
        },
        {
          id: 'd2-hep',
          name: 'HEP FIVE 摩天輪',
          time: { hour: 18, minute: 0 },
          duration: { hours: 1, minutes: 0 },
          category: 'play',
          imageUrl: img('photo-1528164344705-47542687000d'),
          address: '大阪府大阪市北區角田町5-15',
          note: '夕陽到夜景轉場很漂亮。',
          lat: 34.704941,
          lng: 135.500027
        }
      ],
      transits: [
        { id: 't-d2-1', mode: 'walk', duration: '步行：10分', distanceText: '800 m' },
        { id: 't-d2-2', mode: 'transit', duration: '地鐵：16分', distanceText: '3.2 km', priceText: '190 日圓' },
        { id: 't-d2-3', mode: 'transit', duration: '地鐵：12分', distanceText: '2.7 km', priceText: '190 日圓' }
      ]
    },
    {
      dayIndex: 3,
      dateStr: 'Day 3',
      title: '天王寺・新世界・阿倍野',
      summary: '復古商圈、動物園與城市最高展望。',
      stops: [
        {
          id: 'd3-shitennoji',
          name: '四天王寺',
          time: { hour: 9, minute: 30 },
          duration: { hours: 1, minutes: 15 },
          category: 'play',
          imageUrl: img('photo-1493976040374-85c8e12f0c0e'),
          address: '大阪府大阪市天王寺區四天王寺1-11-18',
          note: '日本最古老官寺之一，適合清晨參觀。',
          lat: 34.654559,
          lng: 135.516879
        },
        {
          id: 'd3-zoo',
          name: '天王寺動物園',
          time: { hour: 11, minute: 15 },
          duration: { hours: 1, minutes: 40 },
          category: 'play',
          imageUrl: img('photo-1503919005314-30d93d07d823'),
          address: '大阪府大阪市天王寺區茶臼山町1-108',
          note: '若同行者偏好購物，可作為可刪除彈性點。',
          lat: 34.650055,
          lng: 135.509697
        },
        {
          id: 'd3-shinsekai',
          name: '新世界・通天閣',
          time: { hour: 13, minute: 20 },
          duration: { hours: 1, minutes: 50 },
          category: 'eat',
          imageUrl: img('photo-1590253230532-a67f6bc61c9e'),
          address: '大阪府大阪市浪速區惠美須東',
          note: '串炸午餐，注意熱門店排隊。',
          lat: 34.652499,
          lng: 135.506306
        },
        {
          id: 'd3-harukas',
          name: '阿倍野 Harukas 300',
          time: { hour: 17, minute: 0 },
          duration: { hours: 1, minutes: 30 },
          category: 'play',
          imageUrl: img('photo-1536098561742-ca998e48cbcc'),
          address: '大阪府大阪市阿倍野區阿倍野筋1-1-43',
          note: '安排傍晚入場，欣賞大阪夜景。',
          lat: 34.646123,
          lng: 135.513332
        }
      ],
      transits: [
        { id: 't-d3-1', mode: 'walk', duration: '步行：14分', distanceText: '1.1 km' },
        { id: 't-d3-2', mode: 'walk', duration: '步行：9分', distanceText: '700 m' },
        { id: 't-d3-3', mode: 'walk', duration: '步行：15分', distanceText: '1.2 km' }
      ]
    },
    {
      dayIndex: 4,
      dateStr: 'Day 4',
      title: '海遊館・港區慢旅行',
      summary: '水族館、摩天輪與海風夕景。',
      stops: [
        {
          id: 'd4-kaiyukan',
          name: '大阪海遊館',
          time: { hour: 10, minute: 0 },
          duration: { hours: 2, minutes: 20 },
          category: 'play',
          imageUrl: img('photo-1583212292454-1fe6229603b7'),
          address: '大阪府大阪市港區海岸通1-1-10',
          note: '熱門時段建議事先購票。',
          lat: 34.654518,
          lng: 135.428965
        },
        {
          id: 'd4-marketplace',
          name: '天保山 Marketplace',
          time: { hour: 12, minute: 45 },
          duration: { hours: 1, minutes: 20 },
          category: 'eat',
          imageUrl: img('photo-1567521464027-f127ff144326'),
          address: '大阪府大阪市港區海岸通1-1-10',
          note: '午餐與伴手禮集中處理。',
          lat: 34.655155,
          lng: 135.429089
        },
        {
          id: 'd4-ferris',
          name: '天保山大摩天輪',
          time: { hour: 15, minute: 0 },
          duration: { hours: 0, minutes: 45 },
          category: 'play',
          imageUrl: img('photo-1500530855697-b586d89ba3ee'),
          address: '大阪府大阪市港區海岸通1-1-10',
          note: '晴天可眺望大阪灣。',
          lat: 34.656346,
          lng: 135.430916
        },
        {
          id: 'd4-cosmosquare',
          name: '咲洲宇宙塔展望台',
          time: { hour: 17, minute: 30 },
          duration: { hours: 1, minutes: 20 },
          category: 'play',
          imageUrl: img('photo-1512453979798-5ea266f8880c'),
          address: '大阪府大阪市住之江區南港北1-14-16',
          note: '海港夕陽備案視天候調整。',
          lat: 34.637854,
          lng: 135.414545
        }
      ],
      transits: [
        { id: 't-d4-1', mode: 'walk', duration: '步行：3分', distanceText: '200 m' },
        { id: 't-d4-2', mode: 'walk', duration: '步行：5分', distanceText: '350 m' },
        { id: 't-d4-3', mode: 'transit', duration: '地鐵：24分', distanceText: '5.1 km', priceText: '240 日圓' }
      ]
    },
    {
      dayIndex: 5,
      dateStr: 'Day 5',
      title: '黑門市場・返程',
      summary: '最後採買與從容前往機場。',
      stops: [
        {
          id: 'd5-kuromon',
          name: '黑門市場早餐',
          time: { hour: 9, minute: 30 },
          duration: { hours: 1, minutes: 20 },
          category: 'eat',
          imageUrl: img('photo-1504674900247-0877df9cc836'),
          address: '大阪府大阪市中央區日本橋2丁目',
          note: '海鮮、草莓大福與伴手禮最後補貨。',
          lat: 34.665628,
          lng: 135.506316
        },
        {
          id: 'd5-namba',
          name: '難波 City 採買',
          time: { hour: 11, minute: 20 },
          duration: { hours: 1, minutes: 30 },
          category: 'play',
          imageUrl: img('photo-1518548419970-58e3b4079ab2'),
          address: '大阪府大阪市中央區難波5丁目',
          note: '確認行李重量，預留退稅時間。',
          lat: 34.663746,
          lng: 135.501930
        },
        {
          id: 'd5-kix',
          name: '前往關西國際機場',
          time: { hour: 14, minute: 0 },
          duration: { hours: 1, minutes: 0 },
          category: 'other',
          imageUrl: img('photo-1542296332-2e4473faf563'),
          address: '大阪府泉佐野市泉州空港北1',
          note: '建議起飛前 2.5 小時抵達機場。',
          lat: 34.434722,
          lng: 135.244167
        }
      ],
      transits: [
        { id: 't-d5-1', mode: 'walk', duration: '步行：10分', distanceText: '800 m' },
        { id: 't-d5-2', mode: 'transit', duration: '南海電鐵：45分', distanceText: '45 km', priceText: '930 日圓' }
      ]
    }
  ]
};

export const demoPrompts: DemoPrompt[] = [
  { act: 1, shortLabel: '載入五天四夜行程', text: '幫我整理大阪五天四夜精選行程', toolName: '行程整理' },
  { act: 2, shortLabel: '加入法善寺橫丁', text: '第一天晚上我想加入「法善寺橫丁夜間散步」，預計停留 45 分鐘', toolName: '新增景點' },
  { act: 3, shortLabel: '延長大阪城停留', text: '幫我把大阪城公園的停留時間改長，備註加上記得線上預約天守閣門票', toolName: '更新行程' },
  { act: 4, shortLabel: '高亮 Day2 路線', text: '從大阪城公園到天神橋筋商店街的真實路線怎麼走？', toolName: '路線規劃' },
  { act: 5, shortLabel: 'Day2 智慧排序', text: '第二天路線有點繞，幫我重新排序成更順的走法', toolName: '智慧排序' }
];
