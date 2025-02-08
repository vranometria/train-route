import { Station } from "@/types/station-info";
import { STATION_IDS } from "../station-ids";
import { LINE_IDS } from "../line-ids";
import { PREFECTURE as P } from "../prefecture";

export const jr_toukai_stations = {

  // #region 東海道本線
  [STATION_IDS.jr_toukai.kannami]: new Station({
    name: "函南",
    reading: "かんなみ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.numadu]: new Station({
    name: "沼津",
    reading: "ぬまづ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.katahama]: new Station({
    name: "片浜",
    reading: "かたはま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.hara]: new Station({
    name: "原",
    reading: "はら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.higashi_tagonoura]: new Station({
    name: "東田子の浦",
    reading: "ひがしだごのうら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.yoshiwara]: new Station({
    name: "吉原",
    reading: "よしわら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.gakunan.gakunan],
  }),
  [STATION_IDS.jr_toukai.fuji]: new Station({
    name: "富士",
    reading: "ふじ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.fujikawa]: new Station({
    name: "富士川",
    reading: "ふじかわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.shin_kanbara]: new Station({
    name: "新蒲原",
    reading: "しんかんばら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kanbara]: new Station({
    name: "蒲原",
    reading: "かんばら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.yui]: new Station({
    name: "由比",
    reading: "ゆい",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.okitsu]: new Station({
    name: "興津",
    reading: "おきつ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.shimizu]: new Station({
    name: "清水",
    reading: "しみず",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kusanagi]: new Station({
    name: "草薙",
    reading: "くさなぎ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.higashi_shizuoka]: new Station({
    name: "東静岡",
    reading: "ひがししずおか",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.abekawa]: new Station({
    name: "安倍川",
    reading: "あべかわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.mochimune]: new Station({
    name: "用宗",
    reading: "もちむね",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.yaidu]: new Station({
    name: "焼津",
    reading: "やいづ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.nishi_yaidu]: new Station({
    name: "西焼津",
    reading: "にしやいづ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.fujieda]: new Station({
    name: "藤枝",
    reading: "ふじえだ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.rokugou]: new Station({
    name: "六合",
    reading: "ろくごう",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kanaya]: new Station({
    name: "金谷",
    reading: "かなや",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.ooigawa.honsen],
  }),
  [STATION_IDS.jr_toukai.kikukawa]: new Station({
    name: "菊川",
    reading: "きくかわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.aino]: new Station({
    name: "愛野",
    reading: "あいの",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.fukuroi]: new Station({
    name: "袋井",
    reading: "ふくろい",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.mikurya]: new Station({
    name: "御厩",
    reading: "みくりや",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.iwata]: new Station({
    name: "磐田",
    reading: "いわた",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.toyodachou]: new Station({
    name: "豊田町",
    reading: "とよだちょう",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.tenryugawa]: new Station({
    name: "天竜川",
    reading: "てんりゅうがわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.takatsuka]: new Station({
    name: "高塚",
    reading: "たかつか",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.maisaka]: new Station({
    name: "舞阪",
    reading: "まいさか",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.bentenjima]: new Station({
    name: "弁天島",
    reading: "べんてんじま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.araimachi]: new Station({
    name: "新居町",
    reading: "あらいまち",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.washidu]: new Station({
    name: "鷲津",
    reading: "わしづ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.shinjohara]: new Station({
    name: "新所原",
    reading: "しんじょはら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.tenryu_hamanako.tenryu_hamanako],
  }),
  [STATION_IDS.jr_toukai.futagawa]: new Station({
    name: "二川",
    reading: "ふたがわ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.nishi_kozakai]: new Station({
    name: "西小坂井",
    reading: "にしこざかい",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.aichi_mito]: new Station({
    name: "愛知御津",
    reading: "あいちみと",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.mikawa_ootsuka]: new Station({
    name: "三河大塚",
    reading: "みかわおおつか",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.mikawa_miya]: new Station({
    name: "三河三谷",
    reading: "みかわみや",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.gamagori]: new Station({
    name: "蒲郡",
    reading: "がまごおり",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.meitetsu.gamagoori],
  }),
  [STATION_IDS.jr_toukai.mikawa_shiotsu]: new Station({
    name: "三河塩津",
    reading: "みかわしおつ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.sangane]: new Station({
    name: "三ヶ根",
    reading: "さんがね",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kouda]: new Station({
    name: "幸田",
    reading: "こうだ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.aimi]: new Station({
    name: "相見",
    reading: "あいみ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.okazaki]: new Station({
    name: "岡崎",
    reading: "おかざき",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.aichi_kanjou.aichi_kanjou],
  }),
  [STATION_IDS.jr_toukai.nishi_okazaki]: new Station({
    name: "西岡崎",
    reading: "にしおかざき",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.anjou]: new Station({
    name: "安城",
    reading: "あんじょう",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.higashi_kariya]: new Station({
    name: "東刈谷",
    reading: "ひがしかりや",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.nodashinmachi]: new Station({
    name: "野田新町",
    reading: "のだしんまち",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kariya]: new Station({
    name: "刈谷",
    reading: "かりや",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.meitetsu.mikawa],
  }),
  [STATION_IDS.jr_toukai.aiduma]: new Station({
    name: "逢妻",
    reading: "あいづま",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.oobu]: new Station({
    name: "大府",
    reading: "おおぶ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.jr_toukai.taketoyo],
  }),
  [STATION_IDS.jr_toukai.kyouwa]: new Station({
    name: "共和",
    reading: "きょうわ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.minami_oodaka]: new Station({
    name: "南大高",
    reading: "みなみおおだか",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.oodaka]: new Station({
    name: "大高",
    reading: "おおだか",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kasadera]: new Station({
    name: "笠寺",
    reading: "かさでら",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.atsuta]: new Station({
    name: "熱田",
    reading: "あつた",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kanayama]: new Station({
    name: "金山",
    reading: "かなやま",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.jr_toukai.chuou_honsen,LINE_IDS.nagoya_shiei_subway.meikou, LINE_IDS.nagoya_shiei_subway.meijou],
  }),
  [STATION_IDS.jr_toukai.otoubashi]: new Station({
    name: "尾頭橋",
    reading: "おおとうばし",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.biwajima]: new Station({
    name: "枇杷島",
    reading: "びわじま",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kiyosu]: new Station({
    name: "清洲",
    reading: "きよす",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.inazawa]: new Station({
    name: "稲沢",
    reading: "いなざわ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.owari_ichinomiya]: new Station({
    name: "尾張一宮",
    reading: "おわりいちのみや",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.shimada]: new Station({
    name: "島田",
    reading: "しまだ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kisogawa]: new Station({
    name: "木曽川",
    reading: "きそがわ",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.gifu]: new Station({
    name: "岐阜",
    reading: "ぎふ",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.jr_toukai.takayama_honsen],
  }),
  [STATION_IDS.jr_toukai.nishi_gifu]: new Station({
    name: "西岐阜",
    reading: "にしぎふ",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.hodumi]: new Station({
    name: "穂積",
    reading: "ほづみ",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.oogaki]: new Station({
    name: "大垣",
    reading: "おおがき",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.yourou.yourou, LINE_IDS.tarumi.tarumi],
  }),
  [STATION_IDS.jr_toukai.tarui]: new Station({
    name: "垂井",
    reading: "たるい",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.sekigahara]: new Station({
    name: "関ヶ原",
    reading: "せきがはら",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.kashiwabara]: new Station({
    name: "柏原",
    reading: "かしわばら",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.oumi_nagaoka]: new Station({
    name: "近江長岡",
    reading: "おうみながおか",
    prefecture: P.SHIGA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.samegai]: new Station({
    name: "醒ヶ井",
    reading: "さめがい",
    prefecture: P.SHIGA,
    lines: [LINE_IDS.jr_toukai.toukaidou],
  }),
  [STATION_IDS.jr_toukai.suruga_oyama]: new Station({
    name: "駿河小山",
    reading: "するがおやま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.ashigara]: new Station({
    name: "足柄",
    reading: "あしがら",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.gotenba]: new Station({
    name: "御殿場",
    reading: "ごてんば",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.minami_gotenba]: new Station({
    name: "南御殿場",
    reading: "みなみごてんば",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.fujioka]: new Station({
    name: "富士岡",
    reading: "ふじおか",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.iwanami]: new Station({
    name: "岩波",
    reading: "いわなみ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.susono]: new Station({
    name: "裾野",
    reading: "すその",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.nagaizumi_nameri]: new Station({
    name: "長泉なめり",
    reading: "ながいずみなめり",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.shimotogari]: new Station({
    name: "下土狩",
    reading: "しもとがり",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  [STATION_IDS.jr_toukai.ooka]: new Station({
    name: "大岡",
    reading: "おおおか",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.gotenba],
  }),
  // #endregion 東海道本線


  [STATION_IDS.jr_toukai.mishima]: new Station({
    name: "三島",
    reading: "みしま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_east.toukaidou, LINE_IDS.izu_hakone.sunzu],
  }),
  [STATION_IDS.jr_toukai.shinfuji]: new Station({
    name: "新富士",
    reading: "しんふじ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_east.shinkansen.tokaido],
  }),
  [STATION_IDS.jr_toukai.shizuoka]: new Station({
    name: "静岡",
    reading: "しずおか",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_east.toukaidou, LINE_IDS.jr_east.shinkansen.tokaido],
  }),
  [STATION_IDS.jr_toukai.kakegawa]: new Station({
    name: "掛川",
    reading: "かけがわ",
    prefecture: P.SHIZUOKA,
    lines: [
      LINE_IDS.jr_toukai.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_toukai.tenryuhamanako,
    ],
  }),
  [STATION_IDS.jr_toukai.hamamatsu]: new Station({
    name: "浜松",
    reading: "はままつ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.toukaidou, LINE_IDS.jr_east.shinkansen.tokaido],
  }),
  [STATION_IDS.jr_toukai.toyohashi]: new Station({
    name: "豊橋",
    reading: "とよはし",
    prefecture: P.AICHI,
    lines: [
      LINE_IDS.jr_toukai.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_toukai.iida,
      LINE_IDS.nagoya.nagoyahonsen,
    ],
  }),
  [STATION_IDS.jr_toukai.mikawa_anjou]: new Station({
    name: "三河安城",
    reading: "みかわあんじょう",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_east.toukaidou, LINE_IDS.jr_east.shinkansen.tokaido],
  }),
  [STATION_IDS.jr_toukai.nagoya]: new Station({
    name: "名古屋",
    reading: "名古屋",
    prefecture: P.AICHI,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_toukai.chuou_honsen,
      LINE_IDS.jr_toukai.aonami,
      LINE_IDS.jr_west.kansai_honsen,
      LINE_IDS.nagoya_shiei_subway.sakuradori,
      LINE_IDS.nagoya_shiei_subway.higashiyama,
    ],
  }),
  [STATION_IDS.jr_toukai.gifuhashima]: new Station({
    name: "岐阜羽島",
    reading: "ぎふはしま",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_east.shinkansen.tokaido],
  }),
  [STATION_IDS.jr_toukai.maibara]: new Station({
    name: "米原",
    reading: "まいばら",
    prefecture: P.SHIGA,
    lines: [
      LINE_IDS.jr_toukai.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_toukai.hokuriku_honsen,
      LINE_IDS.oumi.honsen,
      LINE_IDS.jr_west.toukaidou,
    ],
  }),
  [STATION_IDS.jr_toukai.kyoto]: new Station({
    name: "京都",
    reading: "きょうと",
    prefecture: P.KYOTO,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_west.saninhonsen,
      LINE_IDS.jr_west.nara,
      LINE_IDS.kyoto_shiei_subway.karasuma,
      LINE_IDS.kinki_nihon.kyoto,
    ],
  }),
  [STATION_IDS.jr_toukai.shinosaka]: new Station({
    name: "新大阪",
    reading: "しんおおさか",
    prefecture: P.OSAKA,
    lines: [
      LINE_IDS.jr_east.toukaidou,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_west.shinkansen.sanyo,
      LINE_IDS.osaka_metro.midosuji,
      LINE_IDS.jr_west.osaka_higashi,
    ],
  }),
  [STATION_IDS.jr_toukai.kinomiya]: new Station({
    name: "来宮",
    reading: "きのみや",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.itou],
  }),
  [STATION_IDS.jr_toukai.izu_taga]: new Station({
    name: "伊豆多賀",
    reading: "いずたが",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.itou],
  }),
  [STATION_IDS.jr_toukai.ajiro]: new Station({
    name: "網代",
    reading: "あじろ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.itou],
  }),
  [STATION_IDS.jr_toukai.usami]: new Station({
    name: "宇佐美",
    reading: "うさみ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.itou],
  }),
  [STATION_IDS.jr_toukai.itou]: new Station({
    name: "伊東",
    reading: "いとう",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.itou, LINE_IDS.izu_kyukou.izu_kyukou],
  }),
  [STATION_IDS.jr_toukai.yunoki]: new Station({
    name: "柚木",
    reading: "ゆのき",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.tatebori]: new Station({
    name: "立堀",
    reading: "たてぼり",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.iriyamase]: new Station({
    name: "入山瀬",
    reading: "いりやませ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.fujine]: new Station({
    name: "富士根",
    reading: "ふじね",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.gendouji]: new Station({
    name: "源道寺",
    reading: "げんどうじ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.fujinomiya]: new Station({
    name: "富士宮",
    reading: "ふじのみや",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.nishi_fujinomiya]: new Station({
    name: "西富士宮",
    reading: "にしふじのみや",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.numakubo]: new Station({
    name: "沼久保",
    reading: "ぬまくぼ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.sibakawa]: new Station({
    name: "芝川",
    reading: "しばかわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.inako]: new Station({
    name: "稲子",
    reading: "いなこ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.tohshima]: new Station({
    name: "十島",
    reading: "としま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.ide]: new Station({
    name: "井手",
    reading: "いで",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.yorihata]: new Station({
    name: "寄畑",
    reading: "よりはた",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.utsubuna]: new Station({
    name: "内船",
    reading: "うつぶな",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kai_ohshima]: new Station({
    name: "甲斐大島",
    reading: "かいおおしま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.minobu]: new Station({
    name: "身延",
    reading: "みのぶ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.shionosawa]: new Station({
    name: "塩之沢",
    reading: "しおのさわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.hadakajima]: new Station({
    name: "波高島",
    reading: "はだかじま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.shimobe_onsen]: new Station({
    name: "下部温泉",
    reading: "しもべおんせん",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kai_tokiwa]: new Station({
    name: "甲斐常葉",
    reading: "かいときわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.ichinose]: new Station({
    name: "市之瀬",
    reading: "いちのせ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kunado]: new Station({
    name: "久那土",
    reading: "くなど",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kai_iwama]: new Station({
    name: "甲斐岩間",
    reading: "かいいわま",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.ochii]: new Station({
    name: "落居",
    reading: "おちい",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kajikazawaguchi]: new Station({
    name: "梶ヶ沢口",
    reading: "かじかざわぐち",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.ichikawa_daimon]: new Station({
    name: "市川大門",
    reading: "いちかわだいもん",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.ichikawa_honmachi]: new Station({
    name: "市川本町",
    reading: "いちかわほんまち",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.ashigawa]: new Station({
    name: "芦川",
    reading: "あしがわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kai_ueno]: new Station({
    name: "甲斐上野",
    reading: "かいうえの",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.higashi_hanawa]: new Station({
    name: "東花輪",
    reading: "ひがしひなわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.koikawa]: new Station({
    name: "小井川",
    reading: "こいかわ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.jouei]: new Station({
    name: "常永",
    reading: "じょうえい",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kokubo]: new Station({
    name: "国母",
    reading: "こくぼ",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kai_sumiyoshi]: new Station({
    name: "甲斐住吉",
    reading: "かいすみよし",
    prefecture: P.SHIZUOKA,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.minami_koufu]: new Station({
    name: "南甲府",
    reading: "みなみこうふ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.zenkouji]: new Station({
    name: "善光寺",
    reading: "ぜんこうじ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.kanente]: new Station({
    name: "金手",
    reading: "かねんて",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_toukai.minobu],
  }),
  [STATION_IDS.jr_toukai.koufu]: new Station({
    name: "甲府",
    reading: "こうふ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.jr_toukai.minobu, LINE_IDS.jr_east.chuou_honsen],
  }),
  // #endregion 身延線
  // #region 中央本線
  [STATION_IDS.jr_toukai.tsurumai]: new Station({
    name: "鶴舞",
    reading: "つるまい",
    en: "tsurumai",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.nagoya_shiei_subway.turumai],
  }),
  [STATION_IDS.jr_toukai.chikusa]: new Station({
    name: "千種",
    reading: "ちくさ",
    en: "chikusa",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.nagoya_shiei_subway.higashiyama],
  }),
  [STATION_IDS.jr_toukai.ohzone]: new Station({
    name: "大曽根",
    reading: "おおぞね",
    en: "ohzone",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.nagoya_shiei_subway.meijou, LINE_IDS.meitetsu.seto],
  }),
  [STATION_IDS.jr_toukai.shinmoriyama]: new Station({
    name: "新森山",
    reading: "しんもりやま",
    en: "shinmoriyama",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.kachigawa]: new Station({
    name: "勝川",
    reading: "かちがわ",
    en: "kachigawa",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.toukai_koutsu_jigyou.jouhoku],
  }),
  [STATION_IDS.jr_toukai.kasugai]: new Station({
    name: "春日井",
    reading: "かすがい",
    en: "kasugai",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.jinryou]: new Station({
    name: "神領",
    reading: "じんりょう",
    en: "jinryou",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.kouzouji]: new Station({
    name: "高蔵寺",
    reading: "こうぞうじ",
    en: "kouzouji",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.aichi_kanjou.aichi_kanjou],
  }),
  [STATION_IDS.jr_toukai.joukouji]: new Station({
    name: "定光寺",
    reading: "じょうこうじ",
    en: "joukouji",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.kokokei]: new Station({
    name: "古虎渓",
    reading: "ここけい",
    en: "kokokei",
    prefecture: P.AICHI,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.tajimi]: new Station({
    name: "多治見",
    reading: "たじみ",
    en: "tajimi",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.jr_toukai.taita],
  }),
  [STATION_IDS.jr_toukai.tokishi]: new Station({
    name: "土岐市",
    reading: "ときし",
    en: "tokishi",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.mizunami]: new Station({
    name: "瑞浪",
    reading: "みずなみ",
    en: "mizunami",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.takenami]: new Station({
    name: "武並",
    reading: "たけなみ",
    en: "takenami",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.ena]: new Station({
    name: "恵那",
    reading: "えな",
    en: "ena",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen, LINE_IDS.akechi.akechi],
  }),
  [STATION_IDS.jr_toukai.mino_sakamoto]: new Station({
    name: "美濃坂本",
    reading: "みのさかもと",
    en: "mino-sakamoto",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.nakatsugawa]: new Station({
    name: "中津川",
    reading: "なかつがわ",
    en: "nakatsugawa",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.ochiaigawa]: new Station({
    name: "落合川",
    reading: "おちあいがわ",
    en: "ochiaigawa",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.sakashita]: new Station({
    name: "坂下",
    reading: "さかした",
    en: "sakashita",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.tadachi]: new Station({
    name: "田立",
    reading: "ただち",
    en: "tadachi",
    prefecture: P.GIFU,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.nagiso]: new Station({
    name: "南木曽",
    reading: "なぎそ",
    en: "nagiso",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.juhnikane]: new Station({
    name: "十二兼",
    reading: "じゅうにかね",
    en: "juhnikane",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.nojiri]: new Station({
    name: "野尻",
    reading: "のじり",
    en: "nojiri",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.ohkuwa]: new Station({
    name: "大桑",
    reading: "おおくわ",
    en: "ohkuwa",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.suhara]: new Station({
    name: "須原",
    reading: "すはら",
    en: "suhara",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.kuramoto]: new Station({
    name: "倉本",
    reading: "くらもと",
    en: "kuramoto",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.agematsu]: new Station({
    name: "上松",
    reading: "あげまつ",
    en: "agematsu",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.kiso_fukushima]: new Station({
    name: "木曽福島",
    reading: "きそふくしま",
    en: "kiso-fukushima",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.harano]: new Station({
    name: "原野",
    reading: "はらの",
    en: "harano",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.miyanokoshi]: new Station({
    name: "宮ノ越",
    reading: "みやのこし",
    en: "miyanokoshi",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.yabuhara]: new Station({
    name: "薮原",
    reading: "やぶはら",
    en: "yabuhara",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.narai]: new Station({
    name: "奈良井",
    reading: "ならい",
    en: "narai",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.kiso_hirasawa]: new Station({
    name: "木曽平沢",
    reading: "きそひらさわ",
    en: "kiso_hirasawa",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.niekawa]: new Station({
    name: "贄川",
    reading: "にえかわ",
    en: "niekawa",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.hideshio]: new Station({
    name: "日出塩",
    reading: "ひでしお",
    en: "hideshio",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  [STATION_IDS.jr_toukai.seba]: new Station({
    name: "洗馬",
    reading: "せば",
    en: "seba",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_toukai.chuou_honsen],
  }),
  // #endregion 中央本線
};
