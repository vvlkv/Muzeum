import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import user from './userRequest/reducer';
import request from './createRequest/reducer';

export const rootReducer = combineReducers({
    user,
    request
  }
);
