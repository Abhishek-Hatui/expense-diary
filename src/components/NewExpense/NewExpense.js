import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveDataFromExpenseForm = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }

    props.onNewExpenseData(expense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataFromExpenseForm}/>
    </div>
  );
};

export default NewExpense;
