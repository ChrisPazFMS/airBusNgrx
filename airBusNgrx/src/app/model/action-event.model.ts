import { AircraftActionTypes } from '../state/aircraft.state';

export interface ActionEvent {
  type: AircraftActionTypes;
  payload: any;
}
