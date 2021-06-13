import React from 'react'

function ColorComp({name}) {
    if(name === 'Black') {
        throw new Error('This is not a valid color')
    }
    return (
        <div>
           <h1>{name}</h1>
        </div>
    )
}
export default ColorComp;