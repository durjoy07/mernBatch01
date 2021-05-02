import React, { Component } from 'react';

class StateComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "hello",
            count: 0
        }
    }

    count() {
        // this.state.count = this.state.count +1;
        // console.log(this.state.count);
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count);

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    incrementWithFive () {
        this.count();
        this.count();
        this.count();
        this.count();
        this.count();
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                {count}
                <br></br>
                <button onClick={this.incrementWithFive.bind(this)}>increment value</button>
                <button onClick={this.reset.bind(this)}>reset</button>
            </div>
        )
    }
}

export default StateComp;