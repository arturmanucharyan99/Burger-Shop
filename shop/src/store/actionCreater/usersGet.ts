import { Dispatch } from "redux"
import axios from "axios"
import { UsersGetActionType, usersGet } from "../../types/usersGet"

interface ForUser {
    id:number,
    email:string,
    password:string,
    username:string
}

export const usersGET = ( ) =>{
    return async (dispatch:Dispatch<usersGet>) =>{
        try {
            dispatch({
                type: UsersGetActionType.getUser,
            })
            const response = await axios.get('http://127.0.0.1:8000/car_list/users/')
            .then(response =>{
                
              return response.data.map((el:ForUser) =>{
                return {
                    id:el.id,
                    email:el.email,
                    password:el.password,
                    username:el.username
                }
              });
            });
            
            dispatch({type:UsersGetActionType.getUserSuccses,payload:response})
        } catch (error) {
            dispatch({
                type:UsersGetActionType.usersError,
                payload:"oshinka"})
        }
    }
}


