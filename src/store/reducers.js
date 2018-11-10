import {combineReducers} from 'redux';
import user from './userRequest/reducer';
import request from './createRequest/reducer';
import employee from './createEmployee/reducer';

export const rootReducer = combineReducers({
    user,
    request,
    employee
  }
);
