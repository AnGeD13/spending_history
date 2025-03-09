import TransactionTypes from "../TransactionTypes/TransactionTypes";
import styles from "./filter.module.scss";

export default function Filter({setMinSum, setMaxSum, selectedTypes, setSelectedTypes}) {
  const getMinSum = (event) => {
    // console.log(+event);
    setMinSum(+event);
  };

  const getMaxSum = (event) => {
    // console.log(+event);
    setMaxSum(+event);
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
              onChange={(event) => getMinSum(event.target.value)}
            />
            <input 
              className={styles.filterNumber}
              type="number" 
              placeholder="До"
              onChange={(event) => getMaxSum(event.target.value)}
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