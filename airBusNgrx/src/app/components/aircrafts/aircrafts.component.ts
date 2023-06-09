import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, startWith, of } from 'rxjs';
import {
  AircraftsState,
  AircraftsStateEnum,
} from 'src/app/ngrx/aircrafts.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css'],
})
export class AircraftsComponent implements OnInit {
  aircraftsState$: Observable<AircraftsState> | null = null;

  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.aircraftsState$ = this.store.pipe(map((state) => state.airbusState));
  }
}
