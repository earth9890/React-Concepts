import { useState } from "react";
import "./App.css";
import ToDoListFnAsProp from "./Componets/ToDoParent";
import HelloWorld from "./Componets/HelloWorld";
import UseState from "./Componets/UseState";
import ConditionalRendering from "./Componets/ConditionalRendering";
import RenderAList from "./Componets/RenderAList";
import FormHandling from "./Componets/FormHandling";
import UseEffect from "./Componets/UseEffect";
import ReactFragment from "./Componets/ReactFragment";
import Memo from "./Componets/Memo";
import UseRef from "./Componets/UseRef";

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
      <ReactFragment />
      <Memo name="Its a prop it will only render if prop changed" />
      <UseRef />
    </>
  );
}

export default App;
