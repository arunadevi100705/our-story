import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { personalization } from './data/personalization';
import { AudioProvider } from './context/AudioContext';
import FloatingElements from './components/FloatingElements';
import SecretGiftOpening from './components/SecretGiftOpening';
import Navbar from './components/Navbar';
import BirthdayCelebrationHero from './components/BirthdayCelebrationHero';
import BirthdayCountdown from './components/BirthdayCountdown';
import MusicSurpriseScreen from './components/MusicSurpriseScreen';
import MemoryGallery from './components/MemoryGallery';
import TenReasons from './components/TenReasons';
import BirthdayQuiz from './components/BirthdayQuiz';
import FutureWishes from './components/FutureWishes';
import HeartfeltReconciliationLetter from './components/HeartfeltReconciliationLetter';
import FinalSurpriseModal from './components/FinalSurpriseModal';
import MusicPlayer from './components/MusicPlayer';
import BackToTop from './components/BackToTop';

function MainAppContent() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [finalSurpriseOpen, setFinalSurpriseOpen] = useState(false);

  // Calculate days together if relationshipStartDate is provided
  const calculateDaysTogether = () => {
    if (!personalization.relationshipStartDate) return null;
    const start = new Date(personalization.relationshipStartDate).getTime();
    const now = new Date().getTime();
    if (isNaN(start) || now < start) return null;
    return Math.floor((now - start) / (1000 * 60 * 60 * 24));
  };

  const daysTogether = calculateDaysTogether();

  const handleReplayAll = () => {
    setFinalSurpriseOpen(false);
    setGiftOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartJourney = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setGiftOpened(false);
    }, 400);
  };

  return (
    <div className="our-love-story-app">
      {/* Ambient Floating Ice Blue Hearts & Butterflies */}
      <FloatingElements />

      {/* Secret Opening Gift Screen */}
      <SecretGiftOpening
        isOpen={giftOpened}
        onOpen={() => setGiftOpened(true)}
      />

      {/* Main Experience (Visible once opened) */}
      {giftOpened && (
        <>
          {/* Frosted Glass Navbar */}
          <Navbar onOpenFinalSurprise={() => setFinalSurpriseOpen(true)} />

          <main id="main-content">
            {/* 1. Our Story & Anticipation Hero */}
            <BirthdayCelebrationHero />

            {/* 2. Live Countdown to Dec 2, 2026 (Asia/Kolkata IST) */}
            <BirthdayCountdown />

            {/* 3. Special Music Surprise Screen (Immediately BEFORE Memories) */}
            <MusicSurpriseScreen />

            {/* 4. Our Little World, Our Beautiful Memories (with real photos from pics) */}
            <MemoryGallery />

            {/* 5. Twelve Reasons Why You're So Special to Me */}
            <TenReasons />

            {/* 6. Interactive Love Story Quiz (10 Questions with Open-Ended) */}
            <BirthdayQuiz />

            {/* 7. Our Future Together */}
            <FutureWishes />

            {/* 8. Heartfelt Reconciliation Letter + Final Question ("Shall we start from first?") */}
            <HeartfeltReconciliationLetter onRestartJourney={handleRestartJourney} />

            {/* 9. Final Climax Invitation Section */}
            <section className="section" style={{ textAlign: 'center', padding: '5rem 0' }}>
              <div className="container">
                <div className="glass-card" style={{ maxWidth: '650px', margin: '0 auto', padding: '3.5rem 2rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--frost-blue)',
                    color: 'var(--deep-ocean-blue)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <Gift size={32} />
                  </div>
                  
                  <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--midnight-navy)' }}>
                    Before You Go... 💙
                  </h2>
                  
                  <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                    I have one more secret tucked away just for you. A final wish from my heart to yours.
                  </p>

                  <button
                    className="btn-romantic"
                    onClick={() => setFinalSurpriseOpen(true)}
                    style={{
                      fontSize: '1.15rem',
                      padding: '1.1rem 3rem',
                    }}
                  >
                    One More Little Secret... 💙
                  </button>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            borderTop: '1px solid var(--glass-border)',
            background: 'rgba(255, 255, 255, 0.6)',
            position: 'relative',
            zIndex: 10,
          }}>
            <p className="script-font" style={{ fontSize: '1.85rem', color: 'var(--midnight-navy)', marginBottom: '0.4rem' }}>
              Our story is my favourite story. 💙
            </p>

            {daysTogether && (
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                Loving you for <strong>{daysTogether.toLocaleString()} days</strong> and counting every single second.
              </p>
            )}

            <p style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
              Our Love Story 💙 • Dedicated to {personalization.boyfriendName} (Maama) • Forever yours, {personalization.girlfriendName} 🦋
            </p>
          </footer>

          {/* Floating Romantic Music Player */}
          <MusicPlayer />

          {/* Floating Back to Top Button */}
          <BackToTop />

          {/* Fullscreen Climax Surprise Modal */}
          <FinalSurpriseModal
            isOpen={finalSurpriseOpen}
            onClose={() => setFinalSurpriseOpen(false)}
            onReplayAll={handleReplayAll}
          />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <MainAppContent />
    </AudioProvider>
  );
}
