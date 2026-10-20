import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { ABOUT_IMAGES } from '../../../data/content';
import './GlobalPerspective.css';

export default function GlobalPerspective() {
  return (
    <section id="global" className="global">
      <div className="global__visual">
        <motion.div
          className="global__drift"
          animate={{ rotate: [-1.5, 1.5], scale: [1.02, 1.06] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        >
          <ParallaxImage src={ABOUT_IMAGES.globe} alt="Earth at night with glowing city lights" reveal="right" strength={0.6} />
        </motion.div>
        <div className="global__fade" />
      </div>
      <div className="global__copy">
        <Eyebrow light rule={false}>A Global Perspective</Eyebrow>
        <SplitLines className="display global__title" delay={0.1} lines={['Local Insight.', 'Global Thinking.']} />
        <Reveal as="p" className="lead global__lead" delay={0.35}>
          We combine deep local understanding with a global outlook to help businesses stay ahead in an interconnected world. Our insights are grounded in real market experience and an awareness of broader economic, technological and industry trends.
        </Reveal>
      </div>
    </section>
  );
}
