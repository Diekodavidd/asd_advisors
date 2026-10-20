import { motion } from 'framer-motion';
import ParallaxImage from '../motion/ParallaxImage';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import Eyebrow from '../ui/Eyebrow';
import { APPROACH_LABELS, APPROACH_STEPS, IMAGES } from '../../data/content';
import { EASE } from '../../lib/motion';
import './Approach.css';

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <ParallaxImage className="approach__visual" src={IMAGES.approach} alt="Figure walking through a sunlit curved corridor" reveal="right" position="54% center" strength={0.5}>
        <div className="approach__shade" />
        <div className="approach__labels">
          {APPROACH_LABELS.map((l, i) => (
            <Reveal key={l} dir="left" delay={0.5 + i * 0.1}>{l}</Reveal>
          ))}
        </div>
      </ParallaxImage>

      <div className="approach__copy">
        <Eyebrow rule={false}>Our Approach</Eyebrow>
        <SplitLines className="display approach__title" delay={0.1} lines={['Insight.', 'Strategy.', 'Real Impact.']} />
        <Reveal as="p" className="lead approach__lead" delay={0.35}>
          We combine deep expertise, industry insight and a people-first approach to deliver practical, measurable results.
        </Reveal>
        <div className="approach__steps">
          {APPROACH_STEPS.map((s, i) => (
            <Reveal key={s.n} dir="right" delay={0.4 + i * 0.12}>
              <motion.div className="step" whileHover={{ x: 10 }} transition={{ duration: 0.5, ease: EASE }}>
                <div className="step__num">{s.n}</div>
                <div>
                  <div className="step__title">{s.title}</div>
                  <div className="step__text">{s.text}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
