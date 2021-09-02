import axios from 'axios';

const baseURL = 'https://coding-challenge-api.aerolab.co/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMwZTBlMGE5MDUzOTAwMjFiNzBiMjAiLCJpYXQiOjE2MzA1OTMyNDh9.6NAySmApXVQcpTEhMVnqozktGY86yMAmrC9Iwv7C7xM';

const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(async (config) => {
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export default axiosClient;
