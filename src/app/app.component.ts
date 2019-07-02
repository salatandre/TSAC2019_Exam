import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Transport";

  bus;
  constructor(private http: HttpClient) {}

  getAllBuses() {
    return this.http.get("http://localhost:3000/buses");
  }

  ngOnInit() {
    this.getAllBuses().subscribe(res => {
      this.bus = res;
    });
  }
}
