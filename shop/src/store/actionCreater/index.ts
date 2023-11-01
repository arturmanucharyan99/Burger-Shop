import * as fetchBurgers from "./burger";
import  * as  userPost  from "./userPost";
import * as usersGET from "./usersGet";
import * as currentUser from "./currentUser";
import * as card from "./card";
import * as cartGet from "./cartGet";

export default {

    ...fetchBurgers,
    ...usersGET,
    ...userPost,
    ...currentUser,
    ...card,
    ...cartGet
    

}