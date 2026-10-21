import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SiteLoader.css';

const LOADER_BACKGROUND =
  'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792538815/hero_s5r7jr.png';

function collectPageImages() {
  return Array.from(document.images)
    .map((img) => img.currentSrc || img.src)
    .filter(Boolean);
}

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let finished = false;
    let loaded = 0;
    const imageObjects = [];
    const start = performance.now();
    const images = [...new Set([LOADER_BACKGROUND, ...collectPageImages()])];

    const finish = () => {
      if (cancelled || finished) return;
      finished = true;
      setProgress(100);
      const remaining = Math.max(0, 900 - (performance.now() - start));
      window.setTimeout(() => {
        if (!cancelled) setVisible(false);
      }, remaining);
    };

    if (!images.length) {
      finish();
      return () => { cancelled = true; };
    }

    const completeOne = () => {
      if (cancelled || finished) return;
      loaded += 1;
      setProgress(Math.min(100, Math.round((loaded / images.length) * 100)));
      if (loaded >= images.length) finish();
    };

    images.forEach((src) => {
      const image = new Image();
      let counted = false;
      const completeOnce = () => {
        if (counted) return;
        counted = true;
        completeOne();
      };
      image.onload = completeOnce;
      image.onerror = completeOnce;
      image.src = src;
      imageObjects.push(image);
      if (image.complete) completeOnce();
    });

    return () => {
      cancelled = true;
      imageObjects.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader"
          role="status"
          aria-label={`Loading website images: ${progress}%`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="site-loader__background" aria-hidden="true" />
          <div className="site-loader__shade" aria-hidden="true" />
          <svg className="site-loader__sweep" viewBox="0 0 1536 1024" preserveAspectRatio="none" aria-hidden="true">
            <path d="M-30 908 C 250 1000, 555 976, 780 866 S 1250 575, 1570 405" />
          </svg>

          <motion.div
            className="site-loader__content"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="site-loader__brand">
              <div className="site-loader__mark" aria-label="ASD">
                <span>ASD</span>
                <svg viewBox="0 0 150 52" aria-hidden="true">
                  <motion.path
                    d="M4 48 Q52 -4 139 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  />
                </svg>
              </div>
              <span className="site-loader__sub">ADVISORS LTD</span>
            </div>

            <div className="site-loader__divider" />

            <div className="site-loader__progress">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle className="site-loader__track" cx="50" cy="50" r="43" fill="none" strokeWidth="1.5" />
                <motion.circle
                  className="site-loader__ring"
                  cx="50"
                  cy="50"
                  r="43"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </svg>
              <span className="site-loader__percentage">{progress}%</span>
              <span className="site-loader__spark" aria-hidden="true" />
            </div>

            <p className="site-loader__label">LOADING EXPERIENCE</p>
            <div className="site-loader__short-line" />
            <p className="site-loader__tagline">Ideas Into Enduring Growth.</p>
          </motion.div>

          <span className="site-loader__footer">ASD ADVISORS LTD · ESTABLISHING PERSPECTIVE</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
