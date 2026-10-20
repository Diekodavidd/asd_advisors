import { motion } from 'framer-motion';
import { EASE, fadeUpOnMount } from '../../../lib/motion';
import './Strategy.css';

/** Gold quote box that sits over the bottom-right of the hero photo. */
export default function StrategyQuote({ children }) {
  return (
    <motion.div className="st-quote" {...fadeUpOnMount(1.4)}>
      <p>{children}</p>
      <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.8, ease: EASE }} />
    </motion.div>
  );
}
