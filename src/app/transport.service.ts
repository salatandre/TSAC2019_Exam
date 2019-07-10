import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TransportService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:3000";
  /*
  positions = []
  doors = []

  getLastPosition(id: number) {
    this.http.get(
      "http://localhost:3000/positions/" + id + "/last"
    ).subscribe(res => {
      console.log('Getting' + res + ' from service')
      positions[res[0].bus_id] = { lat: res[0].lat, lon: res[0].lon }
    })
  }

  getLastDoors(id: number) {
    return this.http.get(
      "http://localhost:3000/doors/" + id + "/last"
    );
  }

  getLastBusPosition(id: number) {
    return positions[id];
  }*/
}
