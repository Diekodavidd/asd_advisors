
import { useEffect } from 'react';
import { PiX, PiArrowRight } from 'react-icons/pi';
import './CareerNoticeModal.css';

export default function CareerNoticeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="career-notice"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="career-notice__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-notice-title"
      >
        <button
          type="button"
          className="career-notice__close"
          onClick={onClose}
          aria-label="Close notification"
        >
          <PiX />
        </button>

        <span className="career-notice__eyebrow">
          CAREERS AT ASD
        </span>

        <span className="career-notice__line" />

        <h2 id="career-notice-title">
          Something exciting is <span>on the horizon.</span>
        </h2>

        <p>
          We don't have any open positions at the moment, but we're
          always looking ahead. New opportunities to join the ASD
          team will be announced soon.
        </p>

        <div className="career-notice__footer">
          <span>Stay tuned. Your next opportunity might be closer than you think.</span>
          <button type="button" onClick={onClose}>
            Got it <PiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
