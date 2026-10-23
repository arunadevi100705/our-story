import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Flame, Gift } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function BirthdayCelebrationHero() {
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [toastMessage, setToastMessage] = useState('');
  const [isBirthdayOrAfter, setIsBirthdayOrAfter] = useState(false);

  // Check if date is on or after Dec 2, 2026 in Asia/Kolkata
  useEffect(() => {
    const birthdayStartUtc = Date.UTC(2026, 11, 1, 18, 30, 0); // 2026-12-02 00:00:00 IST
    if (Date.now() >= birthdayStartUtc) {
      setIsBirthdayOrAfter(true);
    }
  }, []);

  // Trigger romantic ice-blue confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 85,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#DFF4FF', '#BFE7FF', '#91D5F5', '#245B83', '#FFFFFF', '#E8EDFF'],
    });
  };

  // Candle click / blow out
  const toggleCandle = (index) => {
    const updated = [...candlesLit];
    updated[index] = !updated[index];
    setCandlesLit(updated);

    if (updated.every((lit) => !lit)) {
      triggerConfetti();
      setToastMessage("You blew out all the candles! Make a wish, my love... it will come true! 🎂✨💙");
    }
  };

  const relightCandles = () => {
    setCandlesLit([true, true, true]);
    setToastMessage('');
  };

  const handleSneakPeek = () => {
    triggerConfetti();
    setToastMessage("December 2 will be all about celebrating YOU! Until then, explore our memories and surprises below... 💙✨");
  };

  return (
    <section id="home" className="section hero-anticipation">
      <div className="container">
        
        {/* Subtle decorative tag */}
        <div className="section-tag" style={{ margin: '0 auto 1.2rem auto' }}>
          <Sparkles size={16} /> Our story, my favourite feeling.
        </div>

        {/* Dynamic Heading based on date */}
        {isBirthdayOrAfter ? (
          <>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--midnight-navy)' }}>
              HAPPY BIRTHDAY, MY FAVOURITE PERSON! <span className="heart-pulse" style={{ display: 'inline-block' }}>🎂💙</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}>
              Today is the day we celebrate the most wonderful, kind-hearted soul in my life. Here's to celebrating you with all my heart!
            </p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--midnight-navy)' }}>
              A Little Surprise Made Just for You <span className="heart-pulse" style={{ display: 'inline-block' }}>💙</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}>
              Your special day is getting closer, my love. 💙 I made this secret little space for you—filled with our memories, quiet truths, and all the love I carry for you.
            </p>
          </>
        )}

        {/* Centerpiece: If on birthday, show blowable cake; if before, show anticipation surprise box */}
        {isBirthdayOrAfter ? (
          <div className="cake-stage">
            <div className="cake-instructions-badge">
              <Flame size={14} fill="#FFB300" stroke="#FF8F00" />
              {candlesLit.some((lit) => lit)
                ? 'Click each candle to blow it out and make a wish!'
                : 'All candles blown out! Click below to relight'}
            </div>

            <div className="cake-container">
              <div className="candles-row">
                {candlesLit.map((lit, i) => (
                  <div
                    key={i}
                    className="candle-unit"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCandle(i);
                    }}
                    title={lit ? "Click to blow out candle" : "Blown out"}
                  >
                    <div className="candle-wick" />
                    <div className={lit ? "candle-flame" : "flame-extinguished"} />
                    {!lit && <div className="smoke-puff" />}
                  </div>
                ))}
              </div>

              <div className="cake-top-tier">
                <div className="frosting-drips" />
              </div>
              <div className="cake-bottom-tier">
                <div className="frosting-drips" />
              </div>
              <div className="cake-plate" />
            </div>

            {!candlesLit.some((lit) => lit) && (
              <button
                onClick={relightCandles}
                className="btn-romantic-secondary"
                style={{
                  marginTop: '1.2rem',
                  padding: '0.4rem 1.1rem',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Relight Candles 🕯️💙
              </button>
            )}
          </div>
        ) : (
          <div style={{ margin: '2rem 0' }}>
            <div
              className="glass-card"
              style={{
                maxWidth: '480px',
                margin: '0 auto',
                padding: '2rem 1.5rem',
                border: '2px solid var(--frost-blue)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(223, 244, 255, 0.6))',
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--frost-blue)',
                color: 'var(--deep-ocean-blue)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                boxShadow: '0 4px 14px rgba(36, 91, 131, 0.15)',
              }}>
                <Gift size={30} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--midnight-navy)' }}>
                Someone special has a surprise waiting for him... 🎁
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', marginBottom: '1.4rem' }}>
                A little piece of my heart, waiting for you to unwrap step by step.
              </p>
              <button
                className="btn-romantic"
                onClick={handleSneakPeek}
                style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
              >
                Unwrap a Sneak Peek ✨
              </button>
            </div>
          </div>
        )}

        {/* Sweet Toast / Confetti Message */}
        {toastMessage && (
          <div
            className="glass-card"
            style={{
              maxWidth: '560px',
              margin: '2rem auto 0 auto',
              padding: '1.2rem 1.8rem',
              border: '2px solid var(--frost-blue)',
              background: '#F0F8FD',
              animation: 'fadeIn 0.4s ease',
            }}
          >
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--deep-ocean-blue)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}>
              <Sparkles size={20} /> {toastMessage}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
