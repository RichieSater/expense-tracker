import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Data Fees", amount: 294.67, date: new Date(2021, 2, 26) },
    { title: "Interest", amount: 874.67, date: new Date(2021, 5, 2) },
    { title: "Accounting Fees", amount: 594.67, date: new Date(2021, 4, 18) },
    { title: "Legal Fees", amount: 400.0, date: new Date(2021, 5, 13) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date.toISOString()}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date.toISOString()}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date.toISOString()}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date.toISOString()}
      />
    </div>
  );
}

export default App;
