import { Button } from "react-bootstrap";
import { useCartContext } from "../context/cartContext";

function Cart() {
   const { cartList, vaciarCart, isInCart} = useCartContext()   
   if(isInCart){
       <h1>asdk</h1>
   }else{
   return(
       <div>
        { cartList.map(item => <div>
            <li><img src={item.imagen} alt="" /></li>
            <li>{item.name}</li>
            <li>{item.description}</li>
            <li>cantidad: {item.cantidad}</li>
            <li>Precio total: $${item.precio*item.cantidad}</li>
            
             </div>) }
        <Button onClick={vaciarCart}>Vaciar Carrito</Button>
       </div>
   )
}
}

export default Cart;