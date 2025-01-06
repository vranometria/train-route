import { LINES } from "@/constants/lines";
import type { KindDef } from "./kind-def";
import { StationModel } from "./station-model";

export class LineViewModel {
  lineName: string;
  companyName: string;
  kinds: KindDef[];
  stations: StationModel[];

  constructor(lineId: string){
    const line = LINES[lineId];
    this.lineName = line.name;
    this.companyName = line.company;
    this.kinds = line.kinds;
    this.stations = line.stations.map(x=> new StationModel(x));
  }
}
