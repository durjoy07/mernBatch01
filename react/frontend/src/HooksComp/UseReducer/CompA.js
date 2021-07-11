import React, {useContext} from "react";
import {CounterContext} from './Parent';

function CompA() {
   const countContext = useContext(CounterContext);
  return (
    <div>
      <span>CompA - {countContext.countState} </span>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
}
export default CompA;
