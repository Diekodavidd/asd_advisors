import { motion } from 'framer-motion';
import { EASE, VIEWPORT, fadeUpItem, staggerContainer } from '../../lib/motion';
import './IconColumns.css';

/** Icon + title (+ text) in divided columns. tone: 'dark' (on cream) | 'light' (on navy). */
export default function IconColumns({ items, tone = 'dark', className = '' }) {
  return (
    <motion.div
      className={'icols icols--' + tone + (className ? ' ' + className : '')}
      style={{ '--cols': items.length }}
      variants={staggerContainer(0.11, 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {items.map(({ icon: Icon, title, text }) => (
        <motion.div key={title} className="icols__item" variants={fadeUpItem} whileHover={{ y: -6 }} transition={{ duration: 0.5, ease: EASE }}>
          <span className="icols__icon"><Icon /></span>
          <h3 className="icols__title">{title}</h3>
          {text && <p className="icols__text">{text}</p>}
        </motion.div>
      ))}
    </motion.div>
  );
}
