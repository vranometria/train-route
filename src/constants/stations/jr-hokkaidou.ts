import { Station, StationInfo } from "@/types/station-info";
import { STATION_IDS } from "../station-ids";
import { LINE_IDS } from "../line-ids";
import { PREFECTURE as P } from "../prefecture";

export const jr_hokkaidou_stations = {
  [STATION_IDS.jr_hokkaidou.hakodate]: new Station({
    name: "函館",
    reading: "はこだて",
    prefecture: P.HOKKAIDO,
    lines: [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.dounan_isaribi.dounan_isaribi,
    ],
  }),
  [STATION_IDS.jr_hokkaidou.goryoukaku]: new Station({
    name: "五稜郭",
    reading: "ごりょうかく",
    prefecture: P.HOKKAIDO,
    lines: [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.dounan_isaribi.dounan_isaribi,
    ],
  }),
  [STATION_IDS.jr_hokkaidou.kikyou]: new Station({
    name: "桔梗",
    reading: "ききょう",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.jr_hokkaidou.hakodate_honsen1],
  }),
  [STATION_IDS.jr_hokkaidou.onakayama]: new Station({
    name: "尾仏山",
    reading: "おなかやま",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.jr_hokkaidou.hakodate_honsen1],
  }),
  [STATION_IDS.jr_hokkaidou.nanae]: new StationInfo(
    "七飯",
    NO_TRANSFER,
    "ななえ"
  ),
  [STATION_IDS.jr_hokkaidou.niyama]: new StationInfo(
    "仁山",
    NO_TRANSFER,
    "にやま"
  ),
  [STATION_IDS.jr_hokkaidou.onuma]: new StationInfo(
    "大沼",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.jr_hokkaidou.hakodate_honsen2,
    ],
    "おおぬま"
  ),
  [STATION_IDS.jr_hokkaidou.onuma_kouen]: new StationInfo(
    "大沼公園",
    NO_TRANSFER,
    "おおぬまこうえん"
  ),
  [STATION_IDS.jr_hokkaidou.akaigawa]: new StationInfo(
    "赤井川",
    NO_TRANSFER,
    "あかいがわ"
  ),
  [STATION_IDS.jr_hokkaidou.komagatake]: new StationInfo(
    "駒ヶ岳",
    NO_TRANSFER,
    "こまがたけ"
  ),
  [STATION_IDS.jr_hokkaidou.mori]: new StationInfo(
    "森",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.jr_hokkaidou.hakodate_honsen2,
    ],
    "もり"
  ),
  [STATION_IDS.jr_hokkaidou.ishikura]: new StationInfo(
    "石倉",
    NO_TRANSFER,
    "いしくら"
  ),
  [STATION_IDS.jr_hokkaidou.otoshibe]: new StationInfo(
    "落部",
    NO_TRANSFER,
    "おとしべ"
  ),
  [STATION_IDS.jr_hokkaidou.nodaoi]: new StationInfo(
    "野田生",
    NO_TRANSFER,
    "のだおい"
  ),
  [STATION_IDS.jr_hokkaidou.yamakoshi]: new StationInfo(
    "山越",
    NO_TRANSFER,
    "やまこし"
  ),
  [STATION_IDS.jr_hokkaidou.yakumo]: new StationInfo(
    "八雲",
    NO_TRANSFER,
    "やくも"
  ),
  [STATION_IDS.jr_hokkaidou.yamazaki]: new StationInfo(
    "山崎",
    NO_TRANSFER,
    "やまざき"
  ),
  [STATION_IDS.jr_hokkaidou.kuroiwa]: new StationInfo(
    "黒岩",
    NO_TRANSFER,
    "くろいわ"
  ),
  [STATION_IDS.jr_hokkaidou.kunnui]: new StationInfo(
    "国縫",
    NO_TRANSFER,
    "くんぬい"
  ),
  [STATION_IDS.jr_hokkaidou.osyamanbe]: new StationInfo(
    "長万部",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.jr_hokkaidou.muroran_honsen1,
    ],
    "おしゃまんべ"
  ),
  [STATION_IDS.jr_hokkaidou.hutamata]: new StationInfo(
    "二股",
    NO_TRANSFER,
    "ふたまた"
  ),
  [STATION_IDS.jr_hokkaidou.kuromatsunai]: new StationInfo(
    "黒松内",
    NO_TRANSFER,
    "くろまつない"
  ),
  [STATION_IDS.jr_hokkaidou.neppu]: new StationInfo(
    "熱郛",
    NO_TRANSFER,
    "ねっぷ"
  ),
  [STATION_IDS.jr_hokkaidou.mena]: new StationInfo("目名", NO_TRANSFER, "めな"),
  [STATION_IDS.jr_hokkaidou.rankoshi]: new StationInfo(
    "蘭越",
    NO_TRANSFER,
    "らんこし"
  ),
  [STATION_IDS.jr_hokkaidou.konbu]: new StationInfo(
    "昆布",
    NO_TRANSFER,
    "こんぶ"
  ),
  [STATION_IDS.jr_hokkaidou.niseko]: new StationInfo(
    "ニセコ",
    NO_TRANSFER,
    "にせこ"
  ),
  [STATION_IDS.jr_hokkaidou.hirafu]: new StationInfo(
    "比羅夫",
    NO_TRANSFER,
    "ひらふ"
  ),
  [STATION_IDS.jr_hokkaidou.kucchan]: new StationInfo(
    "倶知安",
    NO_TRANSFER,
    "くっちゃん"
  ),
  [STATION_IDS.jr_hokkaidou.kozawa]: new StationInfo(
    "小沢",
    NO_TRANSFER,
    "こざわ"
  ),
  [STATION_IDS.jr_hokkaidou.ginzan]: new StationInfo(
    "銀山",
    NO_TRANSFER,
    "ぎんざん"
  ),
  [STATION_IDS.jr_hokkaidou.shikaribetsu]: new StationInfo(
    "然別",
    NO_TRANSFER,
    "しかりべつ"
  ),
  [STATION_IDS.jr_hokkaidou.nigi]: new StationInfo("仁木", NO_TRANSFER, "にぎ"),
  [STATION_IDS.jr_hokkaidou.yoichi]: new StationInfo(
    "余市",
    NO_TRANSFER,
    "よいち"
  ),
  [STATION_IDS.jr_hokkaidou.ranshima]: new StationInfo(
    "蘭島",
    NO_TRANSFER,
    "らんしま"
  ),
  [STATION_IDS.jr_hokkaidou.shioya]: new StationInfo(
    "塩谷",
    NO_TRANSFER,
    "しおや"
  ),
  [STATION_IDS.jr_hokkaidou.otaru]: new StationInfo(
    "小樽",
    NO_TRANSFER,
    "おたる"
  ),
  [STATION_IDS.jr_hokkaidou.minami_otaru]: new StationInfo(
    "南小樽",
    NO_TRANSFER,
    "みなみおたる"
  ),
  [STATION_IDS.jr_hokkaidou.otaru_chikkou]: new StationInfo(
    "小樽築港",
    NO_TRANSFER,
    "おたるちっこう"
  ),
  [STATION_IDS.jr_hokkaidou.asari]: new StationInfo(
    "朝里",
    NO_TRANSFER,
    "あさり"
  ),
  [STATION_IDS.jr_hokkaidou.zenibako]: new StationInfo(
    "銭函",
    NO_TRANSFER,
    "ぜにばこ"
  ),
  [STATION_IDS.jr_hokkaidou.hoshimi]: new StationInfo(
    "ほしみ",
    NO_TRANSFER,
    "ほしみ"
  ),
  [STATION_IDS.jr_hokkaidou.hoshioki]: new StationInfo(
    "星置",
    NO_TRANSFER,
    "ほしおき"
  ),
  [STATION_IDS.jr_hokkaidou.inaho]: new StationInfo(
    "稲穂",
    NO_TRANSFER,
    "いなほ"
  ),
  [STATION_IDS.jr_hokkaidou.teine]: new StationInfo(
    "手稲",
    NO_TRANSFER,
    "ていね"
  ),
  [STATION_IDS.jr_hokkaidou.inadumi_kouen]: new StationInfo(
    "稲積公園",
    NO_TRANSFER,
    "いなづみこうえん"
  ),
  [STATION_IDS.jr_hokkaidou.hassamu]: new StationInfo(
    "発寒",
    NO_TRANSFER,
    "はっさむ"
  ),
  [STATION_IDS.jr_hokkaidou.hassamu_chuou]: new StationInfo(
    "発寒中央",
    NO_TRANSFER,
    "はっさむちゅうおう"
  ),
  [STATION_IDS.jr_hokkaidou.kotoni]: new StationInfo(
    "琴似",
    NO_TRANSFER,
    "ことに"
  ),
  [STATION_IDS.jr_hokkaidou.souen]: new StationInfo(
    "桑園",
    [LINE_IDS.jr_hokkaidou.hakodate_honsen1, LINE_IDS.jr_hokkaidou.sassyou],
    "そうえん"
  ),
  [STATION_IDS.jr_hokkaidou.sapporo]: new StationInfo(
    "札幌",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.jr_hokkaidou.chitose,
      LINE_IDS.jr_hokkaidou.sassyou,
    ],
    "さっぽろ"
  ),
  [STATION_IDS.jr_hokkaidou.naeba]: new StationInfo(
    "苗穂",
    [LINE_IDS.jr_hokkaidou.hakodate_honsen1, LINE_IDS.jr_hokkaidou.chitose],
    "なえほ"
  ),
  [STATION_IDS.jr_hokkaidou.shiroishi]: new StationInfo(
    "白石",
    [LINE_IDS.jr_hokkaidou.hakodate_honsen1, LINE_IDS.jr_hokkaidou.chitose],
    "しろいし"
  ),
  [STATION_IDS.jr_hokkaidou.atsubetsu]: new StationInfo(
    "厚別",
    NO_TRANSFER,
    "あつべつ"
  ),
  [STATION_IDS.jr_hokkaidou.shinrin_kouen]: new StationInfo(
    "森林公園",
    NO_TRANSFER,
    "しんりんこうえん"
  ),
  [STATION_IDS.jr_hokkaidou.oasa]: new StationInfo(
    "大麻",
    NO_TRANSFER,
    "おおあさ"
  ),
  [STATION_IDS.jr_hokkaidou.nopporo]: new StationInfo(
    "野幌",
    NO_TRANSFER,
    "のっぽろ"
  ),
  [STATION_IDS.jr_hokkaidou.takasago]: new StationInfo(
    "高砂",
    NO_TRANSFER,
    "たかさご"
  ),
  [STATION_IDS.jr_hokkaidou.ebetsu]: new StationInfo(
    "江別",
    NO_TRANSFER,
    "えべつ"
  ),
  [STATION_IDS.jr_hokkaidou.toyohoro]: new StationInfo(
    "豊幌",
    NO_TRANSFER,
    "とよほろ"
  ),
  [STATION_IDS.jr_hokkaidou.horomui]: new StationInfo(
    "幌向",
    NO_TRANSFER,
    "ほろむい"
  ),
  [STATION_IDS.jr_hokkaidou.kami_horomui]: new StationInfo(
    "上幌向",
    NO_TRANSFER,
    "かみほろむい"
  ),
  [STATION_IDS.jr_hokkaidou.iwamizawa]: new StationInfo(
    "岩見沢",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.jr_hokkaidou.muroran_honsen1,
    ],
    "いわみざわ"
  ),
  [STATION_IDS.jr_hokkaidou.minenobu]: new StationInfo(
    "峰延",
    NO_TRANSFER,
    "みねのぶ"
  ),
  [STATION_IDS.jr_hokkaidou.kousyunai]: new StationInfo(
    "光珠内",
    NO_TRANSFER,
    "こうしゅない"
  ),
  [STATION_IDS.jr_hokkaidou.bibai]: new StationInfo(
    "美唄",
    NO_TRANSFER,
    "びばい"
  ),
  [STATION_IDS.jr_hokkaidou.chashinai]: new StationInfo(
    "茶志内",
    NO_TRANSFER,
    "ちゃしない"
  ),
  [STATION_IDS.jr_hokkaidou.naie]: new StationInfo(
    "奈井江",
    NO_TRANSFER,
    "ないえ"
  ),
  [STATION_IDS.jr_hokkaidou.toyonuma]: new StationInfo(
    "豊沼",
    NO_TRANSFER,
    "とよぬま"
  ),
  [STATION_IDS.jr_hokkaidou.sunagawa]: new StationInfo(
    "砂川",
    NO_TRANSFER,
    "すながわ"
  ),
  [STATION_IDS.jr_hokkaidou.takikawa]: new StationInfo(
    "滝川",
    [
      LINE_IDS.jr_hokkaidou.nemuro_honsen1,
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
    ],
    "たきかわ"
  ),
  [STATION_IDS.jr_hokkaidou.ebeotsu]: new StationInfo(
    "江部乙",
    NO_TRANSFER,
    "えべおつ"
  ),
  [STATION_IDS.jr_hokkaidou.moseushi]: new StationInfo(
    "藻額",
    NO_TRANSFER,
    "もせうし"
  ),
  [STATION_IDS.jr_hokkaidou.fukagawa]: new StationInfo(
    "深川",
    NO_TRANSFER,
    "ふかがわ"
  ),
  [STATION_IDS.jr_hokkaidou.osamunai]: new StationInfo(
    "納内",
    NO_TRANSFER,
    "おさむない"
  ),
  [STATION_IDS.jr_hokkaidou.chikabumi]: new StationInfo(
    "近文",
    NO_TRANSFER,
    "ちかぶみ"
  ),
  [STATION_IDS.jr_hokkaidou.asahikawa]: new StationInfo(
    "旭川",
    [
      LINE_IDS.jr_hokkaidou.furano,
      LINE_IDS.jr_hokkaidou.sekihoku_honsen,
      LINE_IDS.jr_hokkaidou.souya_honsen,
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
    ],
    "あさひかわ"
  ),
  [STATION_IDS.jr_hokkaidou.shikabe]: new StationInfo(
    "鹿部",
    NO_TRANSFER,
    "しかべ"
  ),
  [STATION_IDS.jr_hokkaidou.oshima_numajiri]: new StationInfo(
    "渡島沼尻",
    NO_TRANSFER,
    "おしまぬまじり"
  ),
  [STATION_IDS.jr_hokkaidou.oshima_sawara]: new StationInfo(
    "渡島砂原",
    NO_TRANSFER,
    "おしまさわら"
  ),
  [STATION_IDS.jr_hokkaidou.kakarinuma]: new StationInfo(
    "唐松沼",
    NO_TRANSFER,
    "からまつぬま"
  ),
  [STATION_IDS.jr_hokkaidou.oshironai]: new StationInfo(
    "大城内",
    NO_TRANSFER,
    "おおしろない"
  ),
  [STATION_IDS.jr_hokkaidou.higashi_mori]: new StationInfo(
    "東森",
    NO_TRANSFER,
    "ひがしもり"
  ),
  // ＞富良野線
  [STATION_IDS.jr_hokkaidou.kaguraoka]: new StationInfo(
    "神楽岡",
    NO_TRANSFER,
    "神楽岡"
  ),
  [STATION_IDS.jr_hokkaidou.midorigaoka]: new StationInfo(
    "緑ヶ丘",
    NO_TRANSFER,
    "緑ヶ丘"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_goryou]: new StationInfo(
    "西御料",
    NO_TRANSFER,
    "西五稜"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_mizuho]: new StationInfo(
    "西瑞穂",
    NO_TRANSFER,
    "西瑞穂"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_kagura]: new StationInfo(
    "西神楽",
    NO_TRANSFER,
    "西神楽"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_seiwa]: new StationInfo(
    "西清和",
    NO_TRANSFER,
    "西清和"
  ),
  [STATION_IDS.jr_hokkaidou.chiyogaoka]: new StationInfo(
    "千代ヶ丘",
    NO_TRANSFER,
    "千代ヶ丘"
  ),
  [STATION_IDS.jr_hokkaidou.kita_biei]: new StationInfo(
    "北美瑛",
    NO_TRANSFER,
    "北美瑛"
  ),
  [STATION_IDS.jr_hokkaidou.biei]: new StationInfo("美瑛", NO_TRANSFER, "美瑛"),
  [STATION_IDS.jr_hokkaidou.bibaushi]: new StationInfo(
    "美馬牛",
    NO_TRANSFER,
    "美馬牛"
  ),
  [STATION_IDS.jr_hokkaidou.kami_furano]: new StationInfo(
    "上富良野",
    NO_TRANSFER,
    "かみふらの"
  ),
  [STATION_IDS.jr_hokkaidou.nishinaka]: new StationInfo(
    "西中",
    NO_TRANSFER,
    "西中"
  ),
  [STATION_IDS.jr_hokkaidou.lavender_batake]: new StationInfo(
    "ラベンダー畑",
    NO_TRANSFER,
    "ラベンダー畑"
  ),
  [STATION_IDS.jr_hokkaidou.naka_furano]: new StationInfo(
    "中富良野",
    NO_TRANSFER,
    "なかふらの"
  ),
  [STATION_IDS.jr_hokkaidou.shikauchi]: new StationInfo(
    "鹿討",
    NO_TRANSFER,
    "鹿内"
  ),
  [STATION_IDS.jr_hokkaidou.gakuden]: new StationInfo(
    "学田",
    NO_TRANSFER,
    "学田"
  ),
  [STATION_IDS.jr_hokkaidou.furano]: new StationInfo(
    "富良野",
    [LINE_IDS.jr_hokkaidou.furano, LINE_IDS.jr_hokkaidou.nemuro_honsen1],
    "ふらの"
  ),
  // ＞宗谷本線
  [STATION_IDS.jr_hokkaidou.asahikawa_shijou]: new StationInfo(
    "旭川市場",
    [LINE_IDS.jr_hokkaidou.souya_honsen, LINE_IDS.jr_hokkaidou.sekihoku_honsen],
    "あさひかわしじょう"
  ),
  [STATION_IDS.jr_hokkaidou.shin_asahikawa]: new StationInfo(
    "新旭川",
    [LINE_IDS.jr_hokkaidou.souya_honsen, LINE_IDS.jr_hokkaidou.sekihoku_honsen],
    "しんあさひかわ"
  ),
  [STATION_IDS.jr_hokkaidou.nagayama]: new StationInfo(
    "永山",
    NO_TRANSFER,
    "ながやま"
  ),
  [STATION_IDS.jr_hokkaidou.kita_nagayama]: new StationInfo(
    "北永山",
    NO_TRANSFER,
    "きたながやま"
  ),
  [STATION_IDS.jr_hokkaidou.pippu]: new StationInfo(
    "比布",
    NO_TRANSFER,
    "ぴっぷ"
  ),
  [STATION_IDS.jr_hokkaidou.ranru]: new StationInfo(
    "蘭留",
    NO_TRANSFER,
    "らんる"
  ),
  [STATION_IDS.jr_hokkaidou.shiokari]: new StationInfo(
    "塩狩",
    NO_TRANSFER,
    "しおかり"
  ),
  [STATION_IDS.jr_hokkaidou.wassamu]: new StationInfo(
    "和寒",
    NO_TRANSFER,
    "わっさむ"
  ),
  [STATION_IDS.jr_hokkaidou.kenbuchi]: new StationInfo(
    "剣淵",
    NO_TRANSFER,
    "けんぶち"
  ),
  [STATION_IDS.jr_hokkaidou.shibetsu]: new StationInfo(
    "士別",
    NO_TRANSFER,
    "しべつ"
  ),
  [STATION_IDS.jr_hokkaidou.tayoro]: new StationInfo(
    "多寄",
    NO_TRANSFER,
    "たよろ"
  ),
  [STATION_IDS.jr_hokkaidou.mizuho]: new StationInfo(
    "瑞穂",
    NO_TRANSFER,
    "みずほ"
  ),
  [STATION_IDS.jr_hokkaidou.furen]: new StationInfo(
    "風連",
    NO_TRANSFER,
    "ふうれん"
  ),
  [STATION_IDS.jr_hokkaidou.nayoro_koukou]: new StationInfo(
    "名寄高校",
    NO_TRANSFER,
    "なよろこうこう"
  ),
  [STATION_IDS.jr_hokkaidou.nayoro]: new StationInfo(
    "名寄",
    NO_TRANSFER,
    "なよろ"
  ),
  [STATION_IDS.jr_hokkaidou.nisshin]: new StationInfo(
    "日進",
    NO_TRANSFER,
    "にっしん"
  ),
  [STATION_IDS.jr_hokkaidou.chiebun]: new StationInfo(
    "智恵文",
    NO_TRANSFER,
    "ちえぶん"
  ),
  [STATION_IDS.jr_hokkaidou.chihoku]: new StationInfo(
    "智北",
    NO_TRANSFER,
    "ちほく"
  ),
  [STATION_IDS.jr_hokkaidou.bihuka]: new StationInfo(
    "美深",
    NO_TRANSFER,
    "びふか"
  ),
  [STATION_IDS.jr_hokkaidou.teshiogawa_onsen]: new StationInfo(
    "天塩川温泉",
    NO_TRANSFER,
    "てしおがわおんせん"
  ),
  [STATION_IDS.jr_hokkaidou.sakkuru]: new StationInfo(
    "咲来",
    NO_TRANSFER,
    "さっくる"
  ),
  [STATION_IDS.jr_hokkaidou.otoineppu]: new StationInfo(
    "音威子府",
    NO_TRANSFER,
    "おといねっぷ"
  ),
  [STATION_IDS.jr_hokkaidou.osashima]: new StationInfo(
    "筬島",
    NO_TRANSFER,
    "おさしま"
  ),
  [STATION_IDS.jr_hokkaidou.saku]: new StationInfo("佐久", NO_TRANSFER, "さく"),
  [STATION_IDS.jr_hokkaidou.teshionakagawa]: new StationInfo(
    "天塩中川",
    NO_TRANSFER,
    "てしおなかがわ"
  ),
  [STATION_IDS.jr_hokkaidou.toikanbetsu]: new StationInfo(
    "問寒別",
    NO_TRANSFER,
    "といかんべつ"
  ),
  [STATION_IDS.jr_hokkaidou.nukanan]: new StationInfo(
    "糠南",
    NO_TRANSFER,
    "ぬかなん"
  ),
  [STATION_IDS.jr_hokkaidou.onoppunai]: new StationInfo(
    "雄信内",
    NO_TRANSFER,
    "おのっぷない"
  ),
  [STATION_IDS.jr_hokkaidou.minami_horonobe]: new StationInfo(
    "南幌延",
    NO_TRANSFER,
    "みなみほろのべ"
  ),
  [STATION_IDS.jr_hokkaidou.horonobe]: new StationInfo(
    "幌延",
    NO_TRANSFER,
    "ほろのべ"
  ),
  [STATION_IDS.jr_hokkaidou.shimonuma]: new StationInfo(
    "下沼",
    NO_TRANSFER,
    "しもぬま"
  ),
  [STATION_IDS.jr_hokkaidou.toyohu]: new StationInfo(
    "豊富",
    NO_TRANSFER,
    "とよふ"
  ),
  [STATION_IDS.jr_hokkaidou.kabutonuma]: new StationInfo(
    "兜沼",
    NO_TRANSFER,
    "かぶとぬま"
  ),
  [STATION_IDS.jr_hokkaidou.yuchi]: new StationInfo(
    "勇知",
    NO_TRANSFER,
    "ゆうち"
  ),
  [STATION_IDS.jr_hokkaidou.bakkai]: new StationInfo(
    "抜海",
    NO_TRANSFER,
    "ばっかい"
  ),
  [STATION_IDS.jr_hokkaidou.minami_wakkanai]: new StationInfo(
    "南稚内",
    NO_TRANSFER,
    "みなみわっかない"
  ),
  [STATION_IDS.jr_hokkaidou.wakkanai]: new StationInfo(
    "稚内",
    NO_TRANSFER,
    "わっかない"
  ),
  // ＞石墨本線
  [STATION_IDS.jr_hokkaidou.minami_nagayama]: new StationInfo(
    "南長山",
    NO_TRANSFER,
    "みなみながやま"
  ),
  [STATION_IDS.jr_hokkaidou.higashi_asahikawa]: new StationInfo(
    "東旭川",
    NO_TRANSFER,
    "ひがしあさひかわ"
  ),
  [STATION_IDS.jr_hokkaidou.sakuraoka]: new StationInfo(
    "桜岡",
    NO_TRANSFER,
    "さくらおか"
  ),
  [STATION_IDS.jr_hokkaidou.touma]: new StationInfo(
    "当麻",
    NO_TRANSFER,
    "とうま"
  ),
  [STATION_IDS.jr_hokkaidou.ikaushi]: new StationInfo(
    "伊香牛",
    NO_TRANSFER,
    "いかうし"
  ),
  [STATION_IDS.jr_hokkaidou.aibetsu]: new StationInfo(
    "愛別",
    NO_TRANSFER,
    "あいべつ"
  ),
  [STATION_IDS.jr_hokkaidou.naka_aibetsu]: new StationInfo(
    "中愛別",
    NO_TRANSFER,
    "なかあいべつ"
  ),
  [STATION_IDS.jr_hokkaidou.antaroma]: new StationInfo(
    "安足間",
    NO_TRANSFER,
    "あんたろま"
  ),
  [STATION_IDS.jr_hokkaidou.kamikawa]: new StationInfo(
    "上川",
    NO_TRANSFER,
    "かみかわ"
  ),
  [STATION_IDS.jr_hokkaidou.shirataki]: new StationInfo(
    "白滝",
    NO_TRANSFER,
    "しらたき"
  ),
  [STATION_IDS.jr_hokkaidou.maru_seppu]: new StationInfo(
    "丸瀬布",
    NO_TRANSFER,
    "まるせっぷ"
  ),
  [STATION_IDS.jr_hokkaidou.setose]: new StationInfo(
    "瀬戸瀬",
    NO_TRANSFER,
    "せとせ"
  ),
  [STATION_IDS.jr_hokkaidou.engaru]: new StationInfo(
    "遠軽",
    NO_TRANSFER,
    "えんがる"
  ),
  [STATION_IDS.jr_hokkaidou.ankoku]: new StationInfo(
    "安国",
    NO_TRANSFER,
    "あんこく"
  ),
  [STATION_IDS.jr_hokkaidou.ikutahara]: new StationInfo(
    "生田原",
    NO_TRANSFER,
    "いくたはら"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_rubeshibe]: new StationInfo(
    "西留辺蘂",
    NO_TRANSFER,
    "にしるべしべ"
  ),
  [STATION_IDS.jr_hokkaidou.rubeshibe]: new StationInfo(
    "留辺蘂",
    NO_TRANSFER,
    "るべしべ"
  ),
  [STATION_IDS.jr_hokkaidou.ainonai]: new StationInfo(
    "相内",
    NO_TRANSFER,
    "あいのない"
  ),
  [STATION_IDS.jr_hokkaidou.higashi_ainonai]: new StationInfo(
    "東相内",
    NO_TRANSFER,
    "ひがしあいのない"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_kitami]: new StationInfo(
    "西北見",
    NO_TRANSFER,
    "にしきたみ"
  ),
  [STATION_IDS.jr_hokkaidou.kitami]: new StationInfo(
    "北見",
    NO_TRANSFER,
    "きたみ"
  ),
  [STATION_IDS.jr_hokkaidou.hakuyou]: new StationInfo(
    "柏陽",
    NO_TRANSFER,
    "はくよう"
  ),
  [STATION_IDS.jr_hokkaidou.itoshino]: new StationInfo(
    "愛し野",
    NO_TRANSFER,
    "いとしの"
  ),
  [STATION_IDS.jr_hokkaidou.tanno]: new StationInfo(
    "端野",
    NO_TRANSFER,
    "たんの"
  ),
  [STATION_IDS.jr_hokkaidou.hiushinai]: new StationInfo(
    "緋牛内",
    NO_TRANSFER,
    "ひうしない"
  ),
  [STATION_IDS.jr_hokkaidou.bihoro]: new StationInfo(
    "美幌",
    NO_TRANSFER,
    "びほろ"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_memanbetsu]: new StationInfo(
    "西女満別",
    NO_TRANSFER,
    "にしめまんべつ"
  ),
  [STATION_IDS.jr_hokkaidou.memanbetsu]: new StationInfo(
    "女満別",
    NO_TRANSFER,
    "めまんべつ"
  ),
  [STATION_IDS.jr_hokkaidou.yobito]: new StationInfo(
    "呼人",
    NO_TRANSFER,
    "よびと"
  ),
  [STATION_IDS.jr_hokkaidou.abashiri]: new StationInfo(
    "網走",
    [
      LINE_IDS.jr_hokkaidou.senmou_honsen,
      LINE_IDS.jr_hokkaidou.sekihoku_honsen,
    ],
    "あばしり"
  ),
  // ＞釧網本線
  [STATION_IDS.jr_hokkaidou.katsuradai]: new StationInfo(
    "桂台",
    NO_TRANSFER,
    "かつらだい"
  ),
  [STATION_IDS.jr_hokkaidou.masuura]: new StationInfo(
    "鱒浦",
    NO_TRANSFER,
    "ますうら"
  ),
  [STATION_IDS.jr_hokkaidou.mokoto]: new StationInfo(
    "藻琴",
    NO_TRANSFER,
    "もこと"
  ),
  [STATION_IDS.jr_hokkaidou.kitahama]: new StationInfo(
    "北浜",
    NO_TRANSFER,
    "きたはま"
  ),
  [STATION_IDS.jr_hokkaidou.genseikaen]: new StationInfo(
    "原生花園",
    NO_TRANSFER,
    "げんせいかえん"
  ),
  [STATION_IDS.jr_hokkaidou.hamakoshimizu]: new StationInfo(
    "浜小清水",
    NO_TRANSFER,
    "はまこしみず"
  ),
  [STATION_IDS.jr_hokkaidou.yamubetsu]: new StationInfo(
    "止別",
    NO_TRANSFER,
    "やむべつ"
  ),
  [STATION_IDS.jr_hokkaidou.shiretoko_syari]: new StationInfo(
    "知床斜里",
    NO_TRANSFER,
    "しれとこしゃり"
  ),
  [STATION_IDS.jr_hokkaidou.nakasyari]: new StationInfo(
    "中斜里",
    NO_TRANSFER,
    "なかしゃり"
  ),
  [STATION_IDS.jr_hokkaidou.kiyosatocho]: new StationInfo(
    "清里町",
    NO_TRANSFER,
    "きよさとちょう"
  ),
  [STATION_IDS.jr_hokkaidou.sattsuru]: new StationInfo(
    "札弦",
    NO_TRANSFER,
    "さっつる"
  ),
  [STATION_IDS.jr_hokkaidou.midori]: new StationInfo(
    "緑",
    NO_TRANSFER,
    "みどり"
  ),
  [STATION_IDS.jr_hokkaidou.kawayu_onsen]: new StationInfo(
    "川湯温泉",
    NO_TRANSFER,
    "かわゆおんせん"
  ),
  [STATION_IDS.jr_hokkaidou.biruwa]: new StationInfo(
    "比流和",
    NO_TRANSFER,
    "びるわ"
  ),
  [STATION_IDS.jr_hokkaidou.masyu]: new StationInfo(
    "摩周",
    NO_TRANSFER,
    "ましゅう"
  ),
  [STATION_IDS.jr_hokkaidou.isobunnai]: new StationInfo(
    "磯分内",
    NO_TRANSFER,
    "いそぶんない"
  ),
  [STATION_IDS.jr_hokkaidou.shibecha]: new StationInfo(
    "標茶",
    NO_TRANSFER,
    "しべちゃ"
  ),
  [STATION_IDS.jr_hokkaidou.kayanuma]: new StationInfo(
    "茅沼",
    NO_TRANSFER,
    "かやぬま"
  ),
  [STATION_IDS.jr_hokkaidou.touro]: new StationInfo(
    "塘路",
    NO_TRANSFER,
    "とうろ"
  ),
  [STATION_IDS.jr_hokkaidou.hosooka]: new StationInfo(
    "細岡",
    NO_TRANSFER,
    "ほそおか"
  ),
  [STATION_IDS.jr_hokkaidou.kushiro_onsen]: new StationInfo(
    "釧路温泉",
    NO_TRANSFER,
    "くしろおんせん"
  ),
  [STATION_IDS.jr_hokkaidou.toya]: new StationInfo(
    "遠矢",
    NO_TRANSFER,
    "とおや"
  ),
  [STATION_IDS.jr_hokkaidou.higashi_kushiro]: new StationInfo(
    "東釧路",
    [LINE_IDS.jr_hokkaidou.senmou_honsen, LINE_IDS.jr_hokkaidou.hanasaki],
    "ひがしくしろ"
  ),
  // ＞花咲線
  [STATION_IDS.jr_hokkaidou.kushiro]: new StationInfo(
    "釧路",
    [LINE_IDS.jr_hokkaidou.nemuro_honsen2, LINE_IDS.jr_hokkaidou.hanasaki],
    "くしろ"
  ),
  [STATION_IDS.jr_hokkaidou.hamanaka]: new StationInfo(
    "浜中",
    NO_TRANSFER,
    "はまなか"
  ),
  [STATION_IDS.jr_hokkaidou.musa]: new StationInfo("武佐", NO_TRANSFER, "むさ"),
  [STATION_IDS.jr_hokkaidou.beppo]: new StationInfo(
    "別保",
    NO_TRANSFER,
    "べっぽ"
  ),
  [STATION_IDS.jr_hokkaidou.kami_oboro]: new StationInfo(
    "上尾幌",
    NO_TRANSFER,
    "かみおぼろ"
  ),
  [STATION_IDS.jr_hokkaidou.oboro]: new StationInfo(
    "尾幌",
    NO_TRANSFER,
    "おぼろ"
  ),
  [STATION_IDS.jr_hokkaidou.monshizu]: new StationInfo(
    "門静",
    NO_TRANSFER,
    "もんしず"
  ),
  [STATION_IDS.jr_hokkaidou.akkeshi]: new StationInfo(
    "厚岸",
    NO_TRANSFER,
    "あっけし"
  ),
  [STATION_IDS.jr_hokkaidou.chanai]: new StationInfo(
    "茶内",
    NO_TRANSFER,
    "ちゃない"
  ),
  [STATION_IDS.jr_hokkaidou.anebetsu]: new StationInfo(
    "姉別",
    NO_TRANSFER,
    "あねべつ"
  ),
  [STATION_IDS.jr_hokkaidou.attoko]: new StationInfo(
    "厚床",
    NO_TRANSFER,
    "あっとこ"
  ),
  [STATION_IDS.jr_hokkaidou.bettoga]: new StationInfo(
    "別当賀",
    NO_TRANSFER,
    "べっとが"
  ),
  [STATION_IDS.jr_hokkaidou.ochiishi]: new StationInfo(
    "落石",
    NO_TRANSFER,
    "おちいし"
  ),
  [STATION_IDS.jr_hokkaidou.konbumori]: new StationInfo(
    "昆布盛",
    NO_TRANSFER,
    "こんぶもり"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_wada]: new StationInfo(
    "西和田",
    NO_TRANSFER,
    "にしわだ"
  ),
  [STATION_IDS.jr_hokkaidou.higashi_nemuro]: new StationInfo(
    "東根室",
    NO_TRANSFER,
    "ひがしねむろ"
  ),
  [STATION_IDS.jr_hokkaidou.nemuro]: new StationInfo(
    "根室",
    NO_TRANSFER,
    "ねむろ"
  ),
  // ＞根室本線[滝川ー富良野]
  [STATION_IDS.jr_hokkaidou.higashi_takikawa]: new StationInfo(
    "東滝川",
    NO_TRANSFER,
    "ひがしたきかわ"
  ),
  [STATION_IDS.jr_hokkaidou.akabira]: new StationInfo(
    "赤平",
    NO_TRANSFER,
    "あかびら"
  ),
  [STATION_IDS.jr_hokkaidou.moshiri]: new StationInfo(
    "茂尻",
    NO_TRANSFER,
    "もしり"
  ),
  [STATION_IDS.jr_hokkaidou.hirakishi]: new StationInfo(
    "平岸",
    NO_TRANSFER,
    "ひらきし"
  ),
  [STATION_IDS.jr_hokkaidou.ashibetsu]: new StationInfo(
    "芦別",
    NO_TRANSFER,
    "あしべつ"
  ),
  [STATION_IDS.jr_hokkaidou.kami_ashibetsu]: new StationInfo(
    "上芦別",
    NO_TRANSFER,
    "かみあしべつ"
  ),
  [STATION_IDS.jr_hokkaidou.nokanan]: new StationInfo(
    "野花南",
    NO_TRANSFER,
    "のかなん"
  ),
  // ＞根室本線[釧路ー根室]
  [STATION_IDS.jr_hokkaidou.shintoku]: new StationInfo(
    "新得",
    [LINE_IDS.jr_hokkaidou.nemuro_honsen2, LINE_IDS.jr_hokkaidou.sekisyou],
    "しんとく"
  ),
  [STATION_IDS.jr_hokkaidou.tokachi_shimizu]: new StationInfo(
    "十勝清水",
    NO_TRANSFER,
    "とかちしみず"
  ),
  [STATION_IDS.jr_hokkaidou.mikage]: new StationInfo(
    "御影",
    NO_TRANSFER,
    "みかげ"
  ),
  [STATION_IDS.jr_hokkaidou.memuro]: new StationInfo(
    "芽室",
    NO_TRANSFER,
    "めむろ"
  ),
  [STATION_IDS.jr_hokkaidou.taisei]: new StationInfo(
    "大成",
    NO_TRANSFER,
    "たいせい"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_obihiro]: new StationInfo(
    "西帯広",
    NO_TRANSFER,
    "にしおびひろ"
  ),
  [STATION_IDS.jr_hokkaidou.hakurindai]: new StationInfo(
    "柏林台",
    NO_TRANSFER,
    "はくりんだい"
  ),
  [STATION_IDS.jr_hokkaidou.obihiro]: new StationInfo(
    "帯広",
    NO_TRANSFER,
    "おびひろ"
  ),
  [STATION_IDS.jr_hokkaidou.satsunai]: new StationInfo(
    "札内",
    NO_TRANSFER,
    "さつない"
  ),
  [STATION_IDS.jr_hokkaidou.makubetsu]: new StationInfo(
    "幕別",
    NO_TRANSFER,
    "まくべつ"
  ),
  [STATION_IDS.jr_hokkaidou.toshibetsu]: new StationInfo(
    "利別",
    NO_TRANSFER,
    "としべつ"
  ),
  [STATION_IDS.jr_hokkaidou.ikeda]: new StationInfo(
    "池田",
    NO_TRANSFER,
    "いけだ"
  ),
  [STATION_IDS.jr_hokkaidou.tofutsu]: new StationInfo(
    "十弗",
    NO_TRANSFER,
    "とおふつ"
  ),
  [STATION_IDS.jr_hokkaidou.toyokoro]: new StationInfo(
    "豊頃",
    NO_TRANSFER,
    "とよころ"
  ),
  [STATION_IDS.jr_hokkaidou.shinyoshino]: new StationInfo(
    "新吉野",
    NO_TRANSFER,
    "しんよしの"
  ),
  [STATION_IDS.jr_hokkaidou.urahoro]: new StationInfo(
    "浦幌",
    NO_TRANSFER,
    "うらほろ"
  ),
  [STATION_IDS.jr_hokkaidou.atsunai]: new StationInfo(
    "厚内",
    NO_TRANSFER,
    "あつない"
  ),
  [STATION_IDS.jr_hokkaidou.onbetsu]: new StationInfo(
    "音別",
    NO_TRANSFER,
    "おんべつ"
  ),
  [STATION_IDS.jr_hokkaidou.shiranuka]: new StationInfo(
    "白糠",
    NO_TRANSFER,
    "しらぬか"
  ),
  [STATION_IDS.jr_hokkaidou.nishi_syoro]: new StationInfo(
    "西庶路",
    NO_TRANSFER,
    "にししょろ"
  ),
  [STATION_IDS.jr_hokkaidou.syoro]: new StationInfo(
    "庶路",
    NO_TRANSFER,
    "しょろ"
  ),
  [STATION_IDS.jr_hokkaidou.otanoshike]: new StationInfo(
    "大楽毛",
    NO_TRANSFER,
    "おたのしけ"
  ),
  [STATION_IDS.jr_hokkaidou.shin_otanoshike]: new StationInfo(
    "新大楽毛",
    NO_TRANSFER,
    "しんおたのしけ"
  ),
  [STATION_IDS.jr_hokkaidou.shinfuji]: new StationInfo(
    "新富士",
    NO_TRANSFER,
    "しんふじ"
  ),
  // 石勝線
  [STATION_IDS.jr_hokkaidou.minami_chitose]: new StationInfo(
    "南千歳",
    [LINE_IDS.jr_hokkaidou.chitose, LINE_IDS.jr_hokkaidou.sekisyou],
    "みなみちとせ"
  ),
  [STATION_IDS.jr_hokkaidou.oiwake]: new StationInfo(
    "追分",
    [LINE_IDS.jr_hokkaidou.muroran_honsen1, LINE_IDS.jr_hokkaidou.sekisyou],
    "おいわけ"
  ),
  [STATION_IDS.jr_hokkaidou.kawabata]: new StationInfo(
    "川端",
    NO_TRANSFER,
    "かわばた"
  ),
  [STATION_IDS.jr_hokkaidou.shin_yubari]: new StationInfo(
    "新夕張",
    NO_TRANSFER,
    "しんゆうばり"
  ),
  [STATION_IDS.jr_hokkaidou.shimukappu]: new StationInfo(
    "占冠",
    NO_TRANSFER,
    "しむかっぷ"
  ),
  [STATION_IDS.jr_hokkaidou.tomamu]: new StationInfo(
    "トマム",
    NO_TRANSFER,
    "とまむ"
  ),
  // 千歳線
  [STATION_IDS.jr_hokkaidou.tomakomai]: new StationInfo(
    "苫小牧",
    [
      LINE_IDS.jr_hokkaidou.muroran_honsen1,
      LINE_IDS.jr_hokkaidou.chitose,
      LINE_IDS.jr_hokkaidou.hidaka_honsen,
    ],
    "とまこまい"
  ),
  [STATION_IDS.jr_hokkaidou.numanohata]: new StationInfo(
    "沼ノ端",
    [LINE_IDS.jr_hokkaidou.chitose, LINE_IDS.jr_hokkaidou.muroran_honsen1],
    "ぬまのはた"
  ),
  [STATION_IDS.jr_hokkaidou.uenae]: new StationInfo(
    "上苗穂",
    NO_TRANSFER,
    "うえなえ"
  ),
  [STATION_IDS.jr_hokkaidou.shin_chitose_kuko]: new StationInfo(
    "新千歳空港",
    NO_TRANSFER,
    "しんちとせくうこう"
  ),
  [STATION_IDS.jr_hokkaidou.chitose]: new StationInfo(
    "千歳",
    NO_TRANSFER,
    "ちとせ"
  ),
  [STATION_IDS.jr_hokkaidou.osatsu]: new StationInfo(
    "長都",
    NO_TRANSFER,
    "おさつ"
  ),
  [STATION_IDS.jr_hokkaidou.sapporo_beer_teien]: new StationInfo(
    "サッポロビール庭園",
    NO_TRANSFER,
    "さっぽろびーるていえん"
  ),
  [STATION_IDS.jr_hokkaidou.eniwa]: new StationInfo(
    "恵庭",
    NO_TRANSFER,
    "えにわ"
  ),
  [STATION_IDS.jr_hokkaidou.megumino]: new StationInfo(
    "恵み野",
    NO_TRANSFER,
    "めぐみの"
  ),
  [STATION_IDS.jr_hokkaidou.shimamatsu]: new StationInfo(
    "島松",
    NO_TRANSFER,
    "しままつ"
  ),
  [STATION_IDS.jr_hokkaidou.kita_hiroshima]: new StationInfo(
    "北広島",
    NO_TRANSFER,
    "きたひろしま"
  ),
  [STATION_IDS.jr_hokkaidou.kami_nopporo]: new StationInfo(
    "上野幌",
    NO_TRANSFER,
    "かみのっぽろ"
  ),
  [STATION_IDS.jr_hokkaidou.shin_sapporo]: new StationInfo(
    "新札幌",
    [
      LINE_IDS.jr_hokkaidou.chitose,
      new ExchangeInfo(
        LINE_IDS.sapporo_subway.touzai,
        STATION_IDS.sapporo_subway.shin_sapporo
      ),
    ],
    "しんさっぽろ"
  ),
  [STATION_IDS.jr_hokkaidou.heiwa]: new StationInfo(
    "平和",
    NO_TRANSFER,
    "へいわ"
  ),
  // 室蘭本線
  [STATION_IDS.jr_hokkaidou.shizukari]: new StationInfo(
    "静狩",
    NO_TRANSFER,
    "しずかり"
  ),
  [STATION_IDS.jr_hokkaidou.kohoro]: new StationInfo(
    "小幌",
    NO_TRANSFER,
    "こほろ"
  ),
  [STATION_IDS.jr_hokkaidou.rebunn]: new StationInfo(
    "礼文",
    NO_TRANSFER,
    "れぶん"
  ),
  [STATION_IDS.jr_hokkaidou.okishi]: new StationInfo(
    "大岸",
    NO_TRANSFER,
    "おおきし"
  ),
  [STATION_IDS.jr_hokkaidou.toyoura]: new StationInfo(
    "豊浦",
    NO_TRANSFER,
    "とようら"
  ),
  [STATION_IDS.jr_hokkaidou.touya]: new StationInfo(
    "洞爺",
    NO_TRANSFER,
    "とうや"
  ),
  [STATION_IDS.jr_hokkaidou.usu]: new StationInfo("有珠", NO_TRANSFER, "うす"),
  [STATION_IDS.jr_hokkaidou.nagawa]: new StationInfo(
    "長和",
    NO_TRANSFER,
    "ながわ"
  ),
  [STATION_IDS.jr_hokkaidou.datemonbetsu]: new StationInfo(
    "伊達紋別",
    NO_TRANSFER,
    "だてもんべつ"
  ),
  [STATION_IDS.jr_hokkaidou.kitahunaoka]: new StationInfo(
    "北舟岡",
    NO_TRANSFER,
    "きたふなおか"
  ),
  [STATION_IDS.jr_hokkaidou.mareppu]: new StationInfo(
    "稀府",
    NO_TRANSFER,
    "まれっぷ"
  ),
  [STATION_IDS.jr_hokkaidou.kogane]: new StationInfo(
    "黄金",
    NO_TRANSFER,
    "こがね"
  ),
  [STATION_IDS.jr_hokkaidou.sakimori]: new StationInfo(
    "崎守",
    NO_TRANSFER,
    "さきもり"
  ),
  [STATION_IDS.jr_hokkaidou.motowanishi]: new StationInfo(
    "本磐西",
    NO_TRANSFER,
    "もとわにし"
  ),
  [STATION_IDS.jr_hokkaidou.higashi_muroran]: new StationInfo(
    "東室蘭",
    [
      LINE_IDS.jr_hokkaidou.muroran_honsen1,
      LINE_IDS.jr_hokkaidou.muroran_honsen2,
    ],
    "ひがしむろらん"
  ),
  [STATION_IDS.jr_hokkaidou.washibetsu]: new StationInfo(
    "鷲別",
    NO_TRANSFER,
    "わしべつ"
  ),
  [STATION_IDS.jr_hokkaidou.horobetsu]: new StationInfo(
    "幌別",
    NO_TRANSFER,
    "ほろべつ"
  ),
  [STATION_IDS.jr_hokkaidou.tomiura]: new StationInfo(
    "富浦",
    NO_TRANSFER,
    "とみうら"
  ),
  [STATION_IDS.jr_hokkaidou.noboribetsu]: new StationInfo(
    "登別",
    NO_TRANSFER,
    "のぼりべつ"
  ),
  [STATION_IDS.jr_hokkaidou.kojouhama]: new StationInfo(
    "虎杖浜",
    NO_TRANSFER,
    "こじょうはま"
  ),
  [STATION_IDS.jr_hokkaidou.takeura]: new StationInfo(
    "竹浦",
    NO_TRANSFER,
    "たけうら"
  ),
  [STATION_IDS.jr_hokkaidou.kita_yoshihara]: new StationInfo(
    "北吉原",
    NO_TRANSFER,
    "きたよしはら"
  ),
  [STATION_IDS.jr_hokkaidou.hagino]: new StationInfo(
    "萩野",
    NO_TRANSFER,
    "はぎの"
  ),
  [STATION_IDS.jr_hokkaidou.shiraoi]: new StationInfo(
    "白老",
    NO_TRANSFER,
    "しらおい"
  ),
  [STATION_IDS.jr_hokkaidou.syadai]: new StationInfo(
    "社台",
    NO_TRANSFER,
    "しゃだい"
  ),
  [STATION_IDS.jr_hokkaidou.nishikioka]: new StationInfo(
    "錦岡",
    NO_TRANSFER,
    "にしきおか"
  ),
  [STATION_IDS.jr_hokkaidou.aoba]: new StationInfo(
    "青葉",
    NO_TRANSFER,
    "あおば"
  ),
  [STATION_IDS.jr_hokkaidou.itoi]: new StationInfo(
    "糸井",
    NO_TRANSFER,
    "いとい"
  ),
  [STATION_IDS.jr_hokkaidou.toasa]: new StationInfo(
    "遠浅",
    NO_TRANSFER,
    "とあさ"
  ),
  [STATION_IDS.jr_hokkaidou.hayakita]: new StationInfo(
    "早来",
    NO_TRANSFER,
    "はやきた"
  ),
  [STATION_IDS.jr_hokkaidou.abira]: new StationInfo(
    "安平",
    NO_TRANSFER,
    "あびら"
  ),
  [STATION_IDS.jr_hokkaidou.mikawa]: new StationInfo(
    "三川",
    NO_TRANSFER,
    "みかわ"
  ),
  [STATION_IDS.jr_hokkaidou.furusan]: new StationInfo(
    "古山",
    NO_TRANSFER,
    "ふるさん"
  ),
  [STATION_IDS.jr_hokkaidou.yuni]: new StationInfo("由仁", NO_TRANSFER, "ゆに"),
  [STATION_IDS.jr_hokkaidou.kuriyama]: new StationInfo(
    "栗山",
    NO_TRANSFER,
    "くりやま"
  ),
  [STATION_IDS.jr_hokkaidou.kurioka]: new StationInfo(
    "栗岡",
    NO_TRANSFER,
    "くりおか"
  ),
  [STATION_IDS.jr_hokkaidou.kurisawa]: new StationInfo(
    "栗沢",
    NO_TRANSFER,
    "くりさわ"
  ),
  [STATION_IDS.jr_hokkaidou.shibun]: new StationInfo(
    "渋un",
    NO_TRANSFER,
    "しぶん"
  ),
  [STATION_IDS.jr_hokkaidou.wanishi]: new StationInfo(
    "輪西",
    NO_TRANSFER,
    "わにし"
  ),
  [STATION_IDS.jr_hokkaidou.misaki]: new StationInfo(
    "三崎",
    NO_TRANSFER,
    "みさき"
  ),
  [STATION_IDS.jr_hokkaidou.bokoi]: new StationInfo(
    "母恋",
    NO_TRANSFER,
    "ぼこい"
  ),
  [STATION_IDS.jr_hokkaidou.muroran]: new StationInfo(
    "室蘭",
    NO_TRANSFER,
    "むろらん"
  ),
  [STATION_IDS.jr_hokkaidou.yufutsu]: new StationInfo(
    "勇払",
    NO_TRANSFER,
    "ゆうふつ"
  ),
  [STATION_IDS.jr_hokkaidou.hamaatsuma]: new StationInfo(
    "浜厚真",
    NO_TRANSFER,
    "はまあつま"
  ),
  [STATION_IDS.jr_hokkaidou.mukawa]: new StationInfo(
    "むかわ",
    NO_TRANSFER,
    "むかわ"
  ),
  [STATION_IDS.jr_hokkaidou.hachiken]: new StationInfo(
    "八軒",
    NO_TRANSFER,
    "はちけん"
  ),
  [STATION_IDS.jr_hokkaidou.shinkawa]: new StationInfo(
    "新川",
    NO_TRANSFER,
    "しんかわ"
  ),
  [STATION_IDS.jr_hokkaidou.shin_kotonish]: new StationInfo(
    "新琴似",
    NO_TRANSFER,
    "しんことに"
  ),
  [STATION_IDS.jr_hokkaidou.taihei]: new StationInfo(
    "太平",
    NO_TRANSFER,
    "たいへい"
  ),
  [STATION_IDS.jr_hokkaidou.yurigahara]: new StationInfo(
    "百合が原",
    NO_TRANSFER,
    "ゆりがはら"
  ),
  [STATION_IDS.jr_hokkaidou.shinoro]: new StationInfo(
    "篠路",
    NO_TRANSFER,
    "しのろ"
  ),
  [STATION_IDS.jr_hokkaidou.takuhoku]: new StationInfo(
    "拓北",
    NO_TRANSFER,
    "たくほく"
  ),
  [STATION_IDS.jr_hokkaidou.ainosato_kyouikudai]: new StationInfo(
    "愛の里教育大",
    NO_TRANSFER,
    "あいのさときょういくだい"
  ),
  [STATION_IDS.jr_hokkaidou.royce_town]: new StationInfo(
    "ロイスタウン",
    NO_TRANSFER,
    "ろいすたうん"
  ),
  [STATION_IDS.jr_hokkaidou.futomi]: new StationInfo(
    "太美",
    NO_TRANSFER,
    "ふとみ"
  ),
  [STATION_IDS.jr_hokkaidou.toubetsu]: new StationInfo(
    "当別",
    NO_TRANSFER,
    "とうべつ"
  ),
  [STATION_IDS.jr_hokkaidou.hokkaidou_iryou_daigaku]: new StationInfo(
    "北海道医療大",
    NO_TRANSFER,
    "ほっかいどういりょうだいがく"
  ),
  // 北海道新幹線
  [STATION_IDS.jr_east.oku_tsugaru_imabetsu]: new StationInfo(
    "奥津軽いまべつ",
    NO_TRANSFER,
    "おくつがるいまべつ"
  ),
  [STATION_IDS.jr_hokkaidou.kikonai]: new StationInfo(
    "木古内",
    [
      LINE_IDS.jr_east.shinkansen.hokkaido,
      LINE_IDS.dounan_isaribi.dounan_isaribi,
    ],
    "きこない"
  ),
  [STATION_IDS.jr_hokkaidou.shin_hakodate_hokuto]: new StationInfo(
    "新函館北斗",
    [
      LINE_IDS.jr_east.shinkansen.hokkaido,
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
    ],
    "しんはこだてほくと"
  ),
};
