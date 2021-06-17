import React, { Component } from 'react'
import CompA from './CompA';
import { UserProvider } from './context/UserContext';
class ParentComp extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          name: 'Next Topper',
          age: 25,
          isLoggedIn: true
     }
 }
 
    render() {
        return (
            <UserProvider value = {this.state}> 
                 <CompA /> 
            </UserProvider>
        )
    }
}
export default  ParentComp;