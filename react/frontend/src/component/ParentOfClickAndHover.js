import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import CounterComponent from './CounterComponent'
import HoverCounter from './HoverCounter'

class ParentOfClickAndHover extends Component {
    render() {
        return (
            <div>
                <CounterComponent 
                render={(count, incrementCount)=> (<ClickCounter name='Next' count={count} incrementCount={incrementCount}/>)}
                />
                <CounterComponent 
                render={(count, incrementCount)=> (<HoverCounter count={count} incrementCount={incrementCount}/>)}
                />
            </div>
        )
    }
}

export default ParentOfClickAndHover;