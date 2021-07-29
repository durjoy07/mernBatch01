import React from "react";

function ProductPrice({title, price}) {
    console.log(`${title} component rerendered`);
  return <div>
      <p>Product: {title} -- Price: {price}</p>
  </div>;
}

export default React.memo(ProductPrice);
