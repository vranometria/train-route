import { STATIONS } from "@/constants/stations";
import type { StopStation } from "./stop-station";
import type { StationInfo } from "./station-info";

export abstract class RoutePart {
  abstract getStations(): StopStation[]
  abstract getType(): string
}

export class Branch extends RoutePart {
  selectedRouteIndex: number;
  constructor(public routes: StopStation[][]) {
    super();
    this.selectedRouteIndex = 0;
    this.routes = routes;
  }

  selectRoute(index: number) {
    this.selectedRouteIndex = index;
  }

  getStations() {
    return this.routes[this.selectedRouteIndex];
  }

  getType() {
    return "Branch";
  }

  getRouteTops(): StationInfo[] {
    return this.routes.map(route => STATIONS[route[0].stationId]);
  }
}

export class Section extends RoutePart {
  constructor(public stations: StopStation[]) {
    super();
  }

  getStations() {
    return this.stations;
  }

  getType() {
    return "Section";
  }
}
