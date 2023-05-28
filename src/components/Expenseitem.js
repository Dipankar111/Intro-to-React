
import './ExpenseItem.css'


function ExpenseItem(props) {
  return (
      <div className='container'>
         <h2>Expense Item!</h2> 
        <div>
          <h2>{props.locationOfExpenditure}</h2>
        </div>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <h2>{props.amount}</h2>
        </div>
        
      </div>
    );
  }
  
  export default ExpenseItem;
  