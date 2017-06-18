import IndexService from "../api/api"
const API = new IndexService();

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

export const getData = (name, type, params) =>
  dispatch =>
    API[name].apply(API, params)
      .then(status)
      .then(json)
      .then(function(data) {
        dispatch({
          type: type,
          payload: data
        })
      }).catch(function(error) {
      console.log('Request failed', error);
    });
