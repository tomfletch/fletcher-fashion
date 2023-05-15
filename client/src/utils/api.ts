import axios from 'axios';
import { CartItem, Cart } from '../models/cart';
import { Product } from '../models/product';

export function getProducts() {
  return axios.get<Product[]>('/api/products').then((res) => res.data);
}

export function getProduct(productId: string) {
  return axios.get<Product>(`/api/products/${productId}`).then((res) => res.data);
}

export function updateCart(cartItems: CartItem[]) {
  return axios.put<Cart>(`/api/cart`, { items: cartItems }).then((res) => res.data);
}
