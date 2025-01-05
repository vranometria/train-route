import { Line } from '@/types/line'
import { LINE_IDS, STATION_IDS } from './ids'
import { KindDef } from '@/types/kind-def'
import { StopStationDef } from '@/types/stop-station-def'

/** 路線 */
export const LINES = {
  // [LINE_IDS.jr_east.tokaido]: {
  //   name: '東海道本線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // 京浜東北
    [LINE_IDS.jr_east.keihin_touhoku]: new Line(
      '京浜東北線',
      'JR東日本',
      [new KindDef('快速', 'rapid')],
      [
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
        new StopStationDef(STATION_IDS.jr_east.nishinippori, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.nippori, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.uguisudani, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.ueno, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.okachimachi, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.akihabara, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.kanda, ["rapid"]),
        new StopStationDef(STATION_IDS.jr_east.tokyo, ["rapid"]),
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
      ]
    ),
    [LINE_IDS.jr_east.yamanote]: new Line(
      '山手線',
      'JR東日本',
      [],
      [
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
      ]
    ),
  // [LINE_IDS.jr_east.yokohama]: {
  //   name: '横浜線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.negishi]: {
  //   name: '根岸線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
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
  // [LINE_IDS.jr_east.chuo]: {
  //   name: '中央線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shonan_shinjuku]: {
  //   name: '湘南新宿ライン',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.takasaki]: {
  //   name: '高崎線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.utunomiya]: {
  //   name: '宇都宮線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
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
  // [LINE_IDS.sagami.honsen]: {
  //   name: '相鉄線',
  //   kinds: [],
  //   stations: [],
  // },
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
  // [LINE_IDS.odakyu.odawara]: {
  //   name: '小田原線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.odakyu.enoshima]: {
  //   name: '江ノ島線',
  //   kinds: [],
  //   stations: [],
  // },
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
}
