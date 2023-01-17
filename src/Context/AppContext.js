import { createContext, useReducer } from "react"
import App from "../App";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };

      case "DELETE_EXPENSE":
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense.id !== action.payload)
        };

      case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
    }
}
const initialState = {
  budget: 20000,
  expenses: [
    { id: uuidv4(), name: "Shopping", price: 100 },
    { id: uuidv4(), name: "Holiday", price: 200 },
    { id: uuidv4(), name: "Food", price: 300 },
    // { id: Date.now(), name: "Shopping", price: 100 },
    // {id : Date.now(), name : 'holiday', price: 200},
    // {id : Date.now(), name : 'Food', price: 100},
    // {id : Date.now(), name : 'Bike Service', price: 100},
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
 
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


