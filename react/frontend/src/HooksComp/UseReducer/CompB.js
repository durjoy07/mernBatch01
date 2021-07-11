import React, { useContext } from "react";
import { CounterContext } from "./Parent";

function CompB() {
  const countContext = useContext(CounterContext);
  return (
    <div>
      <span>CompB </span>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
export default CompB;
