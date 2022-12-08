import axios from 'axios';

const BASE_URL = 'https://commenaries-server.onrender.com';

export const getComments = () => {
  return axios.get(`${BASE_URL}/`);
};
