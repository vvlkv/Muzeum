import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  tmpRequest: [], //{}?????????????????????????
  jobTypes: [],
  jobCategories: [],
  response: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TMP_REQUEST_FETCHED:
      return state.merge({
        tmpRequest: action.tmpRequest
      });
    case types.TYPE_JOBS_FETCHED:
      return state.merge({
        jobTypes: action.typeJobs
      });
    case types.CATEGORY_OF_JOBS_FETCHED:
      return state.merge({
        jobCategories: action.categoryJobs
      });
    case types.CREATE_REQUEST:
    console.log(action.resp);
        return state.merge({
          response: action.resp
        });
    default:
      return state;
  }
}

export function createRequest(state) {
  console.log("createRequest");
  console.log(state.request.response);
  return state.request.response;
}

export function getTmpRequest(state) {
  console.log(state.request.tmpRequest);
  return state.request.tmpRequest;
}

export function getTypeJobs(state) {
  console.log(state.request.jobTypes);
  return state.request.jobTypes;
}

export function getCategoryOfJobs(state) {
  console.log(state.request.jobCategories);
  return state.request.jobCategories;
}
