import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftActionTypes } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircraft-navbar',
  templateUrl: './aircraft-navbar.component.html',
  styleUrls: ['./aircraft-navbar.component.css'],
})
export class AircraftNavbarComponent implements OnInit {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  search: string = '';
  constructor() {}
  ngOnInit(): void {}

  // getAllAireCrafts() {
  //   this.eventEmitter.emit('ALL_AIRCRAFTS');
  // }

  getAllAireCrafts() {
    this.eventEmitter.emit({
      type: AircraftActionTypes.GET_ALL_AIRCRAFTS,
      payload: null,
    });
  }

  getDesignedAircrafts() {
    this.eventEmitter.emit({
      type: AircraftActionTypes.GET_DESIGNED_AIRCRAFTS,
      payload: null,
    });
  }

  getDevelopementAircrafts() {}

  onSearch(value: any) {
    this.eventEmitter.emit({
      type: AircraftActionTypes.GET_SEARCH_AIRCRAFTS,
      payload: value,
    });
  }
}
