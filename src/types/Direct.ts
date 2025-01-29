/**
 * 直通運転
 */
export class Direct {
  lineId: string;
  stationId: string;
  identifier: string = "Direct";
  constructor(lineId: string, stationId: string) {
    this.lineId = lineId;
    this.stationId = stationId;
  }
}
