import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterDataHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredExpenseItem = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  });

  
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterData={filterDataHandler}
          seletedValue={filteredYear}
        />
        <ExpenseChart expenses={filteredExpenseItem}/>
        <ExpensesList items ={filteredExpenseItem}/>
      </Card>
    </div>
  );
};

export default Expenses;
