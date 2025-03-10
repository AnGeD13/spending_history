import TransactionTypes from "../TransactionTypes/TransactionTypes";
import styles from "./filter.module.scss";
import { validateNumberInput } from "../../utils/validateNumberInput";


export default function Filter({setMinSum, setMaxSum, selectedTypes, setSelectedTypes}) {  

  const getMaxSum = (event) => {
    // console.log(+event.target.value);
    setMaxSum(+event.target.value);
  };

  const getMinSum = (event) => {
    // console.log(+event.target.value);
    setMinSum(+event.target.value);
  };

  return (
    <div>
      <h2>Фильтры</h2>
      <section className={styles.allFilters}>
        <section className={styles.filterSection}>
          <h3>Сумма операции</h3>
          <div className={styles.numberSection}>
            <input 
              className={styles.filterNumber}
              type="number" 
              placeholder="От"
              onKeyDown={validateNumberInput}
              onChange={getMinSum}
            />
            <input 
              className={styles.filterNumber}
              type="number" 
              placeholder="До"
              onKeyDown={validateNumberInput}
              onChange={getMaxSum}
            />
          </div>
        </section>
        <section className={styles.filterSection}>
          <h3>Дата</h3>
          <div className={styles.dataSection}>
            <input 
              className={styles.filterData}
              type="date" 
            />
            <input 
              className={styles.filterData}
              type="date" 
            />
          </div>
        </section>
        <TransactionTypes
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      </section>
    </div>
  )
}