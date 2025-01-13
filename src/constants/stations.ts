import { StationInfo } from '@/types/station-info'
import { LINE_IDS, STATION_IDS } from './ids'
import Exchange from '@/components/Exchange.vue'
import { ExchangeInfo } from '@/types/exchange-info'

export const STATIONS = {
  [STATION_IDS.jr_east.utsunomiya]: new StationInfo('宇都宮', [
    LINE_IDS.jr_east.nikko,
    LINE_IDS.jr_east.karasuyama,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.shonan_shinjuku,
  ], "うつのみや"),
  /** 黒磯 */
  [STATION_IDS.jr_east.kuroiso]: new StationInfo('黒磯', [
    LINE_IDS.jr_east.tohokuhonsen,
    LINE_IDS.jr_east.utunomiya,
  ], "くろいそ"),
  /** 那須塩原 */
  [STATION_IDS.jr_east.nasushiobara]: new StationInfo('那須塩原', [
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.shinkansen.tohoku_hokkaido,
  ], "なすしおばら"),
  /** 西那須野 */
  [STATION_IDS.jr_east.nishinasuno]: new StationInfo('西那須野', [], "にしなすの"),
  /** 野崎 */
  [STATION_IDS.jr_east.nozaki]: new StationInfo('野崎', [], "のざき"),
  /** 矢板 */
  [STATION_IDS.jr_east.yaita]: new StationInfo('矢板', [], "やいた"),
  /** 片岡 */
  [STATION_IDS.jr_east.kataoka]: new StationInfo('片岡', [], "かたおか"),
  [STATION_IDS.jr_east.kamasusaka]: new StationInfo('蒲須坂', [], "かますさか"),
  [STATION_IDS.jr_east.ujiie]: new StationInfo('氏家', [], "うじいえ"),
  /** 岡本 */
  [STATION_IDS.jr_east.okamoto]: new StationInfo('岡本', [
    LINE_IDS.jr_east.karasuyama,
    LINE_IDS.jr_east.utunomiya,
  ], "おかもと"),
  /** 宝積寺 */
  [STATION_IDS.jr_east.housyakuji]: new StationInfo('宝積寺', [
    LINE_IDS.jr_east.karasuyama,
    LINE_IDS.jr_east.utunomiya,
  ], "ほうしゃくじ"),
  /** 尾久 */
  [STATION_IDS.jr_east.oku]: new StationInfo('尾久', [
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.utunomiya,
  ], "おく"),
  [STATION_IDS.jr_east.suzumenomiya]: new StationInfo('雀宮', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "すずめのみや"),
  /** 石橋 */
  [STATION_IDS.jr_east.ishibashi]: new StationInfo('石橋', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "いしばし"),
  /** 自治医大 */
  [STATION_IDS.jr_east.jichiidai]: new StationInfo('自治医大', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "じちいだい"),
  /** 小金井 */
  [STATION_IDS.jr_east.koganei]: new StationInfo('小金井', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "こがねい"),
  /** 小山 */
  [STATION_IDS.jr_east.oyama]: new StationInfo('小山', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.ryomo,
    LINE_IDS.jr_east.mito,
    LINE_IDS.jr_east.shinkansen.tohoku_hokkaido,
  ], "おやま"),
  /** 間々田 */
  [STATION_IDS.jr_east.mamada]: new StationInfo('間々田', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "ままだ"),
  /** 野木 */
  [STATION_IDS.jr_east.nogi]: new StationInfo('野木', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "のぎ"),
  /** 古河 */
  [STATION_IDS.jr_east.koga]: new StationInfo('古河', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "こが"),
  /** 栗橋 */
  [STATION_IDS.jr_east.kurihashi]: new StationInfo('栗橋', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.toubu.nikko,
  ], "くりはし"),
  /** 東鷲宮 */
  [STATION_IDS.jr_east.higashiwashinomiya]: new StationInfo('東鷲宮', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "ひがしわしのみや"),
  /** 久喜 */
  [STATION_IDS.jr_east.kuki]: new StationInfo('久喜', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.toubu.isesaki,
  ], "くき"),
  /** 新白岡 */
  [STATION_IDS.jr_east.shinshiraoka]: new StationInfo('新白岡', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "しんしらおか"),
  /** 白岡 */
  [STATION_IDS.jr_east.shiraoka]: new StationInfo('白岡', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "しらおか"),
  /** 蓮田 */
  [STATION_IDS.jr_east.hasuda]: new StationInfo('蓮田', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "はすだ"),
  /** 東大宮 */
  [STATION_IDS.jr_east.higashiomiya]: new StationInfo('東大宮', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "ひがしおおみや"),
  /** 土呂 */
  [STATION_IDS.jr_east.toro]: new StationInfo('土呂', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.utunomiya,
  ], "とろ"),
  /** 前橋 */
  [STATION_IDS.jr_east.maebashi]: new StationInfo('前橋', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.ryomo,
  ], "まえばし"),
  /** 新前橋 */
  [STATION_IDS.jr_east.shinmaebashi]: new StationInfo('新前橋', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.ryomo,
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.agatsuma,
  ], "しんまえばし"),
  /** 井野 */
  [STATION_IDS.jr_east.ino]: new StationInfo('井野', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.agatsuma,
    LINE_IDS.jr_east.ryomo,
  ], "いの"),
  /** 高崎問屋町 */
  [STATION_IDS.jr_east.takasakitonyamachi]: new StationInfo('高崎問屋町', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.agatsuma,
    LINE_IDS.jr_east.ryomo,
  ], "たかさきとにやまち"),
  /** 高崎 */
  [STATION_IDS.jr_east.takasaki]: new StationInfo('高崎', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.ryomo,
    LINE_IDS.jr_east.agatsuma,
    LINE_IDS.jr_east.jouetsu,
    LINE_IDS.jr_east.shinetsu_honsen,
    LINE_IDS.joushin.joushin,
  ], "たかさき"),
  /** 倉賀野 */
  [STATION_IDS.jr_east.kuragano]: new StationInfo('倉賀野', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.hachiko,
  ], "くらがの"),
  /** 新町 */
  [STATION_IDS.jr_east.shinmachi]: new StationInfo('新町', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "しんまち"),
  /** 神保原 */
  [STATION_IDS.jr_east.jinbohara]: new StationInfo('神保原', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "じんぼはら"),
  /** 本庄 */
  [STATION_IDS.jr_east.honnjou]: new StationInfo('本庄', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "ほんじょう"),
  /** 岡部 */
  [STATION_IDS.jr_east.okabe]: new StationInfo('岡部', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "おかべ"),
  /** 深谷 */
  [STATION_IDS.jr_east.hukaya]: new StationInfo('深谷', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "ふかや"),
  /** 籠原 */
  [STATION_IDS.jr_east.kagohara]: new StationInfo('籠原', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "かごはら"),
  /** 行田 */
  [STATION_IDS.jr_east.gyouda]: new StationInfo('行田', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "ぎょうだ"),
  /** 吹上 */
  [STATION_IDS.jr_east.hukiage]: new StationInfo('吹上', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "ふきあげ"),
  /** 北鴻巣 */
  [STATION_IDS.jr_east.kitakounosu]: new StationInfo('北鴻巣', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "きたこうのす"),
  /** 鴻巣 */
  [STATION_IDS.jr_east.kounosu]: new StationInfo('鴻巣', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "こうのす"),
  /** 北本 */
  [STATION_IDS.jr_east.kitamoto]: new StationInfo('北本', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "きたもと"),
  /** 桶川 */
  [STATION_IDS.jr_east.okegawa]: new StationInfo('桶川', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "おけがわ"),
  /** 北上尾 */
  [STATION_IDS.jr_east.kitaageo]: new StationInfo('北上尾', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "きたあげお"),
  /** 上尾 */
  [STATION_IDS.jr_east.ageo]: new StationInfo('上尾', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "あげお"),
  /** 宮原 */
  [STATION_IDS.jr_east.miyahara]: new StationInfo('宮原', [
    LINE_IDS.jr_east.shonan_shinjuku,
    LINE_IDS.jr_east.takasaki,
  ], "みやはら"),
  /** 大宮 */
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
  [STATION_IDS.jr_east.saitama_shintoshin]: new StationInfo('さいたま新都心',[
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.takasaki,
  ]),
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
  [STATION_IDS.jr_east.urawa]: new StationInfo('浦和', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.shonan_shinjuku,
  ]),
  [STATION_IDS.jr_east.minami_urawa]: new StationInfo('南浦和', []),
  [STATION_IDS.jr_east.warabi]: new StationInfo('蕨', []),
  [STATION_IDS.jr_east.nishikawaguchi]: new StationInfo('西川口', []),
  [STATION_IDS.jr_east.kawaguti]: new StationInfo('川口', []),
  [STATION_IDS.jr_east.akahane]: new StationInfo('赤羽', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.jr_east.shonan_shinjuku,
  ], "あかはね"),
  [STATION_IDS.jr_east.higashijujo]: new StationInfo('東十条', [], "ひがしじゅうじょう"),
  [STATION_IDS.jr_east.ouji]:  new StationInfo('王子', [], "おうじ"),
  [STATION_IDS.jr_east.kaminakazato]: new StationInfo('上中里', [], "かみなかざと"),
  [STATION_IDS.jr_east.tabata]: new StationInfo('田端', [], "たばた"),
  [STATION_IDS.jr_east.nishinippori]: new StationInfo('西日暮里', [], "にしにっぽり"),
  [STATION_IDS.jr_east.nippori]: new StationInfo('日暮里', [], "にっぽり"),
  [STATION_IDS.jr_east.uguisudani]:  new StationInfo('鶯谷', [LINE_IDS.jr_east.yamanote], "うぐいすだに"),
  [STATION_IDS.jr_east.ueno]: new StationInfo('上野', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.takasaki,
    LINE_IDS.jr_east.tokiwa,
    LINE_IDS.jr_east.utunomiya,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.jr_east.shinkansen.jouetsu,
  ], "うえの"),
  [STATION_IDS.jr_east.okachimachi]: new StationInfo('御徒町', [], "おかちまち"),
  [STATION_IDS.jr_east.akihabara]: new StationInfo('秋葉原', [
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.shutoken_shintoshi.tsukuba_express,
    LINE_IDS.tokyo_subway.shinjuku,
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
    LINE_IDS.jr_east.shinkansen.tokaido,
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
    LINE_IDS.tokyo_subway.shinjuku,
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
    LINE_IDS.tokyo_subway.asakusa,
    LINE_IDS.tokyo_subway.shinjuku,
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
    LINE_IDS.tokyo_subway.oedo,
  ], "りょうごく"),
  /** 浅草橋 */
  [STATION_IDS.jr_east.asakusabashi]: new StationInfo('浅草橋', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_subway.asakusa,
  ], "あさくさばし"),
  [STATION_IDS.jr_east.ochanomizu]: new StationInfo('御茶ノ水', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.marunouchi,
  ], "おちゃのみず"),
  [STATION_IDS.jr_east.suidoubashi]: new StationInfo('水道橋', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_subway.mita,
  ], "すいどうばし"),
  /** 市ヶ谷 */
  [STATION_IDS.jr_east.ichigaya]: new StationInfo('市ヶ谷', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_metro.yurakucho,
    LINE_IDS.tokyo_metro.nanboku,
    LINE_IDS.tokyo_subway.shinjuku,
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
    LINE_IDS.tokyo_subway.oedo,
  ], "いいだばし"),
  /** 信濃町 */
  [STATION_IDS.jr_east.shinanomachi]: new StationInfo('信濃町', [], "しなのまち"),
  /** 千駄ヶ谷 */
  [STATION_IDS.jr_east.sendagaya]: new StationInfo('千駄ヶ谷', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_subway.oedo,
  ], "せんだがや"),
  /** 大久保 */
  [STATION_IDS.jr_east.okubo]: new StationInfo('大久保', [
    LINE_IDS.jr_east.chuo,
    LINE_IDS.jr_east.sobu,
  ], "おおくぼ"),
  [STATION_IDS.jr_east.higashinakano]: new StationInfo('東中野', [
    LINE_IDS.jr_east.sobu,
    LINE_IDS.tokyo_subway.oedo,
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
    LINE_IDS.jr_sotetsu_chokutsu,
    LINE_IDS.jr_east.yokosuka,
    LINE_IDS.jr_east.shonan_shinjuku,
  ], "おおいまち"),
  [STATION_IDS.jr_east.nishioi]: new StationInfo('西大井', [
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.toukyo_rinkai_kousoku.rinkai,
  ], "にしおおい"),
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
      LINE_IDS.tokyo_subway.oedo,
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
    LINE_IDS.tokyo_subway.oedo
  ], "よよぎ"),
  [STATION_IDS.jr_east.harajuku]: new StationInfo('原宿', []),
  // 横須賀線
  [STATION_IDS.jr_east.shinkawasaki]: new StationInfo('新川崎', [], "しんかわさき"),
  [STATION_IDS.jr_east.hodogaya]: new StationInfo('保土ヶ谷', [], "ほどがや"),
  [STATION_IDS.jr_east.higashitotsuka]: new StationInfo('東戸塚', [], "ひがしとつか"),
  [STATION_IDS.jr_east.kamakura]: new StationInfo('鎌倉', [
    LINE_IDS.jr_east.yokosuka,
    LINE_IDS.enoshima.enoshima,
  ], "かまくら"),
  [STATION_IDS.jr_east.kitakamakura]: new StationInfo('北鎌倉', [], "きたかまくら"),
  [STATION_IDS.jr_east.zushi]: new StationInfo('逗子', [], "ずし"),
  [STATION_IDS.jr_east.higashizushi]: new StationInfo('葉逗子', [], "ずし"),
  [STATION_IDS.jr_east.taura]: new StationInfo('田浦', [], "たうら"),
  [STATION_IDS.jr_east.yokosuka]: new StationInfo('横須賀', [], "よこすか"),
  [STATION_IDS.jr_east.kinugasa]: new StationInfo('衣笠', [], "きぬがさ"),
  [STATION_IDS.jr_east.kurihama]: new StationInfo('久里浜', [], "くりはま"),

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
  [STATION_IDS.jr_east.shinyokohama]: new StationInfo('新横浜', [
    LINE_IDS.jr_east.yokohama,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.yokohama_shieichikatetsu.blue_line,
    LINE_IDS.sagami.sotetsushinyokohama,
    LINE_IDS.tokyu.shinyokohama,
  ]),
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

  // 京葉線
  /** 八丁堀 */
  [STATION_IDS.jr_east.hacchobori]: new StationInfo('八丁堀', [
    LINE_IDS.jr_east.keiyou,
    LINE_IDS.tokyo_metro.hibiya,
  ], "はっちょうぼり"),

  // 東京メトロ
  // >浅草線
  /** 泉岳寺 */
  [STATION_IDS.tokyo_metro.sengakuji]: new StationInfo('泉岳寺', [
    LINE_IDS.tokyo_metro.asakusa,
    LINE_IDS.keikyu.honsen,
  ], "せんがくじ"),
  // >日比谷線
  [STATION_IDS.tokyo_metro.kitasenju]: new StationInfo('北千住', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.jr_east.tokiwa,
    LINE_IDS.toubu.isesaki,
    LINE_IDS.tokyo_metro.chiyoda,
  ], "きたせんじゅ"),
    /** 南千住 */
  [STATION_IDS.tokyo_metro.minamisenju]: new StationInfo('南千住', [], "みなみせんじゅ"),
  /** 三ノ輪 */
  [STATION_IDS.tokyo_metro.minowa]: new StationInfo('三ノ輪', [], "みのわ"),
  /** 入谷 */
  [STATION_IDS.tokyo_metro.iriya]: new StationInfo('入谷', [], "いりや"),
  /** 仲御徒町 */
  [STATION_IDS.tokyo_metro.nakaokachimachi]: new StationInfo('仲御徒町', [], "なかおかちまち"),
  /** 小伝馬町 */
  [STATION_IDS.tokyo_metro.kodenmacho]: new StationInfo('小伝馬町', [], "こでんまちょう"),
  /** 人形町 */
  [STATION_IDS.tokyo_metro.ningyocho]: new StationInfo('人形町', [], "にんぎょうちょう"),
  /** 茅場町 */
  [STATION_IDS.tokyo_metro.kayabacho]: new StationInfo('茅場町', [], "かやばちょう"),
  /** 築地 */
  [STATION_IDS.tokyo_metro.tsukiji]: new StationInfo('築地', [], "つきじ"),
  /** 東銀座 */
  [STATION_IDS.tokyo_metro.higashiginza]: new StationInfo('東銀座', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.tokyo_metro.asakusa,
  ], "ひがしぎんざ"),
  /** 銀座 */
  [STATION_IDS.tokyo_metro.ginza]: new StationInfo('銀座', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.ginza,
  ], "ぎんざ"),
  /** 日比谷 */
  [STATION_IDS.tokyo_metro.hibiya]: new StationInfo('日比谷', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.tokyo_metro.chiyoda,
    LINE_IDS.tokyo_subway.mita,
  ], "ひびや"),
  /** 霞ヶ関 */
  [STATION_IDS.tokyo_metro.kasumigaseki]: new StationInfo('霞ヶ関', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_metro.chiyoda,
  ], "かすみがせき"),
  /** 虎ノ門ヒルズ */
  [STATION_IDS.tokyo_metro.toranomon_hills]: new StationInfo('虎ノ門ヒルズ', [], "とらのもんひるず"),
  /** 神谷町 */
  [STATION_IDS.tokyo_metro.kamiyacho]: new StationInfo('神谷町', [], "かみやちょう"),
  /** 六本木 */
  [STATION_IDS.tokyo_metro.roppongi]: new StationInfo('六本木', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.tokyo_subway.oedo,
  ], "ろっぽんぎ"),
  /** 広尾 */
  [STATION_IDS.tokyo_metro.hiroo]: new StationInfo('広尾', [], "ひろお"),
  /** 中目黒 */
  [STATION_IDS.tokyo_metro.nakameguro]: new StationInfo('中目黒', [
    LINE_IDS.tokyo_metro.hibiya,
    LINE_IDS.tokyu.toyoko,
  ], "なかめぐろ"),
  // >丸の内線
  /** 新大塚 */
  [STATION_IDS.tokyo_metro.shinotuka]: new StationInfo('新大塚', [], "しんおおつか"),
  /** 茗荷谷 */
  [STATION_IDS.tokyo_metro.myogadani]: new StationInfo('茗荷谷', [], "みょうがだに"),
  /** 後楽園 */
  [STATION_IDS.tokyo_metro.kourakuen]: new StationInfo('後楽園', [], "こうらくえん"),
  /** 本郷三丁目 */
  [STATION_IDS.tokyo_metro.hongosanchome]: new StationInfo('本郷三丁目', [], "ほんごうさんちょうめ"),
  /** 淡路町 */
  [STATION_IDS.tokyo_metro.awajicho]: new StationInfo('淡路町', [], "あわじちょう"),
  /** 大手町 */
  [STATION_IDS.tokyo_metro.otemachi]: new StationInfo('大手町', [], "おおてまち"),
  /** 国会議事堂前 */
  [STATION_IDS.tokyo_metro.kokkaigijidomae]: new StationInfo('国会議事堂前', [], "こっかいぎじどうまえ"),
  /** 赤坂見附 */
  [STATION_IDS.tokyo_metro.akasakamitsuke]: new StationInfo('赤坂見附', [], "あかさかみつけ"),
  /** 四谷三丁目 */
  [STATION_IDS.tokyo_metro.yotsuya_sanchome]: new StationInfo('四谷三丁目', [], "よつやさんちょうめ"),
  /** 新宿御苑前 */
  [STATION_IDS.tokyo_metro.shinjuku_gyoenmae]: new StationInfo('新宿御苑前', [], "しんじゅくぎょえんまえ"),
  /** 新宿三丁目 */
  [STATION_IDS.tokyo_metro.shinjuku_sanchome]: new StationInfo('新宿三丁目', [], "しんじゅくさんちょうめ"),
  /** 西新宿 */
  [STATION_IDS.tokyo_metro.nishishinjuku]: new StationInfo('西新宿', [], "にししんじゅく"),
  /** 中野坂上 */
  [STATION_IDS.tokyo_metro.nakano_sakaue]: new StationInfo('中野坂上', [
    LINE_IDS.tokyo_metro.marunouchi,
    LINE_IDS.tokyo_subway.oedo,
  ], "なかのさかうえ"),
  /** 新中野 */
  [STATION_IDS.tokyo_metro.shinnakano]: new StationInfo('新中野', [], "しんなかの"),
  /** 東高円寺 */
  [STATION_IDS.tokyo_metro.higashi_koenji]: new StationInfo('東高円寺', [], "ひがしこうえんじ"),
  /** 新高円寺 */
  [STATION_IDS.tokyo_metro.shinkoenji]: new StationInfo('新高円寺', [], "しんこうえんじ"),
  /** 南阿佐ヶ谷 */
  [STATION_IDS.tokyo_metro.minamiasagaya]: new StationInfo('南阿佐ヶ谷', [], "みなみあさがや"),

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

  // 京急
  // >本線
  [STATION_IDS.keikyu.kitashinagawa]: new StationInfo('北品川', [], "きたしながわ"),
  /** 新馬場 */
  [STATION_IDS.keikyu.shinbanba]: new StationInfo('新馬場', [], "しんばんば"),
  /** 青物横丁 */
  [STATION_IDS.keikyu.aomonoyokocho]: new StationInfo('青物横丁', [], "あおものよこちょう"),
  /** 鮫洲 */
  [STATION_IDS.keikyu.samezu]: new StationInfo('鮫洲', [], "さめず"),
  /** 立会川 */
  [STATION_IDS.keikyu.tachiaigawa]: new StationInfo('立会川', [], "たちあいがわ"),
  /** 大森海岸 */
  [STATION_IDS.keikyu.omorikaigan]: new StationInfo('大森海岸', [], "おおもりかいがん"),
  /** 平和島 */
  [STATION_IDS.keikyu.heiwajima]: new StationInfo('平和島', [], "へいわじま"),
  /** 大森町 */
  [STATION_IDS.keikyu.omorimachi]: new StationInfo('大森町', [], "おおもりまち"),
  /** 梅屋敷 */
  [STATION_IDS.keikyu.umeyashiki]: new StationInfo('梅屋敷', [], "うめやしき"),
  /** 京急蒲田 */
  [STATION_IDS.keikyu.keikyukamata]: new StationInfo('京急蒲田', [
    LINE_IDS.keikyu.honsen,
    LINE_IDS.keikyu.kuko,
  ], "けいきゅうかまた"),
  /** 雑色 */
  [STATION_IDS.keikyu.zoushiki]: new StationInfo('雑色', [], "ぞうしき"),
  /** 六郷土手 */
  [STATION_IDS.keikyu.rokugodote]: new StationInfo('六郷土手', [], "ろくごうどて"),
  /** 京急川崎 */
  [STATION_IDS.keikyu.keikyukawasaki]: new StationInfo('京急川崎', [
    LINE_IDS.keikyu.honsen,
    new ExchangeInfo(LINE_IDS.jr_east.tokaido, STATION_IDS.jr_east.kawasaki),
    new ExchangeInfo(LINE_IDS.jr_east.keihin_touhoku, STATION_IDS.jr_east.kawasaki),
    new ExchangeInfo(LINE_IDS.jr_east.nanbu, STATION_IDS.jr_east.kawasaki),
  ], "けいきゅうかわさき"),
  /** 八丁畷 */
  [STATION_IDS.keikyu.hacchonawate]: new StationInfo('八丁畷', [
    LINE_IDS.keikyu.honsen,
    LINE_IDS.jr_east.nanbu,
  ], "はっちょうなわて"),
  /** 鶴見市場 */
  [STATION_IDS.keikyu.tsurumiichiba]: new StationInfo('鶴見市場', [], "つるみいちば"),
  /** 京急鶴見 */
  [STATION_IDS.keikyu.keikyutsurumi]: new StationInfo('京急鶴見', [
    LINE_IDS.keikyu.honsen,
    new ExchangeInfo(LINE_IDS.jr_east.keihin_touhoku, STATION_IDS.jr_east.tsurumi),
  ], "けいきゅうつるみ"),
  /** 花月総持寺 */
  [STATION_IDS.keikyu.kagetusoujiji]: new StationInfo('花月総持寺', [], "かげつそうじじ"),
  /** 生麦  */
  [STATION_IDS.keikyu.namamugi]: new StationInfo('生麦', [], "なまむぎ"),
  /** 京急新子安 */
  [STATION_IDS.keikyu.keikyushinkoyasu]: new StationInfo('京急新子安', [
    LINE_IDS.keikyu.honsen,
    new ExchangeInfo(LINE_IDS.jr_east.keihin_touhoku, STATION_IDS.jr_east.shinkoyasu),
  ], "けいきゅうしんこやす"),
  /** 子安 */
  [STATION_IDS.keikyu.koyasu]: new StationInfo('子安', [], "こやす"),
  /** 神奈川新町 */
  [STATION_IDS.keikyu.kanagawashinmachi]: new StationInfo('神奈川新町', [], "かながわしんまち"),
  /** 京急東神奈川 */
  [STATION_IDS.keikyu.keikyuhigashikanagawa]: new StationInfo('京急東神奈川', [
    LINE_IDS.keikyu.honsen,
    new ExchangeInfo(LINE_IDS.jr_east.keihin_touhoku, STATION_IDS.jr_east.higashikanagawa),
    new ExchangeInfo(LINE_IDS.jr_east.yokohama, STATION_IDS.jr_east.higashikanagawa),
  ], "けいきゅうひがしかながわ"),
  /** 神奈川駅 */
  [STATION_IDS.keikyu.kanagawa]: new StationInfo('神奈川駅', [], "かながわえき"),
  /** 戸部 */
  [STATION_IDS.keikyu.tobe]: new StationInfo('戸部', [], "とべ"),
  /** 日ノ出町 */
  [STATION_IDS.keikyu.hinodecho]: new StationInfo('日ノ出町', [], "ひのでちょう"),
  /** 黄金町 */
  [STATION_IDS.keikyu.koganecho]: new StationInfo('黄金町', [], "こがねちょう"),
  /** 南太田 */
  [STATION_IDS.keikyu.minamiota]: new StationInfo('南太田', [], "みなみおおた"),
  /** 井土ヶ谷 */
  [STATION_IDS.keikyu.idogaya]: new StationInfo('井土ヶ谷', [], "いどがや"),
  /** 弘明寺*/
  [STATION_IDS.keikyu.gumyouji]: new StationInfo('弘明寺', [], "ぐみょうじ"),
  /** 上大岡 */
  [STATION_IDS.keikyu.kamiooka]: new StationInfo('上大岡', [
    LINE_IDS.keikyu.honsen,
    LINE_IDS.yokohama_shieichikatetsu.blue_line,
  ], "かみおおおか"),
  /** 屛風ヶ浦 */
  [STATION_IDS.keikyu.byobugaura]: new StationInfo('屛風ヶ浦', [], "びょうぶがうら"),
  /** 杉田 */
  [STATION_IDS.keikyu.sugita]: new StationInfo('杉田', [
    LINE_IDS.keikyu.honsen,
    LINE_IDS.jr_east.negishi,
    LINE_IDS.keikyu.sea_side,
  ], "すぎた"),
  /** 京急富岡 */
  [STATION_IDS.keikyu.keikyutomioka]: new StationInfo('京急富岡', [], "けいきゅうとみおか"),
  /** 能見台 */
  [STATION_IDS.keikyu.noukendai]: new StationInfo('能見台', [], "のうけんだい"),
  /** 金沢文庫 */
  [STATION_IDS.keikyu.kanazawabunko]: new StationInfo('金沢文庫', [], "かなざわぶんこ"),
  /** 金沢八景 */
  [STATION_IDS.keikyu.kanazawahakkei]: new StationInfo('金沢八景', [
    LINE_IDS.keikyu.honsen,
    LINE_IDS.keikyu.sea_side,
  ], "かなざわはっけい"),
  /** 追浜 */
  [STATION_IDS.keikyu.oppama]: new StationInfo('追浜', [], "おっぱま"),
  /** 京急田浦 */
  [STATION_IDS.keikyu.keikyutaura]: new StationInfo('京急田浦', [], "けいきゅうたうら"),
  /** 安針塚*/
  [STATION_IDS.keikyu.anjinduka]: new StationInfo('安針塚', [], "あんじんづか"),
  /** 逸見 */
  [STATION_IDS.keikyu.hemi]: new StationInfo('逸見', [], "へみ"),
  /** 汐入 */
  [STATION_IDS.keikyu.shioiri]: new StationInfo('汐入', [], "しおいり"),
  /** 横須賀中央 */
  [STATION_IDS.keikyu.yokosukachuo]: new StationInfo('横須賀中央', [], "よこすかちゅうおう"),
  /** 県立大学 */
  [STATION_IDS.keikyu.kenritsudaigaku]: new StationInfo('県立大学', [], "けんりつだいがく"),
  /** 堀之内 */
  [STATION_IDS.keikyu.horinouchi]: new StationInfo('堀之内', [
    LINE_IDS.keikyu.honsen,
    LINE_IDS.keikyu.kurihama,
  ], "ほりのうち"),
  /** 京急大津 */
  [STATION_IDS.keikyu.keikyuotsu]: new StationInfo('京急大津', [], "けいきゅうおおつ"),
  /** 真堀海岸 */
  [STATION_IDS.keikyu.maborikaigan]: new StationInfo('真堀海岸', [], "まぼりかいがん"),
  /** 浦賀 */
  [STATION_IDS.keikyu.uraga]: new StationInfo('浦賀', [], "うらが"),


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

  [STATION_IDS.jr_tokai.mishima]: new StationInfo('三島', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.izuhakone.sunzu,
  ], "みしま"),
  [STATION_IDS.jr_tokai.shinfuji]: new StationInfo('新富士', [], "新富士"),
  [STATION_IDS.jr_tokai.shizuoka]: new StationInfo('静岡', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
  ], "静岡"),
  [STATION_IDS.jr_tokai.kakegawa]: new StationInfo('掛川', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.jr_tokai.tenryuhamanako,
  ], "かけがわ"),
  [STATION_IDS.jr_tokai.hamamatsu]: new StationInfo('浜松', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
  ], "はままつ"),
  [STATION_IDS.jr_tokai.toyohashi]: new StationInfo('豊橋', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.jr_tokai.ida,
    LINE_IDS.nagoya.nagoyahonsen,
  ], "とよはし"),
  [STATION_IDS.jr_tokai.mikawaanjo]: new StationInfo('三河安城', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
  ], "みかわあんじょう"),
  [STATION_IDS.jr_tokai.nagoya]: new StationInfo('名古屋', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.jr_tokai.chuohonsen,
    LINE_IDS.jr_tokai.aonami,
    LINE_IDS.jr_west.kansai_honsen,
    LINE_IDS.nagoya_shiei_subway.sakuradori,
    LINE_IDS.nagoya_shiei_subway.higashiyama,
  ], "名古屋"),
  [STATION_IDS.jr_tokai.gifuhashima]: new StationInfo('岐阜羽島', [], "ぎふはしま"),
  [STATION_IDS.jr_tokai.maibara]: new StationInfo('米原', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.jr_tokai.hokurikuhonsen,
    LINE_IDS.oumi.honsen,
  ], "まいばら"),
  [STATION_IDS.jr_tokai.kyoto]: new StationInfo('京都', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.jr_west.saninhonsen,
    LINE_IDS.jr_west.nara,
    LINE_IDS.kyoto_shiei_subway.karasuma,
    LINE_IDS.kinki_nihon.kyoto,
  ], "きょうと"),
  [STATION_IDS.jr_tokai.shinosaka]: new StationInfo('新大阪', [
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.jr_east.shinkansen.tokaido,
    LINE_IDS.jr_west.shinkansen.sanyo,
    LINE_IDS.osaka_metro.midosuji,
    LINE_IDS.jr_west.osaka_higashi,
  ], "しんおおさか"),

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
