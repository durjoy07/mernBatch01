import React, {useReducer, createContext} from 'react'
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import DataFetchComp from './DataFetchComp';
import DataFetchComp2 from './DataFetchComp2';

export const CounterContext = createContext();
const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default: 
            return state;
    }
}

function Parent() {
     const [count, dispatch] = useReducer(reducer, initialState);
    return (
      <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          <h1>{count}</h1>
          <CompA />
          <CompB />
          <CompC />
          <DataFetchComp />
          <DataFetchComp2 />
        </div>
      </CounterContext.Provider>
    );
}
export default  Parent;