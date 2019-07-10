import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

declare let L;
@Component({
  selector: "app-map-component",
  styleUrls: ["map.component.css"],
  templateUrl: "./map.component.html"
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient) {}
  busesIds = [];
  ngOnInit() {
    const map = L.map("map").setView([51.505, -0.09], 13);
    setTimeout(function() {
      map.invalidateSize();
    }, 500);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var Icon = L.icon({
      iconUrl: "../../../assets/img/mark.svg",
      iconSize: [38, 95], // size of the icon
      popupAnchor: [0, -15]
    });

    this.http.get("http://localhost:3000/buses").subscribe((res: Array<any>) => {
      console.log("RES", res);
      /*for(let i=0; i < res.length; i++) {
        this.busesIds.push(res[i])
      }
      */
     this.busesIds = res;
     console.log('In this map ill show u', this.busesIds)
    });


    setInterval(() => {
      for(let i=0; i < this.busesIds.length; i++) {
        this.http.get(`http://localhost:3000/positions/${this.busesIds[i].id}`).subscribe((res: any) => {
          console.log(res)
          for(let j=0; j < res.length; j++) {
            var marker1 = L.marker([res[j].lat, res[j].lon], { icon: Icon }).addTo(map);
          }
          // console.log(`Last position of ${this.busesIds[i].id} is ` + res)
          //var marker1 = L.marker([res.lat, res.lon], { icon: Icon })
          // .bindPopup(customPopup, customOptions)
         // .addTo(map);
        })
      }
    }, 1000)

    var marker1 = L.marker([51.505, -0.09], { icon: Icon })
      // .bindPopup(customPopup, customOptions)
      .addTo(map);

    /*     var marker2 = L.marker([51.505, -0.09], { icon: hvIcon })
      // .bindPopup(customPopup, customOptions)
      .addTo(map);

    var marker3 = L.marker([51.505, -0.09], { icon: hvIcon })
      // .bindPopup(customPopup, customOptions)
      .addTo(map);

    var marker14 = L.marker([51.505, -0.09], { icon: hvIcon })
      // .bindPopup(customPopup, customOptions)
      .addTo(map);*/
  }
}
