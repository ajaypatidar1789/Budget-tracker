import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('name' + name + 'price' + price);

    const expense = {
      id : uuidv4(),
      name : name,
      price : parseInt(price)
    };

    dispatch({
      type : 'ADD_EXPENSE',
      payload : expense,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm text-light">
          <label for="name">Name</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm text-light">
          <label for="price">Price</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
