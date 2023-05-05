import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, catchError, mergeMap, of, map } from 'rxjs';
import {
  AircraftActionTypes,
  GetAllAircraftsActionError,
  GetAllAircraftsActionSuccess,
  GetDesignedAircraftsActionError,
  GetDesignedAircraftsActionSuccess,
  GetDevelopmentAircraftsActionError,
  GetDevelopmentAircraftsActionSuccess,
  GetSearchAircraftsActionError,
  GetSearchAircraftsActionSuccess,
} from './aircrafts.action';
import { AircraftService } from '../services/aircraft.service';
import { __values } from 'tslib';

@Injectable()
export class AircraftsEffects {
  constructor(
    private aircraftsService: AircraftService,
    private effectActions: Actions
  ) {}

  getAllAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_ALL_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftsService.getAircrafts().pipe(
          map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
          catchError((err) => of(new GetAllAircraftsActionError(err.message)))
        );
      })
    )
  );

  getDesignedAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_DESINGNED_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftsService.getDesignedAircrafts().pipe(
          map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
          catchError((err) =>
            of(new GetDesignedAircraftsActionError(err.message))
          )
        );
      })
    )
  );

  getDevelopmentAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftsService.getDevelopmentAircrafts().pipe(
          map(
            (aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)
          ),
          catchError((err) =>
            of(new GetDevelopmentAircraftsActionError(err.message))
          )
        );
      })
    )
  );

  getSearchAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_SEARCH_AIRCRAFTS),
      mergeMap((action) => {
        console.log('Action: ', action);
        return this.aircraftsService.getAircraftsByMsn(action).pipe(
          map((aircrafts) => new GetSearchAircraftsActionSuccess(aircrafts)),
          catchError((err) =>
            of(new GetSearchAircraftsActionError(err.message))
          )
        );
      })
    )
  );
}
