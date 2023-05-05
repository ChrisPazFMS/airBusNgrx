import { Aircraft } from '../model/aircraft.model';

export enum AircraftsStateEnum {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface AircraftsState {
  aircrafts: Aircraft[];
  errorMessage: string;
  dataState: AircraftsStateEnum;
}

export const initState: AircraftsState = {
  aircrafts: [],
  errorMessage: '',
  dataState: AircraftsStateEnum.INITIAL,
};
