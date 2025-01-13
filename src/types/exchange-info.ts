/**
 * 名前付き乗り換え情報
 */
export class ExchangeInfo {
  lineId: string;
  stationId: string;
  constructor(lineId:string, stationId: string){
    this.lineId = lineId;
    this.stationId = stationId;
  }
}
