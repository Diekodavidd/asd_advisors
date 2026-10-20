import { motion } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import Magnetic from '../../motion/Magnetic';
import { ABOUT_IMAGES, STORY_QUOTE } from '../../../data/content';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Story.css';

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="story__copy">
        <Eyebrow rule={false}>Our Story</Eyebrow>
        <SplitLines className="display story__title" delay={0.1} lines={['Built on Insight.', 'Driven by Impact.']} />
        <Reveal as="p" className="lead story__text" delay={0.3}>
          ASD Advisors Ltd was founded on a simple belief — that ambitious businesses deserve clear, practical and forward-looking advice to help them grow, adapt and thrive in a constantly changing world.
        </Reveal>
        <Reveal as="p" className="lead story__text" delay={0.38}>
          We bring together deep expertise, real-world experience and a people-first approach to support business leaders at every stage of their journey.
        </Reveal>
        <Reveal delay={0.46} className="story__action">
          <Magnetic strength={8}>
            <a href="#approach" className="pill pill--outline-dark">
              Our Journey
              <span className="pill__dot"><PiArrowRight /></span>
            </a>
          </Magnetic>
        </Reveal>
      </div>

      <ParallaxImage className="story__image" src={ABOUT_IMAGES.story} alt="Skyscraper beside sweeping curved architecture" reveal="up" strength={0.45} />

      <div className="story__aside">
        <SplitLines as="blockquote" className="story__quote" delay={0.3} stagger={0.08} lines={STORY_QUOTE} />
        <motion.span
          className="story__rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1, delay: 1, ease: EASE }}
        />
      </div>
    </section>
  );
}
