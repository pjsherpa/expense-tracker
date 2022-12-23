import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 180.67,
      date: new Date(2022, 12, 21),
    },
    {
      id: "e2",
      title: "Car finance",
      amount: 494.67,
      date: new Date(2022, 12, 21),
    },
    {
      id: "e3",
      title: "Dentist finance",
      amount: 494.67,
      date: new Date(2022, 12, 21),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
