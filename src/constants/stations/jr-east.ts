import { Station, StationInfo } from "@/types/station-info";
import { STATION_IDS } from "../station-ids";
import { LINE_IDS } from "../line-ids";
import { PREFECTURE as P } from "../prefecture";
import { ExchangeInfo } from "@/types/exchange-info";

export const jr_east_stations = {
  // #region JR東日本
  // 川越線(JA)
  [STATION_IDS.jr_east.nisshin]: new Station({
    name: "日進",
    reading: "にっしん",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.nishi_omiya]: new Station({
    name: "西大宮",
    reading: "にしおおみや",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.sashiougi]: new Station({
    name: "指扇",
    reading: "さしおうぎ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.minami_furuya]: new Station({
    name: "南古谷",
    reading: "みなみふるや",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.kawagoe]: new Station({
    name: "川越",
    reading: "かわごえ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe, LINE_IDS.toubu.toujou],
  }),
  [STATION_IDS.jr_east.nishi_kawagoe]: new Station({
    name: "西川越",
    reading: "にしかわごえ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.matoba]: new Station({
    name: "的場",
    reading: "まとば",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.kasahata]: new Station({
    name: "笠幡",
    reading: "かさはた",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.musashi_takahagi]: new Station({
    name: "武蔵高萩",
    reading: "むさしたかはぎ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe],
  }),
  [STATION_IDS.jr_east.komagawa]: new Station({
    name: "高麗川",
    reading: "こまがわ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.kawagoe, LINE_IDS.jr_east.hachiko],
  }),
  [STATION_IDS.jr_east.atsugi]: new Station({
    name: "厚木",
    reading: "あつぎ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.odawara, LINE_IDS.jr_east.sagami],
  }),
  // 青梅線(JC)
  [STATION_IDS.jr_east.nishi_tachikawa]: new Station({
    name: "西立川",
    reading: "にしたちかわ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.higashi_nakagami]: new Station({
    name: "東中神",
    reading: "ひがしなかがみ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.nakagami]: new Station({
    name: "中神",
    reading: "なかがみ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.akishima]: new Station({
    name: "昭島",
    reading: "あきしま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.ushihama]: new Station({
    name: "牛浜",
    reading: "うしはま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.fussa]: new Station({
    name: "福生",
    reading: "ふっさ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.hamura]: new Station({
    name: "羽村",
    reading: "はむら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.ozaku]: new Station({
    name: "小作",
    reading: "おざく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.kabe]: new Station({
    name: "河辺",
    reading: "かべ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.higashi_oume]: new Station({
    name: "東青梅",
    reading: "ひがしおうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.oume]: new Station({
    name: "青梅",
    reading: "おうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.miyanohira]: new Station({
    name: "宮ノ平",
    reading: "みやのひら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.hinatawada]: new Station({
    name: "日向和田",
    reading: "ひなたわだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.ishigamimae]: new Station({
    name: "石神前",
    reading: "いしがみまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.futamatao]: new Station({
    name: "二俣尾",
    reading: "ふたまたお",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.ikusabata]: new Station({
    name: "軍畑",
    reading: "いくさばた",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.sawai]: new Station({
    name: "沢井",
    reading: "さわい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.mitake]: new Station({
    name: "御嶽",
    reading: "みたけ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.kawai]: new Station({
    name: "川井",
    reading: "かわい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.kori]: new Station({
    name: "古里",
    reading: "こり",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.hatonosu]: new Station({
    name: "鳩ノ巣",
    reading: "はとのす",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.shiromaru]: new Station({
    name: "城丸",
    reading: "しろまる",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),
  [STATION_IDS.jr_east.okutama]: new Station({
    name: "奥多摩",
    reading: "おくたま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.oume],
  }),

  // #region 宇都宮線(JU)
  [STATION_IDS.jr_east.utsunomiya]: new Station({
    name: "宇都宮",
    reading: "うつのみや",
    prefecture: P.TOCHIGI,
    lines: [
      LINE_IDS.jr_east.nikkou,
      LINE_IDS.jr_east.karasuyama,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
  }),
  [STATION_IDS.jr_east.kuroiso]: new Station({
    name: "黒磯",
    reading: "くろいそ",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.nishinasuno]: new Station({
    name: "西那須野",
    reading: "にしなすの",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.nozaki]: new Station({
    name: "野崎",
    reading: "のざき",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.yaita]: new Station({
    name: "矢板",
    reading: "やいた",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.kataoka]: new Station({
    name: "片岡",
    reading: "かたおか",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.kamasusaka]: new Station({
    name: "蒲須坂",
    reading: "かますさか",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.ujiie]: new Station({
    name: "氏家",
    reading: "うじいえ",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.okamoto]: new Station({
    name: "岡本",
    reading: "おかもと",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.karasuyama, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.housyakuji]: new Station({
    name: "宝積寺",
    reading: "ほうしゃくじ",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.karasuyama, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.oku]: new Station({
    name: "尾久",
    reading: "おく",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.takasaki, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.suzumenomiya]: new Station({
    name: "雀宮",
    reading: "すずめのみや",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.ishibashi]: new Station({
    name: "石橋",
    reading: "いしばし",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.jichiidai]: new Station({
    name: "自治医大",
    reading: "じちいだい",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.koganei]: new Station({
    name: "小金井",
    reading: "こがねい",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.oyama]: new Station({
    name: "小山",
    reading: "おやま",
    prefecture: P.TOCHIGI,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.mito,
      LINE_IDS.jr_east.shinkansen.touhoku,
    ],
  }),
  [STATION_IDS.jr_east.mamada]: new Station({
    name: "間々田",
    reading: "ままだ",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.nogi]: new Station({
    name: "野木",
    reading: "のぎ",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.koga]: new Station({
    name: "古河",
    reading: "こが",
    prefecture: P.IBARAKI,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.kurihashi]: new Station({
    name: "栗橋",
    reading: "くりはし",
    prefecture: P.IBARAKI,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.toubu.nikkou,
    ],
  }),
  [STATION_IDS.jr_east.higashiwashinomiya]: new Station({
    name: "東鷲宮",
    reading: "ひがしわしのみや",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.kuki]: new Station({
    name: "久喜",
    reading: "くき",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.toubu.isesaki,
    ],
  }),
  [STATION_IDS.jr_east.shinshiraoka]: new Station({
    name: "新白岡",
    reading: "しんしらおか",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.shiraoka]: new Station({
    name: "白岡",
    reading: "しらおか",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.hasuda]: new Station({
    name: "蓮田",
    reading: "はすだ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.higashiomiya]: new Station({
    name: "東大宮",
    reading: "ひがしおおみや",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.toro]: new Station({
    name: "土呂",
    reading: "とろ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
  }),
  [STATION_IDS.jr_east.maebashi]: new Station({
    name: "前橋",
    reading: "まえばし",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.ryoumou],
  }),
  [STATION_IDS.jr_east.shinmaebashi]: new Station({
    name: "新前橋",
    reading: "しんまえばし",
    prefecture: P.GUNMA,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.agatsuma,
    ],
  }),
  [STATION_IDS.jr_east.ino]: new Station({
    name: "井野",
    reading: "いの",
    prefecture: P.GUNMA,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.jr_east.ryoumou,
    ],
  }),
  [STATION_IDS.jr_east.takasakitonyamachi]: new Station({
    name: "高崎問屋町",
    reading: "たかさきとにやまち",
    prefecture: P.GUNMA,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.jr_east.ryoumou,
    ],
  }),
  [STATION_IDS.jr_east.takasaki]: new Station({
    name: "高崎",
    reading: "たかさき",
    prefecture: P.GUNMA,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.joushin.joushin,
    ],
  }),
  [STATION_IDS.jr_east.kuragano]: new Station({
    name: "倉賀野",
    reading: "くらがの",
    prefecture: P.GUNMA,
    lines: [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.hachiko,
    ],
  }),
  [STATION_IDS.jr_east.shinmachi]: new Station({
    name: "新町",
    reading: "しんまち",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.jinbohara]: new Station({
    name: "神保原",
    reading: "じんぼはら",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.honnjou]: new Station({
    name: "本庄",
    reading: "ほんじょう",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.okabe]: new Station({
    name: "岡部",
    reading: "おかべ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.hukaya]: new Station({
    name: "深谷",
    prefecture: P.SAITAMA,
    reading: "ふかや",
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.kagohara]: new Station({
    name: "籠原",
    reading: "かごはら",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.gyouda]: new Station({
    name: "行田",
    reading: "ぎょうだ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.hukiage]: new Station({
    name: "吹上",
    reading: "ふきあげ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.kitakounosu]: new Station({
    name: "北鴻巣",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "きたこうのす",
  }),
  [STATION_IDS.jr_east.kounosu]: new Station({
    name: "鴻巣",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "こうのす",
  }),
  [STATION_IDS.jr_east.kitamoto]: new Station({
    name: "北本",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "きたもと",
  }),
  [STATION_IDS.jr_east.okegawa]: new Station({
    name: "桶川",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "おけがわ",
  }),
  [STATION_IDS.jr_east.kitaageo]: new Station({
    name: "北上尾",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "きたあげお",
  }),
  [STATION_IDS.jr_east.ageo]: new Station({
    name: "上尾",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "あげお",
  }),
  [STATION_IDS.jr_east.miyahara]: new Station({
    name: "宮原",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    reading: "みやはら",
  }),
  [STATION_IDS.jr_east.omiya]: new Station({
    name: "大宮",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.kawagoe,
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.toubu.urban_park_line,
      LINE_IDS.saitama_shintoshi_koutsu.new_shuttle,
    ],
    reading: "おおみや",
  }),
  [STATION_IDS.jr_east.saitama_shintoshin]: new Station({
    name: "さいたま新都心",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.takasaki,
    ],
    reading: "さいたましんとしん",
  }),
  [STATION_IDS.jr_east.yono]: new Station({
    name: "与野",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.takasaki,
    ],
    reading: "よの",
  }),
  [STATION_IDS.jr_east.kitaurawa]: new Station({
    name: "北浦和",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.takasaki,
    ],
    reading: "きたうらわ",
  }),
  [STATION_IDS.jr_east.tabata]: new Station({
    name: "田端",
    prefecture: P.TOKYO,
    reading: "たばた",
    lines: [LINE_IDS.jr_east.keihin_touhoku, LINE_IDS.jr_east.takasaki],
  }),
  [STATION_IDS.jr_east.urawa]: new Station({
    name: "浦和",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
    reading: "うらわ",
  }),
  [STATION_IDS.jr_east.minami_urawa]: new Station({
    name: "南浦和",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keihin_touhoku, LINE_IDS.jr_east.musashino],
    reading: "みなみうらわ",
  }),
  [STATION_IDS.jr_east.warabi]: new Station({
    name: "蕨",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.keihin_touhoku],
    reading: "わらび",
  }),
  [STATION_IDS.jr_east.nishikawaguchi]: new Station({
    name: "西川口",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keihin_touhoku],
    reading: "にしかわぐち",
  }),
  [STATION_IDS.jr_east.kawaguti]: new Station({
    name: "川口",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keihin_touhoku],
    reading: "かわぐち",
  }),
  [STATION_IDS.jr_east.akahane]: new Station({
    name: "赤羽",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
    reading: "あかはね",
  }),
  [STATION_IDS.jr_east.higashijujo]: new Station({
    name: "東十条",
    reading: "ひがしじゅうじょう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.ouji]: new Station({
    name: "王子",
    reading: "おうじ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kaminakazato]: new Station({
    name: "上中里",
    reading: "かみなかざと",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.tabata]: new Station({
    name: "田端",
    reading: "たばた",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.nippori]: new Station({
    name: "日暮里",
    reading: "にっぽり",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.sky_liner,
      LINE_IDS.tokyo_subway.nippori_toneri_liner,
    ],
  }),
  [STATION_IDS.jr_east.uguisudani]: new Station({
    name: "鶯谷",
    reading: "うぐいすだに",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.ueno]: new Station({
    name: "上野",
    reading: "うえの",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.ginza,
      new ExchangeInfo(LINE_IDS.keisei.honsen, STATION_IDS.keisei.keisei_ueno),
      new ExchangeInfo(
        LINE_IDS.keisei.sky_liner,
        STATION_IDS.keisei.keisei_ueno
      ),
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.shinkansen.hokuriku,
    ],
  }),
  [STATION_IDS.jr_east.okachimachi]: new Station({
    name: "御徒町",
    reading: "おかちまち",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keihin_touhoku, LINE_IDS.jr_east.yamanote],
  }),
  [STATION_IDS.jr_east.akihabara]: new Station({
    name: "秋葉原",
    reading: "あきはばら",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.shutoken_shintoshi.tsukuba_express,
      LINE_IDS.tokyo_subway.shinjuku,
    ],
  }),
  [STATION_IDS.jr_east.kanda]: new Station({
    name: "神田",
    reading: "かんだ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.keihin_touhoku,
    ],
  }),
  [STATION_IDS.jr_east.tokyo]: new Station({
    name: "東京",
    reading: "とうきょう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.jr_east.sobu_kaisoku,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.shinkansen.hokuriku,
    ],
  }),
  [STATION_IDS.jr_east.chiba]: new Station({
    name: "千葉",
    reading: "ちば",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.jr_east.sobu_kaisoku,
      LINE_IDS.jr_east.soubu_honsen,
      LINE_IDS.jr_east.uchibou,
      LINE_IDS.jr_east.sotobou,
      LINE_IDS.jr_east.narita1,
      LINE_IDS.chiba_toshi_monorail.ichigou,
      LINE_IDS.chiba_toshi_monorail.nigou,
    ],
  }),
  [STATION_IDS.jr_east.nishichiba]: new Station({
    name: "西千葉",
    reading: "にしちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.inage]: new Station({
    name: "稲毛",
    reading: "いなげ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shinkemigawa]: new Station({
    name: "新検見川",
    reading: "しんけみがわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.makuhari]: new Station({
    name: "幕張",
    reading: "まくはり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.makuharihongou]: new Station({
    name: "幕張本郷",
    reading: "まくはりほんごう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tsudanuma]: new Station({
    name: "津田沼",
    reading: "つだぬま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_funabashi]: new Station({
    name: "東船橋",
    reading: "ひがしふなばし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.funabashi]: new StationInfo(
    "船橋",
    [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.jr_east.sobu_kaisoku,
      LINE_IDS.keisei.honsen,
      LINE_IDS.toubu.urban_park_line,
    ],
    "ふなばし"
  ),
  [STATION_IDS.jr_east.nishifunabashi]: new StationInfo(
    "西船橋",
    [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.jr_east.musashino,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.touyou_kousoku.touyou_kousoku,
    ],
    "にしふなばし"
  ),
  [STATION_IDS.jr_east.shimousa_nakayama]: new StationInfo(
    "下総中山",
    [],
    "しもうさなかやま"
  ),
  [STATION_IDS.jr_east.motoyawata]: new StationInfo(
    "本八幡",
    [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.keisei.honsen,
    ],
    "もとやわた"
  ),
  [STATION_IDS.jr_east.ichikawa]: new StationInfo(
    "市川",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.jr_east.sobu_kaisoku],
    "いちかわ"
  ),
  [STATION_IDS.jr_east.koiwa]: new StationInfo("小岩", [], "こいわ"),
  [STATION_IDS.jr_east.shinkoiwa]: new StationInfo(
    "新小岩",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.jr_east.sobu_kaisoku],
    "しんこいわ"
  ),
  [STATION_IDS.jr_east.bakurocho]: new StationInfo(
    "馬喰町",
    [
      LINE_IDS.jr_east.sobu_kaisoku,
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_subway.shinjuku,
    ],
    "ばくろちょう"
  ),
  [STATION_IDS.jr_east.hirai]: new StationInfo("平井", [], "ひらい"),
  [STATION_IDS.jr_east.kameido]: new StationInfo(
    "亀戸",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.toubu.kameido],
    "かめいど"
  ),
  [STATION_IDS.jr_east.kinshicho]: new StationInfo(
    "錦糸町",
    [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.jr_east.sobu_kaisoku,
      LINE_IDS.tokyo_metro.hanzoumon,
    ],
    "きんしちょう"
  ),
  [STATION_IDS.jr_east.shin_nihonbashi]: new StationInfo(
    "新日本橋",
    [],
    "しんにほんばし"
  ),
  [STATION_IDS.jr_east.ryogoku]: new StationInfo(
    "両国",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.tokyo_subway.oedo],
    "りょうごく"
  ),
  [STATION_IDS.jr_east.asakusabashi]: new StationInfo(
    "浅草橋",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.tokyo_subway.asakusa],
    "あさくさばし"
  ),
  [STATION_IDS.jr_east.ochanomizu]: new StationInfo(
    "御茶ノ水",
    [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.jr_east.chuou_honsen,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.tokyo_metro.awajicho
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.chiyoda,
        STATION_IDS.tokyo_metro.shin_ochanomizu
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.shinjuku,
        STATION_IDS.tokyo_subway.ogawacho
      ),
    ],
    "おちゃのみず"
  ),
  [STATION_IDS.jr_east.suidoubashi]: new StationInfo(
    "水道橋",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.tokyo_subway.mita],
    "すいどうばし"
  ),
  [STATION_IDS.jr_east.ichigaya]: new StationInfo(
    "市ヶ谷",
    [
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_subway.shinjuku,
    ],
    "いちがや"
  ),
  [STATION_IDS.jr_east.yotsuya]: new StationInfo(
    "四ッ谷",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.nanboku,
    ],
    "よつや"
  ),
  [STATION_IDS.jr_east.nakano]: new StationInfo(
    "中野",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "なかの"
  ),
  [STATION_IDS.jr_east.iidabashi]: new StationInfo(
    "飯田橋",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_subway.oedo,
    ],
    "いいだばし"
  ),
  [STATION_IDS.jr_east.shinanomachi]: new StationInfo(
    "信濃町",
    [],
    "しなのまち"
  ),
  [STATION_IDS.jr_east.sendagaya]: new StationInfo(
    "千駄ヶ谷",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_subway.oedo,
    ],
    "せんだがや"
  ),
  [STATION_IDS.jr_east.ohkubo]: new StationInfo(
    "大久保",
    [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
    "おおくぼ"
  ),
  [STATION_IDS.jr_east.higashi_nakano]: new StationInfo(
    "東中野",
    [LINE_IDS.jr_east.chuo_soubu_kankou, LINE_IDS.tokyo_subway.oedo],
    "ひがしなかの"
  ),
  [STATION_IDS.jr_east.kouenji]: new StationInfo(
    "高円寺",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "こうえんじ"
  ),
  [STATION_IDS.jr_east.asagaya]: new StationInfo(
    "阿佐ヶ谷",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "あさがや"
  ),
  [STATION_IDS.jr_east.ogikubo]: new StationInfo(
    "荻窪",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "おぎくぼ"
  ),
  [STATION_IDS.jr_east.nishi_ogikubo]: new StationInfo(
    "西荻窪",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.keiou.keiou,
    ],
    "にしおぎくぼ"
  ),
  [STATION_IDS.jr_east.kichijoji]: new StationInfo(
    "吉祥寺",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.keiou.inokashira,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "きちじょうじ"
  ),
  [STATION_IDS.jr_east.mitaka]: new StationInfo(
    "三鷹",
    [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
    "みたか"
  ),
  [STATION_IDS.jr_east.musashisakai]: new Station({
    name: "武蔵境",
    reading: "むさしさかい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.seibu.tamagawa],
  }),
  [STATION_IDS.jr_east.higashi_koganei]: new Station({
    name: "東小金井",
    reading: "ひがしこがねい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_koganei]: new Station({
    name: "武蔵小金井",
    reading: "むさしかがねい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kokubunji]: new StationInfo(
    "国分寺",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.seibu.tamako,
      LINE_IDS.seibu.kokubunji,
    ],
    "こくぶんじ"
  ),
  [STATION_IDS.jr_east.nishikokubunji]: new StationInfo(
    "西国分寺",
    [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.musashino],
    "にしこくぶんじ"
  ),
  [STATION_IDS.jr_east.kunitachi]: new Station({
    name: "国立",
    reading: "くにたち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.tachikawa]: new Station({
    name: "立川",
    reading: "たちかわ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.oume,
      LINE_IDS.jr_east.nanbu,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tama_monorail.tama_monorail,
    ],
  }),
  [STATION_IDS.jr_east.hino]: new Station({
    name: "日野",
    reading: "ひの",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.jr_east.toyoda]: new Station({
    name: "豊田",
    reading: "とよだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.jr_east.nishi_hachiouji]: new Station({
    name: "西八王子",
    reading: "にしはちおうじ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.jr_east.takao]: new Station({
    name: "高尾",
    reading: "たかお",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.keiou.takao,
    ],
  }),
  [STATION_IDS.jr_east.sagamiko]: new Station({
    name: "相模湖",
    reading: "さがみこ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.fujino]: new Station({
    name: "藤野",
    reading: "ふじの",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.uenohara]: new Station({
    name: "上野原",
    reading: "うえのはら",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.shiotsu]: new Station({
    name: "四方津",
    reading: "しおつ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.yanagawa]: new Station({
    name: "梁川",
    reading: "やながわ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.torisawa]: new Station({
    name: "鳥沢",
    reading: "とりさわ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.saruhashi]: new Station({
    name: "猿橋",
    reading: "さるはし",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.ohtsuki]: new Station({
    name: "大月",
    reading: "おおつき",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.jr_east.hatsukari]: new Station({
    name: "初狩",
    reading: "はつかり",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.sasago]: new Station({
    name: "笹子",
    reading: "ささご",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.kai_yamato]: new Station({
    name: "甲斐大和",
    reading: "かいやまと",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.katsunuma_budoukyou]: new Station({
    name: "勝沼ぶどう郷",
    reading: "かつぬまぶどうきょう",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.enzan]: new Station({
    name: "塩山",
    reading: "えんざん",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.higashi_yamanashi]: new Station({
    name: "東山梨",
    reading: "ひがしやまなし",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.yamanashishi]: new Station({
    name: "山梨市",
    reading: "やまなしし",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.kasugaichou]: new Station({
    name: "春日居町",
    reading: "かすがいちょう",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.isawa_onsen]: new Station({
    name: "石和温泉",
    reading: "いさわおんせん",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.sakaori]: new Station({
    name: "酒折",
    reading: "さかおり",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.ryuou]: new Station({
    name: "竜王",
    reading: "りゅうおう",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.shiozaki]: new Station({
    name: "塩崎",
    reading: "しおざき",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.nirasaki]: new Station({
    name: "韮崎",
    reading: "にらさき",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.shinpu]: new Station({
    name: "新府",
    reading: "しんぷ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.anayama]: new Station({
    name: "穴山",
    reading: "あなやま",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.hinoharu]: new Station({
    name: "日野春",
    reading: "ひのはる",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.nagasaka]: new Station({
    name: "長坂",
    reading: "ながさか",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.kobuchizawa]: new Station({
    name: "小淵沢",
    reading: "こぶちざわ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.shinano_sakai]: new Station({
    name: "信濃境",
    reading: "しなのさかい",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.fujimi]: new Station({
    name: "富士見",
    reading: "ふじみ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.suzuran_no_sato]: new Station({
    name: "すずらんの里",
    reading: "すずらんのさと",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.aoyanagi]: new Station({
    name: "青柳",
    reading: "あおやなぎ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.chino]: new Station({
    name: "茅野",
    reading: "ちの",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.kami_suwa]: new Station({
    name: "上諏訪",
    reading: "かみすわ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.shimo_suwa]: new Station({
    name: "下諏訪",
    reading: "しもすわ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.okaya]: new Station({
    name: "岡谷",
    reading: "おかや",
    prefecture: P.NAGANO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuou_honsen_okaya_shiojiri,
    ],
  }),
  [STATION_IDS.jr_east.midoriko]: new Station({
    name: "みどり湖",
    reading: "みどりこ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen],
  }),
  [STATION_IDS.jr_east.shiojiri]: new Station({
    name: "塩尻",
    reading: "しおじり",
    prefecture: P.NAGANO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_toukai.chuou_honsen,
      LINE_IDS.jr_east.shinonoi,
      LINE_IDS.jr_east.chuou_honsen_okaya_shiojiri,
    ],
  }),
  [STATION_IDS.jr_east.kawagishi]: new Station({
    name: "川岸",
    reading: "かわぎし",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen_okaya_shiojiri],
  }),
  [STATION_IDS.jr_east.tatsuno]: new Station({
    name: "辰野",
    reading: "たつの",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen_okaya_shiojiri],
  }),
  [STATION_IDS.jr_east.shinano_kawashima]: new Station({
    name: "信濃川島",
    reading: "しなのかわしま",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen_okaya_shiojiri],
  }),
  [STATION_IDS.jr_east.ono]: new Station({
    name: "小野",
    reading: "おの",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.chuou_honsen_okaya_shiojiri],
  }),

  [STATION_IDS.jr_east.yurakucho]: new Station({
    name: "有楽町",
    reading: "ゆうらくちょう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_metro.yurakucho,
    ],
  }),
  [STATION_IDS.jr_east.shinbashi]: new Station({
    name: "新橋",
    reading: "しんばし",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.yurikamome.yurikamome,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_subway.asakusa,
    ],
  }),
  [STATION_IDS.jr_east.hamamatsucho]: new Station({
    name: "浜松町",
    reading: "はままつちょう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_monorail.haneda_kuko,
    ],
  }),
  [STATION_IDS.jr_east.tamachi]: new Station({
    name: "田町",
    reading: "たまち",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.takanawa_gateway]: new Station({
    name: "高輪ゲートウェイ",
    reading: "たかなわげーとうぇい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.shinagawa]: new Station({
    name: "品川",
    reading: "しながわ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.keikyu.honsen,
    ],
  }),
  [STATION_IDS.jr_east.oimachi]: new Station({
    name: "大井町",
    reading: "おおいまち",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.toukyu.oimachi,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
  }),
  [STATION_IDS.jr_east.nishioi]: new Station({
    name: "西大井",
    reading: "にしおおい",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
  }),
  [STATION_IDS.jr_east.omori]: new Station({
    name: "大森",
    reading: "おおもり",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.kamata]: new Station({
    name: "蒲田",
    reading: "かまた",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.toukyu.tamagawa,
      LINE_IDS.toukyu.ikegami,
    ],
  }),
  [STATION_IDS.jr_east.kawasaki]: new Station({
    name: "川崎",
    reading: "かわさき",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.nanbu,
      LINE_IDS.keikyu.honsen,
    ],
  }),
  [STATION_IDS.jr_east.tsurumi]: new Station({
    name: "鶴見",
    reading: "つるみ",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.tsurumi,
      new ExchangeInfo(
        LINE_IDS.keikyu.honsen,
        STATION_IDS.keikyu.keikyutsurumi
      ),
    ],
  }),
  [STATION_IDS.jr_east.shinkoyasu]: new Station({
    name: "新子安",
    reading: "しんこやす",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.higashikanagawa]: new Station({
    name: "東神奈川",
    reading: "ひがしかながわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.yokohama]: new Station({
    name: "横浜",
    reading: "よこはま",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.negishi,
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.sagami.honsen,
      LINE_IDS.yokohama_subway.blue_line,
      LINE_IDS.keikyu.honsen,
      LINE_IDS.yokohama_kousoku.minato_mirai,
    ],
  }),
  [STATION_IDS.jr_east.shinjuku]: new Station({
    name: "新宿",
    reading: "しんじゅく",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.keiou.keiou,
      LINE_IDS.keiou.keioushinsen,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_subway.oedo,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.tokyo_subway.shinjuku,
    ],
  }),
  [STATION_IDS.jr_east.shibuya]: new Station({
    name: "渋谷",
    reading: "しぶや",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.keiou.inokashira,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.fukutoshin,
      LINE_IDS.toukyu.touyoko,
      LINE_IDS.toukyu.denentoshi,
    ],
  }),
  [STATION_IDS.jr_east.ebisu]: new Station({
    name: "恵比寿",
    reading: "えびす",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.tokyo_metro.hibiya,
    ],
  }),
  [STATION_IDS.jr_east.meguro]: new Station({
    name: "目黒",
    reading: "めぐろ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.toukyu.meguro,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_subway.mita,
    ],
  }),
  [STATION_IDS.jr_east.gotanda]: new Station({
    name: "五反田",
    reading: "ごたんだ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.toukyu.ikegami,
      LINE_IDS.tokyo_subway.asakusa,
    ],
  }),
  [STATION_IDS.jr_east.osaki]: new Station({
    name: "大崎",
    reading: "おおさき",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_sotetsu_chokutsu,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
  }),
  [STATION_IDS.jr_east.nishinippori]: new Station({
    name: "西日暮里",
    reading: "にしにっぽり",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_subway.nippori_toneri_liner,
    ],
  }),
  [STATION_IDS.jr_east.tabata]: new Station({
    name: "田端",
    reading: "たばた",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.komagome]: new Station({
    name: "駒込",
    reading: "こまごめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.tokyo_metro.nanboku],
  }),
  [STATION_IDS.jr_east.sugamo]: new Station({
    name: "巣鴨",
    reading: "すがも",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.jr_east.ohtsuka]: new Station({
    name: "大塚",
    reading: "おおつか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote],
  }),
  [STATION_IDS.jr_east.ikebukuro]: new Station({
    name: "池袋",
    reading: "いけぶくろ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.seibu.ikebukuro,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      LINE_IDS.toubu.toujou,
    ],
  }),
  [STATION_IDS.jr_east.itabashi]: new Station({
    name: "板橋",
    reading: "いたばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.jujo]: new Station({
    name: "十条",
    reading: "じゅうじょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.kitaakahane]: new Station({
    name: "北赤羽",
    reading: "きたあかばね",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.ukimafunado]: new Station({
    name: "浮間舟渡",
    reading: "うきまふなど",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.todakouen]: new Station({
    name: "戸田公園",
    reading: "とだこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.toda]: new Station({
    name: "戸田",
    reading: "とだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.kitatoda]: new Station({
    name: "北戸田",
    reading: "きたとだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.musashi_urawa]: new Station({
    name: "武蔵浦和",
    reading: "むさしうらわ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.naka_urawa]: new Station({
    name: "中浦和",
    reading: "なかうらわ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.minamiyono]: new Station({
    name: "南与野",
    reading: "みなみよの",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.yono_honmachi]: new Station({
    name: "与野本町",
    reading: "よのほんまち",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.kita_yono]: new Station({
    name: "北与野",
    reading: "きたよの",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.jr_east.saikyou],
  }),
  [STATION_IDS.jr_east.mejiro]: new Station({
    name: "目白",
    reading: "めじろ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote],
  }),
  [STATION_IDS.jr_east.takadanobaba]: new Station({
    name: "高田馬場",
    reading: "たかだのばば",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.seibu.shinjuku,
    ],
  }),
  [STATION_IDS.jr_east.shin_ohkubo]: new Station({
    name: "新大久保",
    reading: "しんおおくぼ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote],
  }),
  [STATION_IDS.jr_east.yoyogi]: new Station({
    name: "代々木",
    reading: "よよぎ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_subway.oedo,
    ],
  }),
  [STATION_IDS.jr_east.harajuku]: new Station({
    name: "原宿",
    reading: "はらじゅく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote],
  }),
  // #endregion 宇都宮線
  // #region 横須賀線
  [STATION_IDS.jr_east.shinkawasaki]: new Station({
    name: "新川崎",
    reading: "しんかわさき",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.hodogaya]: new Station({
    name: "保土ヶ谷",
    reading: "ほどがや",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.higashitotsuka]: new Station({
    name: "東戸塚",
    reading: "ひがしとつか",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.kamakura]: new Station({
    name: "鎌倉",
    reading: "かまくら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka, LINE_IDS.enoshima.enoshima],
  }),
  [STATION_IDS.jr_east.kitakamakura]: new Station({
    name: "北鎌倉",
    reading: "きたかまくら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.zushi]: new Station({
    name: "逗子",
    reading: "ずし",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.higashizushi]: new Station({
    name: "東逗子",
    reading: "ひがしずし",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.taura]: new Station({
    name: "田浦",
    reading: "たうら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.yokosuka]: new Station({
    name: "横須賀",
    reading: "よこすか",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.kinugasa]: new Station({
    name: "衣笠",
    reading: "きぬがさ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.kurihama]: new Station({
    name: "久里浜",
    reading: "くりはま",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokosuka],
  }),
  [STATION_IDS.jr_east.hachiouji]: new Station({
    name: "八王子",
    reading: "はちおうじ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.jr_east.hachiko,
    ],
  }),
  [STATION_IDS.jr_east.katakura]: new Station({
    name: "片倉",
    reading: "かたくら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.hachiouji_minamino]: new Station({
    name: "八王子みなみの",
    reading: "はちおうじみなみの",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.aihara]: new Station({
    name: "相原",
    reading: "あいはら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.hashimoto]: new Station({
    name: "橋本",
    reading: "はしもと",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.jr_east.sagami,
      LINE_IDS.keiou.sagamihara,
    ],
  }),
  [STATION_IDS.jr_east.sagamihara]: new Station({
    name: "相模原",
    reading: "さがみはら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.huchinobe]: new Station({
    name: "淵野辺",
    reading: "ふちのべ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.kobuchi]: new Station({
    name: "古渕",
    reading: "こぶち",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.machida]: new Station({
    name: "町田",
    reading: "まちだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.naruse]: new Station({
    name: "成瀬",
    reading: "なるせ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.nagatsuta]: new Station({
    name: "長津田",
    reading: "ながつた",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.toukyu.denentoshi,
      LINE_IDS.toukyu.kodomonokuni,
    ],
  }),
  [STATION_IDS.jr_east.tokaichiba]: new Station({
    name: "十日市場",
    reading: "とかいちば",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.nakayama]: new Station({
    name: "中山",
    reading: "なかやま",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama, LINE_IDS.yokohama_subway.green_line],
  }),
  [STATION_IDS.jr_east.kamoi]: new Station({
    name: "鴨居",
    reading: "かもい",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.kodukue]: new Station({
    name: "小机",
    reading: "こづくえ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.shin_yokohama]: new Station({
    name: "新横浜",
    reading: "しんよこはま",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.yokohama_subway.blue_line,
      LINE_IDS.sagami.sotetsushin_yokohama,
      LINE_IDS.toukyu.shin_yokohama,
    ],
  }),
  [STATION_IDS.jr_east.kikuna]: new Station({
    name: "菊名",
    reading: "きくな",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama, LINE_IDS.toukyu.touyoko],
  }),
  [STATION_IDS.jr_east.oguchi]: new Station({
    name: "大口",
    reading: "おおぐち",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.sakuragicho]: new Station({
    name: "桜木町",
    reading: "さくらぎちょう",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.kannai]: new Station({
    name: "関内",
    reading: "かんない",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.ishikawacho]: new Station({
    name: "石川町",
    reading: "いしかわちょう",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.yamate]: new Station({
    name: "山手",
    reading: "やまて",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.negishi]: new Station({
    name: "根岸",
    reading: "ねぎし",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.isogo]: new Station({
    name: "磯子",
    reading: "いそご",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.shin_sugita]: new Station({
    name: "新杉田",
    reading: "しんすぎた",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.negishi,
      new ExchangeInfo(LINE_IDS.keikyu.honsen, STATION_IDS.keikyu.sugita),
    ],
  }),
  [STATION_IDS.jr_east.youkoudai]: new Station({
    name: "洋光台",
    reading: "ようこうだい",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.kounandai]: new Station({
    name: "港南台",
    reading: "こうなんだい",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.hongoudai]: new Station({
    name: "本郷台",
    reading: "ほんごうだい",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
  }),
  [STATION_IDS.jr_east.ofuna]: new Station({
    name: "大船",
    reading: "おおふな",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.negishi,
      LINE_IDS.jr_east.yokohama,
    ],
  }),
  [STATION_IDS.jr_east.totsuka]: new Station({
    name: "戸塚",
    reading: "とつか",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.hujisawa]: new Station({
    name: "藤沢",
    reading: "ふじさわ",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.odakyu.enoshima,
    ],
  }),
  [STATION_IDS.jr_east.tsujido]: new Station({
    name: "辻堂",
    reading: "つじどう",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.chigasaki]: new Station({
    name: "茅ヶ崎",
    reading: "ちがさき",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou, LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.hiratsuka]: new Station({
    name: "平塚",
    reading: "ひらつか",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.oiso]: new Station({
    name: "大磯",
    reading: "おおいそ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.ninomiya]: new Station({
    name: "二宮",
    reading: "にのみや",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.koudu]: new Station({
    name: "国府津",
    reading: "こうづ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou, LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.kamonomiya]: new Station({
    name: "鴨宮",
    reading: "かものみや",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.odawara]: new Station({
    name: "小田原",
    reading: "おだわら",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.odakyu.odawara,
      LINE_IDS.odakyu.hakonetozan,
      LINE_IDS.izu_hakone.daiyuzan,
    ],
  }),
  [STATION_IDS.jr_east.hayakawa]: new Station({
    name: "早川",
    reading: "はやかわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.nebukawa]: new Station({
    name: "根府川",
    reading: "ねぶかわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.manazuru]: new Station({
    name: "真鶴",
    reading: "まなづる",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.yugawara]: new Station({
    name: "湯河原",
    reading: "ゆがわら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.toukaidou],
  }),
  [STATION_IDS.jr_east.atami]: new Station({
    name: "熱海",
    reading: "あたみ",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_toukai.itou,
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_toukai.toukaidou,
    ],
  }),
  // #endregion 横須賀線
  // #region 相模線(JG)
  [STATION_IDS.jr_east.kita_chigasaki]: new Station({
    name: "北茅ヶ崎",
    reading: "きたちがさき",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.kagawa]: new Station({
    name: "香川",
    reading: "かがわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.samukawa]: new Station({
    name: "寒川",
    reading: "さむかわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.miyayama]: new Station({
    name: "宮山",
    reading: "みややま",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.kurami]: new Station({
    name: "倉見",
    reading: "くらみ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.kadosawabashi]: new Station({
    name: "門沢橋",
    reading: "かどさわばし",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.syake]: new Station({
    name: "社家",
    reading: "しゃけ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.ebina]: new Station({
    name: "海老名",
    reading: "えびな",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.iriya]: new Station({
    name: "入谷",
    reading: "いりや",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.soubudai_shita]: new Station({
    name: "相武台下",
    reading: "そうぶだいした",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.shimomizo]: new Station({
    name: "下溝",
    reading: "しもみぞ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.harataima]: new Station({
    name: "原当麻",
    reading: "はらたいま",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.banda]: new Station({
    name: "番田",
    reading: "ばんだ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.kamimizo]: new Station({
    name: "上溝",
    reading: "かみみぞ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  [STATION_IDS.jr_east.minami_hashimoto]: new Station({
    name: "南橋本",
    reading: "みなみはしもと",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.sagami],
  }),
  // #endregion 相模線
  // #region 鶴見線(JI)
  [STATION_IDS.jr_east.kokudou]: new Station({
    name: "国道",
    reading: "こくどう",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.tsurumi_ono]: new Station({
    name: "鶴見小野",
    reading: "つるみおの",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.bentenbashi]: new Station({
    name: "弁天橋",
    reading: "べんてんばし",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.asano]: new Station({
    name: "浅野",
    reading: "あさの",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.anzen]: new Station({
    name: "安善",
    reading: "あんぜん",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.musashi_shiraishi]: new Station({
    name: "武蔵白石",
    reading: "むさししらいし",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.shouwa]: new Station({
    name: "昭和",
    reading: "しょうわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.hamakawasaki]: new Station({
    name: "浜川崎",
    reading: "はまかわさき",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.ougimachi]: new Station({
    name: "扇町",
    reading: "おうぎまち",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.shin_shibaura]: new Station({
    name: "新芝浦",
    reading: "しんしばうら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.umi_shibaura]: new Station({
    name: "海芝浦",
    reading: "うみしばうら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.okawa]: new Station({
    name: "大川",
    reading: "おおかわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.tsurumi],
  }),
  // #endregion 鶴見線
  // #region 京葉線(JK)
  [STATION_IDS.jr_east.hacchobori]: new Station({
    name: "八丁堀",
    reading: "はっちょうぼり",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.tokyo_metro.hibiya],
  }),
  [STATION_IDS.jr_east.ecchujima]: new Station({
    name: "越中島",
    reading: "えっちゅうじま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.shiomi]: new Station({
    name: "潮見",
    reading: "しおみ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.shin_kiba]: new Station({
    name: "新木場",
    reading: "しんきば",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.jr_east.musashino,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
  }),
  [STATION_IDS.jr_east.kasai_rinkai_kouen]: new Station({
    name: "葛西臨海公園",
    reading: "かさいりんかいこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.shin_urayasu]: new Station({
    name: "新浦安",
    reading: "しんうらやす",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.ichikawa_shiohama]: new Station({
    name: "市川塩浜",
    reading: "いちかわしおはま",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.futamata_shinmachi]: new Station({
    name: "二俣新町",
    reading: "ふたまたしんまち",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.minami_funabashi]: new Station({
    name: "南船橋",
    reading: "みなみふなばし",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.shin_narashino]: new Station({
    name: "新習志野",
    reading: "しんならしの",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.kaihin_makuhari]: new Station({
    name: "海浜幕張",
    reading: "かいひんまくはり",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
  }),
  [STATION_IDS.jr_east.kemigawahama]: new Station({
    name: "検見川浜",
    reading: "けみがわはま",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou],
  }),
  [STATION_IDS.jr_east.inage_kaigan]: new Station({
    name: "稲毛海岸",
    reading: "いなげかいがん",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou],
  }),
  [STATION_IDS.jr_east.chiba_minato]: new Station({
    name: "千葉みなと",
    reading: "ちばみなと",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.keiyou, LINE_IDS.chiba_toshi_monorail.ichigou],
  }),
  [STATION_IDS.jr_east.soga]: new Station({
    name: "蘇我",
    reading: "そが",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.jr_east.uchibou,
      LINE_IDS.jr_east.sotobou,
    ],
  }),
  // #endregion 京葉線
  // #region 常磐線(JL)
  [STATION_IDS.jr_east.mikawashima]: new Station({
    name: "三河島",
    reading: "みかわしま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.jouban],
  }),
  [STATION_IDS.jr_east.minami_senju]: new Station({
    name: "南千住",
    reading: "みなみせんじゅ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.jouban],
  }),
  [STATION_IDS.jr_east.kita_senju]: new StationInfo(
    "北千住",
    [
      LINE_IDS.jr_east.jouban,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.toubu.isesaki,
      LINE_IDS.shutoken_shintoshi.tsukuba_express,
    ],
    "きたせんじゅ"
  ),
  [STATION_IDS.jr_east.ayase]: new StationInfo(
    "綾瀬",
    [LINE_IDS.jr_east.jouban, LINE_IDS.tokyo_metro.chiyoda],
    "あやせ"
  ),
  [STATION_IDS.jr_east.kameari]: new Station({
    name: "亀有",
    reading: "かめあり",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.jouban],
  }),
  [STATION_IDS.jr_east.kanamachi]: new Station({
    name: "金町",
    reading: "かなまち",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.jouban,
      new ExchangeInfo(
        LINE_IDS.keisei.kanamachi,
        STATION_IDS.keisei.keisei_kanamachi
      ),
    ],
  }),
  [STATION_IDS.jr_east.matsudo]: new StationInfo(
    "松戸",
    [LINE_IDS.jr_east.jouban, LINE_IDS.shin_keisei.shin_keisei],
    "まつど"
  ),
  [STATION_IDS.jr_east.kita_matsudo]: new Station({
    name: "北松戸",
    reading: "きたまつど",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.jouban],
  }),
  [STATION_IDS.jr_east.mahashi]: new StationInfo(
    "馬橋",
    [LINE_IDS.jr_east.jouban, LINE_IDS.ryutetsu.ryutetsu_ryuzan],
    "まはし"
  ),
  [STATION_IDS.jr_east.shin_matsudo]: new StationInfo(
    "新松戸",
    [LINE_IDS.jr_east.jouban, LINE_IDS.jr_east.musashino],
    "しんまつど"
  ),
  [STATION_IDS.jr_east.kita_kogane]: new Station({
    name: "北小金",
    reading: "きたこがね",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.jouban],
  }),
  [STATION_IDS.jr_east.minami_kashiwa]: new Station({
    name: "南柏",
    reading: "みなみかしわ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.jouban],
  }),
  [STATION_IDS.jr_east.kashiwa]: new StationInfo(
    "柏",
    [LINE_IDS.jr_east.jouban, LINE_IDS.toubu.urban_park_line],
    "かしわ"
  ),
  [STATION_IDS.jr_east.kita_kashiwa]: new StationInfo("北柏", [], "きたかしわ"),
  [STATION_IDS.jr_east.abiko]: new Station({
    name: "我孫子",
    reading: "あびこ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.jouban, LINE_IDS.jr_east.narita1],
  }),
  [STATION_IDS.jr_east.tennodai]: new StationInfo("天王台", [], "てんのうだい"),
  [STATION_IDS.jr_east.toride]: new StationInfo(
    "取手",
    [LINE_IDS.jr_east.jouban, LINE_IDS.kantou.jousou],
    "とりで"
  ),
  [STATION_IDS.jr_east.fujishiro]: new StationInfo("藤代", [], "ふじしろ"),
  [STATION_IDS.jr_east.ryugasakishi]: new StationInfo(
    "龍ヶ崎市",
    [LINE_IDS.jr_east.jouban, LINE_IDS.kantou.ryugasaki],
    "りゅうがさきし"
  ),
  [STATION_IDS.jr_east.ushiku]: new StationInfo("牛久", [], "うしく"),
  [STATION_IDS.jr_east.hitachino_ushiku]: new StationInfo(
    "ひたち野うしく",
    [],
    "ひたちのうしく"
  ),
  [STATION_IDS.jr_east.arakawaoki]: new StationInfo(
    "荒川沖",
    [],
    "あらかわおき"
  ),
  [STATION_IDS.jr_east.tuchiura]: new StationInfo("土浦", [], "つちうら"),
  [STATION_IDS.jr_east.kandachi]: new StationInfo("神立", [], "かんだち"),
  [STATION_IDS.jr_east.takahama]: new StationInfo("高浜", [], "たかはま"),
  [STATION_IDS.jr_east.ishioka]: new StationInfo("石岡", [], "いしおか"),
  [STATION_IDS.jr_east.hadori]: new StationInfo("羽取", [], "はどり"),
  [STATION_IDS.jr_east.iwama]: new StationInfo("岩間", [], "いわま"),
  [STATION_IDS.jr_east.tomobe]: new StationInfo(
    "友部",
    [LINE_IDS.jr_east.jouban, LINE_IDS.jr_east.mito],
    "ともべ"
  ),
  [STATION_IDS.jr_east.uchihara]: new StationInfo("内原", [], "うちはら"),
  [STATION_IDS.jr_east.akatsuka]: new StationInfo("赤塚", [], "あかつか"),
  [STATION_IDS.jr_east.kairakuen]: new StationInfo(
    "偕楽園",
    [],
    "あいらくえん"
  ),
  [STATION_IDS.jr_east.mito]: new StationInfo(
    "水戸",
    [
      LINE_IDS.jr_east.jouban,
      LINE_IDS.jr_east.mito,
      LINE_IDS.kashiwa_rinkai.daikashima,
    ],
    "みと"
  ),
  [STATION_IDS.jr_east.katsuta]: new StationInfo(
    "勝田",
    [LINE_IDS.jr_east.jouban, LINE_IDS.hitachinaka_kaihin.minato],
    "かつた"
  ),
  [STATION_IDS.jr_east.sawa]: new StationInfo("佐和", [], "さわ"),
  [STATION_IDS.jr_east.toukai]: new StationInfo("東海", [], "とうかい"),
  [STATION_IDS.jr_east.omika]: new StationInfo("大甕", [], "おおみか"),
  [STATION_IDS.jr_east.hitachi_taga]: new StationInfo(
    "常陸多賀",
    [],
    "ひたちたが"
  ),
  [STATION_IDS.jr_east.hitachi]: new StationInfo("常陸", [], "ひたち"),
  [STATION_IDS.jr_east.ogitsu]: new StationInfo("小木津", [], "おぎつ"),
  [STATION_IDS.jr_east.juo]: new StationInfo("十王", [], "じゅうおう"),
  [STATION_IDS.jr_east.takahagi]: new StationInfo("高萩", [], "たかはぎ"),
  [STATION_IDS.jr_east.minami_nakazato]: new StationInfo(
    "南中里",
    [],
    "みなみなかざと"
  ),
  [STATION_IDS.jr_east.isohara]: new StationInfo("磯原", [], "いそはら"),
  [STATION_IDS.jr_east.otsuko]: new StationInfo("大津港", [], "おおつこ"),
  [STATION_IDS.jr_east.nakoso]: new StationInfo("勿来", [], "なこそ"),
  [STATION_IDS.jr_east.duplicate.fukushima.ueda]: new StationInfo(
    "植田",
    [],
    "うえだ"
  ),
  [STATION_IDS.jr_east.izumi]: new StationInfo("泉", [], "いずみ"),
  [STATION_IDS.jr_east.yumoto]: new StationInfo("湯本", [], "ゆもと"),
  [STATION_IDS.jr_east.uchisato]: new StationInfo("内郷", [], "うちさと"),
  [STATION_IDS.jr_east.iwaki]: new StationInfo(
    "いわき",
    [LINE_IDS.jr_east.jouban, LINE_IDS.jr_east.banetsutou],
    "いわき"
  ),
  [STATION_IDS.jr_east.kusano]: new StationInfo("草野", [], "くさの"),
  [STATION_IDS.jr_east.yotsukura]: new StationInfo("四倉", [], "よつくら"),
  [STATION_IDS.jr_east.kunohama]: new StationInfo("久ノ浜", [], "くのはま"),
  [STATION_IDS.jr_east.suetsugi]: new StationInfo("末続", [], "すえつぎ"),
  [STATION_IDS.jr_east.hirono]: new StationInfo("広野", [], "ひろの"),
  [STATION_IDS.jr_east.j_village]: new StationInfo(
    "Jヴィレッジ",
    [],
    "じぇいむびれっじ"
  ),
  [STATION_IDS.jr_east.kido]: new StationInfo("木戸", [], "きど"),
  [STATION_IDS.jr_east.tatsuta]: new StationInfo("竜田", [], "たつた"),
  [STATION_IDS.jr_east.tomioka]: new StationInfo("富岡", [], "とみおか"),
  [STATION_IDS.jr_east.yorunomori]: new StationInfo("夜ノ森", [], "よるのもり"),
  [STATION_IDS.jr_east.ohno]: new StationInfo("大野", [], "おおの"),
  [STATION_IDS.jr_east.futaba]: new StationInfo("双葉", [], "ふたば"),
  [STATION_IDS.jr_east.namie]: new StationInfo("浪江", [], "なみえ"),
  [STATION_IDS.jr_east.momouchi]: new StationInfo("桃内", [], "ももうち"),
  [STATION_IDS.jr_east.odaka]: new StationInfo("小高", [], "おだか"),
  [STATION_IDS.jr_east.iwaki_ota]: new StationInfo(
    "磐城太田",
    [],
    "いわきおおた"
  ),
  [STATION_IDS.jr_east.haranocho]: new StationInfo(
    "原ノ町",
    [],
    "はらのちょう"
  ),
  [STATION_IDS.jr_east.kashima]: new StationInfo("鹿島", [], "かしま"),
  [STATION_IDS.jr_east.nittaki]: new StationInfo("日立木", [], "にったき"),
  [STATION_IDS.jr_east.soma]: new StationInfo("相馬", [], "そうま"),
  [STATION_IDS.jr_east.komagamine]: new StationInfo("駒ヶ嶺", [], "こまがみね"),
  [STATION_IDS.jr_east.shinchi]: new StationInfo("新地", [], "しんち"),
  [STATION_IDS.jr_east.sakamoto]: new StationInfo("坂元", [], "さかもと"),
  [STATION_IDS.jr_east.yamashita]: new StationInfo("山下", [], "やました"),
  [STATION_IDS.jr_east.hamayoshida]: new StationInfo(
    "浜吉田",
    [],
    "はまよしだ"
  ),
  [STATION_IDS.jr_east.watari]: new StationInfo("亘理", [], "わたり"),
  [STATION_IDS.jr_east.okuma]: new StationInfo("逢隈", [], "おおくま"),
  [STATION_IDS.jr_east.iwanuma]: new StationInfo(
    "岩沼",
    [LINE_IDS.jr_east.jouban, LINE_IDS.jr_east.touhoku_honsen],
    "いわぬま"
  ),
  // #endregion 常磐線
  // #region 武蔵野線(JM)
  [STATION_IDS.jr_east.minami_nagareyama]: new StationInfo(
    "南流山",
    [LINE_IDS.jr_east.musashino, LINE_IDS.shutoken_shintoshi.tsukuba_express],
    "みなみながれやま"
  ),
  [STATION_IDS.jr_east.fuchuhonmachi]: new StationInfo(
    "府中本町",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.nanbu],
    "ふちゅうほんまち"
  ),
  [STATION_IDS.jr_east.kitafuchu]: new StationInfo(
    "北府中",
    [],
    "きたふちゅう"
  ),
  [STATION_IDS.jr_east.nishikokubunji]: new StationInfo(
    "西国分寺",
    [],
    "にしこくぶんじ"
  ),
  [STATION_IDS.jr_east.higashi_tokorozawa]: new StationInfo(
    "東所沢",
    [],
    "ひがしところざわ"
  ),
  [STATION_IDS.jr_east.shinkohira]: new StationInfo("新小平", [], "しんこひら"),
  [STATION_IDS.jr_east.shinakitsu]: new StationInfo(
    "新秋津",
    [
      LINE_IDS.jr_east.musashino,
      new ExchangeInfo(LINE_IDS.seibu.ikebukuro, STATION_IDS.seibu.akitsu),
    ],
    "しんあきつ"
  ),
  [STATION_IDS.jr_east.shinza]: new StationInfo("新座", [], "しんざ"),
  [STATION_IDS.jr_east.higashi_tokorozawa]: new StationInfo(
    "東所沢",
    [],
    "ひがしところざわ"
  ),
  [STATION_IDS.jr_east.kita_asaka]: new StationInfo(
    "北朝霞",
    [
      LINE_IDS.jr_east.musashino,
      new ExchangeInfo(LINE_IDS.toubu.toujou, STATION_IDS.toubu.asakadai),
    ],
    "きたあさか"
  ),
  [STATION_IDS.jr_east.nishi_urawa]: new StationInfo(
    "西浦和",
    [],
    "にしうらわ"
  ),
  [STATION_IDS.jr_east.musashi_urawa]: new StationInfo(
    "武蔵浦和",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.saikyou],
    "むさしうらわ"
  ),
  [STATION_IDS.jr_east.minami_urawa]: new StationInfo(
    "南浦和",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keihin_touhoku],
    "みなみうらわ"
  ),
  [STATION_IDS.jr_east.higashi_urawa]: new StationInfo(
    "東浦和",
    [],
    "ひがしうらわ"
  ),
  [STATION_IDS.jr_east.higashi_kawaguchi]: new StationInfo(
    "東川口",
    [LINE_IDS.jr_east.musashino, LINE_IDS.saitama_kosoku.saitama_stadium],
    "ひがしかわぐち"
  ),
  [STATION_IDS.jr_east.minami_koshigaya]: new StationInfo(
    "南越谷",
    [LINE_IDS.jr_east.musashino, LINE_IDS.toubu.isesaki],
    "みなみこしがや"
  ),
  [STATION_IDS.jr_east.koshigaya_laketown]: new StationInfo(
    "越谷レイクタウン",
    []
  ),
  [STATION_IDS.jr_east.yoshikawa]: new StationInfo("吉川", [], "よしかわ"),
  [STATION_IDS.jr_east.yoshikawa_minami]: new StationInfo(
    "吉川美南",
    [],
    "よしかわみなみ"
  ),
  [STATION_IDS.jr_east.shin_sango]: new StationInfo(
    "新三郷",
    [],
    "しんさんごう"
  ),
  [STATION_IDS.jr_east.sango]: new StationInfo("三郷", [], "さんごう"),
  [STATION_IDS.jr_east.minami_nagareyama]: new StationInfo(
    "南流山",
    [LINE_IDS.jr_east.musashino, LINE_IDS.shutoken_shintoshi.tsukuba_express],
    "みなみながれやま"
  ),
  [STATION_IDS.jr_east.shin_matsudo]: new StationInfo(
    "新松戸",
    [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.jouban,
      new ExchangeInfo(
        LINE_IDS.ryutetsu.ryutetsu_ryuzan,
        STATION_IDS.ryutetsu.koya
      ),
      LINE_IDS.ryutetsu.ryutetsu_ryuzan,
    ],
    "しんまつど"
  ),
  [STATION_IDS.jr_east.shin_yahashira]: new StationInfo(
    "新八柱",
    [
      LINE_IDS.jr_east.musashino,
      new ExchangeInfo(
        LINE_IDS.shin_keisei.shin_keisei,
        STATION_IDS.shin_keisei.yabashira
      ),
    ],
    "しんやはしら"
  ),
  [STATION_IDS.jr_east.higashi_matsudo]: new StationInfo(
    "東松戸",
    [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.hokusou.hokusou,
      LINE_IDS.keisei.narita_kuko,
    ],
    "ひがしまつど"
  ),
  [STATION_IDS.jr_east.ichikawa_ono]: new StationInfo(
    "市川大野",
    [],
    "いちかわおおの"
  ),
  [STATION_IDS.jr_east.funabashi_houden]: new StationInfo(
    "船橋法典",
    [],
    "ふなばしほうてん"
  ),
  [STATION_IDS.jr_east.nishi_funabashi]: new StationInfo(
    "西船橋",
    [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.touyou_kousoku.touyou_kousoku,
    ],
    "にしふなばし"
  ),
  [STATION_IDS.jr_east.minami_funabashi]: new StationInfo(
    "南船橋",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "みなみふなばし"
  ),
  [STATION_IDS.jr_east.shin_narashino]: new StationInfo(
    "新習志野",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "しんならしの"
  ),
  [STATION_IDS.jr_east.makuhari_toyosuna]: new StationInfo(
    "幕張豊砂",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "まくはりとよすな"
  ),
  [STATION_IDS.jr_east.kaihin_makuhari]: new StationInfo(
    "海浜幕張",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "かいひんまくはり"
  ),
  [STATION_IDS.jr_east.ichikawa_shiohama]: new StationInfo(
    "市川塩浜",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "いちかわしおはま"
  ),
  [STATION_IDS.jr_east.shin_urayasu]: new StationInfo(
    "新浦安",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "しんうらやす"
  ),
  [STATION_IDS.jr_east.maihama]: new Station({
    name: "舞浜",
    reading: "まいはま",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.keiyou,
      new ExchangeInfo(
        LINE_IDS.maihama_resort.desney_resort_line,
        STATION_IDS.maihama_resort.resort_gateway
      ),
    ],
  }),
  [STATION_IDS.jr_east.kasai_rinkai_kouen]: new StationInfo(
    "葛西臨海公園",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "かさいりんかいこうえん"
  ),
  [STATION_IDS.jr_east.shiomi]: new StationInfo(
    "潮見",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "しおみ"
  ),
  [STATION_IDS.jr_east.ecchujima]: new StationInfo(
    "越中島",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.keiyou],
    "えっちゅうじま"
  ),
  // #endregion 武蔵野線
  // #region 南武線(JN)
  [STATION_IDS.jr_east.shitte]: new Station({
    name: "尻手",
    reading: "しって",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.nanbu, LINE_IDS.jr_east.nanbu_shisen],
  }),
  [STATION_IDS.jr_east.yakou]: new Station({
    name: "矢向",
    reading: "やこう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.kashimada]: new Station({
    name: "鹿島田",
    reading: "かしまだ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.hirama]: new Station({
    name: "平間",
    reading: "ひらま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.mukougawara]: new Station({
    name: "向河原",
    reading: "むこうがわら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.musashi_kosugi]: new Station({
    name: "武蔵小杉",
    reading: "むさしこすぎ",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.toukyu.touyoko,
      LINE_IDS.toukyu.meguro,
      LINE_IDS.jr_east.nanbu,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
  }),
  [STATION_IDS.jr_east.musashinakahara]: new Station({
    name: "武蔵中原",
    reading: "むさしなかはら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.musashishinjou]: new Station({
    name: "武蔵新城",
    reading: "むさししんじょう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.musashimizonokuchi]: new Station({
    name: "武蔵溝ノ口",
    reading: "むさしみぞのくち",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.jr_east.nanbu,
      new ExchangeInfo(LINE_IDS.toukyu.oimachi, STATION_IDS.toukyu.mizonokuchi),
      new ExchangeInfo(
        LINE_IDS.toukyu.denentoshi,
        STATION_IDS.jr_east.mizonokuchi
      ),
    ],
  }),
  [STATION_IDS.jr_east.tsudayama]: new Station({
    name: "津田山",
    reading: "つだやま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.kuji]: new Station({
    name: "久地",
    reading: "くじ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.syukugawara]: new Station({
    name: "宿河原",
    reading: "しゅくがわら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.noborito]: new Station({
    name: "登戸",
    reading: "のぼりと",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.nanbu, LINE_IDS.odakyu.odawara],
  }),
  [STATION_IDS.jr_east.nakanojima]: new Station({
    name: "中野島",
    reading: "なかのじま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.inadatsutsumi]: new Station({
    name: "稲田堤",
    reading: "いなだつつみ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.yanoguchi]: new Station({
    name: "矢野口",
    reading: "やのぐち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.inaginaganuma]: new Station({
    name: "稲城長沼",
    reading: "いなぎながぬま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.minamitama]: new Station({
    name: "南多摩",
    reading: "みなみたま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.bubaigawara]: new Station({
    name: "分倍河原",
    reading: "ぶばいがわら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.nanbu, LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.jr_east.nishifu]: new Station({
    name: "西府",
    reading: "にしふ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.yaho]: new Station({
    name: "谷保",
    reading: "やほ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.yakawa]: new Station({
    name: "矢川",
    reading: "やかわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.nishikunitachi]: new Station({
    name: "西国立",
    reading: "にしくにたち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.hamakawasaki]: new Station({
    name: "浜川崎",
    reading: "はまかわさき",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.nanbu_shisen, LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.odasakae]: new Station({
    name: "小田栄",
    reading: "おださかえ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.kawasaki_shinmachi]: new Station({
    name: "川崎新町",
    reading: "かわさきしんまち",
    prefecture: P.KANAGAWA,
  }),
  // #endregion 南武線
  // #region 総武本線(JO)
  [STATION_IDS.jr_east.shin_nihonbashi]: new Station({
    name: "新日本橋",
    reading: "しんにほんばし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.bakurocho]: new Station({
    name: "馬喰町",
    reading: "ばくろちょう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.nishi_chiba]: new Station({
    name: "西千葉",
    reading: "にしちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_chiba]: new Station({
    name: "東千葉",
    reading: "ひがしちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tsuga]: new Station({
    name: "都賀",
    reading: "つが",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.chiba_toshi_monorail.nigou],
  }),
  [STATION_IDS.jr_east.yotsukaidou]: new Station({
    name: "四街道",
    reading: "よつかいどう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.monoi]: new Station({
    name: "物井",
    reading: "ものい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sakura]: new Station({
    name: "佐倉",
    reading: "さくら",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.jr_east.narita2],
  }),
  [STATION_IDS.jr_east.minami_shisui]: new Station({
    name: "南酒々井",
    reading: "みなみしずい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.enokido]: new Station({
    name: "榎戸",
    reading: "えのきど",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yachimata]: new Station({
    name: "八街",
    reading: "やちまた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hyuga]: new Station({
    name: "日向",
    reading: "ひゅうが",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.narutou]: new Station({
    name: "成東",
    reading: "なるとう",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.jr_east.tougane],
  }),
  [STATION_IDS.jr_east.matsuo]: new Station({
    name: "松尾",
    reading: "まつお",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yokoshiba]: new Station({
    name: "横芝",
    reading: "よこしば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iigura]: new Station({
    name: "飯倉",
    reading: "いいぐら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.youkaichiba]: new Station({
    name: "八日市場",
    reading: "ようかいちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higata]: new Station({
    name: "干潟",
    reading: "ひがた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.asahi]: new Station({
    name: "旭",
    reading: "あさひ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iioka]: new Station({
    name: "飯岡",
    reading: "いいおか",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kurahashi]: new Station({
    name: "倉橋",
    reading: "くらはし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.saruda]: new Station({
    name: "猿田",
    reading: "さるだ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.matsugishi]: new Station({
    name: "松岸",
    reading: "まつぎし",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.jr_east.narita2],
  }),
  [STATION_IDS.jr_east.choushi]: new Station({
    name: "銚子",
    reading: "ちょうし",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.soubu_honsen,
      LINE_IDS.jr_east.narita2,
      LINE_IDS.choushi_denki.choushi_denki,
    ],
  }),
  // #endregion 総武本線
  // #region 八高線(JW)
  [STATION_IDS.jr_east.kita_hachiouji]: new Station({
    name: "北八王子",
    reading: "きたはちおうじ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.komiya]: new Station({
    name: "小宮",
    reading: "こみや",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.haijima]: new Station({
    name: "拝島",
    reading: "はいじま",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.hachiko,
      LINE_IDS.jr_east.oume,
      LINE_IDS.jr_east.itsukaichi,
      LINE_IDS.seibu.haijima,
    ],
  }),
  [STATION_IDS.jr_east.kumagawa]: new Station({
    name: "熊川",
    reading: "くまがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.higashi_akiru]: new Station({
    name: "東秋留",
    reading: "ひがしあきる",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.akigawa]: new Station({
    name: "秋川",
    reading: "あきがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_hikida]: new Station({
    name: "武蔵引田",
    reading: "むさしひきだ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_masuko]: new Station({
    name: "武蔵増戸",
    reading: "むさしますこ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_itsukaichi]: new Station({
    name: "武蔵五日市",
    reading: "むさしいつかいち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.higashi_fussa]: new Station({
    name: "東福生",
    reading: "ひがしふっさ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.hakonegasaki]: new Station({
    name: "箱根ヶ崎",
    reading: "はこねがさき",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kaneko]: new Station({
    name: "金子",
    reading: "かねこ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.higashi_hanno]: new Station({
    name: "東飯能",
    reading: "ひがしはんのう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.hachiko, LINE_IDS.seibu.chichibu],
  }),
  [STATION_IDS.jr_east.moro]: new Station({
    name: "諸",
    reading: "もろ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.ogose]: new Station({
    name: "越生",
    reading: "おごせ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.hachiko, LINE_IDS.toubu.ogose],
  }),
  [STATION_IDS.jr_east.myoukaku]: new Station({
    name: "明覚",
    reading: "みょうかく",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.ogawamachi]: new Station({
    name: "小川町",
    reading: "おがわまち",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.jr_east.hachiko, LINE_IDS.toubu.toujou],
  }),
  [STATION_IDS.jr_east.takezawa]: new Station({
    name: "竹沢",
    reading: "たけざわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.orihara]: new Station({
    name: "折原",
    reading: "おりはら",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.yorii]: new Station({
    name: "寄居",
    reading: "よりい",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.hachiko,
      LINE_IDS.toubu.toujou,
      LINE_IDS.chichibu.chichibu,
    ],
  }),
  [STATION_IDS.jr_east.youdo]: new Station({
    name: "用土",
    reading: "ようど",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.matsuhisa]: new Station({
    name: "松久",
    reading: "まつひさ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kodama]: new Station({
    name: "児玉",
    reading: "こだま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.tanshou]: new Station({
    name: "丹荘",
    reading: "たんしょう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.jr_east.gunma_fujioka]: new Station({
    name: "群馬藤岡",
    reading: "ぐんまふじおか",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.kita_fujioka]: new Station({
    name: "北藤岡",
    reading: "きたふじおか",
    prefecture: P.GUNMA,
  }),
  // #endregion 八高線
  // #region 湘南新宿ライン(JS)
  [STATION_IDS.jr_east.kumagaya]: new Station({
    name: "熊谷",
    reading: "くまがや",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.chichibu.chichibu,
    ],
  }),
  [STATION_IDS.jr_east.takasaki]: new Station({
    name: "高崎",
    reading: "たかさき",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.joushin.joushin,
    ],
  }),
  // #endregion 湘南新宿ライン
  // #region 両毛線
  [STATION_IDS.jr_east.maebashi]: new Station({
    name: "前橋",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "まえばし",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.maebashi_oshima]: new Station({
    name: "前橋大島",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "まえばしおおしま",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.komagata]: new Station({
    name: "駒形",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "こまがた",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.isezaki]: new Station({
    name: "伊勢崎",
    lines: [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.isesaki],
    reading: "いせざき",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.kunisada]: new Station({
    name: "国定",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "くにさだ",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.iwayado]: new Station({
    name: "岩宿",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "いわやど",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.kiryu]: new Station({
    name: "桐生",
    lines: [
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.watarase_keikoku.watarase_keikoku,
    ],
    reading: "きりゅう",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.omata]: new Station({
    name: "小俣",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "おまた",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.yamamae]: new Station({
    name: "山前",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "やままえ",
    prefecture: P.GUNMA,
  }),
  [STATION_IDS.jr_east.ashikaga]: new Station({
    name: "足利",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "あしかが",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.ashikaga_flower_park]: new Station({
    name: "あしかがフラワーパーク",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "あしかがふらわーぱーく",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.tomita]: new Station({
    name: "富田",
    lines: [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.sano],
    reading: "とみた",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.sano]: new Station({
    name: "佐野",
    lines: [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.sano],
    reading: "さの",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.iwahune]: new Station({
    name: "岩舟",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "いわふね",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.ohirashita]: new Station({
    name: "大平下",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "おおひらした",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.tochigi]: new Station({
    name: "栃木",
    lines: [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.nikkou],
    reading: "とちぎ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.omoigawa]: new Station({
    name: "思川",
    lines: [LINE_IDS.jr_east.ryoumou],
    reading: "おもいがわ",
    prefecture: P.TOCHIGI,
  }),
  // #endregion 両毛線
  // #region 水戸線
  [STATION_IDS.jr_east.odabayashi]: new Station({
    name: "小田林",
    reading: "おだばやし",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.yuki]: new Station({
    name: "結城",
    reading: "ゆうき",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.higashi_yuki]: new Station({
    name: "東結城",
    reading: "ひがしゆうき",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.kawashima]: new Station({
    name: "川島",
    reading: "かわしま",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.tamado]: new Station({
    name: "玉戸",
    reading: "たまど",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.shimodate]: new Station({
    name: "下館",
    reading: "しもだて",
    prefecture: P.IBARAKI,
    lines: [LINE_IDS.jr_east.mito, LINE_IDS.moka.moka, LINE_IDS.kantou.jousou],
  }),
  [STATION_IDS.jr_east.niibari]: new Station({
    name: "新治",
    reading: "にいばり",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.yamato]: new Station({
    name: "大和",
    reading: "やまと",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.iwase]: new Station({
    name: "岩瀬",
    reading: "いわせ",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.haguro]: new Station({
    name: "羽黒",
    reading: "はぐろ",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.fukuhara]: new Station({
    name: "福原",
    reading: "ふくはら",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.inada]: new Station({
    name: "稲田",
    reading: "いなだ",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.kasama]: new Station({
    name: "笠間",
    reading: "かさま",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.shishido]: new Station({
    name: "宍戸",
    reading: "ししど",
    prefecture: P.IBARAKI,
  }),
  // #endregion 水戸線
  // #region 外房線
  [STATION_IDS.jr_east.hon_chiba]: new Station({
    name: "本千葉",
    reading: "ほんちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kamatori]: new Station({
    name: "鎌取",
    reading: "かまとり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.honda]: new Station({
    name: "誉田",
    reading: "ほんだ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.toke]: new Station({
    name: "土気",
    reading: "とけ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.oami]: new Station({
    name: "大網",
    reading: "おおあみ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.sotobou, LINE_IDS.jr_east.tougane],
  }),
  [STATION_IDS.jr_east.nagata]: new Station({
    name: "永田",
    reading: "ながた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.honnou]: new Station({
    name: "本納",
    reading: "ほんのう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shin_mobara]: new Station({
    name: "新茂原",
    reading: "しんもばら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.mobara]: new Station({
    name: "茂原",
    reading: "もばら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yatsumi]: new Station({
    name: "八積",
    reading: "やつみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_ichinomiya]: new Station({
    name: "上総一ノ宮",
    reading: "かずさいちのみや",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.torami]: new Station({
    name: "東浪見",
    reading: "とらみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.taitou]: new Station({
    name: "太東",
    reading: "たいとう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.choujamachi]: new Station({
    name: "長者町",
    reading: "ちょうじゃまち",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.mikado]: new Station({
    name: "三門",
    reading: "みかど",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.ohara]: new Station({
    name: "大原",
    reading: "おおはら",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.sotobou, LINE_IDS.izumi.izumi],
  }),
  [STATION_IDS.jr_east.namihana]: new Station({
    name: "浪花",
    reading: "なみはな",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.onjuku]: new Station({
    name: "御宿",
    reading: "おんじゅく",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.katsuura]: new Station({
    name: "勝浦",
    reading: "かつうら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.ubara]: new Station({
    name: "鵜原",
    reading: "うばら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_okitsu]: new Station({
    name: "上総興津",
    reading: "かずさおきつ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.namegawa_island]: new Station({
    name: "行川アイランド",
    reading: "なめがわあいらんど",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_kominato]: new Station({
    name: "安房小湊",
    reading: "あわこみなと",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_amatsu]: new Station({
    name: "安房天津",
    reading: "あわあまつ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_kamogawa]: new Station({
    name: "安房鴨川",
    reading: "あわかもがわ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.sotobou, LINE_IDS.jr_east.uchibou],
  }),
  // #endregion 外房線
  // #region 内房線
  [STATION_IDS.jr_east.hamano]: new Station({
    name: "浜野",
    reading: "はまの",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yawatajuku]: new Station({
    name: "八幡宿",
    reading: "やわたじゅく",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.goi]: new Station({
    name: "五井",
    reading: "ごい",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.uchibou, LINE_IDS.kominato.kominato],
  }),
  [STATION_IDS.jr_east.anegasaki]: new Station({
    name: "姉ヶ崎",
    reading: "あねがさき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.nagaura]: new Station({
    name: "長浦",
    reading: "ながうら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sodegaura]: new Station({
    name: "袖ケ浦",
    reading: "そでがうら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iwane]: new Station({
    name: "巌根",
    reading: "いわね",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kisaradu]: new Station({
    name: "木更津",
    reading: "きさらづ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.uchibou, LINE_IDS.jr_east.kururi],
  }),
  [STATION_IDS.jr_east.kimitsu]: new Station({
    name: "君津",
    reading: "きみつ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.aohori]: new Station({
    name: "青堀",
    reading: "あおほり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.onuki]: new Station({
    name: "大貫",
    reading: "おおぬき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sanukimachi]: new Station({
    name: "佐貫町",
    reading: "さぬきまち",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_minato]: new Station({
    name: "上総湊",
    reading: "かずさみなと",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.takeoka]: new Station({
    name: "竹岡",
    reading: "たけおか",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hamakanaya]: new Station({
    name: "浜金谷",
    reading: "はまかなや",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hota]: new Station({
    name: "保田",
    reading: "ほた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_katsuyama]: new Station({
    name: "安房勝山",
    reading: "あわかつやま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iwai]: new Station({
    name: "岩井",
    reading: "いわい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tomiura]: new Station({
    name: "富浦",
    reading: "とみうら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.nakofunakata]: new Station({
    name: "那古船形",
    reading: "なこふなかた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kokonoe]: new Station({
    name: "九重",
    reading: "ここのえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.chikura]: new Station({
    name: "千倉",
    reading: "ちくら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.chitose]: new Station({
    name: "千歳",
    reading: "ちとせ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.minamihara]: new Station({
    name: "南原",
    reading: "みなみはら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.wadaura]: new Station({
    name: "和田浦",
    reading: "わだうら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.emi]: new Station({
    name: "江見",
    reading: "えみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.futomi]: new Station({
    name: "太海",
    reading: "ふとみ",
    prefecture: P.CHIBA,
  }),
  // #endregion 内房線
  // #region 東金線
  [STATION_IDS.jr_east.fukutawara]: new Station({
    name: "福俵",
    reading: "ふくたわら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tougane]: new Station({
    name: "東金",
    reading: "とうがね",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.gumyou]: new Station({
    name: "求名",
    reading: "ぐみょう",
    prefecture: P.CHIBA,
  }),
  // #endregion 東金線
  // #region 久留里線
  [STATION_IDS.jr_east.gion]: new Station({
    name: "祇園",
    reading: "ぎおん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_kiyokawa]: new Station({
    name: "上総清川",
    reading: "かずさきよかわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_kiyokawa]: new Station({
    name: "東清川",
    reading: "ひがしきよかわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yokota]: new Station({
    name: "横田",
    reading: "よこた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_yokota]: new Station({
    name: "東横田",
    reading: "ひがしよこた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.makuta]: new Station({
    name: "馬来田",
    reading: "まくた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimogoori]: new Station({
    name: "下郡",
    reading: "しもごおり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.obitsu]: new Station({
    name: "小櫃",
    reading: "おびつ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tawarada]: new Station({
    name: "俵田",
    reading: "たわらだ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kururi]: new Station({
    name: "久留里",
    reading: "くるり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hirayama]: new Station({
    name: "平山",
    reading: "ひらやま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_matsuoka]: new Station({
    name: "上総松丘",
    reading: "かずさまつおか",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_kameyama]: new Station({
    name: "上総亀山",
    reading: "かずさかめやま",
    prefecture: P.CHIBA,
  }),
  // #endregion 久留里線
  // #region 成田線
  [STATION_IDS.jr_east.higashi_abiko]: new Station({
    name: "東我孫子",
    reading: "ひがしあびこ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kohoku]: new Station({
    name: "湖北",
    reading: "こほく",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.araki]: new Station({
    name: "新木",
    reading: "あらき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.fusa]: new Station({
    name: "布佐",
    reading: "ふさ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kioroshi]: new Station({
    name: "木下",
    reading: "きおろし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kobayashi]: new Station({
    name: "小林",
    reading: "こばやし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.ajiki]: new Station({
    name: "安食",
    reading: "あじき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_manzaki]: new Station({
    name: "下総松崎",
    reading: "しもうさまんざき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.narita]: new Station({
    name: "成田",
    reading: "なりた",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.narita1,
      LINE_IDS.jr_east.narita2,
      LINE_IDS.jr_east.narita3,
    ],
  }),
  [STATION_IDS.jr_east.shisui]: new Station({
    name: "酒々井",
    reading: "しずい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kuzumi]: new Station({
    name: "久住",
    reading: "くずみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.namegawa]: new Station({
    name: "滑河",
    reading: "なめがわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_kouzaki]: new Station({
    name: "下総神崎",
    reading: "しもうさこうざき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.oto]: new Station({
    name: "大戸",
    reading: "おおと",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sawara]: new Station({
    name: "佐原",
    reading: "さわら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.suigou]: new Station({
    name: "水郷",
    reading: "すいごう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.omigawa]: new Station({
    name: "小見川",
    reading: "おみがわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sasagawa]: new Station({
    name: "笹川",
    reading: "ささがわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_toyohasato]: new Station({
    name: "下総豊富",
    reading: "しもうさとよはさと",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_tachibana]: new Station({
    name: "下総橘",
    reading: "しもうさたちばな",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shishiba]: new Station({
    name: "椎柴",
    reading: "しいしば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.jr_east.katori]: new Station({
    name: "香取",
    reading: "かとり",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.jr_east.narita2, LINE_IDS.jr_east.kashima],
  }),
  // #endregion 成田線
  // #region 鹿島線
  [STATION_IDS.jr_east.kashima_jingu]: new Station({
    name: "鹿島神宮",
    reading: "かしまじんぐう",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.kashima_soccer_stadium]: new Station({
    name: "鹿島サッカースタジアム",
    reading: "かしまさっかーすたじあむ",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.junikyou]: new Station({
    name: "十二橋",
    reading: "じゅうにきょう",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.itako]: new Station({
    name: "潮来",
    reading: "いたこ",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.nobukata]: new Station({
    name: "延方",
    reading: "のぶかた",
    prefecture: P.IBARAKI,
  }),
  // #endregion 鹿島線
  // #region 上越線
  [STATION_IDS.jr_east.shin_maebashi]: new Station({
    name: "新前橋",
    reading: "しんまえばし",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.ryoumou],
  }),
  [STATION_IDS.jr_east.gunmasouja]: new Station({
    name: "群馬総社",
    reading: "ぐんまそうじゃ",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.yagihara]: new Station({
    name: "八木原",
    reading: "やぎはら",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.shibukawa]: new Station({
    name: "渋川",
    reading: "しぶかわ",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.agatsuma],
  }),
  [STATION_IDS.jr_east.shikishima]: new Station({
    name: "敷島",
    reading: "しきしま",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.tsukuda]: new Station({
    name: "津久田",
    reading: "つくだ",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.iwamoto]: new Station({
    name: "岩本",
    reading: "いわもと",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.numata]: new Station({
    name: "沼田",
    reading: "ぬまた",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.gokan]: new Station({
    name: "後閑",
    reading: "ごかん",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.kamimoku]: new Station({
    name: "上牧",
    reading: "かみもく",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.minakami]: new Station({
    name: "水上",
    reading: "みなかみ",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.yubiso]: new Station({
    name: "湯檜曽",
    reading: "ゆびそ",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.doai]: new Station({
    name: "土合",
    reading: "どあい",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.tsuchitaru]: new Station({
    name: "土樽",
    reading: "つちたる",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.echigo_nakazato]: new Station({
    name: "越後中里",
    reading: "えちごなかざと",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.iwappara_skijoumae]: new Station({
    name: "岩原スキー場前",
    reading: "いわっぱらスキーじょうまえ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.ishiuchi]: new Station({
    name: "石打",
    reading: "いしうち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.oosawa]: new Station({
    name: "大沢",
    reading: "おおさわ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.jouetsu_kokusai_skijoumae]: new Station({
    name: "上越国際スキー場前",
    reading: "じょうえつこくさいスキーじょうまえ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.shiozawa]: new Station({
    name: "塩沢",
    reading: "しおざわ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.muikamachi]: new Station({
    name: "六日町",
    reading: "むいかまち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.hokuetsu_kyuko.hokuhoku],
  }),
  [STATION_IDS.jr_east.itsukamachi]: new Station({
    name: "五日町",
    reading: "いつかまち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.yairo]: new Station({
    name: "八色",
    reading: "やいろ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.koide]: new Station({
    name: "小出",
    reading: "こいで",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.tadami],
  }),
  [STATION_IDS.jr_east.echigo_horinouchi]: new Station({
    name: "越後堀之内",
    reading: "えちごほりのうち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.kita_horinouchi]: new Station({
    name: "北堀之内",
    reading: "きたほりのうち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.echigo_kawaguchi]: new Station({
    name: "越後川口",
    reading: "えちごかわぐち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.iiyama],
  }),
  [STATION_IDS.jr_east.odiya]: new Station({
    name: "小須戸",
    reading: "おぢや",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.echigo_takiya]: new Station({
    name: "越後滝谷",
    reading: "えちごたきや",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu],
  }),
  [STATION_IDS.jr_east.miyauchi]: new Station({
    name: "宮内",
    reading: "みやうち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.shinetsu_honsen],
  }),
  // #endregion 上越線
  // #region 東北本線
  [STATION_IDS.jr_east.natori]: new Station({
    name: "名取",
    reading: "なとり",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.sendai_kuko.access,
    ],
  }),
  [STATION_IDS.jr_east.minami_sendai]: new Station({
    name: "南仙台",
    reading: "みなみせんだい",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.sendai_kuko.access,
    ],
  }),
  [STATION_IDS.jr_east.nagamachi]: new Station({
    name: "長町",
    reading: "ながまち",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.sendai_kuko.access,
      LINE_IDS.sendai_subway.nanboku,
    ],
  }),
  [STATION_IDS.jr_east.takaku]: new Station({
    name: "高久",
    reading: "たかく",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kurotawara]: new Station({
    name: "黒田原",
    reading: "くろたわら",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.toyohara]: new Station({
    name: "豊原",
    reading: "とよはら",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.shirasaka]: new Station({
    name: "白坂",
    reading: "しらさか",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.shirakawa]: new Station({
    name: "白河",
    reading: "しらかわ",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kutano]: new Station({
    name: "久田野",
    reading: "くたの",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.izumizaki]: new Station({
    name: "泉崎",
    reading: "いずみざき",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.yabuki]: new Station({
    name: "矢吹",
    reading: "やぶき",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kagamiishi]: new Station({
    name: "鏡石",
    reading: "かがみいし",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.sukagawa]: new Station({
    name: "須賀川",
    reading: "すかがわ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.asakanagamori]: new Station({
    name: "安積永盛",
    reading: "あさかながもり",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.suigun],
  }),
  [STATION_IDS.jr_east.hiwada]: new Station({
    name: "日和田",
    reading: "ひわだ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.gohyakugawa]: new Station({
    name: "五百川",
    reading: "ごひゃくがわ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.motomiya]: new Station({
    name: "本宮",
    reading: "もとみや",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.sugita]: new Station({
    name: "杉田",
    reading: "すぎた",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.nihonmatsu]: new Station({
    name: "二本松",
    reading: "にほんまつ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.adachi]: new Station({
    name: "安達",
    reading: "あだち",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.matsukawa]: new Station({
    name: "松川",
    reading: "まつかわ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kanayagawa]: new Station({
    name: "金谷川",
    reading: "かなやがわ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.minami_fukushima]: new Station({
    name: "南福島",
    reading: "みなみふくしま",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.higashi_fukushima]: new Station({
    name: "東福島",
    reading: "ひがしふくしま",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.date]: new Station({
    name: "伊達",
    reading: "だて",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kori]: new Station({
    name: "小折",
    reading: "こおり",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.fujita]: new Station({
    name: "藤田",
    reading: "ふじた",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kaida]: new Station({
    name: "貝田",
    reading: "かいだ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kosugou]: new Station({
    name: "越河",
    reading: "こすごう",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.shiraishi]: new Station({
    name: "白石",
    reading: "しろいし",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.higashi_shiraishi]: new Station({
    name: "東白石",
    reading: "ひがししろいし",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kita_shirakawa]: new Station({
    name: "北白川",
    reading: "きたしらかわ",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.ohgawara]: new Station({
    name: "大河原",
    reading: "おおがわら",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.funaoka]: new Station({
    name: "船岡",
    reading: "ふなおか",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.tsukinoki]: new Station({
    name: "槻木",
    reading: "つきのき",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.tatekoshi]: new Station({
    name: "館腰",
    reading: "たてこし",
    prefecture: P.FUKUSHIMA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.taishidou]: new Station({
    name: "太子堂",
    reading: "たいしどう",
    prefecture: P.FUKUSHIMA,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
  }),
  [STATION_IDS.jr_east.higashi_sendai]: new Station({
    name: "東仙台",
    reading: "ひがしせんだい",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.rifu,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
  }),
  [STATION_IDS.jr_east.iwakiri]: new Station({
    name: "岩切",
    reading: "いわきり",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.rifu,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
  }),
  [STATION_IDS.jr_east.rikuzensannou]: new Station({
    name: "陸前山王",
    reading: "りくぜんさんのう",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
  }),
  [STATION_IDS.jr_east.kokufutagajou]: new Station({
    name: "国府多賀城",
    reading: "こくふたがじょう",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
  }),
  [STATION_IDS.jr_east.shiogama]: new Station({
    name: "塩釜",
    reading: "しおがま",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
  }),
  [STATION_IDS.jr_east.matsushima]: new Station({
    name: "松島",
    reading: "まつしま",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.atago]: new Station({
    name: "愛宕",
    reading: "あたご",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.shinainuma]: new Station({
    name: "品井沼",
    reading: "しないぬま",
    prefecture: P.AKITA,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kashimadai]: new Station({
    name: "鹿島台",
    reading: "かしまだい",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.matsuyamamachi]: new Station({
    name: "松山町",
    reading: "まつやままち",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.kogota]: new Station({
    name: "小牛田",
    reading: "こごた",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.kesennuma,
      LINE_IDS.jr_east.ishimaki,
      LINE_IDS.jr_east.rikuutou,
    ],
  }),
  [STATION_IDS.jr_east.tajiri]: new Station({
    name: "田尻",
    reading: "たじり",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.semine]: new Station({
    name: "瀬峰",
    reading: "せみね",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.umegasawa]: new Station({
    name: "梅ヶ沢",
    reading: "うめがさわ",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.nitta]: new Station({
    name: "新田",
    reading: "にった",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.ishikoshi]: new Station({
    name: "石越",
    reading: "いしこし",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.aburajima]: new Station({
    name: "油島",
    reading: "あぶらじま",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.hanaizumi]: new Station({
    name: "花泉",
    reading: "はないずみ",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    prefecture: P.MIYAGI,
  }),
  [STATION_IDS.jr_east.shimizuhara]: new Station({
    name: "清水原",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    prefecture: P.MIYAGI,
    reading: "しみずはら",
  }),
  [STATION_IDS.jr_east.arikabe]: new Station({
    name: "有壁",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "ありかべ",
    prefecture: P.MIYAGI,
  }),
  [STATION_IDS.jr_east.yamanome]: new Station({
    name: "山ノ目",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "やまのめ",
    prefecture: P.MIYAGI,
  }),
  [STATION_IDS.jr_east.hiraizumi]: new Station({
    name: "平泉",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "ひらいずみ",
    prefecture: P.IWATE,
  }),
  [STATION_IDS.jr_east.maezawa]: new Station({
    name: "前沢",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "まえざわ",
    prefecture: P.IWATE,
  }),
  [STATION_IDS.jr_east.rikuchuorii]: new Station({
    name: "陸中折居",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "りくちゅうおりい",
    prefecture: P.IWATE,
  }),
  [STATION_IDS.jr_east.mizusawa]: new Station({
    name: "水沢",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "みずさわ",
    prefecture: P.IWATE,
  }),
  [STATION_IDS.jr_east.kanegasaki]: new Station({
    name: "金ヶ崎",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "かねがさき",
    prefecture: P.IWATE,
  }),
  [STATION_IDS.jr_east.rokuhara]: new Station({
    name: "六原",
    lines: [LINE_IDS.jr_east.touhoku_honsen],
    reading: "ろくはら",
    prefecture: P.MIYAGI,
  }),
  [STATION_IDS.jr_east.murasakino]: new Station({
    name: "村崎野",
    reading: "むらさきの",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.hanamaki]: new Station({
    name: "花巻",
    reading: "はなまき",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.hanamaki_kuko]: new Station({
    name: "花巻空港",
    reading: "はなまきくうこう",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.ishidoriya]: new Station({
    name: "石取",
    reading: "いしどりや",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.hidume]: new Station({
    name: "日詰",
    reading: "ひづめ",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.shiwa_chuou]: new Station({
    name: "志波中央",
    reading: "しわちゅうおう",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.yahaba]: new Station({
    name: "矢幅",
    reading: "やはば",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.iwate_iioka]: new Station({
    name: "岩手飯岡",
    reading: "いわていいおか",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  [STATION_IDS.jr_east.senbokumachi]: new Station({
    name: "仙北町",
    reading: "せんぼくまち",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.touhoku_honsen],
  }),
  //#endregion 東北本線
  // #region 日光線
  [STATION_IDS.jr_east.tsuruta]: new Station({
    name: "鶴田",
    reading: "つるた",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.kanuma]: new Station({
    name: "鹿沼",
    reading: "かぬま",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.fubasami]: new Station({
    name: "文挟",
    reading: "ふばさみ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.shimotsuke_oosawa]: new Station({
    name: "下野大沢",
    reading: "しもつけおおさわ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.imaichi]: new Station({
    name: "今市",
    reading: "いまいち",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.jr_east.nikkou]: new Station({
    name: "日光",
    reading: "にっこう",
    prefecture: P.TOCHIGI,
  }),
  // #endregion 日光線

  // #region 山形新幹線
  [STATION_IDS.jr_east.yonezawa]: new Station({
    name: "米沢",
    reading: "よねざわ",
    prefecture: P.YAMAGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.jr_east.yonesaka,
    ],
  }),
  [STATION_IDS.jr_east.takahata]: new Station({
    name: "高畠",
    reading: "たかはた",
    prefecture: P.YAMAGATA,
    lines: [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
  }),
  [STATION_IDS.jr_east.akayu]: new Station({
    name: "赤湯",
    reading: "あかゆ",
    prefecture: P.YAMAGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.yamagata.flower_nagai,
    ],
  }),
  [STATION_IDS.jr_east.kaminoyama_onsen]: new Station({
    name: "かみのやま温泉",
    reading: "かみのやまおんせん",
    prefecture: P.YAMAGATA,
    lines: [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
  }),
  [STATION_IDS.jr_east.yamagata]: new Station({
    name: "山形",
    reading: "やまがた",
    prefecture: P.YAMAGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.jr_east.senzan,
      LINE_IDS.jr_east.aterazawa,
    ],
  }),
  [STATION_IDS.jr_east.tendo]: new Station({
    name: "天童",
    reading: "てんどう",
    prefecture: P.YAMAGATA,
    lines: [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
  }),
  [STATION_IDS.jr_east.sakuranbo_higashine]: new Station({
    name: "さくらんぼ東根",
    reading: "さくらんぼひがしね",
    prefecture: P.YAMAGATA,
    lines: [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
  }),
  [STATION_IDS.jr_east.murayama]: new Station({
    name: "村山",
    reading: "むらやま",
    prefecture: P.YAMAGATA,
    lines: [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
  }),
  [STATION_IDS.jr_east.oishida]: new Station({
    name: "大石田",
    reading: "おおいしだ",
    prefecture: P.YAMAGATA,
    lines: [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
  }),
  [STATION_IDS.jr_east.shinjo]: new Station({
    name: "新庄",
    reading: "しんじょう",
    prefecture: P.YAMAGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.jr_east.rikuutou,
      LINE_IDS.jr_east.rikuusei,
      LINE_IDS.jr_east.ouu_honsen,
    ],
  }),
  // #endregion 山形新幹線
  // #region 秋田新幹線
  [STATION_IDS.jr_east.shizukuishi]: new Station({
    name: "雫石",
    reading: "しずくいし",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.shinkansen.akita, LINE_IDS.jr_east.tazawako],
  }),
  [STATION_IDS.jr_east.tazawako]: new Station({
    name: "田沢湖",
    reading: "たざわこ",
    prefecture: P.AKITA,
    lines: [LINE_IDS.jr_east.shinkansen.akita, LINE_IDS.jr_east.tazawako],
  }),
  [STATION_IDS.jr_east.kakunodate]: new Station({
    name: "角館",
    reading: "かくのだて",
    prefecture: P.AKITA,
    lines: [
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.tazawako,
      LINE_IDS.akita_nairiku_jukan.akita_nairiku,
    ],
  }),
  [STATION_IDS.jr_east.omagari]: new Station({
    name: "大曲",
    reading: "おおまがり",
    prefecture: P.AKITA,
    lines: [
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.tazawako,
    ],
  }),
  [STATION_IDS.jr_east.akita]: new Station({
    name: "秋田",
    reading: "秋田",
    prefecture: P.AKITA,
    lines: [
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.uetsu_honsen,
      LINE_IDS.jr_east.oga,
    ],
  }),
  // #endregion 秋田新幹線
  // #region 御殿場線
  [STATION_IDS.jr_east.shimosoga]: new Station({
    name: "下曾我",
    reading: "しもそが",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.kami_ooi]: new Station({
    name: "神原",
    reading: "かんばら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.sagami_kaneko]: new Station({
    name: "相模金子",
    reading: "さがみかねこ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.matsuda]: new Station({
    name: "松田",
    reading: "まつだ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_toukai.gotenba, LINE_IDS.odakyu.odawara],
  }),
  [STATION_IDS.jr_east.yamakita]: new Station({
    name: "山北",
    reading: "やまきた",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.higashi_yamakita]: new Station({
    name: "東山北",
    reading: "ひがしやまきた",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.yaga]: new Station({
    name: "谷峨",
    reading: "やが",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_east.hirooka]: new Station({
    name: "広丘",
    reading: "ひろおか",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.murai]: new Station({
    name: "村井",
    reading: "むらい",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.hirata]: new Station({
    name: "平田",
    reading: "ひらた",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.minami_matsumoto]: new Station({
    name: "南松本",
    reading: "みなみまつもと",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.matsumoto]: new Station({
    name: "松本",
    reading: "まつもと",
    prefecture: P.NAGANO,
    lines: [
      LINE_IDS.jr_east.shinonoi,
      LINE_IDS.jr_east.ohito,
      LINE_IDS.matsumoto.kamikouchi,
    ],
  }),
  [STATION_IDS.jr_east.tazawa]: new Station({
    name: "田沢",
    reading: "たざわ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.akashina]: new Station({
    name: "赤科",
    reading: "あかしな",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.nishijou]: new Station({
    name: "西条",
    reading: "にしじょう",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.sakakita]: new Station({
    name: "坂北",
    reading: "さかきた",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.hijirikougen]: new Station({
    name: "聖高原",
    reading: "ひじりこうげん",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.kamuriki]: new Station({
    name: "冠着",
    reading: "かむりき",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.obasute]: new Station({
    name: "姨捨",
    reading: "おばすて",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.inariyama]: new Station({
    name: "稲荷山",
    reading: "いなりやま",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi],
  }),
  [STATION_IDS.jr_east.shinonoi]: new Station({
    name: "篠ノ井",
    reading: "しののい",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinonoi, LINE_IDS.jr_east.shinetsu_honsen],
  }),
  // #endregion 御殿場線
  // #region 大糸線
  [STATION_IDS.jr_east.kita_matsumoto]: new Station({
    name: "北松本",
    reading: "きたまつもと",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shimauchi]: new Station({
    name: "島内",
    reading: "しまうち",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shima_takamatsu]: new Station({
    name: "島高松",
    reading: "しまたかまつ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.azusabashi]: new Station({
    name: "梓川",
    reading: "あずさばし",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.hitoichiba]: new Station({
    name: "一日市場",
    reading: "ひといちば",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.nakagaya]: new Station({
    name: "中萱",
    reading: "なかがや",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.minami_toyoshina]: new Station({
    name: "南豊科",
    reading: "みなみとよしな",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.toyoshina]: new Station({
    name: "豊科",
    reading: "とよしな",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.hakuyachou]: new Station({
    name: "白谷町",
    reading: "はくやちょう",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.hotaka]: new Station({
    name: "穂高",
    reading: "ほたか",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.ariake]: new Station({
    name: "有明",
    reading: "ありあけ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.azumi_oiwake]: new Station({
    name: "安曇追分",
    reading: "あずみおいわけ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.hosono]: new Station({
    name: "細野",
    reading: "ほその",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.kita_hosono]: new Station({
    name: "北細野",
    reading: "きたほその",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shinano_matsukawa]: new Station({
    name: "信濃松川",
    reading: "しなのまつかわ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.azumi_kutsukake]: new Station({
    name: "安曇沓掛",
    reading: "あずみくつかけ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shinano_tokiwa]: new Station({
    name: "信濃常盤",
    reading: "しなのときわ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.minami_ohmachi]: new Station({
    name: "南大町",
    reading: "みなみおおまち",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shinano_ohmachi]: new Station({
    name: "信濃大町",
    reading: "しなのおおまち",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.kita_ohmachi]: new Station({
    name: "北大町",
    reading: "きたおおまち",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shinano_kizaki]: new Station({
    name: "信濃木崎",
    reading: "しなのきざき",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.inao]: new Station({
    name: "稲生",
    reading: "いなお",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.uminokuchi]: new Station({
    name: "海ノ口",
    reading: "うみのくち",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.yanaba]: new Station({
    name: "柳場",
    reading: "やなば",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.minami_kamishiro]: new Station({
    name: "南神代",
    reading: "みなみかみしろ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.kamishiro]: new Station({
    name: "神代",
    reading: "かみしろ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.iimori]: new Station({
    name: "飯盛",
    reading: "いいもり",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.hakuba]: new Station({
    name: "白馬",
    reading: "はくば",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.shinano_moriue]: new Station({
    name: "信濃森上",
    reading: "しなのもりうえ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.hakuba_ohike]: new Station({
    name: "白馬大池",
    reading: "はくばおおいけ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.chikuni]: new Station({
    name: "千国",
    reading: "ちくに",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito],
  }),
  [STATION_IDS.jr_east.minami_otari]: new Station({
    name: "南小谷",
    reading: "みなみおたり",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.ohito, LINE_IDS.jr_west.ohito],
  }),
  // #endregion 大糸線
  // #region 信越本線
  [STATION_IDS.jr_east.kita_nagaoka]: new Station({
    name: "北長岡",
    reading: "きたながおか",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.oshikiri]: new Station({
    name: "押切",
    reading: "おしきり",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.mitsuke]: new Station({
    name: "見附",
    reading: "みつけ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.obiori]: new Station({
    name: "帯織",
    reading: "おびおり",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.toukouji]: new Station({
    name: "東光寺",
    reading: "とうこうじ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.sanjou]: new Station({
    name: "三条",
    reading: "さんじょう",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen, LINE_IDS.jr_east.yahiko],
  }),
  [STATION_IDS.jr_east.honai]: new Station({
    name: "保内",
    reading: "ほない",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.hanyuda]: new Station({
    name: "羽入田",
    reading: "はにゅうだ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.kamo]: new Station({
    name: "加茂",
    reading: "かも",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.tagami]: new Station({
    name: "田上",
    reading: "たがみ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.yashiroda]: new Station({
    name: "屋代",
    reading: "やしろだ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.furutsu]: new Station({
    name: "古津",
    reading: "ふるつ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.niitsu]: new Station({
    name: "新津",
    reading: "にいつ",
    prefecture: P.NIIGATA,
    lines: [
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.jr_east.banetsusai,
      LINE_IDS.jr_east.uetsu_honsen,
    ],
  }),
  [STATION_IDS.jr_east.satsukino]: new Station({
    name: "さつき野",
    reading: "さつきの",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.ogikawa]: new Station({
    name: "荻川",
    reading: "おぎかわ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.kameda]: new Station({
    name: "亀田",
    reading: "かめだ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  [STATION_IDS.jr_east.echigo_ishiyama]: new Station({
    name: "越後石山",
    reading: "えちごいしやま",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinetsu_honsen],
  }),
  // #endregion 信越本線

  // #region 上越新幹線
  [STATION_IDS.jr_east.honjo_waseda]: new Station({
    name: "本庄早稲田",
    reading: "ほんじょうわせだ",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.shinkansen.hokuriku,
    ],
  }),
  [STATION_IDS.jr_east.joumoukougen]: new Station({
    name: "上毛高原",
    reading: "じょうもうこうげん",
    prefecture: P.GUNMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.shinkansen.hokuriku,
    ],
  }),
  [STATION_IDS.jr_east.echigo_yuzawa]: new Station({
    name: "越後湯沢",
    reading: "えちごゆざわ",
    prefecture: P.NIIGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.hokuetsu_kyuko.hokuhoku,
    ],
  }),
  [STATION_IDS.jr_east.gala_yuzawa]: new Station({
    name: "ガーラ湯沢",
    reading: "がーらゆざわ",
    prefecture: P.NIIGATA,
  }),
  [STATION_IDS.jr_east.urasa]: new Station({
    name: "浦佐",
    reading: "うらさ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.shinkansen.jouetsu],
  }),
  [STATION_IDS.jr_east.nagaoka]: new Station({
    name: "長岡",
    reading: "ながおか",
    prefecture: P.NIIGATA,
    lines: [
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.jr_east.shinkansen.jouetsu,
    ],
  }),
  [STATION_IDS.jr_east.tsubame_sanjo]: new Station({
    name: "燕三条",
    reading: "つばめさんじょう",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.yahiko, LINE_IDS.jr_east.shinkansen.jouetsu],
  }),
  [STATION_IDS.jr_east.niigata]: new Station({
    name: "新潟",
    reading: "にいがた",
    prefecture: P.NIIGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.hakushin,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.jr_east.echigo,
    ],
  }),
  // #endregion 上越新幹線
  // #region 東北新幹線
  [STATION_IDS.jr_east.nasu_shiobara]: new Station({
    name: "那須塩原",
    reading: "なすしおばら",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.jr_east.utunomiya, LINE_IDS.jr_east.shinkansen.touhoku],
  }),
  [STATION_IDS.jr_east.shin_shirakawa]: new Station({
    name: "新白河",
    reading: "しらかわ",
    prefecture: P.FUKUSHIMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.touhoku_honsen,
    ],
  }),
  [STATION_IDS.jr_east.kooriyama]: new Station({
    name: "郡山",
    reading: "こおりやま",
    prefecture: P.FUKUSHIMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.banetsusai,
      LINE_IDS.jr_east.banetsutou,
      LINE_IDS.jr_east.touhoku_honsen,
    ],
  }),
  [STATION_IDS.jr_east.fukushima]: new Station({
    name: "福島",
    reading: "ふくしま",
    prefecture: P.FUKUSHIMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.abukuma_kyuko.abukuma_kyuko,
      LINE_IDS.fukushima_koutsu.iizaka,
    ],
  }),
  [STATION_IDS.jr_east.shiroishi_zao]: new Station({
    name: "白石蔵王",
    reading: "しろいしざおう",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.shinkansen.touhoku],
  }),
  [STATION_IDS.jr_east.sendai]: new Station({
    name: "仙台",
    reading: "せんだい",
    prefecture: P.MIYAGI,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.sengoku,
      LINE_IDS.jr_east.senzan,
    ],
  }),
  [STATION_IDS.jr_east.furukawa]: new Station({
    name: "古川",
    reading: "ふるかわ",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.shinkansen.touhoku, LINE_IDS.jr_east.rikuutou],
  }),
  [STATION_IDS.jr_east.kurikoma_kogen]: new Station({
    name: "くりこま高原",
    reading: "くりこまこうげん",
    prefecture: P.MIYAGI,
    lines: [LINE_IDS.jr_east.shinkansen.touhoku],
  }),
  [STATION_IDS.jr_east.ichinoseki]: new Station({
    name: "一ノ関",
    reading: "いちのせき",
    prefecture: P.IWATE,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.ofunato,
      LINE_IDS.jr_east.shinkansen.akita,
    ],
  }),
  [STATION_IDS.jr_east.mizusawaesashi]: new Station({
    name: "水沢江刺",
    reading: "みずさわえさし",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.shinkansen.touhoku],
  }),
  [STATION_IDS.jr_east.kitakami]: new Station({
    name: "北上",
    reading: "きたかみ",
    prefecture: P.IWATE,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.kitakami,
    ],
  }),
  [STATION_IDS.jr_east.shin_hanamaki]: new Station({
    name: "新花巻",
    reading: "しんはなまき",
    prefecture: P.IWATE,
    lines: [LINE_IDS.jr_east.shinkansen.touhoku, LINE_IDS.jr_east.kamaishi],
  }),
  [STATION_IDS.jr_east.morioka]: new Station({
    name: "盛岡",
    reading: "もりおか",
    prefecture: P.IWATE,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.yamada,
      LINE_IDS.jr_east.tazawako,
      LINE_IDS.igr_iwate_ginga.igr_iwate_ginga_tetudo,
    ],
  }),
  [STATION_IDS.jr_east.iwate_numakunai]: new Station({
    name: "いわて沼宮内",
    reading: "いわてぬまくない",
    prefecture: P.IWATE,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.igr_iwate_ginga.igr_iwate_ginga_tetudo,
    ],
  }),
  [STATION_IDS.jr_east.ninohe]: new Station({
    name: "二戸",
    reading: "にのへ",
    prefecture: P.IWATE,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.igr_iwate_ginga.igr_iwate_ginga_tetudo,
    ],
  }),
  [STATION_IDS.jr_east.hachinohe]: new Station({
    name: "八戸",
    reading: "はちのへ",
    prefecture: P.AOMORI,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.hachinohe,
      LINE_IDS.aoimori.aoimori_tetudo,
    ],
  }),
  [STATION_IDS.jr_east.shichinohe_towada]: new Station({
    name: "七戸十和田",
    reading: "しちのへとわだ",
    prefecture: P.AOMORI,
    lines: [LINE_IDS.jr_east.shinkansen.touhoku],
  }),
  [STATION_IDS.jr_east.shin_aomori]: new Station({
    name: "新青森",
    reading: "しんあおもり",
    prefecture: P.AOMORI,
    lines: [
      LINE_IDS.jr_east.shinkansen.touhoku,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.shinkansen.hokkaido,
    ],
  }),
  // #endregion 東北新幹線
  // #region 北陸新幹線
  [STATION_IDS.jr_east.annaka_haruna]: new Station({
    name: "安中榛名",
    reading: "あんなかはるな",
    prefecture: P.GUNMA,
    lines: [LINE_IDS.jr_east.shinkansen.hokuriku],
  }),
  [STATION_IDS.jr_east.karuizawa]: new Station({
    name: "軽井沢",
    reading: "かるいざわ",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.shinano.shinano],
  }),
  [STATION_IDS.jr_east.sakudaira]: new Station({
    name: "佐久平",
    reading: "さくだいら",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.jr_east.koumi],
  }),
  [STATION_IDS.jr_east.duplicate.nagano.ueda]: new Station({
    name: "上田",
    reading: "うえだ",
    prefecture: P.NAGANO,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.shinano.shinano,
      LINE_IDS.ueda.bessho,
    ],
  }),
  [STATION_IDS.jr_east.nagano]: new Station({
    name: "長野",
    reading: "ながの",
    prefecture: P.NAGANO,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_east.shinonoi,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.shinano.shinano,
      LINE_IDS.shinano.kita_shinano,
      LINE_IDS.jr_east.iiyama,
      LINE_IDS.nagano.nagano,
    ],
  }),
  [STATION_IDS.jr_east.iiyama]: new Station({
    name: "飯山",
    reading: "いいやま",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.jr_east.iiyama],
  }),
  [STATION_IDS.jr_east.joetsu_myoko]: new Station({
    name: "上越妙高",
    reading: "じょうえつみょうこう",
    prefecture: P.NIIGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.echigo_tokimeki.myoko_haneuma,
    ],
  }),
  [STATION_IDS.jr_west.itoigawa]: new Station({
    name: "糸魚川",
    reading: "いといがわ",
    prefecture: P.NIIGATA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_west.ohito,
      LINE_IDS.echigo_tokimeki.nihonkai_hisui,
    ],
  }),
  [STATION_IDS.jr_west.kurobe_unaduki_onsen]: new Station({
    name: "黒部宇奈月温泉",
    reading: "くろべうなづきおんせん",
    prefecture: P.TOYAMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      new ExchangeInfo(
        LINE_IDS.toyama_chiho.honsen,
        STATION_IDS.toyama_chiho.shin_kurobe
      ),
    ],
  }),
  [STATION_IDS.jr_west.toyama]: new Station({
    name: "富山",
    reading: "とやま",
    prefecture: P.TOYAMA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.ainokaze_toyama.ainokaze_toyama_tetsudo,
      LINE_IDS.jr_west.takayama_honsen,
      new ExchangeInfo(
        LINE_IDS.toyama_chiho.honsen,
        STATION_IDS.toyama_chiho.dentetsu_toyama
      ),
      new ExchangeInfo(
        LINE_IDS.toyama_chiho.fujikoshi_takigami,
        STATION_IDS.toyama_chiho.dentetsu_toyama
      ),
    ],
  }),
  [STATION_IDS.jr_west.shin_takaoka]: new Station({
    name: "新高岡",
    reading: "しんたかおか",
    prefecture: P.TOYAMA,
    lines: [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.jr_west.johana],
  }),
  [STATION_IDS.jr_west.kanazawa]: new Station({
    name: "金沢",
    reading: "かなざわ",
    prefecture: P.ISHIKAWA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.hokuriku.asanogawa,
      LINE_IDS.ir_ishikawa.ir_ishikawa,
      LINE_IDS.jr_west.nanao,
    ],
  }),
  [STATION_IDS.jr_west.komatsu]: new Station({
    name: "小松",
    reading: "こまつ",
    prefecture: P.ISHIKAWA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.ir_ishikawa.ir_ishikawa,
    ],
  }),
  [STATION_IDS.jr_west.kaga_onsen]: new Station({
    name: "加賀温泉",
    reading: "かがおんせん",
    prefecture: P.ISHIKAWA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.ir_ishikawa.ir_ishikawa,
    ],
  }),
  [STATION_IDS.jr_west.awara_onsen]: new Station({
    name: "芦原温泉",
    reading: "あわらおんせん",
    prefecture: P.ISHIKAWA,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.hapi_line_fukui.hapi_line_fukui,
    ],
  }),
  [STATION_IDS.jr_west.fukui]: new Station({
    name: "福井",
    reading: "ふくい",
    prefecture: P.FUKUI,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_west.kuzuryu,
      LINE_IDS.hapi_line_fukui.hapi_line_fukui,
      LINE_IDS.echizen.katsuyama_eiheiji,
      LINE_IDS.echizen.mikuni_awara,
      new ExchangeInfo(
        LINE_IDS.fukui.fukui_tetsudo,
        STATION_IDS.fukui.fukuieki
      ),
    ],
  }),
  [STATION_IDS.jr_west.echizen_takefu]: new Station({
    name: "越前たけふ",
    reading: "えちぜんたけふ",
    prefecture: P.FUKUI,
    lines: [LINE_IDS.jr_east.shinkansen.hokuriku],
  }),
  [STATION_IDS.jr_west.tsuruga]: new Station({
    name: "敦賀",
    reading: "つるが",
    prefecture: P.FUKUI,
    lines: [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_west.hokuriku_honsen,
      LINE_IDS.jr_west.kosei,
      LINE_IDS.jr_west.kohama,
      LINE_IDS.hapi_line_fukui.hapi_line_fukui,
    ],
  }),
  // #endregion 北陸新幹線
};
