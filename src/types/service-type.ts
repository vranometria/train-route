/** 快速や急行といった各停以外の車種情報 */
export class ServiceType {
  /** 有料特急を表すhtml class */
  extraCharge: string;

  /** 特急料金が必要か */
  needExtraChage: boolean = false

  /**
   * コンストラクター
   * @param name サービス名
   * @param prop 付与するcss class名
   * @param needExtraChage 特急料金が必要か
   */
  constructor(public name: string,public prop: string, needExtraChage?: boolean){
    this.needExtraChage = needExtraChage || false;
    this.extraCharge = needExtraChage ? "extra-charge" : "";
  }
}

/**
 * Kind Def 快速
 */
class Rapid extends ServiceType {
  static readonly KEY = "rapid";
  constructor() {
    super("快速", "rapid");
  }
}

/**
 * KindDef 急行
 */
class Express extends ServiceType {
  static readonly KEY = "express";
  constructor() {
    super("急行", "express");
  }
}

class SectionExpress extends ServiceType{
  static readonly KEY = "section-express";
  constructor() {
    super("区間急行", "section-express");
  }
}

class SemiExpress extends ServiceType {
  static readonly KEY = "semi-express";
  constructor() {
    super("準急", "semi-express");
  }
}

class SectionSemiExpress extends ServiceType{
  static readonly KEY = "section-semi-express";
  constructor() {
    super("区間準急", "section-semi-express");
  }
}

/**
 * Kind Def 特急
 */
class SpecialExpress extends ServiceType {
  static readonly KEY = "special-express";
  constructor() {
    super("特急", "special-express");
  }
}

class RapidExpress extends ServiceType {
  constructor() {
    super("快速急行", "rapid-express");
  }
}

class RapidCommuter extends ServiceType {
  constructor() {
    super("通勤快速", "rapid-commuter");
  }
}

export class Extra1 extends ServiceType {
  constructor(name:string) {
    super(name, "extra1");
  }
}

export class Extra2 extends ServiceType {
  constructor(name:string) {
    super(name, "extra2");
  }
}

export class Extra3 extends ServiceType {
  constructor(name:string) {
    super(name, "extra3");
  }
}

export class Extra4 extends ServiceType {
  constructor(name:string) {
    super(name, "extra4");
  }
}

export class Extra5 extends ServiceType {
  constructor(name:string) {
    super(name, "extra5");
  }
}

/** 快速 */
export const RAPID = new Rapid();
/** 急行 */
export const EXPRESS = new Express();
/** 区間急行 */
export const SECTION_EXPRESS = new SectionExpress();
/** 準急 */
export const SEMI_EXPRESS = new SemiExpress();
/** 区間準急 */
export const SECTION_SEMI_EXPRESS = new SectionSemiExpress();
/** 特急 */
export const SPECIAL_EXPRESS = new SpecialExpress();
/** 通勤快速 */
export const RAPID_COMMUTER = new RapidCommuter();
/** 快速急行 */
export const RAPID_EXPRESS = new RapidExpress();
/** その他１ */
export const EXTRA1 = new Extra1("その他１");
/** その他２ */
export const EXTRA2 = new Extra2("その他２");
/** その他３ */
export const EXTRA3 = new Extra3("その他３");
/** その他４ */
export const EXTRA4 = new Extra4("その他４");
/** その他５ */
export const EXTRA5 = new Extra5("その他５");
