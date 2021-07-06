// import React, {useReducer} from 'react'
// const inititalState = 0;

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'increment': 
//         return state + action.value;
//         case 'decrement': 
//         return state - action.value;
//         case 'reset': 
//         return inititalState;
//         default: 
//         return state;
//     }
// }

// function CounterCompOne() {
//     const [count, dispatch] = useReducer(reducer, inititalState);
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => dispatch({type: "increment", value: 5})}>Increment</button>
//         <button onClick={() => dispatch({type: 'decrement', value: 10})}>Decrement</button>
//         <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
//       </div>
//     );
// }
// export default CounterCompOne;

import React, { useReducer } from "react";
const inititalState = {
    count1: 0,
    count2: 100
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count1: state.count1 + action.value,
        count2: state.count2 + action.value,
      };
    case "decrement":
      return { ...state, count1: state.count1 - action.value };
    case "reset":
      return { ...state, count1: inititalState.count1 };
    case "increment2":
      return { ...state, count2: state.count2 + action.value };
    case "decrement2":
      return { ...state, count2: state.count2 - action.value };
    case "reset2":
      return { ...state, count2: inititalState.count2 };
    default:
      return state;
  }
};

function CounterCompOne() {
  const [count, dispatch] = useReducer(reducer, inititalState);
  const [count2, dispatch2] = useReducer(reducer, inititalState);
  return (
    <div>
      <h1>
        Count1: {count.countjdhf} Count2: {count.countdifjhio}
      </h1>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment Count1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 10 })}>
        Decrement Count1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      {/* ================================================== */}
      {/* ================================================== */}
      <br></br>
      <h1>Count2: {count2.count2}</h1>
      <button onClick={() => dispatch2({ type: "increment2", value: 100 })}>
        Increment Count2
      </button>
      <button onClick={() => dispatch2({ type: "decrement2", value: 100 })}>
        Decrement Count2
      </button>
      <button onClick={() => dispatch2({ type: "reset2" })}>Reset</button>
    </div>
  );
}
export default CounterCompOne;