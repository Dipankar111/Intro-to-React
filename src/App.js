import ExpenseItem from "./components/Expenseitem";

function App() {
  const expenses = [
    {title: "Food", locationOfExpenditure:"Grocery", amount: "Rs 10"},
    {title: "Petrol", locationOfExpenditure:"Travel", amount: "Rs 100" },
    {title: "Movies", locationOfExpenditure:"Entertainment", amount: "Rs 100" },
]

  return (
    <div>
      <h1>Let's get started!</h1>
      <div>
        {expenses.map((expense) => (
          <ExpenseItem
           
            title={expense.title}
            locationOfExpenditure={expense.locationOfExpenditure}
            amount={expense.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;