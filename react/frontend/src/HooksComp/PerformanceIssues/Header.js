import React from "react";

function Header() {
    console.log('header comp rerendered');
  return <div>
      <h1>All Products</h1>
  </div>;
}

export default React.memo(Header);
