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


// const
// 	API = new IndexService();
// 	getData = API_CLASS =>
// 		(name, type, params) =>
// 			dispatch =>
// 				API_CLASS[name].apply(API_CLASS, params)
// 					.then(r => r.json())
// 					.then(payload => dispatch({
// 							type,
// 							payload,
// 						})
// 					)
// 	},
// 	getIndexData = getData(TestApi);
//
// export const actionName = params => getIndexData("decoration", "type", params);

/*export function getPhotos(year) {
  console.log('acccccccccccccction');

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  };

  function json(response) {
    return response.json()
  }

  return (dispatch) =>
    fetch('http://maysternja.dataroot.co/about/')
      .then(status)
      .then(json)
      .then(function(data) {
        dispatch({
          type: 'GET_DATA_SUCCESS',
          payload: data
        })
      }).catch(function(error) {
      console.log('Request failed', error);
    });
}*/
