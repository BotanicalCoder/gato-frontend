import axios from 'axios';

const envBase = import.meta.env.VITE_API_BASE_URL;
// Allow empty string ('') to enable Vite proxy via relative /api
const baseURL = envBase === undefined ? 'http://localhost:8080' : envBase;

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach token from localStorage if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('gato.token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.clear();
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
