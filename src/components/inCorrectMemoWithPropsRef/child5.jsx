import React from "react";
const ChildFive = ({ person }) => {
  console.log("child five rendering");
  console.log(person);
  return <h3>am child five</h3>;
};

export default React.memo(ChildFive);
