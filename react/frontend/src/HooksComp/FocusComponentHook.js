import React, { useRef, useEffect } from 'react'

function FocusComponentHook() {
    const inputRef = useRef(null);
    useEffect(()=> {
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <h1>Second Input</h1>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default FocusComponentHook
