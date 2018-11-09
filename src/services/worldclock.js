import _ from 'lodash';

const WORLDCLOCK_ENDPOINT = 'http://worldclockapi.com';


class WorldClockService {

  async getTime() {
    const url = `${WORLDCLOCK_ENDPOINT}/api/json/est/now`;
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
    return _.get(data, 'currentDateTime');
  }
}

export default new WorldClockService();
