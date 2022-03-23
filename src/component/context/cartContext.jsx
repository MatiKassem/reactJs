import { createContext, useContext, useState } from "react";


export const  cartContext = createContext([]);

export const useCartContext = ()=> useContext(cartContext)

function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) =>{
      setCartList([...cartList, item])
    }

    const isInCart = (id)=>{
      return cartList.some((prod) => prod.id === id )
    } 

    const vaciarCart = ()=>{
      setCartList([])
    }
    
    return(
       <cartContext.Provider value={{
           cartList,
           agregarCart,
           isInCart, 
           vaciarCart
       }}>
         {children}
       </cartContext.Provider>
    )
}

export default CartContextProvider;




