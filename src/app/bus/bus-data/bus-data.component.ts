import { Component } from "@angular/core";

export interface BusData {
  id: number;
  latitude: number;
  longitude: number;
  people: number;
}

const ELEMENT_DATA: BusData[] = [
  { id: 1, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 2, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 3, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 4, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 5, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 6, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 7, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 8, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 9, latitude: 45.95248, longitude: 45.95248, people: 2 },
  { id: 10, latitude: 45.95248, longitude: 45.95248, people: 2 }
];

@Component({
  selector: "app-bus-data",
  styleUrls: ["bus-data.component.css"],
  templateUrl: "./bus-data.component.html"
})
export class BusDataComponent {
  displayedColumns: string[] = ["id", "latitude", "longitude", "people"];
  dataSource = ELEMENT_DATA;
}
