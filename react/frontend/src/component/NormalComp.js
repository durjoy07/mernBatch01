import React, { Component } from 'react'

 class NormalComp extends Component {
     constructor(props) {
         super(props)
     }
     
    render() {
        console.log("Normal component");
        return (
            <div>
                Normal component {this.props.count}
            </div>
        )
    }
}
export default NormalComp;