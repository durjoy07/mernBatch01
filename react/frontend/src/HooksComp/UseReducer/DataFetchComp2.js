import React, {useReducer, useEffect} from 'react';
import axios from 'axios';
const initialState = {
    loading: true,
    error: '',
    data: {}    
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'success':
            return {
                loading: false,
                error: '',
                data: action.payload
            }
        case 'fail':
            return {
                loading: false,
                error: 'An error occured',
                data: {}
            }
        default: 
            return state;
    }
}

function DataFetchComp2() {

    const [data, dispatch] = useReducer(reducer, initialState);
    
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts/2")
        .then(res=> {
            dispatch({type: 'success', payload: res.data})
        })
        .catch(err=> {
            dispatch({ type: "fail", payload: {} });
        })
    }, [])

    return (
        <div>
            <h1>=============================</h1>
            {data.loading ? <h1>....loading....</h1> : <h1>{data.data.title}</h1>}
            {data.error? data.error: null}
        </div>
    )
}

export default DataFetchComp2
