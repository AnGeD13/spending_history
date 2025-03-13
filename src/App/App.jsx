import { useEffect, useState } from 'react';
import Title from "@components/Title/Title";
import Filters from '@components/Filters/Filters/Filters';
import Table from '@components/Table/Table';
import { groupedByDay, sortedDaysAsc, sortedDaysDesc } from '@utils/groupingAndSortData';
import { 
  INITIAL_PAGE, INITIAL_MIN_SUM, 
  INITIAL_MAX_SUM, INITIAL_FIRST_DATE,
  INITIAL_LAST_DATE
} from '@data/constants';
import styles from './app.module.scss';


export default function App() {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [transactions, setTransactions] = useState({});
  const [minSum, setMinSum] = useState(INITIAL_MIN_SUM);
  const [maxSum, setMaxSum] = useState(INITIAL_MAX_SUM);
  const [firstDate, setFirstDate] = useState(INITIAL_FIRST_DATE);
  const [lastDate, setLastDate] = useState(INITIAL_LAST_DATE);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOrder, setSortOrder] = useState(sortedDaysAsc);

  const changeSortOrder = () => {
    if (sortOrder === sortedDaysAsc) {
      setSortOrder(sortedDaysDesc);
    }
    else {
      setSortOrder(sortedDaysAsc);
    }
  }

  useEffect(() => {
    const filteredTransactions = Object.fromEntries(
      sortOrder.map(day => {
        const items = groupedByDay[day];
        const filteredItems = items.filter(item =>
          (Math.abs(item.sum) >= minSum) &&
          (maxSum === null || Math.abs(item.sum) <= maxSum) && 
          (!firstDate || firstDate <= item.date) &&
          (!lastDate || item.date <= lastDate) &&
          (selectedTypes.length === 0 || selectedTypes.includes(item.transactionType))
        );
        
        return [day, filteredItems];
      })
    );

    setTransactions(filteredTransactions);
    setCurrentPage(INITIAL_PAGE);
  }, [minSum, maxSum, firstDate, lastDate, selectedTypes, sortOrder])

  return (
    <div className={styles.block}>
      <Title/>
      <Filters  
        setMinSum={setMinSum} 
        setMaxSum={setMaxSum} 
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        setFirstDate={setFirstDate}
        setLastDate={setLastDate}
      />
      <Table 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        transactions={transactions}
        changeSortOrder={changeSortOrder}
      />
    </div>
  )
}
