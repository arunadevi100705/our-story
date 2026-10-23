import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle, Award, RotateCcw, Heart, Sparkles, ArrowRight, MessageSquareHeart } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function BirthdayQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = personalization.quizQuestions;
  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (index) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);

    if (index === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!textAnswer.trim() || showFeedback) return;
    setShowFeedback(true);
    setScore((prev) => prev + 1); // Reward his personal answer
  };

  const handleRetryQuestion = () => {
    if (selectedOption === currentQ.correctAnswer) {
      setScore((prev) => Math.max(0, prev - 1));
    }
    setSelectedOption(null);
    setTextAnswer('');
    setShowFeedback(false);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setTextAnswer('');
    setShowFeedback(false);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      // Trigger romantic ice-blue confetti
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#DFF4FF', '#BFE7FF', '#91D5F5', '#245B83', '#FFFFFF', '#E8EDFF'],
      });
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setTextAnswer('');
    setShowFeedback(false);
    setScore(0);
    setIsCompleted(false);
  };

  const scrollToLetter = () => {
    const el = document.getElementById('heartfelt-letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const progressPercent = ((currentQuestionIndex + (isCompleted ? 1 : 0)) / questions.length) * 100;
  const isMultipleChoice = currentQ?.type === 'multiple-choice';
  const isCorrect = isMultipleChoice && selectedOption === currentQ?.correctAnswer;

  return (
    <section id="quiz" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={16} /> A Fun Little Game
          </div>
          <h2 className="section-title">How Well Do You Know Our Love Story? 💙</h2>
          <p className="section-subtitle">
            Ten little questions from my heart to see how well you remember our journey.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="quiz-card">
          
          {/* Progress Bar */}
          <div className="quiz-progress-bar">
            <div 
              className="quiz-progress-fill" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>

          {!isCompleted ? (
            <div>
              {/* Question counter */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>
                <span>QUESTION {currentQuestionIndex + 1} OF {questions.length}</span>
                <span>Hearts: {score} 💙</span>
              </div>

              {/* Question Text */}
              <h3 className="quiz-question-text">{currentQ.question}</h3>

              {/* Option Rendering: Multiple Choice vs Open-Ended */}
              {isMultipleChoice ? (
                <div className="quiz-options-list">
                  {currentQ.options.map((option, idx) => {
                    let statusClass = '';
                    if (showFeedback) {
                      if (idx === currentQ.correctAnswer) statusClass = 'selected-correct';
                      else if (idx === selectedOption) statusClass = 'selected-wrong';
                    }

                    return (
                      <button
                        key={idx}
                        className={`quiz-option-btn ${statusClass}`}
                        onClick={() => handleSelectOption(idx)}
                        disabled={showFeedback}
                      >
                        <span>{option}</span>
                        {showFeedback && idx === currentQ.correctAnswer && (
                          <CheckCircle size={18} color="#2E7D32" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Open-ended text question (Questions 9 & 10) */
                <form onSubmit={handleTextSubmit} style={{ marginTop: '1rem' }}>
                  <textarea
                    rows={3}
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    placeholder={currentQ.placeholder}
                    disabled={showFeedback}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid var(--frost-blue)',
                      background: '#F9FCFF',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--midnight-navy)',
                      resize: 'none',
                      boxSizing: 'border-box',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--deep-ocean-blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--frost-blue)')}
                  />

                  {!showFeedback && (
                    <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                      <button
                        type="submit"
                        className="btn-romantic"
                        disabled={!textAnswer.trim()}
                        style={{
                          padding: '0.8rem 2.4rem',
                          fontSize: '1rem',
                          opacity: textAnswer.trim() ? 1 : 0.6,
                          cursor: textAnswer.trim() ? 'pointer' : 'not-allowed',
                        }}
                      >
                        Submit Answer 💌
                      </button>
                    </div>
                  )}
                </form>
              )}

              {/* Sweet Feedback Box */}
              {showFeedback && (
                <div className="quiz-feedback-box">
                  <p style={{
                    color: isMultipleChoice && !isCorrect ? 'var(--deep-ocean-blue)' : '#1B5E20',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    marginBottom: '1.2rem',
                    lineHeight: '1.6',
                  }}>
                    {isMultipleChoice
                      ? isCorrect
                        ? currentQ.correctReaction
                        : currentQ.wrongReaction
                      : currentQ.reaction}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {isMultipleChoice && !isCorrect && (
                      <button
                        onClick={handleRetryQuestion}
                        className="btn-romantic-secondary"
                        style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
                      >
                        <RotateCcw size={14} /> Try Again
                      </button>
                    )}

                    <button
                      className="btn-romantic"
                      onClick={handleNextQuestion}
                      style={{ padding: '0.7rem 2rem', fontSize: '0.95rem' }}
                    >
                      {currentQuestionIndex + 1 < questions.length ? (
                        <>Next Question <ArrowRight size={16} /></>
                      ) : (
                        <>See Our Result 🎁</>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Completed Screen */
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'var(--frost-blue)',
                color: 'var(--deep-ocean-blue)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                boxShadow: '0 4px 16px rgba(36, 91, 131, 0.15)',
              }}>
                <Award size={38} />
              </div>

              <h3 style={{ fontSize: '1.95rem', marginBottom: '0.6rem', color: 'var(--midnight-navy)' }}>
                You Know My Heart So Well 💙
              </h3>

              <p style={{ fontSize: '1.2rem', color: 'var(--deep-ocean-blue)', fontWeight: 600, margin: '1rem 0' }}>
                Score: {score} / {questions.length} • Every Answer is a Treasure!
              </p>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 2.2rem auto', lineHeight: '1.7' }}>
                "{personalization.quizCompletionMessage}"
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  className="btn-romantic"
                  onClick={scrollToLetter}
                  style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
                >
                  One Last Letter for You 💌
                </button>

                <button
                  className="btn-romantic-secondary"
                  onClick={restartQuiz}
                  style={{
                    padding: '0.85rem 1.6rem',
                    fontSize: '0.95rem',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={15} /> Play Again 🎀
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
