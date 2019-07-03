import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-bus-data",
  styleUrls: ["bus-data.component.css"],
  templateUrl: "./bus-data.component.html"
})
export class BusDataComponent implements OnInit {
  bus;
  pos;
  door;
  @Input() data: any;
  constructor(private http: HttpClient) {}

  getLastPosition() {
    return this.http.get(
      "http://localhost:3000/positions/" + this.data["id"] + "/last"
    );
  }

  getLastBusDoors() {
    return this.http.get(
      "http://localhost:3000/doors/" + this.data["id"] + "/last"
    );
  }

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
    this.getLastPosition().subscribe(res => {
      this.pos = res[0];
    });
    this.getLastBusDoors().subscribe(res => {
      this.bus = res[0];
    });

    setInterval(() => {
      this.getLastPosition().subscribe(res => {
        this.pos = res[0];
      });
      this.getLastBusDoors().subscribe(res => {
        this.bus = res[0];
      });
    }, 10000);
  }
}
