import { TrainLine } from "@/types/line";
import { LINE_IDS } from "../line-ids";
import { COMPANIES } from "../companies";
import { STATION_IDS } from "../station-ids";
import { Section } from "@/types/Section";
import { StopStation } from "@/types/stop-station";

export const jr_west_lines = {
  [LINE_IDS.jr_west.ohito]: new TrainLine({
    name: "大糸線(JR西日本)",
    reading: "おおいとせん(じぇいあーるにしにほん)",
    companyId: COMPANIES.jr_west.id,
    sections: [
      new Section([
        new StopStation(STATION_IDS.jr_west.minami_otari),
        new StopStation(STATION_IDS.jr_west.nakatsuchi),
        new StopStation(STATION_IDS.jr_west.kita_otari),
        new StopStation(STATION_IDS.jr_west.hiraiwa),
        new StopStation(STATION_IDS.jr_west.kotaki),
        new StopStation(STATION_IDS.jr_west.nechi),
        new StopStation(STATION_IDS.jr_west.kubiki_ohno),
        new StopStation(STATION_IDS.jr_west.himekawa),
        new StopStation(STATION_IDS.jr_west.itoigawa),
      ]),
    ],
  }),
};
