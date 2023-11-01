export interface Card {
    card:number[],
    loading:boolean,
    error:string | null,
}


export enum CardTypes {
    addProductCard = 'addProductCard',
    removeProductCard = 'removeProductCard',
    loadingProduct = 'loadingProduct',
    errorProduct = 'errorProduct'
}

interface addProductCard {
    type:CardTypes.addProductCard
    payload:number,

}

interface removeProductCard {
    type:CardTypes.removeProductCard,
    payload:string
    
}
interface loadingProduct{
    type:CardTypes.loadingProduct,
    payload:string
}
interface errorProduct {
    type:CardTypes.errorProduct,
    payload:string
}

export type CardActrion = addProductCard |  removeProductCard | loadingProduct | errorProduct;


