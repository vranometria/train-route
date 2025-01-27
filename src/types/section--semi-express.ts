import { KindDef } from "./kind-def";

export class SectionSemiExpress extends KindDef{
  static readonly KEY = "section-semi-express";
  constructor() {
    super("区間準急", "section-semi-express");
  }
}
