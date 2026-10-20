import { motion } from 'framer-motion';
import { EASE, VIEWPORT, fadeUpItem, staggerContainer } from '../../lib/motion';
import './FeatureList.css';

/** Icon + title + text items in 2 or 4 columns, staggered in on scroll. */
export default function FeatureList({ items, columns = 4, className = '' }) {
  return (
    <motion.div
      className={'features features--' + columns + (className ? ' ' + className : '')}
      variants={staggerContainer(0.12, 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {items.map(({ icon: Icon, title, text }) => (
        <motion.div key={title} className="feature" variants={fadeUpItem} whileHover={{ y: -6 }} transition={{ duration: 0.5, ease: EASE }}>
          <span className="feature__icon"><Icon /></span>
          <h3 className="feature__title">{title}</h3>
          <p className="feature__text">{text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
