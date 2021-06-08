import React, { Component } from 'react'

class HoverComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>hoverd {this.state.count} times</h1>
            </div>
        )
    }
}

export default  HoverComp;

//newComp =   hireOrderComp(normalComp)