import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = 'acc79f6c2e05c9a0c967b8003e683848';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });