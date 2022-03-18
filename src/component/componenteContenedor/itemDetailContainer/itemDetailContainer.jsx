import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"
import ItemDetail from "../itemDetail/itemDetail"


function ItemDetailContainer(){
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()
    console.log(detalleId);
    useEffect(()=>{
     getFetch
     .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
    },[])
return(
    <>   
    < ItemDetail producto={producto} />
    </>
)
}

export default ItemDetailContainer

