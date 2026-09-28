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
              <p className="intro-lead">AI Program Manager </p>
              <p>2+ years taking AI software from research to working prototypes. PMP certified.</p>

              <section className="intro-section">
                <h3>Build</h3>
                <ul>
                  <li>
                    vRyan, an AI teaching agent that answers in text, cloned voice, or video (
                    <a href="https://www.youtube.com/watch?v=oVIzxT9ghW4" target="_blank" rel="noopener noreferrer">DEMO</a>)
                  </li>
                  <li>
                    QA testing, content checks, and release readiness for PAL3, an adaptive learning platform from USC's{" "}
                    <a href="https://ict.usc.edu/research/labs-groups/learning-sciences/" target="_blank" rel="noopener noreferrer">Learning Sciences group</a>
                  </li>
                  <li>LLM-powered research paper analyzer (web dev, LangChain, AWS)</li>
                  <li>
                    SwiftUI front-end code and interaction design for{" "}
                    <a href="https://machinelearning.apple.com/research/coml" target="_blank" rel="noopener noreferrer">Co-ML</a>,
                    Apple's on-device ML app
                  </li>
                  <li>PlainTalk, which simplifies hospital discharge instructions and translates them into Vietnamese (React, FastAPI)</li>
                </ul>
              </section>
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