import { createStore } from 'redux';
import mobileReducer from './mobile/mobileReducer';

const store = createStore(mobileReducer);

export default store;