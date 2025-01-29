import { LINES } from "@/constants/lines";
import type { KindDef } from "./kind-def";
import { StationModel } from "./station-model";
import type { Component } from "vue";
import { getOverlay, getUnderlay } from "@/util";
import { COMPANIES } from "@/constants/companies";

class Distination {
  name: string;
  id: string;
  constructor(name: string, id: string){
    this.name = name;
    this.id = id;
  }
}

export class LineViewModel {
  lineName: string;
  companyName: string;
  kinds: KindDef[];
  stations: StationModel[] = [];
  overlay: Component|null = null;
  underlay: Component|null = null;
  distinationList: Distination[] = [];

  constructor(lineId: string){
    const line = LINES[lineId];
    this.lineName = line.name;
    const company = COMPANIES[line.companyId];
    if(!company){
      throw new Error(`Company not found for lineId: ${lineId} ${line.companyId}`);
    }
    this.companyName = company.name ? company.name : line.companyId;

    this.kinds = line.kinds;
    this.stations = line.stations.map(x=> new StationModel(x));
    this.overlay = getOverlay(lineId);
    this.underlay = getUnderlay(lineId);
    this.distinationList = this.sortAlphabetically(this.stations).map(x => new Distination(x.name, x.id));
  }

  sortAlphabetically(array: StationModel[]){
    return array.slice().sort((a, b) => a.pronunciation.localeCompare(b.pronunciation, "ja"));
  }

  getFirstStation(){ return this.stations[0]; }

  getLastStation(){ return this.stations[this.stations.length-1]; }
}
