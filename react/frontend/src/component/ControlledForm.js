import React, { Component } from 'react'

class ControlledForm extends Component {
    constructor() {
        super();
        this.state = {
            // values: {
            //     name: ''
            // }
            name: '',
            age: 0,
            language: '',
            colors: []
        }
    }

    // handleNameChange = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleAgeChange = (event) => {
    //     this.setState({
    //         age: event.target.value
    //     })
    // }
    changeHandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    changeHandlerCheckbox = (event) => {
        if(event.target.checked) {
            this.setState({
                colors: [...this.state.colors, event.target.value]
            })
        }
    }

    clickHandler = (event) => {
        event.preventDefault();
        const {name, age, language, color1, color2} = this.state;
        console.log("name: ", name, "age: ", age, "language", language);
        console.log('color: ', color1, color2);
    }
 
    render() {
        console.log(this.state.colors);
        return (
                <form>
                    <div>
                        <input 
                        type='text' 
                        name='name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                        >
                        </input>
                        <input 
                        type='number' 
                        name='age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                        ></input>
                        <label>Choose a language</label>
                        <br></br>
                        <select 
                        value={this.state.language}
                        name='language'
                        onChange={this.changeHandler}
                        >
                            <option value='JavaScript'>JavaScript</option>
                            <option value='C'>C</option>
                            <option value='c++'>C++</option>
                        </select>
                        <br></br>

                        {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label forHtml="vehicle1"> I have a bike</label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label for="vehicle2"> I have a car</label><br/>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                        <label for="vehicle3"> I have a boat</label> */}

                        <input type='checkbox' name='color1' value='red' onChange={this.changeHandlerCheckbox}></input>
                        <label>Red</label>
                        <input type='checkbox' name='color2' value='blue' onChange={this.changeHandlerCheckbox}></input>
                        <label>Blue</label>
                        <input type='checkbox' name='color3' value='green' onChange={this.changeHandlerCheckbox}></input>
                        <label>Green</label>

                       <button onClick={this.clickHandler}>Submit</button>
                    </div>
                </form>
        )
    }
}

export default ControlledForm;