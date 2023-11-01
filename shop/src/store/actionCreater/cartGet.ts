import { Dispatch } from "redux"
import { CartAction, CartTypes } from "../../types/cartGet"
import axios from "axios"





export const cartGet = () =>{
    return async (dispatch:Dispatch<CartAction>) => {
            try{
                dispatch({
                    type:CartTypes.loadingCart,
                })

                const response = await axios.get('http://127.0.0.1:8000/car_list/cart/')
                    .then((response)=>{
                        
                        return response.data
                    });
                    
                dispatch({
                    type:CartTypes.getCartSuccsess,
                    payload:response
                })
                
            }
            catch(err){
                dispatch({
                    type:CartTypes.errorCart,
                    payload:"oshibka"
                })
            }
    }
}