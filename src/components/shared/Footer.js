import React from 'react';
import '../../styles/shared/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <span className="copyright-text">Created by Nick Tran</span>
        <span className="copyright-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer; 