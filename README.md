# 💙 Our Love Story — A Birthday Surprise for My Boyfriend 🩵

A romantic, interactive, mobile-friendly birthday surprise website built with React, Vite, and custom CSS. Designed as a secret digital gift for **December 2, 2026**, with a dreamy ice-blue aesthetic, floating blue butterflies & hearts, live countdown in IST, lake memories, 10 flipping love reasons, sealed love letter, Tamil favourite song player for **"Uyirey 💙" (Amaran)**, interactive 5-question love quiz, and an emotional moonlight climax surprise.

---

## 🎨 Color Palette & Aesthetic
- **Ice Blue:** `#DFF4FF`
- **Frost Blue:** `#BFE7FF`
- **Soft Sky Blue:** `#91D5F5`
- **Deep Ocean Blue:** `#245B83`
- **Midnight Navy:** `#142B45`
- **Pure White:** `#FFFFFF`
- **Icy Lavender Accent:** `#E8EDFF`
- **Frosted Glassmorphism:** Translucent frosted cards with smooth backdrop blur
- **Atmosphere:** Romantic love story with soft glowing blue hearts, butterflies, clouds, moons, and subtle light particles (never looking like winter/Christmas).

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── gift-box.jpg           # Opening screen gift box illustration
│   │   ├── memory-1.jpg           # Polaroid photo 1 (The Day Our Story Began)
│   │   ├── memory-2.jpg           # Polaroid photo 2 (By the Peaceful Lake)
│   │   ├── memory-3.jpg           # Polaroid photo 3 (Under the Midnight Sky)
│   │   ├── memory-4.jpg           # Polaroid photo 4 (Our Little Adventures)
│   │   ├── memory-5.jpg           # Polaroid photo 5 (The Warmest Hugs)
│   │   └── memory-6.jpg           # Polaroid photo 6 (All the Beautiful Days Ahead)
│   └── favicon
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx              # Floating ice-blue heart scroll to top
│   │   ├── BirthdayCelebrationHero.jsx# Anticipation hero (reveals cake on Dec 2)
│   │   ├── BirthdayCountdown.jsx      # Countdown in Asia/Kolkata (IST)
│   │   ├── BirthdayQuiz.jsx           # 5 exact questions with playful reactions & retry
│   │   ├── FinalSurpriseModal.jsx     # Fullscreen midnight climax with blue confetti & butterfly signature
│   │   ├── FloatingElements.jsx       # Ambient floating ice-blue hearts & butterflies
│   │   ├── FutureWishes.jsx           # Midnight sky with twinkling stars & future goals
│   │   ├── LoveLetter.jsx             # Sealed envelope with blue wax seal & unfolding letter
│   │   ├── MemoryGallery.jsx          # "Our Little World, Our Beautiful Memories 💙"
│   │   ├── MusicPlayer.jsx            # "Uyirey 💙" player with streaming link & chime fallback
│   │   ├── Navbar.jsx                 # "Our Love Story 💙" frosted glass header
│   │   ├── SecretGiftOpening.jsx      # Secret opening gift screen
│   │   └── TenReasons.jsx             # 10 3D flipping heart cards
│   ├── data/
│   │   └── personalization.js         # ⭐ ONLY FILE YOU NEED TO EDIT!
│   ├── styles/
│   │   └── index.css                  # Romantic ice-blue CSS design system
│   ├── App.jsx                        # Main state and assembly
│   └── main.jsx                       # Entry point
├── vercel.json                        # Vercel deployment configuration
├── package.json
└── vite.config.js
```

---

## ⚙️ How to Personalize Your Website

Everything is centralized inside **`src/data/personalization.js`**:

### 1. Names & Dates
```javascript
export const personalization = {
  boyfriendName: "My Love",        // 👈 Replace with his name or pet nickname
  girlfriendName: "Your Girl",     // 👈 Replace with your name
  birthday: "2026-12-02",          // 👈 Target birthday (YYYY-MM-DD)
  relationshipStartDate: "2024-04-24", // 👈 Anniversary or date you met
  ...
};
```

### 2. Photos in Gallery
1. Rename 6 of your favorite photos to `memory-1.jpg` through `memory-6.jpg`.
2. Place them into `public/images/`.
3. Update their captions in `src/data/personalization.js`.

### 3. Song Player ("Uyirey 💙")
- By default, the player displays **"Uyirey 💙"** with a gentle chime box and an official **"Listen"** link to the song.
- If you have an MP3 file, place it in `public/music/uyirey.mp3` and set `specialSongUrl: "/music/uyirey.mp3"` in `personalization.js`.

---

## 🌐 Deploying to Vercel (Free & Instant HTTPS)

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update to Our Love Story 💙 with ice blue theme and Uyirey song"
   git push origin main
   ```
2. In your Vercel Dashboard, the deployment will automatically build and update your live URL!
