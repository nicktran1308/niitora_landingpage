import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './styles/App.css';
import Background from './components/shared/Background';
import ErrorBoundary from './components/shared/ErrorBoundary';
import PageTransition from './components/shared/PageTransition';
import Skeleton from './components/shared/Skeleton';

// Lazy load components
const About = lazy(() => import('./components/pages/About'));
const Project = lazy(() => import('./components/pages/Project'));

// Performance monitoring
const measurePerformance = () => {
  if (window.performance) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log('Page load time:', loadTime);
    
    // Report to analytics or monitoring service
    // reportMetrics({ loadTime });
  }
};

// Memoize the Home component since it's static
const Home = React.memo(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const preloadImages = () => {
      const images = [
        `${process.env.PUBLIC_URL}/assets/images/mainpic.jpg`,
        `${process.env.PUBLIC_URL}/assets/icons/logo_transparency.png`,
      ];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
    measurePerformance();
  }, []);

  const handleResumeClick = () => {
    // Add timestamp to force fresh fetch and bypass browser cache when resume file is updated
    window.open(`${process.env.PUBLIC_URL}/assets/icons/docs/resume_full.pdf?v=${Date.now()}#view=FitH`, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageTransition>
      <div className="app">
        <Background />
        
        <header className="header">
          <img src={`${process.env.PUBLIC_URL}/assets/icons/logo_transparency.png`} alt="Logo" className="logo" />
        </header>
        
        <main className="main">
          <nav className="navigation">
            <button className="nav-button" onClick={() => navigate('/about')}>
              <span className="button-text">About</span>
              <span className="button-glitch"></span>
            </button>
            <button className="nav-button" onClick={handleResumeClick}>
              <span className="button-text">Resume</span>
              <span className="button-glitch"></span>
            </button>
            <button className="nav-button" onClick={() => navigate('/projects')}>
              <span className="button-text">Project</span>
              <span className="button-glitch"></span>
            </button>
          </nav>
        </main>

        <footer className="footer">
          <div className="copyright">
            <span className="copyright-text">Created by Nick Tran</span>
            <span className="copyright-year">© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
});

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={
          <div className="loading">
            <Skeleton type="title" />
            <Skeleton type="image" />
            <Skeleton type="text" />
            <Skeleton type="text" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
