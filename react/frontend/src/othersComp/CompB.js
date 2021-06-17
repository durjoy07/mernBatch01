import React, { Component } from 'react'
import CompC from './CompC';
import { UserConsumer } from './context/UserContext';

class CompB extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (value)=> (
                        <>
                        <h2>hello i am from CompB and the value is {value.name}</h2>
                        <CompC />
                        </>
                    )
                }
            </UserConsumer>
        )
    }
}
export default  CompB;