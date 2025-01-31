import { STATIONS } from "@/constants/stations";

export class Distination {
  name: string;
  constructor(public stationId: string){
    const t = STATIONS[stationId];
    this.name = t ? t.name : "";
  }
}
