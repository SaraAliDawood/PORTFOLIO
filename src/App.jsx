import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container noise-overlay">
      <Navbar />
      <main>
        <div className="dynamic-section match-hero" style={{ width: '100%', maxWidth: '100vw' }}>
          <Hero />
        </div>
        
        <div className="section-divider"></div>
        
        <div id="experience" className="dynamic-section match-experience">
          <Experience />
        </div>
        
        <div className="section-divider"></div>
        
        <div id="projects" className="dynamic-section match-projects">
          <Projects />
        </div>
        
        <div className="section-divider"></div>
        
        <div className="dynamic-section match-skills">
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
