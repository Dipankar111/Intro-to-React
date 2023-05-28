import React from 'react';
import '../UI/Expensedetails.css'

function ExpenseDetails(props) {
  return (
    <div className='expense-details' >
      <div>{props.amount}</div>
      <div>{props.location}</div>
      <div>{props.title}</div>
    </div>
  );
}

export default ExpenseDetails;
