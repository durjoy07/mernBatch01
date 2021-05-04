import React, { Component } from 'react'

class ConditionalRenderComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
             isLoggedin: false,
             message: 'hello next'
        }
    }
    
    render() {
         const { isLoggedin, message } = this.state;
//4
        return (
            <div>
                <h1>kdsfoihfldhf</h1>
                 {message && <h1>I am logged in {message}</h1>}
            </div>
        )
            //3
        // return !!message ? <h1>I am logged in {message}</h1>:
        //     <h1>...loding</h1>

        // 2
        // let element;
        // if(isLoggedin) {
        //     element = <h1>I am logged in</h1>
        // }
        // else {
        //     element = <h1>logout</h1>
        // }
        
        // return <div>{element}</div>
        
        
        //1
    //    if(isLoggedin) {
    //        return (
    //            <div>
    //                <h1>I am logged in</h1>
    //            </div>
    //        )
    //    }
    //    else {
    //        return (
    //            <div>
    //                <h1>logout</h1>
    //            </div>
    //        )
    //    }


    }
}

export default ConditionalRenderComp;

// if else 
// element variable 
// ternary operator 
// short circute