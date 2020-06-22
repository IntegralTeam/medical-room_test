// @flow

import { type Value } from 'types';

export type RoomState = {
  temperature: Value,
  pressure: Value,
  humidity: Value,
};

export type State = {
  room: RoomState,
};
