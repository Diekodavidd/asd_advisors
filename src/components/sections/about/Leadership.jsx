import { motion } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import Magnetic from '../../motion/Magnetic';
import { ABOUT_IMAGES } from '../../../data/content';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Leadership.css';

export default function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="leadership__copy">
        <Eyebrow rule={false}>Our Leadership</Eyebrow>
        <SplitLines className="display leadership__title" delay={0.1} lines={['Experienced', 'Minds. A Shared', 'Commitment.']} />
        <Reveal as="p" className="lead leadership__lead" delay={0.35}>
          Our leadership team brings together diverse expertise across strategy, operations, finance and growth. United by a shared commitment to client success, we work closely with businesses to navigate challenges and seize new opportunities.
        </Reveal>
        <Reveal delay={0.45} className="leadership__action">
          <Magnetic strength={10}>
            <a href="#leadership" className="pill pill--dark pill--compact">
              Meet Our Team
              <span className="pill__dot"><PiArrowRight /></span>
            </a>
          </Magnetic>
        </Reveal>
      </div>
      <div className="leadership__visual">
        <motion.div
          className="leadership__corner"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <ParallaxImage className="leadership__image" src={ABOUT_IMAGES.leadership} alt="Boardroom overlooking the skyline at sunset" reveal="left" strength={0.45} />
      </div>
    </section>
  );
}
