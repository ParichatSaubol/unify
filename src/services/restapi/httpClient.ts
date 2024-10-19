// src/api/index.ts
import axios from 'axios';

const apiUrl = process.env.API_URL;

const httpClient = axios.create({
  baseURL: `${apiUrl}/api`, // API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
