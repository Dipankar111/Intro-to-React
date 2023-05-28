import React from 'react';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-IN', { month: 'long' });
  const day = props.date.toLocaleString('en-IN', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div >{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
