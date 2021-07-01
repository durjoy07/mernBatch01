import React, {useEffect, useState} from 'react';

const UseEffect1 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log('updated.......');
        document.title = `Clicked ${count} times`;
    }, [count])

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>
    );
}

export default UseEffect1;

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()