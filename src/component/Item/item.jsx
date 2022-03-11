import React from 'react';
import Card from 'react-bootstrap/Card';

function Item ({prod}){
    return(
        <Card className="m-2" border="warning" key={prod.id} style={{ width: '18rem' }}>
         <Card.Img variant="top" src={prod.image} />
        <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
         {prod.description}
         </Card.Text>
         <Card.Text>
             stock: {prod.stock}
        </Card.Text>
    </Card.Body>
</Card>
    )
}

export default Item;