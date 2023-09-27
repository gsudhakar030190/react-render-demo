import { useState, createContext } from "react";
import ChildA from "./childContext";
export const countContext = createContext(null);
const CountContextProvider = countContext.Provider;
const ParentContext = () => {
  console.log("parent context rendering");
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Parent context is rendered</h3>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>Increment count</button>
      <CountContextProvider value={{ count }}>
        <ChildA />
      </CountContextProvider>
    </>
  );
};

export default ParentContext;
