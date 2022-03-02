import ItemCount from '../contador/ItemCount';
import './itemListContainer.css';


const ItemListContainer = ({greeting}) =>{
    
    
    return(
        <div className='contenedor'>
            <h1>{greeting}</h1>
            <ItemCount/>
         </div>
    )
}
export default ItemListContainer;