import axios from 'axios'
import React, { Component } from 'react'

class LoginComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            email: '',
            isLoggedIn: false
          }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    submitHandler = (e) => {
        e.preventDefault();
        const {userName, password} = this.state;
        let data = {
            userName,
            password
        }
        axios.post('http://localhost:5000/user/login', data)
        .then(res=> {
            console.log(res.data.token);
            localStorage.setItem("authToken", res.data.token)
            if(res.data?.token) this.setState({isLoggedIn: true})
        })
        .catch(err=> console.log(err))
    }

    render() {
        const {userName,password, isLoggedIn} = this.state; 
        return (
            <>
            {
                isLoggedIn ? <button> logout </button> :
            <div style={{marginLeft: '300px'}}>
                <label>User Name: </label>
                <input 
                    type='text'
                    value={userName}
                    name='userName'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <br></br>
                <label>Password:</label>
                <input 
                    type='password'
                    value={password}
                    name='password'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <button onClick={(e)=> this.submitHandler(e)}>login</button>
            </div>
            }
            </>
        )
    }
}

export default LoginComp;