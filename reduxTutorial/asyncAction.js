// Actions 
// fetch_user_request : {loading: true}
// fetch_user_success : {loading: false, users: [{a}]}
// fetch_user_failure : {loading: false, error: (error from api)} 
const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const initialState = {
    loading: false, 
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: return {
            ...state, 
            loading: true
        }
        case FETCH_USER_SUCCESS: return {
            ...state, 
            loading: false, 
            users: action.payload
        }
        case FETCH_USER_FAILURE: return {
            ...state, 
            loading: false,
            error: action.payload
        }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            dispatch(fetchUsersSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=> console.log(store.getState()));
store.dispatch(fetchUsers())