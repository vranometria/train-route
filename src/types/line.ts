import type { KindDef } from "./kind-def";
import type { StopStaDef } from "./stop-station-def";

/**
 * 路線定義クラス
 */
export class Line {
  name: string
  company: string
  kinds: KindDef[]
  stations: StopStaDef[]
  constructor(name: string, company: string, kinds: KindDef[], stations: StopStaDef[]){
    this.name = name;
    this.company = company;
    this.kinds = kinds;
    this.stations = stations;
  }
}
