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
  shin_keisei: {
    id: "shin_keisei",
    name: '新京成電鉄',
    yomi: "しんけいせいでんてつ",
    keywords: ["shinkeisei"]
  },
}
