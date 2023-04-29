import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftNavbarComponent } from './components/aircraft-navbar/aircraft-navbar.component';

@NgModule({
  declarations: [AppComponent, AircraftsComponent, AircraftNavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
