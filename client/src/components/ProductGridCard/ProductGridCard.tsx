import Product from '../../models/product';
import styles from './ProductGridCard.module.css';

type ProductGridCardProps = {
  product: Product
}

function ProductGridCard({ product }: ProductGridCardProps) {
  const isOnSale = !!product.discountPrice;
  const currentPrice = isOnSale ? product.discountPrice : product.price;

  return (
    <div className={styles.productGridCard}>
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
    </div>
  );
}

export default ProductGridCard;
