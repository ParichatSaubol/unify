// src/api/index.ts
import axios from 'axios';

const apiUrl = process.env.API_URL || 'https://tkktest.com';

export const httpClientWithoutApi = axios.create({
  baseURL: `${apiUrl}`, // API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const httpClient = axios.create({
  baseURL: `${apiUrl}/api`, // API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
