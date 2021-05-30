import React, { Component } from 'react'

class UncontrolledForm extends Component {
    constructor() {
        super();
        this.nameInput = React.createRef();
        this.ageInput = React.createRef();
    }
    // submitHandler = (event) => {
    //     event.preventDefault();
    //     let name = this.nameInput.current.value;
    //     let age = this.ageInput.current.value;
    //     console.log(name, age);
    // }
    clickHandler = (event) => {
        event.preventDefault();
        let name = this.nameInput.current.value;
        let age = this.ageInput.current.value;
        console.log(name, age);
    }
    render() {
        return (
                // <form onSubmit={this.submitHandler}>
                //     <div>
                //         <input type='text' name='name' ref={this.nameInput}></input>
                //         <input type='number' name='age' ref={this.ageInput}></input>
                //         <input type='submit' value="Submit"/>
                //     </div>
                // </form>
                <form>
                    <div>
                        <input type='text' name='name' ref={this.nameInput}></input>
                        <input type='number' name='age' ref={this.ageInput}></input>
                       <button onClick={this.clickHandler}>Submit</button>
                    </div>
                </form>
        )
    }
}

export default UncontrolledForm;