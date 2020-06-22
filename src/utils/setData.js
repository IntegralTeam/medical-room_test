// @flow

import { interval } from 'rxjs';
import { distinct, mapTo } from 'rxjs/operators';
import sensorPanel from 'constants/sensorData';
import { getRandomNumber } from './randomNumber';

const { timeData } = sensorPanel;

type Value = {
  minValue: number,
  maxValue: number,
  accuracy: number,
};

export const setData = (type: string, data: Value) => {
  const time = getRandomNumber(timeData.max, timeData.min);
  const value = getRandomNumber(data.maxValue, data.minValue, data.accuracy);
  
  return interval(time).pipe(
    mapTo({ type, payload: time > timeData.limit ? 'N/A' : value }),
    distinct(),
  );
};
