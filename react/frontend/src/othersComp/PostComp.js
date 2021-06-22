import axios from 'axios'
import React, { Component } from 'react'

class PostComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            division: '',
            district: ''
          }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {name, email, division, district} = this.state;
        let data = {
            name,
            email,
            address: {
                division,
                district
            }
        }
        console.log(data);
        axios.post('http://localhost:5000/test/add-test', data)
        .then(res=> {
            console.log(res);
        })
        .catch(err=> console.log(err))
    }

    render() {
        const {name, email, division, district} = this.state;
        return (
            <div style={{marginLeft: '300px'}}>
                <input 
                    type='text'
                    value={name}
                    name='name'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <input 
                    type='email'
                    value={email}
                    name='email'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <input 
                    type='text'
                    value={division}
                    name='division'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <input 
                    type='text'
                    value={district}
                    name='district'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <button onClick={(e)=> this.submitHandler(e)}>Submit</button>
            </div>
        )
    }
}

export default PostComp;