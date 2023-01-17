/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const ExpenseTotal = () => {

  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total,item) => {
    return (total += item.price)
  },0);

  return (
    <div className="alert alert-primary">
      <span>
        <strong>AMOUNT SPENT : Rs. {totalExpenses}</strong>
      </span>
    </div>
  );
}

export default ExpenseTotal