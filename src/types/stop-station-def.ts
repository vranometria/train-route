/**
 * 停車駅情報定義クラス
 */
export class StopStationDef {
  /** 駅ID */
  id: string;

  /** 停車種別キー(快速・急行等) */
  kinds: string[];

  constructor(id:string, kinds?: string[]){
    this.id = id;
    this.kinds = kinds ? kinds : [];
  }
}
