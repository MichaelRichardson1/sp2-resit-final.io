import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { LISTINGS_URL } from '../constants/api';
import Image from 'next/image';

function ListingCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    fetch(LISTINGS_URL)
      .then(response => response.json())
      .then(data => setImages(data));

  }, []);

  return (

    <Carousel>
      {images.map(image => (

        <Carousel.Item key={image.id}>
          <Image src={image.media} alt="item image" />          
        </Carousel.Item>
        
      ))}
    </Carousel>

  );
}

export default ListingCarousel;