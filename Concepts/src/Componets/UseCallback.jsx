import React, { useState } from "react";
import { useCallback } from "react";
import Count from "./Count";

function UseCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <>
      <h1>UseCallBack starts</h1>
      <Count text="Age" value={age} />
      <button onClick={incrementAge}>Increment Age</button>
      <Count text="Salary" value={salary} />
      <button onClick={incrementSalary}>Increment Age</button>
      <h1>UseCallBack ends</h1>
    </>
  );
}

export default UseCallback;
