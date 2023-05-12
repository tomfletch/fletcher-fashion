import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductPage from './pages/ProductPage/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ProductListingPage />
      },
      {
        path: 'sale',
        element: <ProductListingPage filter="sale" />
      },
      {
        path: 'men',
        element: <ProductListingPage filter="men" />
      },
      {
        path: 'women',
        element: <ProductListingPage filter="women" />
      },
      {
        path: 'products/:productId',
        element: <ProductPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
