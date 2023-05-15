import { useState } from 'react';
import ListTypeSelector from '../../components/ListTypeSelector/ListTypeSelector';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import ProductList from '../../components/ProductList/ProductList';
import styles from './ProductListingPage.module.css';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../utils/api';
import ActiveFilters from '../../components/ActiveFilters/ActiveFilters';

type ProductListingPageProps = {
  filter?: string;
}

export type Filters = {
  price: number[] | null;
  categories: string[] | null;
};

function ProductListingPage({ filter }: ProductListingPageProps) {
  const [listType, setListType] = useState<'row' | 'grid'>('grid');
  const [filters, setFilters] = useState<Filters>({
    price: null,
    categories: null
  });

  const { isLoading, error, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if (isLoading) return <>Loading...</>;
  if (error || !products) return <>Error</>;

  let pageProducts = products;

  if (filter === 'sale') {
    pageProducts = products.filter((p) => !!p.discountPrice);
  } else if (filter === 'men') {
    pageProducts = products.filter((p) => p.categories.includes("Men's Clothing"));
  } else if (filter === 'women') {
    pageProducts = products.filter((p) => p.categories.includes("Women's Clothing"));
  }

  let filteredProducts = pageProducts;

  if (filters.price !== null) {
    const [minPrice, maxPrice] = filters.price;
    filteredProducts = filteredProducts.filter((p) => p.price >= minPrice && p.price <= maxPrice);
  }

  if (filters.categories !== null) {
    const filterCategories = filters.categories;
    filteredProducts = filteredProducts.filter((p) => p.categories.some((c) => filterCategories.includes(c)));
  }

  return (
    <div className={styles.productListingPage}>
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div>
        <div className={styles.showingCountContainer}>
          <div className={styles.showingCount}>
            {filteredProducts.length === pageProducts.length ? (
              <>Showing <strong>{pageProducts.length}</strong> {pageProducts.length === 1 ? 'product' : 'products'}</>
            ) : (
              <>
                Showing <strong>{filteredProducts.length}</strong>{' '}
                of <strong>{pageProducts.length}</strong>{' '}
                {pageProducts.length === 1 ? 'product' : 'products'}
              </>
            )}
          </div>
          <div className={styles.listTypeSelectorContainer}>
            <ListTypeSelector listType={listType} setListType={setListType} />
          </div>
        </div>
        <ActiveFilters filters={filters} setFilters={setFilters} />
        <ProductList listType={listType} products={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductListingPage;
