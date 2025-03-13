import { DAY_IN_MS, INITIAL_FIRST_DATE, INITIAL_LAST_DATE } from "@data/constants";
import styles from "./dataFilter.module.scss";

export default function DataFilter({setFirstDate, setLastDate}) {
  const getFirstDate = (event) => {
    if (event.target.value) {
      const value = new Date(event.target.value);
      const isoFormat = value.toISOString();
      setFirstDate(isoFormat);
    }
    else {
      setFirstDate(INITIAL_FIRST_DATE);
    }
  };

  const getLastDate = (event) => {
    if (event.target.value) {
      const value = new Date(event.target.value);
      value.setTime(value.getTime() + DAY_IN_MS);
      const isoFormat = value.toISOString();
      setLastDate(isoFormat);
    }
    else {
      setLastDate(INITIAL_LAST_DATE);
    }
  };

  return (
    <section className={styles.filterSection}>
      <h3>Дата</h3>
      <div className={styles.dataSection}>
        <input 
          className={styles.filterData}
          type="date" 
          onChange={getFirstDate}
        />
        <input 
          className={styles.filterData}
          type="date"
          onChange={getLastDate} 
        />
      </div>
    </section>
  )
}