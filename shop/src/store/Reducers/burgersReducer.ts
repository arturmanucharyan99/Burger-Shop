import { burgersActionTypes,burgerState,burgerAction } from "../../types/burgers";


// interface burgerAction  {
//     type:string;
//     payload ?:any;
// }
// const fetch_burgers = "fetch_burgers";
// const fetch_burgers_succsess = "fetch_burgers_succsess";
// const fetch_burgers_error = "fetch_burgers_error";


const initialState:burgerState = {
    burgers:[],
    loading:false,
    error:null,
    limit:10,
    page:1
};

export const burgersReducer = (state = initialState, action:burgerAction ):burgerState =>{
    switch (action.type) {
        case burgersActionTypes.fetch_burgers:
            return {
                ...state,
                loading:true,
                error:null,
                burgers:[],
                
                
            }
        case burgersActionTypes.fetch_burgers_succsess:
            return {
                ...state,
                loading:false,
                error:null,
                burgers:action.payload,
                
            }
        case burgersActionTypes.fetch_burgers_error:
            return {
                ...state,
                loading:false ,
                error:action.payload,
                burgers:[],
               
            }
        case burgersActionTypes.set_burgers_page:
            
            return{
                ...state,
                page:action.payload,
            }
        default:
            return state;
    }
}