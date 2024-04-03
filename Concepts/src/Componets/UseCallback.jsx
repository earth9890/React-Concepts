import React, { useState } from "react";
import { useCallback } from "react";
import Count from "./Count";
import Button from "./Button";

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
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>

      <Count text="Salary" value={salary} />
      <Button handleClick={incrementSalary}>Increment Age</Button>
      <h1>UseCallBack ends</h1>
    </>
  );
}

export default UseCallback;
