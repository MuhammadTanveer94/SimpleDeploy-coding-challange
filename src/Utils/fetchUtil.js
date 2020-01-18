import Config from "../config";
import { handleFetchError } from "./errorHandleUtil";

export const fetchUtil = data => {
  const { url, method = "GET", body = null } = data;
  let headers = { "Content-Type": "application/json" };

  return fetch(`${Config.env().API_URL}${url}`, {
    method,
    headers,
    body
  }).then(handleFetchError);
};
