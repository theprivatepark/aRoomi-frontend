import React from 'react';
import Image1 from '../assets/images/testing-1.png'
import Image2 from '../assets/images/testing-2.png'
import Image3 from '../assets/images/testing-3.png'
import { Carousel } from 'react-bootstrap';

const CarouselImg = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={Image1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={Image2}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselImg;