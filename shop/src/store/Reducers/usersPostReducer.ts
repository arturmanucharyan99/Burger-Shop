import { UsersPostInitialState, userPostTypes, userPostforReducer } from "../../types/usersPost";



const initaialState:UsersPostInitialState = {
    user:{},
    error:null,
    loading:false
}


export const userPostReducer = (state = initaialState,action:userPostforReducer):UsersPostInitialState =>{
    switch (action.type) {
        case userPostTypes.userPost:
            return {
                ...state,
                loading:true,
            };
        case userPostTypes.userPostSuccses:
            return {
                ...state
            }
        case userPostTypes.userPostError:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}