import { KindDef } from "./kind-def";

export class SectionSemiExpress extends KindDef{
  static readonly KEY = "section-semi-express";
  constructor() {
    super("区間急行", "section-semi-express");
  }
}
