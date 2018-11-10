import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  tmpRequest: [], //{}?????????????????????????
  tmpRequests: [],
  jobTypes: [],
  jobCategories: [],
  locations: [],
  avds: [],
  response: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TMP_REQUESTS_FETCHED:
      return state.merge({
        tmpRequests: action.tmpRequests
      });
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
      return state.merge({
        response: action.resp
    });
    case types.LOCATIONS_FETCHED:
        return state.merge({
          locations: action.resp
        });
    case types.REQUEST_DELETED:
        console.log(action.resp);
          return state.merge({
            locations: action.resp
          });
    case types.AVDS_FETCHED:
        console.log(action.resp);
          return state.merge({
            avds: action.resp
          });
    case types.REQUEST_MODERATED:
    console.log(action.resp);
      return state.merge({
        locations: action.resp
      });
    default:
      return state;
  }
}

export function createRequest(state) {
  return state.request.response;
}

export function getTmpRequest(state) {
  console.log(state.request.tmpRequest);
  return state.request.tmpRequest;
}

export function getTmpRequests(state) {
  console.log(_.get(state.request.tmpRequests, 'records'));
  return _.get(state.request.tmpRequests, 'records');
}

export function getTypeJobs(state) {
  return _.get(state.request.jobTypes, 'records');
}

export function getCategoryOfJobs(state) {
  return _.get(state.request.jobCategories, 'records');
}

export function getLocations(state) {
  console.log(_.get(state.request.locations, 'records'));
  return _.get(state.request.locations, 'records');
}

export function getAvds(state) {
  console.log(_.get(state.request.locations, 'records'));
  return _.get(state.request.avds, 'records');
}
