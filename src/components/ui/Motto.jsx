import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';
import { EASE, VIEWPORT } from '../../lib/motion';
import './Motto.css';

/** The "IDEAS TODAY, A BRIGHTER TOMORROW" side rail used beside CTA images. */
export default function Motto() {
  return (
    <div className="motto">
      <motion.span
        className="motto__rule"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
      />
      <Reveal dir="fade" delay={0.7} className="motto__text">
        <span className="motto__plus">+</span>
        <span>IDEAS<br />TODAY<br />A BRIGHTER<br />TOMORROW</span>
        <motion.span
          className="motto__end"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
        />
      </Reveal>
    </div>
  );
}
