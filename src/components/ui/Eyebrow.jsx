import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';
import { EASE, VIEWPORT } from '../../lib/motion';

export default function Eyebrow({ children, light = false, rule = true }) {
  return (
    <Reveal dir="fade" className={'eyebrow' + (light ? ' eyebrow--light' : '')}>
      {children}
      {rule && (
        <motion.span
          className="eyebrow__rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
        />
      )}
    </Reveal>
  );
}
