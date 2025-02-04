import { Station } from "@/types/station-info";
import { STATION_IDS } from "../station-ids";
import { LINE_IDS } from "../line-ids";
import { PREFECTURE as P } from "../prefecture";

export const jr_west_stations = {
  [STATION_IDS.jr_west.nakatsuchi]: new Station({
    name: "中土",
    reading: "なかつち",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_west.ohito],
  }),
  [STATION_IDS.jr_west.kita_otari]: new Station({
    name: "北小谷",
    reading: "きたおたり",
    prefecture: P.NAGANO,
    lines: [LINE_IDS.jr_west.ohito],
  }),
  [STATION_IDS.jr_west.hiraiwa]: new Station({
    name: "平岩",
    reading: "ひらいわ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_west.ohito],
  }),
  [STATION_IDS.jr_west.kotaki]: new Station({
    name: "小滝",
    reading: "こたき",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_west.ohito],
  }),
  [STATION_IDS.jr_west.nechi]: new Station({
    name: "根知",
    reading: "ねち",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_west.ohito],
  }),
  [STATION_IDS.jr_west.kubiki_ohno]: new Station({
    name: "頸城大野",
    reading: "くびきおおの",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_west.ohito],
  }),
  [STATION_IDS.jr_west.himekawa]: new Station({
    name: "姫川",
    reading: "ひめかわ",
    prefecture: P.NIIGATA,
    lines: [LINE_IDS.jr_west.ohito],
  }),
};
