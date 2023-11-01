import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import  actionsCreater from "../store/actionCreater/"


export const useActions = () =>{
    const dispatch = useDispatch();
    return bindActionCreators(actionsCreater,dispatch);
}