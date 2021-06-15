import React, { Component } from 'react'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                <button onClick={this.props.incrementCount}>clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default  ClickCounter;