// @flow

import { combineEpics } from 'redux-observable';
import { setTemperatureEpic, setPressureEpic, setHumidityEpic } from './room/epics';

export const rootEpic = combineEpics(
  setTemperatureEpic,
  setPressureEpic,
  setHumidityEpic,
);

