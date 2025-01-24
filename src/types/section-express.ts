import { KindDef } from "./kind-def";

export class SectionExpress extends KindDef{
  static readonly KEY = "section-express";
  constructor() {
    super("区間急行", "section-express");
  }
}
