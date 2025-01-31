import { LINE_IDS } from "@/constants/line-ids"
import NegishiTop from "./components/top-bottom/NegishiTop.vue";
import KeihintohokuBottom from "@/components/top-bottom/KeihintohokuBottom.vue"
import type { Component } from "vue";
import YamanoteTop from "./components/top-bottom/YamanoteTop.vue";
import YamanoteBottom from "./components/top-bottom/YamanoteBottom.vue";
import { LINES } from "./constants/lines";
import { LineModel } from "./constants/line-model";

export function getOverlay(lineId: string): Component|null {
  switch(lineId){
    case LINE_IDS.jr_east.yamanote:
      return YamanoteTop;
    case LINE_IDS.jr_east.negishi:
      return NegishiTop;
    default:
      return null;
  }
}

export function getUnderlay(lineId: string): Component|null {
  switch(lineId){
    case LINE_IDS.jr_east.yamanote:
      return YamanoteBottom;
    case LINE_IDS.jr_east.keihin_touhoku:
      return KeihintohokuBottom;
    default:
      return null;
  }
}


export function scrollTo(stationId: string){
  const target = document.getElementById(stationId);
  if(target){
    target.scrollIntoView({behavior: "smooth"});
  }
}

export function removeDuplicates(arr: string[]): string[] {
  return Array.from(new Set(arr));
}

export function getLineModel(): LineModel[] {
  return Object.keys(LINES).map( key => new LineModel(key, LINES[key]));
}

/**
 * オブジェクト配列の指定したキーを日本語の五十音でソートする
 * @param items
 * @param key
 * @param accending true: 昇順, false: 降順
 * @returns
 */
export function orderByJapanese<T, K extends keyof T>(items: T[], key: K, accending = true): T[] {
  return items.sort((a, b) => {
    const av = a[key] as string || "";
    const bv = b[key] as string || "";
    return accending ? av.localeCompare(bv, "ja") : bv.localeCompare(av, "ja");
  });
}


export function deduplicate(arg: string[]): string[] {
  return [...new Set(arg)];
}


export class List<T> extends Array<T> {
  constructor(...args: T[]) {
    super(...args);
  }

  first(): T|null { return this.length > 0 ? this[0] : null; }

  last(): T|null { return this.length > 0 ? this[this.length - 1] : null; }

  sortAlphabetically(key: keyof T): T[] {
    return this.slice().sort((a, b) => (a[key] as string).localeCompare(b[key] as string, "ja"));
  }

  deduplicate(): T[] {
    return [...new Set(this)];
  }
}
