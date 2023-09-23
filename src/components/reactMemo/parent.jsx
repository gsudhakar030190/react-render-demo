import MemoizedChild from "./child";

const { useState } = require("react");

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sudhakar");
  console.log("rendering parent component");
  const handleNameChange = () => {
    setName(Math.random() + "Maadhuri");
  };
  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h3>Count in parent component is {count}</h3>
      <button onClick={handleCounter}>Increment Count</button>
      <button onClick={handleNameChange}>Change Name</button>
      <MemoizedChild name={name} />
    </>
  );
};

export default Parent;
