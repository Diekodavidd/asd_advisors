import { motion } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import Magnetic from '../../motion/Magnetic';
import { ABOUT_IMAGES, CONTACT } from '../../../data/content';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './AboutCTA.css';

export default function AboutCTA() {
  return (
    <section id="contact" className="acta">
      <div className="acta__copy">
        <Eyebrow rule={false}>Let’s Work Together</Eyebrow>
        <SplitLines className="display acta__title" delay={0.1} lines={['Ready to Turn Your Vision Into Progress?']} />
        <Reveal as="p" className="lead acta__lead" delay={0.25}>
          Speak to our team to discover how we can support your business goals and create a brighter, more sustainable future.
        </Reveal>
        <Reveal delay={0.38} className="acta__action">
          <Magnetic strength={10}>
            <a href={'mailto:' + CONTACT.email} className="pill pill--dark pill--compact">
              Get In Touch
              <span className="pill__dot"><PiArrowRight /></span>
            </a>
          </Magnetic>
        </Reveal>
      </div>

      <ParallaxImage className="acta__image" src={ABOUT_IMAGES.cta} alt="Curved glass architecture at golden hour" reveal="left" strength={0.45} />

      <div className="acta__aside">
        <motion.span
          className="acta__rule"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
        />
        <Reveal dir="fade" delay={0.7} className="acta__motto">
          <span className="acta__plus">+</span>
          <span>IDEAS<br />TODAY<br />A BRIGHTER<br />TOMORROW</span>
        </Reveal>
      </div>
    </section>
  );
}
