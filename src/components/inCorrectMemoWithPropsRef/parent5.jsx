import { useState } from "react";
import ChildFive from "./child5";

const ParentFive = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [count, setCount] = useState(0);
  console.log("parent 5 rendering");

  const fullName = {
    fname,
    lname,
  };
  return (
    <>
      <label>
        Fname:{" "}
        <input value={fname} onChange={(e) => setFname(e.target.value)} />
      </label>
      <br />
      <label>
        Lname:{" "}
        <input value={lname} onChange={(e) => setLname(e.target.value)} />
      </label>
      <br />
      <button onClick={() => setCount(count + 1)}>increment</button>
      <br />
      <h3>Full name is {fullName.fname + fullName.lname}</h3>
      <br />
      <h3> Countvalue is {count}</h3>
      <br />
      <ChildFive person={fullName} />
    </>
  );
};

export default ParentFive;
