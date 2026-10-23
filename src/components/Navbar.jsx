import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Gift } from 'lucide-react';

export default function Navbar({ onOpenFinalSurprise }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Our Story' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'music-surprise', label: 'Our Song 🎵' },
    { id: 'memories', label: 'Memories' },
    { id: 'reasons', label: '12 Reasons' },
    { id: 'quiz', label: 'Our Quiz' },
    { id: 'wishes', label: 'Our Future' },
    { id: 'heartfelt-letter', label: 'Letter 💌' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container" aria-label="Main Navigation">
        
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="nav-logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <Heart size={20} fill="#245B83" stroke="#245B83" className="heart-pulse" />
          <span>Our Love Story 💙</span>
        </button>

        {/* Desktop & Mobile Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* Quick Final Surprise Trigger */}
          <li>
            <button
              className="nav-link-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFinalSurprise();
              }}
              style={{
                color: '#245B83',
                fontWeight: 600,
                background: 'rgba(191, 231, 255, 0.45)',
              }}
            >
              <Gift size={15} /> Secret Surprise 💙
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>
    </header>
  );
}
