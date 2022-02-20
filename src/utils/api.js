class Api {
  constructor({ url, key, headers }) {
    this.url = url;
    this.key = key;
    this.headers = headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject('Произошла ошибка');
  }

  getBooks() {
    return fetch(
      `${this.url}books/v1/volumes?q=all&maxResults=30&key=${this.key}`,
      {
        method: 'GET',
        headers: this.headers,
      }
    ).then((res) => {
      return this._checkRequest(res);
    });
  }
}

export default new Api({
  url: 'https://www.googleapis.com/',
  key: 'AIzaSyDm7BoTRuvNX7gL2-rCUdMaVE8buxJxSyM',
  headers: {
    'Content-Type': 'application/json',
  },
});
