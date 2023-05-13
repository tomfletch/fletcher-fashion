import QuantityInput from '../../components/QuantityInput/QuantityInput';
import { useShoppingCartContext } from '../../context/ShoppingCardContext';
import styles from './CartPage.module.css';

function CartPage() {
  const { items, removeItem, addItem } = useShoppingCartContext();

  return (
    <div className={styles.cartPage}>
      <h1>Your Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CartPage;
