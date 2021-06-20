import React, { Component } from 'react'
import CompA from './CompA';
import { ProductProvider } from './context/ProductContext';
import { UserProvider } from './context/UserContext';
import MultipleConsumer from './MultipleConsumer';
class ParentComp extends Component {
 constructor(props) {
     super(props)
     this.state = {
          name: 'Next Topper',
          age: 25,
          isLoggedIn: false
     }
    }
     loginHandler = () => {
        this.setState({
            isLoggedIn: true
        })
     }

     logoutHandler = () => {
        this.setState({
            isLoggedIn: false
        })
     }
 
    render() {
        return (
            <UserProvider value = {{...this.state, login: this.loginHandler, logout: this.logoutHandler}}> 
                 <CompA />
                 
                 <ProductProvider value={'Laptop'}>
                     <MultipleConsumer/>
                 </ProductProvider>
            </UserProvider>
        )
    }
}
export default  ParentComp;