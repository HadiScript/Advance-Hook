import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 style={{ color: "blue " }}> {state.counter} </h1>

      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 100 })}>
        Inc
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Dec
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default App;
