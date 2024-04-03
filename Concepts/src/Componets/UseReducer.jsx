import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: currentState.firstCounter + 1 };
    case "decrement":
      if (currentState.firstCounter > 0)
        return { firstCounter: currentState.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer Starts</h1>
      <h1>Count - {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h1>useReducer Ends</h1>
    </>
  );
}

export default UseReducer;
