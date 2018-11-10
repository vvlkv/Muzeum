import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  posts: [], //{}?????????????????????????
  usersCategories: [],
  locations: [],
  timeTables: [],
  workers: [],
  response: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.POSTS_FETCHED:
      return state.merge({
        posts: action.posts
      });
    case types.TIME_TABLES_FETCHED:
      return state.merge({
        timeTables: action.timeTables
      });
    case types.CATEGORY_OF_USER_FETCHED:
      return state.merge({
        usersCategories: action.categoryUsers
      });
    case types.CREATE_EMPLOYEE:
    console.log(action.resp);
      return state.merge({
        response: action.resp
      });
    case types.LOCATIONS_FETCHED:
    console.log(action.resp);
      return state.merge({
        locations: action.locations
      });
    case types.WORKERS_FETCHED:
    console.log(action.resp);
      return state.merge({
        workers: action.worker
      });
    default:
      return state;
  }
}

export function createEmployee(state) {
  console.log("createEmployee");
  console.log(state.employee.response);
  return state.employee.response;
}

export function getPosts(state) {
  console.log(_.get(state.employee.posts, 'records'));
  return _.get(state.employee.posts, 'records');
}

export function getWorkers(state) {
  console.log(_.get(state.employee.workers, 'records'));
  return _.get(state.employee.workers, 'records');
}

export function getTimeTables(state) {
  console.log(_.get(state.employee.timeTables, 'records'));
  return _.get(state.employee.timeTables, 'records');
}

export function getCategoryOfUser(state) {
  console.log(_.get(state.employee.usersCategories, 'records'));
  return _.get(state.employee.usersCategories, 'records');
}

export function getLocations(state) {
  console.log(_.get(state.employee.locations, 'records'));
  return _.get(state.employee.locations, 'records');
}
