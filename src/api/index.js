import axios from "axios";

const apiUrl = "http://demo4452328.mockable.io";

export function getTemplates() {
  return axios.get(`${apiUrl}/templates`);
}

export function getProperties() {
  return axios.get(`${apiUrl}/properties`);
}
