import { StationInfo } from '@/types/station-info'
import { LINE_IDS, STATION_IDS } from './ids'

export const STATIONS = {
  [STATION_IDS.jr_east.omiya]: new StationInfo('大宮',[
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
  ]),
  [STATION_IDS.jr_east.saitama_shintoshin]: new StationInfo('さいたま新都心',[]),
  [STATION_IDS.jr_east.yono]: new StationInfo('与野', []),
  [STATION_IDS.jr_east.kitaurawa]: new StationInfo('北浦和', []),
  [STATION_IDS.jr_east.ueno]: new StationInfo('上野', []),
  [STATION_IDS.jr_east.tabata]: new StationInfo('田端', []),
  [STATION_IDS.jr_east.urawa]: new StationInfo('浦和', []),
  [STATION_IDS.jr_east.minami_urawa]: new StationInfo('南浦和', []),
  [STATION_IDS.jr_east.warabi]: new StationInfo('蕨', []),
  [STATION_IDS.jr_east.nishikawaguchi]: new StationInfo('西川口', []),
  [STATION_IDS.jr_east.kawaguti]: new StationInfo('川口', []),
  [STATION_IDS.jr_east.akahane]: new StationInfo('赤羽', []),
  [STATION_IDS.jr_east.higashijujo]: new StationInfo('東十条', []),
  [STATION_IDS.jr_east.ouji]:  new StationInfo('王子', []),
  [STATION_IDS.jr_east.kaminakazato]: new StationInfo('上中里', []),
  [STATION_IDS.jr_east.tabata]: new StationInfo('田端', []),
  [STATION_IDS.jr_east.nishinippori]: new StationInfo('西日暮里', []),
  [STATION_IDS.jr_east.nippori]: new StationInfo('日暮里', []),
  [STATION_IDS.jr_east.uguisudani]:  new StationInfo('鶯谷', [LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.ueno]: new StationInfo('上野', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.tokiwa,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.jr_east.shinkansen.jouetsu,
  ]),
  [STATION_IDS.jr_east.okachimachi]: new StationInfo('御徒町', []),
  [STATION_IDS.jr_east.akihabara]: new StationInfo('秋葉原', [
    LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  ),
  [STATION_IDS.jr_east.kanda]: new StationInfo('神田', [
    LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.chuo, LINE_IDS.jr_east.keihin_touhoku],
  ),
  [STATION_IDS.jr_east.tokyo]: new StationInfo('東京', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.utunomiya,
  ]),
  [STATION_IDS.jr_east.yurakucho]: new StationInfo('有楽町', [
    LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  ),
  [STATION_IDS.jr_east.shinbashi]: new StationInfo('新橋', [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
    ]
  ),
  [STATION_IDS.jr_east.hamamatsucho]: new StationInfo('浜松町', [LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.tamachi]: new StationInfo('田町', [LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.takanawa_gateway]: new StationInfo('高輪ゲートウェイ', [LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.shinagawa]: new StationInfo('品川', [LINE_IDS.jr_east.tokaido, LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.oimachi]: new StationInfo('大井町', []),
  [STATION_IDS.jr_east.omori]: new StationInfo('大森', []),
  [STATION_IDS.jr_east.kamata]: new StationInfo('蒲田', []),
  [STATION_IDS.jr_east.kawasaki]: new StationInfo('川崎', [LINE_IDS.jr_east.tokaido]),
  [STATION_IDS.jr_east.tsurumi]: new StationInfo('鶴見', []),
  [STATION_IDS.jr_east.shinkoyasu]: new StationInfo('新子安', []),
  [STATION_IDS.jr_east.higashikanagawa]: new StationInfo('東神奈川', []),
  [STATION_IDS.jr_east.yokohama]: new StationInfo('横浜', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.yokohama,
    LINE_IDS.jr_east.negishi,
    LINE_IDS.sagami.honsen,
  ]),
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
