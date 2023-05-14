import axios from 'axios';
import { CartItem } from '../models/cart';

export function getProducts() {
  return axios.get('/api/products').then((res) => res.data);
}

export function getProduct(productId: string) {
  return axios.get(`/api/products/${productId}`).then((res) => res.data);
}

export function updateCart(cartItems: CartItem[]) {
  return axios.put(`/api/cart`, { items: cartItems }).then((res) => res.data);
}
