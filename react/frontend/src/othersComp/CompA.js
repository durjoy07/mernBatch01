import React, { Component } from 'react'
import CompB from './CompB';
import UserContext from './context/UserContext';

class CompA extends Component {
    //way 2
    static contextType = UserContext;
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>{this.context.name} {this.context.age}</h1>
                <CompB />
            </div>
        )
    }
}

//way 1
// CompA.contextType = UserContext;
export default  CompA;