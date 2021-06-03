import React, { Component } from 'react'
import UnmountChild from './UnmountChild';

class UnmountingLifecycle extends Component {
    constructor() {
        super();
        this.state = {
            text: {
                myText: '',
                id: ''
            },
            allText: [],
            show: true
        }
    }
        changeHandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: {myText: event.target.value, id: String(+new Date())}
        })
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.setState({allText: [...this.state.allText, this.state.text]})
        this.state.allText.push(this.state.text);
    }

    removeHandler = (e, id) => {
       var filteredData = this.state.allText.filter(ele=> ele.id !== id)
       this.setState({
           allText: filteredData
       })
    }

    showHandler = (e) => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    }

    componentWillUnmount() {
        console.log('Unmounted..............');
    }

    render() {
    // console.log(this.state.text);
        console.log("This is array: ", this.state.allText);
        return (
            <div>
        {  this.state.show ?      <UnmountChild /> :
                <div>
                    <input 
                        type='text' 
                        name='text'
                        value={this.state.text?.myText}
                        onChange={this.changeHandler}
                        >
                        </input>
                        <button onClick={this.clickHandler}>Submit</button>
                        <div>
                            {
                                this.state.allText.map((ele, ind)=> (
                                    <div key={ele.id}>
                                    <h1>{ele.myText}-{ele.id}</h1>
                                    <button onClick={(e)=>this.removeHandler(e, ele.id)}>Remove</button>
                                    </div>
                                ))
                            }
                        </div>
                </div>}

                        <button onClick={this.showHandler}>Show</button>
            </div>
        )
    }
}

export default  UnmountingLifecycle;