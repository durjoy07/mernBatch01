import React from 'react'

const ShowUserComp = ({user}) => {
    return (
        <div>
            <p>hello</p>
            <h2 style={ {color: 'red', textAlign: 'center'} }>My name is: {user.name}. My Id is: {user.id} and age is: {user.age}</h2>
        </div>
    )
}

export default ShowUserComp;
