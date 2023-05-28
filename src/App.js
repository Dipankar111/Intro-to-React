import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Food', location: 'Grocery', amount: 'Rs 10', date: new Date(2023, 3, 22) },
    { title: 'Petrol', location: 'Travel', amount: 'Rs 100', date: new Date(2023, 2, 11) },
    { title: 'Movies', location: 'Entertainment', amount: 'Rs 100', date: new Date(2023, 5, 17) },
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <div>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            location={expense.location}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
