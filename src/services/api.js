import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:8081',
});

export default apiBase;
