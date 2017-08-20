import axios from 'axios';
const PORT = 3000;
const API_PREFIX = 'http://localhost:' + PORT;

export default {
  createEmployee(props) {
    return axios.post(API_PREFIX+`/user`, props);
  },

  updateEmployee(id, props) {
    return axios.put(API_PREFIX+`/user/${id}`, props);
  },

  getEmployeeList() {
     return axios.get(API_PREFIX+`/user`);
  },

  getEmployee(id) {
    return axios.get(API_PREFIX+`/user/${id}`);
  },

  deleteEmployee(id) {
    return axios.delete(API_PREFIX+`/user/${id}`);
  },

  getTags() {
    return axios.get(API_PREFIX+`/tag/`);
  },

  addTag(tag) {
    return axios.post(API_PREFIX+`/tag/`, tag);
  }
}
