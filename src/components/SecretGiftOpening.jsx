import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Gift } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function SecretGiftOpening({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger romantic ice-blue confetti blast
    confetti({
      particleCount: 90,
      spread: 95,
      origin: { y: 0.6 },
      colors: ['#DFF4FF', '#BFE7FF', '#91D5F5', '#245B83', '#FFFFFF', '#E8EDFF'],
    });

    setTimeout(() => {
      onOpen();
    }, 700);
  };

  if (isOpen) return null;

  return (
    <div className={`gift-screen-overlay ${isOpening ? 'opened' : ''}`}>
      <div style={{ textAlign: 'center', maxWidth: '540px', position: 'relative', zIndex: 10 }}>
        
        {/* Surprise tag */}
        <div className="section-tag" style={{ margin: '0 auto 1.5rem auto' }}>
          <Sparkles size={16} /> A Little Surprise Made Just for You 💙
        </div>

        {/* Heading & Subtitle */}
        <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 3.4rem)', marginBottom: '0.6rem', color: 'var(--midnight-navy)' }}>
          Hey, {personalization.boyfriendName} <span className="heart-pulse" style={{ display: 'inline-block' }}>💙</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '1.8rem', fontWeight: 500 }}>
          Someone special has a secret surprise waiting for him...
        </p>

        {/* Interactive Gift Box Illustration with Ice Blue Glow */}
        <div 
          className="gift-box-wrapper"
          onClick={handleOpenClick}
          role="button"
          tabIndex={0}
          aria-label="Click to open your surprise"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleOpenClick();
          }}
        >
          <img 
            src="/images/gift-box.jpg" 
            alt="Secret Surprise Box" 
            className="gift-box-illustration"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="gift-open-badge">
            <Gift size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />
            Tap to open 💙
          </div>
        </div>

        {/* Main CTA Button */}
        <div>
          <button 
            className="btn-romantic"
            onClick={handleOpenClick}
            style={{ fontSize: '1.15rem', padding: '1rem 2.8rem' }}
          >
            Open Your Surprise 💌
          </button>
        </div>

        {/* Made with love signature */}
        <p className="script-font" style={{ marginTop: '2.5rem', fontSize: '1.45rem', color: 'var(--deep-ocean-blue)' }}>
          A little piece of my heart, made just for you • {personalization.girlfriendName} 🦋
        </p>
      </div>
    </div>
  );
}
