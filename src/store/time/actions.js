import * as types from './actionTypes';
import worldclockService from '../../services/worldclock';

export function fetchTime() {
  return async(dispatch, getState) => {
    try {
      const time = await worldclockService.getTime();
      dispatch({type: types.TIME_FETCHED, time});
    } catch (e) {
      console.error(e);
    }
  }
}

export function fetchBobTime() {
  return async(dispatch, getState) => {
    try {
      const time = await worldclockService.getTime();
      dispatch({type: types.TIME_BOB_FETCHED, time});
    } catch (e) {
      console.error(e);
    }
  }
}
