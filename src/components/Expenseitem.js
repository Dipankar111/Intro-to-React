
import './ExpenseItem.css'


function ExpenseItem() {

  const locationOfExpenditure = 'Grocery Store'
    
  return (
      <div className='container'>
         <h2>Expense Item!</h2> 
        <div>
          <h2>Food Rs 10</h2>
        </div>
        <div>
          <h2>Petrol Rs 100</h2>
        </div>
        <div>
          <h2>Movies Rs 200</h2>
        </div>
        <p>You spent money at: {locationOfExpenditure}</p>
      </div>
    );
  }
  
  export default ExpenseItem;
  