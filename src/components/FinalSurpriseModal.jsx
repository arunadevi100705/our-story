import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, RotateCcw, X, Moon, Sparkles } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function FinalSurpriseModal({ isOpen, onClose, onReplayAll }) {
  useEffect(() => {
    if (isOpen) {
      // Gentle romantic ice-blue confetti bursts
      const duration = 3.5 * 1000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        confetti({
          particleCount: 25,
          startVelocity: 25,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.4 + 0.1,
          },
          colors: ['#DFF4FF', '#BFE7FF', '#91D5F5', '#245B83', '#FFFFFF', '#E8EDFF'],
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const { finalMessage } = personalization;

  return (
    <div
      className="final-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="final-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            color: 'var(--deep-ocean-blue)',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="Close Surprise"
        >
          <X size={22} />
        </button>

        {/* Floating Glowing Heart / Moon Icon */}
        <div style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--deep-ocean-blue), #2A6E9D)',
          color: '#FFF',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(36, 91, 131, 0.4)',
        }}>
          <Heart size={38} fill="#DFF4FF" stroke="#FFFFFF" className="heart-pulse" />
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: '2.2rem', marginTop: '1.5rem', color: 'var(--midnight-navy)' }}>
          To My One and Only 💙
        </h2>

        {/* Romantic quote */}
        <p className="final-modal-quote">
          {finalMessage.quote}
        </p>

        {/* Declaration */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.45rem',
          fontWeight: 700,
          color: 'var(--deep-ocean-blue)',
          marginBottom: '0.8rem'
        }}>
          {finalMessage.declaration}
        </p>

        {/* Signature */}
        <p className="script-font" style={{ fontSize: '2rem', color: 'var(--midnight-navy)', marginBottom: '2.5rem' }}>
          Forever yours, {personalization.girlfriendName} 🦋
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-romantic"
            onClick={onReplayAll}
            style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            <RotateCcw size={16} /> Replay From Beginning 🎁
          </button>

          <button
            className="btn-romantic-secondary"
            onClick={onClose}
            style={{ padding: '0.85rem 1.8rem', fontSize: '1rem', borderRadius: 'var(--radius-full)', cursor: 'pointer' }}
          >
            Keep Exploring 💙
          </button>
        </div>

      </div>
    </div>
  );
}
