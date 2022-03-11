import React, { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import ItemDetail from "../itemDetail/itemDetail"


function ItemDetailContainer(){
    const [producto, setProducto] = useState({})
    useEffect(()=>{
     getFetch
     .then(resp => setProducto(resp.find(prod => prod.id === "ms2")))
    },[])
    console.log(producto);
return(
    <>   
    < ItemDetail producto={producto} />
    </>
)
}

export default ItemDetailContainer

