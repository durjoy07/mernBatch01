import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log("Pure component");
        return (
            <div>
                hello pure component {this.props.count}
            </div>
        )
    }
}

export default PureComp;
