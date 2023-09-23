import React, { useState } from "react";
import ChildThree, { MemoizedChildThree } from "./childThree";

const Child = () => {
  console.log("child also rendering");
  return <strong>am child of child</strong>;
};

const ParentThree = () => {
  const [count, setCount] = useState(0);
  console.log("parent three rendering");
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>Count value is {count}</h3>
      <button onClick={handleIncrement}>Increment Count</button>
      <ChildThree>
        <Child />
      </ChildThree>
    </>
  );
};

export default ParentThree;
