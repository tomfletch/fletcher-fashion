import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api';
import ProductGridItem from '../ProductGridItem/ProductGridItem';
import ProductRowItem from '../ProductRowItem/ProductRowItem';
import styles from './ProductList.module.css';

type ProductListProps = {
  listType?: 'grid' | 'row';
};

function ProductList({ listType = 'grid' }: ProductListProps) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <div className={`${styles.productList} ${listType === 'grid' ? styles.grid : styles.row}`}>
      {data.map((product: any) => (
        listType === 'grid' ? (
          <ProductGridItem key={product._id} product={product} />
        ) : (
          <ProductRowItem key={product._id} product={product} />
        )
      ))}
    </div>
  );
}

export default ProductList;
