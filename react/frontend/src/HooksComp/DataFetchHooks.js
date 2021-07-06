import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchHooks() {
    const [data, setData] =  useState({});
    const [id, setId] = useState(1);
    
    const [newId, setNewId] = useState(id);

    const handlePostUpdate = () => {
        setNewId(id)
    }

    useEffect(()=> {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${newId}`)
          .then((res) => {
            console.log(res);
            setData(res.data)
          })
          .catch((err) => console.log(err));

    }, [newId])

    return (
        <div>
            <input
            value={id}
            onChange={(e)=> setId(e.target.value)}
            >
            </input>
            <button onClick={()=>handlePostUpdate()}>Click here</button>
            <h1>{data.title}</h1>
            {/* {
                data.map(e=> (
                    <h1 key={e.id}>{e.title}</h1>
                ))
            } */}
        </div>
    )
}

export default DataFetchHooks;