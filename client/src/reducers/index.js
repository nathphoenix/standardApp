//we create our root reducer called index.js in a reducer(folder name) the main point 
//of this reducer is to bring together all other reducer i.e auth reducer, error reducer, and item reducer etc
import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
// import authReducer from './authReducer';  //example

export default combineReducers({
    item : itemReducer
    // auth : authReducer    //incase for other types of reducer
});