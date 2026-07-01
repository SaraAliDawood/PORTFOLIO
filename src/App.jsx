import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Reveal from './components/Reveal';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="app-container noise-overlay">
      <ScrollProgress />
      <Navbar />
      <main>
        <div className="dynamic-section match-hero" style={{ width: '100%', maxWidth: '100vw' }}>
          <Hero />
        </div>

        <div className="section-divider"></div>

        <div id="experience" className="dynamic-section match-experience">
          <Reveal>
            <Experience />
          </Reveal>
        </div>

        <div className="section-divider"></div>

        {/*
          Projects hosts a position:sticky pinned gallery, so its ancestors
          must NOT clip overflow. We keep the animated gradient as an
          absolutely-positioned background sibling (with its own overflow
          hidden) instead of wrapping the sticky content in .dynamic-section.
        */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="dynamic-section match-projects"
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, zIndex: -1 }}
          ></div>
          <Projects />
        </div>

        <div className="section-divider"></div>

        <div className="dynamic-section match-skills">
          <Reveal>
            <Skills />
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
