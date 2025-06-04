import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/Project.css';
import BackButton from '../shared/BackButton';
import Background from '../shared/Background';

// Project data
const projects = [
  {
    id: 1,
    name: "AI & ML Bootcamp Projects",
    image: `${process.env.PUBLIC_URL}/assets/icons/caltech_logo.jpg`,
    github: "https://github.com/nicktran1308/Caltech-AI---ML"
  },
  {
    id: 2,
    name: "Chess Game & AI",
    image: `${process.env.PUBLIC_URL}/assets/icons/chess_logo.jpg`,
    github: "https://github.com/nicktran1308/Chess-Game-AI"
  },
  {
    id: 3,
    name: "CSUF CS Projects",
    image: `${process.env.PUBLIC_URL}/assets/icons/csuf_logo.png`,
    github: "https://github.com/nicktran1308/CSU-F-Computer-Science"
  },
  {
    id: 4,
    name: "Forage Virtual Internship",
    image: `${process.env.PUBLIC_URL}/assets/icons/forage_logo.png`,
    github: "https://github.com/nicktran1308/Lyft-backend-virtual-experience"
  },
  {
    id: 5,
    name: "Data Analyst Projects",
    image: `${process.env.PUBLIC_URL}/assets/icons/i4s_logo.jpg`,
    github: "https://github.com/nicktran1308/Data-Analyst-Projects"
  },
  {
    id: 6,
    name: "Learning Sciences Lab",
    image: `${process.env.PUBLIC_URL}/assets/icons/usc_logo.jpg`,
    github: null
  }
];

const Project = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlePrevious, handleNext]);

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const totalCards = projects.length;
    
    // Normalize the difference to handle wrap-around
    let normalizedDiff = diff;
    if (diff > totalCards / 2) normalizedDiff = diff - totalCards;
    if (diff < -totalCards / 2) normalizedDiff = diff + totalCards;

    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: totalCards,
        opacity: 1,
        visibility: 'visible'
      };
    }

    if (Math.abs(normalizedDiff) === 1) {
      const direction = normalizedDiff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 60}%) scale(0.8)`,
        zIndex: totalCards - Math.abs(normalizedDiff),
        opacity: 0.7,
        visibility: 'visible'
      };
    }

    if (Math.abs(normalizedDiff) === 2) {
      const direction = normalizedDiff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 100}%) scale(0.6)`,
        zIndex: totalCards - Math.abs(normalizedDiff),
        opacity: 0.4,
        visibility: 'visible'
      };
    }

    return {
      transform: `translateX(${normalizedDiff * 100}%) scale(0.5)`,
      zIndex: 0,
      opacity: 0,
      visibility: 'hidden'
    };
  };

  return (
    <div className="app">
      <Background />
      
      <BackButton isScrolled={isScrolled} />

      <main className="project-content">
        <h1 className="project-title">Projects</h1>
        
        <div className="carousel-container">
          <button 
            className="carousel-button prev-button" 
            onClick={handlePrevious}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className="carousel-view">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${index === activeIndex ? 'active' : ''}`}
                style={getCardPosition(index)}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <h2 className="project-name">{project.name}</h2>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <svg className="github-icon" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-pixel-decoration">
                  <div className="pixel-block"></div>
                  <div className="pixel-block"></div>
                  <div className="pixel-block"></div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-button next-button" 
            onClick={handleNext}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
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

export default Project; 