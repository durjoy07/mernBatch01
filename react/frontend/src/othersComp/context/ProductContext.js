// Context API 

//1. create the context 
//2. provide a context value 
//3. Consume the context value

import React from 'react';

// first step
const ProductContext = React.createContext('Mobile');

// second step
const ProductProvider = ProductContext.Provider;

// third step
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

export default ProductContext;