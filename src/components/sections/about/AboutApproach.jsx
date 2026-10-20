import { motion } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import Magnetic from '../../motion/Magnetic';
import { ABOUT_IMAGES, APPROACH_STEPS } from '../../../data/content';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './AboutApproach.css';

export default function AboutApproach() {
  return (
    <section id="approach" className="aapproach">
      <ParallaxImage className="aapproach__image" src={ABOUT_IMAGES.approach} alt="Executive climbing a spiral staircase" reveal="right" position="40% center" strength={0.5} />

      <div className="aapproach__copy">
        <Eyebrow rule={false}>Our Approach</Eyebrow>
        <SplitLines className="display aapproach__title" delay={0.1} lines={['Insight-Led.', 'People-Focused.', 'Results-Driven.']} />
        <Reveal as="p" className="lead aapproach__lead" delay={0.35}>
          We combine strategic thinking, industry knowledge and hands-on experience to deliver solutions tailored to each client’s unique goals. Our approach is collaborative, practical and built around measurable outcomes — not just ideas.
        </Reveal>
        <Reveal delay={0.45} className="aapproach__action">
          <Magnetic strength={10}>
            <a href="#approach" className="pill pill--dark pill--compact">
              How We Work
              <span className="pill__dot"><PiArrowRight /></span>
            </a>
          </Magnetic>
        </Reveal>
      </div>

      <div className="aapproach__steps">
        <motion.span
          className="aapproach__rule"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
        />
        <div className="aapproach__list">
          {APPROACH_STEPS.map((s, i) => (
            <Reveal key={s.n} dir="right" delay={0.3 + i * 0.12}>
              <motion.div className="astep" whileHover={{ x: 8 }} transition={{ duration: 0.5, ease: EASE }}>
                <div className="astep__num">{s.n}</div>
                <div>
                  <div className="astep__title">{s.title}</div>
                  <div className="astep__text">{s.text}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
