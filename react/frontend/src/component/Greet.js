import React from 'react';
// 1st
const Greet = ({name, age, children}) => {
    return (
        <div>
            <h1>Hello {name} ----------- age: {age}</h1>
            {children}
        </div>
    )
}

//2nd
// const Greet = (props) => {
//     // console.log(props.name);
// const {name, age} = props;
//     return <h1>Hello {name} ----------- age: {age}</h1>
// }

// 3rd
// const Greet = (props) => {
//     return <h1>Hello {props.name} ----------- age: {props.age}</h1>
// }

export default Greet;