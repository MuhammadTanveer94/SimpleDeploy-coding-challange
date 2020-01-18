import { fetchUtil } from "../Utils/fetchUtil";
import Config from "../config";

export const getTodo = () => {
  return fetchUtil({ url: "/" })
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

export const addTodo = title => {
  let body = JSON.stringify({
    title
  });
  return fetchUtil({
    url: "/",
    method: "POST",
    body
  })
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

export const updateTodo = (id, title) => {
  let body = JSON.stringify({
    title
  });

  return fetchUtil({
    url: `/${id}`,
    method: "PATCH",
    body
  })
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

export const deleteTodo = id => {
  return fetch(`${Config.env().API_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  }).then(res => {
    if (res.status === 200) {
      return Promise.resolve(id);
    }
    return Promise.reject(false);
  });
};
