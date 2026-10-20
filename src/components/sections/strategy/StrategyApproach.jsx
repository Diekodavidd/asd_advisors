import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import Timeline from '../../ui/Timeline';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import { PROCESS } from '../../../data/strategy';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Strategy.css';

export default function StrategyApproach() {
  return (
    <section id="approach" className="st-approach">
      <div className="st-stack">
        <Eyebrow rule={false}>Our Approach</Eyebrow>
        <SplitLines className="display st-title st-title--sm" delay={0.1} lines={['A Proven Process', 'for Real Results.']} />
        <Reveal as="p" className="lead st-text" delay={0.3}>
          We take a structured and collaborative approach to ensure our strategies are practical, data-driven and aligned with your business goals.
        </Reveal>
        <Reveal delay={0.4}><Link to="/about#approach" className="text-link">Learn More About Our Approach <PiArrowRight /></Link></Reveal>
      </div>
      <motion.span className="st-vrule" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VIEWPORT} transition={{ duration: 1.2, delay: 0.3, ease: EASE }} />
      <Timeline steps={PROCESS} />
    </section>
  );
}
