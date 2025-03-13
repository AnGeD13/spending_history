import { useEffect, useState } from 'react';
import Title from "../components/Title/Title"
import Filter from '../components/Filters/Filters/Filters';
import Table from '../components/Table/Table';
import { groupedByDay, sortedDaysAsc, sortedDaysDesc } from '../utils/groupingAndSortData';
import styles from './app.module.scss';


export default function App() {
  const [transactions, setTransactions] = useState({});
  const [minSum, setMinSum] = useState(0);
  const [maxSum, setMaxSum] = useState(null);
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
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
  }, [minSum, maxSum, firstDate, lastDate, selectedTypes, sortOrder])

  return (
    <div className={styles.block}>
      <Title/>
      <Filter  
        setMinSum={setMinSum} 
        setMaxSum={setMaxSum} 
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        setFirstDate={setFirstDate}
        setLastDate={setLastDate}
      />
      <Table 
        transactions={transactions}
        changeSortOrder={changeSortOrder}
      />
    </div>
  )
}
