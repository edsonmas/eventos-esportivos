// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // Substitua pela URL de sua API Java
});

export default api;
