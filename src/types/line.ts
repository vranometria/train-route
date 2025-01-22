import type { KindDef } from "./kind-def";
import { StopStationDef } from "./stop-station-def";

/**
 * 路線定義クラス
 */
export class Line {
  name: string
  company: string
  kinds: KindDef[]
  stations: StopStationDef[]
  /** 路線が通る権 */
  prefectures: string[]

  constructor(name: string, company: string, kinds: KindDef[], stations: StopStationDef[], prefectures?: string|string[]) {
    this.name = name;
    this.company = company;
    this.kinds = kinds;
    this.stations = stations;
    this.prefectures = (()=>{
      if(!prefectures) return [];
      if(typeof prefectures === "string") return [prefectures];
      return prefectures;
    })();
  }

  /**
   * 指定された都道府県を通るかどうか
   * @param prefecture 都道府県名
   * @returns 通る場合はtrue
   */
  runsThrough(prefecture: string): boolean {
    return this.prefectures.includes(prefecture);
  }
}
