import axios from 'axios';

export function getProducts() {
  return axios.get('/api/products').then((res) => res.data);
}

export function getProduct(productId: string) {
  return axios.get(`/api/products/${productId}`).then((res) => res.data);
}
