import React from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
const ExpenseList = () => {

  const{expenses} = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          price={expense.price}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
