import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import './TeachingMethodologyPage.css';

export function TeachingMethodologyPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && openImage) {
      setOpenImage(null);
    }
  }, [openImage]);

  useEffect(() => {
    if (openImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openImage, handleKeyDown]);

  return (
    <div className="teaching-methodology-page">
      <header className="teaching-methodology-page__hero">
        <div className="teaching-methodology-page__hero-bg" aria-hidden="true">
          <div className="teaching-methodology-page__gradient-orb" />
        </div>
        <div className="container">
          <div className="teaching-methodology-page__hero-content">
            <h1 className="teaching-methodology-page__main-title">Teaching Methodology</h1>
            <p className="teaching-methodology-page__subtitle">
              A glimpse into our classroom environment and teaching approach
            </p>
          </div>
        </div>
      </header>

      <main className="teaching-methodology-page__main">
        <div className="container">
          <div className="teaching-methodology-page__images">
            <div className="teaching-methodology-page__image-wrapper teaching-methodology-page__image-wrapper--primary">
              <button
                className="teaching-methodology-page__image-btn"
                onClick={() => setOpenImage('/images/htp.png')}
                aria-label="View Classroom Teaching Session full size"
              >
                <img
                  src="/images/htp.png"
                  alt="Classroom Teaching Session"
                  className="teaching-methodology-page__image"
                />
              </button>
            </div>
            <div className="teaching-methodology-page__image-wrapper teaching-methodology-page__image-wrapper--secondary">
              <button
                className="teaching-methodology-page__image-btn"
                onClick={() => setOpenImage('/images/hty.png')}
                aria-label="View Interactive Learning Environment full size"
              >
                <img
                  src="/images/hty.png"
                  alt="Interactive Learning Environment"
                  className="teaching-methodology-page__image"
                />
              </button>
            </div>
          </div>
        </div>
      </main>

      {openImage && (
        <div
          className="teaching-methodology-page__lightbox"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full size image view"
        >
          <button
            className="teaching-methodology-page__lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setOpenImage(null);
            }}
            aria-label="Close full size image"
          >
            <X size={28} strokeWidth={2.5} />
          </button>
          <img
            src={openImage}
            alt={openImage === '/images/htp.png' ? 'Classroom Teaching Session' : 'Interactive Learning Environment'}
            className="teaching-methodology-page__lightbox-img"
          />
        </div>
      )}
    </div>
  );
}