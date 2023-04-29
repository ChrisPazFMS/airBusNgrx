import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, startWith, of } from 'rxjs';
import { ActionEvent } from 'src/app/model/action-event.model';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import {
  AircraftActionTypes,
  AppDataState,
  DataStateEnum,
} from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css'],
})
export class AircraftsComponent implements OnInit {
  // aircrafts: Aircraft[] | null = null;
  // aircrafts$: Observable<Aircraft[]> | null = null;
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;
  error = null;

  constructor(private aircraftService: AircraftService) {}

  ngOnInit(): void {}
  // getAllAireCrafts() {
  //   this.aircraftService.getAircrafts().subscribe({
  //     next: (data) => (this.aircrafts = data),
  //     error: (err) => (this.error = err.message),
  //     complete: () => (this.error = null),
  //   });
  // }

  onActionEvent($ActionEvent: ActionEvent) {
    switch ($ActionEvent.type) {
      case AircraftActionTypes.GET_ALL_AIRCRAFTS:
        this.getAllAireCrafts();
        break;

      case AircraftActionTypes.GET_DESIGNED_AIRCRAFTS:
        this.getDesignedAircrafts();
        break;

      case AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS:
        this.search($ActionEvent.payload);
        break;

      case AircraftActionTypes.GET_SEARCH_AIRCRAFTS:
        this.search($ActionEvent.payload);
        break;
    }
  }

  getAllAireCrafts() {
    console.log('getAllAircrafts');
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  getDesignedAircrafts() {
    console.log('getDesingedAircrafts');
    this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  search(event: any) {
    console.log('serch !!!!!!!!!' + event);
  }

  // onActionEvent($event: any) {
  //   if ($event == 'ALL_AIRCRAFTS') {
  //     this.getAllAireCrafts();
  //   }
  // }

  // getDesignedAircrafts() {}
  // getDevelopementAircrafts() {}
}
