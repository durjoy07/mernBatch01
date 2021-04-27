import React from 'react';

class MyClassComp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            id: '12345'
        }
    }
    render() {
        const { name, id } = this.state;
        return <h1>my name is: {name} and id {id}</h1>
    }
}

export default MyClassComp;