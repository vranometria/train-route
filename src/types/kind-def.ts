export class KindDef {
  name: string
  prop: string
  /** 有料特急を表すhtml class */
  extraCharge: string;

  /** 特急料金が必要か */
  needExtraChage: boolean = false

  constructor(name: string, key: string, needExtraChage?: boolean)
  {
    this.name = name;
    this.prop = key;
    this.needExtraChage = needExtraChage || false;
    this.extraCharge = needExtraChage ? "extra-charge" : "";
  }
}
