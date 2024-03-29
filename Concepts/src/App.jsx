import { useState } from "react";
import "./App.css";
import ToDoListFnAsProp from "./Componets/ToDoParent";
import HelloWorld from "./Componets/HelloWorld";
import UseState from "./Componets/UseState";
import ConditionalRendering from "./Componets/ConditionalRendering";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
      <UseState />
      <ToDoListFnAsProp />
      <ConditionalRendering />
    </>
  );
}

export default App;
