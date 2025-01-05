import { STATIONS } from "@/constants/stations";
import { ExchangeLineModel } from "./exchange-line-model";
import { StopStationDef } from "./stop-station-def";

export class StationModel {
  id: string
  name: string
  kinds: { [key: string]: string } = {};
  lines: ExchangeLineModel[]

  constructor(stopStationDef: StopStationDef){
    this.id = stopStationDef.id;
    stopStationDef.kinds.forEach(kind => this.kinds[kind] = kind);
    const sta = STATIONS[this.id];
    if(sta){
      this.name = sta.name;
      this.lines = sta.lineIds.map((lineId:string) => new ExchangeLineModel(lineId));
    }else {
      this.name = "ID未定義の駅-" + this.id;
      this.lines = [];
    }
  }

  getExchangeLineIds = (sourceLineId:string):string[] => this.lines.map(n => n.id).filter(n => n!==sourceLineId);
}
