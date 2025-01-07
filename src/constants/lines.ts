import { Line } from '@/types/line'
import { LINE_IDS, STATION_IDS } from './ids'
import { KindDef } from '@/types/kind-def'
import { StopStationDef } from '@/types/stop-station-def'

const LOCAL_ONLY:KindDef[] = [];

/** 路線定義 */
export const LINES = {
  [LINE_IDS.jr_east.tokaido]: new Line('東海道本線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.tokyo, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.shinbashi, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.shinagawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.kawasaki, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.yokohama, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.totsuka, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.ofuna, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.hujisawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.tsujido, []),
    new StopStationDef(STATION_IDS.jr_east.chigasaki, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.hiratsuka, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.oiso, []),
    new StopStationDef(STATION_IDS.jr_east.ninomiya, []),
    new StopStationDef(STATION_IDS.jr_east.kozu, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.kamonomiya, []),
    new StopStationDef(STATION_IDS.jr_east.odawara, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.hayakawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.nebukawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.manazuru, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.yugawara, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.atami, ["acty"]),
  ]),
  [LINE_IDS.jr_east.keihin_touhoku]: new Line('京浜東北線', 'JR東日本', [new KindDef('快速', 'rapid')],[
      new StopStationDef(STATION_IDS.jr_east.omiya, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.saitama_shintoshin, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.yono, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.urawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.minami_urawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.warabi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.nishikawaguchi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kawaguti, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.akahane, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.higashijujo, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.ouji, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kaminakazato, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tabata, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.nishinippori),
      new StopStationDef(STATION_IDS.jr_east.nippori),
      new StopStationDef(STATION_IDS.jr_east.uguisudani),
      new StopStationDef(STATION_IDS.jr_east.ueno, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.okachimachi),
      new StopStationDef(STATION_IDS.jr_east.akihabara, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kanda, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tokyo, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.yurakucho),
      new StopStationDef(STATION_IDS.jr_east.shinbashi),
      new StopStationDef(STATION_IDS.jr_east.hamamatsucho, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tamachi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.takanawa_gateway, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.shinagawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.oimachi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.omori, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kamata, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kawasaki, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tsurumi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.shinkoyasu, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.higashikanagawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.yokohama, ["rapid"]),
  ]),
  [LINE_IDS.jr_east.yamanote]: new Line('山手線', 'JR東日本', [], [
      new StopStationDef(STATION_IDS.jr_east.shinagawa, []),
      new StopStationDef(STATION_IDS.jr_east.takanawa_gateway, []),
      new StopStationDef(STATION_IDS.jr_east.tamachi, []),
      new StopStationDef(STATION_IDS.jr_east.hamamatsucho, []),
      new StopStationDef(STATION_IDS.jr_east.shinbashi, []),
      new StopStationDef(STATION_IDS.jr_east.yurakucho, []),
      new StopStationDef(STATION_IDS.jr_east.tokyo, []),
      new StopStationDef(STATION_IDS.jr_east.kanda, []),
      new StopStationDef(STATION_IDS.jr_east.akihabara, []),
      new StopStationDef(STATION_IDS.jr_east.okachimachi, []),
      new StopStationDef(STATION_IDS.jr_east.ueno, []),
      new StopStationDef(STATION_IDS.jr_east.uguisudani, []),
      new StopStationDef(STATION_IDS.jr_east.nippori, []),
      new StopStationDef(STATION_IDS.jr_east.nishinippori, []),
      new StopStationDef(STATION_IDS.jr_east.tabata, []),
      new StopStationDef(STATION_IDS.jr_east.komagome, []),
      new StopStationDef(STATION_IDS.jr_east.sugamo, []),
      new StopStationDef(STATION_IDS.jr_east.otsuka, []),
      new StopStationDef(STATION_IDS.jr_east.ikebukuro, []),
      new StopStationDef(STATION_IDS.jr_east.mejiro, []),
      new StopStationDef(STATION_IDS.jr_east.takadanobaba, []),
      new StopStationDef(STATION_IDS.jr_east.shinokubo, []),
      new StopStationDef(STATION_IDS.jr_east.shinjuku, []),
      new StopStationDef(STATION_IDS.jr_east.yoyogi, []),
      new StopStationDef(STATION_IDS.jr_east.harajuku, []),
      new StopStationDef(STATION_IDS.jr_east.shibuya, []),
      new StopStationDef(STATION_IDS.jr_east.ebisu, []),
      new StopStationDef(STATION_IDS.jr_east.meguro, []),
      new StopStationDef(STATION_IDS.jr_east.gotanda, []),
      new StopStationDef(STATION_IDS.jr_east.osaki, []),
  ]),
  [LINE_IDS.jr_east.yokohama]: new Line('横浜線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.hachiouji, []),
    new StopStationDef(STATION_IDS.jr_east.katakura, []),
    new StopStationDef(STATION_IDS.jr_east.hachiouji_minamino, []),
    new StopStationDef(STATION_IDS.jr_east.aihara, []),
    new StopStationDef(STATION_IDS.jr_east.hashimoto, []),
    new StopStationDef(STATION_IDS.jr_east.sagamihara, []),
    new StopStationDef(STATION_IDS.jr_east.huchinobe, []),
    new StopStationDef(STATION_IDS.jr_east.kobuchi, []),
    new StopStationDef(STATION_IDS.jr_east.machida, []),
    new StopStationDef(STATION_IDS.jr_east.naruse, []),
    new StopStationDef(STATION_IDS.jr_east.nagatsuta, []),
    new StopStationDef(STATION_IDS.jr_east.tokaichiba, []),
    new StopStationDef(STATION_IDS.jr_east.nakayama, []),
    new StopStationDef(STATION_IDS.jr_east.kamoi, []),
    new StopStationDef(STATION_IDS.jr_east.kodukue, []),
    new StopStationDef(STATION_IDS.jr_east.shinyokohama, []),
    new StopStationDef(STATION_IDS.jr_east.kikuna, []),
    new StopStationDef(STATION_IDS.jr_east.oguchi, []),
    new StopStationDef(STATION_IDS.jr_east.higashi_kanagawa, []),
    new StopStationDef(STATION_IDS.jr_east.yokohama, []),
    new StopStationDef(STATION_IDS.jr_east.sakuragicho, []),
    new StopStationDef(STATION_IDS.jr_east.kannai, []),
    new StopStationDef(STATION_IDS.jr_east.ishikawacho, []),
    new StopStationDef(STATION_IDS.jr_east.yokohama, []),
    new StopStationDef(STATION_IDS.jr_east.negishi, []),
    new StopStationDef(STATION_IDS.jr_east.isogo, []),
    new StopStationDef(STATION_IDS.jr_east.shin_sugita, []),
    new StopStationDef(STATION_IDS.jr_east.youkoudai, []),
    new StopStationDef(STATION_IDS.jr_east.kounandai, []),
    new StopStationDef(STATION_IDS.jr_east.hongoudai, []),
    new StopStationDef(STATION_IDS.jr_east.ofuna, []),
  ]),
  [LINE_IDS.jr_east.negishi]: new Line('根岸線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.yokohama, []),
    new StopStationDef(STATION_IDS.jr_east.sakuragicho, []),
    new StopStationDef(STATION_IDS.jr_east.kannai, []),
    new StopStationDef(STATION_IDS.jr_east.ishikawacho, []),
    new StopStationDef(STATION_IDS.jr_east.yamate, []),
    new StopStationDef(STATION_IDS.jr_east.negishi, []),
    new StopStationDef(STATION_IDS.jr_east.isogo, []),
    new StopStationDef(STATION_IDS.jr_east.shin_sugita, []),
    new StopStationDef(STATION_IDS.jr_east.youkoudai, []),
    new StopStationDef(STATION_IDS.jr_east.kounandai, []),
    new StopStationDef(STATION_IDS.jr_east.hongoudai, []),
    new StopStationDef(STATION_IDS.jr_east.ofuna, []),
  ]),
  [LINE_IDS.jr_east.yokosuka]: new Line('横須賀線', 'JR東日本', [], []),
  // [LINE_IDS.jr_east.kawagoe]: {
  //   name: '川越線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.saikyou]: {
  //   name: '埼京線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  [LINE_IDS.jr_east.chuo]: new Line('中央線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.shonan_shinjuku]: new Line('湘南新宿ライン', 'JR東日本', [], []),
  [LINE_IDS.jr_east.takasaki]: new Line('高崎線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.utunomiya]: new Line('宇都宮線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.musashino]: new Line('武蔵野線', 'JR東日本', [], []),
  // [LINE_IDS.jr_east.keiyou]: new Line('京葉線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.nanbu]: new Line('南武線', 'JR東日本', [], []),
  // [LINE_IDS.jr_east.tokiwa]: {
  //   name: '常盤線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.saitama_shintoshi.new_shuttle]: {
  //   name: 'ニューシャトル',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.toubu.urban_park_line]: {
  //   name: 'アーバンパークライン',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.akita]: {
  //   name: '秋田新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.hayabusa]: {
  //   name: '新幹線はやぶさ',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.hokuriku]: {
  //   name: '北陸新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.jouetsu]: {
  //   name: '上越新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.tohoku]: {
  //   name: '東北新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.yamagata]: {
  //   name: '山形新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  [LINE_IDS.sagami.honsen]: new Line('相鉄本線', '相模鉄道',
    [new KindDef("快速", "rapid"), new KindDef("特急", "express"), new KindDef("通勤急行", "commuter")],
    [
      new StopStationDef(STATION_IDS.sagami.ebina, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.kashiwadai, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.sagamino, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.yamato, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.seya, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.mitsukyo, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.kibougaoka, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.futamatagawa, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.tsurugamine, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.nishiya, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.kamihoshikawa, []),
      new StopStationDef(STATION_IDS.sagami.wadacho, []),
      new StopStationDef(STATION_IDS.sagami.hoshikawa, ["rapid"]),
      new StopStationDef(STATION_IDS.sagami.tennocho, []),
      new StopStationDef(STATION_IDS.sagami.nishiyokohama, []),
      new StopStationDef(STATION_IDS.sagami.hiranumabashi, []),
      new StopStationDef(STATION_IDS.jr_east.yokohama, ["rapid", "express", "commuter"]),
    ]
  ),
  [LINE_IDS.sagami.izumino]: new Line('いずみ野線', '相模鉄道', [], []),
  // // 東京メトロ
  // [LINE_IDS.tokyo_metro.marunouchi]: {
  //   name: '丸の内線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.tokyo_metro.hibiya]: {
  //   name: '日比谷線',
  //   kinds: [],
  //   stations: [],
  // },
  // //小田急
  [LINE_IDS.odakyu.odawara]: new Line('小田原線', '小田急電鉄', [], []),
  [LINE_IDS.odakyu.enoshima]: new Line('江ノ島線', '小田急電鉄', LOCAL_ONLY, [
    new StopStationDef(STATION_IDS.odakyu.sagamiono, [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.odakyu.enoshima,
    ]),
    new StopStationDef(STATION_IDS.odakyu.higashirinkan),
    new StopStationDef(STATION_IDS.odakyu.chuorinkan),
    new StopStationDef(STATION_IDS.odakyu.minamirinkan),
    new StopStationDef(STATION_IDS.odakyu.tsuruma),
    new StopStationDef(STATION_IDS.odakyu.yamato),
    new StopStationDef(STATION_IDS.odakyu.sakuragaoka),
    new StopStationDef(STATION_IDS.odakyu.kouzashibuya),
    new StopStationDef(STATION_IDS.odakyu.chogo),
    new StopStationDef(STATION_IDS.odakyu.shonandai),
    new StopStationDef(STATION_IDS.odakyu.mutsuainichidaimae),
    new StopStationDef(STATION_IDS.odakyu.zengyo),
    new StopStationDef(STATION_IDS.odakyu.fujisawahonmachi),
    new StopStationDef(STATION_IDS.jr_east.hujisawa),
    new StopStationDef(STATION_IDS.odakyu.kugenuma),
    new StopStationDef(STATION_IDS.odakyu.honkugenuma),
    new StopStationDef(STATION_IDS.odakyu.kugenumakaigan),
    new StopStationDef(STATION_IDS.odakyu.kataseenoshima),
  ]),
  // // 東京都交通局
  // [LINE_IDS.tokyo_koutsu_kyoku.oedo]: {
  //   name: '大江戸線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.tokyo_koutsu_kyoku.shinjuku]: {
  //   name: '新宿線',
  //   kinds: [],
  //   stations: [],
  // },
  // 都営地下鉄
  [LINE_IDS.tokyo_subway.asakusa]: new Line('浅草線', '東京都営地下鉄', [], []),
  // // 京王電鉄
  // [LINE_IDS.keiou.keiou]: {
  //   name: '京王線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.keiou.keioushinsen]: {
  //   name: '京王新線',
  //   kinds: [],
  //   stations: [],
  // },
  [LINE_IDS.enoshima.enoshima]: new Line('江ノ島電鉄線', '江ノ島電鉄', [], []),
  [LINE_IDS.shonam_monorail.shonan_monorail]: new Line('湘南モノレール', '湘南モノレール', [], []),
  // 東急
  [LINE_IDS.tokyu.toyoko]: new Line('東横線', '東急電鉄', [], []),
  [LINE_IDS.tokyu.meguro]: new Line('目黒線', '東急電鉄', [], []),
  [LINE_IDS.tokyu.ikegami]: new Line('池上線', '東急電鉄', [], []),
  [LINE_IDS.tokyu.tamagawa]: new Line('多摩川線', '東急電鉄', LOCAL_ONLY, [
    new StopStationDef(STATION_IDS.tokyu.tamagawa),
    new StopStationDef(STATION_IDS.tokyu.numabe),
    new StopStationDef(STATION_IDS.tokyu.unoki),
    new StopStationDef(STATION_IDS.tokyu.simomaruko),
    new StopStationDef(STATION_IDS.tokyu.musashishinden),
    new StopStationDef(STATION_IDS.tokyu.yagutiwatashi),
    new StopStationDef(STATION_IDS.jr_east.kamata),
  ]),
  [LINE_IDS.tokyu.denentoshi]: new Line('田園都市線', '東急電鉄',
    [
      new KindDef("急行", "express"),
      new KindDef("準急", "semi-express")
    ],
    [
      new StopStationDef(STATION_IDS.jr_east.shibuya, ["express", "semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.ikejiriohashi, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.sangenjaya, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.komazawadaigaku, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.sakurashinmachi, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.yoga, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.futakotamagawa, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.futako_shinchi, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.takatsu),
      new StopStationDef(STATION_IDS.jr_east.mizonokuchi, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.kajigaya),
      new StopStationDef(STATION_IDS.tokyu.miyazakidai),
      new StopStationDef(STATION_IDS.tokyu.miyamaedaira),
      new StopStationDef(STATION_IDS.tokyu.washinuma, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tama_plaza, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.azamino, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.eda),
      new StopStationDef(STATION_IDS.tokyu.ichigao),
      new StopStationDef(STATION_IDS.tokyu.fujigaoka),
      new StopStationDef(STATION_IDS.tokyu.aobadai, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tana),
      new StopStationDef(STATION_IDS.jr_east.nagatsuta, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tsukushino, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.suzukakedai, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.minamimachida_grandberry_park, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tsukimino, ["semi-express"]),
      new StopStationDef(STATION_IDS.odakyu.chuorinkan, ["express","semi-express"]),
  ]),
  [LINE_IDS.tokyu.oimachi]: new Line('大井町線', '東急電鉄', [new KindDef("急行・準急", "express")], [
    new StopStationDef(STATION_IDS.jr_east.oimachi, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.shimoshinmei),
    new StopStationDef(STATION_IDS.tokyu.togoshikouen),
    new StopStationDef(STATION_IDS.tokyu.nakanobe),
    new StopStationDef(STATION_IDS.tokyu.ebaracho),
    new StopStationDef(STATION_IDS.tokyu.hatanodai, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.kitasenzoku),
    new StopStationDef(STATION_IDS.tokyu.ookayama, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.midorigaoka),
    new StopStationDef(STATION_IDS.tokyu.jiyugaoka, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.kuhonbutsu),
    new StopStationDef(STATION_IDS.tokyu.oyamadai),
    new StopStationDef(STATION_IDS.tokyu.todoroki),
    new StopStationDef(STATION_IDS.tokyu.kaminoge),
    new StopStationDef(STATION_IDS.tokyu.futakotamagawa, ["express"]),
    new StopStationDef(STATION_IDS.jr_east.mizonokuchi),
  ]),
  /**目黒 */
  [LINE_IDS.tokyu.meguro]: new Line('目黒線', '東急電鉄', [new KindDef("急行・準急", "express")], [
    new StopStationDef(STATION_IDS.jr_east.meguro, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.fudomae),
    new StopStationDef(STATION_IDS.tokyu.musashikoyama, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.nishikoyama),
    new StopStationDef(STATION_IDS.tokyu.senzoku),
    new StopStationDef(STATION_IDS.tokyu.ookayama, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.okuzawa),
    new StopStationDef(STATION_IDS.tokyu.denenchohu, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.tamagawa, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.shinmaruko),
    new StopStationDef(STATION_IDS.jr_east.musashikosugi, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.motosumiyoshi),
    new StopStationDef(STATION_IDS.tokyu.hiyoshi, ["express"]),
  ]),
  /** りんかい線 */
  [LINE_IDS.toukyo_rinkai_kousoku.rinkai]: new Line('りんかい線', '東京臨海高速鉄道', [], []),
}
