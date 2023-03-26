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
      {images.map(image => {
        const imageUrl = new URL(image.media, LISTINGS_URL).href;
        return (
        <Carousel.Item key={image.id} style={{ position: 'relative' }}>
          <div style={{ height: '100px' }}>
            <Image src={imageUrl} alt="item image" fill objectFit="cover"/>   
          </div>       
        </Carousel.Item>
        );
        })}
    </Carousel>

  );
}

export default ListingCarousel;