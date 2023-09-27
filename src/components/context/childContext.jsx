import React, { useContext } from "react";
import { countContext } from "./parentContext";

const ChildA = () => {
  console.log("child A rendering");
  return (
    <>
      <h3>Child A container</h3>
      <ChildB />
    </>
  );
};

const ChildB = () => {
  console.log("Child B rendering");
  return (
    <>
      <h3>Child B container</h3>
      <ChildC />
    </>
  );
};

const ChildC = () => {
  console.log("Child C rendering");
  const { count } = useContext(countContext);
  console.log(count);
  return (
    <>
      <h3>Child C container</h3>
      <p>count value is {count}</p>
    </>
  );
};

export default React.memo(ChildA);
