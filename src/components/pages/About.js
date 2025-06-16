import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/About.css';
import Background from '../shared/Background';

const About = React.memo(() => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="app">
      <Background />
      
      <button 
        className={`back-button ${isScrolled ? 'scrolled' : ''}`}
        onClick={handleBack}
        aria-label="Return to homepage"
      >
        <svg className="back-icon" viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span className="back-text">Back</span>
      </button>

      <main className="about-content">
        <div className="about-container">
          <div className="portrait-container">
            <img src={`${process.env.PUBLIC_URL}/assets/images/nick_photo.jpg`} alt="Nick Tran" className="portrait" loading="lazy" />
            <a 
              href="https://www.linkedin.com/in/tjleyu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="linkedin-link"
              aria-label="Visit my LinkedIn profile"
            >
              <svg className="linkedin-icon" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <div className="info-container">
            <h1 className="name">Nick Tran</h1>
            <h2 className="subheader">Welcome to my digital realm!</h2>
            <div className="introduction">
              <p>
                I'm an aspiring Program/Technical Program Manager passionate about integrating AI/ML technology 
                into education and beyond. Currently pursuing my Master's in Computer Science at California State 
                University, Fullerton, with a specialization in AI & Machine Learning, I bring a unique blend of 
                technical expertise and product development experience.
              </p>
              <p>
                As a Research Assistant at the USC Institute for Creative Technologies, I've contributed to developing 
                AI-driven educational products—such as dialog-based tutors and personalized learning systems—leveraging 
                Large Language Models (LLMs), AWS, and adaptive learning frameworks. This experience has given me deep 
                insight into translating complex AI research into practical, user-focused solutions.
              </p>
              <p>
                Lately, I've been exploring Agentic AI Architectures and their product potential, particularly how 
                autonomous, goal-driven AI systems can create new opportunities for human-AI collaboration and enhanced 
                learning experiences. I'm excited about leading product initiatives that harness these emerging 
                technologies to solve real-world problems.
              </p>
              <p className="highlight">
                EPSI Program Management Intern @ Apple  Summer 2025
              </p>
              <p>
                Let's connect to explore the frontiers of intelligent, agentic systems!
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="copyright">
          <span className="copyright-text">Created by Nick Tran</span>
          <span className="copyright-year">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
});

export default About; 