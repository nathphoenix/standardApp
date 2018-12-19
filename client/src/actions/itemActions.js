//this is where we make our requset to backend

import axios from 'axios';
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING} from './types';

export const getItems = () => dispatch => {
    // return {
    //     type:GET_ITEMS
    // };
    dispatch(setItemsLoading ());                           //we use setItemsLoading bcos we want to set it to true for now when it gets the data
    axios                                                   // we make our get request with axios
    .get('/api/items')                                    //get api from that path that was set in server side package.json
    .then(res =>                                           // it will give us a response
        dispatch({
            type : GET_ITEMS,
            payload : res.data
        })
        );                                             
};

// export const deleteItem = id => dispatch => {
//     axios.delete('api/items/${id}').then(res => dispatch({
//         type: DELETE_ITEM,
//         payload : id
//     })
    
//     )
//     // return {
//     //     type:DELETE_ITEM,
//     //     payload: id
//     // };
// };

export const deleteItem = id => dispatch => {
    axios.delete(`api/items/${id}`).then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    );
  };

export const addItem = item => dispatch =>{
    // return {
    //     type:ADD_ITEMS,
    //     payload:item
        
    // };
    axios
    .post('api/items', item)
    .then(res =>                                           // it will give us a response
        dispatch({
            type : ADD_ITEMS,
            payload : res.data
        })
    );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    }
}