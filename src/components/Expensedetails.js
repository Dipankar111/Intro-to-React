import React from 'react';

function ExpenseDetails(props) {
  return (
    <div >
      <div>{props.amount}</div>
      <div>{props.location}</div>
      <div>{props.title}</div>
    </div>
  );
}

export default ExpenseDetails;
