/** 路線ID */
export const LINE_IDS = {
  /** JR・相鉄直通線*/
  jr_sotetsu_chokutsu: "jr-sotetsu-chokutsu",

  // #region 千葉
  /** 千葉都市モノレール */
  chiba_toshi_monorail: {
    ichigou: "chiba-toshi-monorail-ichigou",
    nigou: "chiba-toshi-monorail-nigou",
  },
  /** 小港鉄道 */
  kominato: {
    kominato: "kominato-kominato",
  },
  /** 銚子電気鉄道 */
  choushi_denki: {
    choushi_denki: "choushi-denki-choushi-denki",
  },
  /** 舞浜リゾート */
  maihama_resort: {
    disney_resort: "maihama-resort-disney-resort",
  },
  /** 京成電鉄 */
  keisei: {
    honsen: "keisei-honsen",
    chiba: "keisei-chiba",
    narita_kuko: "keisei-narita-kuko",
    sky_liner: "keisei-sky-liner",
    kanamachi: "keisei-kanamachi",
    oshiage: "keisei-oshiage",
  },
  /** 新京成電鉄 */
  shin_keisei: {
    shin_keisei: "shin-keisei-shin-keisei",
  },
  // #endregion

  // #region 神奈川
  /** 京急 路線 */
  keikyu: {
    /** 本線 */
    honsen: "keikyu-honsen",
    /** 羽田空港線 */
    haneda_kuko: "keikyu-haneda-kuko",
    /** 逗子線 */
    zushi: "keikyu-zushi",
    /** 久里浜線 */
    kurihama: "keikyu-kurihama",
    /** 大師線 */
    daishi: "keikyu-daishi",
    /** シーサイドライン */
    sea_side: "keikyu-sea-side",
  },
  /** 相模鉄道 */
  sagami: {
    /** 本線 */
    honsen: "sagami-honsen",
    /** 相鉄いずみ野線 */
    izumino: "sagami-izumino",
    /** 相鉄新横浜線 */
    sotetsushin_yokohama: "sagami-sotetsushin_yokohama",
  },
  /** 小田急 路線*/
  odakyu: {
    /** 小田原線 */
    odawara: "odakyu-odawara",
    /** 江ノ島線 */
    enoshima: "odakyu-enoshima",
    /** 多摩線 */
    tama: "odakyu-tama",
    /** 箱根登山線 */
    hakonetozan: "odakyu-hakonetozan",
  },
  // #endregion

  // #region 東京
  /** 東京都営地下鉄 路線 */
  tokyo_subway: {
    /** 浅草線 */
    asakusa: "toei-asakusa",
    /** 三田線 */
    mita: "toei-mita",
    /** 新宿線 */
    shinjuku: "toei-shinjuku",
    /** 大江戸線 */
    oedo: "toei-ooedo",
    /** 日暮里・舎人ライナー */
    nippori_toneri_liner: "toei-nippori-toneri-liner",
    /** さくらトラム */
    sakura_tram: "toei-sakura-tram",
  },
  /** 東京メトロ 路線 */
  tokyo_metro: {
    /** 銀座線 */
    ginza: "tokyo-metro-ginza",
    /** 丸の内線 */
    marunouchi: "tokyo-metro-marunouchi",
    /** 日比谷線 */
    hibiya: "tokyo-metro-hibiya",
    /** 東西線 */
    touzai: "tokyo-metro-touzai",
    /** 千代田線 */
    chiyoda: "tokyo-metro-chiyoda",
    /** 有楽町線 */
    yurakucho: "tokyo-metro-yurakucho",
    /** 半蔵門線 */
    hanzoumon: "tokyo-metro-hanzoumon",
    /** 南北線 */
    nanboku: "tokyo-metro-nanboku",
    /** 副都心線 */
    fukutoshin: "tokyo-metro-fukutoshin",
  },
  /** 東京モノレール */
  tokyo_monorail: {
    haneda_kuko: "tokyo-monorail",
  },
  // #endregion

  /** JR東日本 */
  jr_east: {
    // "埼京線(JA)",
    saikyou: "jr-saikyou",
    /** 川越線(JA) */
    kawagoe: "jr-kawagoe",
    /** 中央・総武緩行線(中央・総武線各停)(JB) */
    chuo_soubu_kankou: "jr-chuo_soubu_kankou",
    /** 中央本線(JC) */
    chuou_honsen: "jr-chuou_honsen",
    /** 五日市線(JC) */
    itsukaichi: "jr-itsukaichi",
    /** 京葉線(JE) */
    keiyou: "jr-keiyou",
    /** 相模線(JG) */
    sagami: "jr-sagami",
    /** 横浜線(JH) */
    yokohama: "jr-yokohama",
    /** 鶴見線(JI) */
    tsurumi: "jr-tsurumi",
    /** 常盤線(JJ) */
    jouban: "jr-jouban",
    /** 京浜東北線(JK) */
    keihin_touhoku: "jr-keihintouhoku",
    /** 根岸線(JK) */
    negishi: "jr-negishi",
    /** 南武線(JN) */
    nanbu: "jr-nanbu",
    /** 武蔵野線(JM) */
    musashino: "jr-musashino",
    /** 南武支線(JN) */
    nanbu_shisen: "jr-nanbu-shisen",
    /** 横須賀線(JO) */
    yokosuka: "jr-yokosuka",
    /** 総武線快速(JO) */
    sobu_kaisoku: "jr-sobu-kaisoku",
    /** 総武本線(JO) */
    soubu_honsen: "jr-sobu-honsen",
    /** 湘南新宿ライン(JS) */
    shonan_shinjuku: "jr-sho-nan_shinjuku",
    /** 東海道本線(JT) */
    tokaido: "jr-tokaido",
    /** 宇都宮線(JU) */
    utunomiya: "jr-utunomiya",
    /** 高崎線(JU) */
    takasaki: "jr-takasaki",
    /** 山手線(JY) */
    yamanote: "jr-yamanote",
    /** 中央本線 */
    chuo_honsen: "jr-chuo-honsen",
    /** 両毛線 */
    ryoumou: "jr-ryoumou",

    /** 磐越東線 */
    banetsutou: "jr-banetsutou",

    // #region 千葉
    /** 内房線 */
    uchibou: "jr-uchibou",
    /** 外房線 */
    sotobou: "jr-sotobou",
    /** 東金線 */
    tougane: "jr-tougane",
    /** 久留里線 */
    kururi: "jr-kururi",
    /** 成田線 */
    narita1: "jr-narita1",
    narita2: "jr-narita2",
    narita3: "jr-narita3",
    /** 鹿島線 */
    kashima: "jr-kashima",
    // #endregion

    /** 日光線 */
    nikkou: "jr-nikkou",
    /** 烏山線 */
    karasuyama: "jr-karasuyama",
    /** 水戸線 */
    mito: "jr-mito",
    /** 青梅線 */
    oume: "jr-oume",
    /** 八高線 */
    hachiko: "jr-hachiko",
    /** 上越線 */
    jouetsu: "jr-jouetsu",
    /** 吾妻線 */
    agatsuma: "jr-agatsuma",

    /** 信越本線 */
    shinetsu_honsen: "jr-shinetsu-honsen",
    /** 小海線 */
    koumi: "jr-koumi",
    /** 弥彦線 */
    yahiko: "jr-yahiko",
    /** 磐越西線 */
    banetsusai: "jr-banetsusai",
    /** 白新線 */
    hakushin: "jr-hakushin",
    /** 越後線 */
    echigo: "jr-echigo",
    /** 篠ノ井線 */
    shinonoi: "jr-shinonoi",
    /** 飯山線 */
    iiyama: "jr-iiyama",

    /** 東北本線 */
    touhoku_honsen: "jr-touhoku-honsen",
    /** 利府線 */
    rifu: "jr-rifu",
    /** 気仙沼線 */
    kesennuma: "jr-kesennuma",
    /** 石巻線 */
    ishimaki: "jr-ishimaki",
    /**  水郡線 */
    suigun: "jr-suigun",
    /** 山形線 */
    yamagata: "jr-yamagata",
    /** 千石東北ライン */
    sengoku_touhoku_line: "jr-sengoku-touhoku-line",
    /** 奥羽本線 */
    ouu_honsen: "jr-ouu-honsen",
    /** 仙山線 */
    senzan: "jr-senzan",
    /** 仙石線 */
    sengoku: "jr-sengoku",
    /** 陸羽東線 */
    rikuutou: "jr-rikuutou",
    /** 陸羽西線 */
    rikuusei: "jr-rikuusei",
    /** 左沢線 */
    aterazawa: "jr-aterazawa",
    /** 大船渡線 */
    ofunato: "jr-ofunato",
    /** 北上線 */
    kitakami: "jr-kitakami",
    /** 釜石線 */
    kamaishi: "jr-kamaishi",
    /** 山田線 */
    yamada: "jr-yamada",
    /** 田沢湖線 */
    tazawako: "jr-tazawako",
    /** 八戸線 */
    hachinohe: "jr-hachinohe",
    /** 米坂線 */
    yonesaka: "jr-yonesaka",
    /** 羽越本線 */
    uetsu_honsen: "jr-uetsu-honsen",
    /** 男鹿線 */
    oga: "jr-oga",

    shinkansen: {
      // 東海道新幹線
      tokaido: "jr-tokaido-shinkansen",
      // 東北新幹線
      tohoku: "jr-tohoku-shinkansen",
      // 山形新幹線
      yamagata: "jr-yamagata-shinkansen",
      // 秋田新幹線
      akita: "jr-akita-shinkansen",
      // 上越新幹線
      jouetsu: "jr-shouetsu-shinkansen",
      // 北陸新幹線
      hokuriku: "jr-hokuriku-shinkansen",
      // 北海道新幹線
      hokkaido: "jr-hokkaido-shinkansen",
    },
  },
  /** 東武鉄道 路線 */
  toubu: {
    // "東武アーバンパークライン",
    urban_park_line: "toubu-urban-park-line",
    /** 亀戸線 */
    kameido: "toubu-kameido",
    /** 東上線 */
    toujou: "toubu-toujou",
    /** 日光線 */
    nikko: "toubu-nikko",
    /** 東武線 */
    toubu: "toubu-toubu",
    /** 伊勢崎線 */
    isezaki: "toubu-isezaki",
    /** 東武生越線 */
    ogose: "toubu-ogose",
    /** 東葉高速線 */
    touyou_kousoku: "toubu-touyou-kousoku",
    /** 大師線 */
    daishi: "toubu-daishi",
    /** 日光線 */
    nikkou: "toubu-nikkou",
    /** 佐野線 */
    sano: "toubu-sano",
    /** 小泉線 */
    koizumi: "toubu-koizumi",
    /** 桐生線 */
    kiryu: "toubu-kiryu",
  },
  saitama_shintoshi_koutsu: {
    // ニューシャトル
    new_shuttle: "saitama_shintoshi_new_shuttle",
  },
  /** 首都圏新都市鉄道 */
  shutoken_shintoshi: {
    /** つくばエクスプレス */
    tsukuba_express: "shutoken-shintoshi-tsukuba-express",
  },

  /** 小田急箱根 */
  odakyu_hakone: {
    kousaku: "hakone-tozan-cable-car",
    hakone_rope_way: "hakone-rope-way",
  },
  // 江ノ島電鉄
  enoshima: {
    enoshima: "enoshima-enoshimadentetsu",
  },
  // 湘南モノレール
  shonam_monorail: {
    shonan_monorail: "shonan-monorail",
  },
  /** 京王電鉄 */
  keiou: {
    /** 京王線 */
    keiou: "keiou-keiou",
    /** 京王新線 */
    keioushinsen: "keiou-keioushinsen",
    /** 井の頭線 */
    inokashira: "keiou-inokashira",
    /** 高尾線 */
    takao: "keiou-takao",
    /** 相模線 */
    sagami: "keiou-sagami",
    /** 京王競馬場 */
    keibajo: "keiou-keibajo",
    /** 京王動物園 */
    dobutsuen: "keiou-dobutsuen",
  },
  /**流鉄 */
  ryutetsu: {
    ryutetsu_ryuzan: "ryutetsu-ryutetsu",
  },
  /** 鹿島臨海鉄道 */
  kashiwa_rinkai: {
    daikashima: "kashiwa-rinkai-daikashima",
  },
  /** ひたちなか海浜鉄道 */
  hitachinaka_kaihin: {
    minato: "hitachinaka-kaihin-minato",
  },
  /** 東急電鉄 */
  toukyu: {
    denentoshi: "tokyu-denentoshi",
    /** 東横線 */
    touyoko: "tokyu-toyoko",
    /** 池上線 */
    ikegami: "tokyu-ikegami",
    /** 新横浜線 */
    shin_yokohama: "tokyu-shin_yokohama",
    /** 多摩川線 */
    tamagawa: "tokyu-tamagawa",
    /** 目黒線 */
    meguro: "tokyu-meguro",
    /** 大井町線 */
    oimachi: "tokyu-oimachi",
    /** こどもの国線 */
    kodomonokuni: "keikyu-kodomonokuni",
    /** 世田谷線 */
    setagaya: "tokyu-setagaya",
  },
  /** 横浜市営地下鉄 */
  yokohama_subway: {
    blue_line: "yokohama-subway-blue-line",
    green_line: "yokohama-subway-green-line",
  },
  /** 横浜高速鉄道 */
  yokohama_kousoku: {
    minato_mirai: "yokohama-kousoku-minato-mirai",
  },
  /** 東京臨海高速鉄道*/
  toukyo_rinkai_kousoku: {
    /** りんかい線 */
    rinkai: "toukyo-rinkai-kousoku-rinkai",
  },
  /** 西武鉄道 路線 */
  seibu: {
    tamagawa: "seibu-tamagawa",
    tamako: "seibu-tamako",
    kokubunji: "seibu-kokubunji",
    ikebukuro: "seibu-ikebukuro",
    seibu_yurakucho: "seibu-seibu-yurakucho",
    toyoshima: "seibu-toyoshima",
    seibu_sayama: "seibu-seibu-sayama",
    seibu_chichibu: "seibu-seibu-chichibu",
    seibu_toshimaen: "seibu-seibu-toshimaen",
    shinjuku: "seibu-shinjuku",
    seibuen: "seibu-seibuen",
    haijima: "seibu-haijima",
  },
  /** 東葉高速鉄道 */
  toyo_kousoku: {
    toyo_kousoku: "toyo-kousoku-toyo-kousoku",
  },
  /** 多摩モノレール */
  tama_monorail: {
    tama_monorail: "tama-monorail",
  },

  /** 北総電鉄　路線 */
  hokusou: {
    hokusou: "hokusou-hokusou",
  },
  // ゆりかもめ
  yurikamome: {
    yurikamome: "yurikamome",
  },
  /** 北越急行 */
  hokuetsu_kyuko: {
    hokuhoku: "hokuhoku",
  },
  /** 秩父鉄道 */
  chichibu: {
    chichibu: "chichibu-chichibu",
  },
  /** 上信電鉄 */
  joushin: {
    joushin: "joushin-joushin",
  },
  /** 伊豆箱根鉄道 */
  izuhakone: {
    daiyuzan: "izuhakone-daiyuzan",
    sunzu: "izuhakone-sunzu",
  },
  /** 関東鉄道 */
  kanto: {
    joso: "kanto-joso",
  },
  /** 埼玉高速鉄道 */
  saitama_kosoku: {
    saitama_stadium: "saitama-stadium",
  },
  /** わたらせ渓谷鉄道 */
  watarase_keikoku: {
    watarase_keikoku: "watarase-keikoku",
  },
  /** 関東鉄道 */
  kantou: {
    jousou: "kantou-jousou",
    ryugasaki: "moka-ryugasaki",
  },
  /** 真岡鉄道 */
  moka: {
    moka: "moka-moka",
  },
  /** いずみ鉄道 */
  izumi: {
    izumi: "izumi-izumi",
  },
  /** JR東海 */
  jr_tokai: {
    tenryuhamanako: "jr-tokai-tenryuhamanako",
    ida: "jr-tokai-ida",
    chuohonsen: "jr-tokai-chuohonsen",
    aonami: "jr-tokai-aonami",
    hokurikuhonsen: "jr-tokai-hokurikuhonsen",
  },
  /** JR西日本線 */
  jr_west: {
    kansai_honsen: "jr-west-kansai-honsen",
    saninhonsen: "jr-west-saninhonsen",
    nara: "jr-west-nara",
    osaka_higashi: "jr-west-osaka-higashi",
    oito: "jr-west-oito",
    takayama_honsen: "jr-west-takayama-honsen",
    johana: "jr-west-johana",
    nanao: "jr-west-nanao",
    kuzuryu: "jr-west-kuzuryu",
    kosei: "jr-west-kosei",
    kohama: "jr-west-kohama",
    hokuriku_honsen: "jr-west-hokuriku-honsen",

    shinkansen: {
      sanyo: "jr-west-sanyo-shinkansen",
    },
  },

  /** 名古屋鉄道 */
  nagoya: {
    nagoyahonsen: "nahoya-nagoyahonsen",
  },
  /** 名古屋市営交通 */
  nagoya_shiei_subway: {
    sakuradori: "nagoya-shiei-subway-sakuradori",
    higashiyama: "nagoya-shiei-subway-higashiyama",
  },
  /** 近江鉄道 */
  oumi: {
    honsen: "omi-honsen",
  },
  /** 京都市営地下鉄 */
  kyoto_shiei_subway: {
    karasuma: "kyoto-shiei-subway-karasuma",
  },
  /** 近畿日本鉄道 */
  kinki_nihon: {
    kyoto: "kinki-nihon-kyoto",
  },
  /** OsakaMetro */
  osaka_metro: {
    midosuji: "osaka-metro-midosuji",
  },

  /** しなの鉄道 */
  shinano: {
    shinano: "shinano-shinano",
    kita_shinano: "shinano-kita-shinano",
  },
  /** 上田電鉄 */
  ueda: {
    bessho: "ueda-bessho",
  },
  /** 長野電鉄 */
  nagano: {
    nagano: "nagano-nagano",
  },
  /** えちごトキめき鉄道 */
  echigo_tokimeki: {
    myoko_haneuma: "echigo-tokimeki-myoko-haneuma",
    nihonkai_hisui: "echigo-tokimeki-nihonkai-hisui",
  },
  /** あいの風とやま鉄道 */
  ainokaze_toyama: {
    ainokaze_toyama_tetsudo: "ainokaze-toyama-ainokaze-toyama_tetsudo",
  },
  /** 富山地方鉄道(富山地鉄) */
  toyama_chiho: {
    /** 本線 */
    honsen: "toyama-chitetsu-honsen",
    fujikoshi_takigami: "toyama-chiho-fujikoshi-takigami",
    toyama_kido: "toyama-chiho-toyama-kido",
    shinai_kanjo: "toyama-chiho-shinai-kanjo",
    toyamako: "toyama-chiho-toyamako",
  },
  /** 北陸鉄道 */
  hokuriku: {
    asanogawa: "hokuriku-asanogawa",
  },
  /** IRいしかわ鉄道 */
  ir_ishikawa: {
    ir_ishikawa: "ir-ishikawa-ir_ishikawa",
  },
  /** はぴラインふくい */
  hapi_line_fukui: {
    hapi_line_fukui: "hapi-line-fukui-hapi_line_fukui",
  },
  /** えちぜん鉄道 */
  echizen: {
    katsuyama_eiheiji: "echizen-katsuyama-eiheiji",
    mikuni_awara: "echizen-mikuni-awara",
  },
  /** 福井鉄道 */
  fukui: {
    fukui_tetsudo: "fukui-fukui_tetsudo",
    fukubu: "fukui-fukubu",
  },

  /** 阿武隈急行 */
  abukuma_kyuko: {
    abukuma_kyuko: "abukuma-kyuko",
  },
  /** 福島交通 */
  fukushima_koutsu: {
    iizaka: "fukushima-koutsu-iizaka",
  },
  /** 仙台空港鉄道 */
  sendai_kuko: {
    access: "sendai-kuko-access",
  },
  /** 仙台市地下鉄 */
  sendai_subway: {
    nanboku: "sendai-shiei-subway-nanboku",
    touzai: "sendai-shiei-subway-touzai",
  },
  /** IGRいわて銀河鉄道 */
  igr_iwate_ginga: {
    igr_iwate_ginga_tetudo: "igr-iwate-ginga_tetudo",
  },
  /** 青い森鉄道 */
  aoimori: {
    aoimori_tetudo: "aoimori-aoimori_tetudo",
  },
  /** 山形鉄道 */
  yamagata: {
    flower_nagai: "yamagata-flower-nagai",
  },
  /** 秋田内陸縦貫鉄道 */
  akita_nairiku_jukan: {
    akita_nairiku: "akita-nairiku-jukan-akita-nairiku",
  },
  /** 道南いさりび鉄道 */
  dounan_isaribi: {
    dounan_isaribi: "dounan-isaribi-dounan-isaribi",
  },
  /** JR北海道 路線*/
  jr_hokkaidou: {
    /** 函館本線 */
    hakodate_honsen1: "jr-hokkaidou-hakodate-honsen1", // 函館本線(函館ー長万部)
    hakodate_honsen2: "jr-hokkaidou-hakodate-honsen2", // 函館本線(大沼ー森)
    /** 富良野線 */
    furano: "jr-hokkaidou-furano",
    /** 石北本線 */
    sekihoku_honsen: "jr-hokkaidou-sekihoku-honsen",
    /** 宗谷本線 */
    souya_honsen: "jr-hokkaidou-souya-honsen",
    /** 根室本線(滝川ー富良野) */
    nemuro_honsen1: "jr-hokkaidou-nemuro-honsen1",
    /** 根室本線(新得―釧路) */
    nemuro_honsen2: "jr-hokkaidou-nemuro-honsen2",
    /** 室蘭本線 */
    muroran_honsen1: "jr-hokkaidou-muroran-honsen1",
    muroran_honsen2: "jr-hokkaidou-muroran-honsen2",
    /** 千歳線 */
    chitose: "jr-hokkaidou-chitose",
    /** 札沼線 */
    sassyou: "jr-hokkaidou-sassyou",
    /** 釧網本線 */
    senmou_honsen: "jr-hokkaidou-senmou-honsen",
    /** 花咲線 */
    hanasaki: "jr-hokkaidou-hanasaki",
    /** 石勝線 */
    sekisyou: "jr-hokkaidou-sekisyou",
    /** 日高本線 */
    hidaka_honsen: "jr-hokkaidou-hidaka-honsen",
  },
  /** 札幌地下鉄 */
  sapporo_subway: {
    touzai: "sapporo-subway-touzai",
    nanboku: "sapporo-subway-nanboku",
    touhou: "sapporo-subway-touhou",
  },
};

