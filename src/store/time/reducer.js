import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  time: {},
  bobtime: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TIME_FETCHED:
      return state.merge({
        time: action.time
      });
      case types.TIME_BOB_FETCHED:
        return state.merge({
          bobtime: action.time
        });
    default:
      return state;
  }
}

export function getLastTime(state) {
  console.log(state);
  return state.time.time;
}

export function getLastBobTime(state) {
  console.log(state);
  return state.time.bobtime;
}
