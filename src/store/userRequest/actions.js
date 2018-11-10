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

export function UploadPhoto(file) {
  console.log("UploadPhoto1");
  if(!file) {
    console.log("Error UploadPhoto");
  }
  else {
    var dataR =  { 'user': "AlexeyBoooooB",
      'password': "4815162342",
      'auth_token': "UXAB4ZKE7c20e7d94931e11396094fe5f1d3eec6",
      'set_cookies': "TRUE ",
      'remember_me': "TRUE "
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

    dataR =  { 'file': file
     };
     strData = JSON.stringify(dataR);
     console.log(strData);

    return async(dispatch, getState) => {
      try {
        const urls = await ibiApiService.uploadPhoto(dataR);
        dispatch({type: types.PHOTO_LOADED, urls});
      } catch (e) {
        console.error(e);
      }
    }

  }
}

export function postRequest(location, remark, creatorId) {
  if(!remark) {
    remark = "Нет описания";
  }
  if(location==-1) {
    location = "300";
  }
  if(!creatorId) {
    creatorId = 12345;
  }
  var dataR =  { 'remark': remark,
    'creator_vk_id': creatorId,
    'location': location,
    'photo_url': '' };
  var strData = JSON.stringify(dataR);
  console.log(strData);
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
