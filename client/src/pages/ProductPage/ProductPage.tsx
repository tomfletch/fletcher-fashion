import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../utils/api';
import styles from './ProductPage.module.css';
import { useShoppingCartContext } from '../../context/ShoppingCardContext';
import QuantityInput from '../../components/QuantityInput/QuantityInput';
import { formatCurrency } from '../../utils/currency';

function ProductPage() {
  const { productId } = useParams();
  const { addItem, removeItem, getItem } = useShoppingCartContext();

  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId!)
  });

  if (isLoading) return <>Loading...</>;
  if (error || !product) return <>Error</>;

  const isOnSale = !!product.discountPrice;
  const currentPrice = product.discountPrice || product.price;

  const shoppingCartItem = getItem(productId!);
  const shoppingCartQuantity = shoppingCartItem?.quantity || 0;

  return (
    <div className={styles.productPage}>
      <div className={styles.productImageContainer}>
        <img src={`/images/${product.image}`} alt="" />
      </div>
      <div className={styles.content}>
        <h1>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.currentPrice}>{formatCurrency(currentPrice)}</p>
        {isOnSale && (
          <p className={styles.originalPrice}>{formatCurrency(product.price)}</p>
        )}
        <div className={styles.cartOptions}>
          {shoppingCartQuantity === 0 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </button>
          ) : (
            <QuantityInput
              value={shoppingCartQuantity}
              onDecrement={() => removeItem(product)}
              onIncrement={() => addItem(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
