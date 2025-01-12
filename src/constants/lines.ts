import { Line } from '@/types/line'
import { LINE_IDS, STATION_IDS } from './ids'
import { KindDef } from '@/types/kind-def'
import { StopStationDef } from '@/types/stop-station-def'

const LOCAL_ONLY:KindDef[] = [];

/** 路線定義 */
export const LINES = {
  [LINE_IDS.jr_sotetsu_chokutsu]: new Line('相鉄直通線', 'JR東日本・相模鉄道', [], [
    new StopStationDef(STATION_IDS.jr_east.shinjuku),
    new StopStationDef(STATION_IDS.jr_east.shibuya),
    new StopStationDef(STATION_IDS.jr_east.ebisu),
    new StopStationDef(STATION_IDS.jr_east.osaki),
    new StopStationDef(STATION_IDS.jr_east.nishioi),
    new StopStationDef(STATION_IDS.jr_east.musashikosugi),
    new StopStationDef(STATION_IDS.sagami.hazawayokohamakokudai),
    new StopStationDef(STATION_IDS.sagami.nishiya),
    new StopStationDef(STATION_IDS.sagami.tsurugamine),
    new StopStationDef(STATION_IDS.sagami.futamatagawa),
    new StopStationDef(STATION_IDS.sagami.kibougaoka),
    new StopStationDef(STATION_IDS.sagami.mitsukyo),
    new StopStationDef(STATION_IDS.sagami.seya),
    new StopStationDef(STATION_IDS.odakyu.yamato),
    new StopStationDef(STATION_IDS.odakyu.sagamiono),
    new StopStationDef(STATION_IDS.sagami.sagamiotsuka),
    new StopStationDef(STATION_IDS.sagami.kashiwadai),
    new StopStationDef(STATION_IDS.sagami.ebina),
  ]),
  [LINE_IDS.jr_east.tokaido]: new Line('東海道本線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.tokyo, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.shinbashi, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.shinagawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.kawasaki, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.yokohama, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.totsuka, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.ofuna, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.hujisawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.tsujido, []),
    new StopStationDef(STATION_IDS.jr_east.chigasaki, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.hiratsuka, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.oiso, []),
    new StopStationDef(STATION_IDS.jr_east.ninomiya, []),
    new StopStationDef(STATION_IDS.jr_east.kozu, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.kamonomiya, []),
    new StopStationDef(STATION_IDS.jr_east.odawara, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.hayakawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.nebukawa, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.manazuru, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.yugawara, ["acty"]),
    new StopStationDef(STATION_IDS.jr_east.atami, ["acty"]),
  ]),
  [LINE_IDS.jr_east.keihin_touhoku]: new Line('京浜東北線', 'JR東日本', [new KindDef('快速', 'rapid')],[
      new StopStationDef(STATION_IDS.jr_east.omiya, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.saitama_shintoshin, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.yono, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.urawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.minami_urawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.warabi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.nishikawaguchi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kawaguti, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.akahane, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.higashijujo, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.ouji, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kaminakazato, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tabata, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.nishinippori),
      new StopStationDef(STATION_IDS.jr_east.nippori),
      new StopStationDef(STATION_IDS.jr_east.uguisudani),
      new StopStationDef(STATION_IDS.jr_east.ueno, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.okachimachi),
      new StopStationDef(STATION_IDS.jr_east.akihabara, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kanda, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tokyo, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.yurakucho),
      new StopStationDef(STATION_IDS.jr_east.shinbashi),
      new StopStationDef(STATION_IDS.jr_east.hamamatsucho, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tamachi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.takanawa_gateway, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.shinagawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.oimachi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.omori, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kamata, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.kawasaki, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.tsurumi, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.shinkoyasu, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.higashikanagawa, ["rapid"]),
      new StopStationDef(STATION_IDS.jr_east.yokohama, ["rapid"]),
  ]),
  [LINE_IDS.jr_east.yamanote]: new Line('山手線', 'JR東日本', [], [
      new StopStationDef(STATION_IDS.jr_east.shinagawa, []),
      new StopStationDef(STATION_IDS.jr_east.takanawa_gateway, []),
      new StopStationDef(STATION_IDS.jr_east.tamachi, []),
      new StopStationDef(STATION_IDS.jr_east.hamamatsucho, []),
      new StopStationDef(STATION_IDS.jr_east.shinbashi, []),
      new StopStationDef(STATION_IDS.jr_east.yurakucho, []),
      new StopStationDef(STATION_IDS.jr_east.tokyo, []),
      new StopStationDef(STATION_IDS.jr_east.kanda, []),
      new StopStationDef(STATION_IDS.jr_east.akihabara, []),
      new StopStationDef(STATION_IDS.jr_east.okachimachi, []),
      new StopStationDef(STATION_IDS.jr_east.ueno, []),
      new StopStationDef(STATION_IDS.jr_east.uguisudani, []),
      new StopStationDef(STATION_IDS.jr_east.nippori, []),
      new StopStationDef(STATION_IDS.jr_east.nishinippori, []),
      new StopStationDef(STATION_IDS.jr_east.tabata, []),
      new StopStationDef(STATION_IDS.jr_east.komagome, []),
      new StopStationDef(STATION_IDS.jr_east.sugamo, []),
      new StopStationDef(STATION_IDS.jr_east.otsuka, []),
      new StopStationDef(STATION_IDS.jr_east.ikebukuro, []),
      new StopStationDef(STATION_IDS.jr_east.mejiro, []),
      new StopStationDef(STATION_IDS.jr_east.takadanobaba, []),
      new StopStationDef(STATION_IDS.jr_east.shinokubo, []),
      new StopStationDef(STATION_IDS.jr_east.shinjuku, []),
      new StopStationDef(STATION_IDS.jr_east.yoyogi, []),
      new StopStationDef(STATION_IDS.jr_east.harajuku, []),
      new StopStationDef(STATION_IDS.jr_east.shibuya, []),
      new StopStationDef(STATION_IDS.jr_east.ebisu, []),
      new StopStationDef(STATION_IDS.jr_east.meguro, []),
      new StopStationDef(STATION_IDS.jr_east.gotanda, []),
      new StopStationDef(STATION_IDS.jr_east.osaki, []),
  ]),
  [LINE_IDS.jr_east.yokohama]: new Line('横浜線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.hachiouji, []),
    new StopStationDef(STATION_IDS.jr_east.katakura, []),
    new StopStationDef(STATION_IDS.jr_east.hachiouji_minamino, []),
    new StopStationDef(STATION_IDS.jr_east.aihara, []),
    new StopStationDef(STATION_IDS.jr_east.hashimoto, []),
    new StopStationDef(STATION_IDS.jr_east.sagamihara, []),
    new StopStationDef(STATION_IDS.jr_east.huchinobe, []),
    new StopStationDef(STATION_IDS.jr_east.kobuchi, []),
    new StopStationDef(STATION_IDS.jr_east.machida, []),
    new StopStationDef(STATION_IDS.jr_east.naruse, []),
    new StopStationDef(STATION_IDS.jr_east.nagatsuta, []),
    new StopStationDef(STATION_IDS.jr_east.tokaichiba, []),
    new StopStationDef(STATION_IDS.jr_east.nakayama, []),
    new StopStationDef(STATION_IDS.jr_east.kamoi, []),
    new StopStationDef(STATION_IDS.jr_east.kodukue, []),
    new StopStationDef(STATION_IDS.jr_east.shinyokohama, []),
    new StopStationDef(STATION_IDS.jr_east.kikuna, []),
    new StopStationDef(STATION_IDS.jr_east.oguchi, []),
    new StopStationDef(STATION_IDS.jr_east.higashi_kanagawa, []),
    new StopStationDef(STATION_IDS.jr_east.yokohama, []),
    new StopStationDef(STATION_IDS.jr_east.sakuragicho, []),
    new StopStationDef(STATION_IDS.jr_east.kannai, []),
    new StopStationDef(STATION_IDS.jr_east.ishikawacho, []),
    new StopStationDef(STATION_IDS.jr_east.yokohama, []),
    new StopStationDef(STATION_IDS.jr_east.negishi, []),
    new StopStationDef(STATION_IDS.jr_east.isogo, []),
    new StopStationDef(STATION_IDS.jr_east.shin_sugita, []),
    new StopStationDef(STATION_IDS.jr_east.youkoudai, []),
    new StopStationDef(STATION_IDS.jr_east.kounandai, []),
    new StopStationDef(STATION_IDS.jr_east.hongoudai, []),
    new StopStationDef(STATION_IDS.jr_east.ofuna, []),
  ]),
  [LINE_IDS.jr_east.negishi]: new Line('根岸線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.yokohama, []),
    new StopStationDef(STATION_IDS.jr_east.sakuragicho, []),
    new StopStationDef(STATION_IDS.jr_east.kannai, []),
    new StopStationDef(STATION_IDS.jr_east.ishikawacho, []),
    new StopStationDef(STATION_IDS.jr_east.yamate, []),
    new StopStationDef(STATION_IDS.jr_east.negishi, []),
    new StopStationDef(STATION_IDS.jr_east.isogo, []),
    new StopStationDef(STATION_IDS.jr_east.shin_sugita, []),
    new StopStationDef(STATION_IDS.jr_east.youkoudai, []),
    new StopStationDef(STATION_IDS.jr_east.kounandai, []),
    new StopStationDef(STATION_IDS.jr_east.hongoudai, []),
    new StopStationDef(STATION_IDS.jr_east.ofuna, []),
  ]),
  [LINE_IDS.jr_east.chuo]: new Line('中央線', 'JR東日本', [new KindDef("快速", "rapid")], [
    new StopStationDef(STATION_IDS.jr_east.tokyo, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.kanda),
    new StopStationDef(STATION_IDS.jr_east.ochanomizu),
    new StopStationDef(STATION_IDS.jr_east.yotsuya),
    new StopStationDef(STATION_IDS.jr_east.shinjuku),
    new StopStationDef(STATION_IDS.jr_east.nakano, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.kouenji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.asagaya, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.ogikubo, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.nishiogikubo, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.kichijoji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.mitaka, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.musashisakai, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.higashikoganei, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.musashikoganei, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.kokubunji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.nishikokubunji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.kunitachi, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.tachikawa, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.hino, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.toyoda, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.hachiouji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.nishihachiouji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.takao, ["rapid"]),
  ]),
  [LINE_IDS.jr_east.sobu]: new Line('総武線', 'JR東日本', LOCAL_ONLY, [
    new StopStationDef(STATION_IDS.jr_east.mitaka, []),
    new StopStationDef(STATION_IDS.jr_east.kichijoji),
    new StopStationDef(STATION_IDS.jr_east.nishiogikubo),
    new StopStationDef(STATION_IDS.jr_east.ogikubo),
    new StopStationDef(STATION_IDS.jr_east.asagaya),
    new StopStationDef(STATION_IDS.jr_east.kouenji),
    new StopStationDef(STATION_IDS.jr_east.nakano),
    new StopStationDef(STATION_IDS.jr_east.higashinakano),
    new StopStationDef(STATION_IDS.jr_east.okubo),
    new StopStationDef(STATION_IDS.jr_east.shinjuku),
    new StopStationDef(STATION_IDS.jr_east.yoyogi),
    new StopStationDef(STATION_IDS.jr_east.sendagaya),
    new StopStationDef(STATION_IDS.jr_east.shinanomachi),
    new StopStationDef(STATION_IDS.jr_east.yotsuya),
    new StopStationDef(STATION_IDS.jr_east.ichigaya),
    new StopStationDef(STATION_IDS.jr_east.iidabashi),
    new StopStationDef(STATION_IDS.jr_east.suidoubashi),
    new StopStationDef(STATION_IDS.jr_east.ochanomizu),
    new StopStationDef(STATION_IDS.jr_east.akihabara),
    new StopStationDef(STATION_IDS.jr_east.asakusabashi),
    new StopStationDef(STATION_IDS.jr_east.ryogoku),
    new StopStationDef(STATION_IDS.jr_east.kinshicho),
    new StopStationDef(STATION_IDS.jr_east.kameido),
    new StopStationDef(STATION_IDS.jr_east.hirai),
    new StopStationDef(STATION_IDS.jr_east.shinkoiwa),
    new StopStationDef(STATION_IDS.jr_east.koiwa),
    new StopStationDef(STATION_IDS.jr_east.ichikawa),
    new StopStationDef(STATION_IDS.jr_east.motoyawata),
    new StopStationDef(STATION_IDS.jr_east.shimousa_nakayama),
    new StopStationDef(STATION_IDS.jr_east.nishifunabashi),
    new StopStationDef(STATION_IDS.jr_east.funabashi),
    new StopStationDef(STATION_IDS.jr_east.higashi_funabashi),
    new StopStationDef(STATION_IDS.jr_east.tsudanuma),
    new StopStationDef(STATION_IDS.jr_east.makuharihongou),
    new StopStationDef(STATION_IDS.jr_east.makuhari),
    new StopStationDef(STATION_IDS.jr_east.shinkemigawa),
    new StopStationDef(STATION_IDS.jr_east.inage),
    new StopStationDef(STATION_IDS.jr_east.nishichiba),
    new StopStationDef(STATION_IDS.jr_east.chiba),
  ]),
  [LINE_IDS.jr_east.sobu_kaisoku]: new Line('総武快速線', 'JR東日本', LOCAL_ONLY, [
    new StopStationDef(STATION_IDS.jr_east.chiba),
    new StopStationDef(STATION_IDS.jr_east.inage),
    new StopStationDef(STATION_IDS.jr_east.tsudanuma),
    new StopStationDef(STATION_IDS.jr_east.funabashi),
    new StopStationDef(STATION_IDS.jr_east.ichikawa),
    new StopStationDef(STATION_IDS.jr_east.shinkoiwa),
    new StopStationDef(STATION_IDS.jr_east.kinshicho),
    new StopStationDef(STATION_IDS.jr_east.bakurocho),
    new StopStationDef(STATION_IDS.jr_east.shinnihonbashi),
    new StopStationDef(STATION_IDS.jr_east.tokyo),
  ]),
  [LINE_IDS.jr_east.yokosuka]: new Line('横須賀線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.tokyo),
    new StopStationDef(STATION_IDS.jr_east.shinbashi),
    new StopStationDef(STATION_IDS.jr_east.shinagawa),
    new StopStationDef(STATION_IDS.jr_east.nishioi),
    new StopStationDef(STATION_IDS.jr_east.musashikosugi),
    new StopStationDef(STATION_IDS.jr_east.shinkawasaki),
    new StopStationDef(STATION_IDS.jr_east.yokohama),
    new StopStationDef(STATION_IDS.jr_east.hodogaya),
    new StopStationDef(STATION_IDS.jr_east.higashitotsuka),
    new StopStationDef(STATION_IDS.jr_east.totsuka),
    new StopStationDef(STATION_IDS.jr_east.ofuna),
    new StopStationDef(STATION_IDS.jr_east.kitakamakura),
    new StopStationDef(STATION_IDS.jr_east.kamakura),
    new StopStationDef(STATION_IDS.jr_east.zushi),
    new StopStationDef(STATION_IDS.jr_east.higashizushi),
    new StopStationDef(STATION_IDS.jr_east.taura),
    new StopStationDef(STATION_IDS.jr_east.yokosuka),
    new StopStationDef(STATION_IDS.jr_east.kinugasa),
    new StopStationDef(STATION_IDS.jr_east.kurihama),
  ]),
  // [LINE_IDS.jr_east.kawagoe]: {
  //   name: '川越線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  [LINE_IDS.jr_east.saikyou]: new Line('埼京線', 'JR東日本', [new KindDef("快速","rapid"), new KindDef("通勤快速", "commuter")], [
    new StopStationDef(STATION_IDS.jr_east.osaki, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.ebisu, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.shibuya, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.shinjuku, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.ikebukuro, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.itabashi, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.jujo, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.akahane, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.kitaakahane),
    new StopStationDef(STATION_IDS.jr_east.ukimafunado),
    new StopStationDef(STATION_IDS.jr_east.todakouen, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.toda),
    new StopStationDef(STATION_IDS.jr_east.kitatoda),
    new StopStationDef(STATION_IDS.jr_east.musashiurawa, ["rapid", "commuter"]),
    new StopStationDef(STATION_IDS.jr_east.nakaurawa, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.minamiyono, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.yonohonmachi, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.kitayono, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_east.omiya, ["rapid", "commuter"]),
  ]),
  [LINE_IDS.jr_east.shonan_shinjuku]: new Line('湘南新宿ライン', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.utsunomiya),
    new StopStationDef(STATION_IDS.jr_east.suzumenomiya),
    new StopStationDef(STATION_IDS.jr_east.ishibashi),
    new StopStationDef(STATION_IDS.jr_east.jichiidai),
    new StopStationDef(STATION_IDS.jr_east.koganei),
    new StopStationDef(STATION_IDS.jr_east.oyama),
    new StopStationDef(STATION_IDS.jr_east.mamada),
    new StopStationDef(STATION_IDS.jr_east.nogi),
    new StopStationDef(STATION_IDS.jr_east.ofuna),
    new StopStationDef(STATION_IDS.jr_east.koga),
    new StopStationDef(STATION_IDS.jr_east.kurihashi),
    new StopStationDef(STATION_IDS.jr_east.higashiwashinomiya),
    new StopStationDef(STATION_IDS.jr_east.kuki),
    new StopStationDef(STATION_IDS.jr_east.shinshiraoka),
    new StopStationDef(STATION_IDS.jr_east.shiraoka),
    new StopStationDef(STATION_IDS.jr_east.hasuda),
    new StopStationDef(STATION_IDS.jr_east.higashiomiya),
    new StopStationDef(STATION_IDS.jr_east.toro),
    new StopStationDef(STATION_IDS.jr_east.maebashi),
    new StopStationDef(STATION_IDS.jr_east.shinmaebashi),
    new StopStationDef(STATION_IDS.jr_east.ino),
    new StopStationDef(STATION_IDS.jr_east.takasakitonyamachi),
    new StopStationDef(STATION_IDS.jr_east.takasaki),
    new StopStationDef(STATION_IDS.jr_east.kuragano),
    new StopStationDef(STATION_IDS.jr_east.shinmachi),
    new StopStationDef(STATION_IDS.jr_east.jinbohara),
    new StopStationDef(STATION_IDS.jr_east.honnjou),
    new StopStationDef(STATION_IDS.jr_east.okabe),
    new StopStationDef(STATION_IDS.jr_east.hukaya),
    new StopStationDef(STATION_IDS.jr_east.kagohara),
    new StopStationDef(STATION_IDS.jr_east.kumagaya),
    new StopStationDef(STATION_IDS.jr_east.gyouda),
    new StopStationDef(STATION_IDS.jr_east.hukiage),
    new StopStationDef(STATION_IDS.jr_east.kitakounosu),
    new StopStationDef(STATION_IDS.jr_east.kounosu),
    new StopStationDef(STATION_IDS.jr_east.kitamoto),
    new StopStationDef(STATION_IDS.jr_east.okegawa),
    new StopStationDef(STATION_IDS.jr_east.kitaageo),
    new StopStationDef(STATION_IDS.jr_east.ageo),
    new StopStationDef(STATION_IDS.jr_east.miyahara),
    new StopStationDef(STATION_IDS.jr_east.omiya),
    new StopStationDef(STATION_IDS.jr_east.urawa),
    new StopStationDef(STATION_IDS.jr_east.akahane),
    new StopStationDef(STATION_IDS.jr_east.ikebukuro),
    new StopStationDef(STATION_IDS.jr_east.shinjuku),
    new StopStationDef(STATION_IDS.jr_east.shibuya),
    new StopStationDef(STATION_IDS.jr_east.ebisu),
    new StopStationDef(STATION_IDS.jr_east.osaki),
    new StopStationDef(STATION_IDS.jr_east.nishioi),
    new StopStationDef(STATION_IDS.jr_east.musashikosugi),
    new StopStationDef(STATION_IDS.jr_east.shinkawasaki),
    new StopStationDef(STATION_IDS.jr_east.yokohama),
    new StopStationDef(STATION_IDS.jr_east.hodogaya),
    new StopStationDef(STATION_IDS.jr_east.higashitotsuka),
    new StopStationDef(STATION_IDS.jr_east.totsuka),
    new StopStationDef(STATION_IDS.jr_east.ofuna),
    new StopStationDef(STATION_IDS.jr_east.kitakamakura),
    new StopStationDef(STATION_IDS.jr_east.kamakura),
    new StopStationDef(STATION_IDS.jr_east.zushi),
    new StopStationDef(STATION_IDS.jr_east.hujisawa),
    new StopStationDef(STATION_IDS.jr_east.tsujido),
    new StopStationDef(STATION_IDS.jr_east.chigasaki),
    new StopStationDef(STATION_IDS.jr_east.hiratsuka),
    new StopStationDef(STATION_IDS.jr_east.oiso),
    new StopStationDef(STATION_IDS.jr_east.ninomiya),
    new StopStationDef(STATION_IDS.jr_east.kozu),
    new StopStationDef(STATION_IDS.jr_east.kamonomiya),
    new StopStationDef(STATION_IDS.jr_east.odawara),
  ]),
  [LINE_IDS.jr_east.takasaki]: new Line('高崎線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.utunomiya]: new Line('宇都宮線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.musashino]: new Line('武蔵野線', 'JR東日本', [], []),
  // [LINE_IDS.jr_east.keiyou]: new Line('京葉線', 'JR東日本', [], []),
  [LINE_IDS.jr_east.nanbu]: new Line('南武線', 'JR東日本', [], []),
  // [LINE_IDS.jr_east.tokiwa]: {
  //   name: '常盤線',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.saitama_shintoshi.new_shuttle]: {
  //   name: 'ニューシャトル',
  //   company: 'JR東日本',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.toubu.urban_park_line]: {
  //   name: 'アーバンパークライン',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.akita]: {
  //   name: '秋田新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.hayabusa]: {
  //   name: '新幹線はやぶさ',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.hokuriku]: {
  //   name: '北陸新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  [LINE_IDS.jr_east.shinkansen.tokaido]: new Line('東海道新幹線', 'JR東日本', [
    new KindDef("こだま", "rapid"),
    new KindDef("ひかり", "semi-express"),
    new KindDef("のぞみ", "express"),
  ], [
    new StopStationDef(STATION_IDS.jr_east.tokyo, ["rapid", "semi-express", "express"]),
    new StopStationDef(STATION_IDS.jr_east.shinagawa, ["rapid", "semi-express", "express"]),
    new StopStationDef(STATION_IDS.jr_east.shinyokohama, ["rapid", "semi-express", "express"]),
    new StopStationDef(STATION_IDS.jr_east.odawara, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_east.atami, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.mishima, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.shinfuji, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_tokai.shizuoka, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.kakegawa, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_tokai.hamamatsu, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.toyohashi, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.mikawaanjo, ["rapid"]),
    new StopStationDef(STATION_IDS.jr_tokai.nagoya, ["rapid", "semi-express", "express"]),
    new StopStationDef(STATION_IDS.jr_tokai.gifuhashima, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.maibara, ["rapid", "semi-express"]),
    new StopStationDef(STATION_IDS.jr_tokai.kyoto, ["rapid", "semi-express", "express"]),
    new StopStationDef(STATION_IDS.jr_tokai.shinosaka, ["rapid", "semi-express", "express"]),
  ]),
  [LINE_IDS.jr_east.shinkansen.jouetsu]: new Line('上越新幹線', 'JR東日本', [], [
    new StopStationDef(STATION_IDS.jr_east.tokyo),
    new StopStationDef(STATION_IDS.jr_east.ueno),
    new StopStationDef(STATION_IDS.jr_east.omiya),
    new StopStationDef(STATION_IDS.jr_east.kumagaya),
    new StopStationDef(STATION_IDS.jr_east.honjo_waseda),
    new StopStationDef(STATION_IDS.jr_east.takasaki),
    new StopStationDef(STATION_IDS.jr_east.joumoukougen),
    new StopStationDef(STATION_IDS.jr_east.echigo_yuzawa),
    new StopStationDef(STATION_IDS.jr_east.ueno),
    new StopStationDef(STATION_IDS.jr_east.gala_yuzawa),
    new StopStationDef(STATION_IDS.jr_east.urasa),
    new StopStationDef(STATION_IDS.jr_east.nagaoka),
    new StopStationDef(STATION_IDS.jr_east.tsubame_sanjo),
    new StopStationDef(STATION_IDS.jr_east.niigata),
  ]),
  // [LINE_IDS.jr_east.shinkansen.tohoku]: {
  //   name: '東北新幹線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.jr_east.shinkansen.yamagata]: {
  //   name: '山形新幹線',
  //   kinds: [],
  //   stations: [],
  // },

  // 東京メトロ
  [LINE_IDS.tokyo_metro.hibiya]: new Line('日比谷線', '東京メトロ', [], [
    new StopStationDef(STATION_IDS.tokyo_metro.nakameguro),
    new StopStationDef(STATION_IDS.jr_east.ebisu),
    new StopStationDef(STATION_IDS.tokyo_metro.hiroo),
    new StopStationDef(STATION_IDS.tokyo_metro.roppongi),
    new StopStationDef(STATION_IDS.tokyo_metro.kamiyacho),
    new StopStationDef(STATION_IDS.tokyo_metro.toranomon_hills),
    new StopStationDef(STATION_IDS.tokyo_metro.kasumigaseki),
    new StopStationDef(STATION_IDS.tokyo_metro.hibiya),
    new StopStationDef(STATION_IDS.tokyo_metro.ginza),
    new StopStationDef(STATION_IDS.tokyo_metro.higashiginza),
    new StopStationDef(STATION_IDS.tokyo_metro.tsukiji),
    new StopStationDef(STATION_IDS.jr_east.hacchobori),
    new StopStationDef(STATION_IDS.tokyo_metro.kayabacho),
    new StopStationDef(STATION_IDS.tokyo_metro.ningyocho),
    new StopStationDef(STATION_IDS.tokyo_metro.kodenmacho),
    new StopStationDef(STATION_IDS.jr_east.akihabara),
    new StopStationDef(STATION_IDS.tokyo_metro.nakaokachimachi),
    new StopStationDef(STATION_IDS.jr_east.ueno),
    new StopStationDef(STATION_IDS.tokyo_metro.iriya),
    new StopStationDef(STATION_IDS.tokyo_metro.minowa),
    new StopStationDef(STATION_IDS.tokyo_metro.minamisenju),
    new StopStationDef(STATION_IDS.tokyo_metro.kitasenju),
  ]),
  [LINE_IDS.tokyo_metro.marunouchi]: new Line('丸ノ内線', '東京メトロ', [], [
    new StopStationDef(STATION_IDS.jr_east.ikebukuro),
    new StopStationDef(STATION_IDS.tokyo_metro.shinotuka),
    new StopStationDef(STATION_IDS.tokyo_metro.myogadani),
    new StopStationDef(STATION_IDS.tokyo_metro.kourakuen),
    new StopStationDef(STATION_IDS.tokyo_metro.hongosanchome),
    new StopStationDef(STATION_IDS.jr_east.ochanomizu),
    new StopStationDef(STATION_IDS.tokyo_metro.awajicho),
    new StopStationDef(STATION_IDS.tokyo_metro.otemachi),
    new StopStationDef(STATION_IDS.jr_east.tokyo),
    new StopStationDef(STATION_IDS.tokyo_metro.ginza),
    new StopStationDef(STATION_IDS.tokyo_metro.kasumigaseki),
    new StopStationDef(STATION_IDS.tokyo_metro.kokkaigijidomae),
    new StopStationDef(STATION_IDS.tokyo_metro.akasakamitsuke),
    new StopStationDef(STATION_IDS.jr_east.yotsuya),
    new StopStationDef(STATION_IDS.tokyo_metro.yotsuya_sanchome),
    new StopStationDef(STATION_IDS.tokyo_metro.shinjuku_gyoenmae),
    new StopStationDef(STATION_IDS.tokyo_metro.shinjuku_sanchome),
    new StopStationDef(STATION_IDS.jr_east.shinjuku),
    new StopStationDef(STATION_IDS.tokyo_metro.nishishinjuku),
    new StopStationDef(STATION_IDS.tokyo_metro.nakano_sakaue),
    new StopStationDef(STATION_IDS.tokyo_metro.shinnakano),
    new StopStationDef(STATION_IDS.jr_east.kouenji),
    new StopStationDef(STATION_IDS.tokyo_metro.shinkoenji),
    new StopStationDef(STATION_IDS.tokyo_metro.minamiasagaya),
    new StopStationDef(STATION_IDS.jr_east.ogikubo),
  ]),

  // 相模鉄道
  [LINE_IDS.sagami.honsen]: new Line('相鉄本線', '相模鉄道',
    [new KindDef("快速", "rapid"), new KindDef("特急", "express"), new KindDef("通勤急行", "commuter")],
    [
      new StopStationDef(STATION_IDS.sagami.ebina, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.kashiwadai, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.sagamino, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.odakyu.yamato, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.seya, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.mitsukyo, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.kibougaoka, ["rapid", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.futamatagawa, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.tsurugamine, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.nishiya, ["rapid", "express", "commuter"]),
      new StopStationDef(STATION_IDS.sagami.kamihoshikawa, []),
      new StopStationDef(STATION_IDS.sagami.wadacho, []),
      new StopStationDef(STATION_IDS.sagami.hoshikawa, ["rapid"]),
      new StopStationDef(STATION_IDS.sagami.tennocho, []),
      new StopStationDef(STATION_IDS.sagami.nishiyokohama, []),
      new StopStationDef(STATION_IDS.sagami.hiranumabashi, []),
      new StopStationDef(STATION_IDS.jr_east.yokohama, ["rapid", "express", "commuter"]),
    ]
  ),
  [LINE_IDS.sagami.sotetsushinyokohama]: new Line('相鉄新横浜線', '相模鉄道', [], [
    new StopStationDef(STATION_IDS.jr_east.shinyokohama),
    new StopStationDef(STATION_IDS.sagami.hazawayokohamakokudai),
    new StopStationDef(STATION_IDS.tokyu.hiyoshi),
  ]),
  [LINE_IDS.sagami.izumino]: new Line('いずみ野線', '相模鉄道', [], []),


  // 小田急
  [LINE_IDS.odakyu.odawara]: new Line('小田原線', '小田急電鉄', [], []),
  [LINE_IDS.odakyu.enoshima]: new Line('江ノ島線', '小田急電鉄', LOCAL_ONLY, [
    new StopStationDef(STATION_IDS.odakyu.sagamiono, [
      LINE_IDS.odakyu.odawara,
      LINE_IDS.odakyu.enoshima,
    ]),
    new StopStationDef(STATION_IDS.odakyu.higashirinkan),
    new StopStationDef(STATION_IDS.odakyu.chuorinkan),
    new StopStationDef(STATION_IDS.odakyu.minamirinkan),
    new StopStationDef(STATION_IDS.odakyu.tsuruma),
    new StopStationDef(STATION_IDS.odakyu.yamato),
    new StopStationDef(STATION_IDS.odakyu.sakuragaoka),
    new StopStationDef(STATION_IDS.odakyu.kouzashibuya),
    new StopStationDef(STATION_IDS.odakyu.chogo),
    new StopStationDef(STATION_IDS.odakyu.shonandai),
    new StopStationDef(STATION_IDS.odakyu.mutsuainichidaimae),
    new StopStationDef(STATION_IDS.odakyu.zengyo),
    new StopStationDef(STATION_IDS.odakyu.fujisawahonmachi),
    new StopStationDef(STATION_IDS.jr_east.hujisawa),
    new StopStationDef(STATION_IDS.odakyu.kugenuma),
    new StopStationDef(STATION_IDS.odakyu.honkugenuma),
    new StopStationDef(STATION_IDS.odakyu.kugenumakaigan),
    new StopStationDef(STATION_IDS.odakyu.kataseenoshima),
  ]),
  [LINE_IDS.odakyu.odawara]: new Line('小田原線', '小田急電鉄', [
    new KindDef("快速急行", "rapid"),
    new KindDef("急行", "express"),
    new KindDef("準急", "semi-express"),
    new KindDef("通勤急行", "commuter"),
    new KindDef("通勤準急", "semi-commuter"),
  ], [
    new StopStationDef(STATION_IDS.jr_east.shinjuku, ["rapid", "express", "commuter"]),
    new StopStationDef(STATION_IDS.odakyu.minamishinjuku),
    new StopStationDef(STATION_IDS.odakyu.sangubashi),
    new StopStationDef(STATION_IDS.odakyu.yoyogihachiman),
    new StopStationDef(STATION_IDS.odakyu.yoyogiuehara, ["rapid", "express", "semi-express", "commuter", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.higashikitazawa),
    new StopStationDef(STATION_IDS.odakyu.shimokitazawa, ["rapid", "express", "semi-express", "commuter", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.setagayadaita),
    new StopStationDef(STATION_IDS.odakyu.umegaoka),
    new StopStationDef(STATION_IDS.odakyu.gotokuji),
    new StopStationDef(STATION_IDS.odakyu.sagamiono),
    new StopStationDef(STATION_IDS.odakyu.kyodo, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.chitosefunabashi, ["semi-express"]),
    new StopStationDef(STATION_IDS.odakyu.soshigayaokura, ["semi-express"]),
    new StopStationDef(STATION_IDS.odakyu.seijogakuenmae, ["semi-express", "commuter", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.kitami),
    new StopStationDef(STATION_IDS.odakyu.komae, ["semi-express"]),
    new StopStationDef(STATION_IDS.odakyu.izumitamagawa),
    new StopStationDef(STATION_IDS.jr_east.noborito, ["rapid", "express", "semi-express", "commuter", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.mukougaokayuen, ["semi-express", "commuter"]),
    new StopStationDef(STATION_IDS.odakyu.ikuta, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.yomiuri_land_mae, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.yurigaoka, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.shinyurigaoka, ["rapid", "express", "semi-express", "commuter", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.kakio, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.tsurukawa, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.tamagawagakuenmae, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.jr_east.machida, ["rapid", "express", "semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.sagamiono, ["rapid", "express", "semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.odakyusagamihara, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.musashidaimae, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.soubudaimae, ["semi-express"]),
    new StopStationDef(STATION_IDS.odakyu.zama, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.ebina, ["rapid", "express", "semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.jr_east.atsugi, ["semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.honatsugi, ["rapid", "express", "semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.aikouishida, ["rapid", "express", "semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.isehara, ["rapid", "express", "semi-express", "semi-commuter"]),
    new StopStationDef(STATION_IDS.odakyu.tsurumakionsen, ["rapid", "express"]),
    new StopStationDef(STATION_IDS.odakyu.toukaidaigakumae, ["rapid", "express"]),
    new StopStationDef(STATION_IDS.odakyu.hadano, ["rapid", "express"]),
    new StopStationDef(STATION_IDS.odakyu.shibusawa, ["rapid", "express"]),
    new StopStationDef(STATION_IDS.odakyu.shinmatsuda, ["rapid", "express"]),
    new StopStationDef(STATION_IDS.odakyu.kaisei, ["express"]),
    new StopStationDef(STATION_IDS.odakyu.kayama),
    new StopStationDef(STATION_IDS.odakyu.tomizu),
    new StopStationDef(STATION_IDS.odakyu.hotaruda),
    new StopStationDef(STATION_IDS.odakyu.ashigara),
    new StopStationDef(STATION_IDS.jr_east.odawara, ["rapid", "express"]),
  ]),
  // // 東京都交通局
  // [LINE_IDS.tokyo_koutsu_kyoku.oedo]: {
  //   name: '大江戸線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.tokyo_koutsu_kyoku.shinjuku]: {
  //   name: '新宿線',
  //   kinds: [],
  //   stations: [],
  // },
  // 都営地下鉄
  [LINE_IDS.tokyo_subway.asakusa]: new Line('浅草線', '東京都営地下鉄', [], []),
  // // 京王電鉄
  // [LINE_IDS.keiou.keiou]: {
  //   name: '京王線',
  //   kinds: [],
  //   stations: [],
  // },
  // [LINE_IDS.keiou.keioushinsen]: {
  //   name: '京王新線',
  //   kinds: [],
  //   stations: [],
  // },
  [LINE_IDS.enoshima.enoshima]: new Line('江ノ島電鉄線', '江ノ島電鉄', [], []),
  [LINE_IDS.shonam_monorail.shonan_monorail]: new Line('湘南モノレール', '湘南モノレール', [], []),
  // 東急
  [LINE_IDS.tokyu.toyoko]: new Line('東横線', '東急電鉄', [], []),
  [LINE_IDS.tokyu.meguro]: new Line('目黒線', '東急電鉄', [], []),
  [LINE_IDS.tokyu.ikegami]: new Line('池上線', '東急電鉄', [], []),
  [LINE_IDS.tokyu.tamagawa]: new Line('多摩川線', '東急電鉄', LOCAL_ONLY, [
    new StopStationDef(STATION_IDS.tokyu.tamagawa),
    new StopStationDef(STATION_IDS.tokyu.numabe),
    new StopStationDef(STATION_IDS.tokyu.unoki),
    new StopStationDef(STATION_IDS.tokyu.simomaruko),
    new StopStationDef(STATION_IDS.tokyu.musashishinden),
    new StopStationDef(STATION_IDS.tokyu.yagutiwatashi),
    new StopStationDef(STATION_IDS.jr_east.kamata),
  ]),
  [LINE_IDS.tokyu.denentoshi]: new Line('田園都市線', '東急電鉄',
    [
      new KindDef("急行", "express"),
      new KindDef("準急", "semi-express")
    ],
    [
      new StopStationDef(STATION_IDS.jr_east.shibuya, ["express", "semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.ikejiriohashi, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.sangenjaya, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.komazawadaigaku, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.sakurashinmachi, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.yoga, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.futakotamagawa, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.futako_shinchi, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.takatsu),
      new StopStationDef(STATION_IDS.jr_east.mizonokuchi, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.kajigaya),
      new StopStationDef(STATION_IDS.tokyu.miyazakidai),
      new StopStationDef(STATION_IDS.tokyu.miyamaedaira),
      new StopStationDef(STATION_IDS.tokyu.washinuma, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tama_plaza, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.azamino, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.eda),
      new StopStationDef(STATION_IDS.tokyu.ichigao),
      new StopStationDef(STATION_IDS.tokyu.fujigaoka),
      new StopStationDef(STATION_IDS.tokyu.aobadai, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tana),
      new StopStationDef(STATION_IDS.jr_east.nagatsuta, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tsukushino, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.suzukakedai, ["semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.minamimachida_grandberry_park, ["express","semi-express"]),
      new StopStationDef(STATION_IDS.tokyu.tsukimino, ["semi-express"]),
      new StopStationDef(STATION_IDS.odakyu.chuorinkan, ["express","semi-express"]),
  ]),
  [LINE_IDS.tokyu.oimachi]: new Line('大井町線', '東急電鉄', [new KindDef("急行・準急", "express")], [
    new StopStationDef(STATION_IDS.jr_east.oimachi, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.shimoshinmei),
    new StopStationDef(STATION_IDS.tokyu.togoshikouen),
    new StopStationDef(STATION_IDS.tokyu.nakanobe),
    new StopStationDef(STATION_IDS.tokyu.ebaracho),
    new StopStationDef(STATION_IDS.tokyu.hatanodai, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.kitasenzoku),
    new StopStationDef(STATION_IDS.tokyu.ookayama, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.midorigaoka),
    new StopStationDef(STATION_IDS.tokyu.jiyugaoka, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.kuhonbutsu),
    new StopStationDef(STATION_IDS.tokyu.oyamadai),
    new StopStationDef(STATION_IDS.tokyu.todoroki),
    new StopStationDef(STATION_IDS.tokyu.kaminoge),
    new StopStationDef(STATION_IDS.tokyu.futakotamagawa, ["express"]),
    new StopStationDef(STATION_IDS.jr_east.mizonokuchi),
  ]),
  /**目黒 */
  [LINE_IDS.tokyu.meguro]: new Line('目黒線', '東急電鉄', [new KindDef("急行・準急", "express")], [
    new StopStationDef(STATION_IDS.jr_east.meguro, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.fudomae),
    new StopStationDef(STATION_IDS.tokyu.musashikoyama, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.nishikoyama),
    new StopStationDef(STATION_IDS.tokyu.senzoku),
    new StopStationDef(STATION_IDS.tokyu.ookayama, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.okuzawa),
    new StopStationDef(STATION_IDS.tokyu.denenchohu, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.tamagawa, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.shinmaruko),
    new StopStationDef(STATION_IDS.jr_east.musashikosugi, ["express"]),
    new StopStationDef(STATION_IDS.tokyu.motosumiyoshi),
    new StopStationDef(STATION_IDS.tokyu.hiyoshi, ["express"]),
  ]),
  /** りんかい線 */
  [LINE_IDS.toukyo_rinkai_kousoku.rinkai]: new Line('りんかい線', '東京臨海高速鉄道', [], []),
}
