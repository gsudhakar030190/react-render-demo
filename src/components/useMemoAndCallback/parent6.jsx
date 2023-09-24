import { useState, useMemo, useCallback } from "react";
import ChildSix from "./child6";

const ParentSix = () => {
  console.log("parent six is rendering");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const p = useMemo(() => {
    return {
      fname: "s",
      lname: "g",
    };
  }, []);

  const handler = useCallback(() => {
    setFname(Math.random() + "sudhakar");
    setLname("gangaraju");
  }, []);

  return (
    <div>
      <h1>
        {fname} {lname}
      </h1>
      <button onClick={handler}>click me</button>
      <br />

      <ChildSix person={p} handler={handler} />
    </div>
  );
};

export default ParentSix;
