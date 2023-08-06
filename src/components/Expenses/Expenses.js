import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterDataHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredExpenseItem = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  });

  const expenseItem = filteredExpenseItem.map((item) => (
    <ExpenseItem
      title={item.title}
      date={item.date}
      amount={item.amount}
      key={item.id}
    />
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterData={filterDataHandler}
          seletedValue={filteredYear}
        />
        {expenseItem}
      </Card>
    </div>
  );
};

export default Expenses;
