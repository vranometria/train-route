import { KindDef } from "./kind-def";

export class SemiExpress extends KindDef {
  static readonly KEY = "semi-express";
  constructor() {
    super("準急", "semi-express");
  }
}
