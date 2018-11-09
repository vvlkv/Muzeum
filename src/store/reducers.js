import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import time from './time/reducer';

export const rootReducer = combineReducers({
    time,
    router: routerReducer
  }
);
