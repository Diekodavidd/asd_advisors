import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to top on page change, or to #hash targets once they've rendered. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    let tries = 0;
    let timer;
    const go = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
      } else if (tries++ < 40) {
        timer = setTimeout(go, 50);
      }
    };
    go();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
