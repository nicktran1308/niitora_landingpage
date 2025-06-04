import React from 'react';
import '../../styles/shared/Background.css';

const Background = () => {
  return (
    <div className="background">
      <img 
        src={`${process.env.PUBLIC_URL}/assets/images/mainpic.jpg`}
        alt="Background" 
        className="background-image"
        loading="lazy"
      />
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background; 