// @flow

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import room from './room/reducer';

export default () => combineReducers({
  router: connectRouter(history),
  room,
});
