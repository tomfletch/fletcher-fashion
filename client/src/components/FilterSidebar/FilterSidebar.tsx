import { Checkbox, FormControlLabel, Slider } from '@material-ui/core';
import styles from './FilterSidebar.module.css';
import { formatIntCurrency } from '../../utils/currency';
import { Filters } from '../../pages/ProductListingPage/ProductListingPage';
import { ChangeEvent } from 'react';

const MIN_PRICE = 0;
const MAX_PRICE = 250;

const CATEGORIES = ["Dresses", "Jackets", "Shoes", "Tops"];

type FilterSidebarProps = {
  filters: Filters;
  setFilters: (setFiltersFn: ((prevFilters: Filters) => Filters)) => void;
}

function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const handleChange = (event: any, newValue: number | number[]) => {
    let price: number[] | null = newValue as number[];

    if (price[0] === MIN_PRICE && price[1] === MAX_PRICE) {
      price = null;
    }

    setFilters((prevFilters) => ({ ...prevFilters, price }));
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;

    setFilters((prevFilters) => {
      let newCategories = prevFilters.categories || [];

      if (checked) {
        newCategories = [...newCategories, name];
      } else {
        newCategories = newCategories.filter((c) => c !== name);
      }

      console.log(newCategories);

      return {...prevFilters, categories: (newCategories.length === 0 ? null : newCategories)};
    });
  };

  return (
    <div className={styles.filterSidebar}>
      <section>
        <div className={styles.filterType}>Price</div>
        <div className={styles.filterValues}>
          <Slider
            value={filters.price || [MIN_PRICE, MAX_PRICE]}
            min={MIN_PRICE}
            max={MAX_PRICE}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelFormat={formatIntCurrency}
            getAriaValueText={formatIntCurrency}
          />
          <div className={styles.sliderValues}>
            <span>{formatIntCurrency(MIN_PRICE)}</span>
            <span>{formatIntCurrency(MAX_PRICE)}</span>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.filterType}>Category</div>
        <div className={styles.filterValues}>
          {CATEGORIES.map((category) => (
            <FormControlLabel
              key={category}
              label={category}
              control={
                <Checkbox
                  name={category}
                  size="small"
                  color="primary"
                  checked={filters.categories?.includes(category) || false}
                  onChange={handleCategoryChange}
                />
              }
            />
          ))}

        </div>
      </section>
    </div>
  )
}

export default FilterSidebar;
