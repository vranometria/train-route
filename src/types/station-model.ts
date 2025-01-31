import { STATIONS } from "@/constants/stations";
import { ExchangeLineModel } from "./exchange-line-model";
import { ExchangeInfo } from "./exchange-info";
import type { StopStation } from "./stop-station";

/**
 * 駅の描画用モデル
 */
export class StationModel {
  id: string;
  name: string;
  serviceTypes: { [key: string]: string } = {};
  lines: ExchangeLineModel[];
  pronunciation: string = "";

  constructor(stopStationDef: StopStation) {
    this.id = stopStationDef.stationId;
    stopStationDef.serviceKeys.forEach((k) => (this.serviceTypes[k] = k));
    const sta = STATIONS[this.id];
    if (sta) {
      this.name = sta.name;
      this.lines = sta.lines.map((lineId: string | ExchangeInfo) =>
        this.createExchangeLineModel(lineId)
      );
      this.pronunciation = sta.pronunciation;
    } else {
      this.name = "ID未定義の駅-" + this.id;
      this.lines = [];
    }
  }

  createExchangeLineModel = (
    line: string | ExchangeInfo
  ): ExchangeLineModel => {
    let lineId: string;
    let stationId: string;
    if (typeof line === "string") {
      lineId = line;
      stationId = this.id;
    } else {
      lineId = line.lineId;
      stationId = line.stationId;
    }

    return new ExchangeLineModel(lineId, stationId);
  };

  getExchangeLines = (sourceLineId: string): ExchangeLineModel[] =>
    this.lines.filter((x) => x.id !== sourceLineId);
}
