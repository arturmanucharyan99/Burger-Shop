import { Card, CardActrion, CardTypes } from "../../types/card"


const initialCard:Card = {
    loading:false,
    card:[],
    error:null
}

export const cardReducer = (state=initialCard,action:CardActrion):Card =>{
    switch(action.type){
        case CardTypes.addProductCard:
            return{
                ...state,
                loading:false,
                card:[
                    ...state.card,
                    action.payload
                ]
            }
        case CardTypes.loadingProduct:
            return {
                ...state,
                loading:true,
            }
        // case CardTypes.removeProductCard:
        // return {
        //     ...state,
        //     card:[
        //         ...state.card.filter(el =>el !== action.payload)
        //     ]
        // }
        default:
            return state;
        
    }
}