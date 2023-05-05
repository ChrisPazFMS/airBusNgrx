import { AircraftActionTypes, AircraftActions } from './aircrafts.action';
import {
  AircraftsState,
  AircraftsStateEnum,
  initState,
} from './aircrafts.state';
import { Action } from '@ngrx/store';

export function AircraftsReducer(
  state: AircraftsState = initState,
  action: Action
) {
  switch (action.type) {
    case AircraftActionTypes.GET_ALL_AIRCRAFTS:
      console.log('loading...');
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftActionTypes.GET_ALL_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_ALL_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_DESINGNED_AIRCRAFTS:
      console.log('loading...');
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftActionTypes.GET_DESINGNED_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_DESINGNED_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS:
      console.log('loading...');
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_SEARCH_AIRCRAFTS:
      console.log('loading...');
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftActionTypes.GET_SEARCH_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftActions>action).payload,
      };

    case AircraftActionTypes.GET_SEARCH_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftActions>action).payload,
      };

    default:
      return { ...state };
  }
}
