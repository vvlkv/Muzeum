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
<<<<<<< HEAD
    'creator_vk_id': "1234",
    'location': location,
    'photo_url': '' };
  var strData = JSON.stringify(dataR);
  console.log(strData);
=======
    'creator_vk_id': 1234,
    'location': location,
    'photo_url': '' };
>>>>>>> ab6504ebb86f8f2833d740e736c16e47e99e6c80
  //var data = new FormData();
  //data.append( "json", JSON.stringify( location ) );
  return async(dispatch, getState) => {
    try {
      const resp = await ibiApiService.postTmpRequest(dataR);
      dispatch({type: types.TMP_REQUEST_POSTED, resp});
    } catch (e) {
      console.error(e);
    }
  }
}
