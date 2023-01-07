import Expenses from "./components/Expenses";

const App = () => {
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
    {
      id: "e4",
      title: "Mortgage",
      amount: 3600,
      date: new Date(2022, 12, 21),
    },
    {
      id: "e5",
      title: "Water",
      amount: 200,
      date: new Date(2022, 12, 21),
    },
    {
      id: "e6",
      title: "Garbage",
      amount: 200,
      date: new Date(2022, 12, 21),
    },
  ];
  return (
    <div>
      <div>
        <h1>Pj's Expenses</h1>
      </div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
