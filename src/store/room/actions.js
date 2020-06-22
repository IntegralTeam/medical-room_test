// @flow

import type { Value } from 'types';
import actionTypes,
  {
    type SetTemperatureAction,
    type SetPressureAction,
    type SetHumidityAction,
  } from './actionTypes';

export const setTemperature = (payload:Value): SetTemperatureAction => ({
  type: actionTypes.SET_TEMPERATURE,
  payload,
});

export const setPressure = (payload:Value): SetPressureAction => ({
  type: actionTypes.SET_PRESSURE,
  payload,
});

export const setHumidity = (payload:Value): SetHumidityAction => ({
  type: actionTypes.SET_HUMIDITY,
  payload,
});
