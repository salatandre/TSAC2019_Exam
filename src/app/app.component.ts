import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import config from "../../config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Belt";

  belt;
  constructor(private http: HttpClient) {}

  getAllBelts() {
    return this.http.get(config.host.url + "/belts");
  }

  ngOnInit() {
    this.getAllBelts().subscribe(res => {
      this.belt = res;
    });
  }
}
