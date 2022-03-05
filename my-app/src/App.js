import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New phone ",
      amount: 300,
      date: new Date(2022, 3, 20),
    },
  ];

  // ALTERNATIVE WAY TO WRITE REACT CODE INSTEAD OF JSX
  // import React from "react";
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Expense Tracker"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  function addExpenseHandler(expenseData) {
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
