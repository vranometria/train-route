import { KindDef } from "./kind-def";

/**
 * Kind Def 特急
 */
export class SpecialExpress extends KindDef {
  static readonly KEY = "special-express";
  constructor() {
    super("特急", "special-express");
  }
}
