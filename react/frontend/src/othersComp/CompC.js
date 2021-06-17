import React, { Component } from 'react'
import { UserConsumer } from './context/UserContext';

class CompC extends Component {
    render() {
        return (
            <UserConsumer>
              {
                  (value)=> (
                      <>
                        {
                            value.isLoggedIn ? <h1>Welcome {value.name}</h1> : 
                            <h1>Please login.</h1>
                        }
                      </>
                  )
              }
            </UserConsumer>
        )
    }
}
export default  CompC;