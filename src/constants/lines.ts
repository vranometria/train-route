import { Line } from '@/types/line'
import { LINE_IDS, STATION_IDS } from './ids'

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
      [{
        name: '快速',
        prop: 'rapid',
      }],
      [
        {
          id: STATION_IDS.jr_east.omiya,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.saitama_shintoshin,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.yono,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.urawa,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.minami_urawa,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.warabi,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.nishikawaguchi,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.kawaguti,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.akahane,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.higashijujo,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.ouji,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.kaminakazato,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.tabata,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.nishinippori,
        },
        {
          id: STATION_IDS.jr_east.nippori,
        },
        {
          id: STATION_IDS.jr_east.uguisudani,
        },
        {
          id: STATION_IDS.jr_east.ueno,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.okachimachi,
        },
        {
          id: STATION_IDS.jr_east.akihabara,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.kanda,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.tokyo,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.hamamatsucho,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.tamachi,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.takanawa_gateway,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.shinagawa,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.oimachi,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.omori,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.kamata,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.kawasaki,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.tsurumi,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.shinkoyasu,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.higashikanagawa,
          rapid: true,
        },
        {
          id: STATION_IDS.jr_east.yokohama,
          rapid: true,
        },
      ],
    ),
    [LINE_IDS.jr_east.yamanote]: {
      name: '山手線',
      company: 'JR東日本',
      kinds: [],
      stations: [
        {
          id: STATION_IDS.jr_east.shinagawa,
        },
        {
          id: STATION_IDS.jr_east.takanawa_gateway,
        },
        {
          id: STATION_IDS.jr_east.tamachi,
        },
        {
          id: STATION_IDS.jr_east.hamamatsucho,
        },
        {
          id: STATION_IDS.jr_east.shinbashi,
        },
        {
          id: STATION_IDS.jr_east.yurakucho,
        },
        {
          id: STATION_IDS.jr_east.tokyo,
        },
        {
          id: STATION_IDS.jr_east.kanda,
        },
        {
          id: STATION_IDS.jr_east.akihabara,
        },
        {
          id: STATION_IDS.jr_east.okachimachi,
        },
        {
          id: STATION_IDS.jr_east.ueno,
        },
        {
          id: STATION_IDS.jr_east.uguisudani,
        },
        {
          id: STATION_IDS.jr_east.nippori,
        },
        {
          id: STATION_IDS.jr_east.nishinippori,
        },
        {
          id: STATION_IDS.jr_east.tabata,
        },
        {
          id: STATION_IDS.jr_east.komagome,
        },
        {
          id: STATION_IDS.jr_east.sugamo,
        },
        {
          id: STATION_IDS.jr_east.otsuka,
        },
        {
          id: STATION_IDS.jr_east.ikebukuro,
        },
        {
          id: STATION_IDS.jr_east.mejiro,
        },
        {
          id: STATION_IDS.jr_east.takadanobaba,
        },
        {
          id: STATION_IDS.jr_east.shinokubo,
        },
        {
          id: STATION_IDS.jr_east.shinjuku,
        },
        {
          id: STATION_IDS.jr_east.yoyogi,
        },
        {
          id: STATION_IDS.jr_east.harajuku,
        },
        {
          id: STATION_IDS.jr_east.shibuya,
        },
        {
          id: STATION_IDS.jr_east.ebisu,
        },
        {
          id: STATION_IDS.jr_east.meguro,
        },
        {
          id: STATION_IDS.jr_east.gotanda,
        },
        {
          id: STATION_IDS.jr_east.osaki,
        },
      ],
    },
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
