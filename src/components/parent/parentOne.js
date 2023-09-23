import { useReducer, useState } from "react";
import ChildOne from "../children/childOne";
const InitialState = {
  count: 0,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    case "FIVE":
      return {
        ...state,
        count: 5,
      };
    default:
      return state;
  }
};
const ParentOne = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  console.log("parent one component rendering");

  return (
    <>
      <h3> Count value is {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "FIVE" })}>set to 5</button>
      {children}
    </>
  );
};

export default ParentOne;
