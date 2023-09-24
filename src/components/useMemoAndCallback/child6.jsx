import React from "react";
const ChildSix = React.memo(({ person, handler }) => {
  console.log("child 6 is rendering");

  return <h3>Am child 6</h3>;
});

export default ChildSix;
