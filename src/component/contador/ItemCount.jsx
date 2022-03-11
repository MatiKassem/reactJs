import { useState } from 'react';
import './itemCount.css';



function ItemCount({stock, inicial}){
const [count, setCount] = useState (inicial);
    
const handleCountAdd = ()=>{
    if(count < stock)
        setCount(count+1)
        }
const handleCountMinus = ()=>{
    if(count > inicial)
        setCount(count-1)
        }

let mostrarEnConsola = ()=> console.log(count);


    return(
        <div>
        <label className='itemContenedor'>{count}</label>
        <button className='itemContenedor' onClick={handleCountAdd}>+</button>
        <button className='itemContenedor' onClick={handleCountMinus}>-</button>
        <button className='itemContenedor' onClick={mostrarEnConsola}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount;