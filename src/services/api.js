import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:8081/gym-app/v1',
});

export default apiBase;
