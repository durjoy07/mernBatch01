import React from 'react'
import useInputHook from './HOOK/useInputHook';

function RegistrationFrom() {
    const [firstName, firstNameAttributes, resetFirstName] = useInputHook('');
    const [lastName, lastNameAttributes, resetLastName] = useInputHook('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Full Name: ${firstName} ${lastName}`);
        console.log(`Full Name: ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <from>
                    <label>First Name:</label>
                    <input
                        {...firstNameAttributes}
                        type='text'
                    />
            
                    <label>Last Name:</label>
                    <input
                        {...lastNameAttributes}
                        type='text'
                    />
                <button onClick={submitHandler}>Submit</button>
            </from>
        </div>
    )
}

export default RegistrationFrom
