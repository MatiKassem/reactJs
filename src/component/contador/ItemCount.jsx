 import { useState } from 'react';
import './itemCount.css';
import { Button } from 'react-bootstrap';



function ItemCount({stock, inicial, onAdd}){
const [count, setCount] = useState (inicial);
    
const handleCountAdd = ()=>{
    if(count < stock)
        setCount(count+1)
        }
const handleCountMinus = ()=>{
    if(count > inicial)
        setCount(count-1)
        }

const agregar = () => {
    onAdd( count )
}


    return(
        <div>
        <label className='itemContenedor'>{count}</label>
        <Button className='itemContenedor btn btn-primary' onClick={handleCountAdd}>+</Button>
        <Button className='itemContenedor btn btn-primary' onClick={handleCountMinus}>-</Button>
        <Button className='itemContenedor btn btn-primary' onClick={ agregar }>Agregar al Carrito</Button>
        </div>
    )
}
export default ItemCount;