import React from 'react';
import { Volume2, VolumeX, Play, Pause, Music, ExternalLink } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { personalization } from '../data/personalization';

export default function MusicPlayer() {
  const { isPlaying, togglePlay, volume, setVolume, isMuted, setIsMuted, isYoutubePlaying } = useAudio();

  const currentlyPlaying = isPlaying || isYoutubePlaying;

  const handleDiscClick = () => {
    if (isYoutubePlaying) {
      const el = document.getElementById('music-surprise');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      togglePlay();
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <aside className="floating-music-widget" aria-label="Music Player">
      {/* Floating Animated Disc */}
      <button
        className={`music-spin-disc ${currentlyPlaying ? 'spinning' : ''}`}
        onClick={handleDiscClick}
        aria-label={currentlyPlaying ? 'Pause music' : `Play ${personalization.specialSongTitle}`}
        title={currentlyPlaying ? 'Uyirey Playing' : `Play ${personalization.specialSongTitle}`}
      >
        {currentlyPlaying ? <Pause size={17} /> : <Play size={17} style={{ marginLeft: '2px' }} />}
      </button>

      {/* Title & Animated Soundwaves */}
      <div className="music-info">
        <span className="music-title-text" title={personalization.specialSongTitle}>
          {personalization.specialSongTitle}
        </span>
        <div className="music-status-badge">
          <span>{currentlyPlaying ? 'Playing' : 'Paused'}</span>
          <div className="soundwave-bars">
            <span className={`soundwave-bar ${currentlyPlaying ? 'active' : ''}`} />
            <span className={`soundwave-bar ${currentlyPlaying ? 'active' : ''}`} />
            <span className={`soundwave-bar ${currentlyPlaying ? 'active' : ''}`} />
          </div>
        </div>
      </div>

      {/* Volume slider & Mute button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: '0.2rem' }}>
        <button
          onClick={toggleMute}
          style={{ background: 'none', border: 'none', color: 'var(--deep-ocean-blue)', cursor: 'pointer', padding: '2px', display: 'flex' }}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          style={{ width: '50px', accentColor: 'var(--deep-ocean-blue)', cursor: 'pointer' }}
          aria-label="Volume Control"
        />
      </div>

      {/* Legitimate Streaming Link for Uyirey */}
      {personalization.officialStreamUrl && (
        <a
          href={personalization.officialStreamUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Listen to official Uyirey song"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.85rem',
            background: 'var(--frost-blue)',
            color: 'var(--deep-ocean-blue)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 600,
            textDecoration: 'none',
            marginLeft: '0.3rem',
            border: '1px solid rgba(145, 213, 245, 0.7)',
            transition: 'background var(--transition-fast)',
          }}
        >
          <span>Listen to Uyirey 🎵</span> <ExternalLink size={12} />
        </a>
      )}
    </aside>
  );
}
