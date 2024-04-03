import React, { useState, useEffect } from "react";
import useDoc from "../Hooks/useDoc";

function UseDocumentTitle() {
  const [count, setCount] = useState(0);
  useDoc(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count - {count}</button>
    </div>
  );
}

export default UseDocumentTitle;
