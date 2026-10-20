import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ArcLines from '../../motion/ArcLines';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Strategy.css';

export default function StrategyTalk() {
  return (
    <section id="talk" className="st-talk">
      <ArcLines
        className="st-talk__arcs"
        viewBox="0 0 400 200"
        paths={[
          { d: 'M60 200 Q260 120 400 10', stroke: '#c39a64', opacity: 0.25, width: 18, duration: 2.4 },
          { d: 'M140 200 Q300 140 400 60', stroke: '#c39a64', opacity: 0.6, duration: 2.4, delay: 0.3 },
        ]}
      />
      <div className="st-stack">
        <Eyebrow light rule={false}>Let’s Talk</Eyebrow>
        <SplitLines className="display st-title st-title--sm" delay={0.1} lines={['Ready to Build a Stronger,', 'More Sustainable Future?']} />
      </div>
      <motion.span className="st-vrule st-vrule--light" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VIEWPORT} transition={{ duration: 1.2, delay: 0.3, ease: EASE }} />
      <div className="st-stack">
        <Reveal as="p" className="lead st-text st-text--light st-text--sm" delay={0.3}>
          Speak to our team to discuss your growth ambitions and discover how our Business Growth Strategy service can help you achieve measurable results.
        </Reveal>
        <Reveal delay={0.4}><PillLink to="/contact" variant="gold">Speak to a Consultant</PillLink></Reveal>
      </div>
    </section>
  );
}
