import type { Branch } from "./branch";
import { StationModel } from "./station-model";

export class BranchModel {
  stations: StationModel[][];
  constructor(branch: Branch){
    this.stations = branch.stations.map(x => x.map(y => new StationModel(y)));
  }
}
