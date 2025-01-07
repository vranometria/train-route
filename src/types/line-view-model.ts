import { LINES } from "@/constants/lines";
import type { KindDef } from "./kind-def";
import { StationModel } from "./station-model";
import type { Component } from "vue";
import { getOverlay, getUnderlay } from "@/util";

export class LineViewModel {
  lineName: string;
  companyName: string;
  kinds: KindDef[];
  stations: StationModel[];
  overlay: Component|null = null;
  underlay: Component|null = null;

  constructor(lineId: string){
    const line = LINES[lineId];
    this.lineName = line.name;
    this.companyName = line.company;
    this.kinds = line.kinds;
    this.stations = line.stations.map(x=> new StationModel(x));
    this.overlay = getOverlay(lineId);
    this.underlay = getUnderlay(lineId);
  }
}
