import { LINE_IDS } from "@/constants/ids"
import NegishiTop from "./components/top-bottom/NegishiTop.vue";
import KeihintohokuBottom from "@/components/top-bottom/KeihintohokuBottom.vue"
import type { Component } from "vue";
import YamanoteTop from "./components/top-bottom/YamanoteTop.vue";
import YamanoteBottom from "./components/top-bottom/YamanoteBottom.vue";

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
