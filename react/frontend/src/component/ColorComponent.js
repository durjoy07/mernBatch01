import React, { Component } from 'react'

class ColorComponent extends Component {
    render() {
        return (
            <div>
                {this.props.render('Blue')}
            </div>
        )
    }
}
export default ColorComponent;