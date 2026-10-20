import { motion } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import ParallaxImage from '../motion/ParallaxImage';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import Magnetic from '../motion/Magnetic';
import Eyebrow from '../ui/Eyebrow';
import { CTA_LABELS, IMAGES } from '../../data/content';
import { EASE, VIEWPORT } from '../../lib/motion';
import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__visual">
        <ParallaxImage src={IMAGES.cta} alt="Geometric stone architecture against a golden sky" reveal="right" strength={0.5}>
          <div className="cta__shade" />
          <div className="cta__labels">
            {CTA_LABELS.map((l, i) => <Reveal key={l} dir="left" delay={0.5 + i * 0.1}>{l}</Reveal>)}
          </div>
        </ParallaxImage>
      </div>

      <div className="cta__body">
        <div className="cta__copy">
          <Eyebrow rule={false}>Let’s Work Together</Eyebrow>
          <SplitLines className="display cta__title" delay={0.1} lines={['Ready to Turn', 'Your Vision Into Progress?']} />
          <Reveal as="p" className="lead cta__lead" delay={0.3}>
            Speak to our team to discover how we can support your business goals and create a brighter tomorrow.
          </Reveal>
          <Reveal delay={0.42} className="cta__action">
            <Magnetic strength={10}>
              <a href="mailto:hello@asdadvisors.co.uk" className="pill pill--dark">
                Get in Touch
                <span className="pill__dot pill__dot--lg"><PiArrowRight /></span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
        <div className="cta__aside">
          <motion.span
            className="cta__rule"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.8, delay: 0.2, ease: EASE }}
          />
          <Reveal dir="fade" delay={0.7} className="cta__motto">
            <span className="cta__phi">Φ</span>
            <span>IDEAS<br />TODAY<br />A BRIGHTER<br />TOMORROW</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
