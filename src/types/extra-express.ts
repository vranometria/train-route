import { KindDef } from "./kind-def";

/**
 * Kind Def 有料特急
 */
export class ExtraExpress extends KindDef {
  constructor(name: string, key: string) {
    super(name, key, true);
  }
}
