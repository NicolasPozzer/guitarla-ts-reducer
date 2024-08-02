import { db } from "../data/db";
import { CartItem, Guitar } from "../types/guitarType";


export type CartActions = 
    { type: 'add-to-cart', payload: {item: Guitar} } |
    { type: 'remove-from-cart', payload: {id: number} } |
    { type: 'decrease-quantity', payload: {id: number } } |
    { type: 'increase-quantity', payload: {id: number} } |
    { type: 'vaciar-carrito' } //Si no toma ningun payload, no se le agrega


export type CartState = {
    data: Guitar[]
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

// Funciones del cartReducer
export const cartReducer = (
    state: CartState = initialState,
    actions: CartActions    
) => {

    if(actions.type === "add-to-cart"){
        return {
            ...state
        }
    }
    if(actions.type === "remove-from-cart"){
        return {
            ...state
        }
    }
    if(actions.type === "decrease-quantity"){
        return {
            ...state
        }
    }
    if(actions.type === "increase-quantity"){
        return {
            ...state
        }
    }
    if(actions.type === "vaciar-carrito"){
        return {
            ...state
        }
    }

    //Siempre un return al state
    return state
}