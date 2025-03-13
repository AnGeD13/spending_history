import TransactionTypes from "../../TransactionTypes/TransactionTypes";
import DataFilter from "../DataFilter/DataFilter";
import SumFilter from "../SumFilter/SumFilter";
import styles from "./filters.module.scss";


export default function Filter({
  setMinSum, setMaxSum, selectedTypes, setSelectedTypes,
  setFirstDate, setLastDate
}) {  

  return (
    <div>
      <h2>Фильтры</h2>
      <section className={styles.allFilters}>
        <SumFilter
          setMinSum={setMinSum}
          setMaxSum={setMaxSum}
        />
        <DataFilter
          setFirstDate={setFirstDate}
          setLastDate={setLastDate}
        />
        <TransactionTypes
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      </section>
    </div>
  )
}