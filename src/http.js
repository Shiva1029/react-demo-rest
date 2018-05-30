import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.walmartlabs.com',
});

instance.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers,
    'X-Originating-IP': '127.0.0.1',
  },
  params: {
    ...config.params,
    apiKey: 'x5hnkw7gp9htumduhhf7gzbu',
    format: 'json',
  },
}), error => Promise.reject(error));

export default instance;
