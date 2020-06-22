// @flow

import type { Action, Value } from 'types';

export type SetTemperatureAction = Action<'SET_TEMPERATURE', Value>;
export type SetPressureAction = Action<'SET_PRESSURE', Value>;
export type SetHumidityAction = Action<'SET_HUMIDITY', Value>;

export type RoomAction = SetTemperatureAction
  | SetPressureAction
  | SetHumidityAction;

export default {
  SET_TEMPERATURE: 'SET_TEMPERATURE',
  SET_PRESSURE: 'SET_PRESSURE',
  SET_HUMIDITY: 'SET_HUMIDITY',
};
