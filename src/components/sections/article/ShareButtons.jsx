import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiCheck, PiFacebookLogoFill, PiLink, PiLinkedinLogoFill, PiXLogoFill } from 'react-icons/pi';
import './Article.css';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(window.location.href); } catch (e) { /* ignore */ }
    setCopied(true);
  };

  const links = [
    { icon: PiLinkedinLogoFill, label: 'Share on LinkedIn', href: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url },
    { icon: PiXLogoFill, label: 'Share on X', href: 'https://twitter.com/intent/tweet?url=' + url },
    { icon: PiFacebookLogoFill, label: 'Share on Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=' + url },
  ];

  return (
    <div className="share">
      <div className="toc__title">Share this article</div>
      <div className="share__row">
        {links.map(({ icon: Icon, label, href }) => (
          <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="share__btn" whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }}>
            <Icon />
          </motion.a>
        ))}
        <motion.button type="button" aria-label="Copy link" className="share__btn" onClick={copy} whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={copied ? 'ok' : 'link'} style={{ display: 'grid' }} initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}>
              {copied ? <PiCheck /> : <PiLink />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
      <AnimatePresence>
        {copied && (
          <motion.div className="share__msg" role="status" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            Link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
