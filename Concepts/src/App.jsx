import React, { useState } from "react";
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
import {
  HigherOrderComponents,
  withUpperCase,
} from "./Componets/HigherOrderComponents";
import ContextA from "./Componets/ContextA";

export const UserContext = React.createContext();
function App() {
  const [count, setCount] = useState(0);
  const EnhancedComponent = withUpperCase(HigherOrderComponents);
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
      <EnhancedComponent text="hellow neeraj" />
      <UserContext.Provider value={"Hari"}>
        <ContextA />
      </UserContext.Provider>
    </>
  );
}

export default App;
