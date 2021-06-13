import React, { Component } from 'react'
import ColorComp from './ColorComp'
import ErrorBoundary from './ErrorBoundary';

class AllColorComp extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <ColorComp name="Blue"/>
                </ErrorBoundary>
                <ErrorBoundary>
                     <ColorComp name="White"/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ColorComp name="Black"/>
                </ErrorBoundary>
                
            </div>
        )
    }
}

export default AllColorComp;