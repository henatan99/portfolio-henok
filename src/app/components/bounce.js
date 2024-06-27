"use client"
import React, { useEffect, useRef } from 'react';

export const Bounce = ({ bouncerStyles, children }) => {
  const childRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const child = childRef.current;
    const parent = parentRef.current;

    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    let posX = parentRect.width / 2 - childRect.width / 2;
    let posY = parentRect.height / 2 - childRect.height / 2;
    let velocityX = 0.5; // Change these values to adjust speed
    let velocityY = 0.5;

    const animate = () => {
      posX += velocityX;
      posY += velocityY;

      if (posX <= 0 || posX + childRect.width >= parentRect.width) {
        velocityX = -velocityX;
      }

      if (posY <= 0 || posY + childRect.height >= parentRect.height) {
        velocityY = -velocityY;
      }

      child.style.transform = `translate(${posX}px, ${posY}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div ref={parentRef} className="relative w-full h-full">
      <div
        ref={childRef}
        className={`absolute ${bouncerStyles}`}
        style={{ top: '0%', left: '0%', transform: 'translate(-50%, -50%)' }}
      >
        {children}
      </div>
    </div>
  );
};
