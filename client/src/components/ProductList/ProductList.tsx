import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api';
import ProductGridItem from '../ProductGridItem/ProductGridItem';
import ProductRowItem from '../ProductRowItem/ProductRowItem';
import styles from './ProductList.module.css';
import Product from '../../models/product';

type ProductListProps = {
  listType?: 'grid' | 'row';
  filter?: string;
};

function ProductList({ listType = 'grid', filter }: ProductListProps) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  let filteredProducts = data;

  if (filter === 'sale') {
    filteredProducts = data.filter((p: Product) => !!p.discountPrice);
  } else if (filter === 'men') {
    filteredProducts = data.filter((p: Product) => p.category === "Men's Clothing");
  } else if (filter === 'women') {
    filteredProducts = data.filter((p: Product) => p.category === "Women's Clothing");
  }

  return (
    <div className={`${styles.productList} ${listType === 'grid' ? styles.grid : styles.row}`}>
      {filteredProducts.map((product: any) => (
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
