
let token = localStorage.getItem("authToken");
export let option =  {
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": token
        }   
    }











// import axios from 'axios';
// import { api } from '../urlConfig';

// const token = window.localStorage.getItem('token');

// const axiosInstance = axios.create({
//     baseURL: api,
//     headers: {
//         'Authorization' : token ? `Bearer ${token}` : ''
//     }
// })

// export default  axiosInstance