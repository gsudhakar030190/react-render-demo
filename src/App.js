import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Parent from "./components/reactMemo/parent";

function App() {
  const [grandCount, setGrandCount] = useState(0);
  const handleIncrement = () => {
    setGrandCount(grandCount + 1);
  };
  console.log("Grand parent rendering");
  return (
    <div className="App">
      <h1>React Render Demo Project</h1>
      <h3>Grand Count value is {grandCount}</h3>
      <Parent />
    </div>
  );
}

export default App;
