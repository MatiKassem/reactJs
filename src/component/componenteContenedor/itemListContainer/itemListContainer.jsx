import ItemCount from '../../contador/ItemCount';
import './itemListContainer.css';
import { getFetch } from '../../helpers/getFetch';
import { useEffect, useState } from 'react';
import ItemList from '../../itemList/itemList';


const ItemListContainer = ({greeting}) =>{
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

useEffect(()=>{
    getFetch
        .then((respuesta)=>{
        return respuesta
    })
        .then((resp) => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
}, [])
   useEffect(()=>{
       let url = "https://pokeapi.co/api/v2/pokemon/?limit=10";
       fetch(url)
       .then(resp => resp.json())
       .then(resp => console.log(resp.result));
   }, [])

    console.log(productos)
    return(
        <div className='contenedor'>
            <h1>{greeting}</h1>
            <ItemCount stock={10} inicial={1}/>
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