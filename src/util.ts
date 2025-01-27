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
