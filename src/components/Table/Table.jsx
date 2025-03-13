import { getHoursAndMinutes } from "../../utils/getHourAndMinutes";
import { getDayAndMonth } from "../../utils/getDayAndMonth";
import styles from "./table.module.scss";
import Pagination from "../Pagination/Pagination";


const getPaginatedData = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1)*itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}

export default function Table({
  currentPage, setCurrentPage, transactions, changeSortOrder
}) {
  const itemsPerPage = 30;

  const flatItems = Object.values(transactions).flat();
  const totalPages = Math.ceil(flatItems.length / itemsPerPage);
  const paginatedItems = getPaginatedData(flatItems, currentPage, itemsPerPage);

  const groupedByDate = paginatedItems.reduce((acc, item) => {
    const date = new Date(item.date);
    const dateKey = date.toISOString().split('T')[0];
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(item);
    acc[dateKey].sort((a, b) => new Date(a.date) - new Date(b.date));
    return acc;
  }, {});

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
            <p className={styles.leftHeading}>
              Время{' '}
              <button className={styles.btnChangeSort} onClick={onHandleChangeSort}></button>
            </p>
            <p className={styles.centerHeading}>Описание</p>
            <p className={styles.rightHeading}>Сумма</p>
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
                      <p className={styles.rightLine}>{item.sum < 0 ? item.sum : `+${item.sum}`}</p>
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