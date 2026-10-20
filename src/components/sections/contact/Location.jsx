import { motion } from 'framer-motion';
import { PiNavigationArrow } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { CONTACT_IMAGES, DIRECTIONS_URL } from '../../../data/contact';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Location.css';

export default function Location() {
  return (
    <section id="location" className="location">
      <ParallaxImage className="location__image" src={CONTACT_IMAGES.city} alt="Lagos skyline and bridge at sunset" reveal="right" strength={0.5} />
      <div className="location__copy">
        <Eyebrow rule={false}>Our Location</Eyebrow>
        <SplitLines className="display location__title" delay={0.1} lines={['A Global Mindset', 'with Local Insight.']} />
        <Reveal as="p" className="lead location__text" delay={0.25}>
          Based in Lagos, we work with ambitious businesses across Nigeria and beyond, bringing global perspectives and deep local understanding to every engagement.
        </Reveal>
        <Reveal delay={0.35}>
          <PillLink href={DIRECTIONS_URL} variant="outline" icon={PiNavigationArrow} magnet={8}>Get Directions</PillLink>
        </Reveal>
      </div>
      <div className="location__map-wrap">
        <motion.div
          className="location__map"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
        >
          <img src={CONTACT_IMAGES.map} alt="Map showing Lagos, Nigeria" loading="lazy" />
          <span className="location__pin" aria-hidden="true">
            <motion.span
              className="location__pulse"
              animate={{ scale: [1, 1.9], opacity: [0.9, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
