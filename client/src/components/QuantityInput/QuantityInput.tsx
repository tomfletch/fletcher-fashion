import styles from './QuantityInput.module.css';

type QuantityInputProps = {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

function QuantityInput({ value, onDecrement, onIncrement }: QuantityInputProps) {
  return (
    <div className={styles.quantityInput}>
      <button
        type="button"
        className="btn btn-primary"
        aria-label="Decrement quantity"
        onClick={() => onDecrement()}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <span className={styles.value}>{value}</span>
      <button
        type="button"
        className="btn btn-primary"
        aria-label="Increment quantity"
        onClick={() => onIncrement()}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default QuantityInput;
