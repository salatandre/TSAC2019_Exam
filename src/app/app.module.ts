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
import { HttpClientModule } from "@angular/common/http";

const ROUTES = [
  {
    path: "",
    redirectTo: "buses",
    pathMatch: "full"
  },
  {
    path: "buses",
    component: BusDataComponent
  }
];

@NgModule({
  declarations: [AppComponent, BusDataComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TransportService],
  bootstrap: [AppComponent]
})
export class AppModule {}
