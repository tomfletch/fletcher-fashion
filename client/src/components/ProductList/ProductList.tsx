import ProductGridItem from '../ProductGridItem/ProductGridItem';
import ProductRowItem from '../ProductRowItem/ProductRowItem';
import styles from './ProductList.module.css';
import { Product } from '../../models/product';

type ProductListProps = {
  listType?: 'grid' | 'row';
  products: Product[];
};

function ProductList({ listType = 'grid', products }: ProductListProps) {
  return (
    <div className={`${styles.productList} ${listType === 'grid' ? styles.grid : styles.row}`}>
      {products.map((product: any) => (
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
