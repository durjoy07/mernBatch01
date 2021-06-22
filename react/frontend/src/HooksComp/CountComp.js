import React, {useState} from 'react'

const CountComp = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        for(let i=0; i<10; i++) {
            setCount(prevState => prevState + 1)
        }
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Count value : {count}</button>
            <button onClick={incrementHandler}>Increment by 10</button>
        </div>
    )
}

export default CountComp;