import React, { useState } from 'react';
import {
  Heart,
  HeartHandshake,
  Sparkles,
  Smile,
  ShieldCheck,
  Anchor,
  Waves,
  Eye,
  Star,
  Moon,
  Compass,
  RotateCw,
} from 'lucide-react';
import { personalization } from '../data/personalization';

// Icon map for the 12 reasons
const iconComponents = {
  HeartHandshake,
  Sparkles,
  Smile,
  ShieldCheck,
  Anchor,
  Waves,
  Eye,
  Star,
  Moon,
  Heart,
  Compass,
};

export default function TenReasons() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const revealAll = () => {
    const all = {};
    personalization.loveReasons.forEach((r) => {
      all[r.id] = true;
    });
    setFlippedCards(all);
  };

  const resetAll = () => {
    setFlippedCards({});
  };

  const revealedCount = Object.values(flippedCards).filter(Boolean).length;

  return (
    <section id="reasons" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Heart size={16} /> From My Heart to Yours
          </div>
          <h2 className="section-title">Little Reasons Why You're So Special to Me 💙</h2>
          <p className="section-subtitle">
            There are a million reasons why I love you, but here are 12 quiet truths that make you my favourite feeling.
          </p>

          {/* Reveal Counter & Controls */}
          <div style={{ marginTop: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--deep-ocean-blue)' }}>
              Unlocked: {revealedCount} of {personalization.loveReasons.length} 💙
            </span>
            <button
              onClick={revealedCount === personalization.loveReasons.length ? resetAll : revealAll}
              className="btn-romantic-secondary"
              style={{
                padding: '0.45rem 1.1rem',
                fontSize: '0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
              }}
            >
              <RotateCw size={13} />
              {revealedCount === personalization.loveReasons.length ? 'Flip Back All' : 'Reveal All 💌'}
            </button>
          </div>
        </div>

        {/* 12 Flip Cards Grid */}
        <div className="reasons-grid">
          {personalization.loveReasons.map((reason, index) => {
            const isFlipped = !!flippedCards[reason.id];
            const IconComponent = iconComponents[reason.icon] || Heart;

            return (
              <div
                key={reason.id}
                className={`reason-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleCard(reason.id)}
                role="button"
                tabIndex={0}
                aria-label={`Reason ${index + 1}: ${reason.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggleCard(reason.id);
                }}
              >
                <div className="reason-card-inner">
                  
                  {/* Front Side */}
                  <div className="reason-card-front">
                    <span className="reason-number-badge">#{index + 1}</span>
                    <div className="reason-icon-wrapper">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="reason-front-title">{reason.title}</h3>
                    <span className="reason-tap-hint">
                      <Heart size={13} fill="#245B83" stroke="#245B83" /> Tap to reveal my secret
                    </span>
                  </div>

                  {/* Back Side (Revealed message) */}
                  <div className="reason-card-back">
                    <span className="reason-number-badge">#{index + 1}</span>
                    <Heart size={20} fill="#245B83" stroke="#245B83" style={{ marginBottom: '0.8rem' }} />
                    <p className="reason-back-text">"{reason.message}"</p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.8rem' }}>
                      (Tap to flip back)
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
