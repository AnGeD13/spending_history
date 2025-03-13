import styles from "./dataFilter.module.scss";

export default function DataFilter({setFirstDate, setLastDate}) {
  const getFirstDate = (event) => {
    const value = new Date(event.target.value);
    const isoFormat = value.toISOString();
    setFirstDate(isoFormat);
  };

  const getLastDate = (event) => {
    const day = 86400000;
    const value = new Date(event.target.value);
    value.setTime(value.getTime() + day);
    const isoFormat = value.toISOString();
    setLastDate(isoFormat);
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