import React, { useState } from 'react'
import { Products } from '../Products'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productlist() {

const[product,setproduct]=useState(Products)
console.log(product)

  return (


    <div>
    <div className='d-flex  flex-column container'>
    <div className="row gap-3">
    {
        product.map((e)=>(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>{e.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
    }
   
    </div>
    </div>
    </div>
  )
}

export default Productlist