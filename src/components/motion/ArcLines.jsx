import { motion } from 'framer-motion';
import { EASE } from '../../lib/motion';

/** Decorative SVG paths that draw themselves when they enter the viewport. */
export default function ArcLines({ paths, viewBox, className = '', preserveAspectRatio = 'none', delay = 0 }) {
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} aria-hidden="true">
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill="none"
          stroke={p.stroke}
          strokeOpacity={p.opacity ?? 1}
          strokeWidth={p.width ?? 1}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: p.duration ?? 2.2, delay: delay + (p.delay ?? 0), ease: EASE }}
        />
      ))}
    </svg>
  );
}
