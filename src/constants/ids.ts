
/** 路線ID */
export const LINE_IDS = {
  /** JR東日本 */
  jr_east: {
    /** 京浜東北線 */
    keihin_touhoku: 'jr-keihintouhoku',
    /** 宇都宮線 */
    utunomiya: 'jr-utunomiya',
    /** 高崎線 */
    takasaki: 'jr-takasaki',
    /** 湘南新宿ライン */
    shonan_shinjuku: 'jr-sho-nan_shinjuku',
    // "埼京線",
    saikyou: 'jr-saikyou',
    // "川越線",
    kawagoe: 'jr-kawagoe',
    /** 山手線 */
    yamanote: 'jr-yamanote',
    /** 常盤線 */
    tokiwa: 'jr-tokiwa',
    /** 中央線 */
    chuo: 'jr-chuo',
    /** 東海道本線 */
    tokaido: 'jr-tokaido',
    /** 横浜線 */
    yokohama: 'jr-yokohama',
    /** 根岸線 */
    negishi: 'jr-negishi',
    /**横須賀線 */
    yokosuka: 'jr-yokosuka',
    /** 南武線 */
    nanbu: 'jr-nanbu',

    shinkansen: {
      // 東海道新幹線
      tokaido: 'jr-tokaido-shinkansen',
      // 東北新幹線
      tohoku: 'jr-tohoku-shinkansen',
      // 新幹線はやぶさ
      hayabusa: 'jr-hayabusa',
      // 山形新幹線
      yamagata: 'jr-yamagata-shinkansen',
      // 秋田新幹線
      akita: 'jr-akita-shinkansen',
      // 上越新幹線
      jouetsu: 'jr-shouetsu-shinkansen',
      // 北陸新幹線
      hokuriku: 'jr-hokuriku-shinkansen',
    },
  },
  // 京急
  keikyu: {
    honsen: "keikyu-honsen",
    haneda_kuko: "keikyu-haneda-kuko",
  },
  toubu: {
    // "東武アーバンパークライン",
    urban_park_line: 'toubu-urban-park-line',
  },
  saitama_shintoshi: {
    // ニューシャトル
    new_shuttle: 'saitama_shintoshi_new_shuttle',
  },
  /** 東京メトロ */
  tokyo_metro: {
    /** 丸の内線 */
    marunouchi: 'tokyo-metro-marunouchi',
    /** 日比谷線 */
    hibiya: 'tokyo-metro-hibiya',
    /** 銀座線 */
    ginza: 'tokyo-metro-ginza',
    /** 半蔵門線 */
    hanzoumon: 'tokyo-metro-hanzoumon',
    /** 副都心線 */
    hukutoshin: 'tokyo-metro-hukutoshin',
  },
  /** 東京都交通局 */
  tokyo_koutsu_kyoku: {
    /** 大江戸線 */
    oedo: 'toeiooedo',
    /** 新宿線 */
    shinjuku: 'toeishinjuku',
  },
  /** 相模鉄道 */
  sagami: {
    honsen: 'sagami-honsen',
    izumino: 'sagami-izumino',
  },
  odakyu: {
    odawara: 'odakyu-odawara',
    enoshima: 'odakyu-enoshima',
  },
  // 江ノ島電鉄
  enoshima: {
    enoshima: 'enoshima-enoshimadentetsu',
  },
  // 湘南モノレール
  shonam_monorail: {
    shonan_monorail: 'shonan-monorail',
  },
  /** 京王電鉄 */
  keiou: {
    keiou: 'keiou-keiou',
    keioushinsen: 'keiou-keioushinsen',
    /** 井の頭線 */
    inogashira: 'keiou-inogashira',
  },
  /** 東急電鉄 */
  tokyu: {
    denentoshi: 'tokyu-denentoshi',
    toyoko: 'tokyu-toyoko',
  },
}

