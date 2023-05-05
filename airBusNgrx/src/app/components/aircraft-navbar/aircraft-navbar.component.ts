import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  GetAllAircraftsAction,
  GetDesignedAircraftsAction,
  GetDevelopmentAircraftsAction,
  GetSearchAircraftsAction,
} from 'src/app/ngrx/aircrafts.action';

@Component({
  selector: 'app-aircraft-navbar',
  templateUrl: './aircraft-navbar.component.html',
  styleUrls: ['./aircraft-navbar.component.css'],
})
export class AircraftNavbarComponent implements OnInit {
  search: string = '';
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  getAllAireCrafts() {
    console.log('getAllAireCrafts');
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getDesignedAircrafts() {
    console.log('getDesignedAircrafts');
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircrafts() {
    console.log('getDevelopmentAircrafts');
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  }

  onSearch(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this.store.dispatch(new GetSearchAircraftsAction(f.value));
  }
}
