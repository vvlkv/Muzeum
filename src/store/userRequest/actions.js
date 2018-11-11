import * as types from './actionTypes';
import ibiApiService from '../../services/ibiapi';

export function fetchLocations() {
  return async(dispatch, getState) => {
    try {
      const locations = await ibiApiService.getLocations();
      dispatch({type: types.LOCATIONS_FETCHED, locations});
    } catch (e) {
      console.error(e);
    }
  }
}

export function imgHackLogin() {
  console.log("imgHackLogin");
  var dataR =  {
    'auth_token': '494d73adf4848e30ab21c71bfd3742f0',
    'set_cookies': 'TRUE',
    'remember_me': 'TRUE'
   };
  var strData = JSON.stringify(dataR);
  console.log(strData);
  return async(dispatch, getState) => {
    try {
      const resp = await ibiApiService.loginPhoto(dataR);
      dispatch({type: types.LOGIN_PHOTO, resp});
    } catch (e) {
      console.error(e);
    }
  }
}

export function UploadPhoto(file) {

  if(!file) {
    console.log("Error UploadPhoto");
  }
  else {
    var dataR =  {
      'auth_token': '39FJKOUW5c7ef0e3b5ce8a530508ff1c3b3f2cef',
      'set_cookies': 'TRUE',
      'remember_me': 'TRUE'
     };
    var strData = JSON.stringify(dataR);
    console.log(strData);
    return async(dispatch, getState) => {
      try {
        const resp = await ibiApiService.loginPhoto(dataR);
        dispatch({type: types.LOGIN_PHOTO, resp});
      } catch (e) {
        console.error(e);
      }
    }
  }
}

export function postRequest(location, remark, creatorId, photo) {
  console.log("postRequest");
  if(!remark) {
    remark = "Нет описания";
  }
  if(location==-1) {
    location = "300";
  }
  if(!creatorId) {
    creatorId = 12345;
  }
  return async(dispatch, getState) => {
    try {
      const resp = await ibiApiService.postTmpRequest(location, remark, creatorId, photo);
      dispatch({type: types.TMP_REQUEST_POSTED, resp});
    } catch (e) {
      console.error(e);
    }
  }
}
