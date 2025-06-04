import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/shared/BackButton.css';

const BackButton = ({ isScrolled }) => {
  const navigate = useNavigate();

  return (
    <button 
      className={`back-button ${isScrolled ? 'scrolled' : ''}`}
      onClick={() => navigate('/')}
      aria-label="Return to homepage"
    >
      <svg className="back-icon" viewBox="0 0 24 24">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
      <span className="back-text">Back</span>
    </button>
  );
};

export default BackButton; 