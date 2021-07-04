import React, {useState, useEffect} from 'react'

function HookMousePosition() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const  mousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
      };

    useEffect(()=> {
        console.log('updated..........');
        window.addEventListener('mousemove', mousePosition)

        return ()=> {
            console.log('unmounting............');
            window.removeEventListener('mousemove', mousePosition);
        }
    }, [])

    return (
      <div>
        <h1>
          X: {x}, Y: {y}
        </h1>
      </div>
    );
}

export default HookMousePosition;