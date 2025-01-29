import { KindDef } from "./kind-def";

/**
 * KindDef 急行
 */
export class Express extends KindDef {
  static readonly KEY = "express";
  constructor() {
    super("急行", "express");
  }
}