/** 駅ID */
export const STATION_IDS = {
  /** JR東日本 */
  jr_east: {
    omiya: 'o-miya',
    saitama_shintoshin: 'saitama-shintoshin',
    yono: 'yono',
    kitaurawa: 'kitaurawa',
    urawa: 'urawa',
    minami_urawa: 'minami-urawa',
    warabi: 'warabi',
    nishikawaguchi: 'nishikawaguchi',
    kawaguti: 'kawaguchi',
    akahane: 'akahane',
    higashijujo: 'higashi-jujo',
    ouji: 'ouji',
    kaminakazato: 'kaminakazato',
    tabata: 'tabata',
    nishinippori: 'nishinippori',
    nippori: 'nippori',
    uguisudani: 'uguisudani',
    ueno: 'ueno',
    okachimachi: 'okachimachi',
    akihabara: 'akihabara',
    kanda: 'kanda',
    tokyo: 'tokyo',
    yurakucho: 'yurakucho',
    shinjuku: 'shinjuku',
    hamamatsucho: 'hamamatsucho',
    tamachi: 'tamachi',
    takanawa_gateway: 'takanawa-gateway',
    shinagawa: 'shinagawa',
    oimachi: 'oimachi',
    omori: 'omori',
    kamata: 'kamata',
    kawasaki: 'kawasaki',
    tsurumi: 'tsurumi',
    shinkoyasu: 'shinkoyasu',
    higashikanagawa: 'higashi-kanagawa',
    yokohama: 'yokohama',
    shinbashi: 'shinbashi',
    komagome: 'komagome',
    sugamo: 'sugamo',
    otsuka: 'otsuka',
    ikebukuro: 'ikebukuro',
    mejiro: 'mejiro',
    takadanobaba: 'takadanobaba',
    shinokubo: 'shinokubo',
    yoyogi: 'yoyogi',
    harajuku: 'harajuku',
    shibuya: 'shibuya',
    ebisu: 'ebisu',
    meguro: 'meguro',
    gotanda: 'gotanda',
    osaki: 'osaki',
    hachiouji: 'hachiouji',
    katakura: 'katakura',
    hachiouji_minamino: 'hachiouji-minamino',
    aihara: 'aihara',
    hashimoto: 'hashimoto',
    sagamihara: 'sagamihara',
    huchinobe: 'huchinobe',
    kobuchi: 'kobuchi',
    machida: 'machida',
    naruse: 'naruse',
    nagatsuta: 'nagatsuta',
    tokaichiba: 'tokaichiba',
    nakayama: 'nakayama',
    kamoi: 'kamoi',
    kodukue: 'kodukue',
    shinyokohama: 'shinyokohama',
    kikuna: 'kikuna',
    oguchi: 'oguchi',
    higashi_kanagawa: 'higashi-kanagawa',
    sakuragicho: 'sakuragicho',
    kannai: 'kannai',
    ishikawacho: 'ishikawacho',
    yamate: 'yamate',
    negishi: 'negishi',
    isogo: 'isogo',
    shin_sugita: 'shin-sugita',
    youkoudai: 'youkoudai',
    kounandai: 'kounandai',
    hongoudai: 'hongoudai',
    ofuna: 'ofuna',
    totsuka: 'totsuka',
    hujisawa: 'hujisawa',
    tsujido: 'tsujido',
    chigasaki: 'chigasaki',
    hiratsuka: 'hiratsuka',
    oiso: 'oiso',
    ninomiya: 'ninomiya',
    kozu: 'kozu',
    kamonomiya: 'kamonomiya',
    odawara: 'odawara',
    hayakawa: "hayakawa",
    nebukawa: "nebukawa",
    manazuru: "manazuru",
    yugawara: 'yugawara',
    atami: 'atami',
  },
  /** 相模鉄道 */
  sagami: {
    ebina: "ebina",
    kashiwadai: "kashiwadai",
    sagamino: "sagamino",
    sagamiotsuka: "sagamiotsuka",
    futamatagawa: "futamatagawa",
    tsuruma: "tsuruma",
    seya: "seya",
    mitsukyo: "mitsukyo",
    kibougaoka: "kibougaoka",
    tsurugamine: "tsurugamine",
    nishiya: "nishiya",
    kamihoshikawa: "kamihoshikawa",
    wadacho: "wadacho",
    hoshikawa: "hoshikawa",
    tennocho: "tennocho",
    nishiyokohama: "nishiyokohama",
    hiranumabashi: "hiranumabashi",
  },
  odakyu: {
    sagamiono: "sagamiono",
    higashirinkan: "higashirinkan",
    chuorinkan: "chuorinkan",
    minamirinkan: "minamirinkan",
    tsuruma: "tsuruma",
    yamato: "yamato",
    sakuragaoka: "sakuragaoka",
    kouzashibuya: "kouzashibuya",
    chogo: "chogo",
    shonandai: "shonandai",
    mutsuainichidaimae: "mutsuainichidaimae",
    zengyo: "zengyo",
    fujisawahonmachi: "fujisawahonmachi",
    kugenuma: "kugenuma",
    honkugenuma: "honkugenuma",
    kugenumakaigan: "kugenumakaigan",
    kataseenoshima: "kataseenoshima",
  }
};
