import { CurrentUser, currentUserAction,currentUserType } from "../../types/currentUser"

const initialCurrentUser:CurrentUser = {
    id:'',
    username:"",
    email:"",
    password:"",
};

export const currentUserReducer = (state = initialCurrentUser,action:currentUserAction):CurrentUser =>{
    switch(action.type){
        case currentUserType.getCurrentUser:
            return {
                ...state,
                id:action.payload.id,
                username:action.payload.username,
                password:action.payload.password,
                email:action.payload.email,
            }
        default:
            return state;
    }
}