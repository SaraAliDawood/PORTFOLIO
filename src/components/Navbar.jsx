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
        <a href="https://drive.google.com/file/d/1Z1dHPy8ZwFQUa7nV9A2lbKDP5hI0Gff6/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Hire Me</a>
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
        <div 
          className="glass-nav flex flex-col md:hidden"
          style={{ 
            position: 'absolute', 
            top: '100px', 
            left: 0, 
            width: '100%', 
            padding: '24px',
            gap: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <a href="#experience" onClick={() => setIsMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500, paddingBottom: '8px', borderBottom: '1px solid var(--glass-border)' }}>Experience</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500, paddingBottom: '8px', borderBottom: '1px solid var(--glass-border)' }}>Projects</a>
          <a href="https://drive.google.com/file/d/1Z1dHPy8ZwFQUa7nV9A2lbKDP5hI0Gff6/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ justifyContent: 'center', marginTop: '8px' }}>Hire Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
