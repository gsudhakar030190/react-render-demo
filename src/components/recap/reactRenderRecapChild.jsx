import React from "react";
export const MainChild = ({ message }) => {
  console.log("main child rerending");
  return (
    <>
      <h3>Main child on screen</h3>
      <p>message is {message}</p>
    </>
  );
};

// const customComparator = (prevProps, nextProps) => {
//   return nextProps.name === prevProps.name;
// };

const MainChild2 = React.memo(({ message, name }) => {
  console.log("rerendering main child 2");
  console.log(name);
  return (
    <>
      <h3>am mainc child 2</h3>
    </>
  );
});

export default MainChild2;
