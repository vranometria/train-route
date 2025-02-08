import { COMPANIES } from "@/constants/companies";
import { LINES } from "@/constants/lines";
import type { ExchangeInfo } from "@/types/exchange-info";

export class ChangeLineModel {
  /** 路線ID */
  id: string;

  /** 路線名 */
  name: string;

  /** 鉄道会社名 */
  company: string;

  /** 別路線別名駅ID */
  exchangeStationId?: string;

  constructor(public fromStationId:string,  info: string|ExchangeInfo){
    switch(typeof info){
      case 'string':
        this.id = info;
        break;
      default:
        this.id = info.lineId;
        this.exchangeStationId = info.stationId;
        break;
    };
    const line = LINES[this.id];
    this.name = line.name;
    const company = COMPANIES[line.companyId];
    this.company = company.name;
  }

  get url(): string{
    if(this.exchangeStationId){
      return `/line/${this.id}#${this.exchangeStationId}`;
    }
    else{
      return `/line/${this.id}#${this.fromStationId}`;
    }
  }

  get label(): string{
    if(this.exchangeStationId){
      return `${this.name}(${this.exchangeStationId})`;
    }
    else{
      return `${this.name}`;
    }
  }
}
