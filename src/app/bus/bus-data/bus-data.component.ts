import { Component, OnInit } from "@angular/core";
import { TransportService } from "../../transport.service";

export interface BusData {
  id: number;
  name: string;
  capacity: number;
}

@Component({
  selector: "app-bus-data",
  styleUrls: ["bus-data.component.css"],
  templateUrl: "./bus-data.component.html"
})
export class BusDataComponent implements OnInit {
  buses: any = [];

  constructor(private transporService: TransportService) {}

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
    this.transporService.getAllBuses().subscribe(buses => {
      this.buses = buses;
    });
  }
}
