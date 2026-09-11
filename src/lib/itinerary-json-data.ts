import type { Trip } from './types';

export const itineraryOriginTrip: Trip = {
  "id": "trip-1789110191139",
  "title": "大阪五天四夜精選行程",
  "subtitle": "道頓堀、美食街區、歷史名城與近郊慢旅行",
  "days": [
    {
      "dayIndex": 1,
      "dateStr": "Day 1",
      "title": "抵達大阪｜難波道頓堀夜遊",
      "summary": "抵達大阪｜難波道頓堀夜遊",
      "stops": [
        {
          "id": "stop-0-0-1789110184237",
          "name": "關西國際機場 → 大阪市區飯店",
          "time": {
            "hour": 14,
            "minute": 0
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "other",
          "imageUrl": "/place-images/stop-0-0-1789110184237.jpg",
          "address": "1 Rinkuoraikita, Izumisano, Osaka 598-0048日本",
          "note": "抵達後前往飯店辦理入住，建議保留彈性時間。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=9589354795952735103&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.411451,
          "lng": 135.2998282
        },
        {
          "id": "stop-0-1-1789110184237",
          "name": "黑門市場",
          "time": {
            "hour": 16,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-0-1-1789110184237.jpg",
          "address": "2-chōme-4-1 Nipponbashi, Chuo Ward, Osaka, 542-0073日本",
          "note": "可安排輕食與小吃，感受大阪庶民美食氛圍。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=12402117845945925953&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.665351099999995,
          "lng": 135.5062417
        },
        {
          "id": "stop-0-2-1789110184237",
          "name": "道頓堀",
          "time": {
            "hour": 18,
            "minute": 30
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-0-2-1789110184237.jpg",
          "address": "1 Chome-9 Dotonbori, Chuo Ward, Osaka, 542-0071日本",
          "note": "拍攝固力果跑跑人、逛街與河畔夜景。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13311254180582368656&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6687234,
          "lng": 135.5012971
        },
        {
          "id": "stop-0-3-1789110184237",
          "name": "道頓堀晚餐：大阪燒／章魚燒",
          "time": {
            "hour": 20,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-0-3-1789110184237.jpg",
          "address": "1-chōme-6-7 Dōtonbori, Chuo Ward, Osaka, 542-0086日本",
          "note": "建議選擇人氣大阪燒或章魚燒名店。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=2130839552230731987&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6687742,
          "lng": 135.5027298
        }
      ],
      "transits": [
        {
          "id": "transit-1-0-1789110185678",
          "mode": "drive",
          "duration": "車程：43 分鐘",
          "polyline": "{_`qEmxxxXuDfFg@v@uJkLSa@Ki@@o@Hc@`@u@~A{BhA{Az@oAgJqKqBeCi@eAg@eBQoAMi@cAoOGk@WwAJ[k@}C_BiKk@cDgAaEqBkGsB}EsBeEgBcDiC_EcN}RkCoDaDwDqFqFsDoDQScJ{IuAiAqD_CmEaCcBmAcCsBeCaCk@o@qB_ByBuA_GuCmIsDoHyCaJkDaB{@yAeAaAaAsAaBiAmB{@oBs@aCe@wBW}Bk@}IOsAi@cDcA_EiAmDyAwD_BiDqBoDqCiEyCwDwBaC_C{B_DcC}IkGaBgAwEiDoLkI_DoBgFmCyD}B_HaFuf@i^wCaC{AkBcAwAmAsB}@qB}BwG{@iCo@cBoAsDw@iBsA{BiAsAaB{AcUoPoBcAmBu@aDy@{Ck@qBUwBGuBDwNjAuBDcBIkC]yVeFar@mNoDs@mD{@oAa@mAk@cBeA{AsAmAwAqKkOsBeDsAcCaBuDwC}HmAeCoAiBqAyA{BkBmB_BmAsAeA{AsAoCq@uBcHeW_AkE[yBM_CAeBFqFCuCSsC]_Ck@_CUu@y@mB}@eBqGgKgA{Bm@_B_@qAiBmIo@uB{@qBy@wAsAiBmK_MoEcF}CgCkF{DwBmBua@_b@}AoAyAw@yAe@mASwAIsFEqAKm@IcBe@yAq@iAy@yA{AmEoF}A}AiCqBkEyCcF}CiOwIaGcEqCmBaCoAoI{DmRoKiDgB_B}@gAs@iBaB}@}@mBkCuEsHoC{DaA_AoA_AgAi@}Bu@_XeH{B}@eBgAcB}AaBwBqWu_@{AkBkAkAuAeAy@g@eHeDqBw@w`@{KqBu@sBeAsBkAkAe@}A_@wAOcJMuCFcBNuJrAeBJeB?gBOoAWeA[iBy@}AiAsBkBaQwPqBaBuAw@gA_@y@UkBUqDB}k@tA}BZ{A\\qDtAeBp@sARqAJ}EJuALmAXgAf@gAx@mApAgJlLqOnS{@zAo@|Ao@vBeSlw@o@bDQ~AIzB?jFHvJAlAOvAOv@YjA[p@o@|@s@t@eAn@cBj@akAp\\aDt@iBNeACoAU{@[YBk@_@m@m@eByBeB}BmAmAiAs@sAa@{@McAEcADmGl@kG^cN~AyADq@EaAOgA_@cEyB_FmCu}@}f@cAc@qAY{AGaAF}@NaA^w@f@}@bAiA`BuAtA{@j@mBp@eCjAoDnBs@X_APu@Du@CaAUiAg@{D{Bs@k@g@i@a@q@_@cAe@{Bg@sCe@sAg@}@u@u@qAcAwAgA]a@o@sASeACq@@_AJ_Ah@qB~A_FHYN]Lm@BeAGqAMo@Sm@Yi@{@}@u@e@uIwE{@k@_@_@a@m@[y@o@iCwJ}a@{D{NsEoRaAmE{@{Ce@sA{@gB_AqAsJkLi@y@yHeNqG_KcUa[g@y@]u@_@mAa@qBqFk^q@aGc@qFg@uKkAed@MkH?gQB_BLsBDeKFg]AiCDa@BwFFw@Ty@Zi@f@a@t@UtAG|JUZSlMIpMJdFH^F|CDTUfEDhITr@Z~@TbCP^JLJn@TlAHn@DG|DxIRg@hJKvD",
          "distanceText": "46.0 公里",
          "distanceValue": 45990,
          "durationValue": 2589
        },
        {
          "id": "transit-1-1-1789110185746",
          "mode": "walk",
          "duration": "步行：12 分鐘",
          "polyline": "iqqrEy`azXKAALqGIC`@OPCz@CLA~FDHCrDAV?bC?zAEHAdCyGLgA@",
          "distanceText": "802 公尺",
          "distanceValue": 802,
          "durationValue": 698
        },
        {
          "id": "transit-1-2-1789110185801",
          "mode": "walk",
          "duration": "步行：2 分鐘",
          "polyline": "qfrrEcb`zX?_H",
          "distanceText": "131 公尺",
          "distanceValue": 131,
          "durationValue": 109
        }
      ]
    },
    {
      "dayIndex": 2,
      "dateStr": "Day 2",
      "title": "大阪經典市區｜大阪城、梅田、天神橋",
      "summary": "大阪經典市區｜大阪城、梅田、天神橋",
      "stops": [
        {
          "id": "stop-1-0-1789110184237",
          "name": "大阪城公園",
          "time": {
            "hour": 9,
            "minute": 0
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-0-1789110184237.jpg",
          "address": "Osakajo, Chuo Ward, Osaka, 540-0002日本",
          "note": "可外觀拍照或入天守閣參觀。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=7491349504525130123&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6864797,
          "lng": 135.5262114
        },
        {
          "id": "stop-1-1-1789110184237",
          "name": "天神橋筋商店街",
          "time": {
            "hour": 11,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-1-1789110184237.jpg",
          "address": "三丁目, 2-chōme-3 Tenjinbashi, Kita Ward, Osaka, 530-0041日本",
          "note": "大阪最長商店街之一，適合邊逛邊吃。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=10590307626199221847&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.7025467,
          "lng": 135.51145409999998
        },
        {
          "id": "stop-1-2-1789110184237",
          "name": "大阪天婦羅／定食",
          "time": {
            "hour": 13,
            "minute": 15
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-1-2-1789110184237.jpg",
          "address": "日本〒542-0074 Osaka, Chuo Ward, Sennichimae, 1-chōme−1−７ 1F",
          "note": "安排日式定食補充體力。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=16526960049136680163&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6680901,
          "lng": 135.50532619999998
        },
        {
          "id": "stop-1-3-1789110184237",
          "name": "梅田空中庭園展望台",
          "time": {
            "hour": 14,
            "minute": 45
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-3-1789110184237.jpg",
          "address": "日本〒531-6039 Osaka, Kita Ward, Ōyodonaka, 1-chōme−1−８８ 梅田スカイビル",
          "note": "欣賞大阪市景與黃昏景色很適合。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=5170383595001406343&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.705437499999995,
          "lng": 135.49032789999998
        },
        {
          "id": "stop-1-4-1789110184237",
          "name": "梅田百貨公司／地下街逛街",
          "time": {
            "hour": 16,
            "minute": 30
          },
          "duration": {
            "hours": 2,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-4-1789110184237.png",
          "address": "8-7 Kakudachō, Kita Ward, Osaka, 530-8350日本",
          "note": "可加入 LUCUA、阪急、HEP FIVE 等百貨與地下街購物行程。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13590576495565490093&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.7028186,
          "lng": 135.4985323
        },
        {
          "id": "stop-1-5-1789110184237",
          "name": "梅田串燒屋",
          "time": {
            "hour": 19,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-1-5-1789110184237.jpg",
          "address": "日本〒530-0018 Osaka, Kita Ward, Komatsubarachō, 1−１６ モコビル 4F",
          "note": "推薦串燒、炸物、啤酒等日式居酒屋菜色。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=11269336829134438785&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.702520299999996,
          "lng": 135.5010177
        }
      ],
      "transits": [
        {
          "id": "transit-2-0-1789110187142",
          "mode": "transit",
          "duration": "地鐵：46 分鐘",
          "polyline": "ouurEc}dzXzED?bAFBhBBGdFKZSFKFoArC?j@DD`AXR~Fy@h@q@`BQEe@HMDGHuAZYCQJKLuFlAk@PQRIJEv@}@bRuAb_@{FGkPYk@D]PKJMMEGuBCan@bAkDD",
          "distanceText": "3.3 公里",
          "distanceValue": 3327,
          "durationValue": 2759
        },
        {
          "id": "transit-2-1-1789110187178",
          "mode": "walk",
          "duration": "步行：1 小時 1 分鐘",
          "polyline": "ezxrEqabzXDzAPDFDbGEhBC@b@fJOXBTC`@BdCEb@@z@G`DAXCrAA`@CX?FHvEGFERHNZB`@f@H?z@EH@~BGFCp@BLCjB@b@@r@DXvAv@DJxCbBn@`@b@PzAv@zAD~MJtd@NfD@ZGjA@XF`NLlVNrA@?\\hJFbQP|A@VFz@?DCjGDEpC",
          "distanceText": "4.3 公里",
          "distanceValue": 4268,
          "durationValue": 3644
        },
        {
          "id": "transit-2-2-1789110187249",
          "mode": "transit",
          "duration": "地鐵：18 分鐘",
          "polyline": "qbrrEqz`zX~D?DcFd@i^zS~@fTt@q@lFrAPlFh@lB\\VTxGx@XJjCh@n@R`@\\Zf@Pn@B`@EtAIrABJwAvWU~DKn@Yt@c@h@g@XYJ_BRkAFiBXyBn@eAD}@EuDa@}Gc@sB]}AWq@Am@JaB|@oG|DiFhDmLpGM?u@f@eA^q@FkBEsDU{AEuUoA{EOiAE{d@}@_H@mJJ}FAcFRmNr@oBFGN]DsBJ]?_@H[NOL[b@Sl@Kv@@zBKbAM^[b@]ToAVoATs@f@e@r@GTYvCGbBQd@]b@_@TkAZkEt@y@TS?_AVs@^e@ZYb@a@`AWlAOfAUj@WZe@Tk@L{@Hk@Ka@Wg@s@q@iAmB_Cc@Yy@SQDOJf@|@dAdBLf@DPOvElCHBgB}Ao@[E]JmCFiJ{BsH}BwDW",
          "distanceText": "9.3 公里",
          "distanceValue": 9334,
          "durationValue": 1058
        },
        {
          "id": "transit-2-3-1789110187287",
          "mode": "walk",
          "duration": "步行：16 分鐘",
          "polyline": "_myrEc~}yXDwA`BFPCFK@e@LO^BZg@Vk@FUAYGu@mAwILCUqCQ{BISIy@I]C]CKWeEEO@QCYrEk@HGv@IfEyAEc@DeAN[PE",
          "distanceText": "1.1 公里",
          "distanceValue": 1098,
          "durationValue": 936
        },
        {
          "id": "transit-2-4-1789110187319",
          "mode": "walk",
          "duration": "步行：4 分鐘",
          "polyline": "i{xrEuq_zX?Kf@??[EEY?@i@OQBqARQFQOk@DYJI?_@DG?o@F@?oA",
          "distanceText": "275 公尺",
          "distanceValue": 275,
          "durationValue": 263
        }
      ]
    },
    {
      "dayIndex": 3,
      "dateStr": "Day 3",
      "title": "環球影城一日遊",
      "summary": "環球影城一日遊",
      "stops": [
        {
          "id": "stop-2-0-1789110184237",
          "name": "日本環球影城（USJ）",
          "time": {
            "hour": 8,
            "minute": 0
          },
          "duration": {
            "hours": 6,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-2-0-1789110184237.jpg",
          "address": "2-chōme-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031日本",
          "note": "建議提早入園，優先安排熱門設施。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=3892796888607511210&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6656768,
          "lng": 135.4323185
        },
        {
          "id": "stop-2-1-1789110184237",
          "name": "園區午餐：USJ 內餐廳",
          "time": {
            "hour": 12,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-2-1-1789110184237.jpg",
          "address": "2-chōme-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031日本",
          "note": "改為日本園區內用餐，可選漢堡、咖哩飯、套餐等。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13993083408388260132&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.667881,
          "lng": 135.43019189999998
        },
        {
          "id": "stop-2-2-1789110184237",
          "name": "USJ 周邊百貨／商店街逛街",
          "time": {
            "hour": 14,
            "minute": 0
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-2-2-1789110184237.jpg",
          "address": "6-chōme-2-61 Shimaya, Konohana Ward, Osaka, 554-0024日本",
          "note": "可延伸到園區周邊商店與購物區，補買伴手禮與限定商品。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=14646902042336498869&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6685808,
          "lng": 135.43777820000003
        }
      ],
      "transits": [
        {
          "id": "transit-3-0-1789110188549",
          "mode": "walk",
          "duration": "步行：24 分鐘",
          "polyline": "usqrEesryXR]@{@AGIIOISWoBoDAIFaADeCgFk@@ZNVi@p@OU{DbDSb@Ib@Ap@H`AGVILuBv@IJo@TEDEV@N^fBCL[LbDrOCNNBDCXpAPXh@f@DJf@bCDDN?jE}AXi@v@]IS}EgH",
          "distanceText": "1.8 公里",
          "distanceValue": 1755,
          "durationValue": 1417
        },
        {
          "id": "transit-3-1-1789110188700",
          "mode": "walk",
          "duration": "步行：22 分鐘",
          "polyline": "{`rrEsbryX`FnHDJw@\\MTKRqE~AIAEIi@eCMSe@_@O_@UcAG@MCIIiEqS?WNQJg@Vs@ASa@a@`KgOU]aF}K~@s@Tj@CT@?",
          "distanceText": "1.6 公里",
          "distanceValue": 1620,
          "durationValue": 1327
        }
      ]
    },
    {
      "dayIndex": 4,
      "dateStr": "Day 4",
      "title": "近郊文化日｜京都或奈良二選一",
      "summary": "近郊文化日｜京都或奈良二選一",
      "stops": [
        {
          "id": "stop-3-1-1789110184237",
          "name": "京都：清水寺／二年坂三年坂 或 奈良：東大寺／奈良公園",
          "time": {
            "hour": 9,
            "minute": 30
          },
          "duration": {
            "hours": 3,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-3-1-1789110184237.jpg",
          "address": "Higashiyama Ward, Masuyacho, ２丁目-363-12 清水 東山区 京都市 京都府 605-0826日本",
          "note": "京都偏古都散策；奈良則適合看鹿與寺院。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=16622321643655642677&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.9983989,
          "lng": 135.7808431
        },
        {
          "id": "stop-3-2-1789110184237",
          "name": "午餐：京都湯豆腐／奈良釜飯",
          "time": {
            "hour": 12,
            "minute": 45
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-3-2-1789110184237.jpg",
          "address": "4-chōme-249-4 Ōmiyachō, Nara, 630-8115日本",
          "note": "依路線選擇對應的在地料理。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13805114546912662950&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.682006099999995,
          "lng": 135.8108258
        },
        {
          "id": "stop-3-3-1789110184237",
          "name": "京都：祇園散策／奈良：商店街散步",
          "time": {
            "hour": 14,
            "minute": 15
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-3-3-1789110184237.jpg",
          "address": "567-6 Gionmachi Minamigawa, Higashiyama Ward, Kyoto, 605-0074日本",
          "note": "可安排輕鬆逛街與拍照。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=15821793499804074063&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 35.0036661,
          "lng": 135.7754704
        },
        {
          "id": "stop-3-4-1789110184237",
          "name": "返回大阪",
          "time": {
            "hour": 17,
            "minute": 0
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "other",
          "imageUrl": "/place-images/stop-3-4-1789110184237.jpg",
          "address": "1 Chome-9 Dotonbori, Chuo Ward, Osaka, 542-0071日本",
          "note": "回大阪後可先回飯店整理戰利品。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13311254180582368656&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6687234,
          "lng": 135.5012971
        },
        {
          "id": "stop-3-5-1789110184237",
          "name": "晚餐：心齋橋／難波美食",
          "time": {
            "hour": 19,
            "minute": 0
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-3-5-1789110184237.jpg",
          "address": "1-chōme-6-24 Nishishinsaibashi, Chuo Ward, Osaka, 542-0086日本",
          "note": "可安排燒肉、拉麵、壽司或炸串。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=2596035001467753728&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6725388,
          "lng": 135.49843099999998
        }
      ],
      "transits": [
        {
          "id": "transit-3-1-1789110184237",
          "mode": "walk",
          "duration": "步行：8 小時 59 分鐘",
          "polyline": "_srtEkuv{Xr@CLHHDXg@RKr@EhDHHDtAf@IZFJf@jCl@pBTh@\\lA^zATf@fAnBbAjDH`@CRVBBPt@h@BC`@^CHpA|@BDhCbBd@P@QPBAJrLp@TFzBH?EN??DlCHAh@~ETlDXzBLHANFb@@F??ERB\\AFDb@@?AvDFn@BDApGh@b@JTL?AHD?Af@`@|FdIb@|@Db@NjAFfBpBI~BOnACtAMpBGJCdGMjAEbF@rB@\\CfB?BNVMvCC?KvEGx@A?JdBGpB?|BIrGDfCC@IJA?L|EAhBGn@SN@XJl@CvEItGCDJD??FP??UjROlB??JP??KbHAvGEpKAAJVB@MnCBrBV~Dr@@O`FdAzCj@BAf@LBAhB^JH@CH@AFhH`B@KD@?FhJ|AD?lARjE|@`@FXIx@GABFD?@hCHRCtCH?@pALLBFDhAVtDRd@@rAFfDFrAJJEVJPGf@FzKDjAAd@URMPd@HDlAINJLQxHC?CPA?HjIE`E@f@Br@?DDNGb@BDE`@ER@PE^CLBfAKtANLF\\IbAe@hG_CFPXK?AxD}AAx@f@VhAZxCOz@EDCJ?z@G@v@BD`CGx@CVD?rAfAG`A?DCjABPAnE?t@??@H?ACjICRDPArCo@jBo@jCsAvEqCAEJEBFz@g@@ErD{BFIt@e@\\OjKkGrM_INOACFG@@|@u@?ADCxAoAACHI@Bn@c@JTvBaBJQtV{RFANOJQJML?|EyD|IeHPSvBuAjB{@LEFIFoDzAB?CP@jMT~BFNAp@@?LL?AMjBFRFZ@`@AF@`AF?FR@?IfBBRCdHLd@?xBLdBTz@TAJRB@GrAd@nE`BFFfBp@j@Nr@XrDlAFB@ExFlBH?j@RLFjDhAtBn@xEzAAFPB?EnIfBVHDUMCREpAE`Hw@~Dg@|EMAHPA@IdNSX@CLZ@BK`@ClFNdBRv@ExAO~BHxBLj@Nj@RfBf@BMdDz@vC`ApC@dETbDL?GH@?BbEPzBLh@BxFVjA@fD]dBi@jCwAj@_@tAe@bASXI~Be@d@[tBaA~BqArAo@XY`@YBILG?FtDu@EINIBHjC}@rAk@z@y@^k@`@w@PSfAo@xA{@~AoAAGJG?Dz@{@tAq@`DoALANIXI|As@rBq@t@QNKtAa@RCnCw@z@[d@KzBu@TWr@YNApCcArB}@NI^KBGxA_APEx@g@TQTMJVVWpMjBn@H?JJ??jBlCRt@@AGZGz@C?{@L??}AvEBL_IFyGAyDJIAU~@g@rAa@\\G@BvFw@N?bEg@x@ILE`TeC?CLA?BjEm@d@CzH_AnIuATIbF_AlCg@F^HA`AfBNPlB~CjL~Rl@dAbBxChA`C^?LBb@OV??N~JCFCpWUJ@?OBBbKMzIu@d@A?LjENv@Ff@lCPpA`@GdBCHDHPf@@fMKtAHxCCbDAP?vACHBvA@^AxA@t@CP^TPRAbAa@^Gx@CDKbCIZGp@AhA@lACL@DCP?b@BdBM@JXC`ALtB?R@Na@v@OrCUNdC~PeBPE|Fk@ZAxAOHEdRiB?`@fKgA?A~DY?E~Gm@lCUfAQf@\\rAjAD?HM^IJbA^CV?vEg@`KaAxB[hBe@nA_@fA]rAc@vCs@xB_@d]wBbTmAdBKlAEpBD|A?pBLdAJhB@j@Kd@UnAcA\\O`BSxKe@lC[tDg@pAYvC{@vJaElDqAxCk@bCWfBElI?lFH`@DXA`CJdCFVAZ@b@CnC@\\EzAa@l@GNc@NOdBeAh@Qf\\kDpAS?_B|DHFCtCB?GtAF`@HRk@t@q@BEFi@^DZsAp@BAOhBFdAK|@BHyCA}Ah@AJP`KTF@dBIr@HXGCGp@SLSJM`@Qj@Q`Ag@FOD[JGv@MdBIv@_@F]`Aa@b@kA|AkF`@_B?Q|D?lAFtCAlEWt@@bGXz@E~@S|C}@@KAATUd@MpAEt@FlAb@h@Fp@ZZLn@Gd@Jf@Xd@f@f@h@RNl@T~BT`@JZPzDcH^ZDGzBnBPCbB{@hGmDAE`BaA~EmCB?AKPGQu@Sa@bDsE^VHGpCzAjAX`BVpAHrCERBdBC?IC?Gc@Ec@jAQvAg@LAr@SHAhBiAxLiIlAu@tCqAnC_AdE_An`@{HxASrCQVEfCCVDhEAjAFLKj@GfAEdCABJdCABJn@]l@M~@EhLPbBHD@JA`@BNDP?AP?HvMv@?jC",
          "distanceText": "38.8 公里",
          "distanceValue": 38843,
          "durationValue": 32311
        },
        {
          "id": "transit-3-2-1789110184237",
          "mode": "walk",
          "duration": "步行：9 小時 2 分鐘",
          "polyline": "eytrEup|{X?eC_FWu@Ai@C?MwCQ?W@CQ?OEa@CK@q@EeBIaKMy@Dm@Lo@\\CKuHD?IaADKBMJkAGiE@WEoCBODsCP_C^eb@lIaCj@wBt@yCtAaEhCaIpFoBlAK?m@Ra@HaA\\iAPgBPoAAECcBG{A[kBk@cCsA_@W_AhBeA|ACJ@@gA~AXl@Jh@QD@Ji@TyDvBaB`A@DuI|Ec@NE?{BoB{BdEa@_@cAhBg@W_@I{BSk@Wi@e@g@m@_@Wg@S[Ci@Fo@Ya@Qq@K}@]u@GqADe@LUT@DAFsEnAk@FaAA_GYkADsDRuCAaAEiD??Pw@vCgBxF]Tg@PI^_A^qBJi@JGJCZKJcAh@}@XQPKR[Lq@Lm@GqBJ?BcKWIOi@@@vBI~BkAAw@HiBG@Nq@C[rA_@EGh@e@f@SNSj@aAMu@C?FmAA?GkAA@HyCCi@C?~AaCZa[dDs@Z{A`AMRGVs@HuA^}@D_CASBi@CQB}BGaCKs@AKAiFImJ?gADcCVyCj@yFtB{HdDgD~@qARqGz@eGXgEPiATSH}AlA{@Ts@@}@A{AOaCK_B?qAC_CHkAHi^vBiRlAyCh@uCv@aF|AaCf@qD`@eLdAoAPg@?E@KcA_@HILGAqBeBGAgAPmCT_Hl@?D_EX?@qKfA?a@{QhBIDmBPk@BeFh@YFkP`BOeCuDZUHO`@]AyBAs@KYBAKeBLu@CEBqA?k@@cAAi@Fy@FqABEJiAD{@Xa@NOCSQM[eAB_BAe@@{@AMCsABgE@aD@gAGuMJGAS[g@C_BHYsB]cByFUQ??MuAFgIp@gJJCC?NKAqWTMByJB?O]@]LMC_@?mAkCeCgEo@kAgMeTi@{@_@i@q@oAI@G_@wHtAcAT]H_K~AmGt@Q?kEl@?CM@?BaTdCUFyD`@cANW@gFr@ACsAZoAj@MH@TKH?bGKtJGxCwEC?|AM??|@kADKB@FuAEmBO?kBK??KaOuBILuAv@MQ]T?AQFwA|@MLUDsAn@iBr@wAf@O@s@XUVgCz@k@L_AZyBn@SBuA`@SL_AR_Cx@eAh@WFOHSByEnBm@b@e@f@?EKF@HuB~AuBhA_@Xa@r@Yf@w@z@c@XiCbAcAZCIOHDHuDt@?GMFGL]TYXeClAaCrAaA`@e@ZwCj@SFu@NqAd@wA|@_Bx@kA^_@JoD\\cEOuCQ{@CmAI}DO?CIA?FqJa@kCCgEsAsBi@CLkCw@WK_AKeESaAFuALsBSiFOa@BEJYABMe@CyMTAHQ@@I}EL_Ef@kHx@uAFE@JDCRWIoIgB?DQC@GmC{@sDkAgBi@qAc@e@SSGI?yFmBADuDoAyAi@KAgBq@QKmG_CKCCDQA@KqA[gCWaAEm@A}GKSBgBC?HSA?GaAGUCSB[ASGkBG@LM??Mq@Ag@?uFMiDIsCEQ??B{ACGnDGH}An@uAx@eAt@IH?@_K`I_E~CIAKLKPONG@uVzRKPwB`BKUo@b@ACIH@ByAnAEB?@}@t@AAGF@B{@l@sS`MoDrBMFu@d@GHsDzBGHu@b@CGKD@DwEpCkCrAoBp@qBb@c@HK@SEkIB@BI??AmE?w@?_@@}@CEBgB@a@D?sAa@Eo@BaCFCE?q@aAFEBKAmEZ?I[EcA_@UM@y@yD|A?@SJG?EQiG~BgAh@QBi@IaAKgAJMC_@BWFMCa@DEDc@COFEEgAAm@A{GAwEDAIO@?ByHBMPOKc@@i@FKGOc@s@`@_@BsJCiBCWEQFWKKD_BK{CGsAG_FUeAWGE}@Ma@C?AuCISBgCIIG@CcAJOD}AYoCi@GCeAOEC_Dg@iEs@?GEAAJiHaB@GKA?BKIiB_@C@g@MC@}JqBAN_F{@sAOoCCALWC@KiPB}EDeE??JQ??KgNHqFD?TQ??GE?EKqHBkEH]BYK]@k@PoCFmD??MK@AHqEB_FEkCJwB?{@D?Ky@@wEF?JwCBWLCOwB?e@@{GAmA@_FNgA@_@DyBHuALaBDyCNi@BMgCOeA?Ic@}@}FeIg@a@?@IE?@[QcBSkE][@eAEkCE?@c@AKEY@SC?DG?c@AOGI@{BOo@CmDWoDQ@i@mCI?EO??D{BIk@K}Km@@KQCAPm@WaC}Ae@]o@e@BIa@_@CBu@i@CQWCBLgA[gEk@?CKA?@yIoA?@qEe@wBS?IOCAJGGuCY{@GUGo@G?BI?oFXgAVs@RAEGB@Fy@N}@Ii@GEp@SCGxC?r@AJA?AbB",
          "distanceText": "39.3 公里",
          "distanceValue": 39310,
          "durationValue": 32535
        },
        {
          "id": "transit-3-3-1789110184237",
          "mode": "transit",
          "duration": "地鐵：1 小時 2 分鐘",
          "polyline": "}tstEgsu{X?hP?nBjALzA^tBp@jDzAdDvAbJjDbLpDbF~A~FfA|NbAvAD~BGnGUVUxCQ|CO|CBf@HvNsAdFUf@BhBZx@Ad@BtCl@lAL~@?vGi@hBIrDDfBLrAV`FfApAL~A@dAKbAY`CcAd@IQ`UAlEj@Lv@\\DPvFvEpAt@`BlA~@z@r@n@hAlAVRPXfBtAjAn@nBjBf@r@Xl@X~@RlAFjACxAWlHAlAF~@NfAPr@^x@p@~@vAvA`Ap@j@TnAPhOn@zFHPAfVhAhHVzPLjNNjf@bAfg@hApDL^EpKHvSTjDHvETfIl@hPv@|ShA|L`@zKNhm@\\tCAnCBp@Fdj@\\xQN`OH~a@Vv@AlFFn\\Pda@ZhCJfBV`B^jBp@zAx@bBlAfE~Drg@dg@vXjXrB~AhB`AlBt@tBf@bCVzJ`@dWz@rBL|AVpBh@vAj@bB~@xAhAtArAjFpGbWj[fClC~BpBhCdBlCtAzChAnCp@zAT~GT`BBt@BjAN|g@Ihc@ApFJ~BLfFj@fAZ~GzAtDtAfCnA|CbBlAr@vUfQnPjM|RnOvb@h\\r]dXjHjGdElEfDdEvItLbM`QzHrKdGhIbLxO|DrGxB~EdAvCfAbEhPrv@xCfN~AfG`B~EnA~CjBdE~A|CbC~D~A`CzFlHnRbVtP|SnZf_@~CdDjDdDx^fZvAhAzBxBrBhCbCvDbAxBtClHtKpYdChGlCvFrCrFv[zl@bChFhBzE~ItVzBlFlCnF`C~DdClDzE|FzTnWxCbD~ExEvDfDpBhB^`@vAlA|RrQnFjEtEbD|ClBvDzBvO|IlAz@dBdAjAj@`C|A`DhCz@|@t@l@n@x@dAbBbArBlBvExAzC`@p@fApCt@lCnAbDR\\LHbAbBd@j@j@d@lAr@pAf@fAR~@DfAGp@MlAg@fDaB~CkA`Co@dBWxAKlBIrC?jEBTJzgAPnCK~AOnAQla@eInb@oIRSpJaCp@O|ASxDs@xJqBt@_@`@c@Te@Fi@Cg@Oc@YY]Kc@@_@NONWh@Ot@EhA?|IMpDGdBUdEKhICfBAPGXEdQFpBJzCEtBOxBIvCc@ns@DlDTtD|AjPN`CFbC@nDUnYGvKIdC{AjX_InmA}Cff@I|DSdn@Fx@HxTCL\\bYPnLArAM~ICpFUnIWtEIrEGhGKrFG|@LZJb@KlKSdr@AZxb@f@za@BlBAlI@AaE",
          "distanceText": "54.7 公里",
          "distanceValue": 54711,
          "durationValue": 3703
        },
        {
          "id": "transit-3-4-1789110184237",
          "mode": "walk",
          "duration": "步行：10 分鐘",
          "polyline": "qfrrEcb`zXoDAuMI@~QADsBK",
          "distanceText": "707 公尺",
          "distanceValue": 707,
          "durationValue": 594
        }
      ]
    },
    {
      "dayIndex": 5,
      "dateStr": "Day 5",
      "title": "大阪最後採買｜心齋橋、空港返程",
      "summary": "大阪最後採買｜心齋橋、空港返程",
      "stops": [
        {
          "id": "stop-4-0-1789110184237",
          "name": "心齋橋筋商店街",
          "time": {
            "hour": 9,
            "minute": 30
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-4-0-1789110184237.jpg",
          "address": "1-chōme-6-6 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085日本",
          "note": "最後補貨與伴手禮採買。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=7087755665176380195&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6725086,
          "lng": 135.5013657
        },
        {
          "id": "stop-4-1-1789110184237",
          "name": "難波周邊最後逛街",
          "time": {
            "hour": 11,
            "minute": 45
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-4-1-1789110184237.jpg",
          "address": "1-chōme-6-6 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085日本",
          "note": "可順路安排藥妝、電器與零食補給。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=7087755665176380195&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6725086,
          "lng": 135.5013657
        },
        {
          "id": "stop-4-2-1789110184237",
          "name": "午餐：大阪特色料理",
          "time": {
            "hour": 13,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-4-2-1789110184237.jpg",
          "address": "110台灣臺北市信義區西村里松壽路11號B2",
          "note": "建議選擇最後一餐大阪名物。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=15945695561411890176&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 25.0367465,
          "lng": 121.56731959999999
        },
        {
          "id": "stop-4-3-1789110184237",
          "name": "前往關西國際機場",
          "time": {
            "hour": 15,
            "minute": 0
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "other",
          "imageUrl": "/place-images/stop-4-3-1789110184237.jpg",
          "address": "1番地 Senshūkūkōkita, Izumisano, Osaka 549-0001日本",
          "note": "預留充足時間辦理退稅與登機手續。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=17397871139225636744&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.431999399999995,
          "lng": 135.23660189999998
        }
      ],
      "transits": [
        {
          "id": "transit-5-0-1789110191069",
          "mode": "walk",
          "duration": "步行：0 分鐘",
          "polyline": "e~rrEob`zX",
          "distanceText": "0 公尺",
          "distanceValue": 0,
          "durationValue": 0
        },
        {
          "id": "transit-5-1-1789110191113",
          "mode": "walk",
          "duration": "步行：10分"
        },
        {
          "id": "transit-5-2-1789110191139",
          "mode": "transit",
          "duration": "電車：40分"
        }
      ]
    }
  ]
};

export const itineraryDay2SortedTrip: Trip = {
  "id": "trip-1789110191139",
  "title": "大阪五天四夜精選行程",
  "subtitle": "Day 2 已套用智慧排序，保留排序後 stops 與 polyline",
  "days": [
    {
      "dayIndex": 1,
      "dateStr": "Day 1",
      "title": "抵達大阪｜難波道頓堀夜遊",
      "summary": "抵達大阪｜難波道頓堀夜遊",
      "stops": [
        {
          "id": "stop-0-0-1789110184237",
          "name": "關西國際機場 → 大阪市區飯店",
          "time": {
            "hour": 14,
            "minute": 0
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "other",
          "imageUrl": "/place-images/stop-0-0-1789110184237.jpg",
          "address": "1 Rinkuoraikita, Izumisano, Osaka 598-0048日本",
          "note": "抵達後前往飯店辦理入住，建議保留彈性時間。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=9589354795952735103&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.411451,
          "lng": 135.2998282
        },
        {
          "id": "stop-0-1-1789110184237",
          "name": "黑門市場",
          "time": {
            "hour": 16,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-0-1-1789110184237.jpg",
          "address": "2-chōme-4-1 Nipponbashi, Chuo Ward, Osaka, 542-0073日本",
          "note": "可安排輕食與小吃，感受大阪庶民美食氛圍。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=12402117845945925953&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.665351099999995,
          "lng": 135.5062417
        },
        {
          "id": "stop-0-2-1789110184237",
          "name": "道頓堀",
          "time": {
            "hour": 18,
            "minute": 30
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-0-2-1789110184237.jpg",
          "address": "1 Chome-9 Dotonbori, Chuo Ward, Osaka, 542-0071日本",
          "note": "拍攝固力果跑跑人、逛街與河畔夜景。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13311254180582368656&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6687234,
          "lng": 135.5012971
        },
        {
          "id": "stop-0-3-1789110184237",
          "name": "道頓堀晚餐：大阪燒／章魚燒",
          "time": {
            "hour": 20,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-0-3-1789110184237.jpg",
          "address": "1-chōme-6-7 Dōtonbori, Chuo Ward, Osaka, 542-0086日本",
          "note": "建議選擇人氣大阪燒或章魚燒名店。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=2130839552230731987&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6687742,
          "lng": 135.5027298
        }
      ],
      "transits": [
        {
          "id": "transit-1-0-1789110185678",
          "mode": "drive",
          "duration": "車程：43 分鐘",
          "polyline": "{_`qEmxxxXuDfFg@v@uJkLSa@Ki@@o@Hc@`@u@~A{BhA{Az@oAgJqKqBeCi@eAg@eBQoAMi@cAoOGk@WwAJ[k@}C_BiKk@cDgAaEqBkGsB}EsBeEgBcDiC_EcN}RkCoDaDwDqFqFsDoDQScJ{IuAiAqD_CmEaCcBmAcCsBeCaCk@o@qB_ByBuA_GuCmIsDoHyCaJkDaB{@yAeAaAaAsAaBiAmB{@oBs@aCe@wBW}Bk@}IOsAi@cDcA_EiAmDyAwD_BiDqBoDqCiEyCwDwBaC_C{B_DcC}IkGaBgAwEiDoLkI_DoBgFmCyD}B_HaFuf@i^wCaC{AkBcAwAmAsB}@qB}BwG{@iCo@cBoAsDw@iBsA{BiAsAaB{AcUoPoBcAmBu@aDy@{Ck@qBUwBGuBDwNjAuBDcBIkC]yVeFar@mNoDs@mD{@oAa@mAk@cBeA{AsAmAwAqKkOsBeDsAcCaBuDwC}HmAeCoAiBqAyA{BkBmB_BmAsAeA{AsAoCq@uBcHeW_AkE[yBM_CAeBFqFCuCSsC]_Ck@_CUu@y@mB}@eBqGgKgA{Bm@_B_@qAiBmIo@uB{@qBy@wAsAiBmK_MoEcF}CgCkF{DwBmBua@_b@}AoAyAw@yAe@mASwAIsFEqAKm@IcBe@yAq@iAy@yA{AmEoF}A}AiCqBkEyCcF}CiOwIaGcEqCmBaCoAoI{DmRoKiDgB_B}@gAs@iBaB}@}@mBkCuEsHoC{DaA_AoA_AgAi@}Bu@_XeH{B}@eBgAcB}AaBwBqWu_@{AkBkAkAuAeAy@g@eHeDqBw@w`@{KqBu@sBeAsBkAkAe@}A_@wAOcJMuCFcBNuJrAeBJeB?gBOoAWeA[iBy@}AiAsBkBaQwPqBaBuAw@gA_@y@UkBUqDB}k@tA}BZ{A\\qDtAeBp@sARqAJ}EJuALmAXgAf@gAx@mApAgJlLqOnS{@zAo@|Ao@vBeSlw@o@bDQ~AIzB?jFHvJAlAOvAOv@YjA[p@o@|@s@t@eAn@cBj@akAp\\aDt@iBNeACoAU{@[YBk@_@m@m@eByBeB}BmAmAiAs@sAa@{@McAEcADmGl@kG^cN~AyADq@EaAOgA_@cEyB_FmCu}@}f@cAc@qAY{AGaAF}@NaA^w@f@}@bAiA`BuAtA{@j@mBp@eCjAoDnBs@X_APu@Du@CaAUiAg@{D{Bs@k@g@i@a@q@_@cAe@{Bg@sCe@sAg@}@u@u@qAcAwAgA]a@o@sASeACq@@_AJ_Ah@qB~A_FHYN]Lm@BeAGqAMo@Sm@Yi@{@}@u@e@uIwE{@k@_@_@a@m@[y@o@iCwJ}a@{D{NsEoRaAmE{@{Ce@sA{@gB_AqAsJkLi@y@yHeNqG_KcUa[g@y@]u@_@mAa@qBqFk^q@aGc@qFg@uKkAed@MkH?gQB_BLsBDeKFg]AiCDa@BwFFw@Ty@Zi@f@a@t@UtAG|JUZSlMIpMJdFH^F|CDTUfEDhITr@Z~@TbCP^JLJn@TlAHn@DG|DxIRg@hJKvD",
          "distanceText": "46.0 公里",
          "distanceValue": 45990,
          "durationValue": 2589
        },
        {
          "id": "transit-1-1-1789110185746",
          "mode": "walk",
          "duration": "步行：12 分鐘",
          "polyline": "iqqrEy`azXKAALqGIC`@OPCz@CLA~FDHCrDAV?bC?zAEHAdCyGLgA@",
          "distanceText": "802 公尺",
          "distanceValue": 802,
          "durationValue": 698
        },
        {
          "id": "transit-1-2-1789110185801",
          "mode": "walk",
          "duration": "步行：2 分鐘",
          "polyline": "qfrrEcb`zX?_H",
          "distanceText": "131 公尺",
          "distanceValue": 131,
          "durationValue": 109
        }
      ]
    },
    {
      "dayIndex": 2,
      "dateStr": "Day 2",
      "title": "大阪經典市區｜大阪城、梅田、天神橋",
      "summary": "大阪經典市區｜大阪城、梅田、天神橋",
      "stops": [
        {
          "id": "stop-1-0-1789110184237",
          "name": "大阪城公園",
          "time": {
            "hour": 9,
            "minute": 0
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-0-1789110184237.jpg",
          "address": "Osakajo, Chuo Ward, Osaka, 540-0002日本",
          "note": "可外觀拍照或入天守閣參觀。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=7491349504525130123&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6864797,
          "lng": 135.5262114
        },
        {
          "id": "stop-1-1-1789110184237",
          "name": "天神橋筋商店街",
          "time": {
            "hour": 11,
            "minute": 15
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-1-1789110184237.jpg",
          "address": "三丁目, 2-chōme-3 Tenjinbashi, Kita Ward, Osaka, 530-0041日本",
          "note": "大阪最長商店街之一，適合邊逛邊吃。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=10590307626199221847&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.7025467,
          "lng": 135.51145409999998
        },
        {
          "id": "stop-1-5-1789110184237",
          "name": "梅田串燒屋",
          "time": {
            "hour": 12,
            "minute": 55
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-1-5-1789110184237.jpg",
          "address": "日本〒530-0018 Osaka, Kita Ward, Komatsubarachō, 1−１６ モコビル 4F",
          "note": "推薦串燒、炸物、啤酒等日式居酒屋菜色。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=11269336829134438785&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.702520299999996,
          "lng": 135.5010177
        },
        {
          "id": "stop-1-4-1789110184237",
          "name": "梅田百貨公司／地下街逛街",
          "time": {
            "hour": 14,
            "minute": 35
          },
          "duration": {
            "hours": 2,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-4-1789110184237.png",
          "address": "8-7 Kakudachō, Kita Ward, Osaka, 530-8350日本",
          "note": "可加入 LUCUA、阪急、HEP FIVE 等百貨與地下街購物行程。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13590576495565490093&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.7028186,
          "lng": 135.4985323
        },
        {
          "id": "stop-1-3-1789110184237",
          "name": "梅田空中庭園展望台",
          "time": {
            "hour": 17,
            "minute": 10
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-1-3-1789110184237.jpg",
          "address": "日本〒531-6039 Osaka, Kita Ward, Ōyodonaka, 1-chōme−1−８８ 梅田スカイビル",
          "note": "欣賞大阪市景與黃昏景色很適合。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=5170383595001406343&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.705437499999995,
          "lng": 135.49032789999998
        },
        {
          "id": "stop-1-2-1789110184237",
          "name": "大阪天婦羅／定食",
          "time": {
            "hour": 18,
            "minute": 55
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-1-2-1789110184237.jpg",
          "address": "日本〒542-0074 Osaka, Chuo Ward, Sennichimae, 1-chōme−1−７ 1F",
          "note": "安排日式定食補充體力。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=16526960049136680163&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6680901,
          "lng": 135.50532619999998
        }
      ],
      "transits": [
        {
          "id": "transit-2-0-1789110379089",
          "mode": "drive",
          "duration": "車程：12 分鐘",
          "polyline": "qevrEsqezXsAbBcCvCq@tASXANKBIGYK}A_AIKc@cADQ@e@I_@Q[{AsBc@OM\\]ZeFdD]f@MZEZBXl@hBi@Rs@Jr@lBe@^CFoAx@iBxA_FlFWBsDG}EE{AFyCb@cBj@k@Zs@j@yEvCaFrEmBrBeAlAc@z@EJpAjEPd@nBzGPd@H`@i@dXCxBPtG",
          "distanceText": "3.1 公里",
          "distanceValue": 3092,
          "durationValue": 695
        },
        {
          "id": "transit-2-1-1789110379089",
          "mode": "drive",
          "duration": "車程：6 分鐘",
          "polyline": "kzxrEqabzXDrABr@NhG@t@EJf@tZTrHTrGq@A}@B[FgENMT?\\hBhCb@@pBLAsA",
          "distanceText": "1.3 公里",
          "distanceValue": 1315,
          "durationValue": 383
        },
        {
          "id": "transit-2-2-1789110379089",
          "mode": "drive",
          "duration": "車程：8 分鐘",
          "polyline": "ezxrEk``zXCcAEi@Ac@[FgENaEVwAb@WVuAlAiAl@w@RaAFcNAULGLn@~MXtFLz@tB]hAQfKuAf@EJBfIcAVCdEyAp@Y",
          "distanceText": "1.9 公里",
          "distanceValue": 1908,
          "durationValue": 457
        },
        {
          "id": "transit-2-3-1789110379089",
          "mode": "drive",
          "duration": "車程：5 分鐘",
          "polyline": "wzxrEqm_zXJb@yFhBc@Di@@eBVoJhAqIfAg@b@Sh@Of@GJqApGa@hCe@rCdDbH^~@^xAn@SnB]tJc@",
          "distanceText": "1.6 公里",
          "distanceValue": 1554,
          "durationValue": 284
        },
        {
          "id": "transit-2-4-1789110379089",
          "mode": "drive",
          "duration": "車程：12 分鐘",
          "polyline": "ckyrE{b~yXvDVtIjClIlBfCGB{AAMmAgB_A{APU^Q`ATb@Vl@p@vAhBz@rAb@`@b@Nn@B~@Mf@UZa@Ng@p@yDLa@NOtBaA\\KPBlI_Bf@Sb@c@Xe@Nm@Dc@AkAmAaQOgCOgGEiIDuDLmEXqGJyAReAP]j@wBtD{LhBuG^w@d@i@b@Yr@UbDi@d@ETIjCGtWM^CjQMrAK|@Sz@]xBaAfAYrAK`IM`EAzJGpMJdFH^F|CDTUfEDhITr@Z~@TbCP^JLJn@TlAHn@DSnOGzFqEEAbD",
          "distanceText": "6.7 公里",
          "distanceValue": 6656,
          "durationValue": 735
        }
      ]
    },
    {
      "dayIndex": 3,
      "dateStr": "Day 3",
      "title": "環球影城一日遊",
      "summary": "環球影城一日遊",
      "stops": [
        {
          "id": "stop-2-0-1789110184237",
          "name": "日本環球影城（USJ）",
          "time": {
            "hour": 8,
            "minute": 0
          },
          "duration": {
            "hours": 6,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-2-0-1789110184237.jpg",
          "address": "2-chōme-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031日本",
          "note": "建議提早入園，優先安排熱門設施。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=3892796888607511210&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6656768,
          "lng": 135.4323185
        },
        {
          "id": "stop-2-1-1789110184237",
          "name": "園區午餐：USJ 內餐廳",
          "time": {
            "hour": 12,
            "minute": 30
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-2-1-1789110184237.jpg",
          "address": "2-chōme-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031日本",
          "note": "改為日本園區內用餐，可選漢堡、咖哩飯、套餐等。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13993083408388260132&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.667881,
          "lng": 135.43019189999998
        },
        {
          "id": "stop-2-2-1789110184237",
          "name": "USJ 周邊百貨／商店街逛街",
          "time": {
            "hour": 14,
            "minute": 0
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-2-2-1789110184237.jpg",
          "address": "6-chōme-2-61 Shimaya, Konohana Ward, Osaka, 554-0024日本",
          "note": "可延伸到園區周邊商店與購物區，補買伴手禮與限定商品。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=14646902042336498869&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6685808,
          "lng": 135.43777820000003
        }
      ],
      "transits": [
        {
          "id": "transit-3-0-1789110188549",
          "mode": "walk",
          "duration": "步行：24 分鐘",
          "polyline": "usqrEesryXR]@{@AGIIOISWoBoDAIFaADeCgFk@@ZNVi@p@OU{DbDSb@Ib@Ap@H`AGVILuBv@IJo@TEDEV@N^fBCL[LbDrOCNNBDCXpAPXh@f@DJf@bCDDN?jE}AXi@v@]IS}EgH",
          "distanceText": "1.8 公里",
          "distanceValue": 1755,
          "durationValue": 1417
        },
        {
          "id": "transit-3-1-1789110188700",
          "mode": "walk",
          "duration": "步行：22 分鐘",
          "polyline": "{`rrEsbryX`FnHDJw@\\MTKRqE~AIAEIi@eCMSe@_@O_@UcAG@MCIIiEqS?WNQJg@Vs@ASa@a@`KgOU]aF}K~@s@Tj@CT@?",
          "distanceText": "1.6 公里",
          "distanceValue": 1620,
          "durationValue": 1327
        }
      ]
    },
    {
      "dayIndex": 4,
      "dateStr": "Day 4",
      "title": "近郊文化日｜京都或奈良二選一",
      "summary": "近郊文化日｜京都或奈良二選一",
      "stops": [
        {
          "id": "stop-3-1-1789110184237",
          "name": "京都：清水寺／二年坂三年坂 或 奈良：東大寺／奈良公園",
          "time": {
            "hour": 9,
            "minute": 30
          },
          "duration": {
            "hours": 3,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-3-1-1789110184237.jpg",
          "address": "Higashiyama Ward, Masuyacho, ２丁目-363-12 清水 東山区 京都市 京都府 605-0826日本",
          "note": "京都偏古都散策；奈良則適合看鹿與寺院。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=16622321643655642677&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.9983989,
          "lng": 135.7808431
        },
        {
          "id": "stop-3-2-1789110184237",
          "name": "午餐：京都湯豆腐／奈良釜飯",
          "time": {
            "hour": 12,
            "minute": 45
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-3-2-1789110184237.jpg",
          "address": "4-chōme-249-4 Ōmiyachō, Nara, 630-8115日本",
          "note": "依路線選擇對應的在地料理。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13805114546912662950&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.682006099999995,
          "lng": 135.8108258
        },
        {
          "id": "stop-3-3-1789110184237",
          "name": "京都：祇園散策／奈良：商店街散步",
          "time": {
            "hour": 14,
            "minute": 15
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-3-3-1789110184237.jpg",
          "address": "567-6 Gionmachi Minamigawa, Higashiyama Ward, Kyoto, 605-0074日本",
          "note": "可安排輕鬆逛街與拍照。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=15821793499804074063&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 35.0036661,
          "lng": 135.7754704
        },
        {
          "id": "stop-3-4-1789110184237",
          "name": "返回大阪",
          "time": {
            "hour": 17,
            "minute": 0
          },
          "duration": {
            "hours": 1,
            "minutes": 0
          },
          "category": "other",
          "imageUrl": "/place-images/stop-3-4-1789110184237.jpg",
          "address": "1 Chome-9 Dotonbori, Chuo Ward, Osaka, 542-0071日本",
          "note": "回大阪後可先回飯店整理戰利品。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=13311254180582368656&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6687234,
          "lng": 135.5012971
        },
        {
          "id": "stop-3-5-1789110184237",
          "name": "晚餐：心齋橋／難波美食",
          "time": {
            "hour": 19,
            "minute": 0
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "eat",
          "imageUrl": "/place-images/stop-3-5-1789110184237.jpg",
          "address": "1-chōme-6-24 Nishishinsaibashi, Chuo Ward, Osaka, 542-0086日本",
          "note": "可安排燒肉、拉麵、壽司或炸串。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=2596035001467753728&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6725388,
          "lng": 135.49843099999998
        }
      ],
      "transits": [
        {
          "id": "transit-3-1-1789110184237",
          "mode": "walk",
          "duration": "步行：8 小時 59 分鐘",
          "polyline": "_srtEkuv{Xr@CLHHDXg@RKr@EhDHHDtAf@IZFJf@jCl@pBTh@\\lA^zATf@fAnBbAjDH`@CRVBBPt@h@BC`@^CHpA|@BDhCbBd@P@QPBAJrLp@TFzBH?EN??DlCHAh@~ETlDXzBLHANFb@@F??ERB\\AFDb@@?AvDFn@BDApGh@b@JTL?AHD?Af@`@|FdIb@|@Db@NjAFfBpBI~BOnACtAMpBGJCdGMjAEbF@rB@\\CfB?BNVMvCC?KvEGx@A?JdBGpB?|BIrGDfCC@IJA?L|EAhBGn@SN@XJl@CvEItGCDJD??FP??UjROlB??JP??KbHAvGEpKAAJVB@MnCBrBV~Dr@@O`FdAzCj@BAf@LBAhB^JH@CH@AFhH`B@KD@?FhJ|AD?lARjE|@`@FXIx@GABFD?@hCHRCtCH?@pALLBFDhAVtDRd@@rAFfDFrAJJEVJPGf@FzKDjAAd@URMPd@HDlAINJLQxHC?CPA?HjIE`E@f@Br@?DDNGb@BDE`@ER@PE^CLBfAKtANLF\\IbAe@hG_CFPXK?AxD}AAx@f@VhAZxCOz@EDCJ?z@G@v@BD`CGx@CVD?rAfAG`A?DCjABPAnE?t@??@H?ACjICRDPArCo@jBo@jCsAvEqCAEJEBFz@g@@ErD{BFIt@e@\\OjKkGrM_INOACFG@@|@u@?ADCxAoAACHI@Bn@c@JTvBaBJQtV{RFANOJQJML?|EyD|IeHPSvBuAjB{@LEFIFoDzAB?CP@jMT~BFNAp@@?LL?AMjBFRFZ@`@AF@`AF?FR@?IfBBRCdHLd@?xBLdBTz@TAJRB@GrAd@nE`BFFfBp@j@Nr@XrDlAFB@ExFlBH?j@RLFjDhAtBn@xEzAAFPB?EnIfBVHDUMCREpAE`Hw@~Dg@|EMAHPA@IdNSX@CLZ@BK`@ClFNdBRv@ExAO~BHxBLj@Nj@RfBf@BMdDz@vC`ApC@dETbDL?GH@?BbEPzBLh@BxFVjA@fD]dBi@jCwAj@_@tAe@bASXI~Be@d@[tBaA~BqArAo@XY`@YBILG?FtDu@EINIBHjC}@rAk@z@y@^k@`@w@PSfAo@xA{@~AoAAGJG?Dz@{@tAq@`DoALANIXI|As@rBq@t@QNKtAa@RCnCw@z@[d@KzBu@TWr@YNApCcArB}@NI^KBGxA_APEx@g@TQTMJVVWpMjBn@H?JJ??jBlCRt@@AGZGz@C?{@L??}AvEBL_IFyGAyDJIAU~@g@rAa@\\G@BvFw@N?bEg@x@ILE`TeC?CLA?BjEm@d@CzH_AnIuATIbF_AlCg@F^HA`AfBNPlB~CjL~Rl@dAbBxChA`C^?LBb@OV??N~JCFCpWUJ@?OBBbKMzIu@d@A?LjENv@Ff@lCPpA`@GdBCHDHPf@@fMKtAHxCCbDAP?vACHBvA@^AxA@t@CP^TPRAbAa@^Gx@CDKbCIZGp@AhA@lACL@DCP?b@BdBM@JXC`ALtB?R@Na@v@OrCUNdC~PeBPE|Fk@ZAxAOHEdRiB?`@fKgA?A~DY?E~Gm@lCUfAQf@\\rAjAD?HM^IJbA^CV?vEg@`KaAxB[hBe@nA_@fA]rAc@vCs@xB_@d]wBbTmAdBKlAEpBD|A?pBLdAJhB@j@Kd@UnAcA\\O`BSxKe@lC[tDg@pAYvC{@vJaElDqAxCk@bCWfBElI?lFH`@DXA`CJdCFVAZ@b@CnC@\\EzAa@l@GNc@NOdBeAh@Qf\\kDpAS?_B|DHFCtCB?GtAF`@HRk@t@q@BEFi@^DZsAp@BAOhBFdAK|@BHyCA}Ah@AJP`KTF@dBIr@HXGCGp@SLSJM`@Qj@Q`Ag@FOD[JGv@MdBIv@_@F]`Aa@b@kA|AkF`@_B?Q|D?lAFtCAlEWt@@bGXz@E~@S|C}@@KAATUd@MpAEt@FlAb@h@Fp@ZZLn@Gd@Jf@Xd@f@f@h@RNl@T~BT`@JZPzDcH^ZDGzBnBPCbB{@hGmDAE`BaA~EmCB?AKPGQu@Sa@bDsE^VHGpCzAjAX`BVpAHrCERBdBC?IC?Gc@Ec@jAQvAg@LAr@SHAhBiAxLiIlAu@tCqAnC_AdE_An`@{HxASrCQVEfCCVDhEAjAFLKj@GfAEdCABJdCABJn@]l@M~@EhLPbBHD@JA`@BNDP?AP?HvMv@?jC",
          "distanceText": "38.8 公里",
          "distanceValue": 38843,
          "durationValue": 32311
        },
        {
          "id": "transit-3-2-1789110184237",
          "mode": "walk",
          "duration": "步行：9 小時 2 分鐘",
          "polyline": "eytrEup|{X?eC_FWu@Ai@C?MwCQ?W@CQ?OEa@CK@q@EeBIaKMy@Dm@Lo@\\CKuHD?IaADKBMJkAGiE@WEoCBODsCP_C^eb@lIaCj@wBt@yCtAaEhCaIpFoBlAK?m@Ra@HaA\\iAPgBPoAAECcBG{A[kBk@cCsA_@W_AhBeA|ACJ@@gA~AXl@Jh@QD@Ji@TyDvBaB`A@DuI|Ec@NE?{BoB{BdEa@_@cAhBg@W_@I{BSk@Wi@e@g@m@_@Wg@S[Ci@Fo@Ya@Qq@K}@]u@GqADe@LUT@DAFsEnAk@FaAA_GYkADsDRuCAaAEiD??Pw@vCgBxF]Tg@PI^_A^qBJi@JGJCZKJcAh@}@XQPKR[Lq@Lm@GqBJ?BcKWIOi@@@vBI~BkAAw@HiBG@Nq@C[rA_@EGh@e@f@SNSj@aAMu@C?FmAA?GkAA@HyCCi@C?~AaCZa[dDs@Z{A`AMRGVs@HuA^}@D_CASBi@CQB}BGaCKs@AKAiFImJ?gADcCVyCj@yFtB{HdDgD~@qARqGz@eGXgEPiATSH}AlA{@Ts@@}@A{AOaCK_B?qAC_CHkAHi^vBiRlAyCh@uCv@aF|AaCf@qD`@eLdAoAPg@?E@KcA_@HILGAqBeBGAgAPmCT_Hl@?D_EX?@qKfA?a@{QhBIDmBPk@BeFh@YFkP`BOeCuDZUHO`@]AyBAs@KYBAKeBLu@CEBqA?k@@cAAi@Fy@FqABEJiAD{@Xa@NOCSQM[eAB_BAe@@{@AMCsABgE@aD@gAGuMJGAS[g@C_BHYsB]cByFUQ??MuAFgIp@gJJCC?NKAqWTMByJB?O]@]LMC_@?mAkCeCgEo@kAgMeTi@{@_@i@q@oAI@G_@wHtAcAT]H_K~AmGt@Q?kEl@?CM@?BaTdCUFyD`@cANW@gFr@ACsAZoAj@MH@TKH?bGKtJGxCwEC?|AM??|@kADKB@FuAEmBO?kBK??KaOuBILuAv@MQ]T?AQFwA|@MLUDsAn@iBr@wAf@O@s@XUVgCz@k@L_AZyBn@SBuA`@SL_AR_Cx@eAh@WFOHSByEnBm@b@e@f@?EKF@HuB~AuBhA_@Xa@r@Yf@w@z@c@XiCbAcAZCIOHDHuDt@?GMFGL]TYXeClAaCrAaA`@e@ZwCj@SFu@NqAd@wA|@_Bx@kA^_@JoD\\cEOuCQ{@CmAI}DO?CIA?FqJa@kCCgEsAsBi@CLkCw@WK_AKeESaAFuALsBSiFOa@BEJYABMe@CyMTAHQ@@I}EL_Ef@kHx@uAFE@JDCRWIoIgB?DQC@GmC{@sDkAgBi@qAc@e@SSGI?yFmBADuDoAyAi@KAgBq@QKmG_CKCCDQA@KqA[gCWaAEm@A}GKSBgBC?HSA?GaAGUCSB[ASGkBG@LM??Mq@Ag@?uFMiDIsCEQ??B{ACGnDGH}An@uAx@eAt@IH?@_K`I_E~CIAKLKPONG@uVzRKPwB`BKUo@b@ACIH@ByAnAEB?@}@t@AAGF@B{@l@sS`MoDrBMFu@d@GHsDzBGHu@b@CGKD@DwEpCkCrAoBp@qBb@c@HK@SEkIB@BI??AmE?w@?_@@}@CEBgB@a@D?sAa@Eo@BaCFCE?q@aAFEBKAmEZ?I[EcA_@UM@y@yD|A?@SJG?EQiG~BgAh@QBi@IaAKgAJMC_@BWFMCa@DEDc@COFEEgAAm@A{GAwEDAIO@?ByHBMPOKc@@i@FKGOc@s@`@_@BsJCiBCWEQFWKKD_BK{CGsAG_FUeAWGE}@Ma@C?AuCISBgCIIG@CcAJOD}AYoCi@GCeAOEC_Dg@iEs@?GEAAJiHaB@GKA?BKIiB_@C@g@MC@}JqBAN_F{@sAOoCCALWC@KiPB}EDeE??JQ??KgNHqFD?TQ??GE?EKqHBkEH]BYK]@k@PoCFmD??MK@AHqEB_FEkCJwB?{@D?Ky@@wEF?JwCBWLCOwB?e@@{GAmA@_FNgA@_@DyBHuALaBDyCNi@BMgCOeA?Ic@}@}FeIg@a@?@IE?@[QcBSkE][@eAEkCE?@c@AKEY@SC?DG?c@AOGI@{BOo@CmDWoDQ@i@mCI?EO??D{BIk@K}Km@@KQCAPm@WaC}Ae@]o@e@BIa@_@CBu@i@CQWCBLgA[gEk@?CKA?@yIoA?@qEe@wBS?IOCAJGGuCY{@GUGo@G?BI?oFXgAVs@RAEGB@Fy@N}@Ii@GEp@SCGxC?r@AJA?AbB",
          "distanceText": "39.3 公里",
          "distanceValue": 39310,
          "durationValue": 32535
        },
        {
          "id": "transit-3-3-1789110184237",
          "mode": "transit",
          "duration": "地鐵：1 小時 2 分鐘",
          "polyline": "}tstEgsu{X?hP?nBjALzA^tBp@jDzAdDvAbJjDbLpDbF~A~FfA|NbAvAD~BGnGUVUxCQ|CO|CBf@HvNsAdFUf@BhBZx@Ad@BtCl@lAL~@?vGi@hBIrDDfBLrAV`FfApAL~A@dAKbAY`CcAd@IQ`UAlEj@Lv@\\DPvFvEpAt@`BlA~@z@r@n@hAlAVRPXfBtAjAn@nBjBf@r@Xl@X~@RlAFjACxAWlHAlAF~@NfAPr@^x@p@~@vAvA`Ap@j@TnAPhOn@zFHPAfVhAhHVzPLjNNjf@bAfg@hApDL^EpKHvSTjDHvETfIl@hPv@|ShA|L`@zKNhm@\\tCAnCBp@Fdj@\\xQN`OH~a@Vv@AlFFn\\Pda@ZhCJfBV`B^jBp@zAx@bBlAfE~Drg@dg@vXjXrB~AhB`AlBt@tBf@bCVzJ`@dWz@rBL|AVpBh@vAj@bB~@xAhAtArAjFpGbWj[fClC~BpBhCdBlCtAzChAnCp@zAT~GT`BBt@BjAN|g@Ihc@ApFJ~BLfFj@fAZ~GzAtDtAfCnA|CbBlAr@vUfQnPjM|RnOvb@h\\r]dXjHjGdElEfDdEvItLbM`QzHrKdGhIbLxO|DrGxB~EdAvCfAbEhPrv@xCfN~AfG`B~EnA~CjBdE~A|CbC~D~A`CzFlHnRbVtP|SnZf_@~CdDjDdDx^fZvAhAzBxBrBhCbCvDbAxBtClHtKpYdChGlCvFrCrFv[zl@bChFhBzE~ItVzBlFlCnF`C~DdClDzE|FzTnWxCbD~ExEvDfDpBhB^`@vAlA|RrQnFjEtEbD|ClBvDzBvO|IlAz@dBdAjAj@`C|A`DhCz@|@t@l@n@x@dAbBbArBlBvExAzC`@p@fApCt@lCnAbDR\\LHbAbBd@j@j@d@lAr@pAf@fAR~@DfAGp@MlAg@fDaB~CkA`Co@dBWxAKlBIrC?jEBTJzgAPnCK~AOnAQla@eInb@oIRSpJaCp@O|ASxDs@xJqBt@_@`@c@Te@Fi@Cg@Oc@YY]Kc@@_@NONWh@Ot@EhA?|IMpDGdBUdEKhICfBAPGXEdQFpBJzCEtBOxBIvCc@ns@DlDTtD|AjPN`CFbC@nDUnYGvKIdC{AjX_InmA}Cff@I|DSdn@Fx@HxTCL\\bYPnLArAM~ICpFUnIWtEIrEGhGKrFG|@LZJb@KlKSdr@AZxb@f@za@BlBAlI@AaE",
          "distanceText": "54.7 公里",
          "distanceValue": 54711,
          "durationValue": 3703
        },
        {
          "id": "transit-3-4-1789110184237",
          "mode": "walk",
          "duration": "步行：10 分鐘",
          "polyline": "qfrrEcb`zXoDAuMI@~QADsBK",
          "distanceText": "707 公尺",
          "distanceValue": 707,
          "durationValue": 594
        }
      ]
    },
    {
      "dayIndex": 5,
      "dateStr": "Day 5",
      "title": "大阪最後採買｜心齋橋、空港返程",
      "summary": "大阪最後採買｜心齋橋、空港返程",
      "stops": [
        {
          "id": "stop-4-0-1789110184237",
          "name": "心齋橋筋商店街",
          "time": {
            "hour": 9,
            "minute": 30
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "play",
          "imageUrl": "/place-images/stop-4-0-1789110184237.jpg",
          "address": "1-chōme-6-6 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085日本",
          "note": "最後補貨與伴手禮採買。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=7087755665176380195&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6725086,
          "lng": 135.5013657
        },
        {
          "id": "stop-4-1-1789110184237",
          "name": "難波周邊最後逛街",
          "time": {
            "hour": 11,
            "minute": 45
          },
          "duration": {
            "hours": 1,
            "minutes": 30
          },
          "category": "play",
          "imageUrl": "/place-images/stop-4-1-1789110184237.jpg",
          "address": "1-chōme-6-6 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085日本",
          "note": "可順路安排藥妝、電器與零食補給。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=7087755665176380195&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.6725086,
          "lng": 135.5013657
        },
        {
          "id": "stop-4-3-1789110184237",
          "name": "前往關西國際機場",
          "time": {
            "hour": 15,
            "minute": 0
          },
          "duration": {
            "hours": 2,
            "minutes": 0
          },
          "category": "other",
          "imageUrl": "/place-images/stop-4-3-1789110184237.jpg",
          "address": "1番地 Senshūkūkōkita, Izumisano, Osaka 549-0001日本",
          "note": "預留充足時間辦理退稅與登機手續。",
          "hasAlert": false,
          "mapUrl": "https://maps.google.com/?cid=17397871139225636744&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
          "lat": 34.431999399999995,
          "lng": 135.23660189999998
        }
      ],
      "transits": [
        {
          "id": "transit-5-0-1789110191069",
          "mode": "walk",
          "duration": "步行：0 分鐘",
          "polyline": "e~rrEob`zX",
          "distanceText": "0 公尺",
          "distanceValue": 0,
          "durationValue": 0
        },
        {
          "id": "transit-5-1-1789110191113",
          "mode": "walk",
          "duration": "步行：12 小時 15 分鐘",
          "polyline": "e~rrEob`zXeNCCfG@PIhKEbE?~@OdFELOfGGfEU@?NCfAGJMN@XB\\Eh@@f@MxA@b@Cj@Dh@QbB@TFf@Mx@DdAIl@Fr@GpBBn@O`@Dp@Gn@QCOMmCUiALGCu@F}CX_DZsAXsCb@MLcDl@MEqA^wCh@N?a@Du@NYAiB`@OJkAVOEg@POJs@Vs@`@y@h@CJoBbBWb@{BhDEJIDeC`ES`@Y\\{@tAI?]j@@HkBlC_AbAkBdBOJyFjFUD_Az@EPMJM@{AxA{CnCAFIHMV{@x@UBo@l@Dn@F^aCzBSFe@z@ONkBbCMFSTKZiD~DWJmCdDwAjB_E`FaDzD}@`A{D`DILi^xYQHoCxBaAbAkAzA[b@OZMPs@xAELaIjP{@fBu@pAAFy@bBAHgCjFIHFDu@rABB@`@{@t@OTcApBeEpIqBhEe@lAw@hBGRi@jAsDfJg@z@wCvDeAhAk@f@OHsDtCaIfGiAvAo@fAELILYv@c@rBMdAGzA?pHFHArHAPBbBArFCF?~ABV?hP@tAAz@@tNAD?hGBl@AvA?vJ@vA?jGKzEA\\EPYpEa@tDkA|IyAzJATG`@K\\aAtG@Jy@zFG^}@pGEPyAfKa@jCKPe@bDI?CJQ@WhBGNQfA?VuAjJEL?He@bDELaBzKc@hCm@zCi@vBIPyA~Ea@lAAXwApEi@`BMNgBnFGj@aBfFa@bAGZcBdFkAnDMl@KTgAhDOj@oAtE_@hBy@xFGP[xB@DuC|RQfAmDxVqAxIkBlMCDC^IT_@zBe@fDqAzI@LCPGV{@xFg@`EmBhRBH_@lDCD]jDIb@U|Bo@`Ge@xEBFI^uAxM@V{@dI?PmBlRKn@a@fEo@fK?TuAhUGt@I`BaAfPW|DIrAGf@KjBO|Be@zIGtC@bDFZ@dU?X@`BI^RdGHhAJ^RdC@d@`@nCN\\fJri@f@nCAHp@xDLl@@NjAbHFFz@lF`BbJh@hDfDzXp@xFn@dFAFj@zEXnB~A~MjBtOn@rDDZBd@rAfGFBZtAHb@^|AnAbGz@rDpC`MBVR`AFJfGtXZ~AzBjKPb@?VH\\JP|A`H@PLl@HNbBvH@Pn@xCHNt@hD@LbAnEDJvFbWf@`CDHhAdGD^vDpShAvGAJrAxHb@`CHHp@lCj@`BNh@hAxCPf@\\|@FT^`ALZh@tBv@nDN\\nBfJnBzOn@zM@`@TtArDnSPjAFPbAlFrBnIfDjMhD`NlAvEFJVbA@FhBdHBRf@nBHNlAvEDb@nCpKHJd@pBHPnClKDFbAdEf@xB@Zx@nD@Tx@tDJVBVVjACFdAxEPVj@fC`@vBhA`FVp@f@x@?PzEfR?p@^LzAlGvApGxBvIhD`FN\\~AnFbB~F|EdPZhARIRErAr@FWIEBKxEfC|@r@~Ax@jAj@l@d@xAu@`Ao@hAs@?Id@WvFlKFHbCnEFNxAtBtDrELHx@dA@VnBdCRFVMR@BLHTrAi@hCs@v@a@b@]h@q@|@_BnA}BFIdEpJbAzBb@l@z@z@LQp@v@dHtHd@TvDlAJDF?RHLCBBh@IrEaArDy@bAIbCEfDu@J?FGN?hAYv@YrBaBhDkCpC}BxDyC|AkAEKrAgAd@q@@]Vy@PmABk@AiAS{AuAwBmAkCu@kBgAuDyAwGK?Ag@bAaA`HkDrEsBLA|Ay@RCnPoIZSxAq@vDmBUHzLiGNO`UeL\\IRS|BkAZIbh@sW`@U[H\\KzJcFfCmA`@[|@e@XHjBiA|Aw@BJlAk@dD}AfG_DrZqOfBu@dBk@fCk@hB[xBS`Ha@J@jBOl@IVALE`DQLtDIIMDSf@Gp@?PWCVzGYHk@BOBP`G}@F@P_BJOGaABoAMsA]gA]kAe@_Ai@{@w@{@yAu@kB]iCUoBMsB?_Cj@}JjA{ExAqEdH_PxDaJ~FwLzG}MpHeMrEaFbEiDpEiB|FoBhP_B|Ri@f\\Ado@jAhw@hAzr@dDplAXdxBi@`pB}JhdCoW`mCw[`nCk^xp@_Kzh@{@rV|BjXhE~QbF|PtHjM`HnJdJ~E|GvBlCn@bAR^Fh@?v@Q|@_@hAiAdCUbAIjAFdAPpAT~@h@r@l@`@r@PNE`BJ^wJNC@W@?@LBKbBLK|BNLRQJ?NkDPqDHsBLg@TURI`@BTLP`@AdA]bCELUtBEn@@NGxB?fBILJrBd@lH\\pET~A\\zAb@tAn@|AJ\\l@pAJEfCjFbA`Bv@z@dAv@jAh@lAX|@HhBL~@NdA^ZRFP\\P~@zApHxL|BzDTUdArBPf@TfAPxBEdKGf@Sj@yAzAl@jAzBbE|@nBhFlJnOpWDRlAnAh@t@n@RLARKvBuB_DoFd@e@kAeBoCfCYN[AUMEEsG{KYy@Oq@@]L_@r@y@V_@}B{CiCmE",
          "distanceText": "69.8 公里",
          "distanceValue": 69785,
          "durationValue": 44097
        }
      ]
    }
  ]
};
