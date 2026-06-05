import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 px-6 h-20 flex items-center justify-between" style={{ height: '100px' }}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full" 
             style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}></div>
        <span className="text-xl font-bold tracking-tight">SARA <span className="text-muted" style={{ color: 'var(--text-muted)' }}>DAWOOD</span></span>
      </div>
      
      {/* Floating Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 nav-links-container">
        <a href="#experience" className="hover:text-primary transition-colors" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Experience</a>
        <a href="#projects" className="hover:text-primary transition-colors" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Projects</a>
        <a href="https://drive.google.com/file/d/1_k5yoIlgo4aT0kEVj_r0sBc_a64BEH09/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Hire Me</a>
      </div>

      {/* Mobile Toggle */}
      <div className="flex md:hidden items-center gap-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 glass-card flex items-center justify-center border-none"
          style={{ cursor: 'pointer', color: 'inherit', borderRadius: '50%' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full glass-nav p-6 flex flex-col gap-4 md:hidden">
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Experience</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Projects</a>
          <a href="https://drive.google.com/file/d/1_k5yoIlgo4aT0kEVj_r0sBc_a64BEH09/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary text-center">Hire Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
