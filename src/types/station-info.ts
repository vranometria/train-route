export class StationInfo {
  name: string
  lineIds: string[]
  constructor(name: string, lineIds: string[]){
    this.name = name;
    this.lineIds = lineIds;
  }
}
