// Three core concepts or Redux 

// Shop - Store 
// Buy Mobile - Action 
// Remove Mobile from Shelf  -  Reducer

//1. store, action, reducer

const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const BUY_MOBILE = 'BUY_MOBILE';
const BUY_LAPTOP = 'BUY_LAPTOP';
const BUY_LOT = 'BUY_LOT';

const initialStateMobile = {
    totalMobile: 100
}
const initialStateLaptop = {
    totalLaptop: 500
}


// Action Creator
// Action creator is a function that return an action. 
function buyMobile() {
    return {          // this object is an action. An action is an object with type property
      type: BUY_MOBILE,
      info: "Hello Next Topper"
    };
}

function buyLaptop() {
    return {
        type: BUY_LAPTOP
    }
}

function buyLot() {
    return {
      type: BUY_LOT
    };
}

// (previousState, action) => newState

const mobileReducer = (state = initialStateMobile, action) => {
    switch(action.type) {
        case BUY_MOBILE: return {
            ...state,
            totalMobile: state.totalMobile - 1
        }
        case BUY_LOT: return {
            ...state, 
            totalMobile: state.totalMobile + 50
        }
        default: return state;
    }
}
const laptopReducer = (state = initialStateLaptop, action) => {
    switch(action.type) {
        case BUY_LAPTOP: return {
          ...state,
          totalLaptop: state.totalLaptop - 1,
        };
        default: return state;
    }
}

const rootReducer = combineReducer({
    mobile: mobileReducer,
    laptop: laptopReducer
})


const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial State: ', store.getState());

const unSubscribe = store.subscribe(()=> {});

store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyLot());
store.dispatch(buyMobile());
store.dispatch(buyLaptop())
unSubscribe();

// console.log("Initial State: ", store.getState());
