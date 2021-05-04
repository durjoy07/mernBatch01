import React, {Component} from 'react';

class BindingEventComp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
            // 3
        // this.countChangeHandler = this.countChangeHandler.bind(this)
    }

    // 1, 2, 3
    // countChangeHandler() {
    //     this.setState({
    //         count: this.state.count + 5
    //     })
    //     // this.setState(prevState=> ({
    //     //     count: prevState.count + 5
    //     // }))
    // }

    // 4
    countChangeHandler = () => {
        this.setState({
            count: this.state.count + 5
        })
        // this.setState(prevState=> ({
        //     count: prevState.count + 5
        // }))
    }


    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            {/* 1 */}
            {/* <button onClick={this.countChangeHandler.bind(this)}>Click Me</button> */}
            {/* 2 */}
            {/* <button onClick={()=> this.countChangeHandler()}>Click Me</button> */}
            {/* 3 */}
            {/* <button onClick={this.countChangeHandler}>Click Me</button> */}
            {/* 4 */}
            <button onClick={this.countChangeHandler}>Click Me</button>
            </div>
        )
    }
}

export default BindingEventComp;