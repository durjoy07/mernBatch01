import React, {useState, useEffect} from 'react'
import useIncrement from './HOOK/useIncrement';

function IncrementOne() {
    const [count, setCount] = useState(0);
    useIncrement(count);
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default IncrementOne
