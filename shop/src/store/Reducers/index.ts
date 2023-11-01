import { combineReducers } from "redux";
import { burgersReducer } from "./burgersReducer";
import { usersGetReducer } from "./usersGetReducer";
import { userPostReducer } from "./usersPostReducer";
import { currentUserReducer } from "./currentUser";
import { cardReducer } from "./cardReducer";
import { cartGetReducer } from "./cartGetReducer";
import { paymentReducer } from "./payment";



export const rootReducer = combineReducers({
    burgers:burgersReducer,
    usersGet:usersGetReducer,
    userPost:userPostReducer,
    currentUser:currentUserReducer,
    card:cardReducer,
    cartGet:cartGetReducer,
    payment:paymentReducer,
})


export type RootState = ReturnType<typeof rootReducer>