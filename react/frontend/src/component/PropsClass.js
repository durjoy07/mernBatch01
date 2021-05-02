import React, { Component } from 'react';

class PropsClass extends Component {
    render() {
        const {name, age, children} = this.props;
        return (
            <div>
                <h1>my name is: {name} , and age is: {age}</h1>
                {children}
            </div>
        )
    }
}

export default PropsClass;