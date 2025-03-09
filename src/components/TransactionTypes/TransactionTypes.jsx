import { TRANSACTION_TYPES } from "../../data/constants";
import styles from "./transactionTypes.module.scss";

export default function TransactionTypes({selectedTypes, setSelectedTypes}) {

  const handleChangeTypes = (type) => {
    if (selectedTypes && selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <section className={styles.checkboxGroup}>
      <h3>Тип операции</h3>
      <section className={styles.checkboxSection}>
        {
          TRANSACTION_TYPES.map(({type, label}) => (
            <label className={styles.checkLabel} key={type}>
              <input 
                type="checkbox" 
                hidden 
                className={styles.check}
                checked={selectedTypes && selectedTypes.includes(type)}
                onChange={() => handleChangeTypes(type)}
              />
              <span className={styles.customCheckbox}></span>
              {label}
            </label>
          ))
        }
      </section>
    </section>
  )
}