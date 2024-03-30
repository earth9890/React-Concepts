import { useState } from "react";
import "./App.css";
import ToDoListFnAsProp from "./Componets/ToDoParent";
import HelloWorld from "./Componets/HelloWorld";
import UseState from "./Componets/UseState";
import ConditionalRendering from "./Componets/ConditionalRendering";
import RenderAList from "./Componets/RenderAList";
import FormHandling from "./Componets/FormHandling";
import UseEffect from "./Componets/UseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
      <UseState />
      <ToDoListFnAsProp />
      <ConditionalRendering />
      <RenderAList />
      <FormHandling />
      <UseEffect />
    </>
  );
}

export default App;
