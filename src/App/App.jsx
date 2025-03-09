import { useEffect, useState } from 'react';
import Title from "../components/Title/Title"
import Filter from '../components/Filter/Filter';
import Table from '../components/Table/Table';
import data from "../data/transactions.json";
import styles from './app.module.scss';

export default function App() {
  const [transactions, setTransactions] = useState({});
  const [minSum, setMinSum] = useState(0);
  const [maxSum, setMaxSum] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);

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

    const filteredTransactions = Object.fromEntries(
      Object.entries(groupedByDay).map(([day, items]) => {
        const filteredItems = items.filter(item =>
          (Math.abs(item.sum) >= minSum) &&
          (maxSum === null || Math.abs(item.sum) <= maxSum) && 
          (selectedTypes.length === 0 || selectedTypes.includes(item.transactionType))
        );
        
        return [day, filteredItems];
      })
    );

    setTransactions(filteredTransactions);
  }, [minSum, maxSum, selectedTypes])

  return (
    <div className={styles.block}>
      <Title/>
      <Filter  
        setMinSum={setMinSum} 
        setMaxSum={setMaxSum} 
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}/>
      <Table transactions={transactions}/>
    </div>
  )
}
