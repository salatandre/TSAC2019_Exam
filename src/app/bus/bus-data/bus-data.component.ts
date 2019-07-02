import { Component, OnInit } from "@angular/core";
import { TransportService } from "../../transport.service";
import { HttpClient } from "@angular/common/http";

/* export interface BusData {
  id: number;
  name: string;
  capacity: number;
} */

@Component({
  selector: "app-bus-data",
  styleUrls: ["bus-data.component.css"],
  templateUrl: "./bus-data.component.html"
})
export class BusDataComponent implements OnInit {
  buses: any = [];

  getAllBuses() {
    return this.http.get("http://localhost:3000/buses");
  }

  constructor(
    private transporService: TransportService,
    private http: HttpClient
  ) {}

  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.transporService.getAllBuses().then(buses => {
      this.buses = buses;
    });
  }
}
