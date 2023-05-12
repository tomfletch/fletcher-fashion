import axios from 'axios';

export function getProducts() {
  return axios.get('/api/products').then((res) => res.data);
}
