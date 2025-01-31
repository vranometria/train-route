import { ServiceType } from "./service-type";

/**
 * 停車駅情報定義クラス
 */
export class StopStation {
  /** 停車種別キー(快速・急行等) */
  serviceKeys: string[] = [];

  constructor(public stationId:string, serviceTypes?: (string|ServiceType)[]){
    if(serviceTypes){
      this.serviceKeys = serviceTypes.map(t => {
        switch(t){
          case typeof String:
            return t;
          default:
            return (t as ServiceType).prop;
        }
      })
    }
  }
}
