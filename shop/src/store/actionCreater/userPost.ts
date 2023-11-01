import { Dispatch } from "redux"
import axios from "axios"
import { userPostTypes, userPostforReducer } from "../../types/usersPost"

interface data{
    email:string,
    // confirmPassword:string,
    username:string,
    password:string

}

export const userPost = (data:data):any =>{
    return async (dispatch:Dispatch<userPostforReducer>) =>{
        
        try {
            dispatch({
                type: userPostTypes.userPost,
                payload:true
            })
            // const csrftoken = getCookie('csrftoken');
            
            const response = await axios.post('http://127.0.0.1:8000/car_list/users/',data)
            
            
            
            
            dispatch({type:userPostTypes.userPostSuccses})
        } catch (error) {
            dispatch({
                type:userPostTypes.userPostError,
                payload:"oshinka"})
        }
    }
}


