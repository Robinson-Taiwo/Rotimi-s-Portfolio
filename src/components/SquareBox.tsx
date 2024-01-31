import React, { useRef, useState } from 'react';
import './SquareBox.css'; // Import the CSS file

const SquareBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [animationStyles, setAnimationStyles] = useState<{ width: string; height: string }>({ width: '0', height: '0' });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    const { top, left, width, height } = boxElement.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setAnimationStyles({
      width: x < width / 2 ? '100%' : '0',
      height: y < height / 2 ? '100%' : '0',
    });
  };

  const handleMouseLeave = () => {
    setAnimationStyles({
      width: '0',
      height: '0',
    });
  };

  return (
    <div
      ref={boxRef}
      className="square-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover me!
      <div className="background-animation" style={animationStyles}></div>
    </div>
  );
};

export default SquareBox;
