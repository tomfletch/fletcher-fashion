import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import styles from './ProductGridItem.module.css';
import { formatCurrency } from '../../utils/currency';

type ProductGridItemProps = {
  product: Product;
};

function ProductGridItem({ product }: ProductGridItemProps) {
  const isOnSale = !!product.discountPrice;
  const currentPrice = product.discountPrice || product.price;

  return (
    <Link to={`/products/${product._id}`} className={styles.productGridItem}>
      <div className={styles.productImageContainer}>
        <img src={`/images/${product.image}`} alt="" />
        {isOnSale && (
          <div className={styles.saleLabel}>Sale</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.price}>
          <div className={styles.currentPrice}>{formatCurrency(currentPrice)}</div>
          {isOnSale && (
            <div className={styles.originalPrice}>{formatCurrency(product.price)}</div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductGridItem;
