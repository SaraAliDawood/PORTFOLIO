import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-8 p-12 relative z-10" style={{ background: 'transparent', borderTop: '1px solid var(--glass-border)', padding: '48px 20px' }}>
      <div className="max-width-1200 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <h3 className="text-xl font-bold mb-4">SARA DAWOOD</h3>
          <p className="text-muted">Elevating web experiences through modern frontend technologies and robust ERP solutions.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <div className="flex flex-col gap-2">
            <a href="mailto:saradawood605@gmail.com" className="flex items-center gap-2 text-muted" style={{ textDecoration: 'none' }}>
              <Mail size={18} /> saradawood605@gmail.com
            </a>
            <a href="https://wa.me/971502542590" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted" style={{ textDecoration: 'none' }}>
              <Phone size={18} /> (+971) 502542590
            </a>
            <div className="flex items-center gap-2 text-muted">
              <MapPin size={18} /> Abu Dhabi, UAE
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Social Presence</h3>
          <div className="flex gap-4">
            <a href="https://github.com/SaraAliDawood" target="_blank" rel="noreferrer" className="p-3 glass-card hover:text-primary transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/in/sara-dawood17" target="_blank" rel="noreferrer" className="p-3 glass-card hover:text-primary transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-muted" style={{ fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Sara Dawood. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
