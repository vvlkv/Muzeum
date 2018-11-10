import _ from 'lodash';

const IBISOLUTIONS_ENDPOINT = 'http://vkapi.ibisolutions.ru/';

class IbiApi {

  async getLocations() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_all_areas_for_guests.php`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async postTmpRequest(dataR) {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_create_tmp_request.php`;
    console.log("postTmpRequest");
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataR)
    });
    if (!response.ok) {
      console.log("postTmpRequest non ok");
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async getTmpRequest() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/***`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async createRequest(dataR) {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/***`;
    console.log("postTmpRequest");
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataR)
    });
    if (!response.ok) {
      console.log("postTmpRequest non ok");
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async getTypeJobs() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/***`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async getCategoryOfJobs() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/***`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async getPosts() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_user_posts.php`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async getTimeTables() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_timetables.php`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async createEmployee(dataR) {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_create_user.php`;
    console.log("postTmpRequest");
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataR)
    });
    if (!response.ok) {
      console.log("postTmpRequest non ok");
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

}

export default new IbiApi();
