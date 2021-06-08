import React, { Component } from 'react'

class RefsComp extends Component {
    constructor(props) {
        super(props)
        this.firstNameRefs = React.createRef();
    }

    // componentDidMount() {
    //     this.firstNameRefs.current.focus()
    // }

    clickHandler = () => {
        console.log(this.firstNameRefs.current.value);
    }
    focusHandler = () => {
        this.firstNameRefs.current.focus();
    }
    
    render() {
        return (
            <div>
                <input name='firstName' ref={this.firstNameRefs}/>
                <button onClick={this.clickHandler}>Click</button>
                <button onClick={this.focusHandler}>Focus</button>
            </div>
        )
    }
}

export default RefsComp;