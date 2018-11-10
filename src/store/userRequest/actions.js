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

export function postRequest(location, remark, creatorId) {
  var dataR =  { 'remark': remark,
    'creator_vk_id': 1234,
    'location': location,
    'photo_url': '' };
  var strData = JSON.stringify(dataR);
  console.log(strData);
  //var data = new FormData();
  //data.append( "json", JSON.stringify( location ) );
  return async(dispatch, getState) => {
    try {
      const resp = await ibiApiService.postTmpRequest(strData);
      dispatch({type: types.TMP_REQUEST_POSTED, resp});
    } catch (e) {
      console.error(e);
    }
  }
}
