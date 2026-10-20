import { motion } from 'framer-motion';

/** Fades whole pages in/out on route change. */
export default function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
