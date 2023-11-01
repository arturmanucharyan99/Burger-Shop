export enum burgersActionTypes {
    fetch_burgers = 'fetch_burgers',
    fetch_burgers_succsess = 'fetch_burgers_succsess',
    fetch_burgers_error = 'fetch_burgers_error',
    set_burgers_page = 'set_burgers_page',
}

export interface burgerState {
    burgers:any[],
    loading:boolean,
    error:null|string,
    limit:number,
    page:number
}


interface fetchBurgersAction {
    type : burgersActionTypes.fetch_burgers;
}
interface fetch_burgers_succsess_action {
    type : burgersActionTypes.fetch_burgers_succsess;
    payload:any[];
}

interface fetch_burgers_error_action {
    type : burgersActionTypes.fetch_burgers_error;
    payload:string;
}

interface set_burgers_page {
    type : burgersActionTypes.set_burgers_page;
    payload:number;
}

export  type burgerAction = 
  fetchBurgersAction 
| fetch_burgers_succsess_action 
| fetch_burgers_error_action 
| set_burgers_page;
