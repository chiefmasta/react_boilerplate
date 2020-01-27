export const get = url => {
  let token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    headers["Authorization"] = "bearer " + token;
  }
  return fetch(url, { headers, method: "GET" }).then(res => res.json());
};

export const post = (url, data) => {
  let token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    headers["Authorization"] = "bearer " + token;
  }
  return fetch(url, data, { headers, method: "POST" }).then(res => res.json());
};
