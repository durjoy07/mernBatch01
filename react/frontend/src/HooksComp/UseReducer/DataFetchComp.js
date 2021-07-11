import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchComp() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState({});

    useEffect(async()=>{
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
          console.log(res);
              setLoading(false);
              setError('');
              setData(res.data)
        }
        catch(err) {
             setLoading(false);
             setError("An error occured");
             setData({});
        }

    }, [])
    return (
        <div>
            {loading ? <h1>loading.....</h1> : <h1>{data.title}</h1>}
            {error ? error : null}
        </div>
    )
}
export default DataFetchComp;