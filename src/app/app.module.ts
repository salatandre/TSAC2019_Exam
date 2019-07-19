import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BeltDataComponent } from "./belt/belt-data/belt-data.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header/header.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [AppComponent, BeltDataComponent, HeaderComponent],
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {}
  values;
}
