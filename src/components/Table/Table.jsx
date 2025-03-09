import styles from "./table.module.scss";
import { getHoursAndMinutes } from "../../utils/getHourAndMinutes";
import { getDayAndMonth } from "../../utils/getDayAndMonth";

// TODO time button
export default function Table({transactions}) {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.table}>
        <div className={styles.thead}>
          <p className={styles.leftHeading}>Время</p>
          <p className={styles.centerHeading}>Описание</p>
          <p className={styles.rightHeading}>Сумма</p>
        </div>
        {Object.entries(transactions).map(([day, items], index) => {
          if (items.length > 0) {
            return (
            <div key={day}>
              <div key={`day-${index}`} className={styles.tableDate}>
                {getDayAndMonth(day)}
              </div>
              <ul key={`list-${index}`} className={styles.dataWrapper}>
                  {/* TODO delete slice */}
                {items.slice(0, 3).map(item => (
                  <li key={item.date} className={styles.tableRow}>
                    <p className={styles.usualTd}>{getHoursAndMinutes(item.date)}</p>
                    <p className={styles.usualTd}>{item.description}</p>
                    <p className={styles.rightLine}>{item.sum < 0 ? item.sum : `+${item.sum}`}</p>
                  </li>
                ))}
              </ul>
            </div>)
            }
            return null;
        })}
      </div>
    </div>
  )
}