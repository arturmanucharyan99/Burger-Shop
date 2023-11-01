// interface User {
//     id:number,
    
// }

export  interface UsersGetInitialState {
    users:any[],
    loading:boolean,
    error:null|string,
}

export enum UsersGetActionType {
    getUser = "getUser",
    getUserSuccses = "getUserSuccses" ,
    usersError = "usersError" ,
}



interface getUser {
    type:UsersGetActionType.getUser
}

interface getUserSuccses {
    type:UsersGetActionType.getUserSuccses
    payload:[]
}

interface usersError {
    type:UsersGetActionType.usersError,
    payload:string
}

export type usersGet = getUser | usersError | getUserSuccses;



