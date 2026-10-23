import React, { useState, useEffect, useRef } from 'react';
import { Music, Sparkles, Heart, ArrowDown, ExternalLink, Play, Pause, AlertCircle } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { personalization } from '../data/personalization';

export default function MusicSurpriseScreen() {
  const { setIsYoutubePlaying } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsListened, setSecondsListened] = useState(0);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [embedError, setEmbedError] = useState(false);

  const playerRef = useRef(null);
  const timerRef = useRef(null);

  const videoId = personalization.youtubeVideoId || "OIRWdkPMrh0";
  const watchUrl = personalization.youtubeWatchUrl || `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1`;

  // 1. Initialize YouTube IFrame API
  useEffect(() => {
    let player = null;

    const setupPlayer = () => {
      if (window.YT && window.YT.Player) {
        try {
          player = new window.YT.Player('youtube-iframe-player', {
            events: {
              onReady: () => {
                setIframeLoaded(true);
              },
              onStateChange: (event) => {
                // YT.PlayerState: PLAYING = 1, PAUSED = 2, ENDED = 0, BUFFERING = 3
                if (window.YT) {
                  if (event.data === window.YT.PlayerState.PLAYING) {
                    setIsPlaying(true);
                    setHasStartedPlaying(true);
                    setIsYoutubePlaying(true);
                  } else if (
                    event.data === window.YT.PlayerState.PAUSED ||
                    event.data === window.YT.PlayerState.ENDED
                  ) {
                    setIsPlaying(false);
                    setIsYoutubePlaying(false);
                  }
                }
              },
              onError: (err) => {
                console.warn('YouTube Player error:', err);
                setEmbedError(true);
              },
            },
          });
          playerRef.current = player;
        } catch (e) {
          console.warn('Could not initialize YT.Player on iframe:', e);
        }
      }
    };

    // If API is already ready
    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      // Setup callback
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (existingCallback) existingCallback();
        setupPlayer();
      };
    }

    // 2. Also listen for postMessage events directly from the YouTube IFrame
    const handleMessage = (e) => {
      try {
        if (typeof e.data === 'string') {
          const parsed = JSON.parse(e.data);
          if (parsed.event === 'onStateChange') {
            if (parsed.info === 1) {
              // Playing
              setIsPlaying(true);
              setHasStartedPlaying(true);
              setIsYoutubePlaying(true);
            } else if (parsed.info === 2 || parsed.info === 0) {
              // Paused or Ended
              setIsPlaying(false);
              setIsYoutubePlaying(false);
            }
          } else if (parsed.event === 'infoDelivery' && parsed.info && typeof parsed.info.playerState !== 'undefined') {
            if (parsed.info.playerState === 1) {
              setIsPlaying(true);
              setHasStartedPlaying(true);
              setIsYoutubePlaying(true);
            } else if (parsed.info.playerState === 2 || parsed.info.playerState === 0) {
              setIsPlaying(false);
              setIsYoutubePlaying(false);
            }
          }
        }
      } catch (err) {
        // Not a JSON message or unrelated
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      setIsYoutubePlaying(false);
    };
  }, [setIsYoutubePlaying]);

  // 3. Five-Second Timer that runs ONLY while playback is active
  useEffect(() => {
    if (isPlaying && secondsListened < 5) {
      timerRef.current = setInterval(() => {
        setSecondsListened((prev) => {
          if (prev >= 4) {
            clearInterval(timerRef.current);
            return 5;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, secondsListened]);

  // Smooth scroll to memories section
  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Manual fallback simulation in case the user opens YouTube in a new tab or iframe is blocked
  const handleManualListening = () => {
    setHasStartedPlaying(true);
    setIsPlaying(true);
  };

  const isCompleted = secondsListened >= 5;
  const timerRemaining = Math.max(0, 5 - secondsListened);

  return (
    <section
      id="music-surprise"
      className="section"
      style={{
        background: 'linear-gradient(180deg, rgba(223, 244, 255, 0.45) 0%, rgba(244, 249, 253, 0.95) 100%)',
        position: 'relative',
        padding: '5rem 0',
      }}
    >
      <div className="container">

        {/* Section Header with Required Message */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Music size={16} /> A Melody Just for Us
          </div>
          <h2 className="section-title" style={{ maxWidth: '850px', margin: '0 auto 0.8rem auto' }}>
            Before you see our memories, let's listen to our most-loved song together. 🥹💙
          </h2>
          <p className="script-font" style={{ fontSize: '1.85rem', color: 'var(--deep-ocean-blue)' }}>
            Can you guess our most-loved song? 🎶🫶🏻
          </p>
        </div>

        {/* Beautiful Ice-Blue Music Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            border: '2px solid var(--frost-blue)',
            boxShadow: '0 16px 45px rgba(36, 91, 131, 0.16), 0 0 35px rgba(145, 213, 245, 0.38)',
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {/* Animated Glowing Music Notes */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <span style={{ color: 'var(--soft-sky-blue)', animation: 'twinkle 2s infinite alternate' }}>
              <Music size={28} />
            </span>
            <span style={{ color: 'var(--deep-ocean-blue)', animation: 'heartPulse 2.5s infinite' }}>
              <Heart size={34} fill="var(--frost-blue)" />
            </span>
            <span style={{ color: 'var(--soft-sky-blue)', animation: 'twinkle 2.5s infinite alternate 0.5s' }}>
              <Sparkles size={28} />
            </span>
          </div>

          {/* Song Title and Subtitle */}
          <h3
            style={{
              fontSize: '2rem',
              color: 'var(--midnight-navy)',
              marginBottom: '0.35rem',
              fontWeight: 700,
            }}
          >
            {personalization.specialSongTitle}
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              marginBottom: '1.6rem',
              fontWeight: 500,
            }}
          >
            {personalization.specialSongSubtitle}
          </p>

          {/* Soft Animated Soundwave Effect (dances while playing) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              height: '36px',
              marginBottom: '1.8rem',
            }}
            aria-label={isPlaying ? 'Music playing animation' : 'Music paused'}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => (
              <span
                key={bar}
                style={{
                  width: '4px',
                  height: isPlaying ? `${Math.sin(bar * 0.75) * 14 + 18}px` : '7px',
                  background: isPlaying
                    ? 'linear-gradient(180deg, var(--deep-ocean-blue), var(--soft-sky-blue))'
                    : 'var(--frost-blue)',
                  borderRadius: '3px',
                  transition: 'height 0.25s ease',
                  animation: isPlaying
                    ? `wave 0.85s ease-in-out infinite alternate ${bar * 0.08}s`
                    : 'none',
                }}
              />
            ))}
          </div>

          {/* YouTube Embedded Player Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', // 16:9 Aspect Ratio
              height: 0,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(36, 91, 131, 0.2)',
              border: '2px solid rgba(145, 213, 245, 0.7)',
              background: '#0a192f',
              marginBottom: '1.6rem',
            }}
          >
            <iframe
              id="youtube-iframe-player"
              src={embedUrl}
              title="Uyirey — Amaran 🎵"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Playback Status & Instructions */}
          {!hasStartedPlaying && (
            <div
              style={{
                background: 'rgba(223, 244, 255, 0.65)',
                border: '1px solid var(--frost-blue)',
                padding: '0.85rem 1.2rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--deep-ocean-blue)',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              <Play size={18} fill="var(--deep-ocean-blue)" />
              <span>Click Play on the video above to begin our song 💙</span>
            </div>
          )}

          {/* 5-Second Timer Countdown & Guidance */}
          {hasStartedPlaying && !isCompleted && (
            <div
              style={{
                background: 'linear-gradient(135deg, #EAF5FC, #DFF4FF)',
                padding: '1.2rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--frost-blue)',
                marginBottom: '1.5rem',
                animation: 'fadeIn 0.3s ease',
              }}
            >
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--deep-ocean-blue)',
                  fontWeight: 600,
                  marginBottom: '0.6rem',
                }}
              >
                Listen for a little moment... this song is special to us. 🥹🎧
              </p>

              {/* Progress bar */}
              <div
                style={{
                  height: '8px',
                  background: 'rgba(145, 213, 245, 0.4)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  maxWidth: '320px',
                  margin: '0 auto 0.6rem auto',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${(secondsListened / 5) * 100}%`,
                    background: 'linear-gradient(90deg, var(--soft-sky-blue), var(--deep-ocean-blue))',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: '0.9rem',
                  color: isPlaying ? 'var(--deep-ocean-blue)' : 'var(--text-light)',
                  fontWeight: 700,
                }}
              >
                {isPlaying
                  ? `Ready in ${timerRemaining}s... 💙 (${secondsListened}/5s listened)`
                  : `Paused at ${secondsListened}s ⏸️ (resume playback on video to continue)`}
              </span>
            </div>
          )}

          {/* Reveal "Ready for Our Memories? 💙" Button after 5 Seconds */}
          {isCompleted && (
            <div style={{ marginTop: '1.4rem', animation: 'scaleUp 0.5s ease' }}>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--deep-ocean-blue)',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                The music is playing for us... now let's walk through our moments. 🥹💙
              </p>
              <button
                className="btn-romantic"
                onClick={scrollToMemories}
                style={{
                  background: 'linear-gradient(135deg, #1E4E70, #245B83)',
                  padding: '1.05rem 3rem',
                  fontSize: '1.2rem',
                  animation: 'pulseHint 2s infinite',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                Ready for Our Memories? 💙 <ArrowDown size={20} />
              </button>
            </div>
          )}

          {/* YouTube External Link Fallback */}
          <div
            style={{
              marginTop: '1.6rem',
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(145, 213, 245, 0.5)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.88rem',
            }}
          >
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--deep-ocean-blue)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'underline',
              }}
            >
              Watch on YouTube 💙 (Official Video) <ExternalLink size={13} />
            </a>

            {!isCompleted && (
              <button
                onClick={handleManualListening}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-light)',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  textDecoration: 'underline',
                }}
                title="If YouTube embedding is restricted on your browser, click to start the timer"
              >
                Listening on YouTube? Click here to continue ⏱️
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
