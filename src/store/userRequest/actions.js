import * as types from './actionTypes';
import ibiApiService from '../../services/ibiapi';

export function fetchJobs() {
  return async(dispatch, getState) => {
    try {
      const time = await ibiApiService.getJobTypes();
      dispatch({type: types.JOBS_FETCHED, time});
    } catch (e) {
      console.error(e);
    }
  }
}
