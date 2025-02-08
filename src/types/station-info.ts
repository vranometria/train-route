import type { ExchangeInfo } from "./exchange-info";
import type { Point } from "./point-d";

/**
 * 駅情報
 */
export class StationInfo {
   /** ID */
   id?: string;
  /** 駅名 */
  name: string
  /** 乗り換え路線ID */
  lines: (string|ExchangeInfo)[]
  /** 駅名読み */
  pronunciation: string
  /** 都道府県 */
  prefecture: string
  /** 座標 */
  coordinates: Point = {lat: 0, lng: 0};
  /** 英語読み */
  en: string = '';

  constructor(name: string, lineIds?: (string|ExchangeInfo)[], pronunciation?: string){
    this.name = name;
    this.lines = lineIds ? lineIds : [];
    this.pronunciation = pronunciation ? pronunciation : name;
    this.prefecture = '';
  }
}


interface StationInfoConstructor {
  /** 駅名 */
  name: string;

  /** 駅名読み英語 */
  en?: string;

  /** 乗り換え路線IDまたは乗り換え情報 */
  lines?: (string|ExchangeInfo)[]

  /** 駅名読み */
  reading?: string,

  /** 所在県 */
  prefecture: string

  /** 座標 */
  coordinates?: Point;
}


export class Station extends StationInfo {
  constructor({name, en, lines, reading, prefecture, coordinates}: StationInfoConstructor){
    // this.name = name;
    // this.lines = lines ? lines : [];
    // this.pronunciation = pronunciation ? pronunciation : name;
    super(name, lines, reading);
    this.prefecture = prefecture ? prefecture : '';
    this.coordinates = coordinates ? coordinates : {lat: 0, lng: 0};
    this.en = en ? en : '';
  }
}
