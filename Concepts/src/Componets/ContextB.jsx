import React, { useContext } from "react";
import { UserContext } from "../App";

function ContextB() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>useContext starts</h1>
      {user}
      <h1>useContext ends</h1>
    </>
  );
}

export default ContextB;
