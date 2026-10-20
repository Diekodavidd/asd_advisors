import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE } from '../../lib/motion';
import './Logo.css';

export default function Logo({ animated = false, size = 34 }) {
  return (
    <Link to="/" className="logo" aria-label="ASD Advisors Ltd — home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <span className="logo__mark" style={{ fontSize: size }}>
        ASD
        <svg className="logo__swoosh" viewBox="0 0 60 20" aria-hidden="true">
          <motion.path
            d="M2 18 Q20 2 40 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : false}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
          />
        </svg>
      </span>
      <span className="logo__sub">ADVISORS LTD</span>
    </Link>
  );
}
