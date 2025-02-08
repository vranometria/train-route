import { STATIONS } from "@/constants/stations";
import { ChangeLineModel } from "./change-line-model";

export class StationDetail {
  /** 駅名 */
  name: string;

  /** 駅名読み */
  reading: string;

  /** 所在県 */
  prefecture: string;

  /** 路線情報 */
  lines: ChangeLineModel[];

  constructor(public stationId: string){
    const station = STATIONS[stationId];
    this.name = station.name;
    this.reading = station.pronunciation;
    this.prefecture = station.prefecture;
    this.lines = station.lines.map((info) => new ChangeLineModel(stationId, info));
  }
}
