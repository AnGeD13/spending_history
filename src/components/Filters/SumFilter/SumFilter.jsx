import { validateNumberInput } from "@utils/validateNumberInput";
import styles from "./sumFilter.module.scss";
import { INITIAL_MAX_SUM, INITIAL_MIN_SUM } from "@data/constants";

export default function SumFilter({setMinSum, setMaxSum}) {
  const getMinSum = (event) => {
    if (event.target.value) {
      event.target.value = parseFloat(event.target.value);
      setMinSum(event.target.value);
    }
    else {
      setMinSum(INITIAL_MIN_SUM);
    }
  };

  const getMaxSum = (event) => {
    if (event.target.value) {
      event.target.value = parseFloat(event.target.value);
      setMaxSum(event.target.value);
    }
    else {
      setMaxSum(INITIAL_MAX_SUM);
    }
  };

  return (
    <section className={styles.filterSection}>
      <h3>Сумма операции</h3>
      <div className={styles.numberSection}>
        <input 
          className={styles.filterNumber}
          type="number" 
          placeholder="От"
          onKeyDown={validateNumberInput}
          onBlur={(event) => getMinSum(event)}
        />
        <input 
          className={styles.filterNumber}
          type="number" 
          placeholder="До"
          onKeyDown={validateNumberInput}
          onBlur={(event) => getMaxSum(event)}
        />
      </div>
    </section>
  )
}