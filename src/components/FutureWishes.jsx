import React from 'react';
import { Moon, Waves, Star, Compass, Home, Sparkles } from 'lucide-react';
import { personalization } from '../data/personalization';

const iconMap = {
  Waves,
  Star,
  Compass,
  Home,
  Sparkles,
};

export default function FutureWishes() {
  const stars = [
    { id: 1, top: '12%', left: '8%', size: 3, delay: '0s' },
    { id: 2, top: '25%', left: '22%', size: 2, delay: '1.2s' },
    { id: 3, top: '18%', left: '45%', size: 4, delay: '0.6s' },
    { id: 4, top: '30%', left: '72%', size: 2, delay: '1.8s' },
    { id: 5, top: '15%', left: '88%', size: 3, delay: '2.4s' },
    { id: 6, top: '70%', left: '12%', size: 2, delay: '1s' },
    { id: 7, top: '82%', left: '35%', size: 3, delay: '0.4s' },
    { id: 8, top: '65%', left: '60%', size: 2, delay: '2.1s' },
    { id: 9, top: '80%', left: '82%', size: 3, delay: '1.5s' },
  ];

  return (
    <section id="wishes" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Moon size={16} /> Tomorrow, Always & Forever
          </div>
          <h2 className="section-title">More Memories Waiting for Us 🌙</h2>
          <p className="section-subtitle">
            Every step we've taken brought us here, and every road ahead looks so peaceful with you.
          </p>
        </div>

        {/* Midnight Blue Night Sky Box */}
        <div className="future-night-wrapper">
          
          {/* Twinkling Stars */}
          {stars.map((s) => (
            <div
              key={s.id}
              className="star-particle"
              style={{
                top: s.top,
                left: s.left,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDelay: s.delay,
              }}
            />
          ))}

          {/* Cards Grid */}
          <div className="future-cards-grid">
            {personalization.futureWishes.map((wish) => {
              const IconComp = iconMap[wish.icon] || Sparkles;
              return (
                <div key={wish.id} className="future-card">
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(145, 213, 245, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--frost-blue)',
                    marginBottom: '1rem',
                  }}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="future-card-title">{wish.title}</h3>
                  <p className="future-card-desc">{wish.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom starry quote */}
          <div style={{ textAlign: 'center', marginTop: '3rem', position: 'relative', zIndex: 2 }}>
            <p className="script-font" style={{ fontSize: '1.85rem', color: 'var(--frost-blue)' }}>
              "Whatever tomorrow brings, my hand will always be in yours." ✨💙
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
