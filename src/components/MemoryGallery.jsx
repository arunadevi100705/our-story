import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';
import { personalization } from '../data/personalization';

export default function MemoryGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Subtle rotations for Polaroid feel
  const rotations = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.5];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev === 0 ? personalization.memories.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev === personalization.memories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="memories" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={16} /> Snapshots of Our Journey
          </div>
          <h2 className="section-title">Our Little World, Our Beautiful Memories 💙</h2>
          <p className="section-subtitle">
            Every moment holds a feeling, a smile, and a quiet memory that I keep close to my heart.
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="polaroid-grid">
          {personalization.memories.map((mem, index) => {
            const rot = rotations[index % rotations.length];
            return (
              <div
                key={mem.id}
                className="polaroid-card"
                style={{ '--rotation': `${rot}deg` }}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${mem.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openLightbox(index);
                }}
              >
                {/* Ice blue washi tape sticker */}
                <div className="polaroid-tape" />

                {/* Photo Frame */}
                <div className="polaroid-image-frame">
                  <img
                    src={mem.image}
                    alt={mem.title}
                    className="polaroid-img"
                    loading="lazy"
                    onError={(e) => {
                      if (mem.fallbackImage && e.currentTarget.src !== mem.fallbackImage) {
                        e.currentTarget.src = mem.fallbackImage;
                      } else {
                        e.currentTarget.src = "/images/memory-1.jpg";
                      }
                    }}
                  />
                </div>

                {/* Caption Details */}
                <div className="polaroid-caption-wrapper">
                  <h3 className="polaroid-title">{mem.title}</h3>
                  <p className="polaroid-caption">{mem.caption}</p>
                  <span className="polaroid-date-badge">{mem.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close photo view"
              >
                <X size={20} />
              </button>

              {/* Prev / Next navigation buttons */}
              <button
                className="lightbox-nav-btn lightbox-prev"
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="lightbox-nav-btn lightbox-next"
                onClick={showNext}
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image in Lightbox */}
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', maxHeight: '60vh' }}>
                <img
                  src={personalization.memories[selectedImageIndex].image}
                  alt={personalization.memories[selectedImageIndex].title}
                  style={{ width: '100%', height: '100%', maxHeight: '60vh', objectFit: 'contain', display: 'block' }}
                  onError={(e) => {
                    const fallback = personalization.memories[selectedImageIndex].fallbackImage;
                    if (fallback && e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
              </div>

              {/* Info under Lightbox Image */}
              <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                <h3 className="script-font" style={{ fontSize: '1.9rem', color: 'var(--deep-ocean-blue)', marginBottom: '0.4rem' }}>
                  {personalization.memories[selectedImageIndex].title}
                </h3>
                <p style={{ color: 'var(--midnight-navy)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  {personalization.memories[selectedImageIndex].caption}
                </p>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {personalization.memories[selectedImageIndex].date}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
