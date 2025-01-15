
/** 路線ID */
export const LINE_IDS = {
  /** JR・相鉄直通線*/
  jr_sotetsu_chokutsu: "jr-sotetsu-chokutsu",
  tokyo_monorail: "tokyo-monorail",
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
    /** 横須賀線 */
    yokosuka: 'jr-yokosuka',
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
    /** 中央本線 */
    chuo_honsen: 'jr-chuo-honsen',
    /** 総武線 */
    sobu: 'jr-sobu',
    /** 総武線快速 */
    sobu_kaisoku: 'jr-sobu-kaisoku',
    /** 総武本線 */
    sobu_honsen: 'jr-sobu-honsen',
    /** 東海道本線 */
    tokaido: 'jr-tokaido',
    /** 横浜線 */
    yokohama: 'jr-yokohama',
    /** 根岸線 */
    negishi: 'jr-negishi',
    /** 南武線 */
    nanbu: 'jr-nanbu',
    /** 武蔵野線 */
    musashino: 'jr-musashino',
    /** 相模線 */
    sagami: 'jr-sagami',
    /** 磐越東線 */
    banetsutou: 'jr-banetsutou',
    /** 東北本線 */
    touhokuhonsen: 'jr-touhoku-honsen',

    /** 日光線 */
    nikko: 'jr-nikko',
    /** 烏山線 */
    karasuyama: 'jr-karasuyama',
    /** 水戸線 */
    mito: 'jr-mito',
    /** 東北本線 */
    tohokuhonsen: 'jr-tohoku-honsen',
    /** 青梅線 */
    oume: 'jr-oume',
    /** 八高線 */
    hachiko: 'jr-hachiko',
    /** 鹿島線 */
    kashima: 'jr-kashima',
    /** 成田線 */
    narita: 'jr-narita',
    /** 京葉線 */
    keiyou: 'jr-keiyou',
    /** 内房線 */
    uchibou: 'jr-uchibou',
    /** 外房線 */
    sotobou: 'jr-sotobou',
    /** 上越線 */
    jouetsu: 'jr-jouetsu',
    /** 両毛線 */
    ryomo: 'jr-ryomo',
    /** 吾妻線 */
    agatsuma: 'jr-agatsuma',
    /** 信越本線 */
    shinetsu_honsen: 'jr-shinetsu-honsen',
    /** 弥彦線 */
    yahiko: 'jr-yahiko',
    /** 磐越西線 */
    banetsusai: 'jr-banetsusai',
    /** 白新線 */
    hakushin: 'jr-hakushin',
    /** 越後線 */
    echigo: 'jr-echigo',

    /** 東北本線 */
    tohoku_honsen: 'jr-tohoku-honsen',
    /** 奥羽本線 */
    ouu_honsen: 'jr-ouu-honsen',
    /** 仙山線 */
    senzan: 'jr-senzan',
    /** 仙石線 */
    sengoku: 'jr-sengoku',
    /** 陸羽東線 */
    rikuutou: 'jr-rikuutou',
    /** 陸羽西線 */
    rikuusei: 'jr-rikuusei',
    /** 左沢線 */
    aterazawa: 'jr-aterazawa',
    /** 大船渡線 */
    ofunato: 'jr-ofunato',
    /** 北上線 */
    kitakami: 'jr-kitakami',
    /** 釜石線 */
    kamaishi: 'jr-kamaishi',
    /** 山田線 */
    yamada: 'jr-yamada',
    /** 田沢湖線 */
    tazawako: 'jr-tazawako',
    /** 八戸線 */
    hachinohe: 'jr-hachinohe',
    /** 山形線 */
    yamagata: 'jr-yamagata',
    /** 米坂線 */
    yonesaka: 'jr-yonesaka',

    shinkansen: {
      // 東海道新幹線
      tokaido: 'jr-tokaido-shinkansen',
      // 東北新幹線
      tohoku: 'jr-tohoku-shinkansen',
      // 山形新幹線
      yamagata: 'jr-yamagata-shinkansen',
      // 秋田新幹線
      akita: 'jr-akita-shinkansen',
      // 上越新幹線
      jouetsu: 'jr-shouetsu-shinkansen',
      // 北陸新幹線
      hokuriku: 'jr-hokuriku-shinkansen',
      // 北海道新幹線
      hokkaido: 'jr-hokkaido-shinkansen',
    },
  },
  // 京急
  keikyu: {
    honsen: "keikyu-honsen",
    haneda_kuko: "keikyu-haneda-kuko",
    kuko: "keikyu-kuko",
    zushi: "keikyu-zushi",
    kurihama: "keikyu-kurihama",
    daishi: "keikyu-daishi",
    sea_side: "keikyu-sea-side",
  },
  /** 東武鉄道 */
  toubu: {
    // "東武アーバンパークライン",
    urban_park_line: 'toubu-urban-park-line',
    /** 亀戸線 */
    kameido: 'toubu-kameido',
    /** 東上線 */
    toujou: 'toubu-toujou',
    /** 伊勢崎線 */
    isesaki: 'toubu-isesaki',
    /** 日光線 */
    nikko: 'toubu-nikko',
    /** 東武線 */
    toubu: 'toubu-toubu',
    /** スカイツリーライン */
    skytree: 'toubu-skytree',
    /** 東武生越線 */
    tobu_ogose: 'toubu-tobu-ogose',
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
    /** 南北線 */
    nanboku: 'tokyo-metro-nanboku',
    /** 東西線 */
    touzai: 'tokyo-metro-touzai',
    /** 有楽町線 */
    yurakucho: 'tokyo-metro-yurakucho',
    /** 副都心線 */
    fukutoshin: 'tokyo-metro-fukutoshin',
    /** 千代田線 */
    chiyoda: 'tokyo-metro-chiyoda',
  },
  /** 東京都営地下鉄 */
  tokyo_subway: {
    /** 大江戸線 */
    oedo: 'toei-ooedo',
    /** 新宿線 */
    shinjuku: 'toei-shinjuku',
    /** 三田線 */
    mita: 'toei-mita',
    /** 浅草線 */
    asakusa: 'toei-asakusa',
    sakura_tram: 'toei-sakura-tram',
  },
  /** 首都圏新都市鉄道 */
  shutoken_shintoshi: {
    /** つくばエクスプレス */
    tsukuba_express: 'shutoken-shintoshi-tsukuba-express',
  },
  /** 相模鉄道 */
  sagami: {
    honsen: 'sagami-honsen',
    izumino: 'sagami-izumino',
    sotetsushinyokohama: 'sagami-sotetsushinyokohama',
  },
  /** 小田急 */
  odakyu: {
    /** 小田原線 */
    odawara: 'odakyu-odawara',
    enoshima: 'odakyu-enoshima',
    tama: 'odakyu-tama',
    /** 箱根登山線 */
    hakonetozan: 'odakyu-hakonetozan',
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
    inokashira: 'keiou-inokashira',
    /** 高尾線 */
    takao: 'keiou-takao',
    keibajo: 'keiou-keibajo',
    dobutsuen: 'keiou-dobutsuen',
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
  tokyu: {
    denentoshi: 'tokyu-denentoshi',
    toyoko: 'tokyu-toyoko',
    tamagawa: 'tokyu-tamagawa',
    meguro: 'tokyu-meguro',
    ikegami: "tokyu-ikegami",
    kodomonokuni: "keikyu-kodomonokuni",
    oimachi: "tokyu-oimachi",
    setagaya: "tokyu-setagaya",
    shinyokohama: "tokyu-shinyokohama",
  },
  /** 横浜市営地下鉄 */
  yokohama_shieichikatetsu: {
    blue_line: 'yokohama-shieichikatetsu-blue-line',
    green_line: 'yokohama-shieichikatetsu-green-line',
  },
  /** 東京臨海高速鉄道*/
  toukyo_rinkai_kousoku: {
    /** りんかい線 */
    rinkai: 'toukyo-rinkai-kousoku-rinkai',
  },
  /** 西武鉄道 */
  seibu: {
    tamagawa: "seibu-tamagawa",
    tamako: "seibu-tamako",
    kokubunji: "seibu-kokubunji",
    ikebukuro: "seibu-ikebukuro",
    seibu_yurakucho: "seibu-seibu-yurakucho",
    toyoshima: "seibu-toyoshima",
    seibu_sayama: "seibu-seibu-sayama",
    seibu_shinjuku: "seibu-seibu-shinjuku",
    seibu_chichibu: "seibu-seibu-chichibu",
    seibu_toshimaen: "seibu-seibu-toshimaen",
  },
  /** 東葉高速鉄道 */
  toyo_kousoku: {
    toyo_kousoku: 'toyo-kousoku-toyo-kousoku',
  },
  /** 舞浜リゾート */
  maihama_resort: {
    disney_resort: 'maihama-resort-disney-resort',
  },
  /** 多摩モノレール */
  tama_monorail: {
    tama_monorail: 'tama-monorail',
  },
  /** 京成電鉄 */
  keisei: {
    honsen: 'keisei-honsen',
    chiba: 'keisei-chiba',
    shin_keisei: "shin-keisei",
    keisei_narita_sky_access: "keisei-narita-sky-access",
  },
  hokusou: {
    hokusou: 'keisei-hokusou',
  },
  // ゆりかもめ
  yurikamome: {
    yurikamome: 'yurikamome',
  },
  /** 北越急行 */
  hokuetsu_kyuko: {
    hokuhoku: "hokuhoku",
  },
  /** 秩父鉄道 */
  chichibu: {
    chichibu: 'chichibu-chichibu',
  },
  /** 上信電鉄 */
  joushin: {
    joushin: 'joushin-joushin',
  },
  /** 伊豆箱根鉄道 */
  izuhakone: {
    daiyuzan: 'izuhakone-daiyuzan',
    sunzu: "izuhakone-sunzu",
  },
   /** 関東鉄道 */
   kanto: {
    joso: "kanto-joso"
  },
  /** 埼玉高速鉄道 */
  saitama_kosoku: {
    saitama_stadium: "saitama-stadium",
  },
  /** JR東海 */
  jr_tokai: {
    tenryuhamanako: 'jr-tokai-tenryuhamanako',
    ida: 'jr-tokai-ida',
    chuohonsen: 'jr-tokai-chuohonsen',
    aonami: 'jr-tokai-aonami',
    hokurikuhonsen: 'jr-tokai-hokurikuhonsen',
  },
  /** JR西日本 */
  jr_west: {
    kansai_honsen: 'jr-west-kansai-honsen',
    saninhonsen: 'jr-west-saninhonsen',
    nara: 'jr-west-nara',
    osaka_higashi: 'jr-west-osaka-higashi',
    shinkansen: {
      sanyo: 'jr-west-sanyo-shinkansen',
    }
  },

  /** 名古屋鉄道 */
  nagoya: {
    nagoyahonsen: 'nahoya-nagoyahonsen',
  },
  /** 名古屋市営交通 */
  nagoya_shiei_subway: {
    sakuradori: 'nagoya-shiei-subway-sakuradori',
    higashiyama: 'nagoya-shiei-subway-higashiyama',
  },
  /** 近江鉄道 */
  oumi: {
    honsen: 'omi-honsen',
  },
  /** 京都市営地下鉄 */
  kyoto_shiei_subway: {
    karasuma: 'kyoto-shiei-subway-karasuma',
  },
  /** 近畿日本鉄道 */
  kinki_nihon: {
    kyoto: 'kinki-nihon-kyoto',
  },
  /** OsakaMetro */
  osaka_metro: {
    midosuji: 'osaka-metro-midosuji',
  },

  /** 阿武隈急行 */
  abukuma_kyuko: {
    abukuma_kyuko: 'abukuma-kyuko',
  },
  /** 福島交通 */
  fukushima_koutsu: {
    iizaka: 'fukushima-koutsu-iizaka',
  },
  /** IGRいわて銀河鉄道 */
  igr_iwate_ginga: {
    igr_iwate_ginga_tetudo: 'igr-iwate-ginga_tetudo',
  },
  /** 青い森鉄道 */
  aoimori: {
    aoimori_tetudo: 'aoimori-aoimori_tetudo',
  },
  /** 山形鉄道 */
  yamagata: {
    flower_nagai: 'yamagata-flower-nagai',
  }
};

