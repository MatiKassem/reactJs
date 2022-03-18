import ItemCount from '../../contador/ItemCount';
import './itemListContainer.css';
import { getFetch } from '../../helpers/getFetch';
import { useEffect, useState } from 'react';
import ItemList from '../../itemList/itemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) =>{
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
const { categoriaId } = useParams()

useEffect(()=>{
    if(categoriaId){
        getFetch
        .then((respuesta)=>{
        return respuesta
    })
        .then((resp) => setProductos(resp.filter(prod => prod.categoria=== categoriaId)))
        .finally(()=> setLoading(false))

    }else{
        
        getFetch
            .then((respuesta)=>{
            return respuesta
        })
            .then((resp) => setProductos(resp))
            .finally(()=> setLoading(false))
    }
}, [categoriaId])
   
   const onAdd = (cant) =>{
       console.log(cant);
   } 
   return(
        <div className='contenedor'>
            <h1>{greeting}</h1>
            <ItemCount stock={10} inicial={1} onAdd={ onAdd }/>
            <div className='row ms-5 '>
             { loading ? <h1>Cargando Página...</h1>
               : 
               <ItemList productos = { productos }/>
              }   
            </div>
            
        </div>
    )
}
export default ItemListContainer;