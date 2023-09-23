import React from "react";
const ChildThree = React.memo(({ children }) => {
  console.log("child three rendering");
  return (
    <>
      <h3>am Child three</h3>
      {children}
    </>
  );
});

export default ChildThree;
