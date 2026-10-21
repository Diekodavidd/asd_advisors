import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { PiArrowRight, PiPlayFill } from 'react-icons/pi';
import SplitLines from '../motion/SplitLines';
import ParallaxImage from '../motion/ParallaxImage';
import Magnetic from '../motion/Magnetic';
import ArcLines from '../motion/ArcLines';
import { HERO_STEPS, IMAGES } from '../../data/content';
import { EASE, fadeOnMount, fadeUpOnMount } from '../../lib/motion';
import './Hero.css';

export default function Hero() {
  const [step, setStep] = useState(0);
  const { scrollY } = useScroll();
  const copyY = useTransform(scrollY, [0, 700], [0, -90]);
  const copyOpacity = useTransform(scrollY, [0, 600], [1, 0.25]);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % HERO_STEPS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="hero">
      <motion.div className="hero__copy" style={{ y: copyY, opacity: copyOpacity }}>
        <motion.span
          className="hero__rule"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
        />
        <SplitLines as="div" className="hero__kicker" onMount delay={0.25} stagger={0.08} lines={['Ideas today,', 'A brighter tomorrow']} />
        <SplitLines
          as="h1"
          className="display hero__title"
          onMount
          delay={0.4}
          lines={[
            'Transforming',
            'Ambition',
            <>Into <span className="accent">Enduring</span></>,
            <span className="accent">Growth.</span>,
          ]}
        />
        <motion.p className="lead hero__lead" {...fadeUpOnMount(0.9)}>
          We partner with ambitious businesses to navigate complexity, unlock opportunities and build a more sustainable future.
        </motion.p>
        <motion.div className="hero__actions" {...fadeUpOnMount(1.05)}>
          <Magnetic strength={12}>
            <a href="#services" className="hero__explore">
              <span className="hero__explore-dot"><PiArrowRight /></span>
              Explore Our Services
            </a>
          </Magnetic>
          <a href="#contact" className="underline-link">Talk to a Consultant <PiArrowRight /></a>
        </motion.div>
        <motion.div className="hero__trust" {...fadeOnMount(1.25)}>
          <div className="hero__avatars" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => <span key={i} className={'avatar avatar--' + i} />)}
          </div>
          <span>Trusted by forward-thinking businesses</span>
        </motion.div>
      </motion.div>

      <div className="hero__visual">
        <ParallaxImage
          className="hero__image"
          src={IMAGES.hero}
          alt="Executive overlooking the city skyline at sunrise"
          reveal="left"
          position="64% center"
          strength={0.6}
          delay={0.2}
          onMount
        >
          <div className="hero__image-shade" />
        </ParallaxImage>

        <aside className="hero__rail">
          <motion.div className="hero__steps" {...fadeUpOnMount(1.1)}>
            <div className="hero__step-num">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={step}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {'0' + (step + 1)}
                </motion.span>
              </AnimatePresence>
            </div>
            {HERO_STEPS.map((s, i) => (
              <motion.div
                key={s}
                className="hero__step"
                animate={{ x: i === step ? 8 : 0, color: i === step ? '#c39a64' : '#e9e4da' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                {s}
              </motion.div>
            ))}
          </motion.div>

          
<motion.div className="hero__play" {...fadeUpOnMount(1.3)}>
  <button
    type="button"
    className="play"
    aria-label="Discover our approach"
    onClick={() => {
      document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }}
  >
    <motion.span
      className="play__pulse"
      animate={{ scale: [1, 1.6], opacity: [0.9, 0] }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />

    <motion.span
      className="play__core"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
    >
      <PiArrowRight />
    </motion.span>
  </button>

  <span>
    Discover<br />
    Our Approach
  </span>
</motion.div>      </aside>

        <ArcLines
          className="hero__arc"
          viewBox="0 0 400 300"
          paths={[{ d: 'M0 300 Q200 40 400 0', stroke: '#c39a64', opacity: 0.7, delay: 1.4 }]}
        />
      </div>

      <motion.div className="hero__scroll" {...fadeOnMount(1.8)}>
        SCROLL
        <span className="hero__scroll-track">
          <motion.span
            className="hero__scroll-dot"
            animate={{ y: [-14, 36] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: [0.6, 0, 0.4, 1] }}
          />
        </span>
      </motion.div>
    </section>
  );
}
