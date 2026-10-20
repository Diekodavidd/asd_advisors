import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import LabelsOverlay from '../../ui/LabelsOverlay';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { CAREERS_IMAGES, PERKS } from '../../../data/careers';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Careers.css';

export default function Culture() {
  return (
    <section id="culture" className="cr-culture">
      <ParallaxImage className="cr-culture__image" src={CAREERS_IMAGES.culture} alt="Sunlit atrium framing the skyline" reveal="right" position="70% center" strength={0.4}>
        <div className="cr-shade cr-shade--left" />
        <LabelsOverlay words={['Meaningful', 'Work', 'Lasting', 'Impact']} className="cr-culture__labels" />
      </ParallaxImage>
      <div className="cr-culture__copy">
        <Eyebrow rule={false}>Our Culture</Eyebrow>
        <SplitLines className="display cr-title" delay={0.1} lines={['A Place for', 'Ambitious Minds.']} />
        <Reveal as="p" className="lead cr-text" delay={0.3}>
          We foster a culture of excellence, collaboration and continuous learning. At ASD Advisors, you’ll work on meaningful projects, gain real-world exposure and be part of a team that values your ideas and growth.
        </Reveal>
      </div>
      <div className="cr-perks">
        <motion.span className="cr-perks__rule" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VIEWPORT} transition={{ duration: 1.2, delay: 0.2, ease: EASE }} />
        {PERKS.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} dir="right" delay={0.3 + i * 0.11}>
            <motion.div className="cr-perk" whileHover={{ x: 6 }} transition={{ duration: 0.5, ease: EASE }}>
              <Icon className="cr-perk__icon" />
              <div><div className="cr-perk__title">{title}</div><div className="cr-perk__text">{text}</div></div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
