import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import time from './time/reducer';
import user from './userRequest/reducer';

export const rootReducer = combineReducers({
    time,
    user
  }
);
