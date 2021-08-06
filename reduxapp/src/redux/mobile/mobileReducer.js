import {BUY_MOBILE} from './mobileTypes';

const initialState = {
    totalMobile: 100
}

const mobileReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_MOBILE: return {
            ...state,
            totalMobile: state.totalMobile - action.payload
        }
        default: return state
    }
}

export default mobileReducer;