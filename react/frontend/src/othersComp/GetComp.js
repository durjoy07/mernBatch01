import React, { Component } from 'react';
import axios from 'axios';
import {option} from '../config.js'
// import CustomImageUploader from '../utils/CustomImageUploader.js';

class GetComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/user/all-user', option)
        .then(res=>{
            this.setState({
                data: res.data.user
            })
            console.log('My data: ',res.data.user);
        })
        .catch(err=>console.log(err))
    }

    // imageHandler = (file) => {
    //     console.log('file is: ', file);
    // }

//    onImageChange = (file) => {
//     let reader = new FileReader();
//     reader.onloadend = () => {
//       this.setState({
//         image: reader.result
//       })
//     };
//     reader.readAsDataURL(file);
//   }

    
    render() {
        const {data} = this.state;
        return (
            <div>
                {
                    data.length ? 
                    <div> 
                        {
                            data.map(ele=> (
                                <React.Fragment key={ele.id}>
                                <img style={{height: "300px", width: "500px"}} src={ele.image} alt='user'/>
                                <p ><b>user:</b> {ele.userName}</p>
                                <p><b>Email:</b>{ele.email}</p>
                                <br></br>
                                {/* <CustomImageUploader customOnHanldeImage={this.imageHandler} /> */}
                                </React.Fragment>
                            ))
                        }
                    </div> 
                    :
                    <div>
                        ............loading...........
                    </div>
                }
            </div>
        )
    }
}
export default GetComp;