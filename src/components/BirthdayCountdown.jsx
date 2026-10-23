import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'before', // 'before' | 'today' | 'after'
  });

  useEffect(() => {
    const calculateCountdown = () => {
      // Birthday in Asia/Kolkata (IST = UTC + 5:30)
      // Dec 2, 2026 00:00:00 IST = Dec 1, 2026 18:30:00 UTC
      const birthdayStartUtc = Date.UTC(2026, 11, 1, 18, 30, 0); // 2026-12-02 00:00:00 IST
      // Dec 2, 2026 23:59:59 IST = Dec 2, 2026 18:29:59.999 UTC
      const birthdayEndUtc = Date.UTC(2026, 11, 2, 18, 29, 59, 999);

      const now = Date.now();

      if (now >= birthdayStartUtc && now <= birthdayEndUtc) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: 'today' });
      } else if (now > birthdayEndUtc) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: 'after' });
      } else {
        const difference = birthdayStartUtc - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: Math.max(0, days),
          hours: Math.max(0, hours),
          minutes: Math.max(0, minutes),
          seconds: Math.max(0, seconds),
          status: 'before',
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Clock size={16} /> Counting Down Every Heartbeat
          </div>
          <h2 className="section-title">Your Special Day Is Getting Closer ✨</h2>
          <p className="section-subtitle">
            {timeLeft.status === 'today' || timeLeft.status === 'after'
              ? 'HAPPY BIRTHDAY, MY FAVOURITE PERSON! 🎂💙'
              : 'Counting down to the day we celebrate YOU. 💙'}
          </p>
        </div>

        {/* Live Countdown Cards (when before birthday) */}
        {timeLeft.status === 'before' ? (
          <div className="countdown-grid">
            <div className="countdown-card">
              <div className="countdown-number">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-card">
              <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-card">
              <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-card">
              <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        ) : (
          /* Celebration Banner (When on or after December 2) */
          <div className="countdown-celebration-banner">
            <div style={{
              display: 'inline-flex',
              padding: '0.9rem',
              background: 'var(--frost-blue)',
              borderRadius: '50%',
              marginBottom: '1rem',
              color: 'var(--deep-ocean-blue)'
            }}>
              <Sparkles size={32} />
            </div>
            <h3 style={{ fontSize: '2.1rem', color: 'var(--midnight-navy)', marginBottom: '0.6rem' }}>
              HAPPY BIRTHDAY, MY FAVOURITE PERSON! 🎂💙
            </h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--deep-ocean-blue)', maxWidth: '560px', margin: '0 auto', fontWeight: 500 }}>
              Today is the day we celebrate the most wonderful human being in my world. I love you so much, {personalization.boyfriendName}! 💙
            </p>
          </div>
        )}

        {/* Bottom Timezone Note */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={14} /> Birthday: <strong>December 2, 2026</strong> (IST) • Loving you through every second
          </p>
        </div>

      </div>
    </section>
  );
}
