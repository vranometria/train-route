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
  ], "おおみや"),
  [STATION_IDS.jr_east.saitama_shintoshin]: new StationInfo('さいたま新都心',[]),
  [STATION_IDS.jr_east.yono]: new StationInfo('与野', []),
  [STATION_IDS.jr_east.kitaurawa]: new StationInfo('北浦和', []),
  [STATION_IDS.jr_east.ueno]: new StationInfo('上野', [
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.tokiwa,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.tokyo_metro.hibiya,
  ], "うえの"),
  [STATION_IDS.jr_east.tabata]: new StationInfo('田端', []),
  [STATION_IDS.jr_east.urawa]: new StationInfo('浦和', []),
  [STATION_IDS.jr_east.minami_urawa]: new StationInfo('南浦和', []),
  [STATION_IDS.jr_east.warabi]: new StationInfo('蕨', []),
  [STATION_IDS.jr_east.nishikawaguchi]: new StationInfo('西川口', []),
  [STATION_IDS.jr_east.kawaguti]: new StationInfo('川口', []),
  [STATION_IDS.jr_east.akahane]: new StationInfo('赤羽', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.shonan_shinjuku,
  ], "あかはね"),
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
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.shutoken_shintoshi.tsukuba_express,
    LINE_IDS.tokyo_koutsu_kyoku.shinjuku,
  ],"あきはばら"),
  [STATION_IDS.jr_east.kanda]: new StationInfo('神田', [
    LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.keihin_touhoku
  ], "かんだ"),
  [STATION_IDS.jr_east.tokyo]: new StationInfo('東京',[
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.utunomiya
  ],"とうきょう",),
  /** 千葉 */
  [STATION_IDS.jr_east.chiba]: new StationInfo('千葉', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
    LINE_IDS.jr_east.sobu_honsen,
    LINE_IDS.jr_east.uchibou,
    LINE_IDS.jr_east.sotobou,
    LINE_IDS.jr_east.narita,
  ], "ちば"),
  /** 西千葉 */
  [STATION_IDS.jr_east.nishichiba]: new StationInfo('西千葉', [], "にしちば"),
  /** 稲毛 */
  [STATION_IDS.jr_east.inage]: new StationInfo('稲毛', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
  ], "いなげ"),
  /** 新検見川 */
  [STATION_IDS.jr_east.shinkemigawa]: new StationInfo('新検見川', [], "しんけみがわ"),
  /** 幕張 */
  [STATION_IDS.jr_east.makuhari]: new StationInfo('幕張', [], "まくはり"),
  /** 幕張本郷 */
  [STATION_IDS.jr_east.makuharihongou]: new StationInfo('幕張本郷', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.keisei.chiba,
  ], "まくはりほんごう"),
  /** 津田沼 */
  [STATION_IDS.jr_east.tsudanuma]: new StationInfo('津田沼', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
    LINE_IDS.keisei.honsen,
  ], "つだぬま"),
  /** 東船橋 */
  [STATION_IDS.jr_east.higashi_funabashi]: new StationInfo('東船橋', [], "ひがしふなばし"),
  /** 船橋 */
  [STATION_IDS.jr_east.funabashi]: new StationInfo('船橋', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
    LINE_IDS.keisei.honsen,
    LINE_IDS.toubu.urban_park_line,
  ], "ふなばし"),
  /** 西船橋 */
  [STATION_IDS.jr_east.nishifunabashi]: new StationInfo('西船橋', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.musashino,
    LINE_IDS.tokyo_metro.touzai,
    LINE_IDS.toyo_kousoku.toyo_kousoku,
  ], "にしふなばし"),
  /** 下総中山 */
  [STATION_IDS.jr_east.shimousa_nakayama]: new StationInfo('下総中山', [], "しもうさなかやま"),
  /** 本八幡 */
  [STATION_IDS.jr_east.motoyawata]: new StationInfo('本八幡', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_koutsu_kyoku.shinjuku,
    LINE_IDS.keisei.honsen,
  ], "もとやわた"),
  /** 市川 */
  [STATION_IDS.jr_east.ichikawa]: new StationInfo('市川', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
  ], "いちかわ"),
  /** 小岩 */
  [STATION_IDS.jr_east.koiwa]: new StationInfo('小岩', [], "こいわ"),
  /** 新小岩 */
  [STATION_IDS.jr_east.shinkoiwa]: new StationInfo('新小岩', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
  ], "しんこいわ"),
  /** 馬喰町 */
  [STATION_IDS.jr_east.bakurocho]: new StationInfo('馬喰町', [
    LINE_IDS.jr_east.sobu_kaisoku,
    LINE_IDS.tokyo_koutsu_kyoku.asakusa,
    LINE_IDS.tokyo_koutsu_kyoku.shinjuku,
  ], "ばくろちょう"),
  /** 平井(東京) */
  [STATION_IDS.jr_east.hirai]: new StationInfo('平井', [], "ひらい"),
  /** 亀戸 */
  [STATION_IDS.jr_east.kameido]: new StationInfo('亀戸', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.toubu.kameido,
  ], "かめいど"),
  /** 錦糸町 */
  [STATION_IDS.jr_east.kinshicho]: new StationInfo('錦糸町', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.jr_east.sobu_kaisoku,
    LINE_IDS.tokyo_metro.hanzoumon,
  ], "きんしちょう"),
  /** 新日本橋 */
  [STATION_IDS.jr_east.shinnihonbashi]: new StationInfo('新日本橋', [], "しんにほんばし"),
  /** 両国 */
  [STATION_IDS.jr_east.ryogoku]: new StationInfo('両国', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_koutsu_kyoku.oedo,
  ], "りょうごく"),
  /** 浅草橋 */
  [STATION_IDS.jr_east.asakusabashi]: new StationInfo('浅草橋', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_koutsu_kyoku.asakusa,
  ], "あさくさばし"),
  [STATION_IDS.jr_east.ochanomizu]: new StationInfo('御茶ノ水', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.marunouchi,
  ], "おちゃのみず"),
  [STATION_IDS.jr_east.suidoubashi]: new StationInfo('水道橋', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_koutsu_kyoku.mita,
  ], "すいどうばし"),
  /** 市ヶ谷 */
  [STATION_IDS.jr_east.ichigaya]: new StationInfo('市ヶ谷', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.yurakucho,
    LINE_IDS.tokyo_metro.nanboku,
    LINE_IDS.tokyo_koutsu_kyoku.shinjuku,
  ], "いちがや"),
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
  /** 飯田橋 */
  [STATION_IDS.jr_east.iidabashi]: new StationInfo('飯田橋', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.nanboku,
    LINE_IDS.tokyo_metro.touzai,
    LINE_IDS.tokyo_metro.yurakucho,
    LINE_IDS.tokyo_koutsu_kyoku.oedo,
  ], "いいだばし"),
  /** 信濃町 */
  [STATION_IDS.jr_east.shinanomachi]: new StationInfo('信濃町', [], "しなのまち"),
  /** 千駄ヶ谷 */
  [STATION_IDS.jr_east.sendagaya]: new StationInfo('千駄ヶ谷', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_koutsu_kyoku.oedo,
  ], "せんだがや"),
  /** 大久保 */
  [STATION_IDS.jr_east.okubo]: new StationInfo('大久保', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
  ], "おおくぼ"),
  [STATION_IDS.jr_east.higashinakano]: new StationInfo('東中野', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_koutsu_kyoku.oedo,
  ], "ひがしなかの"),
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
    LINE_IDS.keiou.inokashira,
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
    ],"しんじゅく"),
  [STATION_IDS.jr_east.shibuya]: new StationInfo('渋谷', [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.keiou.inokashira,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.hukutoshin,
      LINE_IDS.tokyu.toyoko,
      LINE_IDS.tokyu.denentoshi,
    ],
  ),
  [STATION_IDS.jr_east.ebisu]: new StationInfo('恵比寿', [
    LINE_IDS.jr_east.saikyou,
    LINE_IDS.jr_east.yamanote,
  ], "えびす"),
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
  [STATION_IDS.jr_east.ikebukuro]: new StationInfo('池袋', [
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.saikyou,
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.saikyou,
    LINE_IDS.seibu.ikebukuro,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.yurakucho,
    LINE_IDS.tokyo_metro.fukutoshin,
    LINE_IDS.toubu.toujou,
  ], "いけぶくろ"),
  /** 板橋 */
  [STATION_IDS.jr_east.itabashi]: new StationInfo('板橋', [], "いたばし"),
  /** 十条 */
  [STATION_IDS.jr_east.jujo]: new StationInfo('十条', [], "じゅうじょう"),
  /** 北赤羽 */
  [STATION_IDS.jr_east.kitaakahane]: new StationInfo('北赤羽', [], "きたあかばね"),
  /** 浮間舟渡 */
  [STATION_IDS.jr_east.ukimafunado]: new StationInfo('浮間舟渡', [], "うきまふなと"),
  /** 戸田公園 */
  [STATION_IDS.jr_east.todakouen]: new StationInfo('戸田公園', [], "とだこうえん"),
  /** 戸田 */
  [STATION_IDS.jr_east.toda]: new StationInfo('戸田', [], "とだ"),
  /** 北戸田 */
  [STATION_IDS.jr_east.kitatoda]: new StationInfo('北戸田', [], "きたとだ"),
  /** 武蔵浦和 */
  [STATION_IDS.jr_east.musashiurawa]: new StationInfo('武蔵浦和', [
    LINE_IDS.jr_east.musashino,
    LINE_IDS.jr_east.saikyou,
  ], "むさしうらわ"),
  /** 中浦和 */
  [STATION_IDS.jr_east.nakaurawa]: new StationInfo('中浦和', [], "なかうらわ"),
  /** 南与野 */
  [STATION_IDS.jr_east.minamiyono]: new StationInfo('南与野', [], "みなみよの"),
  /** 与野本町 */
  [STATION_IDS.jr_east.yonohonmachi]: new StationInfo('与野本町', [], "よのほんまち"),
  /** 北与野 */
  [STATION_IDS.jr_east.kitayono]: new StationInfo('北与野', [], "きたよの"),
  [STATION_IDS.jr_east.mejiro]: new StationInfo('目白', [], "めじろ"),
  [STATION_IDS.jr_east.takadanobaba]: new StationInfo('高田馬場', []),
  [STATION_IDS.jr_east.shinokubo]: new StationInfo('新大久保', []),
  [STATION_IDS.jr_east.yoyogi]: new StationInfo('代々木', [
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.chuo,
    LINE_IDS.tokyo_koutsu_kyoku.oedo
  ], "よよぎ"),
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
  [STATION_IDS.jr_east.kamonomiya]: new StationInfo('鴨宮', [], "かものみや"),
  [STATION_IDS.jr_east.odawara]: new StationInfo('小田原', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.odakyu.odawara,
    LINE_IDS.odakyu.hakonetozan,
    LINE_IDS.izuhakone.daiyuzan,
  ], "おだわら"),
  [STATION_IDS.jr_east.hayakawa]: new StationInfo('早川', [], "はやかわ"),
  [STATION_IDS.jr_east.nebukawa]: new StationInfo('根府川', [], "ねぶかわ"),
  [STATION_IDS.jr_east.manazuru]: new StationInfo('真鶴', [], "まなづる"),
  [STATION_IDS.jr_east.yugawara ]: new StationInfo('湯河原', [], "ゆがわら"),
  [STATION_IDS.jr_east.atami]: new StationInfo('熱海', [], "あたみ"),
    /** 厚木 */
    [STATION_IDS.jr_east.atsugi]: new StationInfo('厚木', [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.jr_east.sagami,
    ], "あつぎ"),
  // 湘南新宿ライン
  /** 熊谷 */
  [STATION_IDS.jr_east.kumagaya]: new StationInfo('熊谷', [
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.shinkansen.hokuriku,
    LINE_IDS.chichibu.chichibu
  ], "くまがや"),
  /** 高崎 */
  [STATION_IDS.jr_east.takasaki]: new StationInfo('高崎', [
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.ryomo,
    LINE_IDS.jr_east.agatsuma,
    LINE_IDS.joushin.joushin,
  ], "たかさき"),
  // 南武線
  [STATION_IDS.jr_east.mizonokuchi]: new StationInfo('溝の口', [
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.tokyu.oimachi,
    LINE_IDS.tokyu.denentoshi,
  ], "みぞのくち"),
  [STATION_IDS.jr_east.musashikosugi]: new StationInfo('武蔵小杉', [
    LINE_IDS.tokyu.toyoko,
    LINE_IDS.tokyu.meguro,
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.jr_east.yokosuka,
    LINE_IDS.jr_east.shonan_shinjuku,
  ], "むさしこすぎ"),
  /** 登戸 */
  [STATION_IDS.jr_east.noborito]: new StationInfo('登戸', [
    LINE_IDS.jr_east.nanbu,
    LINE_IDS.odakyu.odawara,
  ], "のぼりと"),

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
  [STATION_IDS.sagami.hazawayokohamakokudai]: new StationInfo('羽沢横浜国大', [
    LINE_IDS.jr_sotetsu_chokutsu,
    LINE_IDS.sagami.sotetsushinyokohama,
  ], "はざわよこはまこくだい"),

  [STATION_IDS.sagami.sagamino]: new StationInfo('さがみ野', [], "さがみの"),
  // 小田急
  [STATION_IDS.odakyu.minamishinjuku]: new StationInfo('南新宿', [], "みなみしんじゅく"),
  /** 参宮橋 */
  [STATION_IDS.odakyu.sangubashi]: new StationInfo('参宮橋', [], "さんぐうばし"),
  /** 代々木八幡 */
  [STATION_IDS.odakyu.yoyogihachiman]: new StationInfo('代々木八幡', [
    LINE_IDS.odakyu.odawara,
    LINE_IDS.tokyo_metro.chiyoda,
  ], "よよぎはちまん"),
  /** 代々木上原 */
  [STATION_IDS.odakyu.yoyogiuehara]: new StationInfo('代々木上原', [], "よよぎうえはら"),
  /** 東北沢 */
  [STATION_IDS.odakyu.higashikitazawa]: new StationInfo('東北沢', [], "ひがしきたざわ"),
  /** 下北沢 */
  [STATION_IDS.odakyu.shimokitazawa]: new StationInfo('下北沢', [
    LINE_IDS.odakyu.odawara,
    LINE_IDS.keiou.inokashira,
  ], "しもきたざわ"),
  /** 世田谷代田 */
  [STATION_IDS.odakyu.setagayadaita]: new StationInfo('世田谷代田', [], "せたがやだいた"),
  /** 梅ヶ丘 */
  [STATION_IDS.odakyu.umegaoka]: new StationInfo('梅ヶ丘', [], "うめがおか"),
  /** 豪徳寺 */
  [STATION_IDS.odakyu.gotokuji]: new StationInfo('豪徳寺', [], "ごうとくじ"),
  /** 経堂 */
  [STATION_IDS.odakyu.kyodo]: new StationInfo('経堂', [], "きょうどう"),
  /** 千歳船橋 */
  [STATION_IDS.odakyu.chitosefunabashi]: new StationInfo('千歳船橋', [], "ちとせふなばし"),
  /** 祖師ヶ谷大蔵 */
  [STATION_IDS.odakyu.soshigayaokura]: new StationInfo('祖師ヶ谷大蔵', [], "そしがやおおくら"),
  /** 成城学園前 */
  [STATION_IDS.odakyu.seijogakuenmae]: new StationInfo('成城学園前', [], "せいじょうがくえんまえ"),
  /** 喜多見 */
  [STATION_IDS.odakyu.kitami]: new StationInfo('喜多見', [], "きたみ"),
  /** 狛江 */
  [STATION_IDS.odakyu.komae]: new StationInfo('狛江', [], "こまえ"),
  /** 和泉多摩川 */
  [STATION_IDS.odakyu.izumitamagawa]: new StationInfo('和泉多摩川', [], "いずみたまがわ"),
  /** 向ヶ丘遊園 */
  [STATION_IDS.odakyu.mukougaokayuen]: new StationInfo('向ヶ丘遊園', [], "むこうがおかゆうえん"),
  /** 生田 */
  [STATION_IDS.odakyu.ikuta]: new StationInfo('生田', [], "いくた"),
  /** 読売ランド前 */
  [STATION_IDS.odakyu.yomiuri_land_mae]: new StationInfo('読売ランド前', [], "よみうりらんどまえ"),
  /** 百合ヶ丘 */
  [STATION_IDS.odakyu.yurigaoka]: new StationInfo('百合ヶ丘', [], "ゆりがおか"),
  /** 新百合ヶ丘 */
  [STATION_IDS.odakyu.shinyurigaoka]: new StationInfo('新百合ヶ丘', [
    LINE_IDS.odakyu.odawara,
    LINE_IDS.odakyu.tama,
  ], "しんゆりがおか"),
  /** 柿生 */
  [STATION_IDS.odakyu.kakio]: new StationInfo('柿生', [], "かきお"),
  /** 鶴川 */
  [STATION_IDS.odakyu.tsurukawa]: new StationInfo('鶴川', [], "つるかわ"),
  /** 武蔵台前 */
  [STATION_IDS.odakyu.musashidaimae]: new StationInfo('武蔵台前', [], "むさしだいまえ"),
  /** 玉川学園前 */
  [STATION_IDS.odakyu.tamagawagakuenmae]: new StationInfo('玉川学園前', [], "たまがわがくえんまえ"),
  /** 小田急相模原 */
  [STATION_IDS.odakyu.odakyusagamihara]: new StationInfo('小田急相模原', [], "おだきゅうさがみはら"),
  /** 相武台前 */
  [STATION_IDS.odakyu.soubudaimae]: new StationInfo('相武台前', [], "そうぶだいまえ"),
  /** 座間 */
  [STATION_IDS.odakyu.zama]: new StationInfo('座間', [], "ざま"),
  /** 海老名 */
  [STATION_IDS.odakyu.ebina]: new StationInfo('海老名', [
    LINE_IDS.odakyu.odawara,
    LINE_IDS.sagami.honsen,
  ], "えびな"),
  /** 本厚木 */
  [STATION_IDS.odakyu.honatsugi]: new StationInfo('本厚木', [], "ほんあつぎ"),
  /** 愛甲石田 */
  [STATION_IDS.odakyu.aikouishida]: new StationInfo('愛甲石田', [], "あいこういしだ"),
  /** 伊勢原 */
  [STATION_IDS.odakyu.isehara]: new StationInfo('伊勢原', [], "いせはら"),
  /** 鶴巻温泉   */
  [STATION_IDS.odakyu.tsurumakionsen]: new StationInfo('鶴巻温泉', [], "つるまきおんせん"),
  /** 東海大学前 */
  [STATION_IDS.odakyu.toukaidaigakumae]: new StationInfo('東海大学前', [], "とうかいだいがくまえ"),
  /** 秦野 */
  [STATION_IDS.odakyu.hadano]: new StationInfo('秦野', [], "はだの"),
  /** 渋沢 */
  [STATION_IDS.odakyu.shibusawa]: new StationInfo('渋沢', [], "しぶさわ"),
  /** 新松田 */
  [STATION_IDS.odakyu.shinmatsuda]: new StationInfo('新松田', [], "しんまつだ"),
  /** 開成 */
  [STATION_IDS.odakyu.kaisei]: new StationInfo('開成', [], "かいせい"),
  /** 栢山 */
  [STATION_IDS.odakyu.kayama]: new StationInfo('箱根湯本', [], "かやま"),
  /** 富水 */
  [STATION_IDS.odakyu.tomizu]: new StationInfo('富水', [], "とみず"),
  /** 螢田 */
  [STATION_IDS.odakyu.hotaruda]: new StationInfo('螢田', [], "ほたるだ"),
  /** 足柄 */
  [STATION_IDS.odakyu.ashigara]: new StationInfo('足柄', [], "あしがら"),

  // ＞江ノ島線
  [STATION_IDS.odakyu.sagamiono]: new StationInfo('相模大野', [
    LINE_IDS.odakyu.odawara,
    LINE_IDS.odakyu.enoshima,
  ], "さがみおおの"),
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
  ], "でんえんちょうふ"),
  [STATION_IDS.tokyu.shinmaruko]: new StationInfo('新丸子', [], "しんまるこ"),
  [STATION_IDS.tokyu.motosumiyoshi]: new StationInfo('元住吉', [], "もとすみよし"),
  [STATION_IDS.tokyu.hiyoshi]: new StationInfo('日吉', [
    LINE_IDS.tokyu.toyoko,
    LINE_IDS.tokyu.shinyokohama,
    LINE_IDS.yokohama_shieichikatetsu.green_line,
    LINE_IDS.jr_sotetsu_chokutsu,
  ], "ひよし"),
  // 上越新幹線
  /** 本庄早稲田 */
  [STATION_IDS.jr_east.honjo_waseda]: new StationInfo('本庄早稲田', [
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.shinkansen.hokuriku,
  ], "ほんじょうわせだ"),
  /** 上毛高原 */
  [STATION_IDS.jr_east.joumoukougen]: new StationInfo('上毛高原', [
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.shinkansen.hokuriku,
  ], "じょうもうこうげん"),
  /** 越後湯沢 */
  [STATION_IDS.jr_east.echigo_yuzawa]: new StationInfo('越後湯沢', [
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.hokuetsu_kyuko.hokuhoku,
  ], "えちごゆざわ"),
  /** ガーラ湯沢 */
  [STATION_IDS.jr_east.gala_yuzawa]: new StationInfo('ガーラ湯沢', [], "がーらゆざわ"),
  /** 浦佐 */
  [STATION_IDS.jr_east.urasa]: new StationInfo('浦佐', [
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.shinkansen.jouetsu,
  ], "うらさ"),
  /** 長岡 */
  [STATION_IDS.jr_east.nagaoka]: new StationInfo('長岡', [
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.shinetsu_honsen,
    LINE_IDS.jr_east.shinkansen.jouetsu,
  ], "ながおか"),
  /** 燕三条 */
  [STATION_IDS.jr_east.tsubame_sanjo]: new StationInfo('燕三条', [
    LINE_IDS.jr_east.yahiko,
    LINE_IDS.jr_east.shinkansen.jouetsu,
  ], "つばめさんじょう"),
  /** 新潟 */
  [STATION_IDS.jr_east.niigata]: new StationInfo('新潟', [
    LINE_IDS.jr_east.shinkansen.jouetsu,
    LINE_IDS.jr_east.banetsusai,
    LINE_IDS.jr_east.hakushin,
    LINE_IDS.jr_east.shinetsu_honsen,
    LINE_IDS.jr_east.echigo,
  ], "にいがた"),
}
