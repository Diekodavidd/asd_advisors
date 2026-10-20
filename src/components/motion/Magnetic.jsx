import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING = { stiffness: 220, damping: 16, mass: 0.4 };

/** Wrap any button/link — it gently follows the cursor while hovered. */
export default function Magnetic({ children, strength = 10, className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2);
    y.set(((e.clientY - r.top) / r.height - 0.5) * strength * 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div className={'magnetic ' + className} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </motion.div>
  );
}
