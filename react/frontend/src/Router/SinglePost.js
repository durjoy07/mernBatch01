import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SinglePost({match}) {
    const history = useHistory();

     const [post, setPost] = useState({});
    console.log(match);
     useEffect(() => {
       axios
         .get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
         .then((res) => {
           setPost(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);

     const backHandler = () => {
        history.goBack();
     }

    return (
        <div>
            <button onClick={()=> backHandler()}>Back</button>
            <h3>UserId: {post.id}</h3>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default SinglePost
