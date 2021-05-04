import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "I am props from parent"
        }
    }

    changeMessageHandler = () => {
        this.setState({
            message: "I am changed"
        })
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h1>{message} from Parent</h1>
                <ChildComp message={message} changeHandler={this.changeMessageHandler} />
            </div>
        )
    }
}

export default ParentComp;
