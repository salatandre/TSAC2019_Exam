import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-belt-data",
  styleUrls: ["belt-data.component.css"],
  templateUrl: "./belt-data.component.html"
})
export class BeltDataComponent implements OnInit {
  power;
  rate;
  @Input() data: any;
  constructor(private http: HttpClient) {}

  getLastPower() {
    return this.http.get(
      "http://localhost:3000/power/" + this.data["id"] + "/last"
    );
  }

  getLastRates() {
    return this.http.get(
      "http://localhost:3000/rates/" + this.data["id"] + "/last"
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
    this.getLastPower().subscribe(res => {
      this.power = res[0];
    });
    this.getLastRates().subscribe(res => {
      this.rate = res[0];
    });

    setInterval(() => {
      this.getLastPower().subscribe(res => {
        this.power = res[0];
      });
      this.getLastRates().subscribe(res => {
        this.rate = res[0];
      });
    }, 10000);
  }
}
