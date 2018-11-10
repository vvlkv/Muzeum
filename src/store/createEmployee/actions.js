import * as types from './actionTypes';
import ibiApiService from '../../services/ibiapi';

export function fetchPosts() {
  return async(dispatch, getState) => {
    try {
      const posts = await ibiApiService.getPosts();
      dispatch({type: types.POSTS_FETCHED, posts});
    } catch (e) {
      console.error(e);
    }
  }
}

export function fetchTimeTables() {
  return async(dispatch, getState) => {
    try {
      const timeTables = await ibiApiService.getTimeTables();
      dispatch({type: types.TIME_TABLES_FETCHED, timeTables});
    } catch (e) {
      console.error(e);
    }
  }
}

export function fetchCategoryOfUser() {
  return async(dispatch, getState) => {
    try {
      const categoryUsers = await ibiApiService.getCategoryOfUsers();
      dispatch({type: types.CATEGORY_OF_USER_FETCHED, categoryUsers});
    } catch (e) {
      console.error(e);
    }
  }
}

export function createEmployee(name, lastname, area, birth, vk_id, timetable, category, password, post, self_phone, work_phone, email) {
  if(!birth) {
    birth = "1993-11-11";
  }
  if(area==-1) {
    area = "300";
  }
  if(!vk_id) {
    vk_id = 12345;
  }
  if(!category) {
    category = "BCK";
  }
  if(!post) {
    post = "1";
  }
  if(!name) {
    name = "Имён";
  }
  if(!lastname) {
    lastname = "Фамильев";
  }


  if(self_phone==-1) {
    self_phone = "79111112233";
  }
  if(!work_phone) {
    work_phone = "2233";
  }
  if(!email) {
    email = "test@test.test";
  }
  if(!password) {
    password = "1";
  }
  if(!timetable) {
    timetable = "1";
  }

  var dataR =  {
    "name" : name,
    "lastname" : lastname,
    "vk_id" : vk_id,
    "birth" : birth,
    "post" : post,
    "self_phone" : self_phone,
    "work_phone" : work_phone,
    "email" : email,
    "category" : category,
    "password" : password,
    "area" : area,
    "timetable" : timetable
  };
  var strData = JSON.stringify(dataR);
  console.log(strData);

  return async(dispatch, getState) => {
    try {
      const resp = await ibiApiService.createEmployee(dataR);
      console.log(resp);
      dispatch({type: types.CREATE_EMPLOYEE, resp});
    } catch (e) {
      console.error(e);
    }
  }
}
