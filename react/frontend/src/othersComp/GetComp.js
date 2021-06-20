import React, { Component } from 'react';
import axios from 'axios';

class GetComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }

    componentDidMount() {
        axios.get('https://api.digitalpathshalabd.com/district/all')
        .then(res=>{
            this.setState({
                data: res.data
            })
            // console.log('My data: ',res.data);
        })
        .catch(err=>console.log(err))
    }
    
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
                                <p ><b>District:</b> {ele.name}</p>
                                <br></br>
                                <p><b>জেলা:</b>{ele.bn_name}</p>
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