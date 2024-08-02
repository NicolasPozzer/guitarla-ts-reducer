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

    const MAX_ITEMS = 10
    const MIN_ITEMS = 1

// Funciones del cartReducer
export const cartReducer = (
    state: CartState = initialState,
    actions: CartActions    
) => {

    if(actions.type === "add-to-cart"){
        const itemExist = state.cart.find((guitar) => guitar.id === actions.payload.item.id)

        let updatedCart : CartItem[] = []
        if(itemExist){
           updatedCart = state.cart.map(item => {
                if(item.id === actions.payload.item.id){
                    if(item.quantity < MAX_ITEMS){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                }else{
                    return item
                }
           })
        }else{
            const newItem : CartItem = {...actions.payload.item, quantity : 1}
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if(actions.type === "remove-from-cart"){
        const updatedCart = state.cart.filter( item => item.id !== actions.payload.id)
        return {
            ...state,
            cart: updatedCart
        }
    }

    if(actions.type === "decrease-quantity"){
        const updatedCart = state.cart.map( item => {
            if(item.id === actions.payload.id && item.quantity !== MIN_ITEMS){
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
            return item
          })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if(actions.type === "increase-quantity"){
        const updatedCart = state.cart.map( item => {
            if(item.id === actions.payload.id && item.quantity < MAX_ITEMS){
              return{
                ...item,//esto retorna los otros atributos de guitar como estan, y solo modifica quantity
                quantity: item.quantity + 1
              }
            }
            return item
          })

        return {
            ...state,
            cart: updatedCart
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