import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2727', 
  withCredentials: true,            
});

export default api;
