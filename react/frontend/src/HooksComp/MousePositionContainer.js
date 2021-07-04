import React, {useState} from 'react'
import HookMousePosition from './HookMousePosition';

function MousePositionContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Display</button>
            {
                display && <HookMousePosition/>
            }
        </div>
    )
}

export default MousePositionContainer;