import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import user from './userRequest/reducer';

export const rootReducer = combineReducers({
    user
  }
);
