import React, { Component } from 'react'

const WithCounter = (ChildComponent) => {
   class UpdatedComponent extends Component {
        constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return <ChildComponent 
         count={this.state.count} 
         handler={this.incrementCount} 
         {...this.props}
         />
        }
    }
    return UpdatedComponent;
}

export default WithCounter;