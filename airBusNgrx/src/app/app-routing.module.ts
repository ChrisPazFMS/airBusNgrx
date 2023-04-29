import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftNavbarComponent } from './components/aircraft-navbar/aircraft-navbar.component';

const routes: Routes = [
  { path: 'aircrafts', component: AircraftsComponent },
  { path: 'aircraft - navbar', component: AircraftNavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
