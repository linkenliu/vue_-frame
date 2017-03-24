import axios from 'axios'

const baseUrl = 'http://localhost:8020/admin'


export default {
  getEditorList (params) {
    return axios.get(`${baseUrl}/editor/`);
  },
  saveEditor (params){
    return axios.post(`${baseUrl}/editor/`,params);
  },
  findOneEditor (params){
    return axios.get(`${baseUrl}/findOneEditor?id=${params.id}`);
  },
  deleteEditor (params){
    return axios.delete(`${baseUrl}/editor?id=${params.id}`);
  }

}
