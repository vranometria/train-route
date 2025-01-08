export class StationInfo {
  name: string
  lineIds: string[]
  pronunciation: string

  constructor(name: string, lineIds?: string[], pronunciation?: string){
    this.name = name;
    this.lineIds = lineIds ? lineIds : [];
    this.pronunciation = pronunciation ? pronunciation : name;
  }
}
