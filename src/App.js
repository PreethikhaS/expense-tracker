import {ExpenseItem} from "../src/components/ExpenseItem"

function App() {
  const expenses = [
    {
      id:'e1',
      title: 'phone',
      amount: 50000,
      date: new Date(2022, 5, 11),
    },
    {
       id:'e2',
      title: 'Camera',
      amount: 60000,
      date: new Date(2022,5,12),
    },
    {
       id:'e3',
      title: 'laptop',
      amount: 90000,
      date: new Date(2022,5,.21),

    }
  ];
  return (
    <div >
    <ExpenseItem
    title={expenses[0].title}
    amount={expenses[0].amount}
    date={expenses[0].date}
    />
    <ExpenseItem
    title={expenses[1].title}
    amount={expenses[1].amount}
    date={expenses[1].date}
    />
    <ExpenseItem
    title={expenses[2].title}
    amount={expenses[2].amount}
    date={expenses[2].date}
    />
     
    </div>
  );
}

export default App;
