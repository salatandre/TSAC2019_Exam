import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BusDataComponent } from "./bus/bus-data/bus-data.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [AppComponent, BusDataComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
