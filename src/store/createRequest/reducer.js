import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  tmpRequest: [], //{}?????????????????????????
  jobTypes: [],
  jobCategories: [],
  locations: [],
  response: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TMP_REQUESTS_FETCHED:
      return state.merge({
        tmpRequests: action.tmpRequests
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
    case types.LOCATIONS_FETCHED:
    console.log(action.resp);
        return state.merge({
          locations: action.locations
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

export function getLocations(state) {
  console.log(_.get(state.request.locations, 'records'));
  return _.get(state.request.locations, 'records');
}
