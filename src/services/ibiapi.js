import _ from 'lodash';

const WORLDCLOCK_ENDPOINT = 'http://vkapi.ibisolutions.ru/';

class IbiApi {
//http://vkapi.ibisolutions.ru/restapi/api_get_all_areas_for_guests.php
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

  /*async getJobTypes() {
  const location = window.location.hostname;
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const data = await fetch(`http://${location}:9000/api/sensors/`, settings)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(e => {
            return e
        });

    return data;
  }*/
}

export default new IbiApi();
