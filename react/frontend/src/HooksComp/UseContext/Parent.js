import React from 'react';
import ChildA from './ChildA';
export const userContext = React.createContext();
export const productContext = React.createContext();

function Parent() {
    return (
      <userContext.Provider value={{ name: "Next", age: 2 }}>
        <productContext.Provider value={{productName: "Laptop", id: 5}}>
          <ChildA />
        </productContext.Provider>
      </userContext.Provider>
    );
}
export default  Parent;