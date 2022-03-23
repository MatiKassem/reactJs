import { useState } from "react";
import ItemCount from "../../contador/ItemCount";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";


const ItemDetail = ({producto}) =>{

    const [count, setCount] = useState(null)

    const {agregarCart} = useCartContext()

    const onAdd = (cant)=>{
        console.log(cant)
        setCount(cant)
        agregarCart({...producto, cantidad: cant})
    }
    
    
    return(
    <div>
     <img src={producto.imagen} alt={producto.name} />
     <h2>{producto.name}</h2>
     <h2>{producto.description}</h2>
     <h2>{producto.stock}</h2>
     <h2>{producto.precio}</h2>
     { count ? 
      <Link to="/cart"><Button className="btn btn-danger">ir al carrito de compra</Button></Link>
      
     : 
     <ItemCount inicial={1} stock={producto.stock} onAdd={ onAdd } />
     }
     </div>
    )
        
}
export default ItemDetail;