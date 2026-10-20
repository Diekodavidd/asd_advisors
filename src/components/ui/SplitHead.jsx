import { motion } from 'framer-motion';
import Eyebrow from './Eyebrow';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import { EASE, VIEWPORT } from '../../lib/motion';
import './SplitHead.css';

/** Section header: eyebrow + headline on the left, a growing rule, paragraph on the right. */
export default function SplitHead({ eyebrow, lines, text, light = false, className = '' }) {
  return (
    <div className={'split-head' + (light ? ' split-head--light' : '') + (className ? ' ' + className : '')}>
      <div className="split-head__intro">
        <Eyebrow light={light} rule={false}>{eyebrow}</Eyebrow>
        <SplitLines className="display split-head__title" delay={0.1} lines={lines} />
      </div>
      <motion.span
        className="split-head__rule"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
      />
      <Reveal as="p" className="lead split-head__text" delay={0.4}>{text}</Reveal>
    </div>
  );
}
