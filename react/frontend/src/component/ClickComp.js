import React, { Component } from 'react'
import WithCounter from './HOC/withCounter.js';

class ClickComp extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.age}
                <button onClick={this.props.handler}>clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickComp);