import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { EASE } from '../../lib/motion';

const CLIPS = {
  left: ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)'],
  right: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
  up: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
  down: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
};

/**
 * Image that wipes in (clip-path), settles from a slight zoom,
 * then drifts with scroll for a parallax effect.
 */
export default function ParallaxImage({
  src, alt, reveal = 'left', strength = 0.5, position = 'center',
  delay = 0, onMount = false, className = '', children,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const show = onMount || inView;
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const range = reduce ? 0 : 70 * strength;
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  const [from, to] = CLIPS[reveal];

  return (
    <div ref={ref} className={'pimg ' + className}>
      <motion.div
        className="pimg__clip"
        initial={{ clipPath: from }}
        animate={{ clipPath: show ? to : from }}
        transition={{ duration: 1.6, delay, ease: EASE }}
      >
        <motion.div className="pimg__move" style={{ y }}>
          <motion.img
            className="pimg__img"
            src={src}
            alt={alt}
            style={{ objectPosition: position }}
            initial={{ scale: 1.22 }}
            animate={{ scale: show ? 1 : 1.22 }}
            transition={{ duration: 2.4, delay, ease: EASE }}
          />
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
}
