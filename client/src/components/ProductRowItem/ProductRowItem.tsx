import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import { formatCurrency } from '../../utils/currency';
import styles from './ProductRowItem.module.css';

type ProductRowItemProps = {
  product: Product;
};

function ProductRowItem({ product }: ProductRowItemProps) {
  const isOnSale = !!product.discountPrice;
  const currentPrice = product.discountPrice || product.price;

  return (
    <div className={styles.productRowItem}>
      <Link to={`/products/${product._id}`}>
        <div className={styles.productImageContainer}>
          <img src={`https://picsum.photos/seed/${product._id}/350/400`} alt="" />
          {isOnSale && (
            <div className={styles.saleLabel}>Sale</div>
          )}
        </div>
      </Link>
      <div className={styles.content}>
        <Link className={styles.productName} to={`/products/${product._id}`}>{product.name}</Link>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          <div className={styles.currentPrice}>{formatCurrency(currentPrice)}</div>
          {isOnSale && (
            <div className={styles.originalPrice}>{formatCurrency(product.price)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductRowItem;
