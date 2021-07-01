import React, { Component } from 'react'

class ClassComp1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate () {
        console.log('updated.............')
        document.title = `Clicked ${this.state.count} times`;
    }
    
    render() {
        return (
            <div>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default  ClassComp1;