import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  jobTypes: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.JOBS_FETCHED:
      return state.merge({
        jobTypes: action.time
      });
    default:
      return state;
  }
}

export function getJobTypes(state) {
  console.log("getJobTypes");
  console.log(state);
  console.log("getJobTypes2");
  console.log(_.get(state.user.jobTypes, 'records'));
  return _.get(state.user.jobTypes, 'records');
}
