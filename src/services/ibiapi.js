import _ from 'lodash';

const WORLDCLOCK_ENDPOINT = 'http://vkapi.ibisolutions.ru/';


class IbiApi {

  async getJobTypes() {
    const url = `${WORLDCLOCK_ENDPOINT}/restapi/api_get_job_types.php`;
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
    console.log(data);
    return data;
  }
}

export default new IbiApi();
