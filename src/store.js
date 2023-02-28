import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from  "redux-thunk"

const reducer = combineReducers({

})

const initialState = {};

const middleware = [thunk]

export default const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)