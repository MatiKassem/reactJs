import './itemListContainer.css';

const ItemListContainer = ({greeting}) =>{
    return(
        <div className='contenedor'>
            <h1>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer;