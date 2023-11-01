export interface UsersPostInitialState  {
    user:object,
    error:null|string,
    loading:boolean

}


export enum userPostTypes {
    userPost = "userPost",
    userPostSuccses = "userPostSuccses",
    userPostError= "userPostError",
}

interface userPost {
    type: userPostTypes.userPost,
}
interface userPostSuccses {
    type: userPostTypes.userPostSuccses,
    
}
interface userPostError {
    type: userPostTypes.userPostError,
    payload : string
}


export type userPostforReducer = userPost | userPostSuccses | userPostError;
