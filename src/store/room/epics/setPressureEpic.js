// @flow

import { ofType } from 'redux-observable';
import { type Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import sensorPanel from 'constants/sensorData';
import { setData } from 'utils';
import actionTypes from '../actionTypes';

const { pressureData } = sensorPanel;

const setPressureEpic = (type: string) => (action$: Observable<any>) => action$.pipe(
  ofType(type),
  mergeMap(() => setData(type, pressureData)),
);

export default setPressureEpic(actionTypes.SET_PRESSURE);
