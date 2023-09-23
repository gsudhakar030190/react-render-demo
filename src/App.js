import logo from "./logo.svg";
import "./App.css";
import ParentOne from "./components/parent/parentOne";
import ChildOne from "./components/children/childOne";
import { useState } from "react";

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
      <button onClick={handleIncrement}>Increment Grand Count</button>
      <ParentOne count={grandCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
