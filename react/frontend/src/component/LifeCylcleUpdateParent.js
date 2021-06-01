// updating lifecyle methods 

// constructor()
// static getDerivedStateFromProps()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

import React, { Component } from 'react'

 class LifeCylcleUpdateParent extends Component {
     constructor() {
         super();
         this.state = {
             count: 0
         }
         console.log('parent constructor');
     }
    
     clickHandler = (event) => {
           this.setState(prevState => ({
            count: prevState.count + 1
        }))
     }
    static getDerivedStateFromProps() {
        console.log('parent get derived');
        return 0;
    }
    getSnapshotBeforeUpdate() {
        console.log('parent get snapshot');
    }
    componentDidUpdate() {
        console.log('parent component did mount');
    }
    render() {
        console.log('parent render');
        return (
            <div>
                <h1>hello from parent</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default LifeCylcleUpdateParent;