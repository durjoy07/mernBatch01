import React, { useState } from 'react'

const StateHook = () => {
   const [myName, setMyName] = useState('Next');

   const submitHandler = () => {
        console.log(myName);
   }
    return (
        <div>
            <h1> My name is {myName} </h1>
            <input
            value={myName}
            onChange={(e)=> setMyName(e.target.value)}
            ></input>
            <button onClick={submitHandler}>Change</button>
        </div>
    )
}

export default StateHook;