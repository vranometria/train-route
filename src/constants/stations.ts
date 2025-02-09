import { Station, StationInfo } from "@/types/station-info";
import { LINE_IDS } from "./line-ids";
import { STATION_IDS } from "./station-ids";
import { ExchangeInfo } from "@/types/exchange-info";
import { PREFECTURE as P } from "./prefecture";
import { Direct } from "@/types/Direct";
import { jr_east_stations } from "./stations/jr-east";
import { jr_toukai_stations } from "./stations/jr-toukai";
import { jr_west_stations } from "./stations/jr-west";

/** 乗り換え路線なし */
const NO_TRANSFER: string | ExchangeInfo[] = [];

/**
 * 駅情報 定義
 */
export const STATIONS = {
  ...jr_east_stations,
  ...jr_toukai_stations,
  ...jr_west_stations,

  // #region 東北
  // #region 道南いさりび鉄道
  [STATION_IDS.dounan_isaribi.satsukari]: new Station({
    name: "札苅",
    reading: "さつかり",
    en: "satsukari",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    coordinates: { lat: 41.699222, lng: 140.468139 },
  }),
  [STATION_IDS.dounan_isaribi.izumisawa]: new Station({
    name: "泉澤",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    en: "izumisawa",
    reading: "いずみさわ",
  }),
  [STATION_IDS.dounan_isaribi.kamaya]: new Station({
    name: "釜谷",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    en: "kamaya",
    reading: "かまや",
  }),
  [STATION_IDS.dounan_isaribi.oshima_tobetsu]: new Station({
    name: "渡島当別",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    en: "oshima_tobetsu",
    reading: "おしまとうべつ",
  }),
  [STATION_IDS.dounan_isaribi.moheji]: new Station({
    name: "茂辺地",
    en: "moheji",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    reading: "もへじ",
  }),
  [STATION_IDS.dounan_isaribi.kamiiso]: new Station({
    name: "上磯",
    en: "kamiiso",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    reading: "かみいそ",
  }),
  [STATION_IDS.dounan_isaribi.kiyokawaguchi]: new Station({
    name: "清川口",
    en: "kiyokawaguchi",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    reading: "きよかわぐち",
  }),
  [STATION_IDS.dounan_isaribi.kunebetsu]: new Station({
    name: "久根別",
    en: "kunebetsu",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    reading: "くねべつ",
  }),
  [STATION_IDS.dounan_isaribi.higashi_kunebetsu]: new Station({
    name: "東久根別",
    en: "higashi_kunebetsu",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    reading: "ひがしくねべつ",
  }),
  [STATION_IDS.dounan_isaribi.nanaehama]: new Station({
    name: "七重浜",
    en: "nanaehama",
    prefecture: P.HOKKAIDO,
    lines: [LINE_IDS.dounan_isaribi.dounan_isaribi],
    reading: "ななえはま",
  }),
  // #endregion 道南いさりび鉄道
  // #endregion 東北

  // #region 関東
  // #region ---東京---
  // #region ▶都営地下鉄
  // #region 浅草線
  [STATION_IDS.tokyo_subway.honjo_azumabashi]: new Station({
    name: "本所吾妻橋",
    reading: "ほんじょあずまばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.asakusa]: new Station({
    name: "浅草",
    reading: "あさくさ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_metro.ginza,
      LINE_IDS.toubu.isesaki,
    ],
  }),
  [STATION_IDS.tokyo_subway.kuramae]: new Station({
    name: "蔵前",
    reading: "くらまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.asakusabashi]: new Station({
    name: "浅草橋",
    reading: "あさくさばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.jr_east.chuo_soubu_kankou],
  }),
  [STATION_IDS.tokyo_subway.higashi_nihonbashi]: new Station({
    name: "東日本橋",
    reading: "ひがしにほんばし",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.jr_east.sobu_kaisoku,
    ],
  }),
  [STATION_IDS.tokyo_subway.ningyocho]: new Station({
    name: "人形町",
    reading: "にんぎょうちょう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.hanzoumon,
    ],
  }),
  [STATION_IDS.tokyo_subway.nihonbashi]: new Station({
    name: "日本橋",
    reading: "にほんばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.takaracho]: new Station({
    name: "宝町",
    reading: "たからちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.higashi_ginza]: new Station({
    name: "東銀座",
    reading: "ひがしぎんざ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.tokyo_metro.hibiya],
  }),
  [STATION_IDS.tokyo_subway.daimon]: new Station({
    name: "大門",
    reading: "だいもん",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  [STATION_IDS.tokyo_subway.mita]: new Station({
    name: "三田",
    reading: "みた",
    prefecture: P.TOKYO,
    lines: [
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.tamachi),
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.tamachi
      ),
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.tokyo_subway.mita,
    ],
  }),
  [STATION_IDS.tokyo_subway.sengakuji]: new Station({
    name: "泉岳寺",
    lines: [LINE_IDS.tokyo_subway.asakusa, LINE_IDS.keikyu.honsen],
    reading: "せんがくじ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.tokyo_subway.takanawadai]: new Station({
    name: "高輪台",
    reading: "たかなわだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.togoshi]: new Station({
    name: "戸越",
    reading: "とごし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.magome]: new Station({
    name: "馬込",
    reading: "まごめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_subway.nishimagome]: new Station({
    name: "西馬込",
    reading: "にしまごめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.asakusa],
  }),
  // #endregion 浅草線
  // >新宿線
  [STATION_IDS.tokyo_subway.shinohara]: new Station({
    name: "篠原",
    reading: "しのはら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.mizue]: new Station({
    name: "瑞江",
    reading: "みずえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.ichinoe]: new Station({
    name: "一ノ江",
    reading: "いちのえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.funabori]: new Station({
    name: "船堀",
    reading: "ふなぼり",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.higashi_oshima]: new Station({
    name: "東大島",
    reading: "ひがしおおしま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.oshima]: new Station({
    name: "大島",
    reading: "おおしま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.nishi_oshima]: new Station({
    name: "西大島",
    reading: "にしおおしま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.sumiyoshi]: new Station({
    name: "住吉",
    reading: "すみよし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku, LINE_IDS.tokyo_metro.hanzoumon],
  }),
  [STATION_IDS.tokyo_subway.kikukawa]: new Station({
    name: "菊川",
    reading: "きくかわ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.morishita]: new Station({
    name: "森下",
    reading: "もりした",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku, LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.hamachou]: new Station({
    name: "浜町",
    reading: "はまちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.bakuro_yokoyama]: new Station({
    name: "馬喰横山",
    reading: "ばくろよこやま",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.shinjuku,
      new ExchangeInfo(
        LINE_IDS.tokyo_subway.asakusa,
        STATION_IDS.tokyo_subway.higashi_nihonbashi
      ),
      LINE_IDS.jr_east.sobu_kaisoku,
    ],
  }),
  [STATION_IDS.tokyo_subway.iwamotocho]: new Station({
    name: "岩本町",
    reading: "いわもとちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.ogawacho]: new Station({
    name: "小川町",
    reading: "おがわちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.jinbocho]: new Station({
    name: "神保町",
    reading: "じんぼうちょう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.tokyo_subway.mita,
      LINE_IDS.tokyo_metro.hanzoumon,
    ],
  }),
  [STATION_IDS.tokyo_subway.kudanshita]: new Station({
    name: "九段下",
    reading: "くだんした",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.shinjuku,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.touzai,
    ],
  }),
  [STATION_IDS.tokyo_subway.akebonobashi]: new Station({
    name: "曙橋",
    reading: "あけぼのばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.shinsen_shinjuku]: new Station({
    name: "新線新宿",
    reading: "しんせんしんじゅく",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  // >大江戸線
  [STATION_IDS.tokyo_subway.tochomae]: new Station({
    name: "都庁前",
    reading: "とちょうまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.shinjuku_nishiguchi]: new Station({
    name: "新宿西口",
    reading: "しんじゅくにしぐち",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.oedo,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.marunouchi,
        STATION_IDS.jr_east.shinjuku
      ),
      new ExchangeInfo(LINE_IDS.seibu.shinjuku, STATION_IDS.jr_east.shinjuku),
    ],
  }),
  [STATION_IDS.tokyo_subway.wakamatsukawada]: new Station({
    name: "若松河田",
    reading: "わかまつかわだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.ushigome_yanagicho]: new Station({
    name: "牛込柳町",
    reading: "うしごめやなぎちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.ushigome_kagurazaka]: new Station({
    name: "牛込神楽坂",
    reading: "うしごめかぐらざか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.kasuga]: new Station({
    name: "春日",
    reading: "かすが",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  [STATION_IDS.tokyo_subway.hongo_sancho_me]: new Station({
    name: "本郷三丁目",
    reading: "ほんごうさんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_subway.ueno_okachimachi]: new Station({
    name: "上野御徒町",
    reading: "うえのおかちまち",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  [STATION_IDS.tokyo_subway.kiyosumishirakawa]: new Station({
    name: "清澄白河",
    reading: "きよすみしらかわ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.hanzoumon],
  }),
  [STATION_IDS.tokyo_subway.monzennakacho]: new Station({
    name: "門前仲町",
    reading: "もんぜんなかちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.touzai],
  }),
  [STATION_IDS.tokyo_subway.kachidoki]: new Station({
    name: "勝どき",
    reading: "かちどき",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.tsukijishijo]: new Station({
    name: "築地市場",
    reading: "つきじしじょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.shiodome]: new Station({
    name: "汐留",
    reading: "しおどめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.yurikamome.yurikamome],
  }),
  [STATION_IDS.tokyo_subway.akabanebashi]: new Station({
    name: "赤羽橋",
    reading: "あかばねばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.azabujuban]: new Station({
    name: "麻布十番",
    reading: "あざぶじゅうばん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.nanboku],
  }),
  [STATION_IDS.tokyo_subway.roppongi]: new Station({
    name: "六本木",
    reading: "ろっぽんぎ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.hibiya],
  }),
  [STATION_IDS.tokyo_subway.aoyama_itchome]: new Station({
    name: "青山一丁目",
    reading: "あおやまいっちょうめ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.oedo,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.ginza,
    ],
  }),
  [STATION_IDS.tokyo_subway.kokuritsu_kyogijo]: new Station({
    name: "国立競技場",
    reading: "こくりつきょうぎじょう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.oedo,
      new ExchangeInfo(
        LINE_IDS.jr_east.chuou_honsen,
        STATION_IDS.jr_east.sendagaya
      ),
    ],
  }),
  [STATION_IDS.tokyo_subway.nishi_shinjuku_gochome]: new Station({
    name: "西新宿五丁目",
    reading: "にししんじゅくごちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.nakano_sakaue]: new Station({
    name: "中野坂上",
    reading: "なかのさかうえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_subway.nakai]: new Station({
    name: "中井",
    reading: "なかい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo, LINE_IDS.seibu.shinjuku],
  }),
  [STATION_IDS.tokyo_subway.ochiaiminaminagasaki]: new Station({
    name: "落合南長崎",
    reading: "おちあいみなみながさき",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.shin_egota]: new Station({
    name: "新江古田",
    reading: "しんえごた",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.nerima_kasugacho]: new Station({
    name: "練馬春日町",
    reading: "ねりまかすがちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_subway.hikarigaoka]: new Station({
    name: "光が丘",
    reading: "ひかりがおか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.oedo],
  }),
  // >三田線
  [STATION_IDS.tokyo_subway.shiba_koen]: new Station({
    name: "芝公園",
    reading: "しばこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.onarimon]: new Station({
    name: "御成門",
    reading: "おなりもん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.uchisaiwaicho]: new Station({
    name: "内幸町",
    reading: "うちさいわちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.hakusan]: new Station({
    name: "白山",
    reading: "はくさん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.sengoku]: new Station({
    name: "千石",
    reading: "せんごく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.nishi_sugamo]: new Station({
    name: "西巣鴨",
    reading: "にしすがも",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita, LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.shin_itabashi]: new Station({
    name: "新板橋",
    reading: "しんいたばし",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.mita,
      new ExchangeInfo(LINE_IDS.jr_east.saikyou, STATION_IDS.jr_east.itabashi),
    ],
  }),
  [STATION_IDS.tokyo_subway.itabashi_kuyakushomae]: new Station({
    name: "板橋区役所前",
    reading: "いたばしくやくしょまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.itabashihoncho]: new Station({
    name: "板橋本町",
    reading: "いたばしほんちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.honhasunuma]: new Station({
    name: "本蓮沼",
    reading: "ほんはすぬま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.shimura_sakaue]: new Station({
    name: "志村坂上",
    reading: "しむらさかうえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.shimura_sanchome]: new Station({
    name: "志村三丁目",
    reading: "しむらさんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.renkon]: new Station({
    name: "蓮根",
    reading: "れんこん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.takashimadaira]: new Station({
    name: "高島平",
    reading: "たかしまだいら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.shin_takashimadaira]: new Station({
    name: "新高島平",
    reading: "しんたかしまだいら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.nishi_takashimadaira]: new Station({
    name: "西高島平",
    reading: "にしたかしまだいら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  [STATION_IDS.tokyo_subway.nishidai]: new Station({
    name: "西台",
    reading: "にしだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.mita],
  }),
  // ＞日暮里・舎人ライナー
  [STATION_IDS.tokyo_subway.akado_shogakko_mae]: new Station({
    name: "赤土小学校前",
    reading: "あかどしょうがっこうまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.kumanomae]: new Station({
    name: "熊野前",
    reading: "くまのまえ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.nippori_toneri_liner,
      LINE_IDS.tokyo_subway.sakura_tram,
    ],
  }),
  [STATION_IDS.tokyo_subway.adachi_odai]: new Station({
    name: "足立小台",
    reading: "あだちおだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.ougiohashi]: new Station({
    name: "扇大橋",
    reading: "おうぎおおはし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.takano]: new Station({
    name: "高野",
    reading: "たかの",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.kouhoku]: new Station({
    name: "江北",
    reading: "こうほく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.nishiaraidaishi_nishi]: new Station({
    name: "西新井大師西",
    reading: "にしあらいだいしにし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.yazaike]: new Station({
    name: "谷在家",
    reading: "やざいけ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.toneri_koen]: new Station({
    name: "舎人公園",
    reading: "とねりこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.toneri]: new Station({
    name: "舎人",
    reading: "とねり",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  [STATION_IDS.tokyo_subway.minumadaishinsui_koen]: new Station({
    name: "三ノ輪大神水公園",
    reading: "みのわだいしんすいこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.nippori_toneri_liner],
  }),
  // 東京さくらトラム
  [STATION_IDS.tokyo_subway.minowabashi]: new Station({
    name: "三ノ輪橋",
    reading: "みのわばし",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.hibiya,
        STATION_IDS.tokyo_metro.minowa
      ),
    ],
  }),
  [STATION_IDS.tokyo_subway.arakawa_icchumae]: new Station({
    name: "荒川一中前",
    reading: "あらかわいっちゅうまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.arakawa_kuyakushomae]: new Station({
    name: "荒川区役所前",
    reading: "あらかわくやくしょまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.arakawa_nichoume]: new Station({
    name: "荒川二丁目",
    reading: "あらかわにちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.arakawa_nanachoume]: new Station({
    name: "荒川七丁目",
    reading: "あらかわななちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.machiyaekimae]: new Station({
    name: "町屋駅前",
    reading: "まちやえきまえ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.chiyoda,
        STATION_IDS.tokyo_metro.machiya
      ),
      new ExchangeInfo(LINE_IDS.keisei.honsen, STATION_IDS.tokyo_metro.machiya),
    ],
  }),
  [STATION_IDS.tokyo_subway.machiya_nichoume]: new Station({
    name: "町屋二丁目",
    reading: "まちやにちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.higashi_oku_sanchoume]: new Station({
    name: "東奥三丁目",
    reading: "ひがしおくさんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.miyanomae]: new Station({
    name: "宮の前",
    reading: "みやのまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.kodai]: new Station({
    name: "小台",
    reading: "こだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.arakawa_yuenchimae]: new Station({
    name: "荒川遊園地前",
    reading: "あらかわゆうえんちまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.arakawa_shakomae]: new Station({
    name: "荒川車庫前",
    reading: "あらかわしゃこまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.kajiwara]: new Station({
    name: "梶原",
    reading: "かじわら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.sakaechou]: new Station({
    name: "栄町",
    reading: "さかえちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.oujiekimae]: new Station({
    name: "王子駅前",
    reading: "おうじえきまえ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.jr_east.keihin_touhoku,
        STATION_IDS.jr_east.ouji
      ),
      new ExchangeInfo(LINE_IDS.tokyo_metro.nanboku, STATION_IDS.jr_east.ouji),
    ],
  }),
  [STATION_IDS.tokyo_subway.asukayama]: new Station({
    name: "飛鳥山",
    reading: "あすかやま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.takinogawa_icchome]: new Station({
    name: "滝野川一丁目",
    reading: "たきのがわいっちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.nishigawara_yonchoume]: new Station({
    name: "西川辺四丁目",
    reading: "にしがわらよんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.shin_koushinduka]: new Station({
    name: "新庚申塚",
    reading: "しんこうしんづか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.koushinduka]: new Station({
    name: "庚申塚",
    reading: "こうしんづか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.sugamo_shinden]: new Station({
    name: "巣鴨新田",
    reading: "すがもしんでん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.otsukaekimae]: new Station({
    name: "大塚駅前",
    reading: "おおつかえきまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.mukouhara]: new Station({
    name: "向原",
    reading: "むこうはら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.higashi_ikebukuro_yonchoume]: new Station({
    name: "東池袋四丁目",
    reading: "ひがしいけぶくろよんちょうめ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.yurakucho,
        STATION_IDS.tokyo_metro.higashi_ikebukuro
      ),
    ],
  }),
  [STATION_IDS.tokyo_subway.toden_zoushigaya]: new Station({
    name: "都電雑司ヶ谷",
    reading: "とでんぞうしがや",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.kishiboshinmae]: new Station({
    name: "鬼子母神前",
    reading: "きしぼしんまえ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_subway.sakura_tram,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.fukutoshin,
        STATION_IDS.tokyo_metro.zoshigaya
      ),
    ],
  }),
  [STATION_IDS.tokyo_subway.gakusyuinshita]: new Station({
    name: "学習院下",
    reading: "がくしゅういんした",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.omokagebashi]: new Station({
    name: "面影橋",
    reading: "おもかげばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_subway.waseda]: new Station({
    name: "早稲田",
    reading: "わせだ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_metro.oshiage]: new Station({
    name: "押上",
    reading: "おしあげ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_subway.asakusa,
      LINE_IDS.toubu.toubu,
      LINE_IDS.toubu.isesaki,
    ],
  }),
  [STATION_IDS.tokyo_metro.kitasenju]: new Station({
    name: "北千住",
    reading: "きたせんじゅ",
    en: "kitasenju",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.jr_east.jouban,
      LINE_IDS.tokyo_metro.chiyoda,
    ],
  }),
  [STATION_IDS.tokyo_metro.minamisenju]: new Station({
    name: "南千住",
    en: "minamisenju",
    reading: "みなみせんじゅ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.minowa]: new Station({
    name: "三ノ輪",
    en: "minowa",
    reading: "みのわ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.iriya]: new Station({
    name: "入谷",
    en: "iriya",
    reading: "いりや",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.nakaokachimachi]: new Station({
    name: "仲御徒町",
    en: "nakaokachimachi",
    reading: "なかおかちまち",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.kodenmacho]: new Station({
    name: "小伝馬町",
    en: "kodenmacho",
    reading: "こでんまちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.ningyocho]: new Station({
    name: "人形町",
    en: "ningyocho",
    reading: "にんぎょうちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.kayabacho]: new Station({
    name: "茅場町",
    en: "kayabacho",
    reading: "かやばちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.tsukiji]: new Station({
    name: "築地",
    en: "tsukiji",
    reading: "つきじ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.higashiginza]: new Station({
    name: "東銀座",
    en: "higashiginza",
    reading: "ひがしぎんざ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.hibiya, LINE_IDS.tokyo_subway.asakusa],
  }),
  [STATION_IDS.tokyo_metro.ginza]: new Station({
    name: "銀座",
    en: "ginza",
    reading: "ぎんざ",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.ginza,
    ],
  }),
  [STATION_IDS.tokyo_metro.hibiya]: new Station({
    name: "日比谷",
    en: "hibiya",
    reading: "ひびや",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  [STATION_IDS.tokyo_metro.kasumigaseki]: new Station({
    name: "霞ヶ関",
    reading: "かすみがせき",
    prefecture: P.TOKYO,
    en: "kasumigaseki",
    lines: [
      LINE_IDS.tokyo_metro.hibiya,
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.chiyoda,
    ],
  }),
  [STATION_IDS.tokyo_metro.toranomon_hills]: new Station({
    name: "虎ノ門ヒルズ",
    reading: "とらのもんひるず",
    en: "toranomon_hills",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.kamiyacho]: new Station({
    name: "神谷町",
    en: "kamiyacho",
    reading: "かみやちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.roppongi]: new Station({
    name: "六本木",
    en: "roppongi",
    reading: "ろっぽんぎ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.hibiya, LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_metro.hiroo]: new Station({
    name: "広尾",
    en: "hiroo",
    reading: "ひろお",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.nakameguro]: new Station({
    name: "中目黒",
    en: "nakameguro",
    reading: "なかめぐろ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.hibiya, LINE_IDS.toukyu.touyoko],
  }),
  // >丸の内線
  [STATION_IDS.tokyo_metro.shinotuka]: new Station({
    name: "新大塚",
    reading: "しんおおつか",
    en: "shinotuka",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.myogadani]: new Station({
    name: "茗荷谷",
    en: "myogadani",
    reading: "みょうがだに",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.kourakuen]: new Station({
    name: "後楽園",
    en: "kourakuen",
    reading: "こうらくえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.hongosanchome]: new Station({
    name: "本郷三丁目",
    en: "hongosanchome",
    reading: "ほんごうさんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.awajicho]: new Station({
    name: "淡路町",
    en: "awajicho",
    reading: "あわじちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.otemachi]: new Station({
    name: "大手町",
    en: "otemachi",
    reading: "おおてまち",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.marunouchi,
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.hanzoumon,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_subway.mita,
    ],
  }),
  [STATION_IDS.tokyo_metro.kokkaigijidomae]: new Station({
    name: "国会議事堂前",
    en: "kokkaigijidomae",
    reading: "こっかいぎじどうまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.akasakamitsuke]: new Station({
    name: "赤坂見附",
    en: "akasakamitsuke",
    reading: "あかさかみつけ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.yotsuya_sanchome]: new Station({
    name: "四谷三丁目",
    en: "yotsuya_sanchome",
    reading: "よつやさんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.shinjuku_gyoenmae]: new Station({
    name: "新宿御苑前",
    en: "shinjuku_gyoenmae",
    reading: "しんじゅくぎょえんまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.shinjuku_sanchome]: new Station({
    name: "新宿三丁目",
    en: "shinjuku_sanchome",
    reading: "しんじゅくさんちょうめ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.nishishinjuku]: new Station({
    name: "西新宿",
    en: "nishishinjuku",
    reading: "にししんじゅく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.nakano_sakaue]: new Station({
    name: "中野坂上",
    en: "nakano_sakaue",
    reading: "なかのさかうえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi, LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_metro.shinnakano]: new Station({
    name: "新中野",
    reading: "しんなかの",
    en: "shinnakano",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.higashi_koenji]: new Station({
    name: "東高円寺",
    reading: "ひがしこうえんじ",
    en: "higashi_koenji",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.shinkoenji]: new Station({
    name: "新高円寺",
    reading: "しんこうえんじ",
    en: "shinkoenji",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  [STATION_IDS.tokyo_metro.minamiasagaya]: new Station({
    name: "南阿佐ヶ谷",
    reading: "みなみあさがや",
    en: "minamiasagaya",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.marunouchi],
  }),
  // >有楽町線
  [STATION_IDS.tokyo_metro.wakoshi]: new Station({
    name: "和光市",
    reading: "わこうし",
    en: "wakoshi",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      LINE_IDS.toubu.toujou,
    ],
  }),
  [STATION_IDS.tokyo_metro.chikatetsu_narimasu]: new Station({
    name: "地下鉄成増",
    reading: "ちかてつなります",
    en: "chikatetsu_narimasu",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      new ExchangeInfo(LINE_IDS.toubu.toujou, STATION_IDS.toubu.narimasu),
    ],
  }),
  [STATION_IDS.tokyo_metro.chikatetsu_akatsuka]: new Station({
    name: "地下鉄赤塚",
    reading: "ちかてつあかつか",
    en: "chikatetsu_akatsuka",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      new ExchangeInfo(LINE_IDS.toubu.toujou, STATION_IDS.toubu.shimoakatsuka),
    ],
  }),
  [STATION_IDS.tokyo_metro.heiwadai]: new Station({
    name: "平和台",
    reading: "へいわだい",
    en: "heiwadai",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
  }),
  [STATION_IDS.tokyo_metro.hikawadai]: new Station({
    name: "氷川台",
    reading: "ひかわだい",
    en: "hikawadai",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
  }),
  [STATION_IDS.tokyo_metro.kotake_mukaihara]: new Station({
    name: "小竹向原",
    reading: "こたけむかいはら",
    en: "kotake_mukaihara",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.fukutoshin,
      LINE_IDS.seibu.yurakucho,
    ],
  }),
  [STATION_IDS.tokyo_metro.senkawa]: new Station({
    name: "千川",
    reading: "せんかわ",
    en: "senkawa",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
  }),
  [STATION_IDS.tokyo_metro.kanamecho]: new Station({
    name: "要町",
    reading: "かなめちょう",
    en: "kanamecho",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_metro.fukutoshin],
  }),
  [STATION_IDS.jr_east.iidabashi]: new Station({
    name: "飯田橋",
    reading: "いいだばし",
    en: "iidabashi",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_subway.oedo,
    ],
  }),
  [STATION_IDS.tokyo_metro.higashi_ikebukuro]: new Station({
    name: "東池袋",
    reading: "ひがしいけぶくろ",
    en: "higashi_ikebukuro",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_metro.gokokuji]: new Station({
    name: "護国寺",
    reading: "ごこくじ",
    en: "gokokuji",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.edogawabashi]: new Station({
    name: "江戸川橋",
    reading: "えどがわばし",
    en: "edogawabashi",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.idabashi]: new Station({
    name: "飯田橋",
    reading: "いいだばし",
    en: "iidabashi",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.chuou_honsen,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.tokyo_metro.touzai,
      LINE_IDS.tokyo_metro.nanboku,
      LINE_IDS.tokyo_subway.oedo,
    ],
  }),
  [STATION_IDS.tokyo_metro.koujimachi]: new Station({
    name: "麹町",
    reading: "こうじまち",
    en: "koujimachi",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.nagatacho]: new Station({
    name: "永田町",
    reading: "ながたちょう",
    en: "nagatacho",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  [STATION_IDS.tokyo_metro.sakuradamon]: new Station({
    name: "桜田門",
    reading: "さくらだもん",
    en: "sakuradamon",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.ginza_icchome]: new Station({
    name: "銀座一丁目",
    reading: "ぎんざいっちょうめ",
    en: "ginza_icchome",
    prefecture: P.TOKYO,
    lines: [
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
  }),
  [STATION_IDS.tokyo_metro.shintomicho]: new Station({
    name: "新富町",
    reading: "しんとみちょう",
    en: "shintomicho",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.tokyo_metro.yurakucho,
      new ExchangeInfo(
        LINE_IDS.tokyo_metro.hibiya,
        STATION_IDS.tokyo_metro.tsukiji
      ),
    ],
  }),
  [STATION_IDS.tokyo_metro.tsukishima]: new Station({
    name: "月島",
    reading: "つきしま",
    en: "tsukishima",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.tokyo_metro.toyosu]: new Station({
    name:  "豊洲",
    reading: "とよす",
    en: "toyosu",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho, LINE_IDS.yurikamome.yurikamome],
  }),
  [STATION_IDS.tokyo_metro.tatsumi]: new Station({
    name: "辰巳",
    reading: "たつみ",
    en: "tatsumi",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.shinkiba]: new Station({
    name: "新木場",
    reading: "しんきば",
    en: "shinkiba",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.jr_east.musashino,
      LINE_IDS.jr_east.keiyou,
      LINE_IDS.tokyo_metro.yurakucho,
      LINE_IDS.toukyo_rinkai_kousoku.rinkai,
    ],
  }),
  // > 副都心線
  [STATION_IDS.tokyo_metro.zoshigaya]: new Station({
    name: "雑司ヶ谷",
    reading: "ぞうしがや",
    en: "zoshigaya",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.fukutoshin, LINE_IDS.tokyo_subway.sakura_tram],
  }),
  [STATION_IDS.tokyo_metro.nishi_waseda]: new Station({
    name: "西早稲田",
    reading: "にしわせだ",
    en: "nishi_waseda",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.kitasandou]: new Station({
    name: "北参道",
    reading: "きたさんどう",
    en: "kitasandou",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.yurakucho],
  }),
  [STATION_IDS.tokyo_metro.meiji_jingumae]: new Station({
    name: "明治神宮前",
    reading: "めいじじんぐうまえ",
    en: "meiji_jingumae",
    prefecture: P.TOKYO,
    lines: [
      new ExchangeInfo(LINE_IDS.jr_east.yamanote, STATION_IDS.jr_east.harajuku),
      LINE_IDS.tokyo_metro.chiyoda,
      LINE_IDS.tokyo_metro.fukutoshin,
    ],
  }),
  [STATION_IDS.tokyo_metro.higashi_shinjuku]: new Station({
    name: "東新宿",
    reading: "ひがししんじゅく",
    en: "higashi_shinjuku",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tokyo_metro.fukutoshin, LINE_IDS.tokyo_subway.oedo],
  }),
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
  [STATION_IDS.keiou.sasatsuka]: new Station({
    name: "笹塚",
    reading: "ささつか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.keiou.keioushinsen],
  }),
  [STATION_IDS.keiou.daitabashi]: new Station({
    name: "代田橋",
    reading: "だいたばし",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.meidaimae]: new Station({
    name: "明大前",
    reading: "めいだいまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.shimotakaido]: new Station({
    name: "下高井戸",
    reading: "しもたかいど",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.toukyu.setagaya],
  }),
  [STATION_IDS.keiou.sakurajosui]: new Station({
    name: "桜上水",
    reading: "さくらじょうすい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.kami_kitazawa]: new Station({
    name: "上北沢",
    reading: "かみきたざわ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.yawatayama]: new Station({
    name: "八幡山",
    reading: "やわたやま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.roka_koen]: new Station({
    name: "芦花公園",
    reading: "ろかこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.chitose_karasuyama]: new Station({
    name: "千歳烏山",
    reading: "ちとせからすやま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.senkawa]: new Station({
    name: "千川",
    reading: "せんかわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.tsutsujigaoka]: new Station({
    name: "つつじヶ丘",
    reading: "つつじがおか",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.sibasaki]: new Station({
    name: "柴咲",
    reading: "しばさき",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.kokuryo]: new Station({
    name: "国領",
    reading: "こくりょう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.fuda]: new Station({
    name: "布田",
    reading: "ふだ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.chofu]: new Station({
    name: "調布",
    reading: "ちょうふ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.sagamihara, LINE_IDS.keiou.keiou],
  }),
  [STATION_IDS.keiou.keiou_tamagawa]: new Station({
    name: "京王多摩川",
    reading: "けいおうたまがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_inadatutsumi]: new Station({
    name: "京王稲田堤",
    reading: "けいおういなだつつみ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_yomiuri_land]: new Station({
    name: "京王よみうりランド",
    reading: "けいおうよみうりらんど",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.inagi]: new Station({
    name: "稲城",
    reading: "いなぎ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.wakabadai]: new Station({
    name: "若葉台",
    reading: "わかばだい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_nagayama]: new Station({
    name: "京王長沢",
    reading: "けいおうながやま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_tama_center]: new Station({
    name: "京王多摩センター",
    reading: "けいおうたませんたー",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_horinouchi]: new Station({
    name: "京王堀之内",
    reading: "けいおうほりのうち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.minami_osawa]: new Station({
    name: "南大沢",
    reading: "みなみおおさわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.tamasakai]: new Station({
    name: "多摩境",
    reading: "たまさかい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.nishi_chofu]: new Station({
    name: "西調布",
    reading: "にしちょうふ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.tobitakyu]: new Station({
    name: "飛田給",
    reading: "とびたきゅう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.musashinodai]: new Station({
    name: "武蔵野台",
    reading: "むさしのだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.seibu.tamagawa],
  }),
  [STATION_IDS.keiou.tamareien]: new Station({
    name: "多磨霊園",
    reading: "たまれいえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.higashi_fuchu]: new Station({
    name: "東府中",
    reading: "ひがしふちゅう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.keiou.keibajo],
  }),
  [STATION_IDS.keiou.fuchu_keiba_seimon_mae]: new Station({
    name: "府中競馬正門前",
    reading: "ふちゅうけいばせいもんまえ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.tama_doubutsu_kouen]: new Station({
    name: "多摩動物公園",
    reading: "たまどうぶつこうえん",
    lines: [LINE_IDS.tama_monorail.tama_monorail, LINE_IDS.keiou.dobutsuen],
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.fuchu]: new Station({
    name: "府中",
    reading: "ふちゅう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.nakakawahara]: new Station({
    name: "中河原",
    reading: "なかかわはら",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.seiseki_sakuragaoka]: new Station({
    name: "聖蹟桜ヶ丘",
    reading: "せいせきさくらがおか",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.mogusaen]: new Station({
    name: "百草園",
    reading: "もぐさえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.takahatafudou]: new Station({
    name: "高幡不動",
    reading: "たかはたふどう",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.keiou.keiou,
      LINE_IDS.keiou.dobutsuen,
      LINE_IDS.tama_monorail.tama_monorail,
    ],
  }),
  [STATION_IDS.keiou.minamidaira]: new Station({
    name: "南平",
    reading: "みなみだいら",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.hirayamajoshikoen]: new Station({
    name: "平山城址公園",
    reading: "ひらやまじょうしこうえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.naganuma]: new Station({
    name: "長沼",
    reading: "ながぬま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.kitano]: new Station({
    name: "北野",
    reading: "きたの",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keiou, LINE_IDS.keiou.takao],
  }),
  [STATION_IDS.keiou.keio_hachioji]: new Station({
    name: "京王八王子",
    reading: "けいおうはちおうじ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.keiou_katakura]: new Station({
    name: "京王片倉",
    reading: "けいおうかたくら",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.yamada]: new Station({
    name: "山田",
    reading: "やまだ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.mejirodai]: new Station({
    name: "めじろ台",
    reading: "めじろだい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.hazama]: new Station({
    name: "狭間",
    reading: "はざま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keiou.takao_yamaguchi]: new Station({
    name: "高尾山口",
    reading: "たかおやまぐち",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.keiou.takao,
      new ExchangeInfo(
        LINE_IDS.takao_tozan.takao_tozan_cable,
        STATION_IDS.takao_tozan.kiyotaki
      ),
    ],
  }),
  [STATION_IDS.keiou.hatsudai]: new Station({
    name: "初台",
    reading: "はつだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keioushinsen],
  }),
  [STATION_IDS.keiou.hatagaya]: new Station({
    name: "幡ヶ谷",
    reading: "はたがや",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.keioushinsen],
  }),
  [STATION_IDS.keiou.shinsen]: new Station({
    name: "神泉",
    reading: "しんせん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.komaba_todaimae]: new Station({
    name: "駒場東大前",
    reading: "こまばとうだいまえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.ikenoue]: new Station({
    name: "池ノ上",
    reading: "いけのうえ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.shindaita]: new Station({
    name: "新代田",
    reading: "しんだいた",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.higashi_matsubara]: new Station({
    name: "東松原",
    reading: "ひがしまつばら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.eifukucho]: new Station({
    name: "永福町",
    reading: "えいふくちょう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.nishi_eifuku]: new Station({
    name: "西永福",
    reading: "にしえいふく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.hamadayama]: new Station({
    name: "浜田山",
    reading: "はまだやま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.takaido]: new Station({
    name: "高井戸",
    reading: "たかいど",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.fujimigaoka]: new Station({
    name: "富士見ヶ丘",
    reading: "ふじみがおか",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.kugayama]: new Station({
    name: "久我山",
    reading: "くがやま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.mitakadai]: new Station({
    name: "三鷹台",
    reading: "みたかだい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.keiou.inokashirakoen]: new Station({
    name: "井の頭公園",
    reading: "いのかしらこうえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.keiou.inokashira],
  }),
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
  // #region アーバンパークライン
  [STATION_IDS.toubu.kita_omiya]: new Station({
    name: "北大宮",
    reading: "きたおおみや",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.omiya_koen]: new Station({
    name: "大宮公園",
    reading: "おおみやこうえん",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.owada]: new Station({
    name: "大和田",
    reading: "おおわだ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.nanasato]: new Station({
    name: "七里",
    reading: "ななさと",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.iwatsuki]: new Station({
    name: "岩槻",
    reading: "いわつき",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.higashi_iwatsuki]: new Station({
    name: "東岩槻",
    reading: "ひがしいわつき",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.toyoharu]: new Station({
    name: "豊春",
    reading: "とよはる",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.yagisaki]: new Station({
    name: "八木崎",
    reading: "やぎさき",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kasukabe]: new Station({
    name: "春日部",
    reading: "かすかべ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.toubu.urban_park_line, LINE_IDS.toubu.isesaki],
  }),
  [STATION_IDS.toubu.fujinoushijima]: new Station({
    name: "藤の牛島",
    reading: "ふじのうしじま",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.minami_sakurai]: new Station({
    name: "南桜井",
    reading: "みなみさくらい",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kawama]: new Station({
    name: "川間",
    reading: "かわま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.nanakoudai]: new Station({
    name: "七光台",
    reading: "ななこうだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.shimizu_koen]: new Station({
    name: "清水公園",
    reading: "しみずこうえん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.atago]: new Station({
    name: "愛宕",
    reading: "あたご",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.nodashi]: new Station({
    name: "野田市",
    reading: "のだし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.umesato]: new Station({
    name: "梅郷",
    reading: "うめさと",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.unga]: new Station({
    name: "運河",
    reading: "うんが",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.edogawadai]: new Station({
    name: "江戸川台",
    reading: "えどがわだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.hatsuishi]: new Station({
    name: "初石",
    reading: "はついし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.toyoshiki]: new Station({
    name: "豊四季",
    reading: "とよしき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.shin_kashiwa]: new Station({
    name: "新柏",
    reading: "しんかしわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.masuo]: new Station({
    name: "増尾",
    reading: "ますお",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.sakasai]: new Station({
    name: "逆井",
    reading: "さかさい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.takayanagi]: new Station({
    name: "高柳",
    reading: "たかやなぎ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.mutsumi]: new Station({
    name: "六実",
    reading: "むつみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.kamagaya]: new Station({
    name: "鎌ヶ谷",
    reading: "かまがや",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.magomezawa]: new Station({
    name: "馬込沢",
    reading: "まごめざわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.tsukada]: new Station({
    name: "塚田",
    reading: "つかだ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.shin_funabashi]: new Station({
    name: "新船橋",
    reading: "しんふなばし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.toubu.sakado]: new Station({
    name: "坂戸",
    reading: "さかど",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.toubu.toujou, LINE_IDS.toubu.ogose],
  }),
  [STATION_IDS.toubu.ipponmatsu]: new Station({
    name: "一本松",
    reading: "いっぽんまつ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.nishi_oya]: new Station({
    name: "西大家",
    reading: "にしおおや",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kawakado]: new Station({
    name: "川角",
    reading: "かわかど",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.busyu_nagase]: new Station({
    name: "武州長瀬",
    reading: "ぶしゅうながせ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.higashi_moro]: new Station({
    name: "東毛呂",
    reading: "ひがしもろ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.busyu_karasawa]: new Station({
    name: "武州唐沢",
    reading: "ぶしゅうからさわ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.ogose]: new Station({
    name: "越生",
    reading: "おごせ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.toubu.ogose, LINE_IDS.jr_east.hachiko],
  }),
  // #endregion アーバンパークライン
  // 亀戸線
  [STATION_IDS.toubu.hikifune]: new StationInfo(
    "曳舟",
    [LINE_IDS.toubu.kameido, LINE_IDS.toubu.isesaki],
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
    [LINE_IDS.toubu.isesaki, LINE_IDS.toubu.daishi],
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
  [STATION_IDS.toubu.himemiya]: new Station({
    name: "姫宮",
    reading: "ひめみや",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.toubu_doubutsu_kouen]: new Station({
    name: "東武動物公園",
    reading: "とうぶどうぶつこうえん",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.toubu.isesaki, LINE_IDS.toubu.nikkou],
  }),
  [STATION_IDS.toubu.wado]: new Station({
    name: "和戸",
    reading: "わど",
    prefecture: P.SAITAMA,
  }),
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
    [LINE_IDS.toubu.isesaki, LINE_IDS.toubu.sano, LINE_IDS.toubu.koizumi],
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
    [LINE_IDS.toubu.isesaki, LINE_IDS.toubu.kiryu, LINE_IDS.toubu.koizumi],
    "おおた"
  ),
  [STATION_IDS.toubu.hosoya]: new Station({
    name: "細谷",
    reading: "ほそや",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kizaki]: new Station({
    name: "木崎",
    reading: "きざき",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.serada]: new Station({
    name: "世良田",
    reading: "せらだ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.sakaimachi]: new Station({
    name: "境町",
    reading: "さかいまち",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.goushi]: new Station({
    name: "剛志",
    reading: "ごうし",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_isezaki]: new Station({
    name: "新伊勢崎",
    reading: "しんいせざき",
    prefecture: P.TOCHIGI,
  }),
  // 鬼怒川線
  [STATION_IDS.toubu.shimo_imachi]: new Station({
    name: "下今市",
    reading: "しもいまいち",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.toubu.kinugawa, LINE_IDS.toubu.nikkou],
  }),
  [STATION_IDS.toubu.daiyamukou]: new Station({
    name: "大谷向",
    reading: "だいやむこう",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.okuwa]: new Station({
    name: "大桑",
    reading: "おおくわ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_takatoku]: new Station({
    name: "新高徳",
    reading: "しんたかとく",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kosagoe]: new Station({
    name: "小佐越",
    reading: "こさごえ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.toubu_world_square]: new Station({
    name: "東武ワールドスクウェア",
    reading: "とうぶわーるどすくうえあ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kinugawa_onsen]: new Station({
    name: "鬼怒川温泉",
    reading: "きぬがわおんせん",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kinugawa_kouen]: new Station({
    name: "鬼怒川公園",
    reading: "きぬがわこうえん",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_fujiwara]: new Station({
    name: "新藤原",
    reading: "しんふじわら",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.toubu.kinugawa, LINE_IDS.yagan.aidu_kinugawa],
  }),
  [STATION_IDS.toubu.sugitotakanodai]: new Station({
    name: "杉戸高野台",
    reading: "すぎとたかのだい",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.satte]: new Station({
    name: "幸手",
    reading: "さって",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.minami_kurihashi]: new Station({
    name: "南栗橋",
    reading: "みなみくりはし",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_koga]: new Station({
    name: "新古河",
    reading: "しんこが",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.yagyu]: new Station({
    name: "柳生",
    reading: "やぎゅう",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.itakuratouyoudaimae]: new Station({
    name: "板倉東洋大前",
    reading: "いたくらとうようだいまえ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.fujioka]: new Station({
    name: "藤岡",
    reading: "ふじおか",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shizuwa]: new Station({
    name: "静和",
    reading: "しずわ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_ohirashita]: new Station({
    name: "新大平下",
    reading: "しんおおひらした",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_tochigi]: new Station({
    name: "新栃木",
    reading: "しんとちぎ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.toubu.nikkou, LINE_IDS.toubu.utsunomiya],
  }),
  [STATION_IDS.toubu.kassenba]: new Station({
    name: "合戦場",
    reading: "かっせんば",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.ienaka]: new Station({
    name: "家中",
    reading: "いえなか",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.toubu_kanasaki]: new Station({
    name: "東武金崎",
    reading: "とうぶかなさき",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.niregi]: new Station({
    name: "楡木",
    reading: "にれぎ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.momiyama]: new Station({
    name: "籾山",
    reading: "もみやま",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shin_kanuma]: new Station({
    name: "新鹿沼",
    reading: "しんかぬま",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kita_kanuma]: new Station({
    name: "北鹿沼",
    reading: "きたかぬま",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.itaga]: new Station({
    name: "板荷",
    reading: "いたが",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.shimokoshiro]: new Station({
    name: "下小代",
    reading: "しもごしろ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.myoujin]: new Station({
    name: "明神",
    reading: "みょうじん",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.kami_imaichi]: new Station({
    name: "上今市",
    reading: "かみいまいち",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.toubu_nikko]: new Station({
    name: "東武日光",
    reading: "とうぶにっこう",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.toubu.yasyu_hirakawa]: new Station({
    name: "野州平川",
    reading: "やしゅうひらかわ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yasyu_otsuka]: new Station({
    name: "野州大塚",
    reading: "やしゅうおおつか",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.mibu]: new Station({
    name: "壬生",
    reading: "みぶ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kuniya]: new Station({
    name: "国谷",
    reading: "くにや",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.omochanomachi]: new Station({
    name: "おもちゃのまち",
    reading: "おもちゃのまち",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yasuduka]: new Station({
    name: "安塚",
    reading: "やすづか",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.nishi_kawada]: new Station({
    name: "西川田",
    reading: "にしかわだ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.esojima]: new Station({
    name: "江曽島",
    reading: "えそじま",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.minami_utsunomiya]: new Station({
    name: "南宇都宮",
    reading: "みなみうつのみや",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.toubu_utsunomiya]: new Station({
    name: "東武宇都宮",
    reading: "とうぶうつのみや",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.daishimae]: new Station({
    name: "大師前",
    reading: "だいしまえ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.watase]: new Station({
    name: "渡瀬",
    reading: "わたせ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.tajima]: new Station({
    name: "田島",
    reading: "たじま",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.sanoshi]: new Station({
    name: "佐野市",
    reading: "さのし",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.horigome]: new Station({
    name: "堀米",
    reading: "ほりごめ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yoshimizu]: new Station({
    name: "吉水",
    reading: "よしみず",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.tanuma]: new Station({
    name: "田沼",
    reading: "たぬま",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.tada]: new Station({
    name: "多田",
    reading: "ただ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.kuzuu]: new Station({
    name: "葛生",
    reading: "くずう",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.sanmaibashi]: new Station({
    name: "三枚橋",
    reading: "さんまいばし",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.jiroenbashi]: new Station({
    name: "治良門橋",
    reading: "じろえんばし",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.yabuduka]: new Station({
    name: "藪塚",
    reading: "やぶづか",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.azami]: new Station({
    name: "阿左美",
    reading: "あざみ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shin_kiryu]: new Station({
    name: "新桐生",
    reading: "しんきりゅう",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.aioi]: new Station({
    name: "相生",
    reading: "あいおい",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.toubu.kiryu, LINE_IDS.watarase_keikoku.watarase_keikoku],
  }),
  [STATION_IDS.toubu.akagi]: new Station({
    name: "赤城",
    reading: "あかぎ",
    prefecture: P.TOCHIGI,
    lines: [LINE_IDS.toubu.kiryu, LINE_IDS.joumou_denki.joumou_denki],
  }),
  [STATION_IDS.toubu.narushima]: new Station({
    name: "成島",
    reading: "なるしま",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.hon_nakano]: new Station({
    name: "本中野",
    reading: "ほんなかの",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.shinoduka]: new Station({
    name: "篠塚",
    reading: "しのづか",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.higashi_koizumi]: new Station({
    name: "東小泉",
    reading: "ひがしこいずみ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.koizumimachi]: new Station({
    name: "小泉町",
    reading: "こいずみまち",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.nishi_koizumi]: new Station({
    name: "西小泉",
    reading: "にしこいずみ",
    prefecture: P.TOCHIGI,
  }),
  [STATION_IDS.toubu.ryumai]: new Station({
    name: "龍舞",
    reading: "りゅうまい",
    prefecture: P.TOCHIGI,
  }),

  //   #endregion 東武鉄道
  // #region ▶多摩モノレール
  [STATION_IDS.tama_monorail.tama_center]: new Station({
    name: "多摩センター",
    reading: "たませんたー",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.matsugatani]: new Station({
    name: "松が谷",
    reading: "まつがたに",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.ootsuka_teikyou_daigaku]: new Station({
    name: "大塚・帝京大学",
    reading: "おおつか・ていきょうだいがく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.chuou_daigaku_myoujou_daigaku]: new Station({
    name: "中央大学・明星大学",
    reading: "ちゅうおうだいがく・みょうじょうだいがく",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.hodokubo]: new Station({
    name: "程久保",
    reading: "ほどくぼ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.manganji]: new Station({
    name: "万願寺",
    reading: "まんがんじ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.kousyukaidou]: new Station({
    name: "甲州街道",
    reading: "こうしゅうかいどう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.shibasaki_taiikukan]: new Station({
    name: "柴崎体育館",
    reading: "しばさきたいいくかん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.tachikawa_minami]: new Station({
    name: "立川南",
    reading: "たちかわみなみ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.tachikawa_kita]: new Station({
    name: "立川北",
    reading: "たちかわきた",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.takamatsu]: new Station({
    name: "高松",
    reading: "たかまつ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.tachihi]: new Station({
    name: "立飛",
    reading: "たちひ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.izumi_taiikukan]: new Station({
    name: "泉体育館",
    reading: "いずみたいいくかん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.sunagawananaban]: new Station({
    name: "砂川七番",
    reading: "すながわななばん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.sakurakaidou]: new Station({
    name: "桜街道",
    reading: "さくらかいどう",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.tama_monorail.kamikitadai]: new Station({
    name: "上北台",
    reading: "かみきただい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.tama_monorail.tama_monorail],
  }),

  // #endregion 多摩モノレール
  //  #endregion ---東京---
  //  #region 茨城
  //   #region 関東鉄道
  [STATION_IDS.kantou.nishi_toride]: new Station({
    name: "西取手",
    reading: "にしとりで",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.kantou.terahara]: new Station({
    name: "寺原",
    reading: "てらはら",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.kantou.shin_toride]: new Station({
    name: "新取手",
    reading: "しんとりで",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.kantou.yumemino]: new Station({
    name: "夢見野",
    reading: "ゆめみの",
    prefecture: P.IBARAKI,
  }),
  [STATION_IDS.kantou.inatoi]: new Station({
    name: "稲戸井",
    reading: "いなとい",
    prefecture: P.IBARAKI,
  }),
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
  // #region ---千葉---
  // #region ▶千葉都市モノレール
  [STATION_IDS.chiba_toshi_monorail.shiyakusyomae]: new Station({
    name: "市役所前",
    reading: "しやくしょまえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.sakaemachi]: new Station({
    name: "栄町",
    reading: "さかえまち",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.yoshikawa_kouen]: new Station({
    name: "葭川公園",
    reading: "よしかわこうえん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.kenchoumae]: new Station({
    name: "県庁前",
    reading: "けんちょうまえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.chiba_kouen]: new Station({
    name: "千葉公園",
    reading: "ちばこうえん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.sakusabe]: new Station({
    name: "作草部",
    reading: "さくさべ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.tendai]: new Station({
    name: "天台",
    reading: "てんだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.anagawa]: new Station({
    name: "穴川",
    reading: "あながわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.sports_center]: new Station({
    name: "スポーツセンター",
    reading: "すぽーつせんたー",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.doubutsu_kouen]: new Station({
    name: "動物公園",
    reading: "どうぶつこうえん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.mitsuwadai]: new Station({
    name: "三ツ和台",
    reading: "みつわだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.sakuragi]: new Station({
    name: "桜木",
    reading: "さくらぎ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.oguradai]: new Station({
    name: "小倉台",
    reading: "おぐらだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.chishirodai_kita]: new Station({
    name: "千代台北",
    reading: "ちしろだいきた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.chiba_toshi_monorail.chishirodai]: new Station({
    name: "千代台",
    reading: "ちしろだい",
    prefecture: P.CHIBA,
  }),
  // #endregion ▶千葉都市モノレール
  // #region ▶北総電鉄
  [STATION_IDS.hokusou.inaba_nihon_idai]: new Station({
    name: "印旛日本医大",
    reading: "いんばにほんいだい",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.inzai_makinohara]: new Station({
    name: "印西牧の原",
    reading: "いんざいまきのはら",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.chiba_newtown_chuo]: new Station({
    name: "千葉ニュータウン中央",
    reading: "ちばにゅーたうんちゅうおう",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.komuro]: new Station({
    name: "小室",
    reading: "こむろ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.shirai]: new Station({
    name: "白井",
    reading: "しらい",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.nishi_shirai]: new Station({
    name: "西白井",
    reading: "にししらい",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.omachi]: new Station({
    name: "大町",
    reading: "おおまち",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.matsuhidai]: new Station({
    name: "松飛台",
    reading: "まつひだい",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.akiyama]: new Station({
    name: "秋山",
    reading: "あきやま",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.kitakokubun]: new Station({
    name: "北国分",
    reading: "きたこくぶん",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.yagiri]: new Station({
    name: "矢切",
    reading: "やぎり",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  [STATION_IDS.hokusou.shin_shibamata]: new Station({
    name: "新柴又",
    reading: "しんしばまた",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.hokusou.hokusou, LINE_IDS.keisei.narita_kuko],
  }),
  // #endregion ▶北総電鉄
  // #region ▶京成電鉄
  [STATION_IDS.keisei.keisei_tsudanuma]: new Station({
    name: "京成津田沼",
    reading: "けいせいつだぬま",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.chiba,
      LINE_IDS.shin_keisei.shin_keisei,
    ],
  }),
  [STATION_IDS.keisei.keisei_ueno]: new Station({
    name: "京成上野",
    reading: "けいせいうえの",
    prefecture: P.CHIBA,
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
        LINE_IDS.jr_east.shinkansen.touhoku,
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
    reading: "あおと",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.keisei.oshiage,
    ],
  }),
  [STATION_IDS.keisei.shin_kamagaya]: new Station({
    name: "新鎌ヶ谷",
    reading: "しんかまがや",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.hokusou.hokusou,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.shin_keisei.shin_keisei,
      LINE_IDS.toubu.urban_park_line,
    ],
  }),
  [STATION_IDS.keisei.keisei_takasago]: new Station({
    name: "京成高砂",
    reading: "けいせいたかさご",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.hokusou.hokusou,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.kanamachi,
    ],
  }),
  [STATION_IDS.hokusou.narita_yukawa]: new Station({
    name: "成田湯川",
    reading: "なりたゆかわ",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.keisei.narita_kuko, LINE_IDS.hokusou.hokusou],
  }),
  [STATION_IDS.keisei.kuko_daini_bill]: new Station({
    name: "空港第二ビル",
    reading: "くうこうだいにびる",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.hokusou.hokusou,
    ],
  }),
  [STATION_IDS.keisei.narita_kuko]: new Station({
    name: "成田空港",
    reading: "なりたくうこう",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.keisei.honsen,
      LINE_IDS.keisei.narita_kuko,
      LINE_IDS.hokusou.hokusou,
    ],
  }),
  [STATION_IDS.keisei.shin_mikawashima]: new Station({
    name: "新三河島",
    reading: "しんみかわしま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.senju_ohashi]: new Station({
    name: "千住大橋",
    reading: "せんじゅおおはし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_sekiya]: new Station({
    name: "京成関屋",
    reading: "けいせいせきや",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.horikirisyobuen]: new Station({
    name: "堀切菖蒲園",
    reading: "ほりきりしょうぶえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.ohanadyaya]: new Station({
    name: "お花茶屋",
    reading: "おおはなだ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_koiwa]: new Station({
    name: "京成小岩",
    reading: "けいせいこいわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.edogawa]: new Station({
    name: "江戸川",
    reading: "えどがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.takanodai]: new Station({
    name: "高野台",
    reading: "たかのだい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.ichikawa_mama]: new Station({
    name: "市川真間",
    reading: "いちかわまま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.sugano]: new Station({
    name: "菅野",
    reading: "すがの",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_hachiman]: new Station({
    name: "京成八幡",
    reading: "けいせいはちまん",
    prefecture: P.CHIBA,
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
    reading: "おにごえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_narita]: new Station({
    name: "京成成田",
    reading: "けいせいなりた",
    prefecture: P.CHIBA,
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
    reading: "ひがしなりた",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.keisei.higashi_narita, LINE_IDS.shibayama.shibayama],
  }),
  [STATION_IDS.keisei.keisei_nakayama]: new Station({
    name: "京成中山",
    reading: "けいせいなかやま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.higashi_nakayama]: new Station({
    name: "東中山",
    reading: "ひがしなかやま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_nishifuna]: new Station({
    name: "京成西船",
    reading: "けいせいにしふな",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.kaijin]: new Station({
    name: "海神",
    reading: "かいじん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_funabashi]: new Station({
    name: "京成船橋",
    reading: "けいせいふなばし",
    prefecture: P.CHIBA,
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
    reading: "だいじんぐした",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.funabashi_keibajo]: new Station({
    name: "船橋競馬場",
    reading: "ふなばしけいばじょう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.yatsu]: new Station({
    name: "谷津",
    reading: "やつ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_okubo]: new Station({
    name: "京成大久保",
    reading: "けいせいおおくぼ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.mimomi]: new Station({
    name: "実籾",
    reading: "みもみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.yachiyodai]: new Station({
    name: "八千代台",
    reading: "やちよだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_owada]: new Station({
    name: "京成大和田",
    reading: "けいせいおおわだ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.katsutadai]: new Station({
    name: "勝田台",
    reading: "かつただい",
    prefecture: P.CHIBA,
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
    reading: "しづ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.yukarigaoka]: new Station({
    name: "ユーカリが丘",
    reading: "ゆーかりがおか",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.keisei.honsen, LINE_IDS.keisei.yukarigaoka],
  }),
  [STATION_IDS.keisei.keisei_shirai]: new Station({
    name: "京成白井",
    reading: "けいせいしらい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_sakura]: new Station({
    name: "京成佐倉",
    reading: "けいせいさくら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.osakura]: new Station({
    name: "大佐倉",
    reading: "おおさくら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_shisui]: new Station({
    name: "京成酒々井",
    reading: "けいせいしずい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.sougosandou]: new Station({
    name: "宗吾参道",
    reading: "そうごさんどう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.koudunomori]: new Station({
    name: "公津の杜",
    reading: "こうづのもり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.chiku_center]: new Station({
    name: "地区センター",
    reading: "ちくせんたー",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.kouen]: new Station({
    name: "公園",
    reading: "こうえん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.joshidai]: new Station({
    name: "女子大",
    reading: "じょしだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.chugakkou]: new Station({
    name: "中学校",
    reading: "ちゅうがっこう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.ino]: new Station({
    name: "井野",
    reading: "いの",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.shibamata]: new Station({
    name: "柴又",
    reading: "しばまた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_kanamachi]: new Station({
    name: "京成金町",
    reading: "けいせいかなまち",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.keisei.kanamachi,
      new ExchangeInfo(LINE_IDS.jr_east.jouban, STATION_IDS.jr_east.kanamachi),
    ],
  }),
  [STATION_IDS.keisei.keisei_hikifune]: new Station({
    name: "京成曳舟",
    reading: "けいせいひきふね",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.yahiro]: new Station({
    name: "八広",
    reading: "やひろ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.yotsugi]: new Station({
    name: "四ツ木",
    reading: "よつぎ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_tateishi]: new Station({
    name: "京成立石",
    reading: "けいせいたていし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keisei.keisei_makuhari_hongou]: new Station({
    name: "京成幕張本郷",
    reading: "けいせいまくはりほんごう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_makuhari]: new Station({
    name: "京成幕張",
    reading: "けいせいまくはり",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.kemigawa]: new Station({
    name: "けみがわ",
    reading: "けみがわ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_inage]: new Station({
    name: "京成稲毛",
    reading: "けいせいいなげ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.midoridai]: new Station({
    name: "みどり台",
    reading: "みどりだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.nishi_noborito]: new Station({
    name: "西登戸",
    reading: "にしのぼりと",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.keisei.shin_chiba]: new Station({
    name: "新千葉",
    reading: "しんちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.keisei_chiba]: new Station({
    name: "京成千葉",
    reading: "けいせいちば",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.chiba_chuou]: new Station({
    name: "千葉中央",
    reading: "ちばちゅうおう",
    prefecture: P.CHIBA,
    lines: [LINE_IDS.keisei.chiba, LINE_IDS.keisei.chihara],
  }),
  [STATION_IDS.keisei.chibadera]: new Station({
    name: "千葉寺",
    reading: "ちばでら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.omoridai]: new Station({
    name: "大森台",
    reading: "おおもりだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.gakuenmae]: new Station({
    name: "学園前",
    reading: "がくえんまえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.oyumino]: new Station({
    name: "おゆみ野",
    reading: "おゆみの",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.keisei.chiharadai]: new Station({
    name: "ちはら台",
    reading: "ちはらだい",
    prefecture: P.CHIBA,
  }),
  // #endregion ▶京成電鉄
  // #region ▶新京成電鉄
  [STATION_IDS.shin_keisei.kami_hongou]: new Station({
    name: "上本郷",
    reading: "かみほんごう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.matsudo_shinden]: new Station({
    name: "松戸新田",
    reading: "まつどしんでん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.minoridai]: new Station({
    name: "みのり台",
    reading: "みのりだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.yabashira]: new Station({
    name: "八柱",
    reading: "やばしら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.tokiwadaira]: new Station({
    name: "常盤平",
    reading: "ときわだいら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.gokou]: new Station({
    name: "五香",
    reading: "ごこう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.motoyama]: new Station({
    name: "元山",
    reading: "もとやま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kunugiyama]: new Station({
    name: "くぬぎ山",
    reading: "くぬぎやま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kita_hatsutomi]: new Station({
    name: "北初富",
    reading: "きたはつとみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.hatsudomi]: new Station({
    name: "初富",
    reading: "はつどみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kamagaya_daibutsu]: new Station({
    name: "鎌ヶ谷大仏",
    reading: "かまがやだいぶつ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.futawamukoudai]: new Station({
    name: "二和向台",
    reading: "ふたわむこうだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.misaki]: new Station({
    name: "三咲",
    reading: "みさき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.takifudou]: new Station({
    name: "滝不動",
    reading: "たきふどう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.takane_koudan]: new Station({
    name: "高根公団",
    reading: "たかねこうだん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.takane_kido]: new Station({
    name: "高根木戸",
    reading: "たかねきど",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.kita_narashino]: new Station({
    name: "北習志野",
    reading: "きたならしの",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.shin_keisei.shin_keisei,
      LINE_IDS.touyou_kousoku.touyou_kousoku,
    ],
  }),
  [STATION_IDS.shin_keisei.narashino]: new Station({
    name: "習志野",
    reading: "ならしの",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.yakuendai]: new Station({
    name: "薬園台",
    reading: "やくえんだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.maebara]: new Station({
    name: "前原",
    reading: "まえばら",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.shin_keisei.shin_tsudanuma]: new Station({
    name: "新津田沼",
    reading: "しんつだぬま",
    prefecture: P.CHIBA,
  }),
  // #endregion ▶新京成電鉄
  // #region ▶舞浜リゾート
  [STATION_IDS.maihama_resort.resort_gateway]: new Station({
    name: "リゾートゲートウェイ",
    reading: "りぞーとげーとうぇい",
    prefecture: P.CHIBA,
    lines: [
      new ExchangeInfo(LINE_IDS.jr_east.keiyou, STATION_IDS.jr_east.maihama),
      new ExchangeInfo(LINE_IDS.jr_east.musashino, STATION_IDS.jr_east.maihama),
    ],
  }),
  [STATION_IDS.maihama_resort.tokyo_disneyland]: new Station({
    name: "ディズニーリゾート",
    reading: "でぃずにーりぞーと",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.maihama_resort.tokyo_disneysea]: new Station({
    name: "ディズニーシー",
    reading: "でぃずにーしー",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.maihama_resort.bayside]: new Station({
    name: "ベイサイド",
    reading: "べいさいど",
    prefecture: P.CHIBA,
  }),
  // #endregion ▶舞浜リゾート
  [STATION_IDS.shibayama.shibayama_chiyoda]: new Station({
    name: "芝山千代田",
    reading: "しばやまちよだ",
    prefecture: P.CHIBA,
  }),
  // #region ▶小湊鉄道
  [STATION_IDS.kominato.kazusa_murakami]: new Station({
    name: "上総村上",
    reading: "かずさむらかみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.amaariki]: new Station({
    name: "海士有木",
    reading: "あまありき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_mitsumata]: new Station({
    name: "上総三又",
    reading: "かずさみつまた",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_yamada]: new Station({
    name: "上総山田",
    reading: "かずさやまだ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.koufudai]: new Station({
    name: "光風台",
    reading: "こうふうだい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.umatate]: new Station({
    name: "馬立",
    reading: "うまたて",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_ushiku]: new Station({
    name: "上総牛久",
    reading: "かずさうしく",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_kawama]: new Station({
    name: "上総川間",
    reading: "かずさかわま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_tsurumai]: new Station({
    name: "上総鶴舞",
    reading: "かずさつるまい",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_kubo]: new Station({
    name: "上総久保",
    reading: "かずさくぼ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.takataki]: new Station({
    name: "高滝",
    reading: "たかたき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.satomi]: new Station({
    name: "里見",
    reading: "さとみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.itabu]: new Station({
    name: "飯給",
    reading: "いたぶ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.tsukizaki]: new Station({
    name: "月崎",
    reading: "つきざき",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_okubo]: new Station({
    name: "上総大久保",
    reading: "かずさおおくぼ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.yourou_keikoku]: new Station({
    name: "養老渓谷",
    reading: "ようろうけいこく",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.kominato.kazusa_nakano]: new Station({
    name: "上総中野",
    reading: "かずさなかの",
    prefecture: P.CHIBA,
  }),
  // #endregion ▶小湊鉄道
  // #region ▶銚子電気鉄道
  [STATION_IDS.choushi_denki.nakanochou]: new Station({
    name: "中野町",
    reading: "なかのちょう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.kannon]: new Station({
    name: "観音",
    reading: "かんのん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.hon_choushi]: new Station({
    name: "本銚子",
    reading: "ほんちょうし",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.sasagami_kurohae]: new Station({
    name: "笹上黒生",
    reading: "ささがみくろはえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.nishi_ashikajima]: new Station({
    name: "西海鹿島",
    reading: "にしあしかじま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.ashikajima]: new Station({
    name: "海鹿島",
    reading: "あしかじま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.kimigahama]: new Station({
    name: "君ヶ浜",
    reading: "きみがはま",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.inubou]: new Station({
    name: "犬吠",
    reading: "いぬぼう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.choushi_denki.tokawa]: new Station({
    name: "外川",
    reading: "とかわ",
    prefecture: P.CHIBA,
  }),
  // #endregion 銚子電気鉄道
  // #region ▶東葉高速鉄道
  [STATION_IDS.touyou_kousoku.higashi_kaijin]: new Station({
    name: "東海神",
    reading: "ひがしかいじん",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.hasama]: new Station({
    name: "飯山満",
    reading: "はさまちょう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.funabashi_nichidaimae]: new Station({
    name: "船橋日大前",
    reading: "ふなばしにちだいまえ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.yachiyo_midorigaoka]: new Station({
    name: "八千代緑が丘",
    reading: "やちよみどりがおか",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.yachiyo_chuou]: new Station({
    name: "八千代中央",
    reading: "やちよちゅうおう",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.murakami]: new Station({
    name: "村上",
    reading: "むらかみ",
    prefecture: P.CHIBA,
  }),
  [STATION_IDS.touyou_kousoku.touyou_katsutadai]: new Station({
    name: "東洋勝田台",
    reading: "とうようかつただい",
    prefecture: P.CHIBA,
    lines: [
      LINE_IDS.touyou_kousoku.touyou_kousoku,
      new ExchangeInfo(LINE_IDS.keisei.honsen, STATION_IDS.keisei.katsutadai),
    ],
  }),
  //   #endregion 東葉高速鉄道
  // #endregion ---千葉---
  // #region ---神奈川---
  // #region ▶相模鉄道
  // ＞本線
  [STATION_IDS.sagami.ebina]: new Station({
    name: "海老名",
    reading: "えびな",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.jr_east.sagami,
      LINE_IDS.sagami.honsen,
    ],
  }),
  [STATION_IDS.sagami.kashiwadai]: new Station({
    name: "柏木台",
    reading: "かしわだい",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.sagamiotsuka]: new Station({
    name: "相模大塚",
    reading: "さがみおおつか",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.seya]: new Station({
    name: "瀬谷",
    reading: "せや",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.mitsukyo]: new Station({
    name: "三ツ境",
    reading: "みつきょう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.kibougaoka]: new Station({
    name: "希望ヶ丘",
    reading: "きぼうがおか",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.futamatagawa]: new Station({
    name: "二俣川",
    reading: "ふたまたがわ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.sagami.honsen, LINE_IDS.sagami.izumino],
  }),
  [STATION_IDS.sagami.tsurugamine]: new Station({
    name: "鶴ヶ峰",
    reading: "つるがみね",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.nishiya]: new Station({
    name: "西谷",
    reading: "にしや",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.sagami.honsen, LINE_IDS.sagami.izumino],
  }),
  [STATION_IDS.sagami.kamihoshikawa]: new Station({
    name: "上星川",
    reading: "かみほしかわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.wadacho]: new Station({
    name: "和田町",
    reading: "わだちょう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.hoshikawa]: new Station({
    name: "星川",
    reading: "ほしかわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.tennocho]: new Station({
    name: "天王町",
    reading: "てんのうちょう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.nishiyokohama]: new Station({
    name: "西横浜",
    reading: "にしよこはま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.hiranumabashi]: new Station({
    name: "平沼橋",
    reading: "ひらぬまばし",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.hazawayokohamakokudai]: new Station({
    name: "羽沢横浜国大",
    reading: "はざわよこはまこくだい",
    prefecture: P.KANAGAWA,
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
  // #region ▶横浜市営地下鉄
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
  // #region ▶小田急電鉄
  [STATION_IDS.sagami.sagamino]: new Station({
    name: "さがみ野",
    reading: "さがみの",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.minami_shinjuku]: new Station({
    name: "南新宿",
    reading: "みなみしんじゅく",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.sangubashi]: new Station({
    name: "参宮橋",
    reading: "さんぐうばし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.yoyogi_hachiman]: new Station({
    name: "代々木八幡",
    reading: "よよぎはちまん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.odakyu.odawara, LINE_IDS.tokyo_metro.chiyoda],
  }),
  [STATION_IDS.odakyu.yoyogi_uehara]: new Station({
    name: "代々木上原",
    reading: "よよぎうえはら",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.higashi_kitazawa]: new Station({
    name: "東北沢",
    reading: "ひがしきたざわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.shimokitazawa]: new Station({
    name: "下北沢",
    reading: "しもきたざわ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.odakyu.odawara, LINE_IDS.keiou.inokashira],
  }),
  [STATION_IDS.odakyu.setagaya_daita]: new Station({
    name: "世田谷代田",
    reading: "せたがやだいた",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.umegaoka]: new Station({
    name: "梅ヶ丘",
    reading: "うめがおか",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.gotokuji]: new Station({
    name: "豪徳寺",
    reading: "ごうとくじ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.kyoudou]: new Station({
    name: "経堂",
    reading: "きょうどう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.chitose_funabashi]: new Station({
    name: "千歳船橋",
    reading: "ちとせふなばし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.soshigaya_okura]: new Station({
    name: "祖師ヶ谷大蔵",
    reading: "そしがやおおくら",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.seijogakuenmae]: new Station({
    name: "成城学園前",
    reading: "せいじょうがくえんまえ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.kitami]: new Station({
    name: "北見",
    reading: "きたみ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.komae]: new Station({
    name: "駒江",
    reading: "こまえ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.izumi_tamagawa]: new Station({
    name: "和泉多摩川",
    reading: "いずみたまがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.mukougaokayuen]: new Station({
    name: "向ヶ丘遊園",
    reading: "むこうがおかゆうえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.odakyu.ikuta]: new Station({
    name: "生田",
    reading: "いくた",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.yomiuri_land_mae]: new Station({
    name: "読売ランド前",
    reading: "よみうりらんどまえ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.yurigaoka]: new Station({
    name: "ゆりがおか",
    reading: "ゆりがおか",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.shin_yurigaoka]: new Station({
    name: "新百合ヶ丘",
    reading: "しんゆりがおか",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.odawara, LINE_IDS.odakyu.tama],
  }),
  [STATION_IDS.odakyu.kakio]: new Station({
    name: "柿生",
    reading: "かきお",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.tsurukawa]: new Station({
    name: "鶴川",
    reading: "つるかわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.soubudaimae]: new Station({
    name: "相武台前",
    reading: "相武台前",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.tamagawagakuenmae]: new Station({
    name: "玉川学園前",
    reading: "たまがわがくえんまえ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.odakyu_sagamihara]: new Station({
    name: "小田急相模原",
    reading: "おだきゅうさがみはら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.zama]: new Station({
    name: "座間",
    reading: "ざま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.ebina]: new Station({
    name: "海老名",
    reading: "えびな",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.odawara, LINE_IDS.sagami.honsen],
  }),
  [STATION_IDS.odakyu.honatsugi]: new Station({
    name: "本厚木",
    reading: "ほんあつぎ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.aikouishida]: new Station({
    name: "愛甲石田",
    reading: "あいこういしだ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.isehara]: new Station({
    name: "伊勢原",
    reading: "いせはら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.tsurumaki_onsen]: new Station({
    name: "鶴巻温泉",
    reading: "つるまきおんせん",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.toukaidaigakumae]: new Station({
    name: "東海大学前",
    reading: "とうかいだいがくまえ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.hadano]: new Station({
    name: "秦野",
    reading: "はだの",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.shibusawa]: new Station({
    name: "澁澤",
    reading: "しぶさわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.shin_matsuda]: new Station({
    name: "新松田",
    reading: "しんまつだ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kaisei]: new Station({
    name: "開成",
    reading: "かいせい",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kayama]: new Station({
    name: "栢山",
    reading: "かやま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.tomizu]: new Station({
    name: "富水",
    reading: "とみず",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.hotaruda]: new Station({
    name: "蛍田",
    reading: "ほたるだ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.ashigara]: new Station({
    name: "足柄",
    reading: "あしがら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.sagamiono]: new Station({
    name: "相模大野",
    reading: "さがみおおの",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.odawara, LINE_IDS.odakyu.enoshima],
  }),
  [STATION_IDS.odakyu.higashi_rinkan]: new Station({
    name: "東林間",
    reading: "ひがしりんかん",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.chuou_rinkan]: new Station({
    name: "中央林間",
    reading: "ちゅうおうりんかん",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.enoshima, LINE_IDS.toukyu.denentoshi],
  }),
  [STATION_IDS.odakyu.minami_rinkan]: new Station({
    name: "南林間",
    reading: "みなみりんかん",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.sagami.tsuruma]: new Station({
    name: "鶴間",
    reading: "つるま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.yamato]: new Station({
    name: "大和",
    reading: "やまと",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.enoshima, LINE_IDS.sagami.honsen],
  }),
  [STATION_IDS.odakyu.sakuragaoka]: new Station({
    name: "桜ヶ丘",
    reading: "さくらがおか",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kouzashibuya]: new Station({
    name: "高座渋谷",
    reading: "こうざしぶや",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.chougo]: new Station({
    name: "長後",
    reading: "ちょうご",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.shonandai]: new Station({
    name: "湘南台",
    reading: "しょうなんだい",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.sagami.izumino,
      LINE_IDS.odakyu.enoshima,
      LINE_IDS.yokohama_subway.blue_line,
    ],
  }),
  [STATION_IDS.odakyu.mutsuainichidaimae]: new Station({
    name: "六会日大前",
    reading: "",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.zengyo]: new Station({
    name: "善行",
    reading: "ぜんぎょう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.fujisawahonmachi]: new Station({
    name: "藤沢本町",
    reading: "ふじさわほんまち",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kugenuma]: new Station({
    name: "鵠沼",
    reading: "くげぬま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.honkugenuma]: new Station({
    name: "本鵠沼",
    reading: "ほんくげぬま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kugenumakaigan]: new Station({
    name: "鵠沼海岸",
    reading: "くげぬまかいがん",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kataseenoshima]: new Station({
    name: "片瀬江ノ島",
    reading: "かたせえのしま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.hakone_itabashi]: new Station({
    name: "箱根板橋",
    reading: "はこねいたばし",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kazamatsuri]: new Station({
    name: "風祭",
    reading: "かざまつり",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.iryuda]: new Station({
    name: "入生田",
    reading: "いりゅうだ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.hakone_yumoto]: new Station({
    name: "箱根湯本",
    reading: "はこねゆもと",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.tounosawa]: new Station({
    name: "塔ノ沢",
    reading: "とうのさわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.ohiradai]: new Station({
    name: "大平台",
    reading: "おおひらだい",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.miyanoshita]: new Station({
    name: "宮ノ下",
    reading: "みやのした",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kowakidani]: new Station({
    name: "小涌谷",
    reading: "こわきだに",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.choukokunomori]: new Station({
    name: "彫刻の森",
    reading: "ちょうこくのもり",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.goura]: new Station({
    name: "強羅",
    reading: "ごうら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.odakyu.hakonetozan, LINE_IDS.odakyu_hakone.kousaku],
  }),
  [STATION_IDS.odakyu.karakida]: new StationInfo(
    "唐木田",
    NO_TRANSFER,
    "からきだ"
  ),
  [STATION_IDS.odakyu.odakyu_tama_center]: new Station({
    name: "小田急多摩センター",
    reading: "おだきゅうたませんたー",
    prefecture: P.KANAGAWA,
    lines: [
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
  }),
  [STATION_IDS.odakyu.odakyu_eizan]: new Station({
    name: "小田急永山",
    reading: "おだきゅうえいざん",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.haruhino]: new Station({
    name: "春日町",
    reading: "はるひの",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kurokawa]: new Station({
    name: "黒川",
    reading: "くろかわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.kurihira]: new Station({
    name: "栗平",
    reading: "くりひら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu.satsukidai]: new Station({
    name: "五月台",
    reading: "さつきだい",
    prefecture: P.KANAGAWA,
  }),
  // #endregion 小田急
  // #region ▶小田急箱根
  [STATION_IDS.odakyu_hakone.souunzan]: new Station({
    name: "早雲山",
    reading: "そううんざん",
    prefecture: P.KANAGAWA,
    lines: [
      LINE_IDS.odakyu_hakone.kousaku,
      LINE_IDS.odakyu_hakone.hakone_rope_way,
    ],
  }),
  [STATION_IDS.odakyu_hakone.owakudani]: new Station({
    name: "大涌谷",
    reading: "おおわくだに",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu_hakone.ubako]: new Station({
    name: "姥子",
    reading: "うばこ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu_hakone.tougendai]: new Station({
    name: "桃源台",
    reading: "とうげんだい",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu_hakone.kouenshimo]: new Station({
    name: "公園下",
    reading: "こうえんしも",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu_hakone.kouenkami]: new Station({
    name: "公園上",
    reading: "こうえんかみ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu_hakone.naka_goura]: new Station({
    name: "中強羅",
    reading: "なかごうら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.odakyu_hakone.kami_goura]: new Station({
    name: "上強羅",
    reading: "かみごうら",
    prefecture: P.KANAGAWA,
  }),
  // #endregion 小田急箱根
  // #region ▶横浜高速鉄道
  [STATION_IDS.yokohama_kousoku.shin_takashima]: new Station({
    name: "新高島",
    reading: "しんたかしま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.yokohama_kousoku.minato_mirai]: new Station({
    name: "みなとみらい",
    reading: "みなとみらい",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.yokohama_kousoku.basyamichi]: new Station({
    name: "馬車道",
    reading: "ばしゃみち",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.yokohama_kousoku.nihon_odori]: new Station({
    name: "日本大通り",
    reading: "にほんおおどおり",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.yokohama_kousoku.motomachi_chukagai]: new Station({
    name: "元町・中華街",
    reading: "もとまちちゅうかがい",
    prefecture: P.KANAGAWA,
  }),
  // #endregion >>横浜高速鉄道
  // #region ▶京急電鉄
  [STATION_IDS.keikyu.kitashinagawa]: new Station({
    name: "北品川",
    reading: "きたしながわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.shinbanba]: new Station({
    name: "新馬場",
    reading: "しんばんば",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.aomonoyokocho]: new Station({
    name: "青物横丁",
    reading: "あおものよこちょう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.samezu]: new Station({
    name: "鮫洲",
    reading: "さめず",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.tachiaigawa]: new Station({
    name: "立会川",
    reading: "たちあいがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.omorikaigan]: new Station({
    name: "大森海岸",
    reading: "おおもりかいがん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.heiwajima]: new Station({
    name: "平和島",
    reading: "へいわじま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.omorimachi]: new Station({
    name: "大森町",
    reading: "おおもりまち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.umeyashiki]: new Station({
    name: "梅屋敷",
    reading: "うめやしき",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.keikyu.keikyukamata]: new Station({
    name: "京急蒲田",
    reading: "けいきゅうかまた",
    prefecture: P.TOKYO,
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
      new ExchangeInfo(
        LINE_IDS.jr_east.toukaidou,
        STATION_IDS.jr_east.kawasaki
      ),
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
  // #region ▶江ノ島電鉄
  [STATION_IDS.enoshima.ishigami]: new Station({
    name: "石上",
    reading: "いしがみ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.yanagikouji]: new Station({
    name: "柳小路",
    reading: "やなぎこうじ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.kugenuma]: new Station({
    name: "鵠沼",
    reading: "くげぬま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.syounan_kaigan_kouen]: new Station({
    name: "湘南海岸公園",
    reading: "しょうなんかいがんこうえん",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.enoshima]: new Station({
    name: "江ノ島",
    reading: "えのしま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.koshigoe]: new Station({
    name: "腰越",
    reading: "こしごえ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.kamakura_koukou_mae]: new Station({
    name: "鎌倉高校前",
    reading: "かまくらこうこうまえ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.shichirigahama]: new Station({
    name: "七里ヶ浜",
    reading: "しちりがはま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.inamuragasaki]: new Station({
    name: "稲村ヶ崎",
    reading: "いなむらがさき",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.gokurakuji]: new Station({
    name: "極楽寺",
    reading: "ごくらくじ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.hase]: new Station({
    name: "長谷",
    reading: "はせ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.yuigahama]: new Station({
    name: "由比ヶ浜",
    reading: "ゆいがはま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.enoshima.wadaduka]: new Station({
    name: "和田塚",
    reading: "わだづか",
    prefecture: P.KANAGAWA,
  }),
  //   #endregion 江ノ島電鉄
  // #region ▶湘南モノレール
  [STATION_IDS.syounan_monorail.fujimichou]: new Station({
    name: "富士見町",
    reading: "ふじみちょう",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.syounan_monorail.syounan_machiya]: new Station({
    name: "湘南町屋",
    reading: "しょうなんまちや",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.syounan_monorail.syounan_fukasawa]: new Station({
    name: "湘南深沢",
    reading: "しょうなんふかさわ",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.syounan_monorail.nishi_kamakura]: new Station({
    name: "西鎌倉",
    reading: "にしかまくら",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.syounan_monorail.kataseyama]: new Station({
    name: "片瀬山",
    reading: "かたせやま",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.syounan_monorail.mejiro_yamashita]: new Station({
    name: "目白山下",
    reading: "めじろやました",
    prefecture: P.KANAGAWA,
  }),
  [STATION_IDS.syounan_monorail.syounan_enoshima]: new Station({
    name: "湘南江の島",
    reading: "しょうなんえのしま",
    prefecture: P.KANAGAWA,
  }),
  // #endregion 湘南モノレール
  // #region ▶伊豆箱根鉄道
  [STATION_IDS.izu_hakone.midorichou]: new Station({
    name: "緑町",
    reading: "みどりちょう",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.isaida]: new Station({
    name: "井細田",
    reading: "いさいだ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.gohyakurakan]: new Station({
    name: "五百羅漢",
    reading: "ごひゃくらかん",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.anabe]: new Station({
    name: "穴部",
    reading: "あなべ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.iidaoka]: new Station({
    name: "飯田岡",
    reading: "いいだおか",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.sagami_numata]: new Station({
    name: "相模沼田",
    reading: "さがみぬまた",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.iwahara]: new Station({
    name: "岩原",
    reading: "いわはら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.tsukahara]: new Station({
    name: "塚原",
    reading: "つかはら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.wadagahara]: new Station({
    name: "和田河原",
    reading: "わだがはら",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.fuji_film_mae]: new Station({
    name: "富士フイルム前",
    reading: "ふじふぃるむまえ",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  [STATION_IDS.izu_hakone.daiyuzan]: new Station({
    name: "大雄山",
    reading: "だいゆうざん",
    prefecture: P.KANAGAWA,
    lines: [LINE_IDS.izu_hakone.daiyuzan],
  }),
  // #endregion 伊豆箱根鉄道
  [STATION_IDS.takao_tozan.kiyotaki]: new Station({
    name: "清滝",
    reading: "きよたき",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.takao_tozan.takao_tozan_cable,
      new ExchangeInfo(LINE_IDS.keiou.takao, STATION_IDS.keiou.takao_yamaguchi),
    ],
  }),
  [STATION_IDS.takao_tozan.takaosan]: new Station({
    name: "高尾山",
    reading: "たかおさん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.takao_tozan.takao_tozan_cable],
  }),
  // #endregion ---神奈川---
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
    [LINE_IDS.chichibu.chichibu, LINE_IDS.toubu.isesaki],
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
    reading: "しいなまち",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.higashi_nagasaki]: new Station({
    name: "東長崎",
    reading: "ひがしながさき",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.ekoda]: new Station({
    name: "江古田",
    reading: "えこだ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.nerima]: new Station({
    name: "練馬",
    reading: "ねりま",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.seibu.ikebukuro,
      LINE_IDS.tokyo_subway.oedo,
      LINE_IDS.seibu.yurakucho,
      LINE_IDS.seibu.toshima,
    ],
  }),
  [STATION_IDS.seibu.syakujiikoen]: new Station({
    name: "石神井公園",
    reading: "しゃくじいこうえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.sakuradai]: new Station({
    name: "桜台",
    reading: "さくらだい",
    prefecture: P.TOKYO,
  }),
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
    reading: "むさしふじさわ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.inariyamakoen]: new Station({
    name: "稲荷山公園",
    reading: "いなりやまこうえん",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.irumashi]: new Station({
    name: "入間市",
    reading: "いるまし",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.bushi]: new Station({
    name: "仏子",
    reading: "ぶし",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.motokaji]: new Station({
    name: "元加治",
    reading: "もとかじ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.hanno]: new Station({
    name: "飯能",
    reading: "はんのう",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.seibu.ikebukuro, LINE_IDS.seibu.chichibu],
  }),
  [STATION_IDS.seibu.shimo_yamaguchi]: new Station({
    name: "下山口",
    reading: "しもやまぐち",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.seibukyujoumae]: new Station({
    name: "西武球場前",
    reading: "せいぶきゅうじょうまえ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.seibu.sayama, LINE_IDS.seibu.yamaguchi],
  }),
  [STATION_IDS.seibu.seibuen_yuenchi]: new Station({
    name: "西武園ゆうえんち",
    reading: "せいぶえんゆうえんち",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.seibuen]: new Station({
    name: "西武園",
    reading: "せいぶえん",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.shin_koganei]: new Station({
    name: "新小金井",
    reading: "しんこがねい",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.tama]: new Station({
    name: "多摩",
    reading: "たま",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.shiraitodai]: new Station({
    name: "白糸台",
    reading: "しらいとだい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.kyouteijoumae]: new Station({
    name: "競艇場前",
    reading: "きょうていじょうまえ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.koremasa]: new Station({
    name: "是政",
    reading: "これまさ",
    prefecture: P.TOKYO,
  }),

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
    reading: "いおぎ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.kami_igusa]: new StationInfo("上井草", [], "かみいぐさ"),
  [STATION_IDS.seibu.kami_syakujii]: new Station({
    name: "上石神井",
    reading: "かみしゃくじい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.musashiseki]: new Station({
    name: "武蔵関",
    reading: "むさしせき",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.higashi_fushimi]: new Station({
    name: "東伏見",
    reading: "ひがしふしみ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.kodaira]: new Station({
    name: "小平",
    reading: "こだいら",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.seibu.shinjuku, LINE_IDS.seibu.haijima],
  }),
  [STATION_IDS.seibu.higashi_murayama]: new Station({
    name: "東村山",
    reading: "ひがしむらやま",
    prefecture: P.TOKYO,
    lines: [
      LINE_IDS.seibu.seibuen,
      LINE_IDS.seibu.kokubunji,
      LINE_IDS.seibu.shinjuku,
    ],
  }),
  [STATION_IDS.seibu.seibu_yazawa]: new Station({
    name: "西武柳沢",
    reading: "せいぶやざわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.tanashi]: new Station({
    name: "田無",
    reading: "たなし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.hana_koganei]: new Station({
    name: "花小金井",
    reading: "はなこがねい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.kumegawa]: new Station({
    name: "久米川",
    reading: "くめがわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.kuko_koen]: new Station({
    name: "空港公園",
    reading: "くうこうこうえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.shin_tokorozawa]: new Station({
    name: "新所沢",
    reading: "しんところざわ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.iriso]: new Station({
    name: "入曾",
    reading: "いりそ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.sayamashi]: new Station({
    name: "狭山市",
    reading: "さやまし",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.shin_sayama]: new Station({
    name: "新狭山",
    reading: "しんさやま",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.minami_otsuka]: new Station({
    name: "南大塚",
    reading: "みなみおおつか",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.hon_kawagoe]: new Station({
    name: "本川越",
    reading: "ほんかわごえ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.koma]: new Station({
    name: "高麗",
    reading: "こま",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.musashi_yokote]: new Station({
    name: "武蔵横手",
    reading: "むさしよこて",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.higashi_agano]: new Station({
    name: "東吾野",
    reading: "ひがしあがの",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.agano]: new Station({
    name: "吾野",
    reading: "あがの",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.nishi_agano]: new Station({
    name: "西吾野",
    reading: "にしあがの",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.syoumaru]: new Station({
    name: "正丸",
    reading: "しょうまる",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.ashigakubo]: new Station({
    name: "芦ヶ久保",
    reading: "あしがくぼ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.yokose]: new Station({
    name: "横瀬",
    reading: "よこせ",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.seibu.chichibu,
      new Direct(LINE_IDS.chichibu.chichibu, STATION_IDS.chichibu.ohanabatake),
    ],
  }),
  [STATION_IDS.seibu.seibu_chichibu]: new Station({
    name: "西武秩父",
    reading: "せいぶちちぶ",
    prefecture: P.SAITAMA,
    lines: [
      LINE_IDS.seibu.chichibu,
      new Direct(LINE_IDS.chichibu.chichibu, STATION_IDS.chichibu.kagemori),
    ],
  }),
  [STATION_IDS.seibu.shin_sakuradai]: new Station({
    name: "新桜台",
    reading: "しんさくらだい",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.toshimaen]: new Station({
    name: "豊島園",
    reading: "としまえん",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.seibu.toshima, LINE_IDS.tokyo_subway.oedo],
  }),
  [STATION_IDS.seibu.hitotsubashi_gakuen]: new Station({
    name: "一橋学園",
    reading: "ひとつばしがくえん",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.oume_kaidou]: new Station({
    name: "青梅街道",
    reading: "おうめかいどう",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.yasaka]: new Station({
    name: "八坂",
    reading: "やさか",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.hagiyama]: new Station({
    name: "萩山",
    reading: "はぎやま",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.seibu.tamako, LINE_IDS.seibu.haijima],
  }),
  [STATION_IDS.seibu.musashi_yamato]: new Station({
    name: "武蔵大和",
    reading: "むさしやまと",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.tamako]: new Station({
    name: "多摩湖",
    reading: "たまこ",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.seibu.tamako, LINE_IDS.seibu.yamaguchi],
  }),
  [STATION_IDS.seibu.koigakubo]: new Station({
    name: "恋ヶ窪",
    reading: "こいがくぼ",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.takanodai]: new Station({
    name: "鷹の台",
    reading: "たかのだい",
    prefecture: P.SAITAMA,
  }),
  [STATION_IDS.seibu.ogawa]: new Station({
    name: "小川",
    reading: "おがわ",
    prefecture: P.SAITAMA,
    lines: [LINE_IDS.seibu.kokubunji, LINE_IDS.seibu.haijima],
  }),
  [STATION_IDS.seibu.higashi_yamatoshi]: new Station({
    name: "東大和市",
    reading: "ひがしやまとし",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.tamagawa_jousui]: new Station({
    name: "玉川上水",
    reading: "たまがわじょうすい",
    prefecture: P.TOKYO,
    lines: [LINE_IDS.seibu.haijima, LINE_IDS.tama_monorail.tama_monorail],
  }),
  [STATION_IDS.seibu.musashi_sunagawa]: new Station({
    name: "武蔵砂川",
    reading: "むさしすながわ",
    prefecture: P.TOKYO,
  }),
  [STATION_IDS.seibu.seibu_tachikawa]: new Station({
    name: "西武立川",
    reading: "せいぶたちかわ",
    prefecture: P.TOKYO,
  }),

  //   #endregion 西武鉄道
  //  #endregion 埼玉
  // #endregion 関東

  // #region 甲信越
  [STATION_IDS.fuji_sanroku.kawaguchiko]: new Station({
    name: "河口湖",
    reading: "かわぐちこ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.fujisan]: new Station({
    name: "富士山",
    reading: "ふじさん",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.gekkouji]: new Station({
    name: "月江寺",
    reading: "げっこうじ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.shimoyoshida]: new Station({
    name: "下吉田",
    reading: "しもよしだ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.yoshiike_onsenmae]: new Station({
    name: "葭池温泉前",
    reading: "よしいけおんせんまえ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.kotobuki]: new Station({
    name: "富士急ハイランド",
    reading: "ふじきゅうはいらんど",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.mitsutouge]: new Station({
    name: "三ツ峠",
    reading: "みつとうげ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.higashi_katsura]: new Station({
    name: "東桂",
    reading: "ひがしくら",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.kotobuki]: new Station({
    name: "寿",
    reading: "ことぶき",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.tohkaichiba]: new Station({
    name: "十日市場",
    reading: "とうかいちば",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.tsurubunkadaigakumae]: new Station({
    name: "鶴文科大学前",
    reading: "つるぶんかだいがくまえ",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.yamuramachi]: new Station({
    name: "谷村町",
    reading: "やむらまち",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.tsurushi]: new Station({
    name: "都留市",
    reading: "つるし",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.akasaka]: new Station({
    name: "赤坂",
    reading: "あかさか",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.kasei]: new Station({
    name: "禾生",
    reading: "かせい",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.kami_ohtsuki]: new Station({
    name: "上大月",
    reading: "かみおおつき",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.tanokura]: new Station({
    name: "田野倉",
    reading: "たのくら",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.fuji_sanroku.fujikyu_highland]: new Station({
    name: "富士急ハイランド",
    reading: "ふじきゅうはいらんど",
    prefecture: P.YAMANASHI,
    lines: [LINE_IDS.fuji_sanroku.fuji_kyukou],
  }),
  [STATION_IDS.matsumoto.nishi_matsumoto]: new Station({
    name: "西松本",
    reading: "にしまつもと",
    en: "nishi_matsumoto",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.nagisa]: new Station({
    name: "渚",
    reading: "なぎさ",
    en: "nagisa",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.shinano_arai]: new Station({
    name: "信濃新井",
    reading: "しなのあらい",
    en: "shinano_arai",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.ohniwa]: new Station({
    name: "大庭",
    reading: "おおにわ",
    en: "ohniwa",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.shimonii]: new Station({
    name: "下新井",
    reading: "しもにい",
    en: "shimonii",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.kitanii_matsumotodaigakumae]: new Station({
    name: "北新・井松本大学前",
    reading: "きたにいまつもとだいがくまえ",
    en: "kitanii_matsumotodaigakumae",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.niimura]: new Station({
    name: "新村",
    reading: "にいむら",
    en: "niimura",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.samizo]: new Station({
    name: "三ノ蔵",
    reading: "さみぞ",
    en: "samizo",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.moriguchi]: new Station({
    name: "森口",
    reading: "もりぐち",
    en: "moriguchi",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.shimojima]: new Station({
    name: "下島",
    reading: "しもじま",
    en: "shimojima",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.hata]: new Station({
    name: "波田",
    reading: "はた",
    en: "hata",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.endou]: new Station({
    name: "遠藤",
    reading: "えんどう",
    en: "endou",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  [STATION_IDS.matsumoto.shinshimashima]: new Station({
    name: "新島島",
    reading: "しんしましま",
    en: "shinshimashima",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.matsumoto.kamikouchi],
  }),
  // #endregion 甲信越

  // #region 中部
  // #endregion 中部
};
