import React, { Component } from 'react'

class LifecycleChildComp extends Component {
    constructor() {
        super();
        console.log('Child constructor');
    }

    static getDerivedStateFromProps() {
        console.log('Child get derived state from props');
        return 0;
    }

    componentDidMount() {
        console.log('Child component did mount');
    }

    render() {
        console.log('Child This is render');
        return (
            <div>
                <h1> Hello I am child </h1>
            </div>
        )
    }
}

export default LifecycleChildComp;