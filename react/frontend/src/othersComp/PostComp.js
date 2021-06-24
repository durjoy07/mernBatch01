import axios from 'axios'
import React, { Component } from 'react'
import CustomImageUploader from '../utils/CustomImageUploader'

class PostComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            email: '',
            image: ''
          }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imageHandler = (file) => {
        let reader = new FileReader();

        reader.onloadend = () => {
        this.setState({
            image: reader.result
        })
        };
        reader.readAsDataURL(file);
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {userName, email, image, password} = this.state;
        let data = {
            userName,
            email,
            image,
            password
        }
        console.log(data);
        axios.post('http://localhost:5000/user/register', data)
        .then(res=> {
            console.log(res);
        })
        .catch(err=> console.log(err))
    }

    render() {
        const {userName, email, image, password} = this.state;
        console.log(image);
        return (
            <div style={{marginLeft: '300px'}}>
                <label>User Name: </label>
                <input 
                    type='text'
                    value={userName}
                    name='userName'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <label>Email:</label>
                <input 
                    type='email'
                    value={email}
                    name='email'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <label>Password:</label>
                <input 
                    type='password'
                    value={password}
                    name='password'
                    onChange={(e)=> this.changeHandler(e)}
                ></input>
                <br></br>
                <CustomImageUploader customOnHanldeImage={this.imageHandler} />
                <button onClick={(e)=> this.submitHandler(e)}>Submit</button>
            </div>
        )
    }
}

export default PostComp;