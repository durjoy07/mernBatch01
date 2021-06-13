import React, { Component } from 'react'
import WithCounter from './HOC/withCounter.js'

class HoverComp extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.handler}>hoverd {this.state.count} times</h1>
            </div>
        )
    }
}

export default WithCounter(HoverComp);

//newComp =   hireOrderComp(normalComp)