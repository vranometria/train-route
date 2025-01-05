import type { KindDef } from "./kind-def";
import { StopStationDef } from "./stop-station-def";

/**
 * 路線定義クラス
 */
export class Line {
  name: string
  company: string
  kinds: KindDef[]
  stations: StopStationDef[]
  constructor(name: string, company: string, kinds: KindDef[], stations: StopStationDef[]){
    this.name = name;
    this.company = company;
    this.kinds = kinds;
    this.stations = stations;
  }
}
