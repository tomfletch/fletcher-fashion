import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api';
import ProductGridCard from '../ProductGridCard/ProductGridCard';
import styles from './ProductList.module.css';

function ProductList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <div className={styles.productList}>
      {data.map((product: any) => (
        <ProductGridCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
