import { LINES } from "@/constants/lines";
import { STATIONS } from "@/constants/stations";

/**
 * 乗り換え路線の描画用モデル
 */
export class ExchangeLineModel {
  /** 乗り換え路線ID */
  id: string;
  /** 乗り換え路線名 */
  name: string;
  /** 乗り換え路線上の駅ID */
  stationId: string;

  constructor(lineId: string, stationId: string){
    const line = LINES[lineId];
    const sta = STATIONS[stationId];

    let id: string = "";
    let name: string = "";

    if(!line){
      id = "undefined-" + lineId;
      name = "ID未定義の路線-" + lineId;
    }

    if(!sta){
      stationId = "undefined-" + stationId;
    }

    if(line && sta){
      id = lineId;
      name = line.name;
      stationId = stationId;
    }

    this.id = id;
    this.name = name;
    this.stationId = stationId;
  }
}