/** 駅ID */
export const STATION_IDS = {
  /** JR東日本駅 */
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
    itabashi: 'itabashi',
    jujo: 'jujo',
    kitaakahane: 'kita-akahane',
    ukimafunado: 'ukima-funado',
    todakouen: 'todakouen',
    toda: 'toda',
    kitatoda: 'kitatoda',
    musashiurawa: 'musashiurawa',
    nakaurawa: 'nakaurawa',
    minamiyono: "minamiyono",
    yonohonmachi: "yonohonmachi",
    kitayono: "kitayono",
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
    // 中央線
    ochanomizu: 'ochanomizu',
    yotsuya: 'yotsuya',
    nakano: 'nakano',
    kouenji: 'kouenji',
    asagaya: 'asagaya',
    ogikubo: 'ogikubo',
    nishiogikubo: 'nishiogikubo',
    kichijoji: 'kichijoji',
    mitaka: 'mitaka',
    musashisakai: 'musashisakai',
    higashikoganei: 'higashikoganei',
    musashikoganei: 'musashikoganei',
    kokubunji: 'kokubunji',
    nishikokubunji: 'nishikokubunji',
    kunitachi: 'kunitachi',
    tachikawa: 'tachikawa',
    hino: 'hino',
    toyoda: 'toyoda',
    nishihachiouji: "nishihachiouji",
    takao: 'takao',
    // 総武線
    higashinakano: 'higashinakano',
    okubo: 'okubo',
    sendagaya: 'sendagaya',
    shinanomachi: 'shinanomachi',
    ichigaya: 'ichigaya',
    iidabashi: 'iidabashi',
    suidoubashi: 'suidobashi',
    asakusabashi: 'asakusabashi',
    ryogoku: 'ryogoku',
    kinshicho: 'kinshicho',
    kameido: 'kameido',
    hirai: 'hirai',
    shinkoiwa: 'shinkoiwa',
    koiwa: 'koiwa',
    ichikawa: 'ichikawa',
    motoyawata: 'motoyawata',
    shimousa_nakayama: 'shimousa-nakayama',
    nishifunabashi: 'nishifunabashi',
    funabashi: 'funabashi',
    nishihunabashi: 'nishihunabashi',
    higashi_funabashi: 'higashi-funabashi',
    tsudanuma: 'tsudanuma',
    makuharihongou: 'makuharihongou',
    makuhari: 'makuhari',
    shinkemigawa: 'shinkemigawa',
    inage: 'inage',
    nishichiba: 'nishichiba',
    chiba: 'chiba',
    bakurocho: 'bakurocho',
    shinnihonbashi: 'shinnihonbashi',
    // 高崎線
    oku: 'oku',
    miyahara: 'miyahara',
    ageo: 'ageo',
    kitaageo: 'kitaageo',
    okegawa: 'okegawa',
    kitamoto: 'kitamoto',
    kounosu: 'kounosu',
    kitakounosu: 'kitakounosu',
    hukiage: 'hukiage',
    gyouda: 'gyouda',
    kumagaya : 'kumagaya',
    kagohara : 'kagohara',
    hukaya : 'hukaya',
    okabe : 'okabe',
    honnjou: 'honnjou',
    jinbohara: 'jinbohara',
    maebashi: 'maebashi',
    /** 新町(群馬) */
    shinmachi: 'sinmachi',
    kuragano: 'kuragano',
    takasaki: 'takasaki',
    // 湘南新宿ライン
    utsunomiya: 'utsunomiya',
    suzumenomiya: 'suzumenomiya',
    ishibashi: 'ishibashi',
    jichiidai: 'jichiidai',
    koganei: 'koganei',
    oyama: 'oyama',
    mamada: 'mamada',
    nogi: 'nogi',
    koga: 'koga',
    kurihashi: 'kurihashi',
    higashiwashinomiya: 'higashiwashinomiya',
    kuki: 'kuki',
    shinshiraoka: 'shinshiraoka',
    shiraoka: 'shiraoka',
    hasuda: 'hasuda',
    higashiomiya: 'higashiomiya',
    toro: 'toro',
    maehashi: 'maehashi',
    shinmaebashi: 'shinmaebashi',
    /** 井野(群馬) */
    ino: 'ino',
    takasakitonyamachi: 'takasaki-tonyamachi',
    nishioi: "nishioi",
    musashikosugi: "musashikosugi",
    shinkawasaki: "shinkawasaki",
    hodogaya: "hodogaya",
    higashitotsuka: "higashitotsuka",
    kitakamakura: "kitakamakura",
    kamakura: "kamakura",
    zushi: "zushi",
    nishinasuno: "nishinasuno",
    // 武蔵野線
    fuchuhonmachi: 'fuchuhonmachi',
    kitafuchu: 'kitafuchu',
    shinkohira: 'shinkohira',
    shinakitsu: 'shinakitsu',
    higashi_tokorozawa: "higashi_tokorozawa",
    shinza: "shinza",
    kita_asaka: "kita_asaka",
    nishi_urawa: "nishi_urawa",
    musashi_urawa: "musashi_urawa",
    higashi_urawa: "higashi_urawa",
    higashi_kawaguchi: "higashi_kawaguchi",
    minami_koshigaya: "minami_koshigaya",
    koshigaya_laketown: "koshigaya_laketown",
    yoshikawa: "yoshikawa",
    yoshikawa_minami: "yoshikawa_minami",
    shin_sango: "shinsango",
    sango: "sango",
    shin_yahashira: "shin_yahashira",
    ichikawa_ono: "ichikawa_ono",
    funabashi_houden: "funabashi_hoden",
    nishi_funabashi: "nishi_funabashi",
    minami_funabashi: "minami_funabashi",
    shin_narashino: "shin_narashino",
    makuhari_toyosuna: "makuhari_toyosuna",
    kaihin_makuhari: "kaihin_makuhari",
    ichikawa_shiohama: "ichikawa_shiohama",
    shin_urayasu: "shin_urayasu",
    maihama: "maihama",
    kasai_rinkai_koen: "kasai_rinkai_koen",
    shiomi: "shiomi",
    ecchujima: "ecchujima",
    hacchobori: "hacchobori",

    // 川越線
    nisshin: 'nisshin',
    nishi_omiya: 'nishi-omiya',
    sashiougi: 'sashiougi',
    minami_furuya: 'minami-furuya',
    kawagoe: 'kawagoe',
    nishi_kawagoe: 'nishi-kawagoe',
    matoba: 'matoba',
    kasahata: 'kasahata',
    musashi_takahagi: 'musashi-takahagi',
    komagawa: 'komagawa',

    //常盤線
    mikawashima: "mikawashima",
    minami_senju: "minami_senju",
    kita_senju: "kita_senju",
    ayase: "ayase",
    kameari: "kameari",
    kanamachi: "kanamachi",
    matsudo: "matsudo",
    kita_matsudo: "kita_matsudo",
    mahashi: "mahashi",
    shin_matsudo: "shin_matsudo",
    kita_kogane: "kita_kogane",
    minami_kashiwa: "minami_kashiwa",
    kashiwa: "kashiwa",
    kita_kashiwa: "kita_kashiwa",
    abiko: "abiko",
    tennodai: "tennodai",
    toride: "toride",
    fujishiro: "fujishiro",
    ryugasakishi: "ryugasakishi",
    ushiku: "ushiku",
    hitachino_ushiku: "hitachino_ushiku",
    arakawaoki: "arakawaoki",
    tuchiura: "tuchiura",
    kandachi: "kandachi",
    takahama: "takahama",
    ishioka: "ishioka",
    hadori: "hadori",
    iwama: "iwama",
    tomobe: "tomobe",
    uchihara: "uchihara",
    akatsuka: "akatsuka",
    kairakuen: "kairakuen",
    mito: "mito",
    katsuta: "katsuta",
    sawa: "sawa",
    toukai: "toukai",
    omika: "omika",
    hitachi_taga: "hitachi_taga",
    hitachi: "hitachi",
    ogitsu: "ogitsu",
    juo: "juo",
    takahagi: "takahagi",
    minami_nakazato: "minami_nakazato",
    isohara: "isohara",
    otsuko: "otsuko",
    nakoso: "nakoso",
    ueda: "ueda",
    izumi: "izumi",
    yumoto: "yumoto",
    uchisato: "uchisato",
    iwaki: "iwaki",
    kusano: "kusano",
    yotsukura: "yotsukura",
    kunohama: "kunohama",
    suetsugi: "suetsugi",
    hirono: "hirono",
    j_village: "j_village",
    kido: "kido",
    tatsuta: "tatsuta",
    tomioka: "tomioka",
    yorunomori: "yorunomori",
    ono: "ono",
    futaba: "futaba",
    namie: "namie",
    momouchi: "momouchi",
    odaka: "odaka",
    iwaki_ota: "iwaki_ota",
    haranocho: "haranocho",
    kashima: "kashima",
    nittaki: "nittaki",
    soma: "soma",
    komagamine: "komagamine",
    shinchi: "shinchi",
    sakamoto: "sakamoto",
    yamashita: "yamashita",
    hamayoshida: "hamayoshida",
    watari: "watari",
    okuma: "okuma",
    iwanuma: "iwanuma",

    // 横須賀線
    higashizushi: 'higashizushi',
    taura: 'taura',
    yokosuka: 'yokosuka',
    kinugasa: 'kinugasa',
    kurihama: 'kurihama',

    // 南武線
    noborito: "noborito",

    // 相模線
    atsugi: "atsugi",

    // 宇都宮線
    doro: 'doro',
    /** 岡本(栃木) */
    okamoto: 'okamoto',
    housyakuji: 'housyakuji',
    ujiie: 'ujiie',
    kamasusaka: 'kamasusaka',
    kataoka: 'kataoka',
    yaita: 'yaita',
    /**野崎(栃木) */
    nozaki: 'nozaki',
    nishisunano: 'nishisunano',
    kuroiso: 'kuroiso',
    //武蔵野線(JM)
    huchuhonmachi: 'huchuhonmachi',
    kitahuchu: 'kitahuchu',
    minamiurawa: "minamiurawa",
    higashiurawa: "higashiurawa",
    higashikawaguchi: "higashikawaguchi",
    minamikoshigaya: "minamikoshigaya",
    minami_nagareyama: "minami_nagareyama",
    /** 吉川(埼玉) */
    yoshikawaminami: "yoshikawaminami",
    minaminagareyama: "minaminagareyama",
    shinmatsudo: "shinmatsudo",
    shinyahashira: "shinyahashira",
    higashi_matsudo: "higash_imatsudo",
    ichikawaono: "ichikawaono",
    hunabashihouten: "hunabashihouten",
    minamihunabashi: "minamihunabashi",
    shinnarashino: "shinnarashino",
    makuharitoyosuna: "makuharitoyosuna",
    kaihinmakuhari: "kaihinmakuhari",
    ichikawashiohama: "ichikawashiohama",
    shinurayasu: "shinurayasu",
    kasairinkaikouen: "kasairinkaikouen",
    shinkiba: "shinkiba",
    hacchoubori: "hacchoubori",
    //南武線
    hamakawasaki: "hamakawasaki",
    odasakae: "odasakae",
    kawasakichinmachi: "kawasakichinmachi",
    hacchounawate: "hacchounawate",
    shitte: "shitte",
    yakou: "yakou",
    kashimada: "kashimada",
    hirama: "hirama",
    mukougawara: "mukougawara",
    mizonokuchi: "mizonokuchi",
    musashinakahara: "musashinakahara",
    musashishinjou: "musashishinjou",
    musashimizonokuchi: "musashimizonokuchi",
    tsudayama: "tsudayama",
    kuji: "kuji",
    syukugawara: "syukugawara",
    noto: "noto",
    /** 中野島(神奈川) */
    nakanojima: "nakanojima",
    inadatsutsumi: "inadatsutsumi",
    yanoguchi: "yanoguchi",
    inaginaganuma: "inaginaganuma",
    minamitama: "minamitama",
    bubaigawara: "bubaigawara",
    nishifu: "nishifu",
    yaho: "yaho",
    yakawa: "yakawa",
    nishikunitachi: "nishikunitachi",
    //上越新幹線
    honjo_waseda: "honjo_waseda",
    joumoukougen: "joumoukougen",
    echigo_yuzawa: "echigo_yuzawa",
    gala_yuzawa: "gala-yuzawa",
    urasa: "urasa",
    nagaoka: "nagaoka",
    tsubame_sanjo: "tsubame-sanjo",
    niigata: "niigata",
    // 東北新幹線
    nasu_shiobara: "jr-nasu_shiobara",
    shin_shirakawa: "jr-shin_shirakawa",
    kooriyama: "jr-kooriyama",
    fukushima: "jr-fukushima",
    shiroishi_zao: "jr-shiroishi_zao",
    sendai: "jr-sendai",
    furukawa: "jr-furukawa",
    kurikoma_kogen: "jr-kurikoma_kogen",
    ichinoseki: "jr-ichinoseki",
    mizusawaesashi: "jr-mizusawaesashi",
    kitakami: "jr-kitakami",
    shin_hanamaki: "jr-shin_hanamaki",
    morioka: "jr-morioka",
    iwate_numakunai: "jr-iwate_numakunai",
    ninohe: "jr-ninohe",
    hachinohe: "jr-hachinohe",
    shichinohe_towada: "jr-shichinohe_towada",
    shin_aomori: "jr-shin_aomori",
    // 山形新幹線
    shinjo: "jr-shinjo",
    oishida: "jr-oishida",
    murayama: "jr-murayama",
    sakuranbo_higashine: "jr-sakuranbo_higashine",
    tendo: "jr-tendo",
    yamagata : "jr-yamagata",
    kaminoyama_onsen: "jr-kaminoyama_onsen",
    akayu: "jr-akayu",
    takahata: "jr-takahata",
    yonezawa: "jr-yonezawa",
  },
  /** 京急駅 */
  keikyu: {
    kitashinagawa: 'kitashinagawa',
    shinbanba: 'shinbanba',
    aomonoyokocho: 'aomonoyocho',
    samezu: 'samezu',
    tachiaigawa: 'tachiaigawa',
    omorikaigan: 'omorikaigan',
    heiwajima: 'heiwajima',
    omorimachi: 'omorimachi',
    umeyashiki: 'umeyashiki',
    keikyukamata: 'keikyukamata',
    zoushiki: 'zoushiki',
    rokugodote: 'rokugodote',
    keikyukawasaki: 'keikyukawasaki',
    hacchonawate: 'hacchonawate',
    tsurumiichiba: 'tsurumiichiba',
    keikyutsurumi: 'keikyutsurumi',
    kagetusoujiji: 'kagetusoujiji',
    namamugi: 'namamugi',
    keikyushinkoyasu: 'keikyushinkoyasu',
    koyasu: 'koyasu',
    kanagawashinmachi: 'kanagawashinmachi',
    keikyuhigashikanagawa: 'keikyuhigashi-kanagawa',
    kanagawa: 'kanagawa',
    tobe: 'tobe',
    hinodecho: 'hinodecho',
    koganecho: 'koganecho',
    minamiota: 'minamiota',
    idogaya: 'idogaya',
    gumyouji: 'gumyouji',
    kamiooka: 'kamiooka',
    byobugaura: 'byobugaura',
    sugita: 'sugita',
    keikyutomioka: 'keikyutomioka',
    noukendai: 'noukendai',
    kanazawabunko: 'kanazawabunko',
    kanazawahakkei: 'kanazawahakkei',
    oppama: 'oppama',
    keikyutaura: 'keikyutaura',
    anjinduka: 'anjinduka',
    hemi: 'hemi',
    shioiri: 'shioiri',
    yokosukachuo: 'yokosukachuo',
    kenritsudaigaku: 'kenritsudaigaku',
    horinouchi: 'horinouchi',
    keikyuotsu: 'keikyuotsu',
    maborikaigan: 'maborikaigan',
    uraga: 'uraga',
    shinotsu: 'shinotsu',
    kitakurihama: 'kitakurihama',
    keikyukurihama: 'keikyukurihama',
    yrp_nobi: 'yrp-nobi',
    keikyunagsawa: 'keikyunaosawa',
    tsukuihama: 'tsukuihama',
    miurakaigan: 'miurakaigan',
    misakiguchi: 'misakiguchi',
    mutsuura: 'mutsuura',
    jinmuji: 'jinmuji',
    zushihayama: 'zushihayama',
    minatocho: 'minatocho',
    suzukicho: 'suzukicho',
    kawasakidaishi: 'kawasakidaishi',
    higashimonzen: 'higashimonzen',
    daishibashi: 'daishibashi',
    kojimashinden: 'kojimashinden',
    koujiya: 'koujiya',
    otorii: 'otorii',
    anamoriinari: 'anamoriinari',
    tenkubashi: 'tenkubashi',
    hanedakuko_daisan_terminal: 'hanedakuko-daisan-terminal',
    hanedakuko_dai1_dai2_terminal: 'hanedakuko-dai1-dai2-terminal',
  },
  /** 東京メトロ駅 */
  tokyo_metro: {
    /** 中目黒 */
    nakameguro: 'nakameguro',
    hiroo: 'hiroo',
    roppongi: 'roppongi',
    kamiyacho: 'kamiyacho',
    toranomon_hills: 'toranomon-hills',
    kasumigaseki: 'kasumigaseki',
    hibiya: 'hibiya',
    ginza: 'ginza',
    higashiginza: 'higashi-ginza',
    tsukiji: 'tsukiji',
    kayabacho: 'kayabacho',
    ningyocho: 'ningyocho',
    kodenmacho: 'kodenmacho',
    nakaokachimachi: 'naka-okachimachi',
    iriya: 'iriya',
    minowa: 'minowa',
    minamisenju: 'minamisenju',
    kitasenju: 'kitasenju',
    shinotuka: 'shinotuka',
    myogadani: 'myogadani',
    kourakuen: 'kourakuen',
    hongosanchome: 'hongosanchome',
    awajicho: 'awajicho',
    otemachi: 'otemachi',
    kokkaigijidomae: 'kokkaigijidome',
    akasakamitsuke: 'akasaka-mitsuke',
    yotsuya_sanchome: 'yotsuya-sanchome',
    shinjuku_gyoenmae: 'shinjuku-gyoenmae',
    shinjuku_sanchome: 'shinjuku-sanchome',
    nishishinjuku: 'nishishinjuku',
    nakano_sakaue: 'nakano-sakaue',
    shinnakano: 'shinnakano',
    higashi_koenji: 'higashi-koenji',
    shinkoenji: 'shinkoenji',
    minamiasagaya: 'minamiasagaya',
    // 有楽町線
    wakoshi: 'wakoshi',
    chikatetsu_narimasu: 'chikatetsu-narimasu',
    chikatetsu_akatsuka: 'chikatetsu-akatsuka',
    heiwadai: 'heiwadai',
    hikawadai: 'hikawadai',
    kotake_mukaihara: 'kotake-mukaihara',
    senkawa: 'senkawa',
    kanamecho: 'kanamecho',
    higashi_ikebukuro: 'higashi-ikebukuro',
    gokokuji: 'gokokuji',
    edogawabashi: 'edogawabashi',
    idabashi: 'idabashi',
    koujimachi: 'koujimachi',
    nagatacho: 'nagatacho',
    sakuradamon: 'sakuradamon',
    ginza_icchome: 'ginza-icchome',
    shintomicho: 'shintomicho',
    tsukishima: 'tsukishima',
    toyosu: 'toyosu',
    tatsumi: 'tatsumi',
    shinkiba: 'shinkiba',
    // 副都心線
    zoshigaya: 'zoshi-gaya',
    nishi_waseda: 'nishi-waseda',
    kitasandou: 'kitasandou',
    meiji_jingumae: 'meiji-jingumae',
    higashi_shinjuku: 'higashi-shinjuku',
    // 銀座線
    gaienmae: 'tokyo-metro-gaienmae',
    tameikesanno: 'tokyo-metro-tameikesanno',
    kyobashi: 'tokyo-metro-kyobashi',
    toranomon: 'tokyo-metro-toranomon',
    mitsukoshimae: 'tokyo-metro-mitsukoshimae',
    suehirocho: 'tokyo-metro-suehirocho',
    ueno_hirokoji: 'tokyo-metro-ueno-hirokoji',
    inaricho: 'tokyo-metro-inaricho',
    tawaramachi: 'tokyo-metro-tawaramachi',
    omotesando: 'tokyo-metro-omotesando',
    nihonbashi: 'tokyo-metro-nihonbashi',
    // 半蔵門線
    hanzomon: 'tokyo-metro-hanzomon',
    suitengumae: 'tokyo-metro-suitengumae',
    oshiage: 'oshiage',
    kiyosumi_shirakawa: 'kiyosumi_shirakawa',
    // 南北線
    shirokanedai: 'shirokanedai',
    shirokane_takanawa: 'shirokane-takanawa',
    roppongi_iccho_me: 'roppongi-iccho-me',
    todaimae: 'todaimae',
    honkomagome: 'honkomagome',
    nishigahara: 'nishigahara',
    oji_kamiya: 'oji-kamiya',
    shimo: 'shimo',
    akabane_iwabuchi: 'akabane-iwabuchi',
    oji: 'oji',
  },
  /** 都営駅 */
  tokyo_subway: {
    // 浅草線
    honjo_azumabashi: 'honjo-azumaba-shi',
    asakusa: 'asakusa',
    kuramae: 'kuramae',
    asakusabashi: 'asakusabashi',
    higashi_nihonbashi: 'higashi-nihonbashi',
    ningyocho: 'ningyocho',
    nihonbashi: 'nihonbashi',
    takaracho: 'takaracho',
    higashi_ginza: 'higashi-ginza',
    daimon: 'daimon',
    mita: 'mita',
    sengakuji: 'sengakuji',
    takanawadai: 'takanawa-dai',
    gotanda: 'gotanda',
    togoshi: 'togoshi',
    nakanobe: 'nakanobe',
    magome: 'magome',
    nishimagome: 'nishimagome',
    // 新宿線
    shinohara: 'shinohara',
    mizue: 'mizue',
    ichinoe: 'ichinoe',
    funabori: 'funabori',
    higashi_oshima: 'higashi-oshima',
    oshima: 'oshima',
    nishi_oshima: 'nishi-oshima',
    sumiyoshi: 'sumiyoshi',
    kikukawa: 'kikukawa',
    morishita: 'morishita',
    hamacho: 'hamacho',
    bakuro_yokoyama: 'bakuro-yokoyama',
    iwamotocho: 'iwamotocho',
    ogawacho: 'ogawacho',
    jinbocho: 'jinbocho',
    kudanshita: 'kudanshita',
    akebonobashi: 'akebonobashi',
    shinsen_shinjuku: 'shinsen-shinjuku',
    // 大江戸線
    tochomae: 'tochomae',
    shinjuku_nishiguchi: 'shinjuku-nishiguchi',
    wakamatsukawada: 'wakamatsukawada',
    ushigomeyanagicho: 'ushigomeyanagicho',
    ushigomekagurazaka: 'ushigomekagurazaka',
    kasuga: 'kasuga',
    hongo_sancho_me: 'hongo-sancho-me',
    ueno_okachimachi: 'ueno-okachimachi',
    kiyosumishirakawa: 'kiyosumishirakawa',
    monzennakacho: 'monzennakacho',
    tsukishima: 'tsukishima',
    kachidoki: 'kachidoki',
    tsukijishijo: 'tsukijishijo',
    shiodome: 'shiodome',
    akabanebashi: 'akabanebashi',
    azabujuban: 'azabujuban',
    roppongi: 'roppongi',
    aoyama_itchome: 'aoyama-itchome',
    kokuritsu_kyogijo: 'kokuritsu-kyogijo',
    nishi_shinjuku_gochome: 'nishi-shinjuku-gochome',
    nakano_sakaue: 'nakano-sakaue',
    nakai: 'nakai',
    ochiaiminaminagasaki: 'ochiaiminaminagasaki',
    shin_egota: 'shin-egota',
    toshimaen: 'toshimaen',
    nerima_kasugacho: 'nerima-kasugacho',
    hikarigaoka: 'hikarigaoka',
    takawadai: 'takawadai',
    // 三田線
    nishi_takashimadaira: 'nishi-takashimadaira',
    shin_takashimadaira: 'shin-takashimadaira',
    takashimadaira: 'takashimadaira',
    renkon: 'renkon',
    shimura_sanchome: 'shimura-sanchome',
    shimura_sakaue: 'shimura-sakaue',
    honhasunuma: 'honhasunuma',
    itabashihoncho: 'itabashihoncho',
    itabashi_kuyakushomae: 'itabashi-kuyakushomae',
    shin_itabashi: 'shin-itabashi',
    nishi_sugamo: 'nishi-sugamo',
    nishidai: 'nishidai',
    sengoku: 'sengoku',
    hakusan: 'hakusan',
    uchisaiwaicho: 'uchisaiwaicho',
    onarimon: 'onarimon',
    shiba_koen: 'shiba-koen',
  },
  /** 首都圏新都市 */
  shutoken_shintoshi: {
    tsukuba: 'tsukuba',
    kenkyugakuen: 'kenkyugakuen',
    banpakukinenkouen: 'banpakukinenkouen',
    midorino: 'midorino',
    miraidaira: 'miraidaira',
    moriya: 'moriya',
    kashiwa_tanaka: 'kashiwa-tanaka',
    kashiwanoha_campus: 'kashiwanoha-campus',
    nagareyama_otakanomori: 'nagareyama-otakanomori',
    nagareyama_centralpark: 'nagareyama-centralpark',
    sango_chuo: 'sango-chuo',
    yashio: 'yashio',
    rokucho: 'rokucho',
    aoi: 'aoi',
    shin_okachimachi: 'shin-okachimachi',
  },
  /** 相鉄駅 */
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
    hazawayokohamakokudai: "hazawayokohamakokudai",
  },
  /** 小田急駅 */
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
    // 小田原線
    minamishinjuku: "minamishinjuku",
    sangubashi: "sangubashi",
    yoyogihachiman: "yoyogihachiman",
    yoyogiuehara: "yoyogiuehara",
    higashikitazawa: "higashikitazawa",
    shimokitazawa: "shimokitazawa",
    setagayadaita: "setagayadaita",
    umegaoka: "umegaoka",
    gotokuji: "gotokuji",
    kyodo: "kyodo",
    chitosefunabashi: "chitosefunabashi",
    soshigayaokura: "soshigayaokura",
    seijogakuenmae: "seijogakuenmae",
    kitami: "kitami",
    komae: "komae",
    izumitamagawa: "izumitamagawa",
    mukougaokayuen: "mukougaokayuen",
    ikuta: "ikuta",
    yomiuri_land_mae: "yomiuri-land-mae",
    yurigaoka: "yurigaoka",
    shinyurigaoka: "shinyurigaoka",
    soubudaimae: "soubudaimae",
    kakio: "kakio",
    tsurukawa: "tsurukawa",
    tamagawagakuenmae: "tamagawagakuenmae",
    odakyusagamihara: "odakyusagamihara",
    musashidaimae: "musashidaimae",
    zama: "zama",
    ebina: "ebina",
    honatsugi: "honatsugi",
    aikouishida: "aikouishida",
    isehara: "isehara",
    tsurumakionsen: "tsurumakionsen",
    toukaidaigakumae: "toukaidaigakumae",
    hadano: "hadano",
    shibusawa: "shibusawa",
    shinmatsuda: "shinmatsuda",
    kaisei: "kaisei",
    kayama: "kayama",
    tomizu: "tomizu",
    hotaruda: "hotaruda",
    /** 足柄(神奈川) */
    ashigara: "ashigara",
  },
  /** 東急駅 */
  tokyu: {
    // 田園都市線
    ikejiriohashi: "ikejiriohashi",
    sangenjaya: "sangenjaya",
    komazawadaigaku: "komazawadaigaku",
    sakurashinmachi: "sakurashinmachi",
    yoga: "yoga",
    futakotamagawa: "futakotamagawa",
    futako_shinchi: "futako-shinchi",
    takatsu: "takatsu",
    mizonokuchi: "mizonokuchi",
    kajigaya: "kajigaya",
    miyazakidai: "miyazakidai",
    miyamaedaira: "miyamaedaira",
    washinuma: "washinuma",
    tama_plaza: "tama-plaza",
    azamino: "azamino",
    eda: "eda",
    ichigao: "ichigao",
    fujigaoka: "fujigaoka",
    aobadai: "aobadai",
    tana: "tana",
    tsukushino: "tsukushino",
    suzukakedai: "suzukakedai",
    minamimachida_grandberry_park: "minamimachida-grandberry-park",
    tsukimino: "tsukimino",
    // 多摩川線
    tamagawa: "tamagawa",
    numabe: "numabe",
    unoki: "unoki",
    simomaruko: "simomaruko",
    musashishinden: "musashishinden",
    yagutiwatashi: "yagutiwatashi",
    // 大井町線
    shimoshinmei: "shimoshinmei",
    togoshikouen: "togoshikouen",
    nakanobe: "nakanobe",
    ebaracho: "ebaracho",
    hatanodai: "hatanodai",
    kitasenzoku: "kitasenzoku",
    ookayama: "ookayama",
    midorigaoka: "midorigaoka",
    jiyugaoka: "jiyugaoka",
    kuhonbutsu: "kuhonbutsu",
    oyamadai: "oyamadai",
    todoroki: "todoroki",
    kaminoge: "kaminoge",
    // 目黒線
    fudomae: "fudomae",
    musashikoyama: "musashikoyama",
    nishikoyama: "nishikoyama",
    senzoku: "senzoku",
    okuzawa: "okuzawa",
    denenchohu: "denenchohu",
    shinmaruko: "shinmaruko",
    motosumiyoshi: "motosumiyoshi",
    hiyoshi: "hiyoshi",
  },
  /** 東武駅 */
  tobu: {
    // 東武東上線
    kita_ikebukuro: "tobu-kita-ikebukuro",
    shimoitabashi: "tobu-shimoitabashi",
    oyama: "tobu-oyama",
    nakaitabashi: "tobu-nakaitabashi",
    tokiwadai: "tobu-tokiwadai",
    kamiitabashi: "tobu-kamiitabashi",
    toubu_nerima: "tobu-toubu-nerima",
    shimoakatsuka: "tobu-shimoakatsuka",
    narimasu: "tobu-narimasu",
    asaka: "tobu-asaka",
    asakadai: "tobu-asakadai",
    shigi: "tobu-shigi",
    yanasegawa: "tobu-yanasegawa",
    mizuhodai: "tobu-mizuhodai",
    tsuruse: "tobu-tsuruse",
    fujimino: "tobu-fujimino",
    kamihukuoka: "tobu-kamihukuoka",
    shinkawagashi: "tobu-shinkawagashi",
    kawagoeshi: "tobu-kawagoeshi",
    kasumigaseki: "tobu-kasumigaseki",
    tsurugashima: "tobu-tsurugashima",
    wakaba: "tobu-wakaba",
    sakato: "tobu-sakato",
    kita_sakato: "tobu-kita-sakato",
    kousaka: "tobu-kousaka",
    higashi_matsuyama: "tobu-higashi-matsuyama",
    shinrin_koen: "tobu-shinrin-koen",
    tsukinowa: "tobu-tsukinowa",
    musashi_arashiyama: "tobu-musashi-arashiyama",
    ogawamachi: "tobu-ogawamachi",
    tobu_takezawa: "tobu-tobu-takezawa",
    minami_yorii: "tobu-minami-yorii",
    dankin: "tobu-dankin",
    hachigata: "tobu-hachigata",
    tamayodo: "tobu-tamayodo",
    yorii: "tobu-yorii",
  },
  /** 西部駅 */
  seibu: {
    // 西武池袋線
    shiinamachi: "shiinamachi",
    higashi_nagasaki: "higashi-nagasaki",
    ekoda: "ekoda",
    sakuradai: "sakuradai",
    nerima: "nerima",
    nakamurabashi: "nakamurabashi",
    fujimidai: "fujimidai",
    nerima_takanodai: "nerima-takanodai",
    syakujiikoen: "syakujiikoen",
    oizumi_gakuen: "oizumi-gakuen",
    hoya: "hoya",
    hibarigaoka: "hibarigaoka",
    higashi_kurume: "higashi-kurume",
    kiyose: "kiyose",
    akitsu: "akitsu",
    tokorozawa: "tokorozawa",
    nishi_tokorozawa: "nishi-tokorozawa",
    kotesashi: "kotesashi",
    sayamagaoka: "sayamagaoka",
    musashi_fujisawa: "musashi-fujisawa",
    inariyamakoen: "inariyama-koen",
    irumashi: "irumashi",
    bushi: "bushi",
    motokaji: "motokaji",
    hanno: "hanno",
  },
  /** 流鉄 */
  ryutetsu: {
    nagareyama: "ryutetsu-nagareyama",
    heiwadai: "ryutetsu-heiwadai",
    hiregasaki: "ryutetsu-hiregasaki",
    koganejoato: "ryutetsu-koganejoato",
    koya: "ryutetsu-koya",
    mahashi: "ryutetsu-mahashi",
  },
  /** 京成駅 */
  keisei: {
    keisei_tsudanuma: "keisei-keisei-tsudanuma",
    shin_tsudanuma: "keisei-shin-tsudanuma",
    maehara: "keisei-maehara",
    yakuendai: "keisei-yakuendai",
    narashino: "keisei-narashino",
    kita_narashino: "keisei-kita-narashino",
    takanekido: "keisei-takanekido",
    takanekodan: "keisei-takanekodan",
    takifudo: "keisei-takifudo",
    misaki: "keisei-misaki",
    futawakodai: "keisei-futawa-kodai",
    kamagaya_daibutsu: "keisei-kamagaya-daibutsu",
    hatsutomi: "keisei-hatsutomi",
    shin_kamagaya: "keisei-shin-kamagaya",
    kita_hatsutomi: "keisei-kita-hatsutomi",
    kunugiyama: "keisei-kunugiyama",
    motoyama: "keisei-motoyama",
    goko: "keisei-goko",
    tokiwadaira: "keisei-tokiwadaira",
    yahashira: "keisei-yahashira",
    minoridai: "keisei-minoridai",
    matsuto_shinden: "keisei-matsuto-shinden",
    kami_hongo: "keisei-kami-hongo",
    matsuto: "keisei-matsuto",
  },
  /** 京王駅 */
  keio: {
    // 京王線
    sasatsuka: "keio-sasatsuka",
    daitabashi: "keio-daitabashi",
    meidaimae: "keio-meidaimae",
    shimotakaido: "keio-shimotakaido",
    sakurajosui: "keio-sakurajosui",
    kami_kitazawa: "keio-kami-kitazawa",
    yawatayama: "keio-yawatayama",
    roka_koen: "keio-roka-koen",
    chitose_karasuyama: "keio-chitose-karasuyama",
    senkawa: "keio-senkawa",
    tsutsujigaoka: "keio-tsutsujigaoka",
    sibasaki: "keio-sibasaki",
    kokuryo: "keio-kokuryo",
    fuda: "keio-fuda",
    chofu: "keio-chofu",
    nishi_chofu: "keio-nishi-chofu",
    tobitakyu: "keio-tobitakyu",
    musashinodai: "keio-musashinodai",
    tamareien: "keio-tamareien",
    higashi_fuchu: "keio-higashi-fuchu",
    fuchu: "keio-fuchu",
    nakakawahara: "keio-nakakawahara",
    seiseki_sakuragaoka: "keio-seiseki-sakuragaoka",
    mogusaen: "keio-mogusaen",
    takahatafudo: "keio-takahatafudo",
    minamidaira: "keio-minamidaira",
    hirayamajoshikoen: "keio-hira-yamajoshikoen",
    naganuma: "keio-naganuma",
    kitano: "keio-kitano",
    keio_hachioji: "keio-keio-hachioji",
    // 京王新線
    hatsudai: "keio-hatsudai",
    hatagaya: "keio-hata-gaya",
    // 井の頭線
    shinsen: "keio-shinsen",
    komaba_todaimae: "keio-komaba-todaimae",
    ikenoue: "keio-ikenoue",
    shindaita: "keio-shindaita",
    higashi_matsubara: "keio-higashi-matsubara",
    eifukucho: "keio-eifukucho",
    nishi_eifuku: "keio-nishi-eifuku",
    hamadayama: "keio-hamadayama",
    takaido: "keio-takaido",
    fujimigaoka: "keio-fujimigaoka",
    kugayama: "keio-kugayama",
    mitakadai: "keio-mitakadai",
    inokashirakoen: "keio-inokashirakoen",
  },
  jr_tokai: {
    mishima: "mishima",
    shinfuji: "jr-tokai-shinfuji",
    shizuoka: "shizuoka",
    kakegawa: "kakegawa",
    hamamatsu: "hamamatsu",
    toyohashi: "toyohashi",
    mikawaanjo: "mikawaanjo",
    nagoya: "nagoya",
    gifuhashima: "gifuhashima",
    maibara: "maibara",
    kyoto: "kyoto",
    shinosaka: "shin-osaka",
  }
};
