import { useState } from "react";
import MainChild2 from "./reactRenderRecapChild";

const MainParent = ({ children }) => {
  const initialName = {
    fname: "",
    lname: "",
  };
  const [counter, setCounter] = useState(0);
  const [fullName, setFullName] = useState({ fname: "s", lname: "ss" });
  console.log("rendering main parent");

  const handleCounter = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <h3>Main Parent component</h3>
      <p> Count value is {counter}</p>
      <br />
      <button onClick={handleCounter}>Increment Counter</button>
      <br />
      <MainChild2 message={"s"} name={fullName} />
      {children}
      <br />
      <button
        onClick={() => {
          console.log("h");
        }}
      >
        Change Fullname
      </button>
    </>
  );
};

export default MainParent;
