import {ActionTypes} from '../constants/action-types'
const initialState = {
    products:[{
        id:1,
        title:"Aniket",
        catogory:"programmer",
    }],
}

export const productReducer = (state, action ) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
                return state;
            default:
                return state;
    }
}