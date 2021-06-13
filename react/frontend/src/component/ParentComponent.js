import React, { Component } from 'react'
import ClickComp from './ClickComp'
import HoverComp from './HoverComp'

class ParentComponent extends Component {
    render() {
        return (
            <div>
                <ClickComp name="Next" age={25} />
                <HoverComp />
            </div>
        )
    }
}

export default  ParentComponent;