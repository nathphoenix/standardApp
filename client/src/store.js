import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


//in order to integrate store into app.js, we need to bring in provider into app.js which is from react-redux
const initialstate = {}; //initial state will return an empty object
const middleware = [thunk];  // create a variable called middleware and add any middleware in an array we want to use called thunk

const store = createStore(       //create our store variable and we need three items below and the last one applymiddleware but was pass into compose as a function
    rootReducer,
    initialstate,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);

export default store;