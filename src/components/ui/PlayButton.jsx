import { motion } from 'framer-motion';
import { PiPlayFill } from 'react-icons/pi';

export default function PlayButton({ label = 'Watch Overview', sub = '(2 mins)', onClick }) {
  return (
    <div className="play-btn">
      <motion.button type="button" className="play-btn__circle" aria-label={label} onClick={onClick} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}>
        <motion.span
          className="play-btn__pulse"
          animate={{ scale: [1, 1.8], opacity: [0.9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
        <PiPlayFill />
      </motion.button>
      <span>{label}<br /><span className="play-btn__sub">{sub}</span></span>
    </div>
  );
}
