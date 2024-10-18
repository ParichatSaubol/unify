// src/api/index.ts
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://tkktest.com/api', // API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
