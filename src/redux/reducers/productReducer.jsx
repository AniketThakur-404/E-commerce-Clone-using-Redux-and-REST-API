import { ActionTypes } from "../contants/action_types";
const initialState = {
    products:[{
        id:1,
        title:"Aniket",
        catogory:"programmer",
        id:2,
        title:"Wojak",
        catogory:"programmer",
    }],
}

export const productReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
