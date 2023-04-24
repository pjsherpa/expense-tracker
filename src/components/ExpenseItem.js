import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  let title = props.title;

  const [titles, setTitles] = useState(title);

  const clickHandler = () => {
    setTitles("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titles}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
