import React, { Component } from 'react'

class UnmountChild extends Component {
    componentWillUnmount() {
        console.log('unmount from child............');
    }
    render() {
        return (
            <>
                <h1>hello</h1>
                <h2>hi</h2>
            </>
        )
    }
}

export default UnmountChild;