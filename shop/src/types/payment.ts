interface CreditCard{
    number:string,
    name:string,
    months:string,
    year:string,
    cvv:string,
}

export interface Payment{
    creditCard:CreditCard,
    boolCVV:boolean
}


export enum ReducerTypePayment  {
    //number
    changeNumber = "changeNumber",
    focusNumber = 'focusNumber',
    blurNumber = 'blurNumber',
    //name
    changeName = 'changeName',
    focusName = 'focusName',
    blurName = 'blurName',
    //month
    changeMonth = 'changeMonth',
    focusMonth = 'focusMonth',
    blurMonth = 'blurMonth',
    //year
    changeYear = 'changeYear',
    focusYear = 'focusYear',
    blurYear = 'blurYear',
    //cvv
    changeCvv = 'changeCvv',
    focusCvv = 'focusCvv',
    blurCvv = 'blurCvv'


}

export  interface NumberReducerChange {
    type:ReducerTypePayment.changeNumber,
    payload:string,
}
export  interface NumberReducerFocus {
    type:ReducerTypePayment.focusNumber,
    payload:string,
}
export  interface NumberReducerBlur {
    type:ReducerTypePayment.blurNumber,
    payload:string,
}


export  interface NameReducerChange {
    type:ReducerTypePayment.changeName,
    payload:string,
}
export  interface NameReducerFocus {
    type:ReducerTypePayment.focusName,
    payload:string,
}
export  interface NameReducerBlur {
    type:ReducerTypePayment.blurName,
    payload:string,
}


export  interface MonthsReducerChange {
    type:ReducerTypePayment.changeMonth,
    payload:string,
}
export  interface MonthsReducerBlur {
    type:ReducerTypePayment.blurMonth,
    payload:string,
}
export  interface MonthsReducerFocus{
    type:ReducerTypePayment.focusMonth,
    payload:string,
}



export  interface YearReducerChange {
    type:ReducerTypePayment.changeYear,
    payload:string,
}
export  interface YearReducerBlur {
    type:ReducerTypePayment.blurYear,
    payload:string,
}
export  interface YearReducerFocus{
    type:ReducerTypePayment.focusYear,
    payload:string,
}



export  interface CvvReducerChange {
    type:ReducerTypePayment.changeCvv,
    payload:string,
}
export  interface CvvReducerBlur {
    type:ReducerTypePayment.blurCvv,
    payload:boolean
}
export  interface CvvReducerFocus{
    type:ReducerTypePayment.focusCvv,
    payload:boolean
}

export type ActionReducer = 
    NumberReducerChange | NumberReducerFocus | NumberReducerBlur | NameReducerChange | NameReducerFocus |
    NameReducerBlur |  MonthsReducerChange | MonthsReducerBlur | MonthsReducerFocus | YearReducerChange |
    YearReducerBlur | YearReducerFocus | CvvReducerChange | CvvReducerBlur | CvvReducerFocus

