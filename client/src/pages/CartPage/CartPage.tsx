import { useQuery } from '@tanstack/react-query';
import QuantityInput from '../../components/QuantityInput/QuantityInput';
import { useShoppingCartContext } from '../../context/ShoppingCardContext';
import styles from './CartPage.module.css';
import { updateCart } from '../../utils/api';
import { formatCurrency } from '../../utils/currency';

function CartPage() {
  const { items, removeItem, addItem } = useShoppingCartContext();

  const cartItems = items.map((item) => ({
    productId: item.product._id,
    quantity: item.quantity
  }));

  const { data } = useQuery({
    queryKey: ['updateCart', cartItems],
    queryFn: () => updateCart(cartItems)
  });

  return (
    <div className={styles.cartPage}>
      <h1>Your Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <tbody>
              {items.map((item) => (
                <tr key={item.product._id} className={styles.cartItem}>
                  <td>
                    <div className={styles.productImageContainer}>
                      <img src={`https://picsum.photos/seed/${item.product._id}/350/400`} alt="" />
                    </div>
                  </td>
                  <td className={styles.productName}>{item.product.name}</td>
                  <td>
                    <QuantityInput
                      value={item.quantity}
                      onDecrement={() => removeItem(item.product)}
                      onIncrement={() => addItem(item.product)}
                    />
                  </td>
                  <td className={styles.colPrice}>
                    {formatCurrency((item.product.discountPrice || item.product.price) * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.totalPrice}>
            <span className={styles.label}>Order total:</span>
            <span className={styles.value}>
              {!data ? (
                'Loading...'
              ) : (
                formatCurrency(data.totalPrice)
              )}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
