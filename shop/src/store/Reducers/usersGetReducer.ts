import {UsersGetInitialState,UsersGetActionType, usersGet } from "../../types/usersGet";

const initaialState:UsersGetInitialState = {
    users:[],
    loading:false,
    error:null
}

export const usersGetReducer = (state=initaialState,action:usersGet) : UsersGetInitialState =>{
    switch (action.type) {
        case UsersGetActionType.getUser:
            return {
                ...state,
                loading:true,
            }
        case UsersGetActionType.getUserSuccses:
            return {
                ...state,
                loading:false,
                users:action.payload
            }
        case UsersGetActionType.usersError:
            return{
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}