import { motion } from 'framer-motion';
import { HERO_BADGES } from '../../../data/contact';
import './HeroBadges.css';

export default function HeroBadges() {
  return (
    <div className="badges">
      {HERO_BADGES.map(({ icon: Icon, label }, i) => (
        <div key={label} className="badge">
          <motion.span
            className="badge__icon"
            animate={{ y: [0, -6] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          >
            <Icon />
          </motion.span>
          <span className="badge__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
