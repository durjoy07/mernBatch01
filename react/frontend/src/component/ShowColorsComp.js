import React from 'react'
import './style.css';
const ShowColorComp = ({ ele, ourClass }) => {
    // var isEle = true;
    // let myClassName = isEle ? 'container-blue' : 'container-black';
    return (
        <div className={ourClass}>
           <h1 className='text'>{ele}</h1>
        </div>
    )
}

export default ShowColorComp;

// css stylesheets
// inline styling
// css modules
// css in libraries