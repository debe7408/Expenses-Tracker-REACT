import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 20th 2019</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
      </div>
      <div className="expense-item__price">259.56</div>
    </div>
  );
}

export default ExpenseItem;
