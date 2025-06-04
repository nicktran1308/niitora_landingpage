import React from 'react';
import '../../styles/shared/PageTransition.css';

const PageTransition = ({ children }) => {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition; 