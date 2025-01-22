import type { Line } from "@/types/line";

export class LineModel{
  id: string;
  line: Line;
  constructor(id: string, line: Line){
    this.id = id;
    this.line = line;
  }

  runsThrough(prefecture: string): boolean{
    return this.line.runsThrough(prefecture);
  }
}
