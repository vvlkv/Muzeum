import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  jobTypes: {},
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.JOBS_FETCHED:
      return state.merge({
        shit: action.time
      });
    default:
      return state;
  }
}

export function getJobTypes(state) {
  return state.userRequest.shit;
}

export function getLastBobTime(state) {
  console.log(state);
  return state.time.bobtime;
}
