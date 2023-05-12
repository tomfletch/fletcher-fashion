import { Link } from 'react-router-dom';
import Product from '../../models/product';
import styles from './ProductGridItem.module.css';

type ProductGridItemProps = {
  product: Product;
};

function ProductGridItem({ product }: ProductGridItemProps) {
  const isOnSale = !!product.discountPrice;
  const currentPrice = isOnSale ? product.discountPrice : product.price;

  return (
    <Link to={`/products/${product._id}`} className={styles.productGridItem}>
      <div className={styles.productImageContainer}>
        <img src={`https://picsum.photos/seed/${product._id}/350/400`} alt="" />
        {isOnSale && (
          <div className={styles.saleLabel}>Sale</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.price}>
          <div className={styles.currentPrice}>£{currentPrice}</div>
          {isOnSale && (
            <div className={styles.originalPrice}>£{product.price}</div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductGridItem;
