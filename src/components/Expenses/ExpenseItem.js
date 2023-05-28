
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './Expensedetails';
import '../UI/ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="container">
      <ExpenseDate date={props.date} />
      
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
    </div>
  );
}

export default ExpenseItem;
