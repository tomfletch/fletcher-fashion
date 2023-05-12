import styles from './ListTypeSelector.module.css';

type ListTypeSelectorProps = {
  listType: 'row' | 'grid';
  setListType: (listType: 'row' | 'grid') => void;
};

function ListTypeSelector({ listType, setListType }: ListTypeSelectorProps) {
  return (
    <div className={styles.listTypeSelector}>
      <button
        type="button"
        aria-label="Display products in rows"
        aria-pressed={listType === 'row'}
        onClick={() => setListType('row')}
      >
        <i className="fa-solid fa-list"></i>
      </button>
      <button
        type="button"
        aria-label="Display products in grid"
        aria-pressed={listType === 'grid'}
        onClick={() => setListType('grid')}
      >
        <i className="fa-solid fa-grip"></i>
      </button>
    </div>
  )
}

export default ListTypeSelector;
