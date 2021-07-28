import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> {
            setPosts(res.data)
        })
        .catch( err=> {
            console.log(err);
        })
    }, [])
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((ele) => (
        <React.Fragment key={ele.id}>
          <Link to={`/posts/${ele.id}`}>
            <button
              style={{
                padding: "5px 15px",
                color: "#fff",
                backgroundColor: "blue",
                marginBottom: '5px',
                cursor: 'pointer'
              }}
            >
              {ele.title}
            </button>
          </Link>
          <br></br>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Post;
