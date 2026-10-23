import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function FloatingElements() {
  const hearts = [
    { id: 1, left: '6%', size: 18, delay: '0s', duration: '13s' },
    { id: 2, left: '16%', size: 24, delay: '3s', duration: '15s' },
    { id: 3, left: '28%', size: 16, delay: '7s', duration: '12s' },
    { id: 4, left: '44%', size: 22, delay: '1.5s', duration: '16s' },
    { id: 5, left: '56%', size: 26, delay: '5s', duration: '14s' },
    { id: 6, left: '70%', size: 18, delay: '8s', duration: '17s' },
    { id: 7, left: '82%', size: 22, delay: '2s', duration: '13s' },
    { id: 8, left: '92%', size: 20, delay: '6s', duration: '15s' },
  ];

  const butterflies = [
    { id: 1, left: '10%', delay: '1s', duration: '14s' },
    { id: 2, left: '25%', delay: '5s', duration: '16s' },
    { id: 3, left: '38%', delay: '2s', duration: '13s' },
    { id: 4, left: '64%', delay: '7s', duration: '15s' },
    { id: 5, left: '78%', delay: '3.5s', duration: '12s' },
    { id: 6, left: '88%', delay: '8s', duration: '17s' },
  ];

  return (
    <div className="ambient-particles-container" aria-hidden="true">
      {/* Floating Ice Blue Hearts */}
      {hearts.map((h) => (
        <div
          key={`h-${h.id}`}
          className="floating-heart-particle"
          style={{
            left: h.left,
            animationDelay: h.delay,
            animationDuration: h.duration,
          }}
        >
          <Heart size={h.size} fill="#DFF4FF" stroke="#91D5F5" strokeWidth={1.5} />
        </div>
      ))}

      {/* Floating Gentle Blue Butterflies / Sparkles */}
      {butterflies.map((b) => (
        <div
          key={`b-${b.id}`}
          className="floating-butterfly-particle"
          style={{
            left: b.left,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#91D5F5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 12c-2-3-6-4-8-2s-2 6 2 8c3 1.5 5-2 6-6Z" fill="#DFF4FF" />
            <path d="M12 12c2-3 6-4 8-2s2 6-2 8c-3 1.5-5-2-6-6Z" fill="#DFF4FF" />
            <path d="M12 8v8" />
          </svg>
        </div>
      ))}
    </div>
  );
}
