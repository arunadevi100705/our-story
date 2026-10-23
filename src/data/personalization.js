/**
 * ==============================================================================
 * 💙 OUR LOVE STORY — PERSONALIZATION CONFIGURATION FILE
 * ==============================================================================
 * Central configuration for Our Love Story 💙
 * Contains real photos from pics folder, Uyirey song config, 12 reasons,
 * 10 quiz questions (including open-ended), and the heartfelt reconciliation letter.
 * ==============================================================================
 */

import photo1 from '../../pics/WhatsApp Image 2026-10-23 at 4.32.38 PM.jpeg';
import photo2 from '../../pics/WhatsApp Image 2026-10-23 at 4.32.39 PM.jpeg';
import photo3 from '../../pics/WhatsApp Image 2026-10-23 at 4.32.40 PM.jpeg';
import photo4 from '../../pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (1).jpeg';
import photo5 from '../../pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (2).jpeg';
import photo6 from '../../pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (3).jpeg';

export const personalization = {
  // 💙 The couple's names
  boyfriendName: "My Love",
  girlfriendName: "Your Girl",

  // 🎂 Birthday date & timezone
  birthday: "2026-12-02",
  timezone: "Asia/Kolkata", // IST timezone

  // 💑 Relationship start date
  relationshipStartDate: "2024-04-24",

  // 🎵 Special Song: "Uyirey" from Amaran
  specialSongTitle: "Uyirey — Amaran 🎵",
  specialSongSubtitle: "From Amaran (Tamil) • Our Most-Loved Song 💙",
  youtubeVideoId: "OIRWdkPMrh0",
  youtubeWatchUrl: "https://www.youtube.com/watch?v=OIRWdkPMrh0",
  youtubeEmbedUrl: "https://www.youtube.com/embed/OIRWdkPMrh0",
  // Primary audio path fallback
  specialSongUrl: "/music/Amaran - Uyirey.mp3",
  fallbackSongUrl: "/pics/Amaran - Uyirey.mp3",
  officialStreamUrl: "https://www.youtube.com/watch?v=OIRWdkPMrh0",

  // 📸 Our Little World, Our Beautiful Memories (Direct from pics/ folder)
  memories: [
    {
      id: 1,
      image: photo1,
      originalPath: "pics/WhatsApp Image 2026-10-23 at 4.32.38 PM.jpeg",
      publicPath: "/pics/WhatsApp Image 2026-10-23 at 4.32.38 PM.jpeg",
      fallbackImage: "/images/our-photo-1.jpeg",
      title: "The Day Our Story Began 💙",
      date: "A Moment I'll Always Treasure",
      caption: "I remember looking at you and knowing my heart had found its favourite person.",
    },
    {
      id: 2,
      image: photo2,
      originalPath: "pics/WhatsApp Image 2026-10-23 at 4.32.39 PM.jpeg",
      publicPath: "/pics/WhatsApp Image 2026-10-23 at 4.32.39 PM.jpeg",
      fallbackImage: "/images/our-photo-2.jpeg",
      title: "By the Peaceful Lake 🌊🤍",
      date: "Our Beautiful Lake Memories",
      caption: "The calm breeze, the gentle water, and your hand in mine. That lake will forever hold a sacred place in our story.",
    },
    {
      id: 3,
      image: photo3,
      originalPath: "pics/WhatsApp Image 2026-10-23 at 4.32.40 PM.jpeg",
      publicPath: "/pics/WhatsApp Image 2026-10-23 at 4.32.40 PM.jpeg",
      fallbackImage: "/images/our-photo-3.jpeg",
      title: "Late Night Talks & Stolen Glances 🌙",
      date: "Under the Midnight Sky",
      caption: "Talking with you until hours felt like seconds. You always make ordinary moments feel like magic.",
    },
    {
      id: 4,
      image: photo4,
      originalPath: "pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (1).jpeg",
      publicPath: "/pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (1).jpeg",
      fallbackImage: "/images/our-photo-4.jpeg",
      title: "Our Silly & Cute Adventures 🚙",
      date: "Anywhere With You",
      caption: "No matter where we go, with your warm smile beside me, it's always the happiest trip.",
    },
    {
      id: 5,
      image: photo5,
      originalPath: "pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (2).jpeg",
      publicPath: "/pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (2).jpeg",
      fallbackImage: "/images/our-photo-5.jpeg",
      title: "The Warmest Hugs 🫂💙",
      date: "My Safest Place",
      caption: "In your arms, all the noise of the world just fades away. Sometimes a hug from you is everything I need.",
    },
    {
      id: 6,
      image: photo6,
      originalPath: "pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (3).jpeg",
      publicPath: "/pics/WhatsApp Image 2026-10-23 at 4.32.40 PM (3).jpeg",
      fallbackImage: "/images/our-photo-6.jpeg",
      title: "To All Our Endless Chapters ✨",
      date: "Forever & Always",
      caption: "So many more memories waiting for us. I want every single one with you, Maama.",
    },
  ],

  // 💙 12 Reasons Why You're So Special to Me
  loveReasons: [
    {
      id: 1,
      title: "Your Genuine Warmth",
      message: "The genuine warmth and gentle kindness you show inspires me every day. 🥹💙",
      icon: "HeartHandshake",
    },
    {
      id: 2,
      title: "Ordinary Moments Feel Magical",
      message: "Even the simplest errand or quiet minute together turns into my favourite part of the day.",
      icon: "Sparkles",
    },
    {
      id: 3,
      title: "The Way You Make Me Laugh",
      message: "Your goofy jokes and that contagious laugh that never fails to lift my spirits.",
      icon: "Smile",
    },
    {
      id: 4,
      title: "I Can Be Truly Myself",
      message: "With you, I don't ever have to pretend. You embrace every quirk and flaw with open arms.",
      icon: "ShieldCheck",
    },
    {
      id: 5,
      title: "Your Gentle Strength",
      message: "You stay patient, calm, and supportive through every storm, always making me feel safe.",
      icon: "Anchor",
    },
    {
      id: 6,
      title: "The Memories at the Lake",
      message: "The peace we shared by the water is something I hold onto whenever I miss you.",
      icon: "Waves",
    },
    {
      id: 7,
      title: "The Way You Look at Me",
      message: "When your eyes catch mine, I see pure love and sincerity that words could never capture.",
      icon: "Eye",
    },
    {
      id: 8,
      title: "I Believe in All Your Dreams",
      message: "I will always stand in your corner, cheering the loudest for every goal you pursue.",
      icon: "Star",
    },
    {
      id: 9,
      title: "Our Comforting Silences",
      message: "We don't even need words; just sitting beside you brings my soul absolute peace.",
      icon: "Moon",
    },
    {
      id: 10,
      title: "You Are My Favourite Feeling",
      message: "Meeting you is the greatest blessing of my life. Thank you for choosing me every day.",
      icon: "Heart",
    },
    {
      id: 11,
      title: "Simplest Moments",
      message: "Your love makes even the simplest moments feel beautiful. 🫂💙",
      icon: "Sparkles",
    },
    {
      id: 12,
      title: "Choosing You Always",
      message: "No matter what life brings, I want to keep choosing you and growing with you. 🦋🤍",
      icon: "Compass",
    },
  ],

  // 💌 10 Love Story Quiz Questions (8 Multiple Choice + 2 Open-Ended)
  quizQuestions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "Who fell in love first? 🥹💘",
      options: [
        "Definitely you 😘❤️",
        "Me, the very first day we spoke! 🙈",
        "We fell at the exact same second ✨",
      ],
      correctAnswer: 0,
      correctReaction: "Hehe, you fell first and I fell deeper. 💙🥹",
      wrongReaction: "Aww, are you sure about that? Think back to where our feelings first started! 😉💙",
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "What is my absolute favourite thing about you? 🫶🏻✨",
      options: [
        "Your handsome smile that melts my heart 🫠",
        "Your caring, gentle and kind-hearted nature 🥹💙",
        "The funny way you tell stories 😆",
      ],
      correctAnswer: 1,
      correctReaction: "Your beautiful heart is one of the reasons I love you so much. 🫶🏻💙",
      wrongReaction: "I love that so much too, but there's an even deeper quality of yours that stole my soul! 🫶🏻💙",
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is our ideal romantic date? 🌅💙",
      options: [
        "A lake, where we have beautiful memories 🌊🤍",
        "A crowded city cafe with loud music 🏙️",
        "A busy shopping mall all afternoon 🛍️",
      ],
      correctAnswer: 0,
      correctReaction: "That lake will always hold a special place in our story. 🌊🥹💙",
      wrongReaction: "Remember that peaceful spot by the water where time stood still for us? 🌊💙",
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "When I look at you, what do I see? 👀💙",
      options: [
        "A handsome trouble-maker 😉",
        "The love you have for me 🥹❤️",
        "Someone who owes me treats 🍦",
      ],
      correctAnswer: 1,
      correctReaction: "Your love is something I can see and feel without you saying a word. 🫂💙",
      wrongReaction: "Hehe well maybe that too, but look into my heart—what do you see in my eyes? 🥹💙",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is my biggest wish for your birthday this year? 🎂✨",
      options: [
        "That you share all your birthday cake with me 🍰",
        "That all your dreams and wishes come true 🌟🤍",
        "That we go on 100 road trips right away 🚗",
      ],
      correctAnswer: 1,
      correctReaction: "My biggest wish is to see you happy, achieving your dreams, and becoming everything you've wished to be. I'm always cheering for you. 💙🧿",
      wrongReaction: "Haha tempting, but my deepest, truest wish is for your happiness and dreams! 🌟💙",
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "When was our first kiss? 💋🗓️",
      options: [
        "May 24 🌸",
        "June 14 💋💙",
        "July 2 💫",
      ],
      correctAnswer: 1,
      correctReaction: "June 14... a little date that will always mean something special to us. 🥹💋💙",
      wrongReaction: "Aww think back to that sweet, unforgettable summer day! June 14 is forever in my heart. 💋💙",
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is our favourite colour? 💙🎨",
      options: [
        "Blue 🩵💙",
        "Pink & Cream 🌸",
        "Emerald Green 🌿",
      ],
      correctAnswer: 0,
      correctReaction: "Blue, just like our favourite colour and our little world together. 🩵🫶🏻",
      wrongReaction: "Look around this entire website! What colour represents our world? 🩵💙",
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "What nickname do I call you? 🥹🫶🏻",
      options: [
        "Mister Handsome 😎",
        "Maama 💙😘",
        "Babu 🍯",
      ],
      correctAnswer: 1,
      correctReaction: "Maamaaa! 🥹💙 No one else gets this little piece of our story.",
      wrongReaction: "Haha! You know the one special word only my heart calls you... Maama! 🥹💙",
    },
    {
      id: 9,
      type: "open-ended",
      question: "When I called you by your nickname for the first time, what was your reaction? 🥹💭",
      placeholder: "Type what you remember... 💙",
      reaction: "I wonder if you remember that little moment the same way I do. 🥹🫶🏻💙",
    },
    {
      id: 10,
      type: "open-ended",
      question: "What do you love most about me? 🫂❤️",
      placeholder: "Tell me in your own words... 🥹💙",
      reaction: "Your words matter to me more than you know. Thank you for telling me what's in your heart. 🥹💙🫂",
    },
  ],

  // Quiz completion
  quizCompletionMessage: "You know so many little pieces of our story, and there is still so much more waiting for us. Every moment with you becomes another memory I want to keep forever. 💙🥹",

  // 💌 Heartfelt Letter Near the Very End: "A Letter From My Heart to Yours 💙"
  heartfeltLetter: {
    heading: "A Letter From My Heart to Yours 💙",
    teaser: "Some feelings are easier to write than say... 💌🥹",
    salutation: "My Love, 🥹💙",
    paragraphs: [
      "I'm sorry for the things I have done before and for any moment when I may have hurt you. If I have done anything wrong, please forgive me. I never want my mistakes to take away the beautiful things we share. 🫂🤍",
      "I need you by my side through all my ups and downs, through the happy days and the difficult ones too. I want us to understand each other, support each other, and keep growing together. 🦋💙",
      "I always need your warm hugs, not just for a moment, but throughout my life. Sometimes a hug from you feels like the safest place in the world. 🫂🥹🤍",
      "I know we may not always be perfect, but I hope we can keep talking, forgiving, learning, and choosing each other with love and patience. ❤️🩹💙",
      "You mean so much to me, and I want to make many more beautiful memories with you. I hope we can face life's ups and downs together and keep our love gentle, honest, and strong. 🌙🩵",
      "I love you forever, Maama. No matter how many chapters our story has, I hope we keep writing them together. 💋💙🦋",
    ],
    closing: "Forever yours,",
    signature: "Your Girl ❤️",
  },

  // 💙 Final Question After Letter
  finalQuestion: {
    question: "Shall we start from first? 🥹💙",
    yesText: "Yes, let's start again. ❤️🩹💙",
    noText: "No, not yet. 🥺🤍",
    yesResponse: "Then let's turn the page together, learn from the past, and make our next chapter even more beautiful. One step, one hug, and one memory at a time. 🫂💙🦋",
    yesButtonText: "Begin Our Story Again 💌",
    noResponse: "That's okay, my love. Take your time. Whatever comes next, I hope it comes with understanding, honesty, and kindness. 🤍🫂",
  },

  // 🌙 Future Wishes
  futureWishes: [
    {
      id: 1,
      title: "More Peaceful Evenings by the Lake",
      description: "Sitting quietly together by the water as the dusk sky turns to soft blue and silver.",
      icon: "Waves",
    },
    {
      id: 2,
      title: "Chasing Dreams Hand in Hand",
      description: "Supporting you through every milestone, career leap, and passion you pour your heart into.",
      icon: "Star",
    },
    {
      id: 3,
      title: "Long Drives Listening to Our Songs",
      description: "Singing along to our favourite melodies with the cool night air rushing through the windows.",
      icon: "Compass",
    },
    {
      id: 4,
      title: "Building Our Cozy World",
      description: "A warm space filled with your laughter, peaceful quiet, and endless shared comfort.",
      icon: "Home",
    },
    {
      id: 5,
      title: "Growing Deeper in Love Each Day",
      description: "Loving you more today than yesterday, and even more in all the tomorrows to come.",
      icon: "Sparkles",
    },
  ],

  // 🎁 Final Message for modal
  finalMessage: {
    quote: `Out of all the beautiful things life could bring me, I'm so grateful that our paths crossed.

You make ordinary moments special, and the memories we share mean more to me than words can explain.

I hope this new year of your life brings you closer to every dream you've ever had. I hope you always find reasons to smile, strength to keep going, and happiness in all the little things.

And I hope we get to make many more beautiful memories together.

No matter how many birthdays come and go, I'll always be cheering for you.

You will always have a special place in my heart. 💙🫂`,
    declaration: "Our story is my favourite story. 💙",
  },
};
