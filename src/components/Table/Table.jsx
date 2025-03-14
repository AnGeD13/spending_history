import { getHoursAndMinutes } from "@utils/getHourAndMinutes";
import { getDayAndMonth } from "@utils/getDayAndMonth";
import Pagination from "../Pagination/Pagination";
import { getPaginatedData } from "@utils/getPaginatedData";
import styles from "./table.module.scss";
import { groupData } from "@utils/groupingAndSortData";


export default function Table({
  currentPage, setCurrentPage, transactions, changeSortOrder
}) {

  const [paginatedItems, totalPages] = getPaginatedData(transactions, currentPage);
  const groupedByDate = groupData(paginatedItems);

  const NoTransactions = Object.values(transactions).every(items => items.length === 0);

  const onHandleChangeSort = (event) => {
    event.target.classList.toggle(styles.sortDesc);
    changeSortOrder();
  }

  return (
    <>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <div className={styles.thead}>
            <p className={styles.left}>
              Время{' '}
              <button className={styles.btnChangeSort} onClick={onHandleChangeSort}></button>
            </p>
            <p>Описание</p>
            <p className={styles.right}>Сумма</p>
          </div>
          {NoTransactions &&
            <p className={styles.nothingFound}>Ничего не найдено</p>
          }
          {!NoTransactions && Object.entries(groupedByDate).map(([day, items], index) => {
            if (items.length > 0) {
              return (
              <div key={day}>
                <time key={`day-${index}`} className={styles.tableDate} dateTime={day}>
                  {getDayAndMonth(day)}
                </time>
                <ul key={`list-${index}`} className={styles.dataWrapper}>
                  {items.map(item => (
                    <li key={item.date} className={styles.tableRow}>
                      <time dateTime={item.date}>{getHoursAndMinutes(item.date)}</time>
                      <p>{item.description}</p>
                      <p className={styles.right}>{item.sum < 0 ? item.sum : `+${item.sum}`}</p>
                    </li>
                  ))}
                </ul>
              </div>)
              }
            })
          }
        </div>
      </div>
    </>
  )
}