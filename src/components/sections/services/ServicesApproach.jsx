import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { SERVICES_IMAGES, SERVICES_QUOTE } from '../../../data/services';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './ServicesApproach.css';

export default function ServicesApproach() {
  return (
    <section id="approach" className="svc-approach">
      <div className="svc-approach__copy">
        <Eyebrow rule={false}>Our Approach</Eyebrow>
        <SplitLines className="display svc-approach__title" delay={0.1} lines={['Strategic Advice.', 'Measurable Impact.']} />
        <Reveal as="p" className="lead svc-approach__text" delay={0.3}>
          We work closely with business leaders to understand their unique challenges and deliver solutions that drive sustainable growth, operational excellence and long-term value.
        </Reveal>
        <Reveal delay={0.42}>
          <PillLink to="/about#approach" variant="outline" magnet={8}>Our Approach</PillLink>
        </Reveal>
      </div>
      <ParallaxImage className="svc-approach__image" src={SERVICES_IMAGES.approach} alt="Skyscraper beside sweeping curved architecture" reveal="up" strength={0.45} />
      <div className="svc-approach__aside">
        <SplitLines as="blockquote" className="svc-approach__quote" delay={0.3} stagger={0.07} lines={SERVICES_QUOTE} />
        <motion.span
          className="svc-approach__rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1, delay: 1, ease: EASE }}
        />
      </div>
    </section>
  );
}
