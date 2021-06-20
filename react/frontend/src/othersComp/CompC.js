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
                        <button onClick={()=>value.login()}>Login</button>
                        <br></br>
                        <button onClick={()=>value.logout()}>Logout</button>
                      </>
                  )
              }
            </UserConsumer>
        )
    }
}
export default  CompC;