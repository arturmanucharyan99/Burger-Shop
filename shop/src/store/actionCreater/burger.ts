import { Dispatch } from "redux"
import { burgerAction, burgersActionTypes } from "../../types/burgers"
import axios from "axios"



export const fetchBurgers = (page = 1, limit = 10 ):any =>{
    return async (dispatch:Dispatch<burgerAction>) =>{
        try {
            dispatch({
                type: burgersActionTypes.fetch_burgers,
            })
            
            const response = await axios.get('http://127.0.0.1:8000/car_list/burgers/',{
                params:{_page:page,_limit:limit}
            })
            .then(response =>{
               return response.data.map((el:any) => ({
                    ...el,
                    id:el.id + "",
               }))
            });
            
            dispatch({type:burgersActionTypes.fetch_burgers_succsess,payload:response})
        } catch (error) {
            dispatch({
                type: burgersActionTypes.fetch_burgers_error,
                payload:"oshinka"})
        }
    }
}
// export function setBurgerPage (page:number):burgerAction{
//     return {
//         type
//     }
// }

