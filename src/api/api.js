import forEach from "lodash/forEach"

class Api {
  constructor() {
    this.URL = "http://maysternja.dataroot.co/";
  }

  fetch(url, obj = {}) {
    // obj.headers = {"X-Accepted-Language" : lang};
    // obj.mode = "no-cors";
    return fetch(url, obj);
  }

  get(url, params) {
    return this
      .fetch(this.URL + url + this.params(params));
  }

  error(url, e) {
    throw new Error(url, e)
  }

  post(url, body) {
    // typeof body = FormData
    return this
      .fetch(this.URL + url, {
        method: "POST",
        body
      });
    // .then(r => r.json());
  }


  params(object) {
    if (!object && object !== 0) return "";

    let result = [];
    forEach(object, (val, key) =>
      (val || val === 0)
      && result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
    );

    return "?" + result.join('&');
  }
}


export default class IndexService extends Api {
  about(params) {
    return this.get(`/about/`, params)
  }

  park(params) {
    return this.get(`/catalog/park/`, params)
  }

  architecture(params) {
    return this.get(`/catalog/architecture/`, params)
  }

  decoration(params) {
    let type = "marble";
    return this.get(`/catalog/decoration/?type=${type}`, params)
  }

  projects(params) {
    return this.get(`/projects/`, params)
  }

  callback(body) {
    return this.post('/callback/', body)
  }
}
