export interface CurrentUser {
    id:string ,
    username:string,
    email:string,
    password:string,

}


export enum currentUserType  {
    getCurrentUser = "getCurrentUser",
    logOutCurrentUser = "logOutCurrentUser",
    addCard = "addCard",
}

interface GetCurrentUser{
    type:currentUserType.getCurrentUser,
    payload:CurrentUser
}
interface addCard{
    type:currentUserType.addCard,
    payload:string
}
interface LogOutCurrentUser{
    type :  currentUserType.logOutCurrentUser
}

export type currentUserAction = GetCurrentUser | addCard | LogOutCurrentUser;