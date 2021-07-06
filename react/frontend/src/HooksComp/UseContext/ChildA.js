import React, {useContext} from "react";
import {userContext, productContext} from './Parent';

function ChildA() {
    const user = useContext(userContext);
    const product = useContext(productContext);
  return (
    <>
    <h1>Hello I am {user.name} - age: {user.age}</h1>
    <h1>Product: {product.productName}</h1>
    </>
  );
}
export default ChildA;
