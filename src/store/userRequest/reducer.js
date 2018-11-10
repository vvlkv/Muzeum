import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  jobTypes: [],
  response: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.JOBS_FETCHED:
      return state.merge({
        jobTypes: action.time
      });
    case types.TMP_REQUEST_POSTED:
        return state.merge({
          response: action.resp
        });
    default:
      return state;
  }
}

export function postTmpRequest(state) {
  console.log("postTmpRequest");
  console.log(state.user.response);
  return state.user.response;
}

export function getJobTypes(state) {
  console.log(state);
<<<<<<< HEAD
  console.log("getJobTypes!");
=======
  console.log("getJobTypes");
>>>>>>> 46e094a2c540cba7017f7b5ba218c322ff0535a2
  console.log(_.get(state.user.jobTypes, 'records'));
  return _.get(state.user.jobTypes, 'records');
}
