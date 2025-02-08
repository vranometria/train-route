import { STATIONS } from "@/constants/stations";
import type { ServiceType } from "./service-type";
import type { RoutePart } from "./Section";
import { deduplicate } from "@/util";


interface TrainLineConstructor {
  /** 路線名 */
  name: string;
  /** 運行会社ID */
  companyId: string;
  serviceTypes?: ServiceType[];
  sections: RoutePart[];
  reading: string;
}

/**
 * 路線定義クラス
 */
export class TrainLine {
  /** ID */
  id?: string;
  /** 路線名 */
  name: string;
  /** 運行会社ID */
  companyId: string;
  /** 路線の読み仮名 */
  reading: string;
  /** 路線が通る都道府県 */
  prefectures: string[];
  /** 路線の運行種別 */
  serviceTypes: ServiceType[];
  /** 路線の区間 */
  sections: RoutePart[];

  constructor({ name, companyId, reading, sections }: TrainLineConstructor);
  constructor({
    name,
    companyId,
    reading,
    sections,
    serviceTypes,
  }: TrainLineConstructor) {
    this.name = name;
    this.companyId = companyId;
    this.reading = reading;
    this.prefectures = this.getPrefectures(sections);
    this.serviceTypes = serviceTypes || [];
    this.sections = sections;
  }

  getPrefectures(sections: RoutePart[]): string[] {
    const prefectures = [];
    for (const section of sections) {
      const t = section
        .getStations()
        .map((s) => STATIONS[s.stationId]?.prefecture);
      prefectures.push(...t);
    }
    return deduplicate(prefectures);
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
