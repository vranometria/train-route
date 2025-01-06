export class StopStationDef {
  id: string;
  kinds: string[];

  constructor(id:string, kinds?: string[]){
    this.id = id;
    this.kinds = kinds ? kinds : [];
  }
}
