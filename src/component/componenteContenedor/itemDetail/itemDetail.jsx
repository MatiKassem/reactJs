
const ItemDetail = ({producto}) =>{
    return(
    <div>
     <h2>{producto.name}</h2>
     <h2>{producto.description}</h2>
     <h2>{producto.stock}</h2>
     <h2>{producto.precio}</h2>
     </div>
    )
        
}
export default ItemDetail;