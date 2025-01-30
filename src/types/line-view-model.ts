import { LINES } from "@/constants/lines";
import type { KindDef } from "./kind-def";
import { StationModel } from "./station-model";
import type { Component } from "vue";
import { getOverlay, getUnderlay } from "@/util";
import { COMPANIES } from "@/constants/companies";
import { Branch } from "./branch";
import { StopStationDef } from "./stop-station-def";
import { BranchModel } from "./branch-model";

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
  stations: (StationModel|BranchModel)[] = [];
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
    this.stations = line.stations.map(x=> this.toModel(x));
    this.overlay = getOverlay(lineId);
    this.underlay = getUnderlay(lineId);
    this.distinationList = this.sortAlphabetically(this.stations).map(x => new Distination(x.name, x.id));
  }

  sortAlphabetically(array: (StationModel|BranchModel)[]){
    const stationModelList: StationModel[] = [];
    array.forEach(x => {
      switch(typeof x){
        case typeof StationModel:
          stationModelList.push(x as StationModel);
          break;
        case typeof BranchModel:
          (x as BranchModel).stations.forEach(y => stationModelList.push(...y));
          break;
      }
    });
    return stationModelList.slice().sort((a, b) => a.pronunciation.localeCompare(b.pronunciation, "ja"));
  }

  getFirstStation():StationModel{
    return this.stations.filter(x => x instanceof StationModel)[0];
  }

  getLastStation():StationModel{
    const s1 = this.stations.filter(x => x instanceof StationModel);
    const s2 = this.stations.filter(x => x instanceof BranchModel);
    s2.forEach(x => {
      x.stations[0].forEach(y => s1.push(y));
    });
    return s1[s1.length - 1];
  }

  toModel(x: StopStationDef|Branch): StationModel|BranchModel {
    if(x instanceof StopStationDef){
      return new StationModel(x as StopStationDef);
    }

    if(x instanceof Branch){
      return new BranchModel(x as Branch);
    }

    throw new Error(`Invalid type: ${typeof x}`);
  }
}
