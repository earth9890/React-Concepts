import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>useState()</h1>
      <h1>Count {count}</h1>
      <button onClick={incrementCount}>Click me to Increment Count</button>
      <h1>End useState()</h1>
    </>
  );
}

export default UseState;
