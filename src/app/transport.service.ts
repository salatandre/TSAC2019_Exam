import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TransportService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:3000";

  async getAllBuses() {
    return await fetch(this.baseUrl + "/api/buses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
}
