import { useState } from 'react';
import ListTypeSelector from '../../components/ListTypeSelector/ListTypeSelector';
import ProductList from '../../components/ProductList/ProductList';
import styles from './ProductListingPage.module.css';

function ProductListingPage() {
  const [listType, setListType] = useState<'row' | 'grid'>('grid');

  return (
    <>
      <div className={styles.listTypeSelectorContainer}>
        <ListTypeSelector listType={listType} setListType={setListType} />
      </div>
      <ProductList listType={listType} />
    </>
  );
}

export default ProductListingPage;
