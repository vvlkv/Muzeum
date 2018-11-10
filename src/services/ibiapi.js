import _ from 'lodash';

const IBISOLUTIONS_ENDPOINT = 'https://vkapi.ibisolutions.ru/';

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

  async getTmpRequests() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_all_tmp_requests.php`;
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

  async getTmpRequest(id) {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_one_tmp_request.php`;
    const response = await fetch(url, {
      method: 'GET',
      body: JSON.stringify(id)
    });
    if (!response.ok) {
      throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
    }
    const data = await response.json();
    return data;
  }

  async createRequest(dataR) {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_create_request.php`;
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
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_job_types.php`;
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

  async getCategoryOfUsers() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_user_categories.php`;
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
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_request_categories.php`;
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


/************************************NOT USED********************************************************/
/***********************************GET METHOD*******************************************************/

  async getRequestStates() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_request_states.php`;
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

  async getCommentTypes() {
    const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_comment_types.php`;
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

    async getExhibitTypes() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_exhibit_types.php`;
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

    async getExhibitClasses() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_exhibit_classes.php`;
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

    async getAreaTypes() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_area_types.php`;
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

    async getAreaClasses() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_area_classes.php`;
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


    /************************************NOT USED********************************************************/
    /***********************************POST METHOD*******************************************************/

    async postModerateTmpRequest(body) {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_moderate_tmp_request.php`;
      console.log("postModerateTmpRequest");
      console.log(JSON.stringify(body));
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        console.log("postModerateTmpRequest not ok");
        throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      return data;
    }

    async deleteTmpRequest(id) {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_delete_tmp_request.php`;
      console.log("deleteTmpRequest");
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(id)
      });
      if (!response.ok) {
        console.log("deleteTmpRequest not ok");
        throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      return data;
    }

    async postAssignRequest() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_assign_request.php`;
      console.log("postAssignRequest");
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        }
      });
      if (!response.ok) {
        console.log("postAssignRequest not ok");
        throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      return data;
    }

    async postChangeStateRequest() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_change_state_request.php`;
      console.log("postChangeStateRequest");
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        }
      });
      if (!response.ok) {
        console.log("postChangeStateRequest not ok");
        throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      return data;
    }

    async addComment(dataR) {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_add_comment.php`;
      console.log("addComment");
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dataR)
      });
      if (!response.ok) {
        console.log("addComment not ok");
        throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      return data;
    }

    async loginPhoto(dataR) {

      const url = `https://api.imageshack.com/v2/user/login`;
      console.log("loginPhoto");
      console.log(JSON.stringify(dataR));
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(dataR)
      });
      console.log(response);
      if (!response.ok) {
        console.log("loginPhoto not ok");
        throw new Error(`imageshack failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      console.log(data);
      return data;
    }

    async updatePhoto(dataR) {
      const url = `https://api.imageshack.com/v2/images`;
      console.log("updatePhoto");
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(dataR)
      });
      if (!response.ok) {
        console.log("addComment not ok");
        throw new Error(`Worldclock getTime failed, HTTP status ${response.status}`)
      }
      const data = await response.json();
      return _.get(data, 'urls');
    }

    async getAvds() {
      const url = `${IBISOLUTIONS_ENDPOINT}/restapi/api_get_all_adv.php`;
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

}

export default new IbiApi();
