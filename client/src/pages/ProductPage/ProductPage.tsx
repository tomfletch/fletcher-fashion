import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api';
import styles from './ProductPage.module.css';

function ProductPage() {
  const { productId } = useParams();

  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId!)
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  const isOnSale = !!product.discountPrice;
  const currentPrice = isOnSale ? product.discountPrice : product.price;

  return (
    <div className={styles.productPage}>
      <div className={styles.productImageContainer}>
        <img src={`https://picsum.photos/seed/${product._id}/350/400`} alt="" />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>£{currentPrice}</p>
        {isOnSale && (
          <p>£{product.price}</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
