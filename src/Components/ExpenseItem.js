import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type : 'DELETE_EXPENSE',
      payload : props.id,
    })
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
      {props.name}
      <div>
        <span className="badge badge-pill badge-primary mr-3 text-black fs-5">
          Rs. {props.price}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}/>
      </div>
    </li>
  );
};

export default ExpenseItem;
