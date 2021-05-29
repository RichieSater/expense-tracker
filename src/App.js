import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    { title: "Data Fees", amount: 294.67, date: new Date(2021, 2, 26) },
    { title: "Interest", amount: 874.67, date: new Date(2021, 5, 2) },
    { title: "Accounting Fees", amount: 594.67, date: new Date(2021, 4, 18) },
    { title: "Legal Fees", amount: 400.0, date: new Date(2021, 5, 13) },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
