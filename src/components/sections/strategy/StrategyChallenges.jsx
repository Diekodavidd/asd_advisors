import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import LabelsOverlay from '../../ui/LabelsOverlay';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { CHALLENGES, STRATEGY_IMAGES } from '../../../data/strategy';
import { EASE } from '../../../lib/motion';
import './Strategy.css';

export default function StrategyChallenges() {
  return (
    <section id="challenges" className="st-challenges">
      <ParallaxImage className="st-challenges__image" src={STRATEGY_IMAGES.challenges} alt="Curved architecture framing the skyline" reveal="right" position="65% center" strength={0.45}>
        <div className="cr-shade cr-shade--left" />
        <LabelsOverlay words={['People', 'Ideas', 'Capital', 'Opportunity']} className="st-challenges__labels" />
      </ParallaxImage>
      <div className="st-challenges__body">
        <div className="st-stack">
          <Eyebrow light rule={false}>Key Business Challenges</Eyebrow>
          <SplitLines className="display st-title st-title--sm" delay={0.1} lines={['Overcoming Barriers', 'to Growth.']} />
          <Reveal as="p" className="lead st-text st-text--light" delay={0.3}>
            Many businesses struggle to identify the right opportunities, navigate market changes or allocate resources effectively. We help you overcome these challenges with clear insights and practical solutions.
          </Reveal>
        </div>
        <ul className="st-chips">
          {CHALLENGES.map(({ icon: Icon, title }, i) => (
            <Reveal as="li" key={title} dir="right" delay={0.3 + i * 0.09}>
              <motion.span className="st-chip" whileHover={{ x: 6 }} transition={{ duration: 0.5, ease: EASE }}>
                <span className="st-chip__icon"><Icon /></span>{title}
              </motion.span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
