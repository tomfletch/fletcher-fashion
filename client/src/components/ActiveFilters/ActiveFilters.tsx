import { Chip } from '@material-ui/core';
import { Filters } from '../../pages/ProductListingPage/ProductListingPage';
import { formatIntCurrency } from '../../utils/currency';
import styles from './ActiveFilters.module.css';

type ActiveFiltersProps = {
  filters: Filters;
  setFilters: (setFiltersFn: ((prevFilters: Filters) => Filters)) => void;
};

function ActiveFilters({ filters, setFilters }: ActiveFiltersProps) {

  const removePriceFilter = () => {
    setFilters((prevFilters) => ({...prevFilters, price: null}))
  }

  const removeCategoryFilter = (category: string) => {
    setFilters((prevFilters) => {
      let categories: string[] | null = prevFilters.categories?.filter((c) => c !== category) || [];

      if (categories.length === 0) {
        categories = null;
      }

      return {...prevFilters, categories };
    });
  }

  const filterChips = [];

  if (filters.price) {
    filterChips.push(
      <Chip
        key="price"
        label={`${formatIntCurrency(filters.price[0])} to ${formatIntCurrency(filters.price[1])}`}
        onDelete={removePriceFilter}
        variant="outlined"
        size="small"
      />
    );
  }

  if (filters.categories) {
    filters.categories.forEach((category) => {
      filterChips.push(
        <Chip
          key={`category-${category}`}
          label={category}
          onDelete={() => removeCategoryFilter(category)}
          variant="outlined"
          size="small"
        />
      );
    })
  }

  if (filterChips.length === 0) {
    return null;
  }

  return (
    <div className={styles.activeFilters}>
      <span className={styles.label}>Filters:</span>
      {filterChips}
    </div>
  );
}

export default ActiveFilters;
