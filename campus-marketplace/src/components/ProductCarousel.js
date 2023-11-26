// ProductCarousel.js
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const ProductCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <FaArrowLeft onClick={handlePrev} style={{ cursor: 'pointer' }} />
      <img
        width="600px"
        height="400px"
        src={'http://localhost:3001/' + images[activeIndex]}
        alt=""
      />
      <FaArrowRight onClick={handleNext} style={{ cursor: 'pointer' }} />
    </div>
    
  );
};

export default ProductCarousel;
