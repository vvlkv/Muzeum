import _ from 'lodash';

const WORLDCLOCK_ENDPOINT = 'http://vkapi.ibisolutions.ru/';

class IbiApi {

  async getJobTypes() {
    const url = `${WORLDCLOCK_ENDPOINT}/restapi/api_get_all_areas_for_guests.php`;
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
    const url = `${WORLDCLOCK_ENDPOINT}/api_create_tmp_request.php`;
    console.log("postTmpRequest");
    const response = await fetch(url, {
      method: 'POST',
      body: dataR
    }).catch (function (error) {
    console.log('Request failed', error); });
      console.log("postTmpRequest non ok");
    if (!response.ok) {
      console.log("postTmpRequest non ok");
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }
}

export default new IbiApi();
