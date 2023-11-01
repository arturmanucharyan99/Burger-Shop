import { Cart, CartAction, CartTypes } from "../../types/cartGet";



const initialCartGet:Cart = {
    loading:false,
    error:null,
    cart:[]
}

export const cartGetReducer = (state = initialCartGet,action:CartAction):Cart =>{
    switch (action.type) {
        case CartTypes.loadingCart:
            return {
                ...state,
                loading:true,
            }
        case CartTypes.getCartSuccsess:
            return {
                ...state,
                loading:false,
                cart:[
                    ...state.cart,
                    ...action.payload
                    
                ]
        }
        // case CartTypes.getCart:
        //     return {
        //         ...state,
        //         cart:[
        //             ...state.cart,
        //             {
        //                 ...action.payload
        //             }
        //         ]
        //     }
        case CartTypes.errorCart:
            return{
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}