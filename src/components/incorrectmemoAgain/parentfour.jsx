import React, { useState } from "react";
import ChildFour from "./childfour";
import GrandChildFour from "./grandChildFour";

const ParentFour = React.memo(
  () => {
    const [count, setCount] = useState(0);
    console.log("parent component 4 rendering");
    const handleIncrement = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <>
        <h3>Parent component ParentFour</h3>
        <button onClick={handleIncrement}>
          Click me to increment count: {count}
        </button>
        <ChildFour>
          <GrandChildFour />
        </ChildFour>
      </>
    );
  },
  (o, n) => {
    console.log(o.children === n.children);
  }
);

export default ParentFour;
