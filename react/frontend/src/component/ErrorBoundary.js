import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false,
             age: 0
        }
    }

    static getDerivedStateFromError(error) {
        return {
           hasError: true,
           age: 10
        }
    }
    
    render() {
        console.log(this.state.age);
        if(this.state.hasError) {
            return <h1>Maybe some errors occured</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;