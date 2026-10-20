import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../../lib/motion';

const lineVariants = {
  hidden: { y: '110%', rotate: 3 },
  show: (delay) => ({ y: '0%', rotate: 0, transition: { duration: 1.2, ease: EASE, delay } }),
};

/**
 * Renders each line inside an overflow mask and lifts it into place.
 * The mask (not the moving line) is observed, so the trigger fires reliably.
 */
export default function SplitLines({ lines, as = 'h2', className = '', delay = 0, stagger = 0.1, onMount = false }) {
  const Tag = as;
  const trigger = onMount ? { animate: 'show' } : { whileInView: 'show', viewport: VIEWPORT };
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span key={i} className="line-mask" initial="hidden" {...trigger}>
          <motion.span className="line-inner" variants={lineVariants} custom={delay + i * stagger}>
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
