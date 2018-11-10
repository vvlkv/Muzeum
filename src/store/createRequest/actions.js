import * as types from './actionTypes';
import ibiApiService from '../../services/ibiapi';

export function fetchTmpRequest() {
  return async(dispatch, getState) => {
    try {
      const tmpRequest = await ibiApiService.getTmpRequest();
      dispatch({type: types.TMP_REQUEST_FETCHED, tmpRequest});
    } catch (e) {
      console.error(e);
    }
  }
}

export function createRequest(location, remark, creator, category, job_type) {
  if(!remark) {
    remark = "Нет описания";
  }
  if(location==-1) {
    location = "300";
  }
  if(!creator) {
    creator = 12345;
  }
  if(!category) {
    category = "BCK";
  }
  if(!job_type) {
    job_type = "SSN";
  }
  var dataR =  {
    "remark" : remark,
    "creator" : creator,
    "location" : location,
    "category" : category,
    "job_type" : job_type,
    "photo_url" : "www.vk.com"
  };
  var strData = JSON.stringify(dataR);
  console.log(strData);

  return async(dispatch, getState) => {
    try {
      const resp = await ibiApiService.createRequest(dataR);
      dispatch({type: types.CREATE_REQUEST, resp});
    } catch (e) {
      console.error(e);
    }
  }
}
