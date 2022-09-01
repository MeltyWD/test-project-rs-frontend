class NewsApi {
  constructor(option) {
    this._baseUrl = option.baseUrl;
  }

  _apiResultReturn(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      throw err;
    });
  }

  _fetch(params) {
    return fetch(`${this._baseUrl}/${params}`).then((res) =>
      this._apiResultReturn(res)
    );
  }

  getAllLeads() {
    return this._fetch(`api/leads`);
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://testprojectrs.herokuapp.com",
});
export default newsApi;
