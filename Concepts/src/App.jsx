import { useState } from "react";
import "./App.css";
import HelloWorld from "./Componets/HelloWorld";
import UseState from "./Componets/UseState";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
      <UseState/>
    </>
  );
}

export default App;
