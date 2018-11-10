import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  locations: [],
  response: {},
  url: null
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOCATIONS_FETCHED:
      return state.merge({
        locations: action.locations
      });
    case types.TMP_REQUEST_POSTED:
    console.log(action.resp);
        return state.merge({
          response: action.resp
        });
    case types.PHOTO_LOADED:
    console.log(action.urls);
        return state.merge({
          urls: action.urls
        });
        case types.LOGIN_PHOTO:
        console.log("LOGIN_PHOTO");
        console.log(action.resp);
            return state.merge({
              urls: action.resp
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

export function photoLoad(state) {
  console.log("postTmpRequest");
  console.log(state.user.urls);
  return state.user.urls;
}

export function getLocations(state) {
  console.log(_.get(state.user.locations, 'records'));
  return _.get(state.user.locations, 'records');
}
