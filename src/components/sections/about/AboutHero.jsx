import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import ParallaxImage from '../../motion/ParallaxImage';
import Magnetic from '../../motion/Magnetic';
import ArcLines from '../../motion/ArcLines';
import { ABOUT_IMAGES, ABOUT_PILLARS } from '../../../data/content';
import { EASE, fadeUpOnMount } from '../../../lib/motion';
import './AboutHero.css';

export default function AboutHero() {
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const copyY = useTransform(scrollY, [0, 700], [0, -90]);
  const copyOpacity = useTransform(scrollY, [0, 600], [1, 0.25]);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % ABOUT_PILLARS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="ahero">
      <motion.div className="ahero__copy" style={{ y: copyY, opacity: copyOpacity }}>
        <Eyebrow light>About ASD Advisors</Eyebrow>
        <SplitLines
          as="h1"
          className="display ahero__title"
          onMount
          delay={0.35}
          lines={[
            'A Clearer',
            'Perspective',
            <span className="accent">for a Brighter</span>,
            <span className="accent">Tomorrow.</span>,
          ]}
        />
        <motion.p className="lead ahero__lead" {...fadeUpOnMount(0.85)}>
          We are a forward-thinking advisory firm helping businesses navigate complexity, unlock opportunities and create meaningful, long-term value.
        </motion.p>
        <motion.div className="ahero__cta" {...fadeUpOnMount(1)}>
          <Magnetic strength={12}>
            <a href="#story" className="orb-link">
              <span className="orb-link__dot"><PiArrowRight /></span>
              Our Story
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="ahero__visual">
        <ParallaxImage
          className="ahero__image"
          src={ABOUT_IMAGES.hero}
          alt="Executive looking out over the city from a glass office"
          reveal="left"
          position="60% center"
          strength={0.5}
          delay={0.2}
          onMount
        />
        <aside className="ahero__rail">
          <motion.div className="ahero__pillars" {...fadeUpOnMount(1.1)}>
            {ABOUT_PILLARS.map((p, i) => (
              <motion.div
                key={p}
                className="ahero__pillar"
                animate={{ x: i === active ? 6 : 0, color: i === active ? '#c39a64' : '#e9e4da' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                {p}
              </motion.div>
            ))}
            <motion.span
              className="ahero__pillar-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: EASE }}
            />
          </motion.div>
        </aside>
        <ArcLines
          className="ahero__arc"
          viewBox="0 0 400 200"
          paths={[{ d: 'M0 200 Q240 110 400 20', stroke: '#c39a64', opacity: 0.8, width: 1.5, delay: 1.3 }]}
        />
      </div>
    </section>
  );
}
