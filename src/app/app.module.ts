import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BusDataComponent } from "./bus/bus-data/bus-data.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header/header.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { TransportService } from "./transport.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [AppComponent, BusDataComponent, HeaderComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [TransportService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {}
  values;
}
