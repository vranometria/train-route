import { LINES } from "@/constants/lines";
import type { Component } from "vue";
import { getOverlay, getUnderlay, List } from "@/util";
import { COMPANIES } from "@/constants/companies";
import type { ServiceType } from "./service-type";
import type { TrainLine } from "./line";
import type { Branch, RoutePart } from "./Section";
import { Distination } from "./distination";
import { STATIONS } from "@/constants/stations";
import type { StationInfo } from "./station-info";

export class LineViewModel {
  line: TrainLine;
  indexByStationId: Map<string, number> = new Map<string, number>();
  overlay: Component|null = null;
  underlay: Component|null = null;
  firstStationId: string|null = null;
  lastStationId: string|null = null;
  distinations: Distination[] = [];

  constructor(lineId: string){
    this.line = LINES[lineId];
    this.overlay = getOverlay(lineId);
    this.underlay = getUnderlay(lineId);
    this.updateProperties();
  }

  updateProperties(){
    const stationIds = this.getStopStationIds();
    this.firstStationId = stationIds.first();
    this.lastStationId = stationIds.last();
    this.indexByStationId = this.getStationIdByIndex(stationIds);
    this.distinations = this.getDistinations(stationIds);
  }

  getLineName():string { return this.line.name; }

  getCompanyName():string {
    const company = COMPANIES[this.line.companyId];
    return company && company.name ? company.name : "未定義";
  }

  getServiceTypes():ServiceType[] { return this.line.serviceTypes; }

  getFirstStationName():string{
    const t = STATIONS[this.firstStationId as string];
    return t ? t.name : "";
  }

  getLastStationName():string{
    const t = STATIONS[this.lastStationId as string];
    return t ? t.name : "";
  }

  getColspan():number { return this.line.serviceTypes.length + ["駅名", "発音", "乗り換え"].length; }

  getStopStationIds(): List<string> {
    const stopStationIds = new List<string>();
    this.line.sections.forEach((section:RoutePart) => {
      section.getStations().forEach(x => { stopStationIds.push(x.stationId); });
    });
    return stopStationIds;;
  }

  getStationIdByIndex(stationIds: string[]): Map<string, number> {
    const indexByStationId = new Map<string, number>();
    stationIds.forEach((stationId, index) => { indexByStationId.set(stationId, index); });
    return indexByStationId;
  }

  getDistinations(stationIds: string[]): Distination[] {
    const list = new List<Distination>(...stationIds.map(stationid => new Distination(stationid)));
    return list.sortAlphabetically("name");
  }

  switchBranch(sectionIndex: number, branchIndex: number){
    (this.line.sections[sectionIndex] as Branch).selectRoute(branchIndex);
    this.updateProperties();
  }
}
