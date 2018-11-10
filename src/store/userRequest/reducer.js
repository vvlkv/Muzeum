import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  locations: [],
  response: {}
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
    default:
      return state;
  }
}

export function postTmpRequest(state) {
  console.log("postTmpRequest");
  console.log(state.user.response);
  return state.user.response;
}

export function getLocations(state) {
  console.log(_.get(state.user.locations, 'records'));
  return _.get(state.user.locations, 'records');
}
