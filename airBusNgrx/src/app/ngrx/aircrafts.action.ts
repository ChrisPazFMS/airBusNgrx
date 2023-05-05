import { Action } from '@ngrx/store';
import { Aircraft } from '../model/aircraft.model';

export enum AircraftActionTypes {
  // get all aircrafts
  GET_ALL_AIRCRAFTS = '[Aircrafts] GET ALL Aircrafts',
  GET_ALL_AIRCRAFTS_SUCCESS = '[Aircrafts] GET ALL Aircrafts Success',
  GET_ALL_AIRCRAFTS_ERROR = '[Aircrafts] GET ALL Aircrafts Error',
  // get all aircrafts
  //get Designed aircrafts
  GET_DESINGNED_AIRCRAFTS = '[Aircrafts] GET DESIGNED Aircrafts',
  GET_DESINGNED_AIRCRAFTS_SUCCESS = '[Aircrafts] GET DESIGNED Aircrafts Success',
  GET_DESINGNED_AIRCRAFTS_ERROR = '[Aircrafts] GET DESIGNED Aircrafts Error',
  //get Designed aircrafts
  //get Development aircrafts
  GET_DEVELOPMENT_AIRCRAFTS = '[Aircrafts] GET DEVELOPMENT Aircrafts',
  GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = '[Aircrafts] GET DEVELOPMENT Aircrafts Success',
  GET_DEVELOPMENT_AIRCRAFTS_ERROR = '[Aircrafts] GET DEVELOPMENT Aircrafts Error',
  //get Development aircrafts
  //get Search aircrafts
  GET_SEARCH_AIRCRAFTS = '[Aircrafts] GET SEARCH Aircrafts',
  GET_SEARCH_AIRCRAFTS_SUCCESS = '[Aircrafts] GET SEARCH Aircrafts Success',
  GET_SEARCH_AIRCRAFTS_ERROR = '[Aircrafts] GET SEARCH Aircrafts Error',
  //get Search aircrafts
}

// get all aircrafts
export class GetAllAircraftsAction implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS;
  constructor(public payload: any) {}
}

// get all aircrafts success
export class GetAllAircraftsActionSuccess implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

// get all aircrafts error
export class GetAllAircraftsActionError implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

//get Designed aircrafts
export class GetDesignedAircraftsAction implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_DESINGNED_AIRCRAFTS;
  constructor(public payload: any) {}
}

//get Designed aircrafts success
export class GetDesignedAircraftsActionSuccess implements Action {
  type: AircraftActionTypes =
    AircraftActionTypes.GET_DESINGNED_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

//get Designed aircrafts error
export class GetDesignedAircraftsActionError implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_DESINGNED_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

//get Development aircrafts
export class GetDevelopmentAircraftsAction implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS;
  constructor(public payload: any) {}
}

//get Development aircrafts success
export class GetDevelopmentAircraftsActionSuccess implements Action {
  type: AircraftActionTypes =
    AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

//get Development aircrafts error
export class GetDevelopmentAircraftsActionError implements Action {
  type: AircraftActionTypes =
    AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

//get Search aircrafts
export class GetSearchAircraftsAction implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_SEARCH_AIRCRAFTS;
  constructor(public payload: any) {}
}

//get Search aircrafts success
export class GetSearchAircraftsActionSuccess implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_SEARCH_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

//get Search aircrafts error
export class GetSearchAircraftsActionError implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_SEARCH_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

export type AircraftActions =
  | GetAllAircraftsAction
  | GetAllAircraftsActionSuccess
  | GetAllAircraftsActionError
  | GetDesignedAircraftsAction
  | GetDesignedAircraftsActionSuccess
  | GetDesignedAircraftsActionError
  | GetDevelopmentAircraftsAction
  | GetDevelopmentAircraftsActionSuccess
  | GetDevelopmentAircraftsActionError
  | GetSearchAircraftsAction
  | GetSearchAircraftsActionSuccess
  | GetSearchAircraftsActionError;
