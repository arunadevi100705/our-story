import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { personalization } from '../data/personalization';

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [audioSource, setAudioSource] = useState(personalization.specialSongUrl);
  const [isYoutubePlaying, setIsYoutubePlaying] = useState(false);

  const handleSetYoutubePlaying = (playing) => {
    setIsYoutubePlaying(playing);
    if (playing) {
      if (audioRef.current) audioRef.current.pause();
      stopSynthMelody();
      setIsPlaying(false);
    }
  };

  const audioRef = useRef(null);

  // Web Audio Synth state for ambient romantic chime melody fallback
  const audioCtxRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Romantic pentatonic chime notes (frequencies in Hz)
  const melodyNotes = [
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    587.33, // D5
    523.25, // C5
    440.00, // A4
    392.00, // G4
    329.63, // E4
    392.00, // G4
    523.25, // C5
  ];

  const playChimeNote = (freq) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const targetVol = isMuted ? 0 : volume * 0.16;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(targetVol, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.4);
    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  };

  const startSynthMelody = () => {
    let noteIndex = 0;
    playChimeNote(melodyNotes[0]);
    synthIntervalRef.current = setInterval(() => {
      noteIndex = (noteIndex + 1) % melodyNotes.length;
      playChimeNote(melodyNotes[noteIndex]);
    }, 480);
  };

  const stopSynthMelody = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const playAudio = () => {
    if (audioRef.current && !audioError) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback not ready or file missing, switching to gentle melody fallback:", err);
          setAudioError(true);
          startSynthMelody();
          setIsPlaying(true);
        });
    } else {
      startSynthMelody();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current && !audioError) {
      audioRef.current.pause();
    }
    stopSynthMelody();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const handleAudioError = () => {
    // If primary URL fails, try fallback URL
    if (audioSource !== personalization.fallbackSongUrl) {
      setAudioSource(personalization.fallbackSongUrl);
    } else {
      setAudioError(true);
      if (isPlaying) {
        startSynthMelody();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const cur = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      setProgress((cur / dur) * 100);
    }
  };

  useEffect(() => {
    return () => {
      stopSynthMelody();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isYoutubePlaying,
        setIsYoutubePlaying: handleSetYoutubePlaying,
        volume,
        setVolume,
        isMuted,
        setIsMuted,
        audioError,
        progress,
        playAudio,
        pauseAudio,
        togglePlay,
      }}
    >
      {/* Central Audio Tag */}
      <audio
        ref={audioRef}
        src={audioSource}
        loop
        onTimeUpdate={handleTimeUpdate}
        onError={handleAudioError}
        onEnded={() => setIsPlaying(false)}
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
