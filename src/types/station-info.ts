import type { ExchangeInfo } from "./exchange-info";

/**
 * 駅情報
 */
export class StationInfo {
  /** 駅名 */
  name: string
  /** 乗り換え路線ID */
  lines: (string|ExchangeInfo)[]
  /** 駅名読み */
  pronunciation: string

  constructor(name: string, lineIds?: (string|ExchangeInfo)[], pronunciation?: string){
    this.name = name;
    this.lines = lineIds ? lineIds : [];
    this.pronunciation = pronunciation ? pronunciation : name;
  }
}
