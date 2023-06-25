import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import image1 from "../assets/motiv1.jpg";
import image2 from "../assets/motiv.jpg";
import image3 from "../assets/motiv5.jpg";


const Component1 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const images = [
    image1,
    image2,
    image3,
  ];
  const texts = [
    "Have you ever experienced challenges or obstacles while pursuing your goals?",
    "Are you looking for an extra boost of motivation to help you achieve your goals?",
    "Look no further! Introducing Inspirante, the ultimate web application designed to ignite your inner drive and keep you focused on your path to success.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  useEffect(() => {
    setCurrentText(texts[currentImage]);
  }, [currentImage]);

  return (
    <div className="component1-start">
      <TransitionGroup>
        <CSSTransition
          key={currentImage}
          timeout={500}
          classNames="fade"
        >
          <img className="images-start" src={images[currentImage]} alt="Carousel" />
        </CSSTransition>
      </TransitionGroup>
      <p className="para-text">{currentText}</p>
    </div>
  );
};

export default Component1;