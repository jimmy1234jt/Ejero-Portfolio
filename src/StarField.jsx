// StarField.js

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StarFieldContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 4px;
  background-color: #a21dd1;
  opacity: 0.8;
  pointer-events: none;
`;

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          speed: Math.random() + 0.5,
        });
      }
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateStars = () => {
    setStars((prevStars) =>
      prevStars.map((star) => ({
        ...star,
        y: (star.y + star.speed) % window.innerHeight,

      }))
    );

    requestAnimationFrame(updateStars);
  };

  useEffect(() => {
    requestAnimationFrame(updateStars);
  }, []);

  return (
    <StarFieldContainer>
      {stars.map((star, index) => (
        <Star key={index} style={{ left: star.x, top: star.y }} />
      ))}
    </StarFieldContainer>
  );
};

export default StarField;
