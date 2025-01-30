import type { StopStationDef } from "./stop-station-def";

export class Branch {
  stations: StopStationDef[][];
  constructor(stations: StopStationDef[][]){
    this.stations = stations;
  }
}
