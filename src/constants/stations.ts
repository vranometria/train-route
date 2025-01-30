import { Station, StationInfo } from "@/types/station-info";
import { LINE_IDS } from "./line-ids";
import { STATION_IDS } from "./station-ids";
import { ExchangeInfo } from "@/types/exchange-info";
import { PREFECTURE as P } from "./prefecture";
import { Direct } from "@/types/Direct";

/** 乗り換え路線なし */
const NO_TRANSFER: string | ExchangeInfo[] = [];

/**
 * 駅情報 定義
 */
export const STATIONS = {
  // #region 東北
  // #region JR北海道
  // ＞函館本線
  [STATION_IDS.jr_hokkaidou.hakodate]: new StationInfo(
    "函館",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.dounan_isaribi.dounan_isaribi,
    ],
    "はこだて"
  ),
  [STATION_IDS.jr_hokkaidou.goryoukaku]: new StationInfo(
    "五稜郭",
    [
      LINE_IDS.jr_hokkaidou.hakodate_honsen1,
      LINE_IDS.dounan_isaribi.dounan_isaribi,
    ],
    "ごりょうかく"
  ),
  [STATION_IDS.jr_hokkaidou.kikyou]: new StationInfo(
    "桔梗",
    NO_TRANSFER,
    "ききょう"
  ),
  [STATION_IDS.jr_hokkaidou.onakayama]: new StationInfo(
    "尾仏山",
    NO_TRANSFER,
    "おなかやま"
  ),
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
  // #endregion JR北海道

  // #region 道南いさりび鉄道
  [STATION_IDS.dounan_isaribi.satsukari]: new StationInfo(
    "札苅",
    NO_TRANSFER,
    "さつかり"
  ),
  [STATION_IDS.dounan_isaribi.izumisawa]: new StationInfo(
    "泉澤",
    NO_TRANSFER,
    "いずみさわ"
  ),
  [STATION_IDS.dounan_isaribi.kamaya]: new StationInfo(
    "釜谷",
    NO_TRANSFER,
    "かまや"
  ),
  [STATION_IDS.dounan_isaribi.oshima_tobetsu]: new StationInfo(
    "渡島当別",
    NO_TRANSFER,
    "おしまとうべつ"
  ),
  [STATION_IDS.dounan_isaribi.moheji]: new StationInfo(
    "茂辺地",
    NO_TRANSFER,
    "もへじ"
  ),
  [STATION_IDS.dounan_isaribi.kamiiso]: new StationInfo(
    "上磯",
    NO_TRANSFER,
    "かみいそ"
  ),
  [STATION_IDS.dounan_isaribi.kiyokawaguchi]: new StationInfo(
    "清川口",
    NO_TRANSFER,
    "きよかわぐち"
  ),
  [STATION_IDS.dounan_isaribi.kunebetsu]: new StationInfo(
    "久根別",
    NO_TRANSFER,
    "くねべつ"
  ),
  [STATION_IDS.dounan_isaribi.higashi_kunebetsu]: new StationInfo(
    "東久根別",
    NO_TRANSFER,
    "ひがしくねべつ"
  ),
  [STATION_IDS.dounan_isaribi.nanaehama]: new StationInfo(
    "七重浜",
    NO_TRANSFER,
    "ななえはま"
  ),
  // #endregion 道南いさりび鉄道
  // #endregion 東北

  // #region 関東
  //  #region 東京
  //   #region 都営地下鉄
  // #region 浅草線
  [STATION_IDS.tokyo_subway.honjo_azumabashi]: new StationInfo(
    "本所吾妻橋",
    [],
    "ほんじょあずまばし"
  ),
  [STATION_IDS.tokyo_subway.asakusa]: new StationInfo(
    "浅草",
    [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.toubu.toubu,
    ],
    "あさくさ"
  ),
  [STATION_IDS.tokyo_subway.kuramae]: new StationInfo(
    "蔵前",
    [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.tokyo_subway.oedo],
    "くらまえ"
  ),
  [STATION_IDS.tokyo_subway.asakusabashi]: new StationInfo(
    "浅草橋",
    [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.jr_east.chuo_soubu_kankou],
    "あさくさばし"
  ),
  [STATION_IDS.tokyo_subway.higashi_nihonbashi]: new StationInfo(
    "東日本橋",
    [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.jr_east.sobu_kaisoku,
    ],
    "ひがしにほんばし"
  ),
  [STATION_IDS.tokyo_subway.ningyocho]: new StationInfo(
    "人形町",
    [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.hanzoumon,
    ],
    "にんぎょうちょう"
  ),
  [STATION_IDS.tokyo_subway.nihonbashi]: new StationInfo(
    "日本橋",
    [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "にほんばし"
  ),
  [STATION_IDS.tokyo_subway.takaracho]: new StationInfo(
    "宝町",
    [],
    "たからちょう"
  ),
  [STATION_IDS.tokyo_subway.higashi_ginza]: new StationInfo(
    "東銀座",
    [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.tokyo_metro.hibiya],
    "ひがしぎんざ"
  ),
  [STATION_IDS.tokyo_subway.daimon]: new StationInfo(
    "大門",
    [
      new ExchangeInfo(
        LINE_IDS.jr_east.yamanote,
        STATION_IDS.jr_east.hamamatsucho
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.hamamatsucho
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_monorail.haneda_kuko,
        STATION_IDS.jr_east.hamamatsucho
      ),
    ],
    "だいもん"
  ),
  [STATION_IDS.tokyo_subway.mita]: new StationInfo(
    "三田",
    [
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.tamachi),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.tamachi
      ),
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_subway.mita,
    ],
    "みた"
  ),
  [STATION_IDS.tokyo_subway.sengakuji]: new StationInfo(
    "泉岳寺",
    [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.keikyu.honsen],
    "せんがくじ"
  ),
  [STATION_IDS.tokyo_subway.takanawadai]: new StationInfo(
    "高輪台",
    [],
    "たかなわだい"
  ),
  [STATION_IDS.tokyo_subway.togoshi]: new StationInfo("戸越", [], "とごし"),
  [STATION_IDS.tokyo_subway.magome]: new StationInfo("馬籠", [], "まごめ"),
  [STATION_IDS.tokyo_subway.nishimagome]: new StationInfo(
    "西馬込",
    [],
    "にしまごめ"
  ),
  // #endregion 浅草線
  // >新宿線
  [STATION_IDS.tokyo_subway.shinohara]: new StationInfo("篠原", [], "篠原"),
  [STATION_IDS.tokyo_subway.mizue]: new StationInfo("瑞江", [], "みずえ"),
  [STATION_IDS.tokyo_subway.ichinoe]: new StationInfo("一之江", [], "いちのえ"),
  [STATION_IDS.tokyo_subway.funabori]: new StationInfo("船堀", [], "ふなぼり"),
  [STATION_IDS.tokyo_subway.higashi_oshima]: new StationInfo(
    "東大島",
    [],
    "ひがしおおしま"
  ),
  [STATION_IDS.tokyo_subway.oshima]: new StationInfo("大島", [], "おおしま"),
  [STATION_IDS.tokyo_subway.nishi_oshima]: new StationInfo(
    "西大島",
    [],
    "にしおおしま"
  ),
  [STATION_IDS.tokyo_subway.sumiyoshi]: new StationInfo(
    "住吉",
    [LINE_IDS.tokyo_subway.shinjuku, LINE_IDS.tokyo_metro.hanzoumon],
    "すみよし"
  ),
  [STATION_IDS.tokyo_subway.kikukawa]: new StationInfo("菊川", [], "きくかわ"),
  [STATION_IDS.tokyo_subway.morishita]: new StationInfo(
    "森下",
    [LINE_IDS.tokyo_subway.shinjuku, LINE_IDS.tokyo_subway.oedo],
    "もりした"
  ),
  [STATION_IDS.tokyo_subway.hamacho]: new StationInfo("浜町", [], "はまちょう"),
  [STATION_IDS.tokyo_subway.bakuro_yokoyama]: new StationInfo(
    "馬喰横山",
    [
      LINE_IDS.tokyo_subway.shinjuku,
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.asakusa,
        STATION_IDS.tokyo_subway.higashi_nihonbashi
      ),
      LINE_IDS.jr_east.sobu_kaisoku,
    ],
    "ばくろよこやま"
  ),
  [STATION_IDS.tokyo_subway.iwamotocho]: new StationInfo(
    "岩本町",
    [],
    "いわもとちょう"
  ),
  [STATION_IDS.tokyo_subway.ogawacho]: new StationInfo(
    "小川町",
    [],
    "おがわちょう"
  ),
  [STATION_IDS.tokyo_subway.jinbocho]: new StationInfo(
    "神保町",
    [
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.tokyo_subway.mita,
      LINE_IDS.tokyo_metro.hanzoumon,
    ],
    "じんぼうちょう"
  ),
  [STATION_IDS.tokyo_subway.kudanshita]: new StationInfo(
    "九段下",
    [
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.touzai,
    ],
    "くだんした"
  ),
  [STATION_IDS.tokyo_subway.akebonobashi]: new StationInfo(
    "曙橋",
    [],
    "あけぼのばし"
  ),
  /** 新線新宿 */
  [STATION_IDS.tokyo_subway.shinsen_shinjuku]: new StationInfo(
    "新線新宿",
    [
      LINE_IDS.tokyo_subway.shinjuku,
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.shinjuku),
      new ExchangeInfo(LINE_IDS.jr_east.saikyou, STATION_IDS.jr_east.shinjuku),
      new ExchangeInfo(
        LINE_IDS.jr_east.chuou_honsen,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.shonan_shinjuku,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(LINE_IDS.keiou.keiou, STATION_IDS.jr_east.shinjuku),
      new ExchangeInfo(
        LINE_IDS.keiou.keioushinsen,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.oedo,
        STATION_IDS.jr_east.shinjuku
      ),
    ],
    "しんせんしんじゅく"
  ),
  // >大江戸線
  [STATION_IDS.tokyo_subway.tochomae]: new StationInfo(
    "都庁前",
    [],
    "とちょうまえ"
  ),
  [STATION_IDS.tokyo_subway.shinjuku_nishiguchi]: new StationInfo(
    "新宿西口",
    [
      LINE_IDS.tokyo_subway.oedo,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(LINE_IDS.seibu.shinjuku, STATION_IDS.jr_east.shinjuku),
    ],
    "しんじゅくにしぐち"
  ),
  [STATION_IDS.tokyo_subway.wakamatsukawada]: new StationInfo(
    "若松河田",
    [],
    "わかまつかわだ"
  ),
  [STATION_IDS.tokyo_subway.ushigomeyanagicho]: new StationInfo(
    "牛込柳町",
    [],
    "うしごめやなぎちょう"
  ),
  [STATION_IDS.tokyo_subway.ushigomekagurazaka]: new StationInfo(
    "牛込神楽坂",
    [],
    "うしごめかぐらざか"
  ),
  [STATION_IDS.tokyo_subway.kasuga]: new StationInfo(
    "春日",
    [
      LINE_IDS.tokyo_subway.oedo,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.tokyo_metro.kourakuen
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.nanboku,
        STATION_IDS.tokyo_metro.kourakuen
      ),
      LINE_IDS.tokyo_subway.mita,
    ],
    "かすが"
  ),
  [STATION_IDS.tokyo_subway.hongo_sancho_me]: new StationInfo(
    "本郷三丁目",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.marunouchi],
    "ほんごうさんちょうめ"
  ),
  [STATION_IDS.tokyo_subway.ueno_okachimachi]: new StationInfo(
    "上野御徒町",
    [
      LINE_IDS.tokyo_subway.oedo,
      new ExchangeInfo(
        LINE_IDS.jr_east.yamanote,
        STATION_IDS.jr_east.okachimachi
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.okachimachi
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.hibiya,
        STATION_IDS.tokyo_metro.nakaokachimachi
      ),
    ],
    "うえのおかちまち"
  ),
  [STATION_IDS.tokyo_subway.kiyosumishirakawa]: new StationInfo(
    "清澄白河",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.hanzoumon],
    "きよすみしらかわ"
  ),
  [STATION_IDS.tokyo_subway.monzennakacho]: new StationInfo(
    "門前仲町",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.touzai],
    "もんぜんなかちょう"
  ),
  [STATION_IDS.tokyo_subway.kachidoki]: new StationInfo(
    "勝どき",
    [],
    "かちどき"
  ),
  [STATION_IDS.tokyo_subway.tsukijishijo]: new StationInfo(
    "築地市場",
    [],
    "つきじしじょう"
  ),
  [STATION_IDS.tokyo_subway.shiodome]: new StationInfo(
    "汐留",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.yurikamome.yurikamome],
    "しおどめ"
  ),
  [STATION_IDS.tokyo_subway.akabanebashi]: new StationInfo(
    "赤羽橋",
    [],
    "あかばねばし"
  ),
  [STATION_IDS.tokyo_subway.azabujuban]: new StationInfo(
    "麻布十番",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.nanboku],
    "あざぶじゅうばん"
  ),
  [STATION_IDS.tokyo_subway.roppongi]: new StationInfo(
    "六本木",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.hibiya],
    "ろっぽんぎ"
  ),
  [STATION_IDS.tokyo_subway.aoyama_itchome]: new StationInfo(
    "青山一丁目",
    [
      LINE_IDS.tokyo_subway.oedo,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.ginza,
    ],
    "あおやまいっちょうめ"
  ),
  [STATION_IDS.tokyo_subway.kokuritsu_kyogijo]: new StationInfo(
    "国立競技場",
    [
      LINE_IDS.tokyo_subway.oedo,
      new ExchangeInfo(
        LINE_IDS.jr_east.chuou_honsen,
        STATION_IDS.jr_east.sendagaya
      ),
    ],
    "こくりつきょうぎじょう"
  ),
  [STATION_IDS.tokyo_subway.nishi_shinjuku_gochome]: new StationInfo(
    "西新宿五丁目",
    [],
    "にししんじゅくごちょうめ"
  ),
  [STATION_IDS.tokyo_subway.nakano_sakaue]: new StationInfo(
    "中野坂上",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.marunouchi],
    "なかのさかうえ"
  ),
  [STATION_IDS.tokyo_subway.nakai]: new StationInfo(
    "中井",
    [LINE_IDS.tokyo_subway.oedo, LINE_IDS.seibu.shinjuku],
    "なかい"
  ),
  [STATION_IDS.tokyo_subway.ochiaiminaminagasaki]: new StationInfo(
    "落合南長崎",
    [],
    "おちあいみなみながさき"
  ),
  [STATION_IDS.tokyo_subway.shin_egota]: new StationInfo(
    "新江古田",
    [],
    "しんえごた"
  ),
  [STATION_IDS.tokyo_subway.nerima_kasugacho]: new StationInfo(
    "練馬春日町",
    [],
    "ねりまかすがちょう"
  ),
  [STATION_IDS.tokyo_subway.hikarigaoka]: new StationInfo(
    "光が丘",
    [],
    "ひかりがおか"
  ),
  // >三田線
  [STATION_IDS.tokyo_subway.shiba_koen]: new StationInfo(
    "芝公園",
    [],
    "しばこうえん"
  ),
  [STATION_IDS.tokyo_subway.onarimon]: new StationInfo(
    "御成門",
    [],
    "おなりもん"
  ),
  [STATION_IDS.tokyo_subway.uchisaiwaicho]: new StationInfo(
    "内幸町",
    [],
    "うちさいわちょう"
  ),
  [STATION_IDS.tokyo_subway.hakusan]: new StationInfo("白山", [], "はくさん"),
  [STATION_IDS.tokyo_subway.sengoku]: new StationInfo("千石", [], "せんごく"),
  [STATION_IDS.tokyo_subway.nishi_sugamo]: new StationInfo(
    "西巣鴨",
    [LINE_IDS.tokyo_subway.mita, LINE_IDS.tokyo_subway.sakura_tram],
    "にしすがも"
  ),
  [STATION_IDS.tokyo_subway.shin_itabashi]: new StationInfo(
    "新板橋",
    [
      LINE_IDS.tokyo_subway.mita,
      new ExchangeInfo(LINE_IDS.jr_east.saikyou, STATION_IDS.jr_east.itabashi),
    ],
    "しんいたばし"
  ),
  [STATION_IDS.tokyo_subway.itabashi_kuyakushomae]: new StationInfo(
    "板橋区役所前",
    [],
    "いたばしくやくしょまえ"
  ),
  [STATION_IDS.tokyo_subway.itabashihoncho]: new StationInfo(
    "板橋本町",
    [],
    "いたばしほんちょう"
  ),
  [STATION_IDS.tokyo_subway.honhasunuma]: new StationInfo(
    "本蓮沼",
    [],
    "ほんはすぬま"
  ),
  [STATION_IDS.tokyo_subway.shimura_sakaue]: new StationInfo(
    "志村坂上",
    [],
    "しむらさかうえ"
  ),
  [STATION_IDS.tokyo_subway.shimura_sanchome]: new StationInfo(
    "志村三丁目",
    [],
    "しむらさんちょうめ"
  ),
  [STATION_IDS.tokyo_subway.renkon]: new StationInfo("蓮根", [], "れんこん"),
  [STATION_IDS.tokyo_subway.takashimadaira]: new StationInfo(
    "高島平",
    [],
    "たかしまだいら"
  ),
  [STATION_IDS.tokyo_subway.shin_takashimadaira]: new StationInfo(
    "新高島平",
    [],
    "しんたかしまだいら"
  ),
  [STATION_IDS.tokyo_subway.nishi_takashimadaira]: new StationInfo(
    "西高島平",
    [],
    "にしたかしまだいら"
  ),
  [STATION_IDS.tokyo_subway.nishidai]: new StationInfo("西台", [], "にしだい"),
  // ＞日暮里・舎人ライナー
  [STATION_IDS.tokyo_subway.akado_shogakko_mae]: new StationInfo(
    "赤土小学校前",
    [],
    "あかどしょうがっこうまえ"
  ),
  [STATION_IDS.tokyo_subway.kumanomae]: new StationInfo(
    "熊野前",
    [
      LINE_IDS.tokyo_subway.nippori_toneri_liner,
      LINE_IDS.tokyo_subway.sakura_tram,
    ],
    "くまのまえ"
  ),
  [STATION_IDS.tokyo_subway.adachi_odai]: new StationInfo(
    "足立小台",
    [],
    "あだちおだい"
  ),
  [STATION_IDS.tokyo_subway.ougiohashi]: new StationInfo(
    "扇大橋",
    [],
    "おうぎおおはし"
  ),
  [STATION_IDS.tokyo_subway.takano]: new StationInfo("高野", [], "たかの"),
  [STATION_IDS.tokyo_subway.kouhoku]: new StationInfo("江北", [], "こうほく"),
  [STATION_IDS.tokyo_subway.nishiaraidaishi_nishi]: new StationInfo(
    "西新井大師西",
    [],
    "にしあらいだいしにし"
  ),
  [STATION_IDS.tokyo_subway.yazaike]: new StationInfo("谷在家", [], "やざいけ"),
  [STATION_IDS.tokyo_subway.toneri_koen]: new StationInfo(
    "舎人公園",
    [],
    "とねりこうえん"
  ),
  [STATION_IDS.tokyo_subway.toneri]: new StationInfo("舎人", [], "とねり"),
  [STATION_IDS.tokyo_subway.minumadaishinsui_koen]: new StationInfo(
    "南千住大橋水辺公園",
    [],
    "みなみすみだいおおはしみずべこうえん"
  ),
  // 東京さくらトラム
  [STATION_IDS.tokyo_subway.minowabashi]: new StationInfo(
    "三ノ輪橋",
    [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.hibiya,
        STATION_IDS.tokyo_metro.minowa
      ),
    ],
    "みのわばし"
  ),
  [STATION_IDS.tokyo_subway.arakawa_icchumae]: new StationInfo(
    "荒川一中前",
    NO_TRANSFER,
    "あらかわいっちゅうまえ"
  ),
  [STATION_IDS.tokyo_subway.arakawa_kuyakushomae]: new StationInfo(
    "荒川区役所前",
    NO_TRANSFER,
    "あらかわくやくしょまえ"
  ),
  [STATION_IDS.tokyo_subway.arakawa_nichoume]: new StationInfo(
    "荒川二丁目",
    NO_TRANSFER,
    "あらかわにちょうめ"
  ),
  [STATION_IDS.tokyo_subway.arakawa_nanachoume]: new StationInfo(
    "荒川七丁目",
    NO_TRANSFER,
    "あらかわななちょうめ"
  ),
  [STATION_IDS.tokyo_subway.machiyaekimae]: new StationInfo(
    "町屋駅前",
    [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.chiyoda,
        STATION_IDS.tokyo_metro.machiya
      ),
      new ExchangeInfo(LINE_IDS.keisei.honsen, STATION_IDS.tokyo_metro.machiya),
    ],
    "まちやえきまえ"
  ),
  [STATION_IDS.tokyo_subway.machiya_nichoume]: new StationInfo(
    "町屋二丁目",
    NO_TRANSFER,
    "まちやにちょうめ"
  ),
  [STATION_IDS.tokyo_subway.higashi_oku_sanchoume]: new StationInfo(
    "東尾久三丁目",
    NO_TRANSFER,
    "ひがしおくさんちょうめ"
  ),
  [STATION_IDS.tokyo_subway.miyanomae]: new StationInfo(
    "宮ノ前",
    NO_TRANSFER,
    "みやのまえ"
  ),
  [STATION_IDS.tokyo_subway.kodai]: new StationInfo(
    "小台",
    NO_TRANSFER,
    "こだい"
  ),
  [STATION_IDS.tokyo_subway.arakawa_yuenchimae]: new StationInfo(
    "荒川遊園地前",
    NO_TRANSFER,
    "あらかわゆうえんちまえ"
  ),
  [STATION_IDS.tokyo_subway.arakawa_shakomae]: new StationInfo(
    "荒川車庫前",
    NO_TRANSFER,
    "あらかわしゃこまえ"
  ),
  [STATION_IDS.tokyo_subway.kajiwara]: new StationInfo(
    "梶原",
    NO_TRANSFER,
    "かじわら"
  ),
  [STATION_IDS.tokyo_subway.sakaechou]: new StationInfo(
    "栄町",
    NO_TRANSFER,
    "さかえちょう"
  ),
  [STATION_IDS.tokyo_subway.oujiekimae]: new StationInfo(
    "王子駅前",
    [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.ouji
      ),
      new ExchangeInfo(LINE_IDS.tokyo_metro.nanboku, STATION_IDS.jr_east.ouji),
    ],
    "おうじえきまえ"
  ),
  [STATION_IDS.tokyo_subway.asukayama]: new StationInfo(
    "飛鳥山",
    NO_TRANSFER,
    "あすかやま"
  ),
  [STATION_IDS.tokyo_subway.takinogawa_icchome]: new StationInfo(
    "滝野川一丁目",
    NO_TRANSFER,
    "たきのがわいっちょうめ"
  ),
  [STATION_IDS.tokyo_subway.nishigawara_yonchoume]: new StationInfo(
    "西ヶ原四丁目",
    NO_TRANSFER,
    "にしがはらよんちょうめ"
  ),
  [STATION_IDS.tokyo_subway.shin_koushinduka]: new StationInfo(
    "新庚申塚",
    NO_TRANSFER,
    "しんこうしんづか"
  ),
  [STATION_IDS.tokyo_subway.koushinduka]: new StationInfo(
    "庚申塚",
    NO_TRANSFER,
    "こうしんづか"
  ),
  [STATION_IDS.tokyo_subway.sugamo_shinden]: new StationInfo(
    "巣鴨新田",
    NO_TRANSFER,
    "すがもしんでん"
  ),
  [STATION_IDS.tokyo_subway.otsukaekimae]: new StationInfo(
    "大塚駅前",
    NO_TRANSFER,
    "おおつかえきまえ"
  ),
  [STATION_IDS.tokyo_subway.mukouhara]: new StationInfo(
    "向原",
    NO_TRANSFER,
    "むこうはら"
  ),
  [STATION_IDS.tokyo_subway.higashi_ikebukuro_yonchoume]: new StationInfo(
    "東池袋四丁目",
    [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.yurakucho,
        STATION_IDS.tokyo_metro.higashi_ikebukuro
      ),
    ],
    "ひがしいけぶくろよんちょうめ"
  ),
  [STATION_IDS.tokyo_subway.toden_zoushigaya]: new StationInfo(
    "都電雑司ヶ谷",
    NO_TRANSFER,
    "とでんぞうしがや"
  ),
  [STATION_IDS.tokyo_subway.kishiboshinmae]: new StationInfo(
    "鬼子母神前",
    [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.fukutoshin,
        STATION_IDS.tokyo_metro.zoshigaya
      ),
    ],
    "きしぼしんまえ"
  ),
  [STATION_IDS.tokyo_subway.gakusyuinshita]: new StationInfo(
    "学習院下",
    NO_TRANSFER,
    "がくしゅういんした"
  ),
  [STATION_IDS.tokyo_subway.omokagebashi]: new StationInfo(
    "面影橋",
    NO_TRANSFER,
    "おもかげばし"
  ),
  [STATION_IDS.tokyo_subway.waseda]: new StationInfo(
    "早稲田",
    NO_TRANSFER,
    "わせだ"
  ),
  [STATION_IDS.tokyo_metro.oshiage]: new StationInfo(
    "押上",
    [
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.toubu.toubu,
      LINE_IDS.toubu.isezaki,
    ],
    "おしあげ"
  ),
  [STATION_IDS.tokyo_metro.kitasenju]: new StationInfo(
    "北千住",
    [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.tokyo_metro.chiyoda,
    ],
    "きたせんじゅ"
  ),
  [STATION_IDS.tokyo_metro.minamisenju]: new StationInfo(
    "南千住",
    [],
    "みなみせんじゅ"
  ),
  [STATION_IDS.tokyo_metro.minowa]: new StationInfo("三ノ輪", [], "みのわ"),
  [STATION_IDS.tokyo_metro.iriya]: new StationInfo("入谷", [], "いりや"),
  [STATION_IDS.tokyo_metro.nakaokachimachi]: new StationInfo(
    "仲御徒町",
    [],
    "なかおかちまち"
  ),
  [STATION_IDS.tokyo_metro.kodenmacho]: new StationInfo(
    "小伝馬町",
    [],
    "こでんまちょう"
  ),
  [STATION_IDS.tokyo_metro.ningyocho]: new StationInfo(
    "人形町",
    [],
    "にんぎょうちょう"
  ),
  [STATION_IDS.tokyo_metro.kayabacho]: new StationInfo(
    "茅場町",
    [],
    "かやばちょう"
  ),
  [STATION_IDS.tokyo_metro.tsukiji]: new StationInfo("築地", [], "つきじ"),
  [STATION_IDS.tokyo_metro.higashiginza]: new StationInfo(
    "東銀座",
    [LINE_IDS.tokyo_metro.hibiya, LINE_IDS.tokyo_subway.asakusa],
    "ひがしぎんざ"
  ),
  [STATION_IDS.tokyo_metro.ginza]: new StationInfo(
    "銀座",
    [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.ginza,
    ],
    "ぎんざ"
  ),
  [STATION_IDS.tokyo_metro.hibiya]: new StationInfo(
    "日比谷",
    [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_subway.mita,
      new ExchangeInfo(
        LINE_IDS.jr_east.yamanote,
        STATION_IDS.jr_east.yurakucho
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.yurakucho
      ),
    ],
    "ひびや"
  ),
  [STATION_IDS.tokyo_metro.kasumigaseki]: new StationInfo(
    "霞ヶ関",
    [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.chiyoda,
    ],
    "かすみがせき"
  ),
  [STATION_IDS.tokyo_metro.toranomon_hills]: new StationInfo(
    "虎ノ門ヒルズ",
    [],
    "とらのもんひるず"
  ),
  [STATION_IDS.tokyo_metro.kamiyacho]: new StationInfo(
    "神谷町",
    [],
    "かみやちょう"
  ),
  [STATION_IDS.tokyo_metro.roppongi]: new StationInfo(
    "六本木",
    [LINE_IDS.tokyo_metro.hibiya, LINE_IDS.tokyo_subway.oedo],
    "ろっぽんぎ"
  ),
  [STATION_IDS.tokyo_metro.hiroo]: new StationInfo("広尾", [], "ひろお"),
  [STATION_IDS.tokyo_metro.nakameguro]: new StationInfo(
    "中目黒",
    [LINE_IDS.tokyo_metro.hibiya, LINE_IDS.toukyu.touyoko],
    "なかめぐろ"
  ),
  // >丸の内線
  [STATION_IDS.tokyo_metro.shinotuka]: new StationInfo(
    "新大塚",
    [],
    "しんおおつか"
  ),
  [STATION_IDS.tokyo_metro.myogadani]: new StationInfo(
    "茗荷谷",
    [],
    "みょうがだに"
  ),
  [STATION_IDS.tokyo_metro.kourakuen]: new StationInfo(
    "後楽園",
    [],
    "こうらくえん"
  ),
  [STATION_IDS.tokyo_metro.hongosanchome]: new StationInfo(
    "本郷三丁目",
    [],
    "ほんごうさんちょうめ"
  ),
  [STATION_IDS.tokyo_metro.awajicho]: new StationInfo(
    "淡路町",
    [],
    "あわじちょう"
  ),
  [STATION_IDS.tokyo_metro.otemachi]: new StationInfo(
    "大手町",
    [
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_subway.mita,
    ],
    "おおてまち"
  ),
  [STATION_IDS.tokyo_metro.kokkaigijidomae]: new StationInfo(
    "国会議事堂前",
    [],
    "こっかいぎじどうまえ"
  ),
  [STATION_IDS.tokyo_metro.akasakamitsuke]: new StationInfo(
    "赤坂見附",
    [],
    "あかさかみつけ"
  ),
  [STATION_IDS.tokyo_metro.yotsuya_sanchome]: new StationInfo(
    "四谷三丁目",
    [],
    "よつやさんちょうめ"
  ),
  [STATION_IDS.tokyo_metro.shinjuku_gyoenmae]: new StationInfo(
    "新宿御苑前",
    [],
    "しんじゅくぎょえんまえ"
  ),
  [STATION_IDS.tokyo_metro.shinjuku_sanchome]: new StationInfo(
    "新宿三丁目",
    [],
    "しんじゅくさんちょうめ"
  ),
  [STATION_IDS.tokyo_metro.nishishinjuku]: new StationInfo(
    "西新宿",
    [],
    "にししんじゅく"
  ),
  [STATION_IDS.tokyo_metro.nakano_sakaue]: new StationInfo(
    "中野坂上",
    [LINE_IDS.tokyo_metro.marunouchi, LINE_IDS.tokyo_subway.oedo],
    "なかのさかうえ"
  ),
  [STATION_IDS.tokyo_metro.shinnakano]: new StationInfo(
    "新中野",
    [],
    "しんなかの"
  ),
  [STATION_IDS.tokyo_metro.higashi_koenji]: new StationInfo(
    "東高円寺",
    [],
    "ひがしこうえんじ"
  ),
  [STATION_IDS.tokyo_metro.shinkoenji]: new StationInfo(
    "新高円寺",
    [],
    "しんこうえんじ"
  ),
  [STATION_IDS.tokyo_metro.minamiasagaya]: new StationInfo(
    "南阿佐ヶ谷",
    [],
    "みなみあさがや"
  ),
  // >有楽町線
  [STATION_IDS.tokyo_metro.wakoshi]: new StationInfo(
    "和光市",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      LINE_IDS.toubu.toujou,
    ],
    "わこうし"
  ),
  [STATION_IDS.tokyo_metro.chikatetsu_narimasu]: new StationInfo(
    "地下鉄成増",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      new ExchangeInfo(LINE_IDS.toubu.toujou, STATION_IDS.toubu.narimasu),
    ],
    "ちかてつなります"
  ),
  [STATION_IDS.tokyo_metro.chikatetsu_akatsuka]: new StationInfo(
    "地下鉄赤塚",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      new ExchangeInfo(LINE_IDS.toubu.toujou, STATION_IDS.toubu.shimoakatsuka),
    ],
    "ちかてつあかつか"
  ),
  [STATION_IDS.tokyo_metro.heiwadai]: new StationInfo(
    "平和台",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
    "へいわだい"
  ),
  [STATION_IDS.tokyo_metro.hikawadai]: new StationInfo(
    "氷川台",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
    "ひかわだい"
  ),
  [STATION_IDS.tokyo_metro.kotake_mukaihara]: new StationInfo(
    "小竹向原",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      LINE_IDS.seibu.yurakucho,
    ],
    "こたけむかいはら"
  ),
  [STATION_IDS.tokyo_metro.senkawa]: new StationInfo(
    "千川",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
    "せんかわ"
  ),
  [STATION_IDS.tokyo_metro.kanamecho]: new StationInfo(
    "要町",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
    "かなめちょう"
  ),
  [STATION_IDS.jr_east.iidabashi]: new StationInfo(
    "飯田橋",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_subway.oedo,
    ],
    "いいだばし"
  ),
  [STATION_IDS.tokyo_metro.higashi_ikebukuro]: new StationInfo(
    "東池袋",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_subway.sakura_tram],
    "ひがしいけぶくろ"
  ),
  [STATION_IDS.tokyo_metro.gokokuji]: new StationInfo("護国寺", [], "ごこくじ"),
  [STATION_IDS.tokyo_metro.edogawabashi]: new StationInfo(
    "江戸川橋",
    [],
    "えどがわばし"
  ),
  [STATION_IDS.tokyo_metro.idabashi]: new StationInfo(
    "飯田橋",
    [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_subway.oedo,
    ],
    "いいだばし"
  ),
  [STATION_IDS.tokyo_metro.koujimachi]: new StationInfo(
    "麹町",
    [],
    "こうじまち"
  ),
  [STATION_IDS.tokyo_metro.nagatacho]: new StationInfo(
    "永田町",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.nanboku,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.ginza,
        STATION_IDS.tokyo_metro.akasakamitsuke
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.chiyoda,
        STATION_IDS.tokyo_metro.akasakamitsuke
      ),
    ],
    "ながたちょう"
  ),
  [STATION_IDS.tokyo_metro.sakuradamon]: new StationInfo(
    "桜田門",
    [],
    "さくらだもん"
  ),
  [STATION_IDS.tokyo_metro.ginza_icchome]: new StationInfo(
    "銀座一丁目",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.tokyo_metro.ginza
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.hibiya,
        STATION_IDS.tokyo_metro.ginza
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.tokyo_metro.ginza
      ),
    ],
    "ぎんざいっちょうめ"
  ),
  [STATION_IDS.tokyo_metro.shintomicho]: new StationInfo(
    "新富町",
    [
      LINE_IDS.tokyo_metro.yurakucho,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.hibiya,
        STATION_IDS.tokyo_metro.tsukiji
      ),
    ],
    "しんとみちょう"
  ),
  [STATION_IDS.tokyo_metro.tsukishima]: new StationInfo(
    "月島",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_subway.oedo],
    "つきしま"
  ),
  [STATION_IDS.tokyo_metro.toyosu]: new StationInfo(
    "豊洲",
    [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.yurikamome.yurikamome],
    "とよす"
  ),
  [STATION_IDS.tokyo_metro.tatsumi]: new StationInfo("辰巳", [], "たつみ"),
  [STATION_IDS.tokyo_metro.shinkiba]: new StationInfo(
    "新木場",
    [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
    "しんきば"
  ),
  // > 副都心線
  [STATION_IDS.tokyo_metro.zoshigaya]: new StationInfo(
    "雑司ヶ谷",
    [LINE_IDS.tokyo_metro.fukutoshin, LINE_IDS.tokyo_subway.sakura_tram],
    "ぞうしがや"
  ),
  [STATION_IDS.tokyo_metro.nishi_waseda]: new StationInfo(
    "西早稲田",
    [],
    "にしわせだ"
  ),
  [STATION_IDS.tokyo_metro.kitasandou]: new StationInfo(
    "北参道",
    [],
    "きたさんどう"
  ),
  [STATION_IDS.tokyo_metro.meiji_jingumae]: new StationInfo(
    "明治神宮前",
    [
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.harajuku),
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.fukutoshin,
    ],
    "めいじじんぐうまえ"
  ),
  [STATION_IDS.tokyo_metro.higashi_shinjuku]: new StationInfo(
    "東新宿",
    [LINE_IDS.tokyo_metro.fukutoshin, LINE_IDS.tokyo_subway.oedo],
    "ひがししんじゅく"
  ),
  // ＞銀座線
  [STATION_IDS.tokyo_metro.omotesando]: new StationInfo(
    "表参道",
    [
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.hanzoumon,
    ],
    "あかさか"
  ),
  [STATION_IDS.tokyo_metro.gaienmae]: new StationInfo(
    "外苑前",
    [],
    "がいえんまえ"
  ),
  [STATION_IDS.tokyo_metro.akasakamitsuke]: new StationInfo(
    "赤坂見附",
    [LINE_IDS.tokyo_metro.ginza, LINE_IDS.tokyo_metro.marunouchi],
    "あかさかみつけ"
  ),
  [STATION_IDS.tokyo_metro.tameikesanno]: new StationInfo(
    "溜池山王",
    [
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_metro.chiyoda,
    ],
    "ためいけさんのう"
  ),
  [STATION_IDS.tokyo_metro.toranomon]: new StationInfo(
    "虎ノ門",
    [LINE_IDS.tokyo_metro.ginza, LINE_IDS.tokyo_metro.hibiya],
    "とらのもん"
  ),
  [STATION_IDS.tokyo_metro.kyobashi]: new StationInfo("京橋", [], "きょうばし"),
  [STATION_IDS.tokyo_metro.nihonbashi]: new StationInfo(
    "日本橋",
    [
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_subway.asakusa,
    ],
    "にほんばし"
  ),
  [STATION_IDS.tokyo_metro.mitsukoshimae]: new StationInfo(
    "三越前",
    [LINE_IDS.tokyo_metro.ginza, LINE_IDS.tokyo_metro.hanzoumon],
    "みつこしまえ"
  ),
  [STATION_IDS.tokyo_metro.suehirocho]: new StationInfo(
    "末広町",
    [],
    "すえひろちょう"
  ),
  [STATION_IDS.tokyo_metro.ueno_hirokoji]: new StationInfo(
    "上野広小路",
    [
      LINE_IDS.tokyo_metro.ginza,
      new ExchangeInfo(
        LINE_IDS.jr_east.yamanote,
        STATION_IDS.jr_east.okachimachi
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.okachimachi
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.oedo,
        STATION_IDS.tokyo_subway.ueno_okachimachi
      ),
    ],
    "うえのひろこうじ"
  ),
  [STATION_IDS.tokyo_metro.inaricho]: new StationInfo(
    "稲荷町",
    [],
    "いなりちょう"
  ),
  [STATION_IDS.tokyo_metro.tawaramachi]: new StationInfo(
    "田原町",
    [],
    "たわらまち"
  ),
  // ＞半蔵門線
  [STATION_IDS.tokyo_metro.hanzomon]: new StationInfo(
    "半蔵門",
    [],
    "はんぞうもん"
  ),
  [STATION_IDS.tokyo_metro.suitengumae]: new StationInfo(
    "水天宮前",
    [],
    "すいてんぐうまえ"
  ),
  [STATION_IDS.tokyo_metro.kiyosumi_shirakawa]: new StationInfo(
    "清澄白河",
    [],
    "きよすみしらかわ"
  ),
  // ＞東西線
  [STATION_IDS.tokyo_metro.ochiai]: new StationInfo(
    "落合",
    NO_TRANSFER,
    "おちあい"
  ),
  [STATION_IDS.tokyo_metro.waseda]: new StationInfo(
    "早稲田",
    NO_TRANSFER,
    "わせだ"
  ),
  [STATION_IDS.tokyo_metro.kagurazaka]: new StationInfo(
    "神楽坂",
    NO_TRANSFER,
    "かぐらざか"
  ),
  [STATION_IDS.tokyo_metro.takehashi]: new StationInfo(
    "竹橋",
    NO_TRANSFER,
    "たけばし"
  ),
  [STATION_IDS.tokyo_metro.kiba]: new StationInfo("木場", NO_TRANSFER, "きば"),
  [STATION_IDS.tokyo_metro.touyocho]: new StationInfo(
    "東陽町",
    NO_TRANSFER,
    "とうようちょう"
  ),
  [STATION_IDS.tokyo_metro.minami_sunamachi]: new StationInfo(
    "南砂町",
    NO_TRANSFER,
    "みなみすなまち"
  ),
  [STATION_IDS.tokyo_metro.nishi_kasai]: new StationInfo(
    "西葛西",
    NO_TRANSFER,
    "にしかさい"
  ),
  [STATION_IDS.tokyo_metro.kasai]: new StationInfo(
    "葛西",
    NO_TRANSFER,
    "かさい"
  ),
  [STATION_IDS.tokyo_metro.urayasu]: new StationInfo(
    "浦安",
    NO_TRANSFER,
    "うらやす"
  ),
  [STATION_IDS.tokyo_metro.minami_gyotoku]: new StationInfo(
    "南行徳",
    NO_TRANSFER,
    "みなみぎょうとく"
  ),
  [STATION_IDS.tokyo_metro.gyotoku]: new StationInfo(
    "行徳",
    NO_TRANSFER,
    "ぎょうとく"
  ),
  [STATION_IDS.tokyo_metro.myouden]: new StationInfo(
    "妙典",
    NO_TRANSFER,
    "みょうでん"
  ),
  [STATION_IDS.tokyo_metro.baraki_nakayama]: new StationInfo(
    "原木中山",
    NO_TRANSFER,
    "ばらきなかやま"
  ),
  // ＞南北線
  [STATION_IDS.tokyo_metro.shirokanedai]: new StationInfo(
    "白金台",
    [LINE_IDS.tokyo_metro.nanboku, LINE_IDS.tokyo_subway.mita],
    "しろかねだい"
  ),
  [STATION_IDS.tokyo_metro.shirokane_takanawa]: new StationInfo(
    "白金高輪",
    [LINE_IDS.tokyo_metro.nanboku, LINE_IDS.tokyo_subway.mita],
    "しろかねたかなわ"
  ),
  [STATION_IDS.tokyo_metro.roppongi_iccho_me]: new StationInfo(
    "六本木一丁目",
    [],
    "ろっぽんぎいっちょうめ"
  ),
  [STATION_IDS.tokyo_metro.todaimae]: new StationInfo(
    "東大前",
    [],
    "とうだいまえ"
  ),
  [STATION_IDS.tokyo_metro.honkomagome]: new StationInfo(
    "本駒込",
    [],
    "ほんこまごめ"
  ),
  [STATION_IDS.tokyo_metro.nishigahara]: new StationInfo(
    "西ヶ原",
    [],
    "にしがはら"
  ),
  [STATION_IDS.tokyo_metro.oji]: new StationInfo(
    "王子",
    [LINE_IDS.tokyo_metro.nanboku, LINE_IDS.tokyo_subway.sakura_tram],
    "おうじ"
  ),
  [STATION_IDS.tokyo_metro.oji_kamiya]: new StationInfo(
    "王子神谷",
    [],
    "おうじかみや"
  ),
  [STATION_IDS.tokyo_metro.shimo]: new StationInfo("志茂", [], "しも"),
  [STATION_IDS.tokyo_metro.akabane_iwabuchi]: new StationInfo(
    "赤羽岩淵",
    [],
    "あかばねいわぶち"
  ),
  // 千代田線
  [STATION_IDS.tokyo_metro.kita_ayase]: new StationInfo(
    "北綾瀬",
    [],
    "きたあやせ"
  ),
  [STATION_IDS.tokyo_metro.ayase]: new StationInfo("綾瀬", [], "あやせ"),
  [STATION_IDS.tokyo_metro.sendagi]: new StationInfo("千駄木", [], "せんだぎ"),
  [STATION_IDS.tokyo_metro.nedu]: new StationInfo("根津", [], "ねづ"),
  [STATION_IDS.tokyo_metro.yushima]: new StationInfo("湯島", [], "ゆしま"),
  [STATION_IDS.tokyo_metro.nijubashimae]: new StationInfo(
    "二重橋前",
    [],
    "にじゅうばしまえ"
  ),
  [STATION_IDS.tokyo_metro.akasaka]: new StationInfo("赤坂", [], "あかさか"),
  [STATION_IDS.tokyo_metro.nogizaka]: new StationInfo("乃木坂", [], "のぎざか"),
  [STATION_IDS.tokyo_metro.yoyogi_koen]: new StationInfo(
    "代々木公園",
    [],
    "よよぎこうえん"
  ),
  [STATION_IDS.tokyo_metro.machiya]: new StationInfo(
    "町屋",
    [
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.keisei.honsen,
      LINE_IDS.tokyo_subway.sakura_tram,
    ],
    "まちや"
  ),
  [STATION_IDS.tokyo_metro.shin_ochanomizu]: new StationInfo(
    "新御茶ノ水",
    [
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.tokyo_metro.awajicho
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.shinjuku,
        STATION_IDS.tokyo_subway.ogawacho
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.chuou_honsen,
        STATION_IDS.jr_east.ochanomizu
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.chuo_soubu_kankou,
        STATION_IDS.jr_east.ochanomizu
      ),
    ],
    "しんおちゃのみず"
  ),
  // #endregion 都営地下鉄
  //   #region 東京モノレール
  [STATION_IDS.tokyo_monorail.tennozu_isle]: new StationInfo(
    "天王州アイル",
    [
      LINE_IDS.tokyo_monorail.haneda_kuko,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
    "てんのうずあいる"
  ),
  [STATION_IDS.tokyo_monorail.oi_keibajo_mae]: new StationInfo(
    "大井競馬場前",
    [],
    "おおいけいばじょうまえ"
  ),
  [STATION_IDS.tokyo_monorail.ryutsu_center]: new StationInfo(
    "流通センター",
    [],
    "りゅうつうせんたー"
  ),
  [STATION_IDS.tokyo_monorail.syouwajima]: new StationInfo(
    "昭和島",
    [],
    "しょうわじま"
  ),
  [STATION_IDS.tokyo_monorail.seibijo]: new StationInfo(
    "整備場",
    [],
    "せいびじょう"
  ),
  [STATION_IDS.tokyo_monorail.haneda_kuko_daisan_terminal]: new StationInfo(
    "羽田空港第三ターミナル",
    [],
    "はねだくうこうだいさんたーみなる"
  ),
  [STATION_IDS.tokyo_monorail.shin_seibijo]: new StationInfo(
    "新整備場",
    [],
    "しんせいびじょう"
  ),
  [STATION_IDS.tokyo_monorail.haneda_kuko_dai1_terminal]: new StationInfo(
    "羽田空港第一ターミナル",
    [],
    "はねだくうこうだいいちたーみなる"
  ),
  [STATION_IDS.tokyo_monorail.haneda_kuko_dai2_terminal]: new StationInfo(
    "羽田空港第二ターミナル",
    [],
    "はねだくうこうだいにたーみなる"
  ),
  // ゆりかもめ
  [STATION_IDS.yurikamome.takeshiba]: new StationInfo("竹芝", [], "たけしば"),
  [STATION_IDS.yurikamome.hinode]: new StationInfo("日の出", [], "ひので"),
  [STATION_IDS.yurikamome.shibaurafuto]: new StationInfo(
    "芝浦ふ頭",
    [],
    "しばうらふとう"
  ),
  [STATION_IDS.yurikamome.odaiba_kaihinkoen]: new StationInfo(
    "お台場海浜公園",
    [
      LINE_IDS.yurikamome.yurikamome,
      new ExchangeInfo(
        LINE_IDS.toukyo_rinkai_kousoku.rinkai,
        STATION_IDS.toukyo_rinkai_kousoku.tokyo_teleport
      ),
    ],
    "おだいばかいひんこうえん"
  ),
  [STATION_IDS.yurikamome.daiba]: new StationInfo("台場", [], "だいば"),
  [STATION_IDS.yurikamome.tokyo_kokusai_cruise_terminal]: new StationInfo(
    "東京国際クルーズターミナル",
    [],
    "とうきょうこくさいくるーずたーみなる"
  ),
  [STATION_IDS.yurikamome.aomi]: new StationInfo("青海", [], "あおみ"),
  [STATION_IDS.yurikamome.telecom_center]: new StationInfo(
    "テレコムセンター",
    [],
    "てれこむせんたー"
  ),
  [STATION_IDS.yurikamome.tokyo_big_sight]: new StationInfo(
    "東京ビッグサイト",
    [],
    "とうきょうびっぐさいと"
  ),
  [STATION_IDS.yurikamome.ariake]: new StationInfo(
    "有明",
    [
      LINE_IDS.yurikamome.yurikamome,
      new ExchangeInfo(
        LINE_IDS.toukyo_rinkai_kousoku.rinkai,
        STATION_IDS.toukyo_rinkai_kousoku.kokusaitenjijyo
      ),
    ],
    "ありあけ"
  ),
  [STATION_IDS.yurikamome.ariake_tennis_no_mori]: new StationInfo(
    "有明テニスの森",
    [],
    "ありあけてにすのもり"
  ),
  [STATION_IDS.yurikamome.shijomae]: new StationInfo(
    "市場前",
    [],
    "しじょうまえ"
  ),
  [STATION_IDS.yurikamome.shin_toyosu]: new StationInfo(
    "新豊洲",
    [],
    "しんとよす"
  ),
  // #endregion 東京モノレール
  //   #region りんかい
  [STATION_IDS.toukyo_rinkai_kousoku.shinonome]: new StationInfo(
    "東雲",
    [],
    "しののめ"
  ),
  [STATION_IDS.toukyo_rinkai_kousoku.kokusaitenjijyo]: new StationInfo(
    "国際展示場",
    [
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
      new ExchangeInfo(
        LINE_IDS.yurikamome.yurikamome,
        STATION_IDS.yurikamome.ariake
      ),
    ],
    "こくさいてんじじょう"
  ),
  [STATION_IDS.toukyo_rinkai_kousoku.tokyo_teleport]: new StationInfo(
    "東京テレポート",
    [
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
      new ExchangeInfo(
        LINE_IDS.yurikamome.yurikamome,
        STATION_IDS.yurikamome.odaiba_kaihinkoen
      ),
    ],
    "とうきょうてれぽーと"
  ),
  [STATION_IDS.toukyo_rinkai_kousoku.shinagawa_seaside]: new StationInfo(
    "品川シーサイド",
    [],
    "しながわしーさいど"
  ),
  // #endregion りんかい
  //   #region 京王電鉄
  // ＞京王線
  [STATION_IDS.keiou.sasatsuka]: new StationInfo(
    "笹塚",
    [LINE_IDS.keiou.keiou, LINE_IDS.keiou.keioushinsen],
    "ささつか"
  ),
  [STATION_IDS.keiou.daitabashi]: new StationInfo("代田橋", [], "だいたばし"),
  [STATION_IDS.keiou.meidaimae]: new StationInfo(
    "明大前",
    [LINE_IDS.keiou.keiou, LINE_IDS.keiou.inokashira],
    "めいだいまえ"
  ),
  [STATION_IDS.keiou.shimotakaido]: new StationInfo(
    "下高井戸",
    [LINE_IDS.keiou.keiou, LINE_IDS.toukyu.setagaya],
    "しもたかいど"
  ),
  [STATION_IDS.keiou.sakurajosui]: new StationInfo(
    "桜上水",
    [],
    "さくらじょうすい"
  ),
  [STATION_IDS.keiou.kami_kitazawa]: new StationInfo(
    "上北沢",
    [],
    "かみきたざわ"
  ),
  [STATION_IDS.keiou.yawatayama]: new StationInfo("八幡山", [], "やわたやま"),
  [STATION_IDS.keiou.roka_koen]: new StationInfo(
    "芦花公園",
    [],
    "ろかこうえん"
  ),
  [STATION_IDS.keiou.chitose_karasuyama]: new StationInfo(
    "千歳烏山",
    [],
    "ちとせからすやま"
  ),
  [STATION_IDS.keiou.senkawa]: new Station({
    name: "千川",
    pron: "せんかわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.tsutsujigaoka]: new Station({
    name: "つつじヶ丘",
    pron: "つつじがおか",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.sibasaki]: new Station({
    name: "柴咲",
    pron: "しばさき",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.kokuryo]: new Station({
    name: "国領",
    pron: "こくりょう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.fuda]: new Station({
    name: "布田",
    pron: "ふだ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.chofu]: new Station({
    name: "調布",
    pron: "ちょうふ",
    pr: P.TOKYO,
    lines: [LINE_IDS.keiou.sagamihara, LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.keiou_tamagawa]: new Station({
    name: "京王多摩川",
    pron: "けいおうたまがわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_inadatutsumi]: new Station({
    name: "京王稲田堤",
    pron: "けいおういなだつつみ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_yomiuri_land]: new Station({
    name: "京王よみうりランド",
    pron: "けいおうよみうりらんど",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.inagi]: new Station({
    name: "稲城",
    pron: "いなぎ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.wakabadai]: new Station({
    name: "若葉台",
    pron: "わかばだい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_nagayama]: new Station({
    name: "京王長沢",
    pron: "けいおうながやま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_tama_center]: new Station({
    name: "京王多摩センター",
    pron: "けいおうたませんたー",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_horinouchi]: new Station({
    name: "京王堀之内",
    pron: "けいおうほりのうち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.minami_osawa]: new Station({
    name: "南大沢",
    pron: "みなみおおさわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.tamasakai]: new Station({
    name: "多摩境",
    pron: "たまさかい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.nishi_chofu]: new Station({
    name: "西調布",
    pron: "にしちょうふ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.tobitakyu]: new Station({
    name: "飛田給",
    pron: "とびたきゅう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.musashinodai]: new StationInfo(
    "武蔵野台",
    [LINE_IDS.keiou.keiou, LINE_IDS.seibu.tamagawa],
    "むさしのだい"
  ),
  [STATION_IDS.keiou.tamareien]: new Station({
    name: "多磨霊園",
    pron: "たまれいえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.higashi_fuchu]: new StationInfo(
    "東府中",
    [LINE_IDS.keiou.keiou, LINE_IDS.keiou.keibajo],
    "ひがしふちゅう"
  ),
  [STATION_IDS.keiou.fuchu_keiba_seimon_mae]: new Station({
    name: "府中競馬正門前",
    pron: "ふちゅうけいばせいもんまえ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.tama_doubutsu_kouen]: new Station({
    name: "多摩動物公園",
    pron: "たまどうぶつこうえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.fuchu]: new Station({
    name: "府中",
    pron: "ふちゅう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.nakakawahara]: new Station({
    name: "中河原",
    pron: "なかかわはら",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.seiseki_sakuragaoka]: new Station({
    name: "聖蹟桜ヶ丘",
    pron: "せいせきさくらがおか",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.mogusaen]: new Station({
    name: "百草園",
    pron: "もぐさえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.takahatafudo]: new Station({
    name: "高幡不動",
    pron: "たかはたふどう",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.keiou.keiou,
      LINE_IDS.keiou.dobutsuen,
      LINE_IDS.tama_monorail.tama_monorail,
    ],
  }),
  [STATION_IDS.keiou.minamidaira]: new Station({
    name: "南平",
    pron: "みなみだいら",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.hirayamajoshikoen]: new Station({
    name: "平山城址公園",
    pron: "ひらやまじょうしこうえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.naganuma]: new Station({
    name: "長沼",
    pron: "ながぬま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.kitano]: new Station({
    name: "北野",
    pron: "きたの",
    pr: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.keiou.takao],
  }),
  [STATION_IDS.keiou.keio_hachioji]: new Station({
    name: "京王八王子",
    pron: "けいおうはちおうじ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_katakura]: new Station({
    name: "京王片倉",
    pron: "けいおうかたくら",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.yamada]: new Station({
    name: "山田",
    pron: "やまだ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.mejirodai]: new Station({
    name: "めじろ台",
    pron: "めじろだい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.hazama]: new Station({
    name: "狭間",
    pron: "はざま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keiou.takao_yamaguchi]: new Station({
    name: "高尾山口",
    pron: "たかおやまぐち",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.keiou.takao,
      new ExchangeInfo(
        LINE_IDS.takao_tozan.takao_tozan_cable,
        STATION_IDS.takao_tozan.kiyotaki
      ),
    ],
  }),
  // > 京王新線
  [STATION_IDS.keiou.hatsudai]: new StationInfo("初台", [], "はつだい"),
  [STATION_IDS.keiou.hatagaya]: new StationInfo("幡ヶ谷", [], "はたがや"),
  // > 京王井の頭線
  [STATION_IDS.keiou.shinsen]: new StationInfo("神泉", [], "しんせん"),
  [STATION_IDS.keiou.komaba_todaimae]: new StationInfo(
    "駒場東大前",
    [],
    "こまばとうだいまえ"
  ),
  [STATION_IDS.keiou.ikenoue]: new StationInfo("池ノ上", [], "いけのうえ"),
  [STATION_IDS.keiou.shindaita]: new StationInfo("新代田", [], "しんだいた"),
  [STATION_IDS.keiou.higashi_matsubara]: new StationInfo(
    "東松原",
    [],
    "ひがしまつばら"
  ),
  [STATION_IDS.keiou.eifukucho]: new StationInfo(
    "永福町",
    [],
    "えいふくちょう"
  ),
  [STATION_IDS.keiou.nishi_eifuku]: new StationInfo(
    "西永福",
    [],
    "にしえいふく"
  ),
  [STATION_IDS.keiou.hamadayama]: new StationInfo("浜田山", [], "はまだやま"),
  [STATION_IDS.keiou.takaido]: new StationInfo("高井戸", [], "たかいど"),
  [STATION_IDS.keiou.fujimigaoka]: new StationInfo(
    "富士見ヶ丘",
    [],
    "ふじみがおか"
  ),
  [STATION_IDS.keiou.kugayama]: new StationInfo("久我山", [], "くがやま"),
  [STATION_IDS.keiou.mitakadai]: new StationInfo("三鷹台", [], "みたかだい"),
  [STATION_IDS.keiou.inokashirakoen]: new StationInfo(
    "井の頭公園",
    [],
    "いのかしどうこうえん"
  ),
  //  #endregion 京王電鉄
  //   #region 東急
  // ＞田園都市線
  [STATION_IDS.toukyu.ikejiriohashi]: new StationInfo(
    "池尻大橋",
    NO_TRANSFER,
    "いけじりおおはし"
  ),
  [STATION_IDS.toukyu.sangenjaya]: new StationInfo(
    "三軒茶屋",
    [LINE_IDS.toukyu.denentoshi, LINE_IDS.toukyu.setagaya],
    "さんげんじゃや"
  ),
  [STATION_IDS.toukyu.komazawadaigaku]: new StationInfo(
    "駒沢大学",
    NO_TRANSFER,
    "こまざわだいがく"
  ),
  [STATION_IDS.toukyu.sakurashinmachi]: new StationInfo(
    "桜新町",
    NO_TRANSFER,
    "さくらしんまち"
  ),
  [STATION_IDS.toukyu.yoga]: new StationInfo("用賀", NO_TRANSFER, "ようが"),
  [STATION_IDS.toukyu.futakotamagawa]: new StationInfo(
    "二子玉川",
    [LINE_IDS.toukyu.denentoshi, LINE_IDS.toukyu.oimachi],
    "ふたこたまがわ"
  ),
  [STATION_IDS.toukyu.futako_shinchi]: new StationInfo(
    "二子新地",
    NO_TRANSFER,
    "ふたこしんち"
  ),
  [STATION_IDS.toukyu.takatsu]: new StationInfo("高津", NO_TRANSFER, "たかつ"),
  [STATION_IDS.toukyu.kajigaya]: new StationInfo(
    "梶が谷",
    NO_TRANSFER,
    "かじがや"
  ),
  [STATION_IDS.toukyu.miyazakidai]: new StationInfo(
    "宮崎台",
    NO_TRANSFER,
    "みやざきだい"
  ),
  [STATION_IDS.toukyu.miyamaedaira]: new StationInfo(
    "宮前平",
    NO_TRANSFER,
    "みやまえだいら"
  ),
  [STATION_IDS.toukyu.washinuma]: new StationInfo(
    "鷲沼",
    NO_TRANSFER,
    "わしぬま"
  ),
  [STATION_IDS.toukyu.tama_plaza]: new StationInfo(
    "たまプラーザ",
    NO_TRANSFER,
    "たまぷらーざ"
  ),
  [STATION_IDS.toukyu.azamino]: new StationInfo(
    "あざみ野",
    [LINE_IDS.toukyu.denentoshi, LINE_IDS.yokohama_subway.blue_line],
    "あざみの"
  ),
  [STATION_IDS.toukyu.eda]: new StationInfo("江田", NO_TRANSFER, "えだ"),
  [STATION_IDS.toukyu.ichigao]: new StationInfo(
    "市が尾",
    NO_TRANSFER,
    "いちがお"
  ),
  [STATION_IDS.toukyu.fujigaoka]: new StationInfo(
    "藤が丘",
    NO_TRANSFER,
    "ふじがおか"
  ),
  [STATION_IDS.toukyu.aobadai]: new StationInfo(
    "青葉台",
    NO_TRANSFER,
    "あおばだい"
  ),
  [STATION_IDS.toukyu.tana]: new StationInfo("田奈", NO_TRANSFER, "たな"),
  [STATION_IDS.toukyu.tsukushino]: new StationInfo(
    "つくし野",
    NO_TRANSFER,
    "つくしの"
  ),
  [STATION_IDS.toukyu.suzukakedai]: new StationInfo(
    "すずかけ台",
    NO_TRANSFER,
    "すずかけだい"
  ),
  [STATION_IDS.toukyu.minamimachida_grandberry_park]: new StationInfo(
    "南町田グランベリーパーク",
    NO_TRANSFER,
    "みなみまちだぐらんべりーぱーく"
  ),
  [STATION_IDS.toukyu.tsukimino]: new StationInfo(
    "つきみ野",
    NO_TRANSFER,
    "つきみの"
  ),
  [STATION_IDS.toukyu.mizonokuchi]: new StationInfo(
    "溝の口",
    [
      new ExchangeInfo(
        LINE_IDS.jr_east.nanbu,
        STATION_IDS.jr_east.musashimizonokuchi
      ),
      LINE_IDS.toukyu.oimachi,
      LINE_IDS.toukyu.denentoshi,
    ],
    "みぞのくち"
  ),
  // ＞多摩川線
  [STATION_IDS.toukyu.tamagawa]: new StationInfo(
    "多摩川",
    [LINE_IDS.toukyu.tamagawa, LINE_IDS.toukyu.touyoko, LINE_IDS.toukyu.meguro],
    "たまがわ"
  ),
  [STATION_IDS.toukyu.numabe]: new StationInfo("沼部", NO_TRANSFER, "ぬまべ"),
  [STATION_IDS.toukyu.unoki]: new StationInfo("鵜の木", NO_TRANSFER, "うのき"),
  [STATION_IDS.toukyu.simomaruko]: new StationInfo(
    "下丸子",
    NO_TRANSFER,
    "しもまるこ"
  ),
  [STATION_IDS.toukyu.musashishinden]: new StationInfo(
    "武蔵新田",
    NO_TRANSFER,
    "むさししんでん"
  ),
  [STATION_IDS.toukyu.yagutiwatashi]: new StationInfo(
    "矢口渡",
    NO_TRANSFER,
    "やぐちわたし"
  ),
  // 大井町線
  [STATION_IDS.toukyu.shimoshinmei]: new StationInfo(
    "下神明",
    NO_TRANSFER,
    "しもしんめい"
  ),
  [STATION_IDS.toukyu.togoshikouen]: new StationInfo(
    "戸越公園",
    NO_TRANSFER,
    "とごしこうえん"
  ),
  [STATION_IDS.toukyu.nakanobe]: new StationInfo(
    "中延",
    [LINE_IDS.toukyu.oimachi, LINE_IDS.tokyo_subway.asakusa],
    "なかのべ"
  ),
  [STATION_IDS.toukyu.ebaracho]: new StationInfo(
    "荏原町",
    NO_TRANSFER,
    "えばらちょう"
  ),
  [STATION_IDS.toukyu.hatanodai]: new StationInfo(
    "旗の台",
    [LINE_IDS.toukyu.oimachi, LINE_IDS.toukyu.ikegami],
    "はたのだい"
  ),
  [STATION_IDS.toukyu.kitasenzoku]: new StationInfo(
    "北千束",
    [],
    "きたせんぞく"
  ),
  [STATION_IDS.toukyu.ookayama]: new StationInfo(
    "大岡山",
    [LINE_IDS.toukyu.oimachi, LINE_IDS.toukyu.meguro],
    "おおかやま"
  ),
  [STATION_IDS.toukyu.midorigaoka]: new StationInfo(
    "緑が丘",
    NO_TRANSFER,
    "みどりがおか"
  ),
  [STATION_IDS.toukyu.jiyugaoka]: new StationInfo(
    "自由が丘",
    [LINE_IDS.toukyu.oimachi, LINE_IDS.toukyu.touyoko],
    "じゆうがおか"
  ),
  [STATION_IDS.toukyu.kuhonbutsu]: new StationInfo(
    "九品仏",
    NO_TRANSFER,
    "くほんぶつ"
  ),
  [STATION_IDS.toukyu.oyamadai]: new StationInfo(
    "尾山台",
    NO_TRANSFER,
    "おやまだい"
  ),
  [STATION_IDS.toukyu.todoroki]: new StationInfo(
    "等々力",
    NO_TRANSFER,
    "とどろき"
  ),
  [STATION_IDS.toukyu.kaminoge]: new StationInfo(
    "上野毛",
    NO_TRANSFER,
    "かみのげ"
  ),
  // 目黒線
  [STATION_IDS.toukyu.fudomae]: new StationInfo(
    "不動前",
    NO_TRANSFER,
    "ふどうまえ"
  ),
  [STATION_IDS.toukyu.musashikoyama]: new StationInfo(
    "武蔵小山",
    NO_TRANSFER,
    "むさしこやま"
  ),
  [STATION_IDS.toukyu.nishikoyama]: new StationInfo(
    "西小山",
    NO_TRANSFER,
    "にしこやま"
  ),
  [STATION_IDS.toukyu.senzoku]: new StationInfo(
    "洗足",
    NO_TRANSFER,
    "せんぞく"
  ),
  [STATION_IDS.toukyu.okuzawa]: new StationInfo(
    "奥沢",
    NO_TRANSFER,
    "おくざわ"
  ),
  [STATION_IDS.toukyu.denenchohu]: new StationInfo(
    "田園調布",
    [LINE_IDS.toukyu.denentoshi, LINE_IDS.toukyu.touyoko],
    "でんえんちょうふ"
  ),
  [STATION_IDS.toukyu.shinmaruko]: new StationInfo(
    "新丸子",
    [LINE_IDS.toukyu.meguro, LINE_IDS.toukyu.touyoko],
    "しんまるこ"
  ),
  [STATION_IDS.toukyu.motosumiyoshi]: new StationInfo(
    "元住吉",
    NO_TRANSFER,
    "もとすみよし"
  ),
  [STATION_IDS.toukyu.shin_tsunashima]: new StationInfo(
    "新綱島",
    NO_TRANSFER,
    "しんつなしま"
  ),
  // 東横線
  [STATION_IDS.toukyu.daikanyama]: new StationInfo(
    "代官山",
    NO_TRANSFER,
    "だいかんやま"
  ),
  [STATION_IDS.toukyu.yutenji]: new StationInfo(
    "祐天寺",
    NO_TRANSFER,
    "ゆうてんじ"
  ),
  [STATION_IDS.toukyu.gakugei_daigaku]: new StationInfo(
    "学芸大学",
    NO_TRANSFER,
    "がくげいだいがく"
  ),
  [STATION_IDS.toukyu.toritsu_daigaku]: new StationInfo(
    "都立大学",
    NO_TRANSFER,
    "とりつだいがく"
  ),
  [STATION_IDS.toukyu.tsunashima]: new StationInfo(
    "綱島",
    NO_TRANSFER,
    "つなしま"
  ),
  [STATION_IDS.toukyu.okurayama]: new StationInfo(
    "大倉山",
    NO_TRANSFER,
    "おおくらやま"
  ),
  [STATION_IDS.toukyu.myourenji]: new StationInfo(
    "妙蓮寺",
    NO_TRANSFER,
    "みょうれんじ"
  ),
  [STATION_IDS.toukyu.hakuraku]: new StationInfo(
    "白楽",
    NO_TRANSFER,
    "はくらく"
  ),
  [STATION_IDS.toukyu.higashi_hakuraku]: new StationInfo(
    "東白楽",
    NO_TRANSFER,
    "ひがしばくらく"
  ),
  [STATION_IDS.toukyu.tanmachi]: new StationInfo(
    "反町",
    NO_TRANSFER,
    "たんまち"
  ),
  // 池上線
  [STATION_IDS.toukyu.osaki_hirokoji]: new StationInfo(
    "大崎広小路",
    NO_TRANSFER,
    "おおさきひろこうじ"
  ),
  [STATION_IDS.toukyu.togoshi_ginza]: new StationInfo(
    "戸越銀座",
    NO_TRANSFER,
    "とごしぎんざ"
  ),
  [STATION_IDS.toukyu.ebara_nakanobu]: new StationInfo(
    "荏原中延",
    NO_TRANSFER,
    "えばらなかのべ"
  ),
  [STATION_IDS.toukyu.nagahara]: new StationInfo(
    "長原",
    NO_TRANSFER,
    "ながはら"
  ),
  [STATION_IDS.toukyu.senzokuike]: new StationInfo(
    "洗足池",
    NO_TRANSFER,
    "せんぞくいけ"
  ),
  [STATION_IDS.toukyu.ishikawadai]: new StationInfo(
    "石川台",
    NO_TRANSFER,
    "いしかわだい"
  ),
  [STATION_IDS.toukyu.yukigaya_otsuka]: new StationInfo(
    "雪が谷大塚",
    NO_TRANSFER,
    "ゆきがやおおつか"
  ),
  [STATION_IDS.toukyu.mitakeyama]: new StationInfo(
    "御嶽山",
    NO_TRANSFER,
    "みたけやま"
  ),
  [STATION_IDS.toukyu.kugahara]: new StationInfo(
    "久が原",
    NO_TRANSFER,
    "くがはら"
  ),
  [STATION_IDS.toukyu.chidoricho]: new StationInfo(
    "千鳥町",
    NO_TRANSFER,
    "ちどりちょう"
  ),
  [STATION_IDS.toukyu.ikegami]: new StationInfo(
    "池上",
    NO_TRANSFER,
    "いけがみ"
  ),
  [STATION_IDS.toukyu.hasunuma]: new StationInfo(
    "蓮沼",
    NO_TRANSFER,
    "はすぬま"
  ),
  // 世田谷線
  [STATION_IDS.toukyu.kamimachi]: new StationInfo(
    "上町",
    NO_TRANSFER,
    "かみまち"
  ),
  [STATION_IDS.toukyu.miyanosaka]: new StationInfo(
    "宮の坂",
    NO_TRANSFER,
    "みやのさか"
  ),
  [STATION_IDS.toukyu.yamashita]: new StationInfo(
    "山下",
    [LINE_IDS.toukyu.setagaya, LINE_IDS.odakyu.odawara],
    "やました"
  ),
  [STATION_IDS.toukyu.matsubara]: new StationInfo(
    "松原",
    NO_TRANSFER,
    "まつばら"
  ),
  [STATION_IDS.toukyu.nishitaishidou]: new StationInfo(
    "西太子堂",
    NO_TRANSFER,
    "にしたいしどう"
  ),
  [STATION_IDS.toukyu.wakabayashi]: new StationInfo(
    "若林",
    NO_TRANSFER,
    "わかばやし"
  ),
  [STATION_IDS.toukyu.syouinjinjamae]: new StationInfo(
    "松陰神社前",
    NO_TRANSFER,
    "しょういんじんじゃまえ"
  ),
  [STATION_IDS.toukyu.setagaya]: new StationInfo(
    "世田谷",
    NO_TRANSFER,
    "せたがや"
  ),
  [STATION_IDS.toukyu.onda]: new StationInfo("恩田", NO_TRANSFER, "おんだ"),
  [STATION_IDS.toukyu.kodomonokuni]: new StationInfo(
    "こどもの国",
    NO_TRANSFER,
    "こどものくに"
  ),
  //   #endregion 東急
  //   #region 東武鉄道
  // ＞東上線
  [STATION_IDS.toubu.kita_ikebukuro]: new StationInfo(
    "北池袋",
    [],
    "きたいけぶくろ"
  ),
  [STATION_IDS.toubu.narimasu]: new StationInfo(
    "成増",
    [
      LINE_IDS.toubu.toujou,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.yurakucho,
        STATION_IDS.tokyo_metro.chikatetsu_narimasu
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.fukutoshin,
        STATION_IDS.tokyo_metro.chikatetsu_narimasu
      ),
    ],
    "いけぶくろ"
  ),
  [STATION_IDS.toubu.shimoitabashi]: new StationInfo(
    "下板橋",
    [],
    "しもいたばし"
  ),
  [STATION_IDS.toubu.oyama]: new StationInfo("大山", [], "おおやま"),
  [STATION_IDS.toubu.nakaitabashi]: new StationInfo(
    "中板橋",
    [],
    "なかいたばし"
  ),
  [STATION_IDS.toubu.tokiwadai]: new StationInfo("ときわ台", [], "ときわだい"),
  [STATION_IDS.toubu.kamiitabashi]: new StationInfo(
    "上板橋",
    [],
    "かみいたばし"
  ),
  [STATION_IDS.toubu.toubu_nerima]: new StationInfo(
    "東武練馬",
    [],
    "とうぶねりま"
  ),
  [STATION_IDS.toubu.shimoakatsuka]: new StationInfo(
    "下赤塚",
    [
      LINE_IDS.toubu.toujou,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.yurakucho,
        STATION_IDS.tokyo_metro.chikatetsu_akatsuka
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.fukutoshin,
        STATION_IDS.tokyo_metro.chikatetsu_akatsuka
      ),
    ],
    "しもあかつか"
  ),
  [STATION_IDS.toubu.asaka]: new StationInfo("朝霞", [], "あさか"),
  [STATION_IDS.toubu.asakadai]: new StationInfo(
    "朝霞台",
    [
      LINE_IDS.toubu.toujou,
      new ExchangeInfo(
        LINE_IDS.jr_east.musashino,
        STATION_IDS.jr_east.kita_asaka
      ),
    ],
    "あさかだい"
  ),
  [STATION_IDS.toubu.shigi]: new StationInfo("志木", [], "しぎ"),
  [STATION_IDS.toubu.yanasegawa]: new StationInfo("柳瀬川", [], "やなせがわ"),
  [STATION_IDS.toubu.mizuhodai]: new StationInfo("みずほ台", [], "みずほだい"),
  [STATION_IDS.toubu.tsuruse]: new StationInfo("鶴瀬", [], "つるせ"),
  [STATION_IDS.toubu.fujimino]: new StationInfo("ふじみ野", [], "ふじみの"),
  [STATION_IDS.toubu.kamihukuoka]: new StationInfo(
    "上福岡",
    [],
    "かみふくおか"
  ),
  [STATION_IDS.toubu.shinkawagashi]: new StationInfo(
    "新川岸",
    [],
    "しんかわがし"
  ),
  [STATION_IDS.toubu.kawagoeshi]: new StationInfo("川越市", [], "かわごえし"),
  [STATION_IDS.toubu.kasumigaseki]: new StationInfo(
    "霞ヶ関",
    [],
    "かすみがせき"
  ),
  [STATION_IDS.toubu.tsurugashima]: new StationInfo("鶴ヶ島", [], "つるがしま"),
  [STATION_IDS.toubu.wakaba]: new StationInfo("若葉", [], "わかば"),
  [STATION_IDS.toubu.sakato]: new StationInfo(
    "坂戸",
    [LINE_IDS.toubu.toujou, LINE_IDS.toubu.ogose],
    "さかと"
  ),
  [STATION_IDS.toubu.kita_sakato]: new StationInfo("北坂戸", [], "きたさかと"),
  [STATION_IDS.toubu.kousaka]: new StationInfo("高坂", [], "こうさか"),
  [STATION_IDS.toubu.higashi_matsuyama]: new StationInfo(
    "東松山",
    [],
    "ひがしまつやま"
  ),
  [STATION_IDS.toubu.shinrin_koen]: new StationInfo(
    "森林公園",
    [],
    "しんりんこうえん"
  ),
  [STATION_IDS.toubu.tsukinowa]: new StationInfo("つきのわ", [], "つきのわ"),
  [STATION_IDS.toubu.musashi_arashiyama]: new StationInfo(
    "武蔵嵐山",
    [],
    "むさしあらしやま"
  ),
  [STATION_IDS.toubu.ogawamachi]: new StationInfo(
    "小川町",
    [LINE_IDS.toubu.toujou, LINE_IDS.jr_east.hachiko],
    "おがわまち"
  ),
  [STATION_IDS.toubu.toubu_takezawa]: new StationInfo(
    "東武竹沢",
    [],
    "とうぶたけざわ"
  ),
  [STATION_IDS.toubu.minami_yorii]: new StationInfo(
    "みなみ寄居",
    [],
    "みなみよりい"
  ),
  [STATION_IDS.toubu.dankin]: new StationInfo("男衾", [], "だんきん"),
  [STATION_IDS.toubu.hachigata]: new StationInfo("鉢形", [], "はちがた"),
  [STATION_IDS.toubu.tamayodo]: new StationInfo("玉淀", [], "たまよど"),
  [STATION_IDS.toubu.yorii]: new StationInfo(
    "寄居",
    [
      LINE_IDS.toubu.toujou,
      LINE_IDS.jr_east.hachiko,
      LINE_IDS.chichibu.chichibu,
    ],
    "よりい"
  ),
  // アーバンパークライン
  [STATION_IDS.toubu.kita_omiya]: new StationInfo("北大宮", [], "きたおおみや"),
  [STATION_IDS.toubu.omiya_koen]: new StationInfo(
    "大宮公園",
    [],
    "おおみやこうえん"
  ),
  [STATION_IDS.toubu.owada]: new StationInfo("大和田", [], "おおわだ"),
  [STATION_IDS.toubu.nanasato]: new StationInfo("七里", [], "ななさと"),
  [STATION_IDS.toubu.iwatsuki]: new StationInfo("岩槻", [], "いわつき"),
  [STATION_IDS.toubu.higashi_iwatsuki]: new StationInfo(
    "東岩槻",
    [],
    "ひがしいわつき"
  ),
  [STATION_IDS.toubu.toyoharu]: new StationInfo("豊春", [], "とよはる"),
  [STATION_IDS.toubu.yagisaki]: new StationInfo("八木崎", [], "やぎさき"),
  [STATION_IDS.toubu.kasukabe]: new StationInfo(
    "春日部",
    [LINE_IDS.toubu.urban_park_line, LINE_IDS.toubu.isezaki],
    "かすかべ"
  ),
  [STATION_IDS.toubu.fujinoushijima]: new StationInfo(
    "藤の牛島",
    [],
    "ふじのうしじま"
  ),
  [STATION_IDS.toubu.minami_sakurai]: new StationInfo(
    "南桜井",
    [],
    "みなみさくらい"
  ),
  [STATION_IDS.toubu.kawama]: new StationInfo("川間", [], "かわま"),
  [STATION_IDS.toubu.nanakoudai]: new StationInfo("七光台", [], "ななこうだい"),
  [STATION_IDS.toubu.shimizu_koen]: new StationInfo(
    "清水公園",
    [],
    "しみずこうえん"
  ),
  [STATION_IDS.toubu.atago]: new StationInfo("愛宕", [], "あたご"),
  [STATION_IDS.toubu.nodashi]: new StationInfo("野田市", [], "のだし"),
  [STATION_IDS.toubu.umesato]: new StationInfo("梅郷", [], "うめさと"),
  [STATION_IDS.toubu.unga]: new StationInfo("運河", [], "うんが"),
  [STATION_IDS.toubu.edogawadai]: new StationInfo(
    "江戸川台",
    [],
    "えどがわだい"
  ),
  [STATION_IDS.toubu.hatsuishi]: new StationInfo("初石", [], "はついし"),
  [STATION_IDS.toubu.toyoshiki]: new StationInfo("豊四季", [], "とよしき"),
  [STATION_IDS.toubu.shin_kashiwa]: new StationInfo("新柏", [], "しんかしわ"),
  [STATION_IDS.toubu.masuo]: new StationInfo("増尾", [], "ますお"),
  [STATION_IDS.toubu.sakasai]: new StationInfo("逆井", [], "さかさい"),
  [STATION_IDS.toubu.takayanagi]: new StationInfo("高柳", [], "たかやなぎ"),
  [STATION_IDS.toubu.mutsumi]: new StationInfo("六実", [], "むつみ"),
  [STATION_IDS.toubu.kamagaya]: new StationInfo("鎌ヶ谷", [], "かまがや"),
  [STATION_IDS.toubu.magomesawa]: new StationInfo("馬込沢", [], "まごめざわ"),
  [STATION_IDS.toubu.tsukada]: new StationInfo("塚田", [], "つかだ"),
  [STATION_IDS.toubu.shin_funabashi]: new StationInfo(
    "新船橋",
    [
      LINE_IDS.toubu.urban_park_line,
      new ExchangeInfo(
        LINE_IDS.toubu.touyou_kousoku,
        STATION_IDS.toubu.higashi_kaijin
      ),
    ],
    "しんふなばし"
  ),
  [STATION_IDS.toubu.sakado]: new StationInfo(
    "坂戸",
    [LINE_IDS.toubu.toujou, LINE_IDS.toubu.ogose],
    "さかど"
  ),
  [STATION_IDS.toubu.ipponmatsu]: new StationInfo(
    "一本松",
    NO_TRANSFER,
    "いっぽんまつ"
  ),
  [STATION_IDS.toubu.nishi_oya]: new StationInfo(
    "西大家",
    NO_TRANSFER,
    "にしおおや"
  ),
  [STATION_IDS.toubu.kawakado]: new StationInfo(
    "川角",
    NO_TRANSFER,
    "かわかど"
  ),
  [STATION_IDS.toubu.busyu_nagase]: new StationInfo(
    "武州長瀬",
    NO_TRANSFER,
    "ぶしゅうながせ"
  ),
  [STATION_IDS.toubu.higashi_moro]: new StationInfo(
    "東毛呂",
    NO_TRANSFER,
    "ひがしもろ"
  ),
  [STATION_IDS.toubu.busyu_karasawa]: new StationInfo(
    "武州唐沢",
    NO_TRANSFER,
    "ぶしゅうからさわ"
  ),
  [STATION_IDS.toubu.ogose]: new StationInfo(
    "越生",
    [LINE_IDS.toubu.ogose, LINE_IDS.jr_east.hachiko],
    "おごせ"
  ),
  // 亀戸線
  [STATION_IDS.toubu.hikifune]: new StationInfo(
    "曳舟",
    [LINE_IDS.toubu.kameido, LINE_IDS.toubu.isezaki],
    "ひきふね"
  ),
  [STATION_IDS.toubu.omurai]: new StationInfo(
    "小村井",
    NO_TRANSFER,
    "おむらい"
  ),
  [STATION_IDS.toubu.higashi_azuma]: new StationInfo(
    "東あずま",
    NO_TRANSFER,
    "ひがしあずま"
  ),
  [STATION_IDS.toubu.kameido_suijin]: new StationInfo(
    "亀戸水神",
    NO_TRANSFER,
    "かめいどすいじん"
  ),
  // スカイツリーライン
  [STATION_IDS.toubu.tokyo_skytree]: new StationInfo(
    "とうきょうスカイツリー",
    [],
    "とうきょうすかいつりー"
  ),
  [STATION_IDS.toubu.higashi_mukoujima]: new StationInfo(
    "東向島",
    [],
    "ひがしむこうじま"
  ),
  [STATION_IDS.toubu.kanegafuchi]: new StationInfo("鐘ヶ淵", [], "かねがふち"),
  [STATION_IDS.toubu.horikiri]: new StationInfo("堀切", [], "ほりきり"),
  [STATION_IDS.toubu.ushida]: new StationInfo("牛田", [], "うしだ"),
  [STATION_IDS.toubu.kosuga]: new StationInfo("小菅", [], "こすが"),
  [STATION_IDS.toubu.gotanno]: new StationInfo("五反野", [], "ごたんの"),
  [STATION_IDS.toubu.umejima]: new StationInfo("梅島", [], "うめじま"),
  [STATION_IDS.toubu.nishi_arai]: new StationInfo(
    "西新井",
    [LINE_IDS.toubu.isezaki, LINE_IDS.toubu.daishi],
    "にしあらい"
  ),
  [STATION_IDS.toubu.takenotsuka]: new StationInfo("竹ノ塚", [], "たけのつか"),
  [STATION_IDS.toubu.tanitsuka]: new StationInfo("谷塚", [], "たにつか"),
  [STATION_IDS.toubu.souka]: new StationInfo("草加", [], "そうか"),
  [STATION_IDS.toubu.dokkyoudaigakumae]: new StationInfo(
    "獨協大学前",
    [],
    "どっきょうだいがくまえ"
  ),
  [STATION_IDS.toubu.shinden]: new StationInfo("新田", [], "しんでん"),
  [STATION_IDS.toubu.gamou]: new StationInfo("蒲生", [], "がもう"),
  [STATION_IDS.toubu.koshigaya]: new StationInfo("越谷", [], "こしがや"),
  [STATION_IDS.toubu.shin_koshigaya]: new StationInfo(
    "新越谷",
    [],
    "しんこしがや"
  ),
  [STATION_IDS.toubu.kita_koshigaya]: new StationInfo(
    "北越谷",
    [],
    "きたこしがや"
  ),
  [STATION_IDS.toubu.obukuro]: new StationInfo("大袋", [], "おおぶくろ"),
  [STATION_IDS.toubu.sengendai]: new StationInfo(
    "せんげん台",
    [],
    "せんげんだい"
  ),
  [STATION_IDS.toubu.takesato]: new StationInfo("武里", [], "たけさと"),
  [STATION_IDS.toubu.ichinowari]: new StationInfo("一ノ割", [], "いちのわり"),
  [STATION_IDS.toubu.kita_kasukabe]: new StationInfo(
    "北春日部",
    [],
    "きたかすかべ"
  ),
  [STATION_IDS.toubu.himemiya]: new Station({name: "姫宮", pron: "ひめみや", pr: P.SAITAMA}),
  [STATION_IDS.toubu.toubu_doubutsu_kouen]: new Station({
    name: "東武動物公園",
    pron: "とうぶどうぶつこうえん",
    pr: P.SAITAMA,
    lines: [LINE_IDS.toubu.isezaki, LINE_IDS.toubu.nikkou],
  }),
  [STATION_IDS.toubu.wado]: new Station({name: "和戸", pron: "わど", pr: P.SAITAMA}),
  [STATION_IDS.toubu.washinomiya]: new StationInfo("鷲宮", [], "わしのみや"),
  [STATION_IDS.toubu.hanasaki]: new StationInfo("花崎", [], "はなさき"),
  [STATION_IDS.toubu.kasu]: new StationInfo("加須", [], "かす"),
  [STATION_IDS.toubu.minami_hanyu]: new StationInfo(
    "南羽生",
    [],
    "みなみはにゅう"
  ),
  [STATION_IDS.toubu.kawamata]: new StationInfo("川俣", [], "かわまた"),
  [STATION_IDS.toubu.morinjimae]: new StationInfo(
    "茂林寺前",
    [],
    "もりんじまえ"
  ),
  [STATION_IDS.toubu.tatebayashi]: new StationInfo(
    "館林",
    [LINE_IDS.toubu.isezaki, LINE_IDS.toubu.sano, LINE_IDS.toubu.koizumi],
    "たてばやし"
  ),
  [STATION_IDS.toubu.tatara]: new StationInfo("多々良", [], "たたら"),
  [STATION_IDS.toubu.agata]: new StationInfo("県", [], "あがた"),
  [STATION_IDS.toubu.fukui]: new StationInfo("福居", [], "ふくい"),
  [STATION_IDS.toubu.toubu_izumi]: new StationInfo(
    "東武泉",
    [],
    "とうぶいずみ"
  ),
  [STATION_IDS.toubu.ashikagashi]: new StationInfo("足利市", [], "あしかがし"),
  [STATION_IDS.toubu.yasyu_yamabe]: new StationInfo(
    "野州山辺",
    [],
    "やしゅうやまべ"
  ),
  [STATION_IDS.toubu.niragawa]: new StationInfo("韮川", [], "にらがわ"),
  [STATION_IDS.toubu.ota]: new StationInfo(
    "太田",
    [LINE_IDS.toubu.isezaki, LINE_IDS.toubu.kiryu, LINE_IDS.toubu.koizumi],
    "おおた"
  ),
  [STATION_IDS.toubu.hosoya]: new Station({name: "細谷", pron: "ほそや", pr: P.TOCHIGI}),
  [STATION_IDS.toubu.kizaki]: new Station({name: "木崎", pron: "きざき", pr: P.TOCHIGI}),
  [STATION_IDS.toubu.serada]: new Station({name: "世良田", pron: "せらだ", pr: P.TOCHIGI}),
  [STATION_IDS.toubu.sakaimachi]: new Station({name: "境町", pron: "さかいまち", pr: P.TOCHIGI}),
  [STATION_IDS.toubu.goushi]: new Station({name: "剛志", pron: "ごうし", pr: P.TOCHIGI}),
  [STATION_IDS.toubu.shin_isezaki]: new Station({name: "新伊勢崎", pron: "しんいせざき", pr: P.TOCHIGI}),
  // 鬼怒川線
  [STATION_IDS.toubu.shimo_imachi]: new Station({
    name: "下今市",
    pron: "しもいまいち",
    pr: P.TOCHIGI,
    lines: [ LINE_IDS.toubu.kinugawa, LINE_IDS.toubu.nikkou ],
  }),
  [STATION_IDS.toubu.daiyamukou]: new Station({
    name: "大谷向",
    pron: "だいやむこう",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.okuwa]: new Station({
    name: "大桑",
    pron: "おおくわ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_takatoku]: new Station({
    name: "新高徳",
    pron: "しんたかとく",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kosagoe]: new Station({
    name: "小佐越",
    pron: "こさごえ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.toubu_world_square]: new Station({
    name: "東武ワールドスクウェア",
    pron: "とうぶわーるどすくうえあ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kinugawa_onsen]: new Station({
    name: "鬼怒川温泉",
    pron: "きぬがわおんせん",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kinugawa_kouen]: new Station({
    name: "鬼怒川公園",
    pron: "きぬがわこうえん",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_fujiwara]: new Station({
    name: "新藤原",
    pron: "しんふじわら",
    pr: P.TOCHIGI,
    lines: [
      LINE_IDS.toubu.kinugawa,
      LINE_IDS.yagan.aidu_kinugawa,
    ]
  }),
  [STATION_IDS.toubu.sugitotakanodai]: new Station({
    name: "杉戸高野台",
    pron: "すぎとたかのだい",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.satte]: new Station({
    name: "幸手",
    pron: "さって",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.minami_kurihashi]: new Station({
    name: "南栗橋",
    pron: "みなみくりはし",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_koga]: new Station({
    name: "新古河",
    pron: "しんこが",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.yagyu]: new Station({
    name: "柳生",
    pron: "やぎゅう",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.itakuratouyoudaimae]: new Station({
    name: "板倉東洋大前",
    pron: "いたくらとうようだいまえ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.fujioka]: new Station({
    name: "藤岡",
    pron: "ふじおか",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shizuwa]: new Station({
    name: "静和",
    pron: "しずわ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_ohirashita]: new Station({
    name: "新大平下",
    pron: "しんおおひらした",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_tochigi]: new Station({
    name: "新栃木",
    pron: "しんとちぎ",
    pr: P.SAITAMA,
    lines: [ LINE_IDS.toubu.nikkou, LINE_IDS.toubu.utsunomiya ],
  }),
  [STATION_IDS.toubu.kassenba]: new Station({
    name: "合戦場",
    pron: "かっせんば",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.ienaka]: new Station({
    name: "家中",
    pron: "いえなか",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.toubu_kanasaki]: new Station({
    name: "東武金崎",
    pron: "とうぶかなさき",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.niregi]: new Station({
    name: "楡木",
    pron: "にれぎ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.momiyama]: new Station({
    name: "籾山",
    pron: "もみやま",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_kanuma]: new Station({
    name: "新鹿沼",
    pron: "しんかぬま",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kita_kanuma]: new Station({
    name: "北鹿沼",
    pron: "きたかぬま",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.itaga]: new Station({
    name: "板荷",
    pron: "いたが",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shimokoshiro]: new Station({
    name: "下小代",
    pron: "しもごしろ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.myoujin]: new Station({
    name: "明神",
    pron: "みょうじん",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kami_imaichi]: new Station({
    name: "上今市",
    pron: "かみいまいち",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.toubu_nikko]: new Station({
    name: "東武日光",
    pron: "とうぶにっこう",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.toubu.yasyu_hirakawa]: new Station({
    name: "野州平川",
    pron: "やしゅうひらかわ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yasyu_otsuka]: new Station({
    name: "野州大塚",
    pron: "やしゅうおおつか",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.mibu]: new Station({
    name: "壬生",
    pron: "みぶ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kuniya]: new Station({
    name: "国谷",
    pron: "くにや",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.omochanomachi]: new Station({
    name: "おもちゃのまち",
    pron: "おもちゃのまち",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yasuduka]: new Station({
    name: "安塚",
    pron: "やすづか",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.nishi_kawada]: new Station({
    name: "西川田",
    pron: "にしかわだ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.esojima]: new Station({
    name: "江曽島",
    pron: "えそじま",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.minami_utsunomiya]: new Station({
    name: "南宇都宮",
    pron: "みなみうつのみや",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.toubu_utsunomiya]: new Station({
    name: "東武宇都宮",
    pron: "とうぶうつのみや",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.daishimae]: new Station({
    name: "大師前",
    pron: "だいしまえ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.watase]: new Station({
    name: "渡瀬",
    pron: "わたせ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.tajima]: new Station({
    name: "田島",
    pron: "たじま",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.sanoshi]: new Station({
    name: "佐野市",
    pron: "さのし",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.horigome]: new Station({
    name: "堀米",
    pron: "ほりごめ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yoshimizu]: new Station({
    name: "吉水",
    pron: "よしみず",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.tanuma]: new Station({
    name: "田沼",
    pron: "たぬま",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.tada]: new Station({
    name: "多田",
    pron: "ただ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kuzuu]: new Station({
    name: "葛生",
    pron: "くずう",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.sanmaibashi]: new Station({
    name: "三枚橋",
    pron: "さんまいばし",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.jiroenbashi]: new Station({
    name: "治良門橋",
    pron: "じろえんばし",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yabuduka]: new Station({
    name: "藪塚",
    pron: "やぶづか",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.azami]: new Station({
    name: "阿左美",
    pron: "あざみ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_kiryu]: new Station({
    name: "新桐生",
    pron: "しんきりゅう",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.aioi]: new Station({
    name: "相生",
    pron: "あいおい",
    pr: P.TOCHIGI,
    lines: [ LINE_IDS.toubu.kiryu, LINE_IDS.watarase_keikoku.watarase_keikoku ],
  }),
  [STATION_IDS.toubu.akagi]: new Station({
    name: "赤城",
    pron: "あかぎ",
    pr: P.TOCHIGI,
    lines: [ LINE_IDS.toubu.kiryu, LINE_IDS.joumou_denki.joumou_denki ],
  }),
  [STATION_IDS.toubu.narushima]: new Station({
    name: "成島",
    pron: "なるしま",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.hon_nakano]: new Station({
    name: "本中野",
    pron: "ほんなかの",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shinoduka]: new Station({
    name: "篠塚",
    pron: "しのづか",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.higashi_koizumi]: new Station({
    name: "東小泉",
    pron: "ひがしこいずみ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.koizumimachi]: new Station({
    name: "小泉町",
    pron: "こいずみまち",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.nishi_koizumi]: new Station({
    name: "西小泉",
    pron: "にしこいずみ",
    pr: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.ryumai]: new Station({
    name: "龍舞",
    pron: "りゅうまい",
    pr: P.TOCHIGI,
  }),

  //   #endregion 東武鉄道
  //  #endregion 東京
  //  #region 茨城
  //   #region 関東鉄道
  [STATION_IDS.kantou.nishi_toride]: new Station({name: "西取手", pron: "にしとりで", pr: P.IBARAKI}),
  [STATION_IDS.kantou.terahara]: new Station({name: "寺原", pron: "てらはら", pr: P.IBARAKI}),
  [STATION_IDS.kantou.shin_toride]: new Station({name: "新取手", pron: "しんとりで", pr: P.IBARAKI}),
  [STATION_IDS.kantou.yumemino]: new Station({name: "夢見野", pron: "ゆめみの", pr: P.IBARAKI}),
  [STATION_IDS.kantou.inatoi]: new Station({name: "稲戸井", pron: "いなとい", pr: P.IBARAKI}),
  [STATION_IDS.kantou.togashira]: new StationInfo(
    "戸頭",
    NO_TRANSFER,
    "とがしら"
  ),
  [STATION_IDS.kantou.minami_moriya]: new StationInfo(
    "南守谷",
    NO_TRANSFER,
    "みなみもりや"
  ),
  [STATION_IDS.kantou.shin_moriya]: new StationInfo(
    "新守谷",
    NO_TRANSFER,
    "しんもりや"
  ),
  [STATION_IDS.kantou.kokinu]: new StationInfo("小絹", NO_TRANSFER, "こきぬ"),
  [STATION_IDS.kantou.mitsukaidou]: new StationInfo(
    "水海道",
    NO_TRANSFER,
    "みつかいどう"
  ),
  [STATION_IDS.kantou.kita_mitsukaidou]: new StationInfo(
    "北水海道",
    NO_TRANSFER,
    "きたみつかいどう"
  ),
  [STATION_IDS.kantou.nakatsuma]: new StationInfo(
    "中妻",
    NO_TRANSFER,
    "なかつま"
  ),
  [STATION_IDS.kantou.mitsuma]: new StationInfo("三妻", NO_TRANSFER, "みつま"),
  [STATION_IDS.kantou.minami_ishige]: new StationInfo(
    "南石下",
    NO_TRANSFER,
    "みなみいしげ"
  ),
  [STATION_IDS.kantou.ishige]: new StationInfo("石下", NO_TRANSFER, "いしげ"),
  [STATION_IDS.kantou.tamamura]: new StationInfo(
    "玉村",
    NO_TRANSFER,
    "たまむら"
  ),
  [STATION_IDS.kantou.soudou]: new StationInfo("宗道", NO_TRANSFER, "そうどう"),
  [STATION_IDS.kantou.shimotsuma]: new StationInfo(
    "下妻",
    NO_TRANSFER,
    "しもつま"
  ),
  [STATION_IDS.kantou.daihou]: new StationInfo("大宝", NO_TRANSFER, "だいほう"),
  [STATION_IDS.kantou.tobanoe]: new StationInfo(
    "騰波ノ江",
    NO_TRANSFER,
    "とばのえ"
  ),
  [STATION_IDS.kantou.kurogo]: new StationInfo("黒子", NO_TRANSFER, "くろご"),
  [STATION_IDS.kantou.otagou]: new StationInfo(
    "太田郷",
    NO_TRANSFER,
    "おおたご"
  ),
  [STATION_IDS.kantou.ireji]: new StationInfo("入地", NO_TRANSFER, "いれじ"),
  [STATION_IDS.kantou.ryugasaki]: new StationInfo(
    "龍ヶ崎",
    NO_TRANSFER,
    "りゅうがさき"
  ),
  // #endregion 関東鉄道
  //   #region 首都圏新都市
  [STATION_IDS.shutoken_shintoshi.tsukuba]: new StationInfo(
    "つくば",
    [],
    "つくば"
  ),
  [STATION_IDS.shutoken_shintoshi.kenkyugakuen]: new StationInfo(
    "研究学園",
    [],
    "けんきゅうがくえん"
  ),
  [STATION_IDS.shutoken_shintoshi.banpakukinenkouen]: new StationInfo(
    "万博記念公園",
    [],
    "ばんぱくきねんこうえん"
  ),
  [STATION_IDS.shutoken_shintoshi.midorino]: new StationInfo(
    "みどりの",
    [],
    "みどりの"
  ),
  [STATION_IDS.shutoken_shintoshi.miraidaira]: new StationInfo(
    "みらい平",
    [],
    "みらいだいら"
  ),
  [STATION_IDS.shutoken_shintoshi.moriya]: new StationInfo(
    "守谷",
    [LINE_IDS.shutoken_shintoshi.tsukuba_express, LINE_IDS.kantou.jousou],
    "もりや"
  ),
  [STATION_IDS.shutoken_shintoshi.kashiwa_tanaka]: new StationInfo(
    "柏たなか",
    [],
    "かしわたなか"
  ),
  [STATION_IDS.shutoken_shintoshi.kashiwanoha_campus]: new StationInfo(
    "柏の葉キャンパス",
    [],
    "かしわのはきゃんぱす"
  ),
  [STATION_IDS.shutoken_shintoshi.nagareyama_otakanomori]: new StationInfo(
    "流山おおたかの森",
    [
      LINE_IDS.shutoken_shintoshi.tsukuba_express,
      LINE_IDS.toubu.urban_park_line,
    ],
    "ながれやまおおたかのもり"
  ),
  [STATION_IDS.shutoken_shintoshi.nagareyama_centralpark]: new StationInfo(
    "流山セントラルパーク",
    [],
    "ながれやませんとらるぱーく"
  ),
  [STATION_IDS.shutoken_shintoshi.sango_chuo]: new StationInfo(
    "三郷中央",
    [],
    "さんごうちゅうおう"
  ),
  [STATION_IDS.shutoken_shintoshi.yashio]: new StationInfo(
    "八潮",
    [],
    "やしお"
  ),
  [STATION_IDS.shutoken_shintoshi.rokucho]: new StationInfo(
    "六町",
    [],
    "ろくちょう"
  ),
  [STATION_IDS.shutoken_shintoshi.aoi]: new StationInfo("青井", [], "あおい"),
  [STATION_IDS.shutoken_shintoshi.shin_okachimachi]: new StationInfo(
    "新御徒町",
    [LINE_IDS.shutoken_shintoshi.tsukuba_express, LINE_IDS.tokyo_subway.oedo],
    "しんおかちまち"
  ),
  // #endregion 首都圏新都市
  //  #endregion ＞茨城
  //  #region 千葉
  //   #region 千葉都市モノレール
  [STATION_IDS.chiba_toshi_monorail.shiyakusyomae]: new StationInfo(
    "市役所前",
    NO_TRANSFER,
    "しやくしょまえ"
  ),
  [STATION_IDS.chiba_toshi_monorail.sakaemachi]: new StationInfo(
    "栄町",
    NO_TRANSFER,
    "さかえまち"
  ),
  [STATION_IDS.chiba_toshi_monorail.yoshikawa_kouen]: new StationInfo(
    "葭川公園",
    NO_TRANSFER,
    "よしかわこうえん"
  ),
  [STATION_IDS.chiba_toshi_monorail.kenchoumae]: new StationInfo(
    "県庁前",
    NO_TRANSFER,
    "けんちょうまえ"
  ),
  [STATION_IDS.chiba_toshi_monorail.chiba_kouen]: new StationInfo(
    "千葉公園",
    NO_TRANSFER,
    "ちばこうえん"
  ),
  [STATION_IDS.chiba_toshi_monorail.sakusabe]: new StationInfo(
    "作草部",
    NO_TRANSFER,
    "さくさべ"
  ),
  [STATION_IDS.chiba_toshi_monorail.tendai]: new StationInfo(
    "天台",
    NO_TRANSFER,
    "てんだい"
  ),
  [STATION_IDS.chiba_toshi_monorail.anagawa]: new StationInfo(
    "穴川",
    NO_TRANSFER,
    "あながわ"
  ),
  [STATION_IDS.chiba_toshi_monorail.sports_center]: new StationInfo(
    "スポーツセンター",
    NO_TRANSFER,
    "すぽーつせんたー"
  ),
  [STATION_IDS.chiba_toshi_monorail.doubutsu_kouen]: new StationInfo(
    "動物公園",
    NO_TRANSFER,
    "どうぶつこうえん"
  ),
  [STATION_IDS.chiba_toshi_monorail.mitsuwadai]: new StationInfo(
    "三和台",
    NO_TRANSFER,
    "みつわだい"
  ),
  [STATION_IDS.chiba_toshi_monorail.sakuragi]: new StationInfo(
    "桜木",
    NO_TRANSFER,
    "さくらぎ"
  ),
  [STATION_IDS.chiba_toshi_monorail.oguradai]: new StationInfo(
    "小倉台",
    NO_TRANSFER,
    "おぐらだい"
  ),
  [STATION_IDS.chiba_toshi_monorail.chishirodai_kita]: new StationInfo(
    "千代台北",
    NO_TRANSFER,
    "ちしろだいきた"
  ),
  [STATION_IDS.chiba_toshi_monorail.chishirodai]: new StationInfo(
    "千代台",
    NO_TRANSFER,
    "ちしろだい"
  ),
  // #endregion 千葉都市モノレール
  //   #region 北総電鉄
  [STATION_IDS.hokusou.inaba_nihon_idai]: new Station({
    name: "印旛日本医大",
    pron: "いんばにほんいだい",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.inzai_makinohara]: new Station({
    name: "印西牧の原",
    pron: "いんざいまきのはら",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.chiba_newtown_chuo]: new Station({
    name: "千葉ニュータウン中央",
    pron: "ちばにゅーたうんちゅうおう",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.komuro]: new Station({
    name: "小室",
    pron: "こむろ",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.shirai]: new Station({
    name: "白井",
    pron: "しらい",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.nishi_shirai]: new Station({
    name: "西白井",
    pron: "にししらい",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.omachi]: new Station({
    name: "大町",
    pron: "おおまち",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.matsuhidai]: new Station({
    name: "松飛台",
    pron: "まつひだい",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.akiyama]: new Station({
    name: "秋山",
    pron: "あきやま",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.kitakokubun]: new Station({
    name: "北国分",
    pron: "きたこくぶん",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.yagiri]: new Station({
    name: "矢切",
    pron: "やぎり",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.shin_shibamata]: new Station({
    name: "新柴又",
    pron: "しんしばまた",
    pr: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  //   #endregion 北総電鉄
  //   #region 京成電鉄
  //    #region 京成成田スカイアクセス
  [STATION_IDS.keisei.keisei_tsudanuma]: new Station({
    name: "京成津田沼",
    pron: "けいせいつだぬま",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.chiba,
      LINE_IDS.shin_keisei.shin_keisei,
    ],
  }),
  [STATION_IDS.keisei.keisei_ueno]: new Station({
    name: "京成上野",
    pron: "けいせいうえの",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(LINE_IDS.jr_east.jouban, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(LINE_IDS.jr_east.takasaki, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(LINE_IDS.jr_east.utunomiya, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.ueno
      ),
      new ExchangeInfo(LINE_IDS.tokyo_metro.hibiya, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(LINE_IDS.tokyo_metro.ginza, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(LINE_IDS.tokyo_metro.ginza, STATION_IDS.jr_east.ueno),
      new ExchangeInfo(
        LINE_IDS.jr_east.shinkansen.tohoku,
        STATION_IDS.jr_east.ueno
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.shinkansen.yamagata,
        STATION_IDS.jr_east.ueno
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.shinkansen.akita,
        STATION_IDS.jr_east.ueno
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.shinkansen.jouetsu,
        STATION_IDS.jr_east.ueno
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.shinkansen.hokuriku,
        STATION_IDS.jr_east.ueno
      ),
    ],
  }),
  [STATION_IDS.keisei.aoto]: new Station({
    name: "青砥",
    pron: "あおと",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.keisei.oshiage,
    ],
  }),
  [STATION_IDS.keisei.shin_kamagaya]: new Station({
    name: "新鎌ヶ谷",
    pron: "しんかまがや",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.hokusou.hokusou,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.shin_keisei.shin_keisei,
      LINE_IDS.toubu.urban_park_line,
    ],
  }),
  [STATION_IDS.keisei.keisei_takasago]: new Station({
    name: "京成高砂",
    pron: "けいせいたかさご",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.hokusou.hokusou,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.kanamachi,
    ],
  }),
  [STATION_IDS.hokusou.narita_yukawa]: new Station({
    name: "成田湯川",
    pron: "なりたゆかわ",
    pr: P.CHIBA,
    lines: [LINE_IDS.keisei.narita_kuko, LINE_IDS.hokusou.hokusou],
  }),
  [STATION_IDS.keisei.kuko_daini_bill]: new Station({
    name: "空港第二ビル",
    pron: "くうこうだいにびる",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.hokusou.hokusou,
    ],
  }),
  [STATION_IDS.keisei.narita_kuko]: new Station({
    name: "成田空港",
    pron: "なりたくうこう",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.hokusou.hokusou,
    ],
  }),
  [STATION_IDS.keisei.shin_mikawashima]: new Station({
    name: "新三河島",
    pron: "しんみかわしま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.senju_ohashi]: new Station({
    name: "千住大橋",
    pron: "せんじゅおおはし",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_sekiya]: new Station({
    name: "京成関屋",
    pron: "けいせいせきや",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.horikirisyobuen]: new Station({
    name: "堀切菖蒲園",
    pron: "ほりきりしょうぶえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.ohanadyaya]: new Station({
    name: "お花茶屋",
    pron: "おおはなだ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_koiwa]: new Station({
    name: "京成小岩",
    pron: "けいせいこいわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.edogawa]: new Station({
    name: "江戸川",
    pron: "えどがわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.takanodai]: new Station({
    name: "高野台",
    pron: "たかのだい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.ichikawa_mama]: new Station({
    name: "市川真間",
    pron: "いちかわまま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.sugano]: new Station({
    name: "菅野",
    pron: "すがの",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_hachiman]: new Station({
    name: "京成八幡",
    pron: "けいせいはちまん",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      new ExchangeInfo(
        LINE_IDS.jr_east.chuo_soubu_kankou,
        STATION_IDS.jr_east.motoyawata
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.shinjuku,
        STATION_IDS.jr_east.motoyawata
      ),
    ],
  }),
  [STATION_IDS.keisei.onigoe]: new Station({
    name: "鬼越",
    pron: "おにごえ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_narita]: new Station({
    name: "京成成田",
    pron: "けいせいなりた",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.higashi_narita,
      new ExchangeInfo(LINE_IDS.jr_east.narita1, STATION_IDS.jr_east.narita),
      new ExchangeInfo(LINE_IDS.jr_east.narita2, STATION_IDS.jr_east.narita),
      new ExchangeInfo(LINE_IDS.jr_east.narita3, STATION_IDS.jr_east.narita),
    ],
  }),
  [STATION_IDS.keisei.higashi_narita]: new Station({
    name: "東成田",
    pron: "ひがしなりた",
    pr: P.CHIBA,
    lines: [LINE_IDS.keisei.higashi_narita, LINE_IDS.shibayama.shibayama],
  }),
  [STATION_IDS.keisei.keisei_nakayama]: new Station({
    name: "京成中山",
    pron: "けいせいなかやま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.higashi_nakayama]: new Station({
    name: "東中山",
    pron: "ひがしなかやま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_nishifuna]: new Station({
    name: "京成西船",
    pron: "けいせいにしふな",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.kaijin]: new Station({
    name: "海神",
    pron: "かいじん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_funabashi]: new Station({
    name: "京成船橋",
    pron: "けいせいふなばし",
    pr: P.CHIBA,
    lines: [
      new ExchangeInfo(
        LINE_IDS.jr_east.sobu_kaisoku,
        STATION_IDS.jr_east.funabashi
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.chuo_soubu_kankou,
        STATION_IDS.jr_east.funabashi
      ),
      new ExchangeInfo(
        LINE_IDS.toubu.urban_park_line,
        STATION_IDS.jr_east.funabashi
      ),
    ],
  }),
  [STATION_IDS.keisei.daijingushita]: new Station({
    name: "大神宮下",
    pron: "だいじんぐした",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.funabashi_keibajo]: new Station({
    name: "船橋競馬場",
    pron: "ふなばしけいばじょう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.yatsu]: new Station({
    name: "谷津",
    pron: "やつ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_okubo]: new Station({
    name: "京成大久保",
    pron: "けいせいおおくぼ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.mimomi]: new Station({
    name: "実籾",
    pron: "みもみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.yachiyodai]: new Station({
    name: "八千代台",
    pron: "やちよだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_owada]: new Station({
    name: "京成大和田",
    pron: "けいせいおおわだ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.katsutadai]: new Station({
    name: "勝田台",
    pron: "かつただい",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      new ExchangeInfo(
        LINE_IDS.touyou_kousoku.touyou_kousoku,
        STATION_IDS.touyou_kousoku.touyou_katsutadai
      ),
    ],
  }),
  [STATION_IDS.keisei.shidu]: new Station({
    name: "志津",
    pron: "しづ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.yukarigaoka]: new Station({
    name: "ユーカリが丘",
    pron: "ゆーかりがおか",
    pr: P.CHIBA,
    lines: [LINE_IDS.keisei.honsen, LINE_IDS.keisei.yukarigaoka],
  }),
  [STATION_IDS.keisei.keisei_shirai]: new Station({
    name: "京成白井",
    pron: "けいせいしらい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_sakura]: new Station({
    name: "京成佐倉",
    pron: "けいせいさくら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.osakura]: new Station({
    name: "大佐倉",
    pron: "おおさくら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_shisui]: new Station({
    name: "京成酒々井",
    pron: "けいせいしずい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.sougosandou]: new Station({
    name: "宗吾参道",
    pron: "そうごさんどう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.koudunomori]: new Station({
    name: "公津の杜",
    pron: "こうづのもり",
    pr: P.CHIBA,
  }),
  //     #endregion 京成成田スカイアクセス
  //    #region ユーカリが丘線
  [STATION_IDS.keisei.chiku_center]: new Station({
    name: "地区センター",
    pron: "ちくせんたー",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.kouen]: new Station({
    name: "公園",
    pron: "こうえん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.joshidai]: new Station({
    name: "女子大",
    pron: "じょしだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.chugakkou]: new Station({
    name: "中学校",
    pron: "ちゅうがっこう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.ino]: new Station({
    name: "井野",
    pron: "いの",
    pr: P.CHIBA,
  }),
  //     #endregion ユーカリが丘線
  //    #region 金町線
  [STATION_IDS.keisei.shibamata]: new Station({
    name: "柴又",
    pron: "しばまた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_kanamachi]: new Station({
    name: "京成金町",
    pron: "けいせいかなまち",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.keisei.kanamachi,
      new ExchangeInfo(LINE_IDS.jr_east.jouban, STATION_IDS.jr_east.kanamachi),
    ],
  }),
  //    #endregion 金町線
  [STATION_IDS.keisei.keisei_hikifune]: new Station({
    name: "京成曳舟",
    pron: "けいせいひきふね",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.yahiro]: new Station({
    name: "八広",
    pron: "やひろ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.yotsugi]: new Station({
    name: "四ツ木",
    pron: "よつぎ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_tateishi]: new Station({
    name: "京成立石",
    pron: "けいせいたていし",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_makuhari_hongou]: new Station({
    name: "京成幕張本郷",
    pron: "けいせいまくはりほんごう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_makuhari]: new Station({
    name: "京成幕張",
    pron: "けいせいまくはり",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.kemigawa]: new Station({
    name: "けみがわ",
    pron: "けみがわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_inage]: new Station({
    name: "京成稲毛",
    pron: "けいせいいなげ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.midoridai]: new Station({
    name: "みどり台",
    pron: "みどりだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.nishi_noborito]: new Station({
    name: "西登戸",
    pron: "にしのぼりと",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.keisei.shin_chiba]: new Station({
    name: "新千葉",
    pron: "しんちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_chiba]: new Station({
    name: "京成千葉",
    pron: "けいせいちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.chiba_chuou]: new Station({
    name: "千葉中央",
    pron: "ちばちゅうおう",
    pr: P.CHIBA,
    lines: [LINE_IDS.keisei.chiba, LINE_IDS.keisei.chihara],
  }),
  [STATION_IDS.keisei.chibadera]: new Station({
    name: "千葉寺",
    pron: "ちばでら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.omoridai]: new Station({
    name: "大森台",
    pron: "おおもりだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.gakuenmae]: new Station({
    name: "学園前",
    pron: "がくえんまえ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.oyumino]: new Station({
    name: "おゆみ野",
    pron: "おゆみの",
    pr: P.CHIBA,
  }),
  [STATION_IDS.keisei.chiharadai]: new Station({
    name: "ちはら台",
    pron: "ちはらだい",
    pr: P.CHIBA,
  }),

  //   #endregion 京成電鉄
  //   #region 新京成電鉄
  [STATION_IDS.shin_keisei.kami_hongou]: new Station({
    name: "上本郷",
    pron: "かみほんごう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.matsudo_shinden]: new Station({
    name: "松戸新田",
    pron: "まつどしんでん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.minoridai]: new Station({
    name: "みのり台",
    pron: "みのりだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.yabashira]: new Station({
    name: "八柱",
    pron: "やばしら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.tokiwadaira]: new Station({
    name: "常盤平",
    pron: "ときわだいら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.gokou]: new Station({
    name: "五香",
    pron: "ごこう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.motoyama]: new Station({
    name: "元山",
    pron: "もとやま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kunugiyama]: new Station({
    name: "くぬぎ山",
    pron: "くぬぎやま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kita_hatsutomi]: new Station({
    name: "北初富",
    pron: "きたはつとみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.hatsudomi]: new Station({
    name: "初富",
    pron: "はつどみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kamagaya_daibutsu]: new Station({
    name: "鎌ヶ谷大仏",
    pron: "かまがやだいぶつ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.futawamukoudai]: new Station({
    name: "二和向台",
    pron: "ふたわむこうだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.misaki]: new Station({
    name: "三咲",
    pron: "みさき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.takifudou]: new Station({
    name: "滝不動",
    pron: "たきふどう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.takane_koudan]: new Station({
    name: "高根公団",
    pron: "たかねこうだん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.takane_kido]: new Station({
    name: "高根木戸",
    pron: "たかねきど",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kita_narashino]: new Station({
    name: "北習志野",
    pron: "きたならしの",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.shin_keisei.shin_keisei,
      LINE_IDS.touyou_kousoku.touyou_kousoku,
    ],
  }),
  [STATION_IDS.shin_keisei.narashino]: new Station({
    name: "習志野",
    pron: "ならしの",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.yakuendai]: new Station({
    name: "薬園台",
    pron: "やくえんだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.maebara]: new Station({
    name: "前原",
    pron: "まえばら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.shin_tsudanuma]: new Station({
    name: "新津田沼",
    pron: "しんつだぬま",
    pr: P.CHIBA,
  }),
  //   #endregion 新京成電鉄
  [STATION_IDS.shibayama.shibayama_chiyoda]: new Station({
    name: "芝山千代田",
    pron: "しばやまちよだ",
    pr: P.CHIBA,
  }),
  //   #region 小湊鉄道
  [STATION_IDS.kominato.kazusa_murakami]: new Station({
    name: "上総村上",
    pron: "かずさむらかみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.amaariki]: new Station({
    name: "海士有木",
    pron: "あまありき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_mitsumata]: new Station({
    name: "上総三又",
    pron: "かずさみつまた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_yamada]: new Station({
    name: "上総山田",
    pron: "かずさやまだ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.koufudai]: new Station({
    name: "光風台",
    pron: "こうふうだい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.umatate]: new Station({
    name: "馬立",
    pron: "うまたて",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_ushiku]: new Station({
    name: "上総牛久",
    pron: "かずさうしく",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_kawama]: new Station({
    name: "上総川間",
    pron: "かずさかわま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_tsurumai]: new Station({
    name: "上総鶴舞",
    pron: "かずさつるまい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_kubo]: new Station({
    name: "上総久保",
    pron: "かずさくぼ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.takataki]: new Station({
    name: "高滝",
    pron: "たかたき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.satomi]: new Station({
    name: "里見",
    pron: "さとみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.itabu]: new Station({
    name: "飯給",
    pron: "いたぶ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.tsukizaki]: new Station({
    name: "月崎",
    pron: "つきざき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_okubo]: new Station({
    name: "上総大久保",
    pron: "かずさおおくぼ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.yourou_keikoku]: new Station({
    name: "養老渓谷",
    pron: "ようろうけいこく",
    pr: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_nakano]: new Station({
    name: "上総中野",
    pron: "かずさなかの",
    pr: P.CHIBA,
  }),
  //   #endregion 小湊鉄道
  //   #region 銚子電気鉄道
  [STATION_IDS.choushi_denki.nakanochou]: new Station({
    name: "中野町",
    pron: "なかのちょう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.kannon]: new Station({
    name: "観音",
    pron: "かんのん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.hon_choushi]: new Station({
    name: "本銚子",
    pron: "ほんちょうし",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.sasagami_kurohae]: new Station({
    name: "笹上黒生",
    pron: "ささがみくろはえ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.nishi_ashikajima]: new Station({
    name: "西海鹿島",
    pron: "にしあしかじま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.ashikajima]: new Station({
    name: "海鹿島",
    pron: "あしかじま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.kimigahama]: new Station({
    name: "君ヶ浜",
    pron: "きみがはま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.inubou]: new Station({
    name: "犬吠",
    pron: "いぬぼう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.tokawa]: new Station({
    name: "外川",
    pron: "とかわ",
    pr: P.CHIBA,
  }),
  //  #endregion 銚子電気鉄道
  //   #region 東葉高速鉄道
  [STATION_IDS.touyou_kousoku.higashi_kaijin]: new Station({
    name: "東海神",
    pron: "ひがしかいじん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.hasama]: new Station({
    name: "飯山満",
    pron: "はさまちょう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.funabashi_nichidaimae]: new Station({
    name: "船橋日大前",
    pron: "ふなばしにちだいまえ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.yachiyo_midorigaoka]: new Station({
    name: "八千代緑が丘",
    pron: "やちよみどりがおか",
    pr: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.yachiyo_chuou]: new Station({
    name: "八千代中央",
    pron: "やちよちゅうおう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.murakami]: new Station({
    name: "村上",
    pron: "むらかみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.touyou_katsutadai]: new Station({
    name: "東洋勝田台",
    pron: "とうようかつただい",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.touyou_kousoku.touyou_kousoku,
      new ExchangeInfo(LINE_IDS.keisei.honsen, STATION_IDS.keisei.katsutadai),
    ],
  }),
  //   #endregion 東葉高速鉄道
  //  #endregion 千葉
  //  #region 神奈川
  //   #region 相模鉄道
  // ＞本線
  [STATION_IDS.sagami.ebina]: new Station({
    name: "海老名",
    pron: "えびな",
    pr: P.KANAGAWA,
    lines: [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.jr_east.sagami,
      LINE_IDS.sagami.honsen,
    ],
  }),
  [STATION_IDS.sagami.kashiwadai]: new Station({
    name: "柏木台",
    pron: "かしわだい",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.sagamiotsuka]: new Station({
    name: "相模大塚",
    pron: "さがみおおつか",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.seya]: new Station({
    name: "瀬谷",
    pron: "せや",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.mitsukyo]: new Station({
    name: "三ツ境",
    pron: "みつきょう",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.kibougaoka]: new Station({
    name: "希望ヶ丘",
    pron: "きぼうがおか",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.futamatagawa]: new Station({
    name: "二俣川",
    pron: "ふたまたがわ",
    pr: P.KANAGAWA,
    lines: [LINE_IDS.sagami.honsen, LINE_IDS.sagami.izumino],
  }),
  [STATION_IDS.sagami.tsurugamine]: new Station({
    name: "鶴ヶ峰",
    pron: "つるがみね",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.nishiya]: new Station({
    name: "西谷",
    pron: "にしや",
    pr: P.KANAGAWA,
    lines: [LINE_IDS.sagami.honsen, LINE_IDS.sagami.izumino],
  }),
  [STATION_IDS.sagami.kamihoshikawa]: new Station({
    name: "上星川",
    pron: "かみほしかわ",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.wadacho]: new Station({
    name: "和田町",
    pron: "わだちょう",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.hoshikawa]: new Station({
    name: "星川",
    pron: "ほしかわ",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.tennocho]: new Station({
    name: "天王町",
    pron: "てんのうちょう",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.nishiyokohama]: new Station({
    name: "西横浜",
    pron: "にしよこはま",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.hiranumabashi]: new Station({
    name: "平沼橋",
    pron: "ひらぬまばし",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.hazawayokohamakokudai]: new Station({
    name: "羽沢横浜国大",
    pron: "はざわよこはまこくだい",
    pr: P.KANAGAWA,
    lines: [LINE_IDS.jr_sotetsu_chokutsu, LINE_IDS.sagami.sotetsushin_yokohama],
  }),
  // ＞いずみ野線
  [STATION_IDS.sagami.minami_makigahara]: new StationInfo(
    "南万騎が原",
    NO_TRANSFER,
    "みなみまきがはら"
  ),
  [STATION_IDS.sagami.ryokuentoshi]: new StationInfo(
    "緑園都市",
    NO_TRANSFER,
    "りょくえんとし"
  ),
  [STATION_IDS.sagami.yayoidai]: new StationInfo(
    "弥生台",
    NO_TRANSFER,
    "やよいだい"
  ),
  [STATION_IDS.sagami.izumino]: new StationInfo(
    "いずみ野",
    NO_TRANSFER,
    "いずみの"
  ),
  [STATION_IDS.sagami.izumichuo]: new StationInfo(
    "いずみ中央",
    NO_TRANSFER,
    "いずみちゅうおう"
  ),
  [STATION_IDS.sagami.yumegaoka]: new StationInfo(
    "ゆめが丘",
    NO_TRANSFER,
    "ゆめがおか"
  ),
  // #endregion 相模鉄道
  //   #region 横浜市営地下鉄
  // ＞ブルーライン
  [STATION_IDS.yokohama_subway.nakagawa]: new StationInfo(
    "中川",
    NO_TRANSFER,
    "なかがわ"
  ),
  [STATION_IDS.yokohama_subway.center_kita]: new StationInfo(
    "センター北",
    [LINE_IDS.yokohama_subway.blue_line, LINE_IDS.yokohama_subway.green_line],
    "せんたーきた"
  ),
  [STATION_IDS.yokohama_subway.center_minami]: new StationInfo(
    "センター南",
    [LINE_IDS.yokohama_subway.blue_line, LINE_IDS.yokohama_subway.green_line],
    "せんたーみなみ"
  ),
  [STATION_IDS.yokohama_subway.nakamachidai]: new StationInfo(
    "仲町台",
    NO_TRANSFER,
    "なかまちだい"
  ),
  [STATION_IDS.yokohama_subway.nippa]: new StationInfo(
    "新羽",
    NO_TRANSFER,
    "にっぱ"
  ),
  [STATION_IDS.yokohama_subway.kita_shin_yokohama]: new StationInfo(
    "北新横浜",
    NO_TRANSFER,
    "きたしんよこはま"
  ),
  [STATION_IDS.yokohama_subway.kishine_kouen]: new StationInfo(
    "岸根公園",
    NO_TRANSFER,
    "きしねこうえん"
  ),
  [STATION_IDS.yokohama_subway.katakurachou]: new StationInfo(
    "片倉町",
    NO_TRANSFER,
    "かたくらちょう"
  ),
  [STATION_IDS.yokohama_subway.mitsuzawa_shimocho]: new StationInfo(
    "三ツ沢下町",
    NO_TRANSFER,
    "みつざわしもちょう"
  ),
  [STATION_IDS.yokohama_subway.mitsuzawa_kamicho]: new StationInfo(
    "三ツ沢上町",
    NO_TRANSFER,
    "みつざわかみちょう"
  ),
  [STATION_IDS.yokohama_subway.takashimachou]: new StationInfo(
    "高島町",
    NO_TRANSFER,
    "たかしまちょう"
  ),
  [STATION_IDS.yokohama_subway.isezakichoujamachi]: new StationInfo(
    "伊勢佐木長者町",
    NO_TRANSFER,
    "いせざきちょうじゃまち"
  ),
  [STATION_IDS.yokohama_subway.bantoubashi]: new StationInfo(
    "万才橋",
    NO_TRANSFER,
    "ばんとうばし"
  ),
  [STATION_IDS.yokohama_subway.yoshinochou]: new StationInfo(
    "吉野町",
    NO_TRANSFER,
    "よしのちょう"
  ),
  [STATION_IDS.yokohama_subway.maita]: new StationInfo(
    "蒔田",
    NO_TRANSFER,
    "まいた"
  ),
  [STATION_IDS.yokohama_subway.gumyouji]: new StationInfo(
    "弘明寺",
    NO_TRANSFER,
    "ぐみょうじ"
  ),
  [STATION_IDS.yokohama_subway.kaminagaya]: new StationInfo(
    "上永谷",
    NO_TRANSFER,
    "かみながや"
  ),
  [STATION_IDS.yokohama_subway.shimonagaya]: new StationInfo(
    "下永谷",
    NO_TRANSFER,
    "しもながや"
  ),
  [STATION_IDS.yokohama_subway.maioka]: new StationInfo(
    "舞岡",
    NO_TRANSFER,
    "まいおか"
  ),
  [STATION_IDS.yokohama_subway.odoriba]: new StationInfo(
    "踊場",
    NO_TRANSFER,
    "おどりば"
  ),
  [STATION_IDS.yokohama_subway.nakada]: new StationInfo(
    "中田",
    NO_TRANSFER,
    "なかだ"
  ),
  [STATION_IDS.yokohama_subway.tateba]: new StationInfo(
    "立場",
    NO_TRANSFER,
    "たてば"
  ),
  [STATION_IDS.yokohama_subway.shimo_iida]: new StationInfo(
    "下飯田",
    NO_TRANSFER,
    "しもいいだ"
  ),
  [STATION_IDS.yokohama_subway.kounan_chuou]: new StationInfo(
    "港南中央",
    NO_TRANSFER,
    "こうなんちゅうおう"
  ),
  // ＞グリーンライン
  [STATION_IDS.yokohama_subway.hiyoshi]: new StationInfo(
    "日吉",
    [
      LINE_IDS.yokohama_subway.green_line,
      LINE_IDS.toukyu.touyoko,
      LINE_IDS.toukyu.meguro,
      LINE_IDS.toukyu.shin_yokohama,
    ],
    "ひよし"
  ),
  [STATION_IDS.yokohama_subway.hiyoshi_honchou]: new StationInfo(
    "日吉本町",
    NO_TRANSFER,
    "ひよしほんちょう"
  ),
  [STATION_IDS.yokohama_subway.takada]: new StationInfo(
    "高田",
    NO_TRANSFER,
    "たかだ"
  ),
  [STATION_IDS.yokohama_subway.higashi_yamada]: new StationInfo(
    "東山田",
    NO_TRANSFER,
    "ひがしやまだ"
  ),
  [STATION_IDS.yokohama_subway.kita_yamada]: new StationInfo(
    "北山田",
    NO_TRANSFER,
    "きたやまだ"
  ),
  [STATION_IDS.yokohama_subway.tuduki_fureainooka]: new StationInfo(
    "都筑ふれあいの丘",
    NO_TRANSFER,
    "つつきふれあいのおか"
  ),
  [STATION_IDS.yokohama_subway.kawawacho]: new StationInfo(
    "川和町",
    NO_TRANSFER,
    "かわわちょう"
  ),
  // #endregion 横浜市営地下鉄
  //   #region 小田急
  [STATION_IDS.sagami.sagamino]: new StationInfo("さがみ野", [], "さがみの"),
  [STATION_IDS.odakyu.minamishinjuku]: new StationInfo(
    "南新宿",
    [],
    "みなみしんじゅく"
  ),
  [STATION_IDS.odakyu.sangubashi]: new StationInfo(
    "参宮橋",
    [],
    "さんぐうばし"
  ),
  [STATION_IDS.odakyu.yoyogihachiman]: new StationInfo(
    "代々木八幡",
    [LINE_IDS.odakyu.odawara, LINE_IDS.tokyo_metro.chiyoda],
    "よよぎはちまん"
  ),
  [STATION_IDS.odakyu.yoyogiuehara]: new StationInfo(
    "代々木上原",
    [],
    "よよぎうえはら"
  ),
  [STATION_IDS.odakyu.higashikitazawa]: new StationInfo(
    "東北沢",
    [],
    "ひがしきたざわ"
  ),
  [STATION_IDS.odakyu.shimokitazawa]: new StationInfo(
    "下北沢",
    [LINE_IDS.odakyu.odawara, LINE_IDS.keiou.inokashira],
    "しもきたざわ"
  ),
  [STATION_IDS.odakyu.setagayadaita]: new StationInfo(
    "世田谷代田",
    [],
    "せたがやだいた"
  ),
  [STATION_IDS.odakyu.umegaoka]: new StationInfo("梅ヶ丘", [], "うめがおか"),
  [STATION_IDS.odakyu.gotokuji]: new StationInfo("豪徳寺", [], "ごうとくじ"),
  [STATION_IDS.odakyu.kyodo]: new StationInfo("経堂", [], "きょうどう"),
  [STATION_IDS.odakyu.chitosefunabashi]: new StationInfo(
    "千歳船橋",
    [],
    "ちとせふなばし"
  ),
  [STATION_IDS.odakyu.soshigayaokura]: new StationInfo(
    "祖師ヶ谷大蔵",
    [],
    "そしがやおおくら"
  ),
  [STATION_IDS.odakyu.seijogakuenmae]: new StationInfo(
    "成城学園前",
    [],
    "せいじょうがくえんまえ"
  ),
  [STATION_IDS.odakyu.kitami]: new StationInfo("喜多見", [], "きたみ"),
  [STATION_IDS.odakyu.komae]: new StationInfo("狛江", [], "こまえ"),
  [STATION_IDS.odakyu.izumitamagawa]: new StationInfo(
    "和泉多摩川",
    [],
    "いずみたまがわ"
  ),
  [STATION_IDS.odakyu.mukougaokayuen]: new StationInfo(
    "向ヶ丘遊園",
    [],
    "むこうがおかゆうえん"
  ),
  [STATION_IDS.odakyu.ikuta]: new StationInfo("生田", [], "いくた"),
  [STATION_IDS.odakyu.yomiuri_land_mae]: new StationInfo(
    "読売ランド前",
    [],
    "よみうりらんどまえ"
  ),
  [STATION_IDS.odakyu.yurigaoka]: new StationInfo("百合ヶ丘", [], "ゆりがおか"),
  [STATION_IDS.odakyu.shinyurigaoka]: new StationInfo(
    "新百合ヶ丘",
    [LINE_IDS.odakyu.odawara, LINE_IDS.odakyu.tama],
    "しんゆりがおか"
  ),
  [STATION_IDS.odakyu.kakio]: new StationInfo("柿生", [], "かきお"),
  [STATION_IDS.odakyu.tsurukawa]: new StationInfo("鶴川", [], "つるかわ"),
  [STATION_IDS.odakyu.musashidaimae]: new StationInfo(
    "武蔵台前",
    [],
    "むさしだいまえ"
  ),
  [STATION_IDS.odakyu.tamagawagakuenmae]: new StationInfo(
    "玉川学園前",
    [],
    "たまがわがくえんまえ"
  ),
  [STATION_IDS.odakyu.odakyusagamihara]: new StationInfo(
    "小田急相模原",
    [],
    "おだきゅうさがみはら"
  ),
  [STATION_IDS.odakyu.soubudaimae]: new StationInfo(
    "相武台前",
    [],
    "そうぶだいまえ"
  ),
  [STATION_IDS.odakyu.zama]: new StationInfo("座間", [], "ざま"),
  [STATION_IDS.odakyu.ebina]: new StationInfo(
    "海老名",
    [LINE_IDS.odakyu.odawara, LINE_IDS.sagami.honsen],
    "えびな"
  ),
  [STATION_IDS.odakyu.honatsugi]: new StationInfo("本厚木", [], "ほんあつぎ"),
  [STATION_IDS.odakyu.aikouishida]: new StationInfo(
    "愛甲石田",
    [],
    "あいこういしだ"
  ),
  [STATION_IDS.odakyu.isehara]: new StationInfo("伊勢原", [], "いせはら"),
  [STATION_IDS.odakyu.tsurumakionsen]: new StationInfo(
    "鶴巻温泉",
    [],
    "つるまきおんせん"
  ),
  [STATION_IDS.odakyu.toukaidaigakumae]: new StationInfo(
    "東海大学前",
    [],
    "とうかいだいがくまえ"
  ),
  [STATION_IDS.odakyu.hadano]: new StationInfo("秦野", [], "はだの"),
  [STATION_IDS.odakyu.shibusawa]: new StationInfo("渋沢", [], "しぶさわ"),
  [STATION_IDS.odakyu.shinmatsuda]: new StationInfo("新松田", [], "しんまつだ"),
  [STATION_IDS.odakyu.kaisei]: new StationInfo("開成", [], "かいせい"),
  [STATION_IDS.odakyu.kayama]: new StationInfo("箱根湯本", [], "かやま"),
  [STATION_IDS.odakyu.tomizu]: new StationInfo("富水", [], "とみず"),
  [STATION_IDS.odakyu.hotaruda]: new StationInfo("螢田", [], "ほたるだ"),
  [STATION_IDS.odakyu.ashigara]: new StationInfo("足柄", [], "あしがら"),
  // ＞江ノ島線
  [STATION_IDS.odakyu.sagamiono]: new StationInfo(
    "相模大野",
    [LINE_IDS.odakyu.odawara, LINE_IDS.odakyu.enoshima],
    "さがみおおの"
  ),
  [STATION_IDS.odakyu.higashirinkan]: new StationInfo(
    "東林間",
    [],
    "ひがしりんかん"
  ),
  [STATION_IDS.odakyu.chuorinkan]: new StationInfo(
    "中央林間",
    [LINE_IDS.odakyu.enoshima, LINE_IDS.toukyu.denentoshi],
    "ちゅうおうりんかん"
  ),
  [STATION_IDS.odakyu.minamirinkan]: new StationInfo("南林間", []),
  [STATION_IDS.sagami.tsuruma]: new StationInfo("鶴間", []),
  [STATION_IDS.odakyu.yamato]: new StationInfo("大和", [
    LINE_IDS.odakyu.enoshima,
    LINE_IDS.sagami.honsen,
  ]),
  [STATION_IDS.odakyu.sakuragaoka]: new StationInfo("桜ヶ丘", []),
  [STATION_IDS.odakyu.kouzashibuya]: new StationInfo("高座渋谷", []),
  [STATION_IDS.odakyu.chogo]: new StationInfo("長後", []),
  [STATION_IDS.odakyu.shonandai]: new StationInfo("湘南台", [
    LINE_IDS.sagami.izumino,
    LINE_IDS.odakyu.enoshima,
    LINE_IDS.yokohama_subway.blue_line,
  ]),
  [STATION_IDS.odakyu.mutsuainichidaimae]: new StationInfo("六会日大前", []),
  [STATION_IDS.odakyu.zengyo]: new StationInfo("善行", []),
  [STATION_IDS.odakyu.fujisawahonmachi]: new StationInfo("藤沢本町", []),
  [STATION_IDS.odakyu.kugenuma]: new StationInfo("鵠沼", []),
  [STATION_IDS.odakyu.honkugenuma]: new StationInfo("本鵠沼", []),
  [STATION_IDS.odakyu.kugenumakaigan]: new StationInfo("鵠沼海岸", []),
  [STATION_IDS.odakyu.kataseenoshima]: new StationInfo("片瀬江ノ島", []),
  // ＞箱根登山線
  [STATION_IDS.odakyu.hakone_itabashi]: new StationInfo(
    "箱根板橋",
    NO_TRANSFER,
    "はこねいたばし"
  ),
  [STATION_IDS.odakyu.kazamatsuri]: new StationInfo(
    "風祭",
    NO_TRANSFER,
    "かざまつり"
  ),
  [STATION_IDS.odakyu.iryuda]: new StationInfo(
    "入生田",
    NO_TRANSFER,
    "いりゅうだ"
  ),
  [STATION_IDS.odakyu.hakone_yumoto]: new StationInfo(
    "箱根湯本",
    NO_TRANSFER,
    "はこねゆもと"
  ),
  [STATION_IDS.odakyu.tounosawa]: new StationInfo(
    "桃源台",
    NO_TRANSFER,
    "とうのさわ"
  ),
  [STATION_IDS.odakyu.ohiradai]: new StationInfo(
    "大平台",
    NO_TRANSFER,
    "おおひらだい"
  ),
  [STATION_IDS.odakyu.miyanoshita]: new StationInfo(
    "宮ノ下",
    NO_TRANSFER,
    "みやのした"
  ),
  [STATION_IDS.odakyu.kowakidani]: new StationInfo(
    "小涌谷",
    NO_TRANSFER,
    "こわきだに"
  ),
  [STATION_IDS.odakyu.choukokunomori]: new StationInfo(
    "彫刻の森",
    NO_TRANSFER,
    "彫刻の森"
  ),
  [STATION_IDS.odakyu.goura]: new StationInfo(
    "強羅",
    [LINE_IDS.odakyu.hakonetozan, LINE_IDS.odakyu_hakone.kousaku],
    "ごうら"
  ),
  // >多摩線
  [STATION_IDS.odakyu.karakida]: new StationInfo(
    "唐木田",
    NO_TRANSFER,
    "からきだ"
  ),
  [STATION_IDS.odakyu.odakyu_tama_center]: new StationInfo(
    "小田急多摩センター",
    [
      LINE_IDS.odakyu.tama,
      new ExchangeInfo(
        LINE_IDS.keiou.sagamihara,
        STATION_IDS.keiou.keiou_tama_center
      ),
      new ExchangeInfo(
        LINE_IDS.tama_monorail.tama_monorail,
        STATION_IDS.tama_monorail.tama_center
      ),
    ],
    "おだきゅうたませんたー"
  ),
  [STATION_IDS.odakyu.odakyu_eizan]: new StationInfo(
    "小田急永山",
    NO_TRANSFER,
    "おだきゅうえいざん"
  ),
  [STATION_IDS.odakyu.haruhino]: new StationInfo(
    "春日町",
    NO_TRANSFER,
    "はるひの"
  ),
  [STATION_IDS.odakyu.kurokawa]: new StationInfo(
    "黒川",
    NO_TRANSFER,
    "くろかわ"
  ),
  [STATION_IDS.odakyu.kurihira]: new StationInfo(
    "栗平",
    NO_TRANSFER,
    "くりひら"
  ),
  [STATION_IDS.odakyu.satsukidai]: new StationInfo(
    "五月台",
    NO_TRANSFER,
    "さつきだい"
  ),
  // #endregion 小田急
  //   #region 小田急箱根
  [STATION_IDS.odakyu_hakone.souunzan]: new StationInfo(
    "早雲山",
    [LINE_IDS.odakyu_hakone.kousaku, LINE_IDS.odakyu_hakone.hakone_rope_way],
    "そううんざん"
  ),
  [STATION_IDS.odakyu_hakone.owakudani]: new StationInfo(
    "大涌谷",
    NO_TRANSFER,
    "おおわくだに"
  ),
  [STATION_IDS.odakyu_hakone.ubako]: new StationInfo(
    "姥子",
    NO_TRANSFER,
    "うばこ"
  ),
  [STATION_IDS.odakyu_hakone.tougendai]: new StationInfo(
    "桃源台",
    NO_TRANSFER,
    "とうげんだい"
  ),
  [STATION_IDS.odakyu_hakone.kouenshimo]: new StationInfo(
    "公園下",
    NO_TRANSFER,
    "こうえんしも"
  ),
  [STATION_IDS.odakyu_hakone.kouenkami]: new StationInfo(
    "公園上",
    NO_TRANSFER,
    "こうえんかみ"
  ),
  [STATION_IDS.odakyu_hakone.naka_goura]: new StationInfo(
    "中強羅",
    NO_TRANSFER,
    "なかごうら"
  ),
  [STATION_IDS.odakyu_hakone.kami_goura]: new StationInfo(
    "上強羅",
    NO_TRANSFER,
    "かみごうら"
  ),
  // #endregion 小田急箱根
  //   #region 横浜高速鉄道
  [STATION_IDS.yokohama_kousoku.shin_takashima]: new StationInfo(
    "新高島",
    NO_TRANSFER,
    "しんたかしま"
  ),
  [STATION_IDS.yokohama_kousoku.minato_mirai]: new StationInfo(
    "みなとみらい",
    NO_TRANSFER,
    "みなとみらい"
  ),
  [STATION_IDS.yokohama_kousoku.basyamichi]: new StationInfo(
    "馬車道",
    NO_TRANSFER,
    "ばしゃみち"
  ),
  [STATION_IDS.yokohama_kousoku.nihon_odori]: new StationInfo(
    "日本大通り",
    NO_TRANSFER,
    "にほんおおどおり"
  ),
  [STATION_IDS.yokohama_kousoku.motomachi_chukagai]: new StationInfo(
    "元町・中華街",
    NO_TRANSFER,
    "もとまちちゅうかがい"
  ),
  // #endregion >>横浜高速鉄道
  //   #region 京急
  [STATION_IDS.keikyu.kitashinagawa]: new Station({
    name: "北品川",
    pron: "きたしながわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.shinbanba]: new Station({
    name: "新馬場",
    pron: "しんばんば",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.aomonoyokocho]: new Station({
    name: "青物横丁",
    pron: "あおものよこちょう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.samezu]: new Station({
    name: "鮫洲",
    pron: "さめず",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.tachiaigawa]: new Station({
    name: "立会川",
    pron: "たちあいがわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.omorikaigan]: new Station({
    name: "大森海岸",
    pron: "おおもりかいがん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.heiwajima]: new Station({
    name: "平和島",
    pron: "へいわじま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.omorimachi]: new Station({
    name: "大森町",
    pron: "おおもりまち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.umeyashiki]: new Station({
    name: "梅屋敷",
    pron: "うめやしき",
    pr: P.TOKYO,
  }),
  [STATION_IDS.keikyu.keikyukamata]: new Station({
    name: "京急蒲田",
    pron: "けいきゅうかまた",
    pr: P.TOKYO,
    lines: [LINE_IDS.keikyu.honsen, LINE_IDS.keikyu.haneda_kuko],
  }),
  [STATION_IDS.keikyu.zoushiki]: new StationInfo("雑色", [], "ぞうしき"),
  [STATION_IDS.keikyu.rokugodote]: new StationInfo(
    "六郷土手",
    [],
    "ろくごうどて"
  ),
  [STATION_IDS.keikyu.keikyukawasaki]: new StationInfo(
    "京急川崎",
    [
      LINE_IDS.keikyu.honsen,
      new ExchangeInfo(LINE_IDS.jr_east.tokaido, STATION_IDS.jr_east.kawasaki),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.kawasaki
      ),
      new ExchangeInfo(LINE_IDS.jr_east.nanbu, STATION_IDS.jr_east.kawasaki),
    ],
    "けいきゅうかわさき"
  ),
  [STATION_IDS.keikyu.hacchonawate]: new StationInfo(
    "八丁畷",
    [LINE_IDS.keikyu.honsen, LINE_IDS.jr_east.nanbu_shisen],
    "はっちょうなわて"
  ),
  [STATION_IDS.keikyu.tsurumiichiba]: new StationInfo(
    "鶴見市場",
    [],
    "つるみいちば"
  ),
  [STATION_IDS.keikyu.keikyutsurumi]: new StationInfo(
    "京急鶴見",
    [
      LINE_IDS.keikyu.honsen,
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.tsurumi
      ),
      new ExchangeInfo(LINE_IDS.jr_east.tsurumi, STATION_IDS.jr_east.tsurumi),
    ],
    "けいきゅうつるみ"
  ),
  [STATION_IDS.keikyu.kagetusoujiji]: new StationInfo(
    "花月総持寺",
    [],
    "かげつそうじじ"
  ),
  [STATION_IDS.keikyu.namamugi]: new StationInfo("生麦", [], "なまむぎ"),
  [STATION_IDS.keikyu.keikyushinkoyasu]: new StationInfo(
    "京急新子安",
    [
      LINE_IDS.keikyu.honsen,
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.shinkoyasu
      ),
    ],
    "けいきゅうしんこやす"
  ),
  [STATION_IDS.keikyu.koyasu]: new StationInfo("子安", [], "こやす"),
  [STATION_IDS.keikyu.kanagawashinmachi]: new StationInfo(
    "神奈川新町",
    [],
    "かながわしんまち"
  ),
  [STATION_IDS.keikyu.keikyuhigashikanagawa]: new StationInfo(
    "京急東神奈川",
    [
      LINE_IDS.keikyu.honsen,
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.higashikanagawa
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.yokohama,
        STATION_IDS.jr_east.higashikanagawa
      ),
    ],
    "けいきゅうひがしかながわ"
  ),
  [STATION_IDS.keikyu.kanagawa]: new StationInfo(
    "神奈川駅",
    [],
    "かながわえき"
  ),
  [STATION_IDS.keikyu.tobe]: new StationInfo("戸部", [], "とべ"),
  [STATION_IDS.keikyu.hinodecho]: new StationInfo(
    "日ノ出町",
    [],
    "ひのでちょう"
  ),
  [STATION_IDS.keikyu.koganecho]: new StationInfo("黄金町", [], "こがねちょう"),
  [STATION_IDS.keikyu.minamiota]: new StationInfo("南太田", [], "みなみおおた"),
  [STATION_IDS.keikyu.idogaya]: new StationInfo("井土ヶ谷", [], "いどがや"),
  [STATION_IDS.keikyu.gumyouji]: new StationInfo("弘明寺", [], "ぐみょうじ"),
  [STATION_IDS.keikyu.kamiooka]: new StationInfo(
    "上大岡",
    [LINE_IDS.keikyu.honsen, LINE_IDS.yokohama_subway.blue_line],
    "かみおおおか"
  ),
  [STATION_IDS.keikyu.byobugaura]: new StationInfo(
    "屛風ヶ浦",
    [],
    "びょうぶがうら"
  ),
  [STATION_IDS.keikyu.sugita]: new StationInfo(
    "杉田",
    [
      LINE_IDS.keikyu.honsen,
      LINE_IDS.jr_east.negishi,
      LINE_IDS.keikyu.sea_side,
    ],
    "すぎた"
  ),
  [STATION_IDS.keikyu.keikyutomioka]: new StationInfo(
    "京急富岡",
    [],
    "けいきゅうとみおか"
  ),
  [STATION_IDS.keikyu.noukendai]: new StationInfo("能見台", [], "のうけんだい"),
  [STATION_IDS.keikyu.kanazawabunko]: new StationInfo(
    "金沢文庫",
    [],
    "かなざわぶんこ"
  ),
  [STATION_IDS.keikyu.kanazawahakkei]: new StationInfo(
    "金沢八景",
    [LINE_IDS.keikyu.honsen, LINE_IDS.keikyu.zushi, LINE_IDS.keikyu.sea_side],
    "かなざわはっけい"
  ),
  [STATION_IDS.keikyu.oppama]: new StationInfo("追浜", [], "おっぱま"),
  [STATION_IDS.keikyu.keikyutaura]: new StationInfo(
    "京急田浦",
    [],
    "けいきゅうたうら"
  ),
  [STATION_IDS.keikyu.anjinduka]: new StationInfo("安針塚", [], "あんじんづか"),
  [STATION_IDS.keikyu.hemi]: new StationInfo("逸見", [], "へみ"),
  [STATION_IDS.keikyu.shioiri]: new StationInfo("汐入", [], "しおいり"),
  [STATION_IDS.keikyu.yokosukachuo]: new StationInfo(
    "横須賀中央",
    [],
    "よこすかちゅうおう"
  ),
  [STATION_IDS.keikyu.kenritsudaigaku]: new StationInfo(
    "県立大学",
    [],
    "けんりつだいがく"
  ),
  [STATION_IDS.keikyu.horinouchi]: new StationInfo(
    "堀之内",
    [LINE_IDS.keikyu.honsen, LINE_IDS.keikyu.kurihama],
    "ほりのうち"
  ),
  [STATION_IDS.keikyu.keikyuotsu]: new StationInfo(
    "京急大津",
    [],
    "けいきゅうおおつ"
  ),
  [STATION_IDS.keikyu.maborikaigan]: new StationInfo(
    "真堀海岸",
    [],
    "まぼりかいがん"
  ),
  [STATION_IDS.keikyu.uraga]: new StationInfo("浦賀", [], "うらが"),
  [STATION_IDS.keikyu.koujiya]: new StationInfo("糀谷", [], "こうじや"),
  [STATION_IDS.keikyu.otorii]: new StationInfo("大鳥居", [], "おおとりい"),
  [STATION_IDS.keikyu.anamoriinari]: new StationInfo(
    "穴守稲荷",
    [],
    "あなもりいなり"
  ),
  [STATION_IDS.keikyu.tenkubashi]: new StationInfo(
    "天空橋",
    [LINE_IDS.keikyu.haneda_kuko, LINE_IDS.tokyo_monorail.haneda_kuko],
    "てんくうばし"
  ),
  [STATION_IDS.keikyu.hanedakuko_daisan_terminal]: new StationInfo(
    "羽田空港第三ターミナル",
    [],
    "はねだくうこうだいさんターミナル"
  ),
  [STATION_IDS.keikyu.hanedakuko_dai1_dai2_terminal]: new StationInfo(
    "羽田空港第1・第2ターミナル",
    [],
    "はねだくうこうだいいちだいにたーみなる"
  ),
  [STATION_IDS.keikyu.horinouchi]: new StationInfo(
    "堀之内",
    [LINE_IDS.keikyu.honsen, LINE_IDS.keikyu.kurihama],
    "ほりのうち"
  ),
  [STATION_IDS.keikyu.shinotsu]: new StationInfo(
    "新大津",
    NO_TRANSFER,
    "しんおおつ"
  ),
  [STATION_IDS.keikyu.kitakurihama]: new StationInfo(
    "北久里浜",
    NO_TRANSFER,
    "きたくりはま"
  ),
  [STATION_IDS.keikyu.keikyukurihama]: new StationInfo(
    "京急久里浜",
    [
      LINE_IDS.keikyu.kurihama,
      new ExchangeInfo(LINE_IDS.jr_east.yokosuka, STATION_IDS.jr_east.kurihama),
    ],
    "けいきゅうくりはま"
  ),
  [STATION_IDS.keikyu.yrp_nobi]: new StationInfo(
    "YRP野比",
    NO_TRANSFER,
    "わいあーるぴーのび"
  ),
  [STATION_IDS.keikyu.keikyunagsawa]: new StationInfo(
    "京急長沢",
    NO_TRANSFER,
    "けいきゅうながさわ"
  ),
  [STATION_IDS.keikyu.tsukuihama]: new StationInfo(
    "津久井浜",
    NO_TRANSFER,
    "つくいはま"
  ),
  [STATION_IDS.keikyu.miurakaigan]: new StationInfo(
    "三浦海岸",
    NO_TRANSFER,
    "みうらかいがん"
  ),
  [STATION_IDS.keikyu.misakiguchi]: new StationInfo(
    "三崎口",
    NO_TRANSFER,
    "みさきぐち"
  ),
  [STATION_IDS.keikyu.mutsuura]: new StationInfo(
    "睦沢",
    NO_TRANSFER,
    "むつうら"
  ),
  [STATION_IDS.keikyu.jinmuji]: new StationInfo(
    "神武寺",
    NO_TRANSFER,
    "じんむじ"
  ),
  [STATION_IDS.keikyu.zushihayama]: new StationInfo(
    "逗子・葉山",
    NO_TRANSFER,
    "ずし・はやま"
  ),
  [STATION_IDS.keikyu.minatocho]: new StationInfo(
    "港町",
    NO_TRANSFER,
    "みなとちょう"
  ),
  [STATION_IDS.keikyu.suzukicho]: new StationInfo(
    "鈴木町",
    NO_TRANSFER,
    "すずきちょう"
  ),
  [STATION_IDS.keikyu.kawasakidaishi]: new StationInfo(
    "川崎大師",
    NO_TRANSFER,
    "かわさきだいし"
  ),
  [STATION_IDS.keikyu.higashimonzen]: new StationInfo(
    "東門前",
    NO_TRANSFER,
    "ひがしもんぜん"
  ),
  [STATION_IDS.keikyu.daishibashi]: new StationInfo(
    "大師橋",
    NO_TRANSFER,
    "だいしばし"
  ),
  [STATION_IDS.keikyu.kojimashinden]: new StationInfo(
    "小島新田",
    NO_TRANSFER,
    "こじましんでん"
  ),
  [STATION_IDS.keikyu.nanbushijo]: new StationInfo(
    "南部市場",
    NO_TRANSFER,
    "なんぶしじょう"
  ),
  [STATION_IDS.keikyu.torihama]: new StationInfo(
    "鳥浜",
    NO_TRANSFER,
    "とりはま"
  ),
  [STATION_IDS.keikyu.namiki_kita]: new StationInfo(
    "並木北",
    NO_TRANSFER,
    "なみききた"
  ),
  [STATION_IDS.keikyu.namiki_chuo]: new StationInfo(
    "並木中央",
    NO_TRANSFER,
    "なみきちゅうおう"
  ),
  [STATION_IDS.keikyu.sachiura]: new StationInfo(
    "幸浦",
    NO_TRANSFER,
    "さちうら"
  ),
  [STATION_IDS.keikyu.sangyou_hukkou_center]: new StationInfo(
    "産業振興センター",
    NO_TRANSFER,
    "さんぎょうふこうせんたー"
  ),
  [STATION_IDS.keikyu.fukuura]: new StationInfo(
    "福浦",
    NO_TRANSFER,
    "ふくうら"
  ),
  [STATION_IDS.keikyu.shidai_igakubu]: new StationInfo(
    "市大医学部",
    NO_TRANSFER,
    "しだいいがくぶ"
  ),
  [STATION_IDS.keikyu.hakkeijima]: new StationInfo(
    "八景島",
    NO_TRANSFER,
    "はっけいじま"
  ),
  [STATION_IDS.keikyu.uminokouen_shibaguchi]: new StationInfo(
    "海の公園柴口",
    NO_TRANSFER,
    "うみのこうえんしばぐち"
  ),
  [STATION_IDS.keikyu.uminokouen_minamiguchi]: new StationInfo(
    "海の公園南口",
    NO_TRANSFER,
    "うみのこうえんみなみぐち"
  ),
  [STATION_IDS.keikyu.nojima_kouen]: new StationInfo(
    "野島公園",
    NO_TRANSFER,
    "のじまこうえん"
  ),
  //  #endregion 京急
  //   #region 江ノ島電鉄
[STATION_IDS.enoshima.ishigami]: new Station({name: "石上", pron: "いしがみ", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.yanagikouji]: new Station({name: "柳小路", pron: "やなぎこうじ", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.kugenuma]: new Station({name: "鵠沼", pron: "くげぬま", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.syounan_kaigan_kouen]: new Station({name: "湘南海岸公園", pron: "しょうなんかいがんこうえん", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.enoshima]: new Station({name: "江ノ島", pron: "えのしま", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.koshigoe]: new Station({name: "腰越", pron: "こしごえ", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.kamakura_koukou_mae]: new Station({name: "鎌倉高校前", pron: "かまくらこうこうまえ", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.shichirigahama]: new Station({name: "七里ヶ浜", pron: "しちりがはま", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.inamuragasaki]: new Station({name: "稲村ヶ崎", pron: "いなむらがさき", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.gokurakuji]: new Station({name: "極楽寺", pron: "ごくらくじ", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.hase]: new Station({name: "長谷", pron: "はせ", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.yuigahama]: new Station({name: "由比ヶ浜", pron: "ゆいがはま", pr: P.KANAGAWA}),
[STATION_IDS.enoshima.wadaduka]: new Station({name: "和田塚", pron: "わだづか", pr: P.KANAGAWA}),
  //   #endregion 江ノ島電鉄
  //   #region 湘南モノレール
  [STATION_IDS.syounan_monorail.fujimichou]: new Station({name: "富士見町", pron: "ふじみちょう", pr: P.KANAGAWA}),
  [STATION_IDS.syounan_monorail.syounan_machiya]: new Station({name: "湘南町屋", pron: "しょうなんまちや", pr: P.KANAGAWA}),
  [STATION_IDS.syounan_monorail.syounan_fukasawa]: new Station({name: "湘南深沢", pron: "しょうなんふかさわ", pr: P.KANAGAWA}),
  [STATION_IDS.syounan_monorail.nishi_kamakura]: new Station({name: "西鎌倉", pron: "にしかまくら", pr: P.KANAGAWA}),
  [STATION_IDS.syounan_monorail.kataseyama]: new Station({name: "片瀬山", pron: "かたせやま", pr: P.KANAGAWA}),
  [STATION_IDS.syounan_monorail.mejiro_yamashita]: new Station({name: "目白山下", pron: "めじろやました", pr: P.KANAGAWA}),
  [STATION_IDS.syounan_monorail.syounan_enoshima]: new Station({name: "湘南江の島", pron: "しょうなんえのしま", pr: P.KANAGAWA}),
  // #endregion 湘南モノレール
  //  #endregion 神奈川
  //  #region 埼玉
  //   #region 埼玉新都市交通
  // ＞ニューシャトル
  [STATION_IDS.saitama_shintoshi_koutsu.tetsudou_hakubutsukan]: new StationInfo(
    "鉄道博物館",
    [],
    "てつどうはくぶつかん"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.kamonomiya]: new StationInfo(
    "加茂宮",
    [],
    "かものみや"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.higashi_miyahara]: new StationInfo(
    "東宮原",
    [],
    "ひがしみやはら"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.konba]: new StationInfo(
    "今羽",
    [],
    "こんば"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.yosinohara]: new StationInfo(
    "吉野原",
    [],
    "よしのはら"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.haraichi]: new StationInfo(
    "原市",
    [],
    "はらいち"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.syounan]: new StationInfo(
    "沼南",
    [],
    "しょうなん"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.maruyama]: new StationInfo(
    "丸山",
    [],
    "まるやま"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.shiku]: new StationInfo(
    "志久",
    [],
    "しく"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.ina_chuou]: new StationInfo(
    "伊奈中央",
    [],
    "いなちゅうおう"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.hanuki]: new StationInfo(
    "羽貫",
    [],
    "はぬき"
  ),
  [STATION_IDS.saitama_shintoshi_koutsu.uchijuku]: new StationInfo(
    "内宿",
    [],
    "うちじゅく"
  ),
  // #endregion 埼玉新都市交通
  //   #region 秩父鉄道
  [STATION_IDS.chichibu.hanyu]: new StationInfo(
    "羽生",
    [LINE_IDS.chichibu.chichibu, LINE_IDS.toubu.isezaki],
    "はにゅう"
  ),
  [STATION_IDS.chichibu.nishi_hanyu]: new StationInfo(
    "西羽生",
    NO_TRANSFER,
    "にしはにゅう"
  ),
  [STATION_IDS.chichibu.shingou]: new StationInfo(
    "新郷",
    NO_TRANSFER,
    "しんごう"
  ),
  [STATION_IDS.chichibu.busyu_araki]: new StationInfo(
    "武州荒木",
    NO_TRANSFER,
    "ぶしゅうあらき"
  ),
  [STATION_IDS.chichibu.higashi_gyouda]: new StationInfo(
    "東行田",
    NO_TRANSFER,
    "ひがしぎょうだ"
  ),
  [STATION_IDS.chichibu.gyoudashi]: new StationInfo(
    "行田市",
    NO_TRANSFER,
    "ぎょうだし"
  ),
  [STATION_IDS.chichibu.mochida]: new StationInfo(
    "持田",
    NO_TRANSFER,
    "もちだ"
  ),
  [STATION_IDS.chichibu.soshio_ryutsu_center]: new StationInfo(
    "ソシオ流通センター",
    NO_TRANSFER,
    "そしおりゅうつうせんたー"
  ),
  [STATION_IDS.chichibu.kami_kumagaya]: new StationInfo(
    "上熊谷",
    NO_TRANSFER,
    "かみくまがや"
  ),
  [STATION_IDS.chichibu.ishihara]: new StationInfo(
    "石原",
    NO_TRANSFER,
    "いしはら"
  ),
  [STATION_IDS.chichibu.hirose_yachonomori]: new StationInfo(
    "ひろせ野鳥の森",
    NO_TRANSFER,
    "ひろせやちょうのもり"
  ),
  [STATION_IDS.chichibu.oasou]: new StationInfo(
    "大麻生",
    NO_TRANSFER,
    "おおあそう"
  ),
  [STATION_IDS.chichibu.aketo]: new StationInfo("明戸", NO_TRANSFER, "あけと"),
  [STATION_IDS.chichibu.takekawa]: new StationInfo(
    "武川",
    NO_TRANSFER,
    "たけかわ"
  ),
  [STATION_IDS.chichibu.nagata]: new StationInfo("永田", NO_TRANSFER, "ながた"),
  [STATION_IDS.chichibu.fukaya_hanazono]: new StationInfo(
    "ふかや花園",
    NO_TRANSFER,
    "ふかやはなぞの"
  ),
  [STATION_IDS.chichibu.omaeda]: new StationInfo(
    "大前田",
    NO_TRANSFER,
    "おおまえだ"
  ),
  [STATION_IDS.chichibu.sakurazawa]: new StationInfo(
    "桜沢",
    NO_TRANSFER,
    "さくらざわ"
  ),
  [STATION_IDS.chichibu.hagure]: new StationInfo(
    "波久礼",
    NO_TRANSFER,
    "はぐれ"
  ),
  [STATION_IDS.chichibu.higuchi]: new StationInfo(
    "樋口",
    NO_TRANSFER,
    "ひぐち"
  ),
  [STATION_IDS.chichibu.nogami]: new StationInfo("野上", NO_TRANSFER, "のがみ"),
  [STATION_IDS.chichibu.nagatoro]: new StationInfo(
    "長瀞",
    NO_TRANSFER,
    "ながとろ"
  ),
  [STATION_IDS.chichibu.kami_nagatoro]: new StationInfo(
    "上長瀞",
    NO_TRANSFER,
    "かみながとろ"
  ),
  [STATION_IDS.chichibu.oyahana]: new StationInfo(
    "親鼻",
    NO_TRANSFER,
    "おやはな"
  ),
  [STATION_IDS.chichibu.wadoukuroya]: new StationInfo(
    "和道黒谷",
    NO_TRANSFER,
    "わどうくろや"
  ),
  [STATION_IDS.chichibu.onohara]: new StationInfo(
    "大野原",
    NO_TRANSFER,
    "おおのはら"
  ),
  [STATION_IDS.chichibu.chichibu]: new StationInfo(
    "秩父",
    NO_TRANSFER,
    "ちちぶ"
  ),
  [STATION_IDS.chichibu.ohanabatake]: new StationInfo(
    "御花畑",
    NO_TRANSFER,
    "おはなばたけ"
  ),
  [STATION_IDS.chichibu.kagemori]: new StationInfo(
    "影森",
    [
      LINE_IDS.chichibu.chichibu,
      new ExchangeInfo(
        LINE_IDS.seibu.chichibu,
        STATION_IDS.seibu.seibu_chichibu
      ),
    ],
    "かげもり"
  ),
  [STATION_IDS.chichibu.urayamaguchi]: new StationInfo(
    "浦山口",
    NO_TRANSFER,
    "うらやまぐち"
  ),
  [STATION_IDS.chichibu.busyu_nakagawa]: new StationInfo(
    "武州中川",
    NO_TRANSFER,
    "ぶしゅうなかがわ"
  ),
  [STATION_IDS.chichibu.busyu_hino]: new StationInfo(
    "武州日野",
    NO_TRANSFER,
    "ぶしゅうひの"
  ),
  [STATION_IDS.chichibu.shiroku]: new StationInfo(
    "白久",
    NO_TRANSFER,
    "しろく"
  ),
  [STATION_IDS.chichibu.mitsumineguchi]: new StationInfo(
    "三峰口",
    NO_TRANSFER,
    "みつみねぐち"
  ),
  // #endregion 秩父鉄道
  //   #region 西武鉄道
  [STATION_IDS.seibu.shiinamachi]: new Station({
    name: "椎名町",
    pron: "しいなまち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.higashi_nagasaki]: new Station({
    name: "東長崎",
    pron: "ひがしながさき",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.ekoda]: new Station({name: "江古田", pron: "えこだ", pr: P.TOKYO}),
  [STATION_IDS.seibu.nerima]: new Station({
    name: "練馬",
    pron: "ねりま",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.seibu.ikebukuro,
      LINE_IDS.tokyo_subway.oedo,
      LINE_IDS.seibu.yurakucho,
      LINE_IDS.seibu.toshima,
    ],
  }),
  [STATION_IDS.seibu.syakujiikoen]: new Station({
    name: "石神井公園",
    pron: "しゃくじいこうえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.sakuradai]: new Station({name: "桜台", pron: "さくらだい", pr: P.TOKYO}),
  [STATION_IDS.seibu.nakamurabashi]: new StationInfo(
    "中村橋",
    [],
    "なかむらばし"
  ),
  [STATION_IDS.seibu.fujimidai]: new StationInfo("富士見台", [], "ふじみだい"),
  [STATION_IDS.seibu.nerima_takanodai]: new StationInfo(
    "練馬高野台",
    [],
    "ねりまたかのだい"
  ),
  [STATION_IDS.seibu.oizumi_gakuen]: new StationInfo(
    "大泉学園",
    [],
    "おおいずみがくえん"
  ),
  [STATION_IDS.seibu.hoya]: new StationInfo("保谷", [], "ほうや"),
  [STATION_IDS.seibu.hibarigaoka]: new StationInfo(
    "ひばりヶ丘",
    [],
    "ひばりがおか"
  ),
  [STATION_IDS.seibu.higashi_kurume]: new StationInfo(
    "東久留米",
    [],
    "ひがしくるめ"
  ),
  [STATION_IDS.seibu.kiyose]: new StationInfo("清瀬", [], "きよせ"),
  [STATION_IDS.seibu.akitsu]: new StationInfo(
    "秋津",
    [
      LINE_IDS.seibu.ikebukuro,
      new ExchangeInfo(
        LINE_IDS.jr_east.musashino,
        STATION_IDS.jr_east.shinakitsu
      ),
    ],
    "あきつ"
  ),
  [STATION_IDS.seibu.tokorozawa]: new StationInfo(
    "所沢",
    [LINE_IDS.seibu.ikebukuro, LINE_IDS.seibu.shinjuku],
    "ところざわ"
  ),
  [STATION_IDS.seibu.nishi_tokorozawa]: new StationInfo(
    "西所沢",
    [LINE_IDS.seibu.ikebukuro, LINE_IDS.seibu.sayama],
    "にしところざわ"
  ),
  [STATION_IDS.seibu.kotesashi]: new StationInfo("小手指", [], "こてさし"),
  [STATION_IDS.seibu.sayamagaoka]: new StationInfo(
    "狭山ヶ丘",
    [],
    "さやまがおか"
  ),
  [STATION_IDS.seibu.musashi_fujisawa]: new Station({
    name: "武蔵藤沢",
    pron: "むさしふじさわ",
    pr: P.SAITAMA,
  }
  ),
  [STATION_IDS.seibu.inariyamakoen]: new Station({name: "稲荷山公園", pron: "いなりやまこうえん", pr: P.SAITAMA}),
  [STATION_IDS.seibu.irumashi]: new Station({
    name: "入間市",
    pron: "いるまし",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.bushi]: new Station({name: "仏子", pron: "ぶし", pr: P.SAITAMA}),
  [STATION_IDS.seibu.motokaji]: new Station({name: "元加治", pron: "もとかじ", pr: P.SAITAMA}),
  [STATION_IDS.seibu.hanno]: new Station({
    name: "飯能",
    pron: "はんのう",
    pr: P.SAITAMA,
    lines: [LINE_IDS.seibu.ikebukuro, LINE_IDS.seibu.chichibu],
  }),
  [STATION_IDS.seibu.shimo_yamaguchi]: new Station({name: "下山口", pron: "しもやまぐち", pr: P.SAITAMA}),
  [STATION_IDS.seibu.seibukyujoumae]: new Station({name: "西武球場前", pron: "せいぶきゅうじょうまえ", pr: P.SAITAMA, lines: [
    LINE_IDS.seibu.sayama,
    LINE_IDS.seibu.yamaguchi,
  ]}),
  [STATION_IDS.seibu.seibuen_yuenchi]: new Station({name: "西武園ゆうえんち", pron: "せいぶえんゆうえんち", pr: P.SAITAMA}),
  [STATION_IDS.seibu.seibuen]: new Station({name: "西武園", pron: "せいぶえん", pr: P.SAITAMA}),
  [STATION_IDS.seibu.shin_koganei]: new Station({name: "新小金井", pron: "しんこがねい", pr: P.SAITAMA}),
  [STATION_IDS.seibu.tama]: new Station({name: "多摩", pron: "たま", pr: P.TOKYO}),
  [STATION_IDS.seibu.shiraitodai]: new Station({name: "白糸台", pron: "しらいとだい", pr: P.TOKYO}),
  [STATION_IDS.seibu.kyouteijoumae]: new Station({name: "競艇場前", pron: "きょうていじょうまえ", pr: P.TOKYO}),
  [STATION_IDS.seibu.koremasa]: new Station({name: "是政", pron: "これまさ", pr: P.TOKYO}),

  // 新宿線
  [STATION_IDS.seibu.seibu_shinjuku]: new StationInfo(
    "西武新宿",
    [
      LINE_IDS.seibu.shinjuku,
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.shinjuku),
      new ExchangeInfo(
        LINE_IDS.jr_east.chuou_honsen,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(LINE_IDS.jr_east.saikyou, STATION_IDS.jr_east.shinjuku),
      new ExchangeInfo(
        LINE_IDS.jr_sotetsu_chokutsu,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.jr_east.shonan_shinjuku,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.shinjuku,
        STATION_IDS.tokyo_subway.shinsen_shinjuku
      ),
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.oedo,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(LINE_IDS.keiou.keiou, STATION_IDS.jr_east.shinjuku),
      new ExchangeInfo(
        LINE_IDS.keiou.keioushinsen,
        STATION_IDS.tokyo_subway.shinsen_shinjuku
      ),
      new ExchangeInfo(LINE_IDS.odakyu.odawara, STATION_IDS.jr_east.shinjuku),
    ],
    "せいぶしんじゅく"
  ),
  [STATION_IDS.seibu.shimo_ochiai]: new StationInfo(
    "下落合",
    [],
    "しもおちあい"
  ),
  [STATION_IDS.seibu.arai_yakushimae]: new StationInfo(
    "新井薬師前",
    [],
    "あらいやくしまえ"
  ),
  [STATION_IDS.seibu.numabashi]: new StationInfo("沼橋", [], "ぬまばし"),
  [STATION_IDS.seibu.nogata]: new StationInfo("野方", [], "のがた"),
  [STATION_IDS.seibu.toritsu_kasei]: new StationInfo(
    "都立家政",
    [],
    "とりつかせい"
  ),
  [STATION_IDS.seibu.washinomiya]: new StationInfo("鷲ノ宮", [], "わしのみや"),
  [STATION_IDS.seibu.shimo_igusa]: new StationInfo("下井草", [], "しもいぐさ"),
  [STATION_IDS.seibu.iogi]: new Station({
    name: "井荻",
    pron: "いおぎ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.kami_igusa]: new StationInfo("上井草", [], "かみいぐさ"),
  [STATION_IDS.seibu.kami_syakujii]: new Station({
    name: "上石神井",
    pron: "かみしゃくじい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.musashiseki]: new Station({
    name: "武蔵関",
    pron: "むさしせき",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.higashi_fushimi]: new Station({
    name: "東伏見",
    pron: "ひがしふしみ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.kodaira]: new Station({
    name: "小平",
    pron: "こだいら",
    pr: P.TOKYO,
    lines: [LINE_IDS.seibu.shinjuku, LINE_IDS.seibu.haijima],
  }),
  [STATION_IDS.seibu.higashi_murayama]: new Station({
    name: "東村山",
    pron: "ひがしむらやま",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.seibu.seibuen,
      LINE_IDS.seibu.kokubunji,
      LINE_IDS.seibu.shinjuku,
    ],
  }),
  [STATION_IDS.seibu.seibu_yazawa]: new Station({
    name: "西武柳沢",
    pron: "せいぶやざわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.tanashi]: new Station({
    name: "田無",
    pron: "たなし",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.hana_koganei]: new Station({
    name: "花小金井",
    pron: "はなこがねい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.kumegawa]: new Station({
    name: "久米川",
    pron: "くめがわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.kuko_koen]: new Station({
    name: "空港公園",
    pron: "くうこうこうえん",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.shin_tokorozawa]: new Station({
    name: "新所沢",
    pron: "しんところざわ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.iriso]: new Station({
    name: "入曾",
    pron: "いりそ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.sayamashi]: new Station({
    name: "狭山市",
    pron: "さやまし",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.shin_sayama]: new Station({
    name: "新狭山",
    pron: "しんさやま",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.minami_otsuka]: new Station({
    name: "南大塚",
    pron: "みなみおおつか",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.hon_kawagoe]: new Station({
    name: "本川越",
    pron: "ほんかわごえ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.koma]: new Station({
    name: "高麗",
    pron: "こま",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.musashi_yokote]: new Station({
    name: "武蔵横手",
    pron: "むさしよこて",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.higashi_agano]: new Station({
    name: "東吾野",
    pron: "ひがしあがの",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.agano]: new Station({
    name: "吾野",
    pron: "あがの",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.nishi_agano]: new Station({
    name: "西吾野",
    pron: "にしあがの",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.syoumaru]: new Station({
    name: "正丸",
    pron: "しょうまる",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.ashigakubo]: new Station({
    name: "芦ヶ久保",
    pron: "あしがくぼ",
    pr: P.SAITAMA,
  }),
  [STATION_IDS.seibu.yokose]: new Station({
    name: "横瀬",
    pron: "よこせ",
    pr: P.SAITAMA,
    lines: [
      LINE_IDS.seibu.chichibu,
      new Direct(LINE_IDS.chichibu.chichibu, STATION_IDS.chichibu.ohanabatake),
    ],
  }),
  [STATION_IDS.seibu.seibu_chichibu]: new Station({
    name: "西武秩父",
    pron: "せいぶちちぶ",
    pr: P.SAITAMA,
    lines: [
      LINE_IDS.seibu.chichibu,
      new Direct(LINE_IDS.chichibu.chichibu, STATION_IDS.chichibu.kagemori),
    ],
  }),
  [STATION_IDS.seibu.shin_sakuradai]: new Station({
    name: "新桜台",
    pron: "しんさくらだい",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.toshimaen]: new Station({
    name: "豊島園",
    pron: "としまえん",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.seibu.toshima,
      LINE_IDS.tokyo_subway.oedo,
    ]
  }),
  [STATION_IDS.seibu.hitotsubashi_gakuen]: new Station({name: "一橋学園", pron: "ひとつばしがくえん", pr: P.TOKYO}),
  [STATION_IDS.seibu.oume_kaidou]: new Station({name: "青梅街道", pron: "おうめかいどう", pr: P.TOKYO}),
  [STATION_IDS.seibu.yasaka]: new Station({name: "八坂", pron: "やさか", pr: P.TOKYO}),
  [STATION_IDS.seibu.hagiyama]: new Station({name: "萩山", pron: "はぎやま", pr: P.TOKYO, lines: [
    LINE_IDS.seibu.tamako,
    LINE_IDS.seibu.haijima,
  ]}),
  [STATION_IDS.seibu.musashi_yamato]: new Station({name: "武蔵大和", pron: "むさしやまと", pr: P.TOKYO}),
  [STATION_IDS.seibu.tamako]: new Station({name: "多摩湖", pron: "たまこ", pr: P.TOKYO, lines: [
    LINE_IDS.seibu.tamako,
    LINE_IDS.seibu.yamaguchi,
  ]}),
  [STATION_IDS.seibu.koigakubo]: new Station({name: "恋ヶ窪", pron: "こいがくぼ", pr: P.SAITAMA}),
  [STATION_IDS.seibu.takanodai]: new Station({name: "鷹の台", pron: "たかのだい", pr: P.SAITAMA}),
  [STATION_IDS.seibu.ogawa]: new Station({name: "小川", pron: "おがわ", pr: P.SAITAMA, lines: [
    LINE_IDS.seibu.kokubunji,
    LINE_IDS.seibu.haijima,
  ]}),
  [STATION_IDS.seibu.higashi_yamatoshi]: new Station({
    name: "東大和市",
    pron: "ひがしやまとし",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.tamagawa_jousui]: new Station({
    name: "玉川上水",
    pron: "たまがわじょうすい",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.seibu.haijima,
      LINE_IDS.tama_monorail.tama_monorail,
    ]
  }),
  [STATION_IDS.seibu.musashi_sunagawa]: new Station({
    name: "武蔵砂川",
    pron: "むさしすながわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.seibu.seibu_tachikawa]: new Station({
    name: "西武立川",
    pron: "せいぶたちかわ",
    pr: P.TOKYO,
  }),

  //   #endregion 西武鉄道
  //  #endregion 埼玉
  // #endregion 関東

  // #region JR東日本
  // 川越線(JA)
  [STATION_IDS.jr_east.nisshin]: new StationInfo("日進", [], "にっしん"),
  [STATION_IDS.jr_east.nishi_omiya]: new StationInfo(
    "西大宮",
    [],
    "にしおおみや"
  ),
  [STATION_IDS.jr_east.sashiougi]: new StationInfo("指扇", [], "さしおうぎ"),
  [STATION_IDS.jr_east.minami_furuya]: new StationInfo(
    "南古谷",
    [],
    "みなみふるや"
  ),
  [STATION_IDS.jr_east.kawagoe]: new StationInfo(
    "川越",
    [LINE_IDS.jr_east.kawagoe, LINE_IDS.toubu.toujou],
    "かわごえ"
  ),
  [STATION_IDS.jr_east.nishi_kawagoe]: new StationInfo(
    "西川越",
    [],
    "にしかわごえ"
  ),
  [STATION_IDS.jr_east.matoba]: new StationInfo("的場", [], "まとば"),
  [STATION_IDS.jr_east.kasahata]: new StationInfo("笠幡", [], "かさはた"),
  [STATION_IDS.jr_east.musashi_takahagi]: new StationInfo(
    "武蔵高萩",
    [],
    "むさしたかはぎ"
  ),
  [STATION_IDS.jr_east.komagawa]: new StationInfo(
    "高麗川",
    [LINE_IDS.jr_east.kawagoe, LINE_IDS.jr_east.hachiko],
    "こまがわ"
  ),
  [STATION_IDS.jr_east.atsugi]: new StationInfo(
    "厚木",
    [LINE_IDS.odakyu.odawara, LINE_IDS.jr_east.sagami],
    "あつぎ"
  ),
  // 青梅線(JC)
  [STATION_IDS.jr_east.nishi_tachikawa]: new StationInfo(
    "西立川",
    NO_TRANSFER,
    "にしたちかわ"
  ),
  [STATION_IDS.jr_east.higashi_nakagami]: new StationInfo(
    "東中神",
    NO_TRANSFER,
    "ひがしなかがみ"
  ),
  [STATION_IDS.jr_east.nakagami]: new StationInfo(
    "中神",
    NO_TRANSFER,
    "なかがみ"
  ),
  [STATION_IDS.jr_east.akishima]: new StationInfo(
    "昭島",
    NO_TRANSFER,
    "あきしま"
  ),
  [STATION_IDS.jr_east.ushihama]: new StationInfo(
    "牛浜",
    NO_TRANSFER,
    "うしばま"
  ),
  [STATION_IDS.jr_east.fussa]: new StationInfo("福生", NO_TRANSFER, "ふっさ"),
  [STATION_IDS.jr_east.hamura]: new StationInfo("羽村", NO_TRANSFER, "はむら"),
  [STATION_IDS.jr_east.ozaku]: new StationInfo("小作", NO_TRANSFER, "おざく"),
  [STATION_IDS.jr_east.kabe]: new StationInfo("河辺", NO_TRANSFER, "かべ"),
  [STATION_IDS.jr_east.higashi_oume]: new StationInfo(
    "東青梅",
    NO_TRANSFER,
    "ひがしおうめ"
  ),
  [STATION_IDS.jr_east.oume]: new StationInfo("青梅", NO_TRANSFER, "おうめ"),
  [STATION_IDS.jr_east.miyanohira]: new StationInfo(
    "宮ノ平",
    NO_TRANSFER,
    "みやのひら"
  ),
  [STATION_IDS.jr_east.hinatawada]: new StationInfo(
    "日向和田",
    NO_TRANSFER,
    "ひなたわだ"
  ),
  [STATION_IDS.jr_east.ishigamimae]: new StationInfo(
    "石神前",
    NO_TRANSFER,
    "いしがみまえ"
  ),
  [STATION_IDS.jr_east.futamatao]: new StationInfo(
    "二俣尾",
    NO_TRANSFER,
    "ふたまたお"
  ),
  [STATION_IDS.jr_east.ikusabata]: new StationInfo(
    "幾米田",
    NO_TRANSFER,
    "いくさばた"
  ),
  [STATION_IDS.jr_east.sawai]: new StationInfo("沢井", NO_TRANSFER, "さわい"),
  [STATION_IDS.jr_east.mitake]: new StationInfo("御嶽", NO_TRANSFER, "みたけ"),
  [STATION_IDS.jr_east.kawai]: new StationInfo("川井", NO_TRANSFER, "かわい"),
  [STATION_IDS.jr_east.kori]: new StationInfo("古里", NO_TRANSFER, "こり"),
  [STATION_IDS.jr_east.hatonosu]: new StationInfo(
    "鳩ノ巣",
    NO_TRANSFER,
    "はとのす"
  ),
  [STATION_IDS.jr_east.shiromaru]: new StationInfo(
    "城丸",
    NO_TRANSFER,
    "しろまる"
  ),
  [STATION_IDS.jr_east.okutama]: new StationInfo(
    "奥多摩",
    NO_TRANSFER,
    "おくたま"
  ),

  // #region 宇都宮線(JU)
  [STATION_IDS.jr_east.utsunomiya]: new StationInfo(
    "宇都宮",
    [
      LINE_IDS.jr_east.nikkou,
      LINE_IDS.jr_east.karasuyama,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
    "うつのみや"
  ),
  [STATION_IDS.jr_east.kuroiso]: new StationInfo(
    "黒磯",
    [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.utunomiya],
    "くろいそ"
  ),
  [STATION_IDS.jr_east.nishinasuno]: new StationInfo(
    "西那須野",
    [],
    "にしなすの"
  ),
  [STATION_IDS.jr_east.nozaki]: new StationInfo("野崎", [], "のざき"),
  [STATION_IDS.jr_east.yaita]: new StationInfo("矢板", [], "やいた"),
  [STATION_IDS.jr_east.kataoka]: new StationInfo("片岡", [], "かたおか"),
  [STATION_IDS.jr_east.kamasusaka]: new StationInfo("蒲須坂", [], "かますさか"),
  [STATION_IDS.jr_east.ujiie]: new StationInfo("氏家", [], "うじいえ"),
  [STATION_IDS.jr_east.okamoto]: new StationInfo(
    "岡本",
    [LINE_IDS.jr_east.karasuyama, LINE_IDS.jr_east.utunomiya],
    "おかもと"
  ),
  [STATION_IDS.jr_east.housyakuji]: new StationInfo(
    "宝積寺",
    [LINE_IDS.jr_east.karasuyama, LINE_IDS.jr_east.utunomiya],
    "ほうしゃくじ"
  ),
  [STATION_IDS.jr_east.oku]: new StationInfo(
    "尾久",
    [LINE_IDS.jr_east.takasaki, LINE_IDS.jr_east.utunomiya],
    "おく"
  ),
  [STATION_IDS.jr_east.suzumenomiya]: new StationInfo(
    "雀宮",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "すずめのみや"
  ),
  [STATION_IDS.jr_east.ishibashi]: new StationInfo(
    "石橋",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "いしばし"
  ),
  [STATION_IDS.jr_east.jichiidai]: new StationInfo(
    "自治医大",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "じちいだい"
  ),
  [STATION_IDS.jr_east.koganei]: new StationInfo(
    "小金井",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "こがねい"
  ),
  [STATION_IDS.jr_east.oyama]: new StationInfo(
    "小山",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.mito,
      LINE_IDS.jr_east.shinkansen.tohoku,
    ],
    "おやま"
  ),
  [STATION_IDS.jr_east.mamada]: new StationInfo(
    "間々田",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "ままだ"
  ),
  [STATION_IDS.jr_east.nogi]: new StationInfo(
    "野木",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "のぎ"
  ),
  [STATION_IDS.jr_east.koga]: new StationInfo(
    "古河",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "こが"
  ),
  [STATION_IDS.jr_east.kurihashi]: new StationInfo(
    "栗橋",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.toubu.nikkou,
    ],
    "くりはし"
  ),
  [STATION_IDS.jr_east.higashiwashinomiya]: new StationInfo(
    "東鷲宮",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "ひがしわしのみや"
  ),
  [STATION_IDS.jr_east.kuki]: new StationInfo(
    "久喜",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.toubu.isezaki,
    ],
    "くき"
  ),
  [STATION_IDS.jr_east.shinshiraoka]: new StationInfo(
    "新白岡",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "しんしらおか"
  ),
  [STATION_IDS.jr_east.shiraoka]: new StationInfo(
    "白岡",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "しらおか"
  ),
  [STATION_IDS.jr_east.hasuda]: new StationInfo(
    "蓮田",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "はすだ"
  ),
  [STATION_IDS.jr_east.higashiomiya]: new StationInfo(
    "東大宮",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "ひがしおおみや"
  ),
  [STATION_IDS.jr_east.toro]: new StationInfo(
    "土呂",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.utunomiya],
    "とろ"
  ),
  [STATION_IDS.jr_east.maebashi]: new StationInfo(
    "前橋",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.ryoumou],
    "まえばし"
  ),
  [STATION_IDS.jr_east.shinmaebashi]: new StationInfo(
    "新前橋",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.agatsuma,
    ],
    "しんまえばし"
  ),
  [STATION_IDS.jr_east.ino]: new StationInfo(
    "井野",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.jr_east.ryoumou,
    ],
    "いの"
  ),
  [STATION_IDS.jr_east.takasakitonyamachi]: new StationInfo(
    "高崎問屋町",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.jr_east.ryoumou,
    ],
    "たかさきとにやまち"
  ),
  [STATION_IDS.jr_east.takasaki]: new StationInfo(
    "高崎",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.ryoumou,
      LINE_IDS.jr_east.agatsuma,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.joushin.joushin,
    ],
    "たかさき"
  ),
  [STATION_IDS.jr_east.kuragano]: new StationInfo(
    "倉賀野",
    [
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.hachiko,
    ],
    "くらがの"
  ),
  [STATION_IDS.jr_east.shinmachi]: new StationInfo(
    "新町",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "しんまち"
  ),
  [STATION_IDS.jr_east.jinbohara]: new StationInfo(
    "神保原",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "じんぼはら"
  ),
  [STATION_IDS.jr_east.honnjou]: new StationInfo(
    "本庄",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "ほんじょう"
  ),
  [STATION_IDS.jr_east.okabe]: new StationInfo(
    "岡部",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "おかべ"
  ),
  [STATION_IDS.jr_east.hukaya]: new StationInfo(
    "深谷",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "ふかや"
  ),
  [STATION_IDS.jr_east.kagohara]: new StationInfo(
    "籠原",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "かごはら"
  ),
  [STATION_IDS.jr_east.gyouda]: new StationInfo(
    "行田",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "ぎょうだ"
  ),
  [STATION_IDS.jr_east.hukiage]: new StationInfo(
    "吹上",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "ふきあげ"
  ),
  [STATION_IDS.jr_east.kitakounosu]: new StationInfo(
    "北鴻巣",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "きたこうのす"
  ),
  [STATION_IDS.jr_east.kounosu]: new StationInfo(
    "鴻巣",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "こうのす"
  ),
  [STATION_IDS.jr_east.kitamoto]: new StationInfo(
    "北本",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "きたもと"
  ),
  [STATION_IDS.jr_east.okegawa]: new StationInfo(
    "桶川",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "おけがわ"
  ),
  [STATION_IDS.jr_east.kitaageo]: new StationInfo(
    "北上尾",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "きたあげお"
  ),
  [STATION_IDS.jr_east.ageo]: new StationInfo(
    "上尾",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "あげお"
  ),
  [STATION_IDS.jr_east.miyahara]: new StationInfo(
    "宮原",
    [LINE_IDS.jr_east.shonan_shinjuku, LINE_IDS.jr_east.takasaki],
    "みやはら"
  ),
  [STATION_IDS.jr_east.omiya]: new StationInfo(
    "大宮",
    [
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.kawagoe,
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.toubu.urban_park_line,
      LINE_IDS.saitama_shintoshi_koutsu.new_shuttle,
    ],
    "おおみや"
  ),
  [STATION_IDS.jr_east.saitama_shintoshin]: new StationInfo(
    "さいたま新都心",
    [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.takasaki,
    ],
    "さいたましんとしん"
  ),
  [STATION_IDS.jr_east.yono]: new StationInfo("与野", [], "よの"),
  [STATION_IDS.jr_east.kitaurawa]: new StationInfo("北浦和", [], "きたうらわ"),
  [STATION_IDS.jr_east.tabata]: new StationInfo("田端", [], "たばた"),
  [STATION_IDS.jr_east.urawa]: new StationInfo(
    "浦和",
    [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
    "うらわ"
  ),
  [STATION_IDS.jr_east.minami_urawa]: new StationInfo(
    "南浦和",
    [],
    "みなみうらわ"
  ),
  [STATION_IDS.jr_east.warabi]: new StationInfo("蕨", [], "わらび"),
  [STATION_IDS.jr_east.nishikawaguchi]: new StationInfo(
    "西川口",
    [],
    "にしかわぐち"
  ),
  [STATION_IDS.jr_east.kawaguti]: new StationInfo("川口", [], "かわぐち"),
  [STATION_IDS.jr_east.akahane]: new StationInfo(
    "赤羽",
    [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.utunomiya,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
    "あかはね"
  ),
  [STATION_IDS.jr_east.higashijujo]: new Station({
    name: "東十条",
    pron: "ひがしじゅうじょう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.ouji]: new Station({
    name: "王子",
    pron: "おうじ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kaminakazato]: new Station({
    name: "上中里",
    pron: "かみなかざと",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.tabata]: new Station({
    name: "田端",
    pron: "たばた",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.nippori]: new Station({
    name: "日暮里",
    pron: "にっぽり",
    pr: P.TOKYO,
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
    pron: "うぐいすだに",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
  }),
  [STATION_IDS.jr_east.ueno]: new Station({
    name: "上野",
    pron: "うえの",
    pr: P.TOKYO,
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
    pron: "おかちまち",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.keihin_touhoku, LINE_IDS.jr_east.yamanote],
  }),
  [STATION_IDS.jr_east.akihabara]: new Station({
    name: "秋葉原",
    pron: "あきはばら",
    pr: P.TOKYO,
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
    pron: "かんだ",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.keihin_touhoku,
    ],
  }),
  [STATION_IDS.jr_east.tokyo]: new Station({
    name: "東京",
    pron: "とうきょう",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.tokaido,
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
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.shinkansen.hokuriku,
    ],
  }),
  [STATION_IDS.jr_east.chiba]: new Station({
    name: "千葉",
    pron: "ちば",
    pr: P.CHIBA,
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
    pron: "にしちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.inage]: new Station({
    name: "稲毛",
    pron: "いなげ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shinkemigawa]: new Station({
    name: "新検見川",
    pron: "しんけみがわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.makuhari]: new Station({
    name: "幕張",
    pron: "まくはり",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.makuharihongou]: new Station({
    name: "幕張本郷",
    pron: "まくはりほんごう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tsudanuma]: new Station({
    name: "津田沼",
    pron: "つだぬま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_funabashi]: new Station({
    name: "東船橋",
    pron: "ひがしふなばし",
    pr: P.CHIBA,
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
  [STATION_IDS.jr_east.okubo]: new StationInfo(
    "大久保",
    [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
    "おおくぼ"
  ),
  [STATION_IDS.jr_east.higashinakano]: new StationInfo(
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
  [STATION_IDS.jr_east.nishiogikubo]: new StationInfo(
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
    pron: "むさしさかい",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.seibu.tamagawa
    ],
  }),
  [STATION_IDS.jr_east.higashi_koganei]: new Station({name: "東小金井", pron: "ひがしこがねい", pr: P.TOKYO}),
  [STATION_IDS.jr_east.musashi_koganei]: new Station({name: "武蔵小金井", pron: "むさしかがねい", pr: P.TOKYO}),
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
    pron: "くにたち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.tachikawa]: new Station({
    name: "立川",
    pron: "たちかわ",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.oume,
      LINE_IDS.jr_east.nanbu,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tama_monorail.tama_monorail,
    ],
  }),
  [STATION_IDS.jr_east.hino]: new Station({
    name: "日野",
    pron: "ひの",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.jr_east.toyoda]: new Station({
    name: "豊田",
    pron: "とよだ",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.jr_east.nishihachiouji]: new Station({
    name: "西八王子",
    pron: "にしはちおうじ",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.chuou_honsen, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.jr_east.takao]: new Station({
    name: "高尾",
    pron: "たかお",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.chuo_soubu_kankou,
      LINE_IDS.keiou.takao,
    ],
  }),
  [STATION_IDS.jr_east.yurakucho]: new StationInfo(
    "有楽町",
    [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_metro.yurakucho,
    ],
    "ゆうらくちょう"
  ),
  [STATION_IDS.jr_east.shinbashi]: new StationInfo("新橋", [
    LINE_IDS.jr_east.yamanote,
    LINE_IDS.jr_east.yokosuka,
    LINE_IDS.jr_east.jouban,
    LINE_IDS.jr_east.keihin_touhoku,
    LINE_IDS.jr_east.tokaido,
    LINE_IDS.yurikamome.yurikamome,
    LINE_IDS.tokyo_metro.ginza,
    LINE_IDS.tokyo_subway.asakusa,
  ]),
  [STATION_IDS.jr_east.hamamatsucho]: new StationInfo(
    "浜松町",
    [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_monorail.haneda_kuko,
    ],
    "はままつちょう"
  ),
  [STATION_IDS.jr_east.tamachi]: new StationInfo(
    "田町",
    [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
    "たまち"
  ),
  [STATION_IDS.jr_east.takanawa_gateway]: new StationInfo(
    "高輪ゲートウェイ",
    [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
    "たかなわげーとうぇい"
  ),
  [STATION_IDS.jr_east.shinagawa]: new StationInfo(
    "品川",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.keikyu.honsen,
    ],
    "しながわ"
  ),
  [STATION_IDS.jr_east.oimachi]: new StationInfo(
    "大井町",
    [
      LINE_IDS.toukyu.oimachi,
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.shonan_shinjuku,
    ],
    "おおいまち"
  ),
  [STATION_IDS.jr_east.nishioi]: new StationInfo(
    "西大井",
    [LINE_IDS.jr_east.keihin_touhoku, LINE_IDS.toukyo_rinkai_kousoku.rinkai],
    "にしおおい"
  ),
  [STATION_IDS.jr_east.omori]: new StationInfo("大森", [], "おおもり"),
  [STATION_IDS.jr_east.kamata]: new StationInfo(
    "蒲田",
    [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.toukyu.tamagawa,
      LINE_IDS.toukyu.ikegami,
    ],
    "かまた"
  ),
  [STATION_IDS.jr_east.kawasaki]: new StationInfo(
    "川崎",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.nanbu,
      LINE_IDS.keikyu.honsen,
    ],
    "かわさき"
  ),
  [STATION_IDS.jr_east.tsurumi]: new StationInfo(
    "鶴見",
    [
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.tsurumi,
      new ExchangeInfo(
        LINE_IDS.keikyu.honsen,
        STATION_IDS.keikyu.keikyutsurumi
      ),
    ],
    "つるみ"
  ),
  [STATION_IDS.jr_east.shinkoyasu]: new StationInfo("新子安", [], "しんこやす"),
  [STATION_IDS.jr_east.higashikanagawa]: new StationInfo(
    "東神奈川",
    [],
    "ひがしかながわ"
  ),
  [STATION_IDS.jr_east.yokohama]: new StationInfo(
    "横浜",
    [
      LINE_IDS.jr_east.yokosuka,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.jr_east.negishi,
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.sagami.honsen,
      LINE_IDS.yokohama_subway.blue_line,
      LINE_IDS.keikyu.honsen,
      LINE_IDS.yokohama_kousoku.minato_mirai,
    ],
    "よこはま"
  ),
  [STATION_IDS.jr_east.shinjuku]: new StationInfo(
    "新宿",
    [
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
    "しんじゅく"
  ),
  [STATION_IDS.jr_east.shibuya]: new StationInfo(
    "渋谷",
    [
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
    "しぶや"
  ),
  [STATION_IDS.jr_east.ebisu]: new StationInfo(
    "恵比寿",
    [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.tokyo_metro.hibiya,
    ],
    "えびす"
  ),
  [STATION_IDS.jr_east.meguro]: new StationInfo(
    "目黒",
    [
      LINE_IDS.toukyu.meguro,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_subway.mita,
    ],
    "めぐろ"
  ),
  [STATION_IDS.jr_east.gotanda]: new StationInfo(
    "五反田",
    [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.toukyu.ikegami,
      LINE_IDS.tokyo_subway.asakusa,
    ],
    "ごたんだ"
  ),
  [STATION_IDS.jr_east.osaki]: new StationInfo(
    "大崎",
    [
      LINE_IDS.jr_east.saikyou,
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_sotetsu_chokutsu,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
    "おおさき"
  ),
  [STATION_IDS.jr_east.nishinippori]: new StationInfo(
    "西日暮里",
    [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.keihin_touhoku,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_subway.nippori_toneri_liner,
    ],
    "にしにっぽり"
  ),
  [STATION_IDS.jr_east.tabata]: new StationInfo(
    "田端",
    [LINE_IDS.jr_east.yamanote, LINE_IDS.jr_east.keihin_touhoku],
    "たばた"
  ),
  [STATION_IDS.jr_east.komagome]: new StationInfo(
    "駒込",
    [LINE_IDS.jr_east.yamanote, LINE_IDS.tokyo_metro.nanboku],
    "こまごめ"
  ),
  [STATION_IDS.jr_east.sugamo]: new StationInfo(
    "巣鴨",
    [LINE_IDS.jr_east.yamanote, LINE_IDS.tokyo_subway.mita],
    "すがも"
  ),
  [STATION_IDS.jr_east.otsuka]: new StationInfo("大塚", []),
  [STATION_IDS.jr_east.ikebukuro]: new StationInfo(
    "池袋",
    [
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
    "いけぶくろ"
  ),
  [STATION_IDS.jr_east.itabashi]: new StationInfo("板橋", [], "いたばし"),
  [STATION_IDS.jr_east.jujo]: new StationInfo("十条", [], "じゅうじょう"),
  [STATION_IDS.jr_east.kitaakahane]: new StationInfo(
    "北赤羽",
    [],
    "きたあかばね"
  ),
  [STATION_IDS.jr_east.ukimafunado]: new StationInfo(
    "浮間舟渡",
    [],
    "うきまふなと"
  ),
  [STATION_IDS.jr_east.todakouen]: new StationInfo(
    "戸田公園",
    [],
    "とだこうえん"
  ),
  [STATION_IDS.jr_east.toda]: new StationInfo("戸田", [], "とだ"),
  [STATION_IDS.jr_east.kitatoda]: new StationInfo("北戸田", [], "きたとだ"),
  [STATION_IDS.jr_east.musashiurawa]: new StationInfo(
    "武蔵浦和",
    [LINE_IDS.jr_east.musashino, LINE_IDS.jr_east.saikyou],
    "むさしうらわ"
  ),
  [STATION_IDS.jr_east.nakaurawa]: new StationInfo("中浦和", [], "なかうらわ"),
  [STATION_IDS.jr_east.minamiyono]: new StationInfo("南与野", [], "みなみよの"),
  [STATION_IDS.jr_east.yonohonmachi]: new StationInfo(
    "与野本町",
    [],
    "よのほんまち"
  ),
  [STATION_IDS.jr_east.kitayono]: new StationInfo("北与野", [], "きたよの"),
  [STATION_IDS.jr_east.mejiro]: new StationInfo("目白", [], "めじろ"),
  [STATION_IDS.jr_east.takadanobaba]: new StationInfo(
    "高田馬場",
    [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.seibu.shinjuku,
    ],
    "たかだのばば"
  ),
  [STATION_IDS.jr_east.shinokubo]: new StationInfo("新大久保", []),
  [STATION_IDS.jr_east.yoyogi]: new StationInfo(
    "代々木",
    [
      LINE_IDS.jr_east.yamanote,
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_subway.oedo,
    ],
    "よよぎ"
  ),
  [STATION_IDS.jr_east.harajuku]: new StationInfo("原宿", []),
  // #endregion 宇都宮線
  // #region 横須賀線
  [STATION_IDS.jr_east.shinkawasaki]: new StationInfo(
    "新川崎",
    [],
    "しんかわさき"
  ),
  [STATION_IDS.jr_east.hodogaya]: new StationInfo("保土ヶ谷", [], "ほどがや"),
  [STATION_IDS.jr_east.higashitotsuka]: new StationInfo(
    "東戸塚",
    [],
    "ひがしとつか"
  ),
  [STATION_IDS.jr_east.kamakura]: new StationInfo(
    "鎌倉",
    [LINE_IDS.jr_east.yokosuka, LINE_IDS.enoshima.enoshima],
    "かまくら"
  ),
  [STATION_IDS.jr_east.kitakamakura]: new StationInfo(
    "北鎌倉",
    [],
    "きたかまくら"
  ),
  [STATION_IDS.jr_east.zushi]: new StationInfo("逗子", [], "ずし"),
  [STATION_IDS.jr_east.higashizushi]: new StationInfo("葉逗子", [], "ずし"),
  [STATION_IDS.jr_east.taura]: new StationInfo("田浦", [], "たうら"),
  [STATION_IDS.jr_east.yokosuka]: new StationInfo("横須賀", [], "よこすか"),
  [STATION_IDS.jr_east.kinugasa]: new StationInfo("衣笠", [], "きぬがさ"),
  [STATION_IDS.jr_east.kurihama]: new StationInfo("久里浜", [], "くりはま"),
  [STATION_IDS.jr_east.hachiouji]: new Station({
    name: "八王子",
    pron: "はちおうじ",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.jr_east.hachiko,
    ],
  }),
  [STATION_IDS.jr_east.katakura]: new StationInfo("片倉", [], "かたくら"),
  [STATION_IDS.jr_east.hachiouji_minamino]: new StationInfo(
    "八王子みなみ野",
    [],
    "はちおうじみなみの"
  ),
  [STATION_IDS.jr_east.aihara]: new StationInfo("相原", [], "あいはら"),
  [STATION_IDS.jr_east.hashimoto]: new StationInfo(
    "橋本",
    [
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.jr_east.sagami,
      LINE_IDS.keiou.sagamihara,
    ],
    "はしもと"
  ),
  [STATION_IDS.jr_east.sagamihara]: new StationInfo("相模原", [], "さがみはら"),
  [STATION_IDS.jr_east.huchinobe]: new StationInfo("淵野辺", [], "ふちのべ"),
  [STATION_IDS.jr_east.kobuchi]: new StationInfo("古渕", [], "こぶち"),
  [STATION_IDS.jr_east.machida]: new StationInfo("町田", [], "まちだ"),
  [STATION_IDS.jr_east.naruse]: new StationInfo("成瀬", [], "なるせ"),
  [STATION_IDS.jr_east.nagatsuta]: new StationInfo(
    "長津田",
    [
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.toukyu.denentoshi,
      LINE_IDS.toukyu.kodomonokuni,
    ],
    "ながつた"
  ),
  [STATION_IDS.jr_east.tokaichiba]: new StationInfo(
    "十日市場",
    [],
    "とおかいちば"
  ),
  [STATION_IDS.jr_east.nakayama]: new StationInfo(
    "中山",
    [LINE_IDS.jr_east.yokohama, LINE_IDS.yokohama_subway.green_line],
    "なかやま"
  ),
  [STATION_IDS.jr_east.kamoi]: new StationInfo("鴨居", [], "かもい"),
  [STATION_IDS.jr_east.kodukue]: new StationInfo("小机", [], "こづくえ"),
  [STATION_IDS.jr_east.shin_yokohama]: new StationInfo(
    "新横浜",
    [
      LINE_IDS.jr_east.yokohama,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.yokohama_subway.blue_line,
      LINE_IDS.sagami.sotetsushin_yokohama,
      LINE_IDS.toukyu.shin_yokohama,
    ],
    "しんよこはま"
  ),
  [STATION_IDS.jr_east.kikuna]: new StationInfo(
    "菊名",
    [LINE_IDS.jr_east.yokohama, LINE_IDS.toukyu.touyoko],
    "きくな"
  ),
  [STATION_IDS.jr_east.oguchi]: new StationInfo("大口", [], "おおぐち"),
  [STATION_IDS.jr_east.higashi_kanagawa]: new StationInfo(
    "東神奈川",
    [],
    "ひがしかながわ"
  ),
  [STATION_IDS.jr_east.sakuragicho]: new StationInfo(
    "桜木町",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "さくらぎちょう"
  ),
  [STATION_IDS.jr_east.kannai]: new StationInfo(
    "関内",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "かんない"
  ),
  [STATION_IDS.jr_east.ishikawacho]: new StationInfo(
    "石川町",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "いしかわちょう"
  ),
  [STATION_IDS.jr_east.yamate]: new StationInfo(
    "山手",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "やまて"
  ),
  [STATION_IDS.jr_east.negishi]: new StationInfo(
    "根岸",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "ねぎし"
  ),
  [STATION_IDS.jr_east.isogo]: new StationInfo(
    "磯子",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "いそご"
  ),
  [STATION_IDS.jr_east.shin_sugita]: new StationInfo(
    "新杉田",
    [
      LINE_IDS.jr_east.negishi,
      new ExchangeInfo(LINE_IDS.keikyu.honsen, STATION_IDS.keikyu.sugita),
    ],
    "しんすぎた"
  ),
  [STATION_IDS.jr_east.youkoudai]: new StationInfo(
    "洋光台",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "ようこうだい"
  ),
  [STATION_IDS.jr_east.kounandai]: new StationInfo(
    "港南台",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "こうなんだい"
  ),
  [STATION_IDS.jr_east.hongoudai]: new StationInfo(
    "本郷台",
    [LINE_IDS.jr_east.negishi, LINE_IDS.jr_east.yokohama],
    "ほんごうだい"
  ),
  [STATION_IDS.jr_east.ofuna]: new StationInfo(
    "大船",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.negishi,
      LINE_IDS.jr_east.yokohama,
    ],
    "おおふな"
  ),
  [STATION_IDS.jr_east.totsuka]: new StationInfo("戸塚", [], "とつか"),
  [STATION_IDS.jr_east.hujisawa]: new StationInfo(
    "藤沢",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.odakyu.enoshima,
    ],
    "ふじさわ"
  ),
  [STATION_IDS.jr_east.tsujido]: new StationInfo("辻堂", [], "つじどう"),
  [STATION_IDS.jr_east.chigasaki]: new StationInfo(
    "茅ヶ崎",
    [LINE_IDS.jr_east.tokaido, LINE_IDS.jr_east.sagami],
    "ちがさき"
  ),
  [STATION_IDS.jr_east.hiratsuka]: new StationInfo("平塚", [], "ひらつか"),
  [STATION_IDS.jr_east.oiso]: new StationInfo("大磯", [], "おおいそ"),
  [STATION_IDS.jr_east.ninomiya]: new StationInfo("二宮", [], "にのみや"),
  [STATION_IDS.jr_east.kozu]: new StationInfo("国府津", [], "こうづ"),
  [STATION_IDS.jr_east.kamonomiya]: new StationInfo("鴨宮", [], "かものみや"),
  [STATION_IDS.jr_east.odawara]: new StationInfo(
    "小田原",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.odakyu.odawara,
      LINE_IDS.odakyu.hakonetozan,
      LINE_IDS.izuhakone.daiyuzan,
    ],
    "おだわら"
  ),
  [STATION_IDS.jr_east.hayakawa]: new StationInfo("早川", [], "はやかわ"),
  [STATION_IDS.jr_east.nebukawa]: new StationInfo("根府川", [], "ねぶかわ"),
  [STATION_IDS.jr_east.manazuru]: new StationInfo("真鶴", [], "まなづる"),
  [STATION_IDS.jr_east.yugawara]: new StationInfo("湯河原", [], "ゆがわら"),
  [STATION_IDS.jr_east.atami]: new StationInfo("熱海", [], "あたみ"),
  // #endregion 横須賀線
  // #region 相模線(JG)
  [STATION_IDS.jr_east.kita_chigasaki]: new StationInfo(
    "北茅ヶ崎",
    NO_TRANSFER,
    "きたちがさき"
  ),
  [STATION_IDS.jr_east.kagawa]: new StationInfo("香川", NO_TRANSFER, "かがわ"),
  [STATION_IDS.jr_east.samukawa]: new StationInfo(
    "寒川",
    NO_TRANSFER,
    "さむかわ"
  ),
  [STATION_IDS.jr_east.miyayama]: new StationInfo(
    "宮山",
    NO_TRANSFER,
    "みややま"
  ),
  [STATION_IDS.jr_east.kurami]: new StationInfo("倉見", NO_TRANSFER, "くらみ"),
  [STATION_IDS.jr_east.kadosawabashi]: new StationInfo(
    "門沢橋",
    NO_TRANSFER,
    "かどさわばし"
  ),
  [STATION_IDS.jr_east.syake]: new StationInfo("社家", NO_TRANSFER, "しゃけ"),
  [STATION_IDS.jr_east.ebina]: new StationInfo("海老名", NO_TRANSFER, "えびな"),
  [STATION_IDS.jr_east.iriya]: new StationInfo("入谷", NO_TRANSFER, "いりや"),
  [STATION_IDS.jr_east.soubudai_shita]: new StationInfo(
    "相武台下",
    NO_TRANSFER,
    "そうぶだいした"
  ),
  [STATION_IDS.jr_east.shimomizo]: new StationInfo(
    "下溝",
    NO_TRANSFER,
    "しもみぞ"
  ),
  [STATION_IDS.jr_east.harataima]: new StationInfo(
    "原当麻",
    NO_TRANSFER,
    "はらたいま"
  ),
  [STATION_IDS.jr_east.banda]: new StationInfo("番田", NO_TRANSFER, "ばんだ"),
  [STATION_IDS.jr_east.kamimizo]: new StationInfo(
    "上溝",
    NO_TRANSFER,
    "かみみぞ"
  ),
  [STATION_IDS.jr_east.minami_hashimoto]: new StationInfo(
    "南橋本",
    NO_TRANSFER,
    "みなみはしもと"
  ),
  // #endregion 相模線
  // #region 鶴見線(JI)
  [STATION_IDS.jr_east.kokudou]: new StationInfo(
    "国道",
    NO_TRANSFER,
    "こくどう"
  ),
  [STATION_IDS.jr_east.tsurumi_ono]: new StationInfo(
    "鶴見大野",
    NO_TRANSFER,
    "つるみおおの"
  ),
  [STATION_IDS.jr_east.bentenbashi]: new StationInfo(
    "弁天橋",
    NO_TRANSFER,
    "べんてんばし"
  ),
  [STATION_IDS.jr_east.asano]: new StationInfo("浅野", NO_TRANSFER, "あさの"),
  [STATION_IDS.jr_east.anzen]: new StationInfo("安善", NO_TRANSFER, "あんぜん"),
  [STATION_IDS.jr_east.musashi_shiraishi]: new StationInfo(
    "武蔵白石",
    NO_TRANSFER,
    "むさししらいし"
  ),
  [STATION_IDS.jr_east.shouwa]: new StationInfo(
    "昭和",
    NO_TRANSFER,
    "しょうわ"
  ),
  [STATION_IDS.jr_east.hamakawasaki]: new StationInfo(
    "浜川崎",
    NO_TRANSFER,
    "はまかわさき"
  ),
  [STATION_IDS.jr_east.ougimachi]: new StationInfo(
    "扇町",
    NO_TRANSFER,
    "おうぎまち"
  ),
  [STATION_IDS.jr_east.shin_shibaura]: new StationInfo(
    "新芝浦",
    NO_TRANSFER,
    "しんしばうら"
  ),
  [STATION_IDS.jr_east.umi_shibaura]: new StationInfo(
    "海芝浦",
    NO_TRANSFER,
    "うみしばうら"
  ),
  [STATION_IDS.jr_east.okawa]: new StationInfo("大川", NO_TRANSFER, "おおかわ"),
  // #endregion 鶴見線
  // #region 京葉線(JK)
  [STATION_IDS.jr_east.hacchobori]: new StationInfo(
    "八丁堀",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.tokyo_metro.hibiya],
    "はっちょうぼり"
  ),
  [STATION_IDS.jr_east.ecchujima]: new StationInfo(
    "越中島",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "えっちゅうじま"
  ),
  [STATION_IDS.jr_east.shiomi]: new StationInfo(
    "潮見",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "しおみ"
  ),
  [STATION_IDS.jr_east.shinkiba]: new StationInfo(
    "新木場",
    [
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.jr_east.musashino,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
    "しんきば"
  ),
  [STATION_IDS.jr_east.kasai_rinkai_koen]: new StationInfo(
    "葛西臨海公園",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "かさいりんかいこうえん"
  ),
  [STATION_IDS.jr_east.shin_urayasu]: new StationInfo(
    "新浦安",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "しんうらやす"
  ),
  [STATION_IDS.jr_east.ichikawa_shiohama]: new StationInfo(
    "市川塩浜",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "いちかわしおはま"
  ),
  [STATION_IDS.jr_east.futamata_shinmachi]: new StationInfo(
    "二俣新町",
    NO_TRANSFER,
    "ふたまたしんまち"
  ),
  [STATION_IDS.jr_east.minami_funabashi]: new StationInfo(
    "南船橋",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "みなみふなばし"
  ),
  [STATION_IDS.jr_east.shin_narashino]: new StationInfo(
    "新習志野",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "しんならしの"
  ),
  [STATION_IDS.jr_east.kaihin_makuhari]: new StationInfo(
    "海浜幕張",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.jr_east.musashino],
    "かいひんまくはり"
  ),
  [STATION_IDS.jr_east.kemigawahama]: new StationInfo(
    "検見川浜",
    NO_TRANSFER,
    "けみがわはま"
  ),
  [STATION_IDS.jr_east.inage_kaigan]: new StationInfo(
    "稲毛海岸",
    NO_TRANSFER,
    "いなげかいがん"
  ),
  [STATION_IDS.jr_east.chiba_minato]: new StationInfo(
    "千葉みなと",
    [LINE_IDS.jr_east.keiyou, LINE_IDS.chiba_toshi_monorail.ichigou],
    "ちばみなと"
  ),
  [STATION_IDS.jr_east.soga]: new StationInfo(
    "蘇我",
    [
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.jr_east.uchibou,
      LINE_IDS.jr_east.sotobou,
    ],
    "そが"
  ),
  // #endregion 京葉線
  // #region 常磐線(JL)
  [STATION_IDS.jr_east.mikawashima]: new StationInfo(
    "三河島",
    NO_TRANSFER,
    "みかわしま"
  ),
  [STATION_IDS.jr_east.minami_senju]: new StationInfo(
    "南千住",
    NO_TRANSFER,
    "みなみせんじゅ"
  ),
  [STATION_IDS.jr_east.kita_senju]: new StationInfo(
    "北千住",
    [
      LINE_IDS.jr_east.jouban,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.toubu.isezaki,
      LINE_IDS.shutoken_shintoshi.tsukuba_express,
    ],
    "きたせんじゅ"
  ),
  [STATION_IDS.jr_east.ayase]: new StationInfo(
    "綾瀬",
    [LINE_IDS.jr_east.jouban, LINE_IDS.tokyo_metro.chiyoda],
    "あやせ"
  ),
  [STATION_IDS.jr_east.kameari]: new StationInfo(
    "亀有",
    NO_TRANSFER,
    "かめあり"
  ),
  [STATION_IDS.jr_east.kanamachi]: new Station({
    name: "金町",
    pron: "かなまち",
    pr: P.CHIBA,
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
  [STATION_IDS.jr_east.kita_matsudo]: new StationInfo(
    "北松戸",
    NO_TRANSFER,
    "きたまつど"
  ),
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
  [STATION_IDS.jr_east.kita_kogane]: new StationInfo(
    "北小金",
    NO_TRANSFER,
    "きたこがね"
  ),
  [STATION_IDS.jr_east.minami_kashiwa]: new StationInfo(
    "南柏",
    NO_TRANSFER,
    "みなみかしわ"
  ),
  [STATION_IDS.jr_east.kashiwa]: new StationInfo(
    "柏",
    [LINE_IDS.jr_east.jouban, LINE_IDS.toubu.urban_park_line],
    "かしわ"
  ),
  [STATION_IDS.jr_east.kita_kashiwa]: new StationInfo("北柏", [], "きたかしわ"),
  [STATION_IDS.jr_east.abiko]: new Station({
    name: "我孫子",
    pron: "あびこ",
    pr: P.CHIBA,
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
  [STATION_IDS.jr_east.ono]: new StationInfo("大野", [], "おおの"),
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
    [LINE_IDS.jr_east.musashino, LINE_IDS.toubu.isezaki],
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
  [STATION_IDS.jr_east.maihama]: new StationInfo(
    "舞浜",
    [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.maihama_resort.disney_resort,
    ],
    "まいはま"
  ),
  [STATION_IDS.jr_east.kasai_rinkai_koen]: new StationInfo(
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
    pron: "しって",
    pr: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.nanbu, LINE_IDS.jr_east.nanbu_shisen],
  }),
  [STATION_IDS.jr_east.yakou]: new Station({
    name: "矢向",
    pron: "やこう",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.kashimada]: new Station({
    name: "鹿島田",
    pron: "かしまだ",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.hirama]: new Station({
    name: "平間",
    pron: "ひらま",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.mukougawara]: new Station({
    name: "向河原",
    pron: "むこうがわら",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.musashi_kosugi]: new Station({
    name: "武蔵小杉",
    pron: "むさしこすぎ",
    pr: P.KANAGAWA,
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
    pron: "むさしなかはら",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.musashishinjou]: new Station({
    name: "武蔵新城",
    pron: "むさししんじょう",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.musashimizonokuchi]: new Station({
    name: "武蔵溝ノ口",
    pron: "むさしみぞのくち",
    pr: P.KANAGAWA,
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
    pron: "つだやま",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.kuji]: new Station({
    name: "久地",
    pron: "くじ",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.syukugawara]: new Station({
    name: "宿河原",
    pron: "しゅくがわら",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.noborito]: new Station({
    name: "登戸",
    pron: "のぼりと",
    pr: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.nanbu, LINE_IDS.odakyu.odawara],
  }),
  [STATION_IDS.jr_east.nakanojima]: new Station({
    name: "中野島",
    pron: "なかのじま",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.inadatsutsumi]: new Station({
    name: "稲田堤",
    pron: "いなだつつみ",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.yanoguchi]: new Station({
    name: "矢野口",
    pron: "やのぐち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.inaginaganuma]: new Station({
    name: "稲城長沼",
    pron: "いなぎながぬま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.minamitama]: new Station({
    name: "南多摩",
    pron: "みなみたま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.bubaigawara]: new Station({
    name: "分倍河原",
    pron: "ぶばいがわら",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.nanbu, LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.jr_east.nishifu]: new Station({
    name: "西府",
    pron: "にしふ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.yaho]: new Station({
    name: "谷保",
    pron: "やほ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.yakawa]: new Station({
    name: "矢川",
    pron: "やかわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.nishikunitachi]: new Station({
    name: "西国立",
    pron: "にしくにたち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.hamakawasaki]: new Station({
    name: "浜川崎",
    pron: "はまかわさき",
    pr: P.KANAGAWA,
    lines: [LINE_IDS.jr_east.nanbu_shisen, LINE_IDS.jr_east.tsurumi],
  }),
  [STATION_IDS.jr_east.odasakae]: new Station({
    name: "小田栄",
    pron: "おださかえ",
    pr: P.KANAGAWA,
  }),
  [STATION_IDS.jr_east.kawasaki_shinmachi]: new Station({
    name: "川崎新町",
    pron: "かわさきしんまち",
    pr: P.KANAGAWA,
  }),
  // #endregion 南武線
  // #region 総武本線(JO)
  [STATION_IDS.jr_east.shin_nihonbashi]: new Station({
    name: "新日本橋",
    pron: "しんにほんばし",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.bakurocho]: new Station({
    name: "馬喰町",
    pron: "ばくろちょう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.nishi_chiba]: new Station({
    name: "西千葉",
    pron: "にしちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_chiba]: new Station({
    name: "東千葉",
    pron: "ひがしちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tsuga]: new Station({
    name: "都賀",
    pron: "つが",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.chiba_toshi_monorail.nigou],
  }),
  [STATION_IDS.jr_east.yotsukaidou]: new Station({
    name: "四街道",
    pron: "よつかいどう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.monoi]: new Station({
    name: "物井",
    pron: "ものい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sakura]: new Station({
    name: "佐倉",
    pron: "さくら",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.jr_east.narita2],
  }),
  [STATION_IDS.jr_east.minami_shisui]: new Station({
    name: "南酒々井",
    pron: "みなみしずい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.enokido]: new Station({
    name: "榎戸",
    pron: "えのきど",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yachimata]: new Station({
    name: "八街",
    pron: "やちまた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hyuga]: new Station({
    name: "日向",
    pron: "ひゅうが",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.narutou]: new Station({
    name: "成東",
    pron: "なるとう",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.jr_east.tougane],
  }),
  [STATION_IDS.jr_east.matsuo]: new Station({
    name: "松尾",
    pron: "まつお",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yokoshiba]: new Station({
    name: "横芝",
    pron: "よこしば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iigura]: new Station({
    name: "飯倉",
    pron: "いいぐら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.youkaichiba]: new Station({
    name: "八日市場",
    pron: "ようかいちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higata]: new Station({
    name: "干潟",
    pron: "ひがた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.asahi]: new Station({
    name: "旭",
    pron: "あさひ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iioka]: new Station({
    name: "飯岡",
    pron: "いいおか",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kurahashi]: new Station({
    name: "倉橋",
    pron: "くらはし",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.saruda]: new Station({
    name: "猿田",
    pron: "さるだ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.matsugishi]: new Station({
    name: "松岸",
    pron: "まつぎし",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.soubu_honsen, LINE_IDS.jr_east.narita2],
  }),
  [STATION_IDS.jr_east.choushi]: new Station({
    name: "銚子",
    pron: "ちょうし",
    pr: P.CHIBA,
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
    pron: "きたはちおうじ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.komiya]: new Station({
    name: "小宮",
    pron: "こみや",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.haijima]: new Station({
    name: "拝島",
    pron: "はいじま",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.hachiko,
      LINE_IDS.jr_east.oume,
      LINE_IDS.jr_east.itsukaichi,
      LINE_IDS.seibu.haijima,
    ],
  }),
  [STATION_IDS.jr_east.kumagawa]: new Station({
    name: "熊川",
    pron: "くまがわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.higashi_akiru]: new Station({
    name: "東秋留",
    pron: "ひがしあきる",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.akigawa]: new Station({
    name: "秋川",
    pron: "あきがわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_hikida]: new Station({
    name: "武蔵引田",
    pron: "むさしひきだ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_masuko]: new Station({
    name: "武蔵増戸",
    pron: "むさしますこ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.musashi_itsukaichi]: new Station({
    name: "武蔵五日市",
    pron: "むさしいつかいち",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.higashi_fussa]: new Station({
    name: "東福生",
    pron: "ひがしふっさ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.hakonegasaki]: new Station({
    name: "箱根ヶ崎",
    pron: "はこねがさき",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kaneko]: new Station({
    name: "金子",
    pron: "かねこ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.higashi_hanno]: new Station({
    name: "東飯能",
    pron: "ひがしはんのう",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.hachiko, LINE_IDS.seibu.chichibu],
  }),
  [STATION_IDS.jr_east.moro]: new Station({
    name: "諸",
    pron: "もろ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.ogose]: new Station({
    name: "越生",
    pron: "おごせ",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.hachiko, LINE_IDS.toubu.ogose],
  }),
  [STATION_IDS.jr_east.myoukaku]: new Station({
    name: "明覚",
    pron: "みょうかく",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.ogawamachi]: new Station({
    name: "小川町",
    pron: "おがわまち",
    pr: P.TOKYO,
    lines: [LINE_IDS.jr_east.hachiko, LINE_IDS.toubu.toujou],
  }),
  [STATION_IDS.jr_east.takezawa]: new Station({
    name: "竹沢",
    pron: "たけざわ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.orihara]: new Station({
    name: "折原",
    pron: "おりはら",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.yorii]: new Station({
    name: "寄居",
    pron: "よりい",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.hachiko,
      LINE_IDS.toubu.toujou,
      LINE_IDS.chichibu.chichibu,
    ],
  }),
  [STATION_IDS.jr_east.youdo]: new Station({
    name: "用土",
    pron: "ようど",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.matsuhisa]: new Station({
    name: "松久",
    pron: "まつひさ",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.kodama]: new Station({
    name: "児玉",
    pron: "こだま",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.tanshou]: new Station({
    name: "丹荘",
    pron: "たんしょう",
    pr: P.TOKYO,
  }),
  [STATION_IDS.jr_east.gunma_fujioka]: new Station({
    name: "群馬藤岡",
    pron: "ぐんまふじおか",
    pr: P.GUNMA,
  }),
  [STATION_IDS.jr_east.kita_fujioka]: new Station({
    name: "北藤岡",
    pron: "きたふじおか",
    pr: P.GUNMA,
  }),
  // #endregion 八高線
  // #region 湘南新宿ライン(JS)
  [STATION_IDS.jr_east.kumagaya]: new Station({
    name: "熊谷",
    pron: "くまがや",
    pr: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.takasaki,
      LINE_IDS.jr_east.shonan_shinjuku,
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.chichibu.chichibu,
    ],
  }),
  [STATION_IDS.jr_east.takasaki]: new Station({
    name: "高崎",
    pron: "たかさき",
    pr: P.TOKYO,
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
  [STATION_IDS.jr_east.maebashi]: new StationInfo(
    "前橋",
    NO_TRANSFER,
    "まえばし"
  ),
  [STATION_IDS.jr_east.maebashi_oshima]: new StationInfo(
    "前橋大島",
    NO_TRANSFER,
    "まえばしおおしま"
  ),
  [STATION_IDS.jr_east.komagata]: new StationInfo(
    "駒形",
    NO_TRANSFER,
    "こまがた"
  ),
  [STATION_IDS.jr_east.isezaki]: new StationInfo(
    "伊勢崎",
    [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.isezaki],
    "いせざき"
  ),
  [STATION_IDS.jr_east.kunisada]: new StationInfo(
    "国定",
    NO_TRANSFER,
    "くにさだ"
  ),
  [STATION_IDS.jr_east.iwayado]: new StationInfo(
    "岩宿",
    NO_TRANSFER,
    "いわやど"
  ),
  [STATION_IDS.jr_east.kiryu]: new StationInfo(
    "桐生",
    [LINE_IDS.jr_east.ryoumou, LINE_IDS.watarase_keikoku.watarase_keikoku],
    "きりゅう"
  ),
  [STATION_IDS.jr_east.omata]: new StationInfo("小俣", NO_TRANSFER, "おまた"),
  [STATION_IDS.jr_east.yamamae]: new StationInfo(
    "山前",
    NO_TRANSFER,
    "やままえ"
  ),
  [STATION_IDS.jr_east.ashikaga]: new StationInfo(
    "足利",
    NO_TRANSFER,
    "あしかが"
  ),
  [STATION_IDS.jr_east.ashikaga_flower_park]: new StationInfo(
    "あしかがフラワーパーク",
    NO_TRANSFER,
    "あしかがふらわーぱーく"
  ),
  [STATION_IDS.jr_east.tomita]: new StationInfo("富田", NO_TRANSFER, "とみた"),
  [STATION_IDS.jr_east.sano]: new StationInfo(
    "佐野",
    [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.sano],
    "さの"
  ),
  [STATION_IDS.jr_east.iwahune]: new StationInfo(
    "岩舟",
    NO_TRANSFER,
    "いわふね"
  ),
  [STATION_IDS.jr_east.ohirashita]: new StationInfo(
    "大平下",
    NO_TRANSFER,
    "おおひらした"
  ),
  [STATION_IDS.jr_east.tochigi]: new StationInfo(
    "栃木",
    [LINE_IDS.jr_east.ryoumou, LINE_IDS.toubu.nikkou],
    "とちぎ"
  ),
  [STATION_IDS.jr_east.omoigawa]: new StationInfo(
    "思川",
    NO_TRANSFER,
    "おもいがわ"
  ),
  // #endregion 両毛線
  // #region 水戸線
  [STATION_IDS.jr_east.odabayashi]: new Station({
    name: "小田林",
    pron: "おだばやし",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.yuki]: new Station({
    name: "結城",
    pron: "ゆうき",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.higashi_yuki]: new Station({
    name: "東結城",
    pron: "ひがしゆうき",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.kawashima]: new Station({
    name: "川島",
    pron: "かわしま",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.tamado]: new Station({
    name: "玉戸",
    pron: "たまど",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.shimodate]: new Station({
    name: "下館",
    pron: "しもだて",
    pr: P.IBARAKI,
    lines: [LINE_IDS.jr_east.mito, LINE_IDS.moka.moka, LINE_IDS.kantou.jousou],
  }),
  [STATION_IDS.jr_east.niibari]: new Station({
    name: "新治",
    pron: "にいばり",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.yamato]: new Station({
    name: "大和",
    pron: "やまと",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.iwase]: new Station({
    name: "岩瀬",
    pron: "いわせ",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.haguro]: new Station({
    name: "羽黒",
    pron: "はぐろ",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.fukuhara]: new Station({
    name: "福原",
    pron: "ふくはら",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.inada]: new Station({
    name: "稲田",
    pron: "いなだ",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.kasama]: new Station({
    name: "笠間",
    pron: "かさま",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.shishido]: new Station({
    name: "宍戸",
    pron: "ししど",
    pr: P.IBARAKI,
  }),
  // #endregion 水戸線
  // #region 外房線
  [STATION_IDS.jr_east.hon_chiba]: new Station({
    name: "本千葉",
    pron: "ほんちば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kamatori]: new Station({
    name: "鎌取",
    pron: "かまとり",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.honda]: new Station({
    name: "誉田",
    pron: "ほんだ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.toke]: new Station({
    name: "土気",
    pron: "とけ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.oami]: new Station({
    name: "大網",
    pron: "おおあみ",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.sotobou, LINE_IDS.jr_east.tougane],
  }),
  [STATION_IDS.jr_east.nagata]: new Station({
    name: "永田",
    pron: "ながた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.honnou]: new Station({
    name: "本納",
    pron: "ほんのう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shin_mobara]: new Station({
    name: "新茂原",
    pron: "しんもばら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.mobara]: new Station({
    name: "茂原",
    pron: "もばら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yatsumi]: new Station({
    name: "八積",
    pron: "やつみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_ichinomiya]: new Station({
    name: "上総一ノ宮",
    pron: "かずさいちのみや",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.torami]: new Station({
    name: "東浪見",
    pron: "とらみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.taitou]: new Station({
    name: "太東",
    pron: "たいとう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.choujamachi]: new Station({
    name: "長者町",
    pron: "ちょうじゃまち",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.mikado]: new Station({
    name: "三門",
    pron: "みかど",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.ohara]: new Station({
    name: "大原",
    pron: "おおはら",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.sotobou, LINE_IDS.izumi.izumi],
  }),
  [STATION_IDS.jr_east.namihana]: new Station({
    name: "浪花",
    pron: "なみはな",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.onjuku]: new Station({
    name: "御宿",
    pron: "おんじゅく",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.katsuura]: new Station({
    name: "勝浦",
    pron: "かつうら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.ubara]: new Station({
    name: "鵜原",
    pron: "うばら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_okitsu]: new Station({
    name: "上総興津",
    pron: "かずさおきつ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.namegawa_island]: new Station({
    name: "行川アイランド",
    pron: "なめがわあいらんど",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_kominato]: new Station({
    name: "安房小湊",
    pron: "あわこみなと",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_amatsu]: new Station({
    name: "安房天津",
    pron: "あわあまつ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_kamogawa]: new Station({
    name: "安房鴨川",
    pron: "あわかもがわ",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.sotobou, LINE_IDS.jr_east.uchibou],
  }),
  // #endregion 外房線
  // #region 内房線
  [STATION_IDS.jr_east.hamano]: new Station({
    name: "浜野",
    pron: "はまの",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yawatajuku]: new Station({
    name: "八幡宿",
    pron: "やわたじゅく",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.goi]: new Station({
    name: "五井",
    pron: "ごい",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.uchibou, LINE_IDS.kominato.kominato],
  }),
  [STATION_IDS.jr_east.anegasaki]: new Station({
    name: "姉ヶ崎",
    pron: "あねがさき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.nagaura]: new Station({
    name: "長浦",
    pron: "ながうら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sodegaura]: new Station({
    name: "袖ケ浦",
    pron: "そでがうら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iwane]: new Station({
    name: "巌根",
    pron: "いわね",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kisaradu]: new Station({
    name: "木更津",
    pron: "きさらづ",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.uchibou, LINE_IDS.jr_east.kururi],
  }),
  [STATION_IDS.jr_east.kimitsu]: new Station({
    name: "君津",
    pron: "きみつ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.aohori]: new Station({
    name: "青堀",
    pron: "あおほり",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.onuki]: new Station({
    name: "大貫",
    pron: "おおぬき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sanukimachi]: new Station({
    name: "佐貫町",
    pron: "さぬきまち",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_minato]: new Station({
    name: "上総湊",
    pron: "かずさみなと",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.takeoka]: new Station({
    name: "竹岡",
    pron: "たけおか",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hamakanaya]: new Station({
    name: "浜金谷",
    pron: "はまかなや",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hota]: new Station({
    name: "保田",
    pron: "ほた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.awa_katsuyama]: new Station({
    name: "安房勝山",
    pron: "あわかつやま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.iwai]: new Station({
    name: "岩井",
    pron: "いわい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tomiura]: new Station({
    name: "富浦",
    pron: "とみうら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.nakofunakata]: new Station({
    name: "那古船形",
    pron: "なこふなかた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kokonoe]: new Station({
    name: "九重",
    pron: "ここのえ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.chikura]: new Station({
    name: "千倉",
    pron: "ちくら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.chitose]: new Station({
    name: "千歳",
    pron: "ちとせ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.minamihara]: new Station({
    name: "南原",
    pron: "みなみはら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.wadaura]: new Station({
    name: "和田浦",
    pron: "わだうら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.emi]: new Station({
    name: "江見",
    pron: "えみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.futomi]: new Station({
    name: "太海",
    pron: "ふとみ",
    pr: P.CHIBA,
  }),
  // #endregion 内房線
  // #region 東金線
  [STATION_IDS.jr_east.fukutawara]: new Station({
    name: "福俵",
    pron: "ふくたわら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tougane]: new Station({
    name: "東金",
    pron: "とうがね",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.gumyou]: new Station({
    name: "求名",
    pron: "ぐみょう",
    pr: P.CHIBA,
  }),
  // #endregion 東金線
  // #region 久留里線
  [STATION_IDS.jr_east.gion]: new Station({
    name: "祇園",
    pron: "ぎおん",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_kiyokawa]: new Station({
    name: "上総清川",
    pron: "かずさきよかわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_kiyokawa]: new Station({
    name: "東清川",
    pron: "ひがしきよかわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.yokota]: new Station({
    name: "横田",
    pron: "よこた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.higashi_yokota]: new Station({
    name: "東横田",
    pron: "ひがしよこた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.makuta]: new Station({
    name: "馬来田",
    pron: "まくた",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimogoori]: new Station({
    name: "下郡",
    pron: "しもごおり",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.obitsu]: new Station({
    name: "小櫃",
    pron: "おびつ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.tawarada]: new Station({
    name: "俵田",
    pron: "たわらだ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kururi]: new Station({
    name: "久留里",
    pron: "くるり",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.hirayama]: new Station({
    name: "平山",
    pron: "ひらやま",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_matsuoka]: new Station({
    name: "上総松丘",
    pron: "かずさまつおか",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kazusa_kameyama]: new Station({
    name: "上総亀山",
    pron: "かずさかめやま",
    pr: P.CHIBA,
  }),
  // #endregion 久留里線
  // #region 成田線
  [STATION_IDS.jr_east.higashi_abiko]: new Station({
    name: "東我孫子",
    pron: "ひがしあびこ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kohoku]: new Station({
    name: "湖北",
    pron: "こほく",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.araki]: new Station({
    name: "新木",
    pron: "あらき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.fusa]: new Station({
    name: "布佐",
    pron: "ふさ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kioroshi]: new Station({
    name: "木下",
    pron: "きおろし",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kobayashi]: new Station({
    name: "小林",
    pron: "こばやし",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.ajiki]: new Station({
    name: "安食",
    pron: "あじき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_manzaki]: new Station({
    name: "下総松崎",
    pron: "しもうさまんざき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.narita]: new Station({
    name: "成田",
    pron: "なりた",
    pr: P.CHIBA,
    lines: [
      LINE_IDS.jr_east.narita1,
      LINE_IDS.jr_east.narita2,
      LINE_IDS.jr_east.narita3,
    ],
  }),
  [STATION_IDS.jr_east.shisui]: new Station({
    name: "酒々井",
    pron: "しずい",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.kuzumi]: new Station({
    name: "久住",
    pron: "くずみ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.namegawa]: new Station({
    name: "滑河",
    pron: "なめがわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_kouzaki]: new Station({
    name: "下総神崎",
    pron: "しもうさこうざき",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.oto]: new Station({
    name: "大戸",
    pron: "おおと",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sawara]: new Station({
    name: "佐原",
    pron: "さわら",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.suigou]: new Station({
    name: "水郷",
    pron: "すいごう",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.omigawa]: new Station({
    name: "小見川",
    pron: "おみがわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.sasagawa]: new Station({
    name: "笹川",
    pron: "ささがわ",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_toyohasato]: new Station({
    name: "下総豊富",
    pron: "しもうさとよはさと",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shimousa_tachibana]: new Station({
    name: "下総橘",
    pron: "しもうさたちばな",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.shishiba]: new Station({
    name: "椎柴",
    pron: "しいしば",
    pr: P.CHIBA,
  }),
  [STATION_IDS.jr_east.katori]: new Station({
    name: "香取",
    pron: "かとり",
    pr: P.CHIBA,
    lines: [LINE_IDS.jr_east.narita2, LINE_IDS.jr_east.kashima],
  }),
  // #endregion 成田線
  // #region 鹿島線
  [STATION_IDS.jr_east.kashima_jingu]: new Station({
    name: "鹿島神宮",
    pron: "かしまじんぐう",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.kashima_soccer_stadium]: new Station({
    name: "鹿島サッカースタジアム",
    pron: "かしまさっかーすたじあむ",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.junikyou]: new Station({
    name: "十二橋",
    pron: "じゅうにきょう",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.itako]: new Station({
    name: "潮来",
    pron: "いたこ",
    pr: P.IBARAKI,
  }),
  [STATION_IDS.jr_east.nobukata]: new Station({
    name: "延方",
    pron: "のぶかた",
    pr: P.IBARAKI,
  }),
  // #endregion 鹿島線
  // #region 東北本線
  [STATION_IDS.jr_east.natori]: new StationInfo(
    "名取",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.sendai_kuko.access,
    ],
    "なとり"
  ),
  [STATION_IDS.jr_east.minami_sendai]: new StationInfo(
    "南仙台",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.sendai_kuko.access,
    ],
    "みなみせんだい"
  ),
  [STATION_IDS.jr_east.nagamachi]: new StationInfo(
    "長町",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.sendai_kuko.access,
      LINE_IDS.sendai_subway.nanboku,
    ],
    "ながまち"
  ),
  [STATION_IDS.jr_east.takaku]: new StationInfo("高久", NO_TRANSFER, "たかく"),
  [STATION_IDS.jr_east.kurotawara]: new StationInfo(
    "黒田原",
    NO_TRANSFER,
    "くろたわら"
  ),
  [STATION_IDS.jr_east.toyohara]: new StationInfo(
    "豊原",
    NO_TRANSFER,
    "とよはら"
  ),
  [STATION_IDS.jr_east.shirasaka]: new StationInfo(
    "白坂",
    NO_TRANSFER,
    "しらさか"
  ),
  [STATION_IDS.jr_east.shirakawa]: new StationInfo(
    "白河",
    NO_TRANSFER,
    "しらかわ"
  ),
  [STATION_IDS.jr_east.kudano]: new StationInfo(
    "久田野",
    NO_TRANSFER,
    "くだの"
  ),
  [STATION_IDS.jr_east.izumizaki]: new StationInfo(
    "泉崎",
    NO_TRANSFER,
    "いずみざき"
  ),
  [STATION_IDS.jr_east.yabuki]: new StationInfo("矢吹", NO_TRANSFER, "やぶき"),
  [STATION_IDS.jr_east.kagamiishi]: new StationInfo(
    "鏡石",
    NO_TRANSFER,
    "かがみいし"
  ),
  [STATION_IDS.jr_east.sukagawa]: new StationInfo(
    "須賀川",
    NO_TRANSFER,
    "すかがわ"
  ),
  [STATION_IDS.jr_east.asakanagamori]: new StationInfo(
    "安積永盛",
    [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.suigun],
    "あさかながもり"
  ),
  [STATION_IDS.jr_east.hiwada]: new StationInfo(
    "日和田",
    NO_TRANSFER,
    "ひわだ"
  ),
  [STATION_IDS.jr_east.gohyakugawa]: new StationInfo(
    "五百川",
    NO_TRANSFER,
    "ごひゃくがわ"
  ),
  [STATION_IDS.jr_east.motomiya]: new StationInfo(
    "本宮",
    NO_TRANSFER,
    "もとみや"
  ),
  [STATION_IDS.jr_east.sugita]: new StationInfo("杉田", NO_TRANSFER, "すぎた"),
  [STATION_IDS.jr_east.nihonmatsu]: new StationInfo(
    "二本松",
    NO_TRANSFER,
    "にほんまつ"
  ),
  [STATION_IDS.jr_east.adachi]: new StationInfo("安達", NO_TRANSFER, "あだち"),
  [STATION_IDS.jr_east.matsukawa]: new StationInfo(
    "松川",
    NO_TRANSFER,
    "まつかわ"
  ),
  [STATION_IDS.jr_east.kanayagawa]: new StationInfo(
    "金谷川",
    NO_TRANSFER,
    "かなやがわ"
  ),
  [STATION_IDS.jr_east.minami_fukushima]: new StationInfo(
    "南福島",
    NO_TRANSFER,
    "みなみふくしま"
  ),
  [STATION_IDS.jr_east.higashi_fukushima]: new StationInfo(
    "東福島",
    NO_TRANSFER,
    "ひがしふくしま"
  ),
  [STATION_IDS.jr_east.date]: new StationInfo("伊達", NO_TRANSFER, "だて"),
  [STATION_IDS.jr_east.kori]: new StationInfo("桑折", NO_TRANSFER, "こおり"),
  [STATION_IDS.jr_east.fujita]: new StationInfo("藤田", NO_TRANSFER, "ふじた"),
  [STATION_IDS.jr_east.kaida]: new StationInfo("貝田", NO_TRANSFER, "かいだ"),
  [STATION_IDS.jr_east.kosugou]: new StationInfo(
    "越河",
    NO_TRANSFER,
    "こすごう"
  ),
  [STATION_IDS.jr_east.shiraishi]: new StationInfo(
    "白石",
    NO_TRANSFER,
    "しらいし"
  ),
  [STATION_IDS.jr_east.higashi_shiraishi]: new StationInfo(
    "東白石",
    NO_TRANSFER,
    "ひがししらいし"
  ),
  [STATION_IDS.jr_east.kita_shirakawa]: new StationInfo(
    "北白川",
    NO_TRANSFER,
    "きたしらかわ"
  ),
  [STATION_IDS.jr_east.ogawara]: new StationInfo(
    "大河原",
    NO_TRANSFER,
    "おおがわら"
  ),
  [STATION_IDS.jr_east.funaoka]: new StationInfo(
    "船岡",
    NO_TRANSFER,
    "ふなおか"
  ),
  [STATION_IDS.jr_east.tsukinoki]: new StationInfo(
    "槻木",
    NO_TRANSFER,
    "つきのき"
  ),
  [STATION_IDS.jr_east.tatekoshi]: new StationInfo(
    "館腰",
    NO_TRANSFER,
    "たてこし"
  ),
  [STATION_IDS.jr_east.taishidou]: new StationInfo(
    "太子堂",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
    "たいしどう"
  ),
  [STATION_IDS.jr_east.higashi_sendai]: new StationInfo(
    "東仙台",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.rifu,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
    "ひがしせんだい"
  ),
  [STATION_IDS.jr_east.iwakiri]: new StationInfo(
    "岩切",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.rifu,
      LINE_IDS.jr_east.sengoku_touhoku_line,
    ],
    "いわきり"
  ),
  [STATION_IDS.jr_east.rikuzensannou]: new StationInfo(
    "陸前山王",
    [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.sengoku_touhoku_line],
    "りくぜんさんのう"
  ),
  [STATION_IDS.jr_east.kokufutagajou]: new StationInfo(
    "国府多賀城",
    [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.sengoku_touhoku_line],
    "こくふたがじょう"
  ),
  [STATION_IDS.jr_east.shiogama]: new StationInfo(
    "塩釜",
    [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.sengoku_touhoku_line],
    "しおがま"
  ),
  [STATION_IDS.jr_east.matsushima]: new StationInfo(
    "松島",
    NO_TRANSFER,
    "まつしま"
  ),
  [STATION_IDS.jr_east.atago]: new StationInfo("愛宕", NO_TRANSFER, "あたご"),
  [STATION_IDS.jr_east.shinainuma]: new StationInfo(
    "品井沼",
    NO_TRANSFER,
    "しないぬま"
  ),
  [STATION_IDS.jr_east.kashimadai]: new StationInfo(
    "鹿島台",
    NO_TRANSFER,
    "かしまだい"
  ),
  [STATION_IDS.jr_east.matsuyamamachi]: new StationInfo(
    "松山町",
    NO_TRANSFER,
    "まつやままち"
  ),
  [STATION_IDS.jr_east.kogota]: new StationInfo(
    "小牛田",
    [
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.kesennuma,
      LINE_IDS.jr_east.ishimaki,
      LINE_IDS.jr_east.rikuutou,
    ],
    "こごた"
  ),
  [STATION_IDS.jr_east.tajiri]: new StationInfo("田尻", NO_TRANSFER, "たじり"),
  [STATION_IDS.jr_east.semine]: new StationInfo("瀬峰", NO_TRANSFER, "せみね"),
  [STATION_IDS.jr_east.umegasawa]: new StationInfo(
    "梅ヶ沢",
    NO_TRANSFER,
    "うめがさわ"
  ),
  [STATION_IDS.jr_east.nitta]: new StationInfo("新田", NO_TRANSFER, "にった"),
  [STATION_IDS.jr_east.ishikoshi]: new StationInfo(
    "石越",
    NO_TRANSFER,
    "いしこし"
  ),
  [STATION_IDS.jr_east.aburajima]: new StationInfo(
    "油島",
    NO_TRANSFER,
    "あぶらじま"
  ),
  [STATION_IDS.jr_east.hanaizumi]: new StationInfo(
    "花泉",
    NO_TRANSFER,
    "はないずみ"
  ),
  [STATION_IDS.jr_east.shimizuhara]: new StationInfo(
    "清水原",
    NO_TRANSFER,
    "しみずはら"
  ),
  [STATION_IDS.jr_east.arikabe]: new StationInfo(
    "有壁",
    NO_TRANSFER,
    "ありかべ"
  ),
  [STATION_IDS.jr_east.yamanome]: new StationInfo(
    "山ノ目",
    NO_TRANSFER,
    "やまのめ"
  ),
  [STATION_IDS.jr_east.hiraizumi]: new StationInfo(
    "平泉",
    NO_TRANSFER,
    "ひらいずみ"
  ),
  [STATION_IDS.jr_east.maezawa]: new StationInfo(
    "前沢",
    NO_TRANSFER,
    "まえざわ"
  ),
  [STATION_IDS.jr_east.rikuchuorii]: new StationInfo(
    "陸中折居",
    NO_TRANSFER,
    "りくちゅうおりい"
  ),
  [STATION_IDS.jr_east.mizusawa]: new StationInfo(
    "水沢",
    NO_TRANSFER,
    "みずさわ"
  ),
  [STATION_IDS.jr_east.kanegasaki]: new StationInfo(
    "金ヶ崎",
    NO_TRANSFER,
    "かねがさき"
  ),
  [STATION_IDS.jr_east.rokuhara]: new StationInfo(
    "六原",
    NO_TRANSFER,
    "ろくはら"
  ),
  [STATION_IDS.jr_east.murasakino]: new StationInfo(
    "村崎野",
    NO_TRANSFER,
    "むらさきの"
  ),
  [STATION_IDS.jr_east.hanamaki]: new StationInfo(
    "花巻",
    [LINE_IDS.jr_east.touhoku_honsen, LINE_IDS.jr_east.kamaishi],
    "はなまき"
  ),
  [STATION_IDS.jr_east.hanamaki_kuko]: new StationInfo(
    "花巻空港",
    NO_TRANSFER,
    "はなまきくうこう"
  ),
  [STATION_IDS.jr_east.ishidoriya]: new StationInfo(
    "石鳥谷",
    NO_TRANSFER,
    "いしどりや"
  ),
  [STATION_IDS.jr_east.hidume]: new StationInfo("日詰", NO_TRANSFER, "ひづめ"),
  [STATION_IDS.jr_east.shiwa_chuo]: new StationInfo(
    "紫波中央",
    NO_TRANSFER,
    "しわちゅうおう"
  ),
  [STATION_IDS.jr_east.yahaba]: new StationInfo("矢幅", NO_TRANSFER, "やはば"),
  [STATION_IDS.jr_east.iwate_iioka]: new StationInfo(
    "岩手飯岡",
    NO_TRANSFER,
    "いわていいおか"
  ),
  [STATION_IDS.jr_east.senbokumachi]: new StationInfo(
    "仙北町",
    NO_TRANSFER,
    "せんぼくまち"
  ),
  //#endregion 東北本線

  // 山形新幹線
  [STATION_IDS.jr_east.yonezawa]: new StationInfo(
    "米沢",
    [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.jr_east.yonesaka,
    ],
    "よねざわ"
  ),
  [STATION_IDS.jr_east.takahata]: new StationInfo(
    "高畠",
    [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
    "たかはた"
  ),
  [STATION_IDS.jr_east.akayu]: new StationInfo(
    "赤湯",
    [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.yamagata.flower_nagai,
    ],
    "あかゆ"
  ),
  [STATION_IDS.jr_east.kaminoyama_onsen]: new StationInfo(
    "かみのやま温泉",
    [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
    "かみのやまおんせん"
  ),
  [STATION_IDS.jr_east.yamagata]: new StationInfo(
    "山形",
    [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.jr_east.senzan,
      LINE_IDS.jr_east.aterazawa,
    ],
    "やまがた"
  ),
  [STATION_IDS.jr_east.tendo]: new StationInfo(
    "天童",
    [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
    "てんどう"
  ),
  [STATION_IDS.jr_east.sakuranbo_higashine]: new StationInfo(
    "さくらんぼ東根",
    [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
    "さくらんぼひがしね"
  ),
  [STATION_IDS.jr_east.murayama]: new StationInfo(
    "村山",
    [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
    "むらやま"
  ),
  [STATION_IDS.jr_east.oishida]: new StationInfo(
    "大石田",
    [LINE_IDS.jr_east.shinkansen.yamagata, LINE_IDS.jr_east.yamagata],
    "おおいしだ"
  ),
  [STATION_IDS.jr_east.shinjo]: new StationInfo(
    "新庄",
    [
      LINE_IDS.jr_east.shinkansen.yamagata,
      LINE_IDS.jr_east.yamagata,
      LINE_IDS.jr_east.rikuutou,
      LINE_IDS.jr_east.rikuusei,
      LINE_IDS.jr_east.ouu_honsen,
    ],
    "しんじょう"
  ),
  // 秋田新幹線
  [STATION_IDS.jr_east.shizukuishi]: new StationInfo(
    "雫石",
    [LINE_IDS.jr_east.shinkansen.akita, LINE_IDS.jr_east.tazawako],
    "しずくいし"
  ),
  [STATION_IDS.jr_east.tazawako]: new StationInfo(
    "田沢湖",
    [LINE_IDS.jr_east.shinkansen.akita, LINE_IDS.jr_east.tazawako],
    "たざわこ"
  ),
  [STATION_IDS.jr_east.kakunodate]: new StationInfo(
    "角館",
    [
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.tazawako,
      LINE_IDS.akita_nairiku_jukan.akita_nairiku,
    ],
    "角館"
  ),
  [STATION_IDS.jr_east.omagari]: new StationInfo(
    "大曲",
    [
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.tazawako,
    ],
    "おおまがり"
  ),
  [STATION_IDS.jr_east.akita]: new StationInfo(
    "秋田",
    [
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.uetsu_honsen,
      LINE_IDS.jr_east.oga,
    ],
    "秋田"
  ),
  // #endregion JR東日本

  // #region JR東海
  [STATION_IDS.jr_tokai.mishima]: new StationInfo(
    "三島",
    [LINE_IDS.jr_east.tokaido, LINE_IDS.izuhakone.sunzu],
    "みしま"
  ),
  [STATION_IDS.jr_tokai.shinfuji]: new StationInfo("新富士", [], "新富士"),
  [STATION_IDS.jr_tokai.shizuoka]: new StationInfo(
    "静岡",
    [LINE_IDS.jr_east.tokaido, LINE_IDS.jr_east.shinkansen.tokaido],
    "静岡"
  ),
  [STATION_IDS.jr_tokai.kakegawa]: new StationInfo(
    "掛川",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_tokai.tenryuhamanako,
    ],
    "かけがわ"
  ),
  [STATION_IDS.jr_tokai.hamamatsu]: new StationInfo(
    "浜松",
    [LINE_IDS.jr_east.tokaido, LINE_IDS.jr_east.shinkansen.tokaido],
    "はままつ"
  ),
  [STATION_IDS.jr_tokai.toyohashi]: new StationInfo(
    "豊橋",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_tokai.ida,
      LINE_IDS.nagoya.nagoyahonsen,
    ],
    "とよはし"
  ),
  [STATION_IDS.jr_tokai.mikawaanjo]: new StationInfo(
    "三河安城",
    [LINE_IDS.jr_east.tokaido, LINE_IDS.jr_east.shinkansen.tokaido],
    "みかわあんじょう"
  ),
  [STATION_IDS.jr_tokai.nagoya]: new StationInfo(
    "名古屋",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_tokai.chuohonsen,
      LINE_IDS.jr_tokai.aonami,
      LINE_IDS.jr_west.kansai_honsen,
      LINE_IDS.nagoya_shiei_subway.sakuradori,
      LINE_IDS.nagoya_shiei_subway.higashiyama,
    ],
    "名古屋"
  ),
  [STATION_IDS.jr_tokai.gifuhashima]: new StationInfo(
    "岐阜羽島",
    [],
    "ぎふはしま"
  ),
  [STATION_IDS.jr_tokai.maibara]: new StationInfo(
    "米原",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_tokai.hokurikuhonsen,
      LINE_IDS.oumi.honsen,
    ],
    "まいばら"
  ),
  [STATION_IDS.jr_tokai.kyoto]: new StationInfo(
    "京都",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_west.saninhonsen,
      LINE_IDS.jr_west.nara,
      LINE_IDS.kyoto_shiei_subway.karasuma,
      LINE_IDS.kinki_nihon.kyoto,
    ],
    "きょうと"
  ),
  [STATION_IDS.jr_tokai.shinosaka]: new StationInfo(
    "新大阪",
    [
      LINE_IDS.jr_east.tokaido,
      LINE_IDS.jr_east.shinkansen.tokaido,
      LINE_IDS.jr_west.shinkansen.sanyo,
      LINE_IDS.osaka_metro.midosuji,
      LINE_IDS.jr_west.osaka_higashi,
    ],
    "しんおおさか"
  ),

  // 上越新幹線
  [STATION_IDS.jr_east.honjo_waseda]: new StationInfo(
    "本庄早稲田",
    [LINE_IDS.jr_east.shinkansen.jouetsu, LINE_IDS.jr_east.shinkansen.hokuriku],
    "ほんじょうわせだ"
  ),
  [STATION_IDS.jr_east.joumoukougen]: new StationInfo(
    "上毛高原",
    [LINE_IDS.jr_east.shinkansen.jouetsu, LINE_IDS.jr_east.shinkansen.hokuriku],
    "じょうもうこうげん"
  ),
  [STATION_IDS.jr_east.echigo_yuzawa]: new StationInfo(
    "越後湯沢",
    [
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.hokuetsu_kyuko.hokuhoku,
    ],
    "えちごゆざわ"
  ),
  [STATION_IDS.jr_east.gala_yuzawa]: new StationInfo(
    "ガーラ湯沢",
    [],
    "がーらゆざわ"
  ),
  [STATION_IDS.jr_east.urasa]: new StationInfo(
    "浦佐",
    [LINE_IDS.jr_east.jouetsu, LINE_IDS.jr_east.shinkansen.jouetsu],
    "うらさ"
  ),
  [STATION_IDS.jr_east.nagaoka]: new StationInfo(
    "長岡",
    [
      LINE_IDS.jr_east.jouetsu,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.jr_east.shinkansen.jouetsu,
    ],
    "ながおか"
  ),
  [STATION_IDS.jr_east.tsubame_sanjo]: new StationInfo(
    "燕三条",
    [LINE_IDS.jr_east.yahiko, LINE_IDS.jr_east.shinkansen.jouetsu],
    "つばめさんじょう"
  ),
  [STATION_IDS.jr_east.niigata]: new StationInfo(
    "新潟",
    [
      LINE_IDS.jr_east.shinkansen.jouetsu,
      LINE_IDS.jr_east.banetsusai,
      LINE_IDS.jr_east.hakushin,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.jr_east.echigo,
    ],
    "にいがた"
  ),
  [STATION_IDS.jr_east.nasu_shiobara]: new StationInfo(
    "那須塩原",
    [LINE_IDS.jr_east.utunomiya, LINE_IDS.jr_east.shinkansen.tohoku],
    "なすしおばら"
  ),
  [STATION_IDS.jr_east.shin_shirakawa]: new StationInfo(
    "新白河",
    [LINE_IDS.jr_east.shinkansen.tohoku, LINE_IDS.jr_east.touhoku_honsen],
    "しらかわ"
  ),
  [STATION_IDS.jr_east.kooriyama]: new StationInfo(
    "郡山",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.banetsusai,
      LINE_IDS.jr_east.banetsutou,
      LINE_IDS.jr_east.touhoku_honsen,
    ],
    "こおりやま"
  ),
  [STATION_IDS.jr_east.fukushima]: new StationInfo(
    "福島",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.abukuma_kyuko.abukuma_kyuko,
      LINE_IDS.fukushima_koutsu.iizaka,
    ],
    "ふくしま"
  ),
  [STATION_IDS.jr_east.shiroishi_zao]: new StationInfo(
    "白石蔵王",
    [],
    "しろいしざおう"
  ),
  [STATION_IDS.jr_east.sendai]: new StationInfo(
    "仙台",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.sengoku,
      LINE_IDS.jr_east.senzan,
    ],
    "せんだい"
  ),
  [STATION_IDS.jr_east.furukawa]: new StationInfo(
    "古川",
    [LINE_IDS.jr_east.shinkansen.tohoku, LINE_IDS.jr_east.rikuutou],
    "ふるかわ"
  ),
  [STATION_IDS.jr_east.kurikoma_kogen]: new StationInfo(
    "くりこま高原",
    [],
    "くりこまこうげん"
  ),
  [STATION_IDS.jr_east.ichinoseki]: new StationInfo(
    "一ノ関",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.ofunato,
      LINE_IDS.jr_east.shinkansen.akita,
    ],
    "いちのせき"
  ),
  [STATION_IDS.jr_east.mizusawaesashi]: new StationInfo(
    "水沢江刺",
    [],
    "みずさわえさし"
  ),
  [STATION_IDS.jr_east.kitakami]: new StationInfo(
    "北上",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.kitakami,
    ],
    "きたかみ"
  ),
  [STATION_IDS.jr_east.shin_hanamaki]: new StationInfo(
    "新花巻",
    [LINE_IDS.jr_east.shinkansen.tohoku, LINE_IDS.jr_east.kamaishi],
    "しんはなまき"
  ),
  [STATION_IDS.jr_east.morioka]: new StationInfo(
    "盛岡",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.shinkansen.akita,
      LINE_IDS.jr_east.touhoku_honsen,
      LINE_IDS.jr_east.yamada,
      LINE_IDS.jr_east.tazawako,
      LINE_IDS.igr_iwate_ginga.igr_iwate_ginga_tetudo,
    ],
    "もりおか"
  ),
  [STATION_IDS.jr_east.iwate_numakunai]: new StationInfo(
    "いわて沼宮内",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.igr_iwate_ginga.igr_iwate_ginga_tetudo,
    ],
    "いわてぬまくない"
  ),
  [STATION_IDS.jr_east.ninohe]: new StationInfo(
    "二戸",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.igr_iwate_ginga.igr_iwate_ginga_tetudo,
    ],
    "にのへ"
  ),
  [STATION_IDS.jr_east.hachinohe]: new StationInfo(
    "八戸",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.hachinohe,
      LINE_IDS.aoimori.aoimori_tetudo,
    ],
    "はちのへ"
  ),
  [STATION_IDS.jr_east.shichinohe_towada]: new StationInfo(
    "七戸十和田",
    [],
    "しちのへとわだ"
  ),
  [STATION_IDS.jr_east.shin_aomori]: new StationInfo(
    "新青森",
    [
      LINE_IDS.jr_east.shinkansen.tohoku,
      LINE_IDS.jr_east.ouu_honsen,
      LINE_IDS.jr_east.shinkansen.hokkaido,
    ],
    "しんあおもり"
  ),
  // 北陸新幹線
  [STATION_IDS.jr_east.annaka_haruna]: new StationInfo(
    "安中榛名",
    [],
    "あんなかはるな"
  ),
  [STATION_IDS.jr_east.karuizawa]: new StationInfo(
    "軽井沢",
    [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.shinano.shinano],
    "かるいざわ"
  ),
  [STATION_IDS.jr_east.sakudaira]: new StationInfo(
    "佐久平",
    [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.jr_east.koumi],
    "さくだいら"
  ),
  [STATION_IDS.jr_east.duplicate.nagano.ueda]: new StationInfo(
    "上田",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.shinano.shinano,
      LINE_IDS.ueda.bessho,
    ],
    "うえだ"
  ),
  [STATION_IDS.jr_east.nagano]: new StationInfo(
    "長野",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_east.shinonoi,
      LINE_IDS.jr_east.shinetsu_honsen,
      LINE_IDS.shinano.shinano,
      LINE_IDS.shinano.kita_shinano,
      LINE_IDS.jr_east.iiyama,
      LINE_IDS.nagano.nagano,
    ],
    "ながの"
  ),
  [STATION_IDS.jr_east.iiyama]: new StationInfo(
    "飯山",
    [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.jr_east.iiyama],
    "いいやま"
  ),
  [STATION_IDS.jr_east.joetsu_myoko]: new StationInfo(
    "上越妙高",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.echigo_tokimeki.myoko_haneuma,
    ],
    "じょうえつみょうこう"
  ),
  [STATION_IDS.jr_west.itoigawa]: new StationInfo(
    "糸魚川",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_west.oito,
      LINE_IDS.echigo_tokimeki.nihonkai_hisui,
    ],
    "いといがわ"
  ),
  [STATION_IDS.jr_west.kurobe_unaduki_onsen]: new StationInfo(
    "黒部宇奈月温泉",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      new ExchangeInfo(
        LINE_IDS.toyama_chiho.honsen,
        STATION_IDS.toyama_chiho.shin_kurobe
      ),
    ],
    "くろべうなづきおんせん"
  ),
  [STATION_IDS.jr_west.toyama]: new StationInfo(
    "富山",
    [
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
    "とやま"
  ),
  [STATION_IDS.jr_west.shin_takaoka]: new StationInfo(
    "新高岡",
    [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.jr_west.johana],
    "しんたかおか"
  ),
  [STATION_IDS.jr_west.kanazawa]: new StationInfo(
    "金沢",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.hokuriku.asanogawa,
      LINE_IDS.ir_ishikawa.ir_ishikawa,
      LINE_IDS.jr_west.nanao,
    ],
    "かなざわ"
  ),
  [STATION_IDS.jr_west.komatsu]: new StationInfo(
    "小松",
    [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.ir_ishikawa.ir_ishikawa],
    "こまつ"
  ),
  [STATION_IDS.jr_west.kaga_onsen]: new StationInfo(
    "加賀温泉",
    [LINE_IDS.jr_east.shinkansen.hokuriku, LINE_IDS.ir_ishikawa.ir_ishikawa],
    "かがおんせん"
  ),
  [STATION_IDS.jr_west.awara_onsen]: new StationInfo(
    "芦原温泉",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.hapi_line_fukui.hapi_line_fukui,
    ],
    "あわらおんせん"
  ),
  [STATION_IDS.jr_west.fukui]: new StationInfo(
    "福井",
    [
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
    "ふくい"
  ),
  [STATION_IDS.jr_west.echizen_takefu]: new StationInfo(
    "越前たけふ",
    [],
    "えちぜんたけふ"
  ),
  [STATION_IDS.jr_west.tsuruga]: new StationInfo(
    "敦賀",
    [
      LINE_IDS.jr_east.shinkansen.hokuriku,
      LINE_IDS.jr_west.hokuriku_honsen,
      LINE_IDS.jr_west.kosei,
      LINE_IDS.jr_west.kohama,
      LINE_IDS.hapi_line_fukui.hapi_line_fukui,
    ],
    "つるが"
  ),
  // #endregion JR東海
};
