// @flow

import { ofType } from 'redux-observable';
import { type Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import sensorPanel from 'constants/sensorData';
import { setData } from 'utils';
import actionTypes from '../actionTypes';

const { temperatureData } = sensorPanel;

const setTemperatureEpic = (type: string) => (action$: Observable<any>) => action$.pipe(
  ofType(type),
  mergeMap(() => setData(type, temperatureData)),
);

export default setTemperatureEpic(actionTypes.SET_TEMPERATURE);
