import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expense found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
