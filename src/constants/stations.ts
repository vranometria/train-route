import { StationInfo } from '@/types/station-info'
import { LINE_IDS, STATION_IDS } from './ids'

export const STATIONS = {
  [STATION_IDS.jr_east.omiya]: new StationInfo(
    '大宮',
    [
      LINE_IDS.jr_east.utunomiya,//宇都宮線,
      LINE_IDS.jr_east.takasaki,//高崎線
      LINE_IDS.jr_east.shonan_shinjuku,// "湘南新宿ライン",
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.saikyou,// "埼京線",
      LINE_IDS.jr_east.kawagoe,
      LINE_IDS.jr_east.shinkansen.tohoku, // 東北新幹線
      LINE_IDS.jr_east.shinkansen.hayabusa,// 新幹線はやぶさ
      LINE_IDS.jr_east.shinkansen.yamagata,// 山形新幹線
      LINE_IDS.jr_east.shinkansen.akita,// 秋田新幹線
      LINE_IDS.jr_east.shinkansen.jouetsu,// 上越新幹線
      LINE_IDS.jr_east.shinkansen.hokuriku,// 北陸新幹線
      LINE_IDS.toubu.urban_park_line,// "東武アーバンパークライン",
      LINE_IDS.saitama_shintoshi.new_shuttle,// ニューシャトル
    ],
  ),
  [STATION_IDS.jr_east.saitama_shintoshin]: new StationInfo('さいたま新都心',[]),
  [STATION_IDS.jr_east.yono]: new StationInfo('与野', []),
  [STATION_IDS.jr_east.kitaurawa]: new StationInfo('北浦和', []),
  [STATION_IDS.jr_east.ueno]: new StationInfo('上野', []),
  // [STATION_IDS.jr_east.tabata]: {
  //   name: '田端',
  // },
  // [STATION_IDS.jr_east.urawa]: {
  //   name: '浦和',
  // },
  // [STATION_IDS.jr_east.minami_urawa]: {
  //   name: '南浦和',
  // },
  // [STATION_IDS.jr_east.warabi]: {
  //   name: '蕨',
  // },
  // [STATION_IDS.jr_east.nishikawaguchi]: {
  //   name: '西川口',
  // },
  // [STATION_IDS.jr_east.kawaguti]: {
  //   name: '川口',
  // },
  // [STATION_IDS.jr_east.akahane]: {
  //   name: '赤羽',
  // },
  // [STATION_IDS.jr_east.higashijujo]: {
  //   name: '東十条',
  // },
  // [STATION_IDS.jr_east.ouji]: {
  //   name: '王子',
  // },
  // [STATION_IDS.jr_east.kaminakazato]: {
  //   name: '上中里',
  // },

  // [STATION_IDS.jr_east.tabata]: {
  //   name: '田端',
  //   exchanges: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  // },
  // [STATION_IDS.jr_east.nishinippori]: {
  //   name: '西日暮里',
  // },
  // [STATION_IDS.jr_east.nippori]: {
  //   name: '日暮里',
  // },
  // [STATION_IDS.jr_east.uguisudani]: {
  //   name: '鶯谷',
  //   exchanges: [LINE_IDS.jr_east.yamanote],
  // },
  // [STATION_IDS.jr_east.ueno]: {
  //   name: '上野',
  //   exchanges: [
  //     LINE_IDS.jr_east.keihin_touhoku,
  //     LINE_IDS.jr_east.yamanote,
  //     LINE_IDS.jr_east.takasaki,
  //     LINE_IDS.jr_east.tokiwa,
  //     LINE_IDS.jr_east.utunomiya,
  //     LINE_IDS.tokyo_metro.marunouchi,
  //     LINE_IDS.tokyo_metro.hibiya,
  //     LINE_IDS.jr_east.shinkansen.jouetsu,
  //   ],
  // },
  // [STATION_IDS.jr_east.okachimachi]: {
  //   name: '御徒町',
  // },
  // [STATION_IDS.jr_east.akihabara]: {
  //   name: '秋葉原',
  //   exchanges: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  // },
  // [STATION_IDS.jr_east.kanda]: {
  //   name: '神田',
  //   exchanges: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.chuo, LINE_IDS.jr_east.keihin_touhoku],
  // },
  // [STATION_IDS.jr_east.tokyo]: {
  //   name: '東京',
  //   exchanges: [
  //     LINE_IDS.jr_east.chuo,
  //     LINE_IDS.jr_east.tokaido,
  //     LINE_IDS.jr_east.yamanote,
  //     LINE_IDS.jr_east.shinkansen.jouetsu,
  //     LINE_IDS.jr_east.keihin_touhoku,
  //     LINE_IDS.jr_east.takasaki,
  //     LINE_IDS.jr_east.utunomiya,
  //   ],
  // },
  // [STATION_IDS.jr_east.yurakucho]: {
  //   name: '有楽町',
  //   exchanges: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  // },
  // [STATION_IDS.jr_east.shinbashi]: {
  //   name: '新橋',
  //   exchanges: [
  //     LINE_IDS.jr_east.tokaido,
  //     LINE_IDS.jr_east.yamanote,
  //     LINE_IDS.jr_east.keihin_touhoku,
  //   ],
  // },
  // [STATION_IDS.jr_east.hamamatsucho]: {
  //   name: '浜松町',
  //   exchanges: [LINE_IDS.jr_east.yamanote],
  // },
  // [STATION_IDS.jr_east.tamachi]: {
  //   name: '田町',
  //   exchanges: [LINE_IDS.jr_east.yamanote],
  // },
  // [STATION_IDS.jr_east.takanawa_gateway]: {
  //   name: '高輪ゲートウェイ',
  //   exchanges: [LINE_IDS.jr_east.yamanote],
  // },
  // [STATION_IDS.jr_east.shinagawa]: {
  //   name: '品川',
  //   exchanges: [LINE_IDS.jr_east.tokaido, LINE_IDS.jr_east.yamanote],
  // },
  // [STATION_IDS.jr_east.oimachi]: {
  //   name: '大井町',
  // },
  // [STATION_IDS.jr_east.omori]: {
  //   name: '大森',
  // },
  // [STATION_IDS.jr_east.kamata]: {
  //   name: '蒲田',
  // },
  // [STATION_IDS.jr_east.kawasaki]: {
  //   name: '川崎',
  //   exchange: [LINE_IDS.jr_east.tokaido],
  // },
  // [STATION_IDS.jr_east.tsurumi]: {
  //   name: '鶴見',
  // },
  // [STATION_IDS.jr_east.shinkoyasu]: {
  //   name: '新子安',
  // },
  // [STATION_IDS.jr_east.higashikanagawa]: {
  //   name: '東神奈川',
  // },
  // [STATION_IDS.jr_east.yokohama]: {
  //   name: '横浜',
  //   exchanges: [
  //     LINE_IDS.jr_east.tokaido,
  //     LINE_IDS.jr_east.yokohama,
  //     LINE_IDS.jr_east.negishi,
  //     LINE_IDS.sagami.honsen,
  //   ],
  // },
  // [STATION_IDS.jr_east.shinjuku]: {
  //   name: '新宿',
  //   exchanges: [
  //     LINE_IDS.odakyu.odawara,
  //     LINE_IDS.jr_east.saikyou,
  //     LINE_IDS.jr_east.chuo,
  //     LINE_IDS.keiou.keiou,
  //     LINE_IDS.keiou.keioushinsen,
  //     LINE_IDS.tokyo_metro.marunouchi,
  //     LINE_IDS.tokyo_koutsu_kyoku.oedo,
  //     LINE_IDS.jr_east.shonan_shinjuku,
  //   ],
  // },
  // [STATION_IDS.jr_east.shibuya]: {
  //   name: '渋谷',
  //   exchanges: [
  //     LINE_IDS.jr_east.saikyou,
  //     LINE_IDS.jr_east.shonan_shinjuku,
  //     LINE_IDS.keiou.inogashira,
  //     LINE_IDS.tokyo_metro.ginza,
  //     LINE_IDS.tokyo_metro.hanzoumon,
  //     LINE_IDS.tokyo_metro.hukutoshin,
  //     LINE_IDS.tokyu.toyoko,
  //     LINE_IDS.tokyu.denentoshi,
  //   ],
  // },
  // [STATION_IDS.jr_east.ebisu]: {
  //   name: '恵比寿',
  //   exchanges: [LINE_IDS.jr_east.saikyou],
  // },
  // [STATION_IDS.jr_east.meguro]: {
  //   name: '目黒',
  // },
  // [STATION_IDS.jr_east.gotanda]: {
  //   name: '五反田',
  // },
  // [STATION_IDS.jr_east.osaki]: {
  //   name: '大崎',
  //   exchanges: [LINE_IDS.jr_east.saikyou, LINE_IDS.jr_east.yamanote],
  // },
}
