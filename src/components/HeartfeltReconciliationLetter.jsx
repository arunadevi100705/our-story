import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Heart, Sparkles, RotateCcw } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function HeartfeltReconciliationLetter({ onRestartJourney }) {
  const [isOpen, setIsOpen] = useState(false);
  const [finalDecision, setFinalDecision] = useState(null); // 'yes' | 'no' | null

  const letter = personalization.heartfeltLetter;
  const finalQ = personalization.finalQuestion;

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  const handleYes = () => {
    setFinalDecision('yes');
    // Gentle romantic ice-blue confetti
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#DFF4FF', '#BFE7FF', '#91D5F5', '#245B83', '#FFFFFF'],
    });
  };

  const handleNo = () => {
    setFinalDecision('no');
  };

  return (
    <section id="heartfelt-letter" className="section" style={{ background: 'linear-gradient(180deg, rgba(244, 249, 253, 0.6) 0%, rgba(223, 244, 255, 0.35) 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={16} /> A Little Piece of My Heart
          </div>
          <h2 className="section-title">{letter.heading}</h2>
          <p className="section-subtitle">
            {isOpen
              ? "Words written quietly for you, from the deepest corner of my soul."
              : letter.teaser}
          </p>
        </div>

        {/* Sealed Envelope / Unfolded Letter Container */}
        <div className="envelope-wrapper">
          {!isOpen ? (
            /* Sealed Envelope */
            <div
              className="envelope-closed"
              onClick={toggleLetter}
              role="button"
              tabIndex={0}
              aria-label="Click to break seal and read letter"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleLetter();
              }}
            >
              <div className="wax-seal">
                <Heart size={32} fill="#FFF" stroke="#FFF" />
              </div>

              <h3 style={{ fontSize: '1.65rem', color: 'var(--midnight-navy)', marginBottom: '0.5rem' }}>
                For {personalization.boyfriendName} (Maama 💙)
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {letter.teaser}
              </p>

              <button
                className="btn-romantic"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLetter();
                }}
                style={{ fontSize: '1.05rem', padding: '0.85rem 2.4rem' }}
              >
                Break Seal & Read Letter 💌
              </button>
            </div>
          ) : (
            /* Unfolded Letter on White Paper with Ice Blue Border */
            <div className="letter-paper" style={{ border: '2px solid var(--frost-blue)' }}>
              
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

              {/* Salutation */}
              <div className="letter-greeting" style={{ color: 'var(--midnight-navy)' }}>
                {letter.salutation}
              </div>

              {/* Letter Paragraphs */}
              <div className="letter-body">
                {letter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Closing & Signature */}
              <div className="letter-closing" style={{ marginTop: '2.5rem' }}>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  {letter.closing}
                </p>
                <p style={{ fontSize: '2.1rem', color: 'var(--deep-ocean-blue)' }}>
                  {letter.signature}
                </p>
              </div>

              {/* ============================================================== */}
              {/* Requirement 6: Final Question Immediately After the Letter */}
              {/* ============================================================== */}
              <div style={{
                marginTop: '3.5rem',
                paddingTop: '2.5rem',
                borderTop: '2px dashed var(--frost-blue)',
                textAlign: 'center',
              }}>
                <h3 style={{
                  fontSize: '1.85rem',
                  color: 'var(--midnight-navy)',
                  marginBottom: '1.8rem',
                }}>
                  {finalQ.question}
                </h3>

                {/* Two Large Choice Buttons */}
                <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <button
                    className="btn-romantic"
                    onClick={handleYes}
                    style={{
                      fontSize: '1.15rem',
                      padding: '1.1rem 2.4rem',
                      background: finalDecision === 'yes'
                        ? 'linear-gradient(135deg, #1E4E70, #245B83)'
                        : 'linear-gradient(135deg, var(--deep-ocean-blue), #2F729F)',
                      boxShadow: finalDecision === 'yes' ? '0 0 25px rgba(145, 213, 245, 0.8)' : undefined,
                    }}
                  >
                    {finalQ.yesText}
                  </button>

                  <button
                    className="btn-romantic-secondary"
                    onClick={handleNo}
                    style={{
                      fontSize: '1.15rem',
                      padding: '1.1rem 2.2rem',
                      borderRadius: 'var(--radius-full)',
                      background: finalDecision === 'no' ? '#EBF7FF' : 'var(--glass-bg)',
                    }}
                  >
                    {finalQ.noText}
                  </button>
                </div>

                {/* Response if YES */}
                {finalDecision === 'yes' && (
                  <div style={{
                    background: 'linear-gradient(135deg, #EAF5FC, #DFF4FF)',
                    border: '2px solid var(--soft-sky-blue)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2rem',
                    maxWidth: '560px',
                    margin: '0 auto',
                    animation: 'scaleUp 0.4s ease',
                  }}>
                    {/* Two Glowing Blue Hearts coming together */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                      <span className="heart-pulse" style={{ color: 'var(--deep-ocean-blue)', display: 'inline-block' }}>
                        <Heart size={36} fill="var(--soft-sky-blue)" />
                      </span>
                      <Sparkles size={24} color="var(--deep-ocean-blue)" />
                      <span className="heart-pulse" style={{ color: 'var(--deep-ocean-blue)', display: 'inline-block' }}>
                        <Heart size={36} fill="var(--soft-sky-blue)" />
                      </span>
                    </div>

                    <p style={{
                      fontSize: '1.15rem',
                      color: 'var(--midnight-navy)',
                      lineHeight: '1.7',
                      fontWeight: 500,
                      marginBottom: '1.6rem',
                    }}>
                      "{finalQ.yesResponse}"
                    </p>

                    <button
                      className="btn-romantic"
                      onClick={onRestartJourney}
                      style={{
                        padding: '0.9rem 2.4rem',
                        fontSize: '1.1rem',
                        animation: 'pulseHint 2s infinite',
                      }}
                    >
                      {finalQ.yesButtonText}
                    </button>
                  </div>
                )}

                {/* Response if NO */}
                {finalDecision === 'no' && (
                  <div style={{
                    background: '#F8FCFF',
                    border: '1.5px solid var(--frost-blue)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.8rem',
                    maxWidth: '540px',
                    margin: '0 auto',
                    animation: 'fadeIn 0.4s ease',
                  }}>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.7',
                      fontWeight: 500,
                    }}>
                      "{finalQ.noResponse}"
                    </p>
                  </div>
                )}

              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
