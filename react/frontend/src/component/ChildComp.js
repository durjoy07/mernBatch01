import React from 'react'

const ChildComp = ({ message, changeHandler}) => {
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={changeHandler}>Click me</button>
        </div>
    )
}

export default ChildComp;