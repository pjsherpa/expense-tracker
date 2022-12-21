import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 12, 21),
    },
    {
      id: "e2",
      title: "Car finance",
      amount: 294.67,
      date: new Date(2022, 12, 21),
    },
  ];
  return;
  <div>
    <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
    ></ExpenseItem>

    <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
    ></ExpenseItem>
  </div>;
}

export default App;
