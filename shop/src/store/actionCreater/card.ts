import { Dispatch } from "redux"
import { CardActrion, CardTypes } from "../../types/card"
import axios from "axios"



interface post{
    user_id:number,
    burger_id:string
}


export const card = (user_id:number,burger_id:number) =>{
    return async (dispatch:Dispatch<CardActrion>)=>{
        
        try{

            const response = await axios.post('http://127.0.0.1:8000/car_list/cart/',
            {
                user_id,
                item: burger_id
            });
            dispatch({
                type:CardTypes.addProductCard,
                payload:burger_id
            })
            console.log(response);
            
        }
        catch(err){
            console.log(err);
            
        }
    }
}