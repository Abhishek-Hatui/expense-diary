import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const saveDataFromExpenseForm = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }

    props.onNewExpenseData(expense);
    //setShowForm(false);
  }

  const showFormHandler = ()=>{
    setShowForm(true);
  }

  const hideFormHandler = () => {
    setShowForm(false);
  }

  let formContent = <button onClick={showFormHandler}>Add new expense</button>;
  if(showForm === true){
    formContent = <ExpenseForm onSaveData={saveDataFromExpenseForm} hideForm={hideFormHandler}/>;
  }

  return (
    <div className="new-expense">
      {formContent}
    </div>
  );
};

export default NewExpense;
