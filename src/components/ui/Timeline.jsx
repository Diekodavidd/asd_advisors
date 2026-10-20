import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';
import { EASE, VIEWPORT } from '../../lib/motion';
import './Timeline.css';

/** Four-step process: the rule draws itself, dots pop in, steps rise one after another. */
export default function Timeline({ steps }) {
  return (
    <div className="timeline">
      <motion.span
        className="timeline__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.8, delay: 0.2, ease: EASE }}
      />
      {steps.map((s, i) => (
        <Reveal key={s.n} className="timeline__step" delay={0.3 + i * 0.16}>
          <motion.span
            className="timeline__dot"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.25 + i * 0.16, type: 'spring', stiffness: 300, damping: 18 }}
          >
            <span />
          </motion.span>
          <div className="timeline__n">{s.n}</div>
          <h3 className="timeline__t">{s.title}</h3>
          <p className="timeline__d">{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
