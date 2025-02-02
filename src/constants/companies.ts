export interface Company {
  id: string;
  name: string;
  yomi: string;
  keywords: string[];
};

export const COMPANIES: { [key: string]: Company } = {
  jr_east: {
    id: "jr_east",
    name: 'JR東日本',
    yomi: "じぇいあーるひがしにほん",
    keywords: ["jr", "jr east", "jreast", "japan railway east"]
  },
  keikyu: {
    id: "keikyu",
    name: '京浜急行電鉄',
    yomi: "けいひんきゅうこうでんてつ",
    keywords: ["京急", "けいきゅう", "keikyu"]
  },
  tokyu: {
    id: "tokyu",
    name: '東急電鉄',
    yomi: "とうきゅうでんてつ",
    keywords: ["tokyu"]
  },
  seibu: {
    id: "seibu",
    name: '西武鉄道',
    yomi: "せいぶてつどう",
    keywords: ["seibu"]
  },
  toubu: {
    id: "toubu",
    name: '東武鉄道',
    yomi: "とうぶてつどう",
    keywords: ["toubu"]
  },
  keiou: {
    id: "keiou",
    name: '京王電鉄',
    yomi: "けいおうでんてつ",
    keywords: ["keiou"]
  },
  tokyo_koutsukyoku: {
    id: "tokyo_koutsukyoku",
    name: '東京都交通局',
    yomi: "とうきょうとこうつうきょく",
    keywords: ["都営地下鉄", "とえいちかてつ", "toeitikatetsu", "toeichikatetsu", "toeichikatesu", "とうえい", "toukyouto", "koutsu", "kotu", "Tokyo Metropolitan Bureau of Transportation"]
  },
  tokyo_metro: {
    id: "tokyo_metro",
    name: '東京メトロ',
    yomi: "とうきょうめとろ",
    keywords: ["tokyo metro", "toukyou"]
  },
  tokyo_monorail: {
    id: "tokyo_monorail",
    name: '東京モノレール',
    yomi: "とうきょうものれーる",
    keywords: ["tokyo monorail"]
  },
  toukyo_rinkai_kousoku: {
    id: "toukyo_rinkai_kousoku",
    name: '東京臨海高速鉄道',
    yomi: "とうきょうりんかいこうそくてつどう",
    keywords: ["toukyourinkaikousokutetsudou"]
  },
  yurikamome: {
    id: "yurikamome",
    name: '新交通ゆりかもめ',
    yomi: "しんこうつうゆりかもめ",
    keywords: ["yurikamome"]
  },
  shutoken_shintoshi: {
    id: "shutoken_shintoshi",
    name: '首都圏新都市鉄道',
    yomi: "しゅとけんしんとしてつどう",
    keywords: ["shintoshi", "shutokenshintoshi", "つくばエクスプレス"]
  },
  yokohama_kousoku: {
    id: "yokohama_kousoku",
    name: '横浜高速鉄道',
    yomi: "よこはまこうそくてつどう",
    keywords: ["よこはまこうそくてつどう", "よこはまこうそく"]
  },
  yokohama_subway: {
    id: "yokohama_subway",
    name: '横浜市交通局',
    yomi: "よこはましこうつうきょく",
    keywords: ["横浜市営地下鉄", "よこはましえいちかてつ"]
  },
  enoden: {
    id: "enoden",
    name: '江ノ島電鉄',
    yomi: "えのしまでんてつ",
    keywords: ["enoshima", "enoden"]
  },
  syounan_monorail: {
    id: "syounan_monorail",
    name: '湘南モノレール',
    yomi: "しょうなんものれーる",
    keywords: ["syounan monorail", "湘南モノレール"]
  },
  sotetsu: {
    id: "sotetsu",
    name: '相模鉄道',
    yomi: "さがみてつどう",
    keywords: ["sotetsu", "sagamitetsudou"]
  },
  odakyu: {
    id: "odakyu",
    name: '小田急電鉄',
    yomi: "おだきゅうでんてつ",
    keywords: ["odakyu"]
  },
  odakyu_hakone: {
    id: "odakyu_hakone",
    name: '小田急箱根',
    yomi: "おだきゅうはこね",
    keywords: ["odakyu hakone", "odakyu hakone romancecar"]
  },
  keisei: {
    id: "keisei",
    name: '京成電鉄',
    yomi: "けいせいでんてつ",
    keywords: ["keiseidentetsu"]
  },
  shin_keisei: {
    id: "shin_keisei",
    name: '新京成電鉄',
    yomi: "しんけいせいでんてつ",
    keywords: ["shinkeisei"]
  },
  chiba_urban_monorail: {
    id: "chiba_urban_monorail",
    name: '千葉都市モノレール',
    yomi: "ちばとしみのれーる",
    keywords: ["chiba urban monorail"]
  },
  choushi_dentetsu: {
    id: "choushi_dentetsu",
    name: '銚子電気鉄道',
    yomi: "ちょうしでんきてつどう",
    keywords: ["choushi dentetsu"]
  },
  shibayama: {
    id: "shibayama",
    name: '芝山鉄道',
    yomi: "しばやまてつどう",
    keywords: ["shibayama"]
  },
  hokusou: {
    id: "hokusou",
    name: '北総鉄道',
    yomi: "ほくそうてつどう",
    keywords: ["hokusou"]
  },
  maihama_resort: {
    id: "maihama_resort",
    name: '舞浜リゾート',
    yomi: "まいはまりぞーと",
    keywords: ["maihama resort"]
  },
  kominato: {
    id: "kominato",
    name: '小湊鐡道',
    yomi: "ようろうてつどう",
    keywords: ["kominato"]
  },
  touyou_kousoku: {
    id: "touyou_kousoku",
    name: '東葉高速鉄道',
    yomi: "とうようこうそくてつどう",
    keywords: ["touyoukousokutetsudou"]
  },
  saitama_shintoshi_koutsu: {
    id: "saitama_shintoshi_koutsu",
    name: '埼玉新都市交通',
    yomi: "さいたましんとしこうつう",
    keywords: ["さいたま新都市交通"]
  },
  chichibu: {
    id: "chichibu",
    name: '秩父鉄道',
    yomi: "ちちぶてつどう",
    keywords: ["chichibu"]
  },
  kantou: {
    id: "kantou",
    name: '関東鉄道',
    yomi: "かんとうてつどう",
    keywords: ["kantou"]
  },
  izu_hakone: {
    id: "izu_hakone",
    name: '伊豆箱根鉄道',
    yomi: "いずはこねてつどう",
    keywords: ["izu hakone"]
  },
  tama_monorail: {
    id: "tama_monorail",
    name: '多摩モノレール',
    yomi: "たまものれーる",
    keywords: ["tama monorail"]
  },
  takao_tozan: {
    id: "takao_tozan",
    name: '高尾登山電鉄',
    yomi: "たかおとざんでんてつ",
    keywords: ["takao tozan"]
  }
}
