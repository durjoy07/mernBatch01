// Context API 

//1. create the context 
//2. provide a context value 
//3. Consume the context value

import React from 'react';

// first step
const UserContext = React.createContext();

// second step
const UserProvider = UserContext.Provider;

// third step
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

export default UserContext;