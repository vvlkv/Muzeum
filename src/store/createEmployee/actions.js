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

export function fetchCategoryOfJobs() {
  return async(dispatch, getState) => {
    try {
      const categoryJobs = await ibiApiService.getCategoryOfJobs();
      dispatch({type: types.CATEGORY_OF_JOBS_FETCHED, categoryJobs});
    } catch (e) {
      console.error(e);
    }
  }
}

export function createRequest(name, lastname, area, birth, vk_id, timetable, category, password, post, self_phone, work_phone, email) {
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

  "name" : "Тест",
  "lastname" : "Тестовый",
  "vk_id" : "2398098",
  "birth" : "1993-11-11",
  "post" : "1",
  "category" : "WRK",
  "self_phone" : "79111112233",
  "work_phone" : "2233",
  "email" : "test@test.test",
  "password" : "123456",
  "area" : "300",
  "timetable" : "1"

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
      dispatch({type: types.CREATE_EMPLOYEE, resp});
    } catch (e) {
      console.error(e);
    }
  }
}
