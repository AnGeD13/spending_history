import { validateNumberInput } from "../../../utils/validateNumberInput";
import styles from "./sumFilter.module.scss";

export default function SumFilter({setMinSum, setMaxSum}) {

  const getMaxSum = (value) => {
    if (isNaN(value)) {
      setMaxSum(null);
    }
    else {
      setMaxSum(value);
    }
  };

  const getMinSum = (value) => {
    if (isNaN(value)) {
      setMinSum(0);
    }
    else {
      setMinSum(value);
    }
  };

  const changeInput = (event, param) => {
    if (!isNaN(event.target.value)) {
      event.target.value = parseFloat(event.target.value);
    }
    if (param === "min") {
      getMinSum(event.target.value);
    }
    else if (param === "max") {
      getMaxSum(event.target.value);
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
          onBlur={(event) => changeInput(event, "min")}
        />
        <input 
          className={styles.filterNumber}
          type="number" 
          placeholder="До"
          onKeyDown={validateNumberInput}
          onBlur={(event) => changeInput(event, "max")}
        />
      </div>
    </section>
  )
}