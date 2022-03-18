import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item ({prod}){
    return(
        <Card className="m-2" border="warning" key={prod.id} style={{ width: '18rem' }}>
         <Card.Img variant="top" src={prod.imagen} />
        <Card.Body>
        
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
         {prod.description}
         </Card.Text>
         <Card.Text>
             stock: {prod.stock}
        </Card.Text>
    </Card.Body>
    <Link to={`detalle/${prod.id}`}>
    <Button variant="primary">Añadir al Carrito</Button>
    </Link>
</Card>
    )
}

export default Item;