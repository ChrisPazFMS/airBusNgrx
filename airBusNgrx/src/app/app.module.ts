import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftNavbarComponent } from './components/aircraft-navbar/aircraft-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AircraftsEffects } from './ngrx/aircrafts.effects';

@NgModule({
  declarations: [AppComponent, AircraftsComponent, AircraftNavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ airbusState: AircraftsReducer }),
    EffectsModule.forRoot([AircraftsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
