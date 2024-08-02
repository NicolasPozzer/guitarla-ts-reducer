import { useState, useEffect, useMemo } from "react"
import type { Guitar, CartItem } from "../types/guitarType"

export function useCart(){

    // Esta arrow function revisa si hay algo en local storage para 
  //mantener la persistencia del carrito al reiniciar la pagina.
  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }
  const [cart, setCart] = useState(initialCart)

  const MAX_ITEMS = 10
  const MIN_ITEMS = 1

  // Guardar en local storage con useEffect ya que este actualiza al momento
  //Esto dice, cada que cart cambie, porque es lo que esta en el arreglo al final,
  //entonces ejecuta el codigo de adentro.
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))// 2- Ejecuta esto!
  }, [cart])// 1- Detecta un cambio en esta linea


  //incrementar cantidad de un producto
  function increaseQuantity(id : number){
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity < MAX_ITEMS){
        return{
          ...item,//esto retorna los otros atributos de guitar como estan, y solo modifica quantity
          quantity: item.quantity + 1
        }
      }
      return item
    })
    //y guardamos el carrito seteado
    setCart(updatedCart)
  }

  //Decrementar cantidad
  function decreaseQuantity(id : number){
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity !== MIN_ITEMS){
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  // Vaciar carrito
  function vaciarCarrito(){
    setCart([])
  }

  

    // Siempre retorna algo y tiene que ser un objeto osea con {}
    return {
        cart,
        increaseQuantity,
        decreaseQuantity,
        vaciarCarrito
    }
    
}