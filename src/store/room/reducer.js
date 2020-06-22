// @flow

import type { RoomState } from 'types';
import actionTypes, { type RoomAction } from './actionTypes';

const initialState: RoomState = {
  temperature: 0,
  pressure: 0,
  humidity: 0,
};

export default (state: RoomState = initialState, action: RoomAction): RoomState => {
  switch(action.type) {
    case actionTypes.SET_TEMPERATURE: {
      return {
        ...state,
        temperature: action.payload,
      };
    }
    
    case actionTypes.SET_PRESSURE: {
      return {
        ...state,
        pressure: action.payload,
      };
    }
    
    case actionTypes.SET_HUMIDITY: {
      return {
        ...state,
        humidity: action.payload,
      };
    }
    
    default:
      return state;
  }
};
