import React from "react";
const Child = ({ name }) => {
  console.log("rendering child component");
  return <h3>Am {name}</h3>;
};

const MemoizedChild = React.memo(Child);

export default MemoizedChild;
