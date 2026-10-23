import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  const letter = personalization.birthdayLetter;

  return (
    <section id="letter" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={16} /> From the Depths of My Heart
          </div>
          <h2 className="section-title">A Little Piece of My Heart, Just for You 💙</h2>
          <p className="section-subtitle">
            {isOpen
              ? "Words written quietly for you, from the deepest corner of my soul."
              : "You have one special letter waiting for you..."}
          </p>
        </div>

        {/* Envelope / Letter Container */}
        <div className="envelope-wrapper">
          {!isOpen ? (
            /* Sealed Envelope State */
            <div
              className="envelope-closed"
              onClick={toggleLetter}
              role="button"
              tabIndex={0}
              aria-label="Click to break seal and read the letter"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleLetter();
              }}
            >
              <div className="wax-seal">
                <Heart size={32} fill="#FFF" stroke="#FFF" />
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--midnight-navy)', marginBottom: '0.5rem' }}>
                For {personalization.boyfriendName}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Sealed with tenderness & deep affection.
              </p>

              <button
                className="btn-romantic"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLetter();
                }}
                style={{ fontSize: '1rem', padding: '0.8rem 2.2rem' }}
              >
                Break Seal & Open Letter 💌
              </button>
            </div>
          ) : (
            /* Unfolded Stationary Paper State (Soft White & Ice Blue) */
            <div className="letter-paper">
              {/* Top re-seal button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <button
                  onClick={toggleLetter}
                  className="btn-romantic-secondary"
                  style={{
                    padding: '0.35rem 0.9rem',
                    fontSize: '0.8rem',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                  }}
                >
                  Fold & Re-seal ✉️
                </button>
              </div>

              {/* Letter Greeting */}
              <div className="letter-greeting">
                {letter.greeting}
              </div>

              {/* Letter Body Paragraphs */}
              <div className="letter-body">
                {letter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Letter Closing & Signature */}
              <div className="letter-closing">
                <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  {letter.closing}
                </p>
                <p style={{ fontSize: '2.1rem', color: 'var(--deep-ocean-blue)' }}>
                  {letter.signature.replace("Your Girl", personalization.girlfriendName)}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
