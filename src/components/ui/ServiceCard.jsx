import { motion } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import { EASE, fadeUpItem } from '../../lib/motion';
import './ServiceCard.css';

export default function ServiceCard({ icon: Icon, title, href }) {
  return (
    <motion.a
      href={href}
      className="service-card"
      variants={fadeUpItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <span className="service-card__line" />
      <motion.span className="service-card__icon" whileHover={{ rotate: -8, scale: 1.08 }}>
        <Icon />
      </motion.span>
      <span className="service-card__title">{title}</span>
      <span className="service-card__arrow"><PiArrowRight /></span>
    </motion.a>
  );
}
