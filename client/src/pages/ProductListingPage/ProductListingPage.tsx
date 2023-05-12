import { useState } from 'react';
import ListTypeSelector from '../../components/ListTypeSelector/ListTypeSelector';
import ProductList from '../../components/ProductList/ProductList';
import styles from './ProductListingPage.module.css';

type ProductListingPageProps = {
  filter?: string;
}

function ProductListingPage({ filter }: ProductListingPageProps) {
  const [listType, setListType] = useState<'row' | 'grid'>('grid');

  return (
    <>
      <div className={styles.listTypeSelectorContainer}>
        <ListTypeSelector listType={listType} setListType={setListType} />
      </div>
      <ProductList listType={listType} filter={filter} />
    </>
  );
}

export default ProductListingPage;
