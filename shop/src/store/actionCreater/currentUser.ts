import { Dispatch } from "redux"
import { currentUserAction, currentUserType,CurrentUser } from "../../types/currentUser"




// export const currentUserGet = (mainUser:CurrentUser,burger_id="1") =>{
//     return async (dispatch:Dispatch<currentUserAction>) =>{
//         try{
//             dispatch({
//                 type:currentUserType.getCurrentUser,
//                 payload:mainUser
//             });
//             dispatch({
//                 type:currentUserType.addCard,
//                 payload:burger_id
//             });
//         }
//         catch(err){

//         }
//     }
// }