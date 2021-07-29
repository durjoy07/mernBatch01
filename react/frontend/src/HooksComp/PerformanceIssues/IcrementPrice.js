import React from "react";

function IncrementPrice({handler, children}) {
       console.log(`${children} Increment price component rerendered`);
  return <div>
      <button onClick={handler}>
          {children}
      </button>
  </div>;
}

export default React.memo(IncrementPrice);
