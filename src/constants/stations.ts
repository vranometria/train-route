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
    LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.keihin_touhoku
  ], "かんだ"),
  [STATION_IDS.jr_east.tokyo]: new StationInfo('東京',[
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.utunomiya
  ],"とうきょう",),
  [STATION_IDS.jr_east.ochanomizu]: new StationInfo('御茶ノ水', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.marunouchi,
  ], "おちゃのみず"),
  [STATION_IDS.jr_east.yotsuya]: new StationInfo('四ッ谷', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.nanboku,
  ], "よつや"),
  [STATION_IDS.jr_east.nakano]: new StationInfo('中野', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.touzai,
  ], "なかの"),
  [STATION_IDS.jr_east.kouenji]: new StationInfo('高円寺', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.touzai,
  ] , "こうえんじ"),
  [STATION_IDS.jr_east.asagaya]: new StationInfo('阿佐ヶ谷', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.touzai,
  ], "あさがや"),
  [STATION_IDS.jr_east.ogikubo]: new StationInfo('荻窪', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.touzai,
  ], "おぎくぼ"),
  [STATION_IDS.jr_east.nishiogikubo]: new StationInfo('西荻窪', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.keiou.keiou,
  ], "にしおぎくぼ"),
  [STATION_IDS.jr_east.kichijoji]: new StationInfo('吉祥寺', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.keiou.inogashira,
    LINE_IDS.tokyo_metro.touzai,
  ], "きちじょうじ"),
  [STATION_IDS.jr_east.mitaka]: new StationInfo('三鷹', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
  ], "みたか"),
  [STATION_IDS.jr_east.musashisakai]: new StationInfo('武蔵境', [
    LINE_IDS.seibu.tamagawa,
  ], "むさしさかい"),
  [STATION_IDS.jr_east.higashikoganei]: new StationInfo('東小金井', [], "ひがしこがねい"),
  [STATION_IDS.jr_east.musashikoganei]: new StationInfo('武蔵小金井', [], "むさしこがねい"),
  [STATION_IDS.jr_east.kokubunji]: new StationInfo('国分寺', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.seibu.tamako,
    LINE_IDS.seibu.kokubunji,
  ], "こくぶんじ"),
  [STATION_IDS.jr_east.nishikokubunji]: new StationInfo('西国分寺', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.musashino,
  ], "にしこくぶんじ"),
  [STATION_IDS.jr_east.kunitachi]: new StationInfo('国立', [], "くにたち"),
  [STATION_IDS.jr_east.tachikawa]: new StationInfo('立川', [
    LINE_IDS.jr_east.oume,
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.chuo_honsen,
    LINE_IDS.tama_monorail.tama_monorail,
  ], "たちかわ"),
  [STATION_IDS.jr_east.hino]: new StationInfo('日野', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.chuo_honsen,
  ], "ひの"),
  [STATION_IDS.jr_east.toyoda]: new StationInfo('豊田', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.chuo_honsen,
  ],  "とよだ"),
  [STATION_IDS.jr_east.nishihachiouji]: new StationInfo('西八王子', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.chuo_honsen,
  ], "にしはちおうじ"),
  [STATION_IDS.jr_east.takao]: new StationInfo('高尾', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.chuo_honsen,
    LINE_IDS.keiou.takao,
  ], "たかお"),
  [STATION_IDS.jr_east.yurakucho]: new StationInfo('有楽町', [
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.keihin_touhoku],
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
  [STATION_IDS.jr_east.shinagawa]: new StationInfo('品川', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.yokosuka,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.keikyu.honsen,
  ]),
  [STATION_IDS.jr_east.oimachi]: new StationInfo('大井町', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    LINE_IDS.tokyu.oimachi,
  ]),
  [STATION_IDS.jr_east.omori]: new StationInfo('大森', []),
  [STATION_IDS.jr_east.kamata]: new StationInfo('蒲田', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.tokyu.tamagawa,
    LINE_IDS.tokyu.ikegami,
  ]),
  [STATION_IDS.jr_east.kawasaki]: new StationInfo('川崎', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.keikyu.honsen,
  ]),
  [STATION_IDS.jr_east.tsurumi]: new StationInfo('鶴見', []),
  [STATION_IDS.jr_east.shinkoyasu]: new StationInfo('新子安', []),
  [STATION_IDS.jr_east.higashikanagawa]: new StationInfo('東神奈川', []),
  [STATION_IDS.jr_east.yokohama]: new StationInfo('横浜', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.yokohama,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.negishi,
    LINE_IDS.sagami.honsen,
  ]),
  [STATION_IDS.jr_east.shinjuku]: new StationInfo('新宿', [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.chuo,
      LINE_IDS.keiou.keiou,
      LINE_IDS.keiou.keioushinsen,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_koutsu_kyoku.oedo,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
  ),
  [STATION_IDS.jr_east.shibuya]: new StationInfo('渋谷', [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.keiou.inogashira,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.hukutoshin,
      LINE_IDS.tokyu.toyoko,
      LINE_IDS.tokyu.denentoshi,
    ],
  ),
  [STATION_IDS.jr_east.ebisu]: new StationInfo('恵比寿', [LINE_IDS.jr_east.saikyou]),
  [STATION_IDS.jr_east.meguro]: new StationInfo('目黒', [
    LINE_IDS.tokyu.meguro,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.tokyo_metro.nanboku,
    LINE_IDS.tokyo_subway.mita,
  ]),
  [STATION_IDS.jr_east.gotanda]: new StationInfo('五反田', []),
  [STATION_IDS.jr_east.osaki]: new StationInfo('大崎', [LINE_IDS.jr_east.saikyou, LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.uguisudani] : new StationInfo('鶯谷', [LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.nippori]: new StationInfo('日暮里', [LINE_IDS.jr_east.yamanote]),
  [STATION_IDS.jr_east.nishinippori]: new StationInfo('西日暮里', []),
  [STATION_IDS.jr_east.tabata]: new StationInfo('田端', []),
  [STATION_IDS.jr_east.komagome]: new StationInfo('駒込', []),
  [STATION_IDS.jr_east.sugamo]: new StationInfo('巣鴨', []),
  [STATION_IDS.jr_east.otsuka]: new StationInfo('大塚', []),
  [STATION_IDS.jr_east.ikebukuro]: new StationInfo('池袋', []),
  [STATION_IDS.jr_east.mejiro]: new StationInfo('目白', []),
  [STATION_IDS.jr_east.takadanobaba]: new StationInfo('高田馬場', []),
  [STATION_IDS.jr_east.shinokubo]: new StationInfo('新大久保', []),
  [STATION_IDS.jr_east.yoyogi]: new StationInfo('代々木', []),
  [STATION_IDS.jr_east.harajuku]: new StationInfo('原宿', []),

  [STATION_IDS.jr_east.hachiouji]: new StationInfo('八王子', []),
  [STATION_IDS.jr_east.katakura]: new StationInfo('片倉', []),
  [STATION_IDS.jr_east.hachiouji_minamino]: new StationInfo('八王子みなみ野', []),
  [STATION_IDS.jr_east.aihara]: new StationInfo('相原', []),
  [STATION_IDS.jr_east.hashimoto]: new StationInfo('橋本', []),
  [STATION_IDS.jr_east.sagamihara]: new StationInfo('相模原', []),
  [STATION_IDS.jr_east.huchinobe]: new StationInfo('淵野辺', []),
  [STATION_IDS.jr_east.kobuchi]: new StationInfo('古渕', []),
  [STATION_IDS.jr_east.machida]: new StationInfo('町田', []),
  [STATION_IDS.jr_east.naruse]: new StationInfo('成瀬', []),
  [STATION_IDS.jr_east.nagatsuta]: new StationInfo('長津田', [
    LINE_IDS.jr_east.yokohama,
    LINE_IDS.tokyu.denentoshi,
    LINE_IDS.tokyu.kodomonokuni,
  ]),
  [STATION_IDS.jr_east.tokaichiba]: new StationInfo('十日市場', []),
  [STATION_IDS.jr_east.nakayama]: new StationInfo('中山', []),
  [STATION_IDS.jr_east.kamoi]: new StationInfo('鴨居', []),
  [STATION_IDS.jr_east.kodukue]: new StationInfo('小机', []),
  [STATION_IDS.jr_east.shinyokohama]: new StationInfo('新横浜', []),
  [STATION_IDS.jr_east.kikuna]: new StationInfo('菊名', []),
  [STATION_IDS.jr_east.oguchi]: new StationInfo('大口', []),
  [STATION_IDS.jr_east.higashi_kanagawa]: new StationInfo('東神奈川', []),
  [STATION_IDS.jr_east.sakuragicho]: new StationInfo('桜木町', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.kannai]: new StationInfo('関内', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.ishikawacho]: new StationInfo('石川町', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.yamate]: new StationInfo('山手', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.negishi]: new StationInfo('根岸', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.isogo]: new StationInfo('磯子', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.shin_sugita]: new StationInfo('新杉田', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.youkoudai]: new StationInfo('洋光台', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.kounandai]: new StationInfo('港南台', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.hongoudai]: new StationInfo('本郷台', [
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.ofuna]: new StationInfo('大船', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.negishi,
    LINE_IDS.jr_east.yokohama,
  ]),
  [STATION_IDS.jr_east.totsuka]: new StationInfo('戸塚', []),
  [STATION_IDS.jr_east.hujisawa]: new StationInfo('藤沢', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.odakyu.enoshima,
  ]),
  [STATION_IDS.jr_east.tsujido]: new StationInfo('辻堂', []),
  [STATION_IDS.jr_east.chigasaki]: new StationInfo('茅ヶ崎', []),
  [STATION_IDS.jr_east.hiratsuka]: new StationInfo('平塚', []),
  [STATION_IDS.jr_east.oiso]: new StationInfo('大磯', []),
  [STATION_IDS.jr_east.ninomiya]: new StationInfo('二宮', []),
  [STATION_IDS.jr_east.kozu]: new StationInfo('国府津', []),
  [STATION_IDS.jr_east.kamonomiya]: new StationInfo('鴨宮', []),
  [STATION_IDS.jr_east.odawara]: new StationInfo('小田原', []),
  [STATION_IDS.jr_east.hayakawa]: new StationInfo('早川', []),
  [STATION_IDS.jr_east.nebukawa]: new StationInfo('根府川', []),
  [STATION_IDS.jr_east.manazuru]: new StationInfo('真鶴', []),
  [STATION_IDS.jr_east.yugawara ]: new StationInfo('湯河原', []),
  [STATION_IDS.jr_east.atami]: new StationInfo('熱海', []),
  // 南武線
  [STATION_IDS.jr_east.mizonokuchi]: new StationInfo('溝の口', [
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.tokyu.oimachi,
    LINE_IDS.tokyu.denentoshi,
  ]),
  [STATION_IDS.jr_east.musashikosugi]: new StationInfo('武蔵小杉', [
    LINE_IDS.tokyu.toyoko,
    LINE_IDS.tokyu.meguro,
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.jr_east.yokosuka,
    LINE_IDS.jr_east.shonan_shinjuku,
  ]),

  // 相模鉄道
  // ＞本線
  [STATION_IDS.sagami.ebina]: new StationInfo('海老名', [
    LINE_IDS.odakyu.odawara,
  ]),
  [STATION_IDS.sagami.kashiwadai]: new StationInfo('柏木台', []),
  [STATION_IDS.sagami.sagamiotsuka]: new StationInfo('相模大塚', []),

  [STATION_IDS.sagami.seya]: new StationInfo('瀬谷', []),
  [STATION_IDS.sagami.mitsukyo]: new StationInfo('三ツ境', []),
  [STATION_IDS.sagami.kibougaoka]: new StationInfo('希望ヶ丘', []),
  [STATION_IDS.sagami.futamatagawa]: new StationInfo('二俣川', [
    LINE_IDS.sagami.izumino,
  ]),
  [STATION_IDS.sagami.tsurugamine]: new StationInfo('鶴ヶ峰', []),
  [STATION_IDS.sagami.nishiya]: new StationInfo('西谷', [
    LINE_IDS.sagami.izumino,
  ]),
  [STATION_IDS.sagami.kamihoshikawa]: new StationInfo('上星川', []),
  [STATION_IDS.sagami.wadacho]: new StationInfo('和田町', []),
  [STATION_IDS.sagami.hoshikawa]: new StationInfo('星川', []),
  [STATION_IDS.sagami.tennocho]: new StationInfo('天王町', []),
  [STATION_IDS.sagami.nishiyokohama]: new StationInfo('西横浜', []),
  [STATION_IDS.sagami.hiranumabashi]: new StationInfo('平沼橋', []),

  [STATION_IDS.sagami.sagamino]: new StationInfo('さがみ野', []),
  // 小田急
  // ＞江ノ島線
  [STATION_IDS.odakyu.sagamiono]: new StationInfo('相模大野', [
    LINE_IDS.odakyu.odawara,
    LINE_IDS.odakyu.enoshima,
  ]),
  [STATION_IDS.odakyu.higashirinkan]: new StationInfo('東林間', []),
  [STATION_IDS.odakyu.chuorinkan]: new StationInfo('中央林間', [
    LINE_IDS.odakyu.enoshima,
    LINE_IDS.tokyu.denentoshi,
  ]),
  [STATION_IDS.odakyu.minamirinkan]: new StationInfo('南林間', []),
  [STATION_IDS.sagami.tsuruma]: new StationInfo('鶴間', []),
  [STATION_IDS.odakyu.yamato]: new StationInfo('大和', [
    LINE_IDS.odakyu.enoshima,
    LINE_IDS.sagami.honsen,
  ]),
  [STATION_IDS.odakyu.sakuragaoka]: new StationInfo('桜ヶ丘', []),
  [STATION_IDS.odakyu.kouzashibuya]: new StationInfo('高座渋谷', []),
  [STATION_IDS.odakyu.chogo]: new StationInfo('長後', []),
  [STATION_IDS.odakyu.shonandai]: new StationInfo('湘南台', []),
  [STATION_IDS.odakyu.mutsuainichidaimae]: new StationInfo('六会日大前', []),
  [STATION_IDS.odakyu.zengyo]: new StationInfo('善行', []),
  [STATION_IDS.odakyu.fujisawahonmachi]: new StationInfo('藤沢本町', []),
  [STATION_IDS.odakyu.kugenuma]: new StationInfo('鵠沼', []),
  [STATION_IDS.odakyu.honkugenuma]: new StationInfo('本鵠沼', []),
  [STATION_IDS.odakyu.kugenumakaigan]: new StationInfo('鵠沼海岸', []),
  [STATION_IDS.odakyu.kataseenoshima]: new StationInfo('片瀬江ノ島', []),
  // 東急
  // ＞田園都市線
  [STATION_IDS.tokyu.ikejiriohashi]: new StationInfo('池尻大橋'),
  [STATION_IDS.tokyu.sangenjaya]: new StationInfo('三軒茶屋', [
    LINE_IDS.tokyu.denentoshi,
    LINE_IDS.tokyu.setagaya,
  ]),
  [STATION_IDS.tokyu.komazawadaigaku]: new StationInfo('駒沢大学'),
  [STATION_IDS.tokyu.sakurashinmachi]: new StationInfo('桜新町'),
  [STATION_IDS.tokyu.yoga]: new StationInfo('用賀'),
  [STATION_IDS.tokyu.futakotamagawa]: new StationInfo('二子玉川', [
    LINE_IDS.tokyu.denentoshi,
    LINE_IDS.tokyu.oimachi,
  ]),
  [STATION_IDS.tokyu.futako_shinchi]: new StationInfo('二子新地'),
  [STATION_IDS.tokyu.takatsu]: new StationInfo('高津'),
  [STATION_IDS.tokyu.kajigaya]: new StationInfo('梶が谷'),
  [STATION_IDS.tokyu.miyazakidai]: new StationInfo('宮崎台'),
  [STATION_IDS.tokyu.miyamaedaira]: new StationInfo('宮前平'),
  [STATION_IDS.tokyu.washinuma]: new StationInfo('鷲沼'),
  [STATION_IDS.tokyu.tama_plaza]: new StationInfo('たまプラーザ'),
  [STATION_IDS.tokyu.azamino]: new StationInfo('あざみ野', [
    LINE_IDS.tokyu.denentoshi,
    LINE_IDS.yokohama_shieichikatetsu.blue_line,
  ]),
  [STATION_IDS.tokyu.eda]: new StationInfo('江田'),
  [STATION_IDS.tokyu.ichigao]: new StationInfo('市が尾'),
  [STATION_IDS.tokyu.fujigaoka]: new StationInfo('藤が丘'),
  [STATION_IDS.tokyu.aobadai]: new StationInfo('青葉台'),
  [STATION_IDS.tokyu.tana]: new StationInfo('田奈'),
  [STATION_IDS.tokyu.tsukushino]: new StationInfo('つくし野'),
  [STATION_IDS.tokyu.suzukakedai]: new StationInfo('すずかけ台'),
  [STATION_IDS.tokyu.minamimachida_grandberry_park]: new StationInfo('南町田グランベリーパーク'),
  [STATION_IDS.tokyu.tsukimino]: new StationInfo('つきみ野'),

  // ＞多摩川線
  [STATION_IDS.tokyu.tamagawa]: new StationInfo('多摩川', [
    LINE_IDS.tokyu.tamagawa,
    LINE_IDS.tokyu.toyoko,
    LINE_IDS.tokyu.meguro,
  ]),
  [STATION_IDS.tokyu.numabe]: new StationInfo('沼部'),
  [STATION_IDS.tokyu.unoki]: new StationInfo('鵜の木'),
  [STATION_IDS.tokyu.simomaruko]: new StationInfo('下丸子'),
  [STATION_IDS.tokyu.musashishinden]: new StationInfo('武蔵新田'),
  [STATION_IDS.tokyu.yagutiwatashi]: new StationInfo('矢口渡'),
  // 大井町線
  [STATION_IDS.tokyu.shimoshinmei]: new StationInfo('下神明'),
  [STATION_IDS.tokyu.togoshikouen]: new StationInfo('戸越公園'),
  [STATION_IDS.tokyu.nakanobe]: new StationInfo('中延', [
    LINE_IDS.tokyu.oimachi,
    LINE_IDS.tokyo_subway.asakusa,
  ]),
  [STATION_IDS.tokyu.ebaracho]: new StationInfo('荏原町'),
  [STATION_IDS.tokyu.hatanodai]: new StationInfo('旗の台',[
    LINE_IDS.tokyu.oimachi,
    LINE_IDS.tokyu.ikegami,
  ]),
  [STATION_IDS.tokyu.kitasenzoku]: new StationInfo('北千束'),
  [STATION_IDS.tokyu.ookayama]: new StationInfo('大岡山',[
    LINE_IDS.tokyu.oimachi,
    LINE_IDS.tokyu.meguro,
  ]),
  [STATION_IDS.tokyu.midorigaoka]: new StationInfo('緑が丘'),
  [STATION_IDS.tokyu.jiyugaoka]: new StationInfo('自由が丘',[
    LINE_IDS.tokyu.oimachi,
    LINE_IDS.tokyu.toyoko,
  ]),
  [STATION_IDS.tokyu.kuhonbutsu]: new StationInfo('九品仏'),
  [STATION_IDS.tokyu.oyamadai]: new StationInfo('尾山台'),
  [STATION_IDS.tokyu.todoroki]: new StationInfo('等々力'),
  [STATION_IDS.tokyu.kaminoge]: new StationInfo('上野毛'),
  // 目黒線
  [STATION_IDS.tokyu.fudomae]: new StationInfo('不動前'),
  [STATION_IDS.tokyu.musashikoyama]: new StationInfo('武蔵小山'),
  [STATION_IDS.tokyu.nishikoyama]: new StationInfo('西小山'),
  [STATION_IDS.tokyu.senzoku]: new StationInfo('洗足'),
  [STATION_IDS.tokyu.okuzawa]: new StationInfo('奥沢'),
  [STATION_IDS.tokyu.denenchohu]: new StationInfo('田園調布', [
    LINE_IDS.tokyu.denentoshi,
    LINE_IDS.tokyu.toyoko,
  ]),
  [STATION_IDS.tokyu.shinmaruko]: new StationInfo('新丸子'),
  [STATION_IDS.tokyu.motosumiyoshi]: new StationInfo('元住吉'),
  [STATION_IDS.tokyu.hiyoshi]: new StationInfo('日吉', [
    LINE_IDS.tokyu.toyoko,
    LINE_IDS.tokyu.shinyokohama,
    LINE_IDS.yokohama_shieichikatetsu.green_line,
  ]),
}
