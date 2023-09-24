import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import ParentThree from "./components/inCorrectMemo/parentThree";
import ParentFour from "./components/incorrectmemoAgain/parentfour";
import ChildFour from "./components/incorrectmemoAgain/childfour";
import GrandChildFour from "./components/incorrectmemoAgain/grandChildFour";
import ParentFive from "./components/inCorrectMemoWithPropsRef/parent5";

function App() {
  console.log("Grand parent rendering");
  const [grandCount, setGrandCount] = useState(0);
  return (
    <div className="App">
      <h1>React Render Demo Project</h1>
      <button onClick={() => setGrandCount((c) => c + 1)}>
        Increment Grand Count
      </button>
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ParentFive />
    </div>
  );
}

export default App;
