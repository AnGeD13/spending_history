import styles from './app.module.scss';
import data from "../data/transactions.json";
import Title from "../components/Title/Title"
import Filter from '../components/Filter/Filter';
import Table from '../components/Table/Table';
import { useEffect, useState } from 'react';


function App() {
  const [transactions, setTransactions] = useState({});
  const [minSum, setMinSum] = useState(0);
  const [maxSum, setMaxSum] = useState(null);

  useEffect(() => {
    const groupedByDay = data.reduce((acc, item) => {
      const date = new Date(item.date);
      const day = date.toISOString().split('T')[0];
    
      if (!acc[day]) {
        acc[day] = [];
      }
    
      acc[day].push(item);
    
      return acc;
    }, {});

    // Теперь применяем фильтр по сумме
    const filteredTransactions = Object.fromEntries(
      Object.entries(groupedByDay).map(([day, items]) => {
        const filteredItems = items.filter(item =>
          (Math.abs(item.sum) >= minSum) &&
          (maxSum === null || Math.abs(item.sum) <= maxSum)
        );
        
        return [day, filteredItems];
      })
    );

    setTransactions(filteredTransactions);
    console.log("min max", minSum, maxSum);
    // setTransactions(groupedByDay);
  }, [minSum, maxSum])

  // useEffect(() => {
  //   const filteredTransactions = Object.fromEntries(
  //     Object.entries(transactions).map(([day, items]) => {
  //       const filteredItems = items.filter(item => 
  //         (minSum === null || Math.abs(item.sum) >= minSum) &&
  //         (maxSum === null || Math.abs(item.sum) <= maxSum)
  //       );

  //       return [day, filteredItems];
  //     })
  //   )

  //   setTransactions(filteredTransactions);
  // }, [minSum, maxSum])


  return (
    <div className={styles.block}>
      <Title/>
      <Filter setMinSum={setMinSum} setMaxSum={setMaxSum}/>
      <Table transactions={transactions}/>
    </div>
  )
}

export default App
