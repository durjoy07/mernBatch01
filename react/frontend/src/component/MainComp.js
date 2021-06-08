import React, { Component } from 'react'
import MemoComp from './MemoComp';
import NormalComp from './NormalComp'
import PureComp from './PureComp';

class MainComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    // clickHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         count: 10
    //     })
    // }

    componentDidMount() {
        setInterval(()=> {
            this.setState({count: 10})
        //    this.setState(prevState=>({
        //        count: prevState.count + 1
        //    }))
        }, 2000)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextState, this.state);
    //     if(nextState.count !== this.state.count) {
    //         return true;
    //     }
    //     else return false;
    // }
    
    render() {
        console.log('hello from main component');
        return (
            <div>
                {/* <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>Click</button> */}
                {/* <PureComp count={this.state.count} />
                <NormalComp count={this.state.count}/> */}

                {/* ============================================= */}
                <MemoComp />
            </div>
        )
    }
}
export default  MainComp;
