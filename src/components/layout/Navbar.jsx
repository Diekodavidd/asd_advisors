import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { PiArrowRight, PiList, PiX } from 'react-icons/pi';
import Logo from '../ui/Logo';
import NavItem from '../ui/NavItem';
import Magnetic from '../motion/Magnetic';
import { NAV_LINKS } from '../../data/content';
import { EASE } from '../../lib/motion';
import './Navbar.css';

const MENU_CLIP_CLOSED = 'circle(0% at 94% 5%)';
const MENU_CLIP_OPEN = 'circle(150% at 94% 5%)';

export default function Navbar() {
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 400);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className={'nav' + (scrolled ? ' nav--solid' : '')}
        animate={{ y: hidden && !open ? '-110%' : '0%' }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <motion.div
          className="nav__inner"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
        >
          <Logo animated />
          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavItem key={l.label} to={l.to} className="nav__link">{l.label}</NavItem>
            ))}
          </nav>
          <div className="nav__actions">
            <Magnetic strength={8} className="nav__cta">
              <NavItem to="/contact" className="pill pill--light" activeClass="">
                Speak to a Consultant
                <span className="pill__dot pill__dot--sm"><PiArrowRight /></span>
              </NavItem>
            </Magnetic>
            <button
              className="nav__burger"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'list'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'grid' }}
                >
                  {open ? <PiX /> : <PiList />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: MENU_CLIP_CLOSED }}
            animate={{ clipPath: MENU_CLIP_OPEN }}
            exit={{ clipPath: MENU_CLIP_CLOSED, transition: { duration: 0.6, ease: EASE, delay: 0.15 } }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <nav className="menu__links" aria-label="Menu">
              {NAV_LINKS.map((l, i) => (
                <span className="line-mask" key={l.label}>
                  <motion.span
                    className="menu__item"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%', transition: { duration: 0.9, delay: 0.25 + i * 0.07, ease: EASE } }}
                    exit={{ y: '110%', transition: { duration: 0.4, ease: EASE } }}
                  >
                    <NavItem to={l.to} className="menu__link" onClick={() => setOpen(false)}>
                      <span className="menu__num">{'0' + (i + 1)}</span>
                      {l.label}
                    </NavItem>
                  </motion.span>
                </span>
              ))}
            </nav>
            <motion.div
              className="menu__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
              exit={{ opacity: 0 }}
            >
              IDEAS TODAY, A BRIGHTER TOMORROW
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
