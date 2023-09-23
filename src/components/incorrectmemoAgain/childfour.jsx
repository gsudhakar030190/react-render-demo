import React from "react";
import GrandChildFour from "./grandChildFour";

const ChildFour = React.memo(
  ({ children }) => {
    //const a = children;

    console.log("child component 4 is rendering");
    return <>{children}</>;
  },
  (o, n) => {
    // console.log(o.children === n.children);
  }
);

export default ChildFour;
