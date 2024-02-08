import React from 'react'
import { Carousel } from 'react-bootstrap';

function Body() {
  return (


    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/Winterflip/MS/Hero/Men-9._SX3000_QL85_.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/Winterflip/MS/Hero/Men-2._SX3000_QL85_.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* Add more Carousel.Items for additional slides */}
  </Carousel>
    
    
    </div>
  )
}

export default Body