import { ActionReducer, Payment, ReducerTypePayment } from "../../types/payment";





const initaialState:Payment = {
    creditCard:{
        number:'**** **** **** ****',
        name:"Full Name",
        months:'',
        year:'',
        cvv:"0"
    },
    boolCVV:false
}


export const paymentReducer = (state=initaialState,action:ActionReducer):Payment=>{
    switch(action.type){
        case ReducerTypePayment.changeNumber:
            const arrForNumber = action.payload.replace(/\D/g, '').match(/.{1,4}/g);
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    number:arrForNumber ? arrForNumber.join(' ') : ''
                }
            }
        case ReducerTypePayment.focusNumber:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    number: state.creditCard.number === '**** **** **** ****' ? '' : action.payload
                }
            }
        case ReducerTypePayment.blurNumber:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    number: state.creditCard.number.trim() === "" ? '**** **** **** ****' : action.payload
                }
            }




        case ReducerTypePayment.changeName:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    name:action.payload
                }
            }
        case ReducerTypePayment.blurName:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    name: state.creditCard.name.trim() === "" ? 'Full Name' : action.payload
                }
            }
        case ReducerTypePayment.focusName:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    name: state.creditCard.name.trim() === "Full Name" ? '' : action.payload
                }
            }




        case ReducerTypePayment.changeMonth:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    months: +action.payload <= 9 && action.payload? "0"+action.payload:action.payload 
                }
            }
        case ReducerTypePayment.changeYear:
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    year: action.payload 
                }
            }

        case ReducerTypePayment.changeCvv:
            // const arrForNumber = action.payload.replace(/\D/g, '').match(/.{1,4}/g);
            return {
                ...state,
                creditCard:{
                    ...state.creditCard,
                    cvv: action.payload 
                }
            }

        case ReducerTypePayment.focusCvv:
            
            return {
                ...state,
                boolCVV:action.payload
            }

        case ReducerTypePayment.blurCvv:
            console.log(state.creditCard.cvv);
            return {
                ...state,
                boolCVV:action.payload
            }
        // case ReducerTypePayment.focusMonth:
        //     return {
        //         ...state,
        //         creditCard:{
        //             ...state.creditCard,
        //             months: state.creditCard.months.trim() === "" ? 'Full Name' : action.payload
        //         }
        //     }
        // case ReducerTypePayment.blurMonth:
        //     return {
        //         ...state,
        //         creditCard:{
        //             ...state.creditCard,
        //             months: state.creditCard.months.trim() === "Full Name" ? '' : action.payload
        //         }
        //     }
        default:
            return state
    }

}