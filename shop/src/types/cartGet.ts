interface ForCart  {
    user_id : number,
    item : number
}

export interface Cart{
    cart: ForCart[],
    loading:boolean,
    error:string | null
}


export enum CartTypes {
    getCart = 'getCart',
    getCartSuccsess = 'getCartSuccsess',
    loadingCart = 'loadingCart',
    errorCart = 'errorCart',
}

interface getCart {
    type: CartTypes.getCart,
    payload:ForCart
}
interface getCartSuccsess {
    type: CartTypes.getCartSuccsess,
    payload:ForCart[];
}

interface loadingCart {
    type: CartTypes.loadingCart,
}
interface errorCart {
    type: CartTypes.errorCart,
    payload:string
}

export type CartAction = getCart |  loadingCart | errorCart | getCartSuccsess;