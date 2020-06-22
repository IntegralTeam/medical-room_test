// @flow

import { ofType } from 'redux-observable';
import { type Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import sensorPanel from 'constants/sensorData';
import { setData } from 'utils';
import actionTypes from '../actionTypes';

const { humidityData } = sensorPanel;

const setHumidityEpic = (type: string) => (action$: Observable<any>) => action$.pipe(
  ofType(type),
  mergeMap(() => setData(type, humidityData)),
);

export default setHumidityEpic(actionTypes.SET_HUMIDITY);
