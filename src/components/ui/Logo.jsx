
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE } from '../../lib/motion';
import logoImage from '../../assets/asd-mark-light.png';
import './Logo.css';

export default function Logo({ animated = false, size = 34 }) {
  return (
    <Link
      to="/"
      className="logo"
      aria-label="ASD Advisors Ltd — home"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      style={{ '--logo-size': `${size}px` }}
    >
      <motion.img
        className="logo__image"
        src={logoImage}
        alt="ASD"
        initial={animated ? { opacity: 0, y: 5 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      />

      <span className="logo__sub">ADVISORS LTD</span>
    </Link>
  );
}
