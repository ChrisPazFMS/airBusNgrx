export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR,
}

export interface AppDataState<T> {
  dataState?: DataStateEnum;
  data?: T;
  errorMessage?: string;
}

export enum AircraftActionTypes {
  GET_ALL_AIRCRAFTS = '[Aircrafts] GET ALL Aircrafts',
  GET_DESIGNED_AIRCRAFTS = '[Aircrafts] GET Designed Aircrafts',
  GET_DEVELOPMENT_AIRCRAFTS = '[Aircrafts] GET Development Aircrafts',
  GET_SEARCH_AIRCRAFTS = '[Aircrafts] GET Search Aircrafts',
}
