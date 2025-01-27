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
  /** 都道府県 */
  prefecture: string

  constructor(name: string, lineIds?: (string|ExchangeInfo)[], pronunciation?: string){
    this.name = name;
    this.lines = lineIds ? lineIds : [];
    this.pronunciation = pronunciation ? pronunciation : name;
    this.prefecture = '';
  }
}


interface StationInfoConstructor {
  name: string
  lines?: (string|ExchangeInfo)[]
  pron: string,
  pr: string
}

export class Station extends StationInfo {
  constructor({name, lines, pron, pr}: StationInfoConstructor){
    // this.name = name;
    // this.lines = lines ? lines : [];
    // this.pronunciation = pronunciation ? pronunciation : name;
    super(name, lines, pron);
    this.prefecture = pr ? pr : '';
  }
}
