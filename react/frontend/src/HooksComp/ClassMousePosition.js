import React, { Component } from 'react'

class ClassMousePosition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }

    mousePosition = (e) => {
        this.setState({
            x: e.clientX, 
            y: e.clientY
        })
    }

    componentDidMount() {
        console.log('updated.......');
        window.addEventListener('mousemove', this.mousePosition)
    }
    
    render() {
        console.log('rendered.......');
        const {x, y} = this.state;
        return (
            <div>
                <h1>X: {x}, Y: {y}</h1>
            </div>
        )
    }
}
export default ClassMousePosition;