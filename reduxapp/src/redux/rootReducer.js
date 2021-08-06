import { combineReducers } from 'redux';
import mobileReducer from './mobile/mobileReducer';
import laptopReducer from './laptop/laptopReducer';

const rootReducer = combineReducers({
    mobile: mobileReducer,
    laptop: laptopReducer
})

export default rootReducer;