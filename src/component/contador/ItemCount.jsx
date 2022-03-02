import { useState } from 'react';
import './itemCount.css';



function ItemCount(){
const [count, setCount] = useState (0);
    
const handleCount = ()=>{
        setCount(count+1)
        }
const handleCount1 = ()=>{
        setCount(count-1)
        }

let mostrarEnConsola = ()=> console.log(count);


    return(
        <div>
        <label className='itemContenedor'>{count}</label>
        <button className='itemContenedor' onClick={handleCount}>+</button>
        <button className='itemContenedor' onClick={handleCount1}>-</button>
        <button className='itemContenedor' onClick={mostrarEnConsola}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount;