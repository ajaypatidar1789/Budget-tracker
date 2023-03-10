import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const Remaining = () => {

  const {expenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.price);
  },0)

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>
        <strong>REMAINING : Rs. {budget - totalExpenses}</strong>
      </span>
    </div>
  );
};

export default Remaining;