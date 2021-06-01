// Mounting 
// Updating 
// Unmounting 
// Error handling 


//1. Mounting life cycle methods 
// constructor(props)
// static getDerivedStateFromProps(props, state)
// render() 
// componentDidMount()

import React, { Component } from 'react'
import LifecycleChildComp from './LifecycleChildComp';

class LifecycleParentComp extends Component {
    constructor() {
        super();
        console.log('Parent constructor');
    }

    static getDerivedStateFromProps() {
        console.log('Parent get derived state from props');
        return 0;
    }

    componentDidMount() {
        console.log('Parent component did mount');
    }

    render() {
        console.log('Parent This is render');
        return (
            <div>
                <h1> Hello I am parent</h1>
                <LifecycleChildComp />
            </div>
        )
    }
}

export default LifecycleParentComp;