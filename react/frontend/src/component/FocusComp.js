import React, { Component } from 'react'
import InputComp from './InputComp'

class FocusComp extends Component {
    constructor(props) {
        super(props);
        this.CompRefs = React.createRef();
    }

    clickHandler = () => {
        this.CompRefs.current.focusInput();
    }
    
    render() {
        return (
            <div>
                <InputComp ref={this.CompRefs} />
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default FocusComp;