import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TransportService {
  constructor(private http: HttpClient) {}

  getAllBuses() {
    return this.http.get("/api/buses").pipe(map((response: any) => response));
  }
}
