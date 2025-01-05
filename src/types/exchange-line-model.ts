import { LINES } from "@/constants/lines";

export class ExchangeLineModel {
  id: string;
  name: string;
  constructor(lineId: string){
    const line = LINES[lineId];

    if(line) {
      this.id = lineId;
      this.name = line.name;
    }else{
      this.id = "undefined-" + lineId;
      this.name = "ID未定義の路線-" + lineId;
    }
  }
}
