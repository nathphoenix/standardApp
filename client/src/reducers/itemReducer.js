//reducer is where our actual state is going to go, we will have an action file 
//that get item, delete item and will dispatch to our reducers and the response we get from our server
//will be sent to the reducer
//redux boiler plate

import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEM} from '../actions/types';

const initialState = {
    items : [
        {id: uuid(), name: 'Eggs' },
        {id: uuid(), name: 'Plantain' },
        {id: uuid(), name: 'rice' },
        {id : uuid(), name: 'Beans' }
    ]
}

export default function(state=initialState, action){
    switch(action.type){             //because it is an object that why we use action.type
      case  GET_ITEMS:                                  //what we want to check for
         return{
         ...state     //... is called the spread operator which will fetch the above items array
    };

    case DELETE_ITEM:
    return{
        ...state,
        items : state.items.filter(item => item.id !== action.payload )
    };
    case ADD_ITEMS:
    return{
        ...state,
        items : [action.payload, ...state.items]
    };

    default :
    return state;
    }
}