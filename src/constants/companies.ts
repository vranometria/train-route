export interface Company {
  id: string;
  name: string;
  yomi: string;
  keywords: string[];
};

export const COMPANIES: { [key: string]: Company } = {
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
}
