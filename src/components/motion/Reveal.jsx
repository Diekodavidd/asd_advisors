import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../../lib/motion';

const OFFSETS = {
  up: { y: 44 },
  down: { y: -24 },
  left: { x: -36 },
  right: { x: 48 },
  fade: {},
};

export default function Reveal({ as = 'div', dir = 'up', delay = 0, duration = 1.1, children, ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, ...OFFSETS[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
