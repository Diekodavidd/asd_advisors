import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Eyebrow from './Eyebrow';
import SplitLines from '../motion/SplitLines';
import ParallaxImage from '../motion/ParallaxImage';
import ArcLines from '../motion/ArcLines';
import { EASE, fadeUpOnMount } from '../../lib/motion';
import './PageHero.css';

const DEFAULT_PILLARS = ['Ideas', 'People', 'Capital', 'Opportunity'];

function PillarRail({ pillars }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % pillars.length), 2400);
    return () => clearInterval(t);
  }, [pillars.length]);
  return (
    <motion.div className="phero__pillars" {...fadeUpOnMount(1.1)}>
      {pillars.map((p, i) => (
        <motion.div
          key={p}
          className="phero__pillar"
          animate={{ x: i === active ? 6 : 0, color: i === active ? '#c39a64' : '#e9e4da' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {p}
        </motion.div>
      ))}
      <motion.span
        className="phero__pillar-rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: EASE }}
      />
    </motion.div>
  );
}

/**
 * Shared inner-page hero.
 *  - shape: 'curve' | 'arch' | 'none'
 *  - rail: undefined → cycling pillar words, a node → custom rail (e.g. <SectionRail/>), false → no rail
 *  - top: node above the eyebrow (breadcrumbs); sub: tagline under the title
 *  - overlay: node drawn over the photo; compact: shorter hero (legal pages, articles)
 */
export default function PageHero({
  eyebrow, lines, text, image, alt, position = 'center', shape = 'curve',
  pillars = DEFAULT_PILLARS, rail, top, sub, overlay, compact = false, titleClass = '', children,
}) {
  const { scrollY } = useScroll();
  const copyY = useTransform(scrollY, [0, 700], [0, -90]);
  const copyOpacity = useTransform(scrollY, [0, 600], [1, 0.25]);
  const showRail = rail !== false;

  return (
    <section id="top" className={'phero' + (compact ? ' phero--compact' : '') + (showRail ? '' : ' phero--norail')}>
      <motion.div className="phero__copy" style={{ y: copyY, opacity: copyOpacity }}>
        {top && <motion.div className="phero__top" {...fadeUpOnMount(0.15, 0)}>{top}</motion.div>}
        {eyebrow && <Eyebrow light rule={false}>{eyebrow}</Eyebrow>}
        <SplitLines as="h1" className={'display phero__title ' + titleClass} onMount delay={0.35} lines={lines} />
        {sub && <motion.p className="phero__sub" {...fadeUpOnMount(0.75)}>{sub}</motion.p>}
        {text && <motion.p className="lead phero__lead" {...fadeUpOnMount(0.85)}>{text}</motion.p>}
        {children && <motion.div className="phero__after" {...fadeUpOnMount(1)}>{children}</motion.div>}
      </motion.div>

      <div className="phero__visual">
        <ParallaxImage
          className={'phero__image phero__image--' + shape}
          src={image}
          alt={alt}
          reveal="left"
          position={position}
          strength={0.5}
          delay={0.2}
          onMount
        >
          <div className="phero__shade" />
          {overlay}
        </ParallaxImage>
        {showRail && <aside className="phero__rail">{rail || <PillarRail pillars={pillars} />}</aside>}
        <ArcLines
          className="phero__arc"
          viewBox="0 0 400 200"
          paths={[{ d: 'M0 200 Q240 110 400 20', stroke: '#c39a64', opacity: 0.8, width: 1.5, delay: 1.3 }]}
        />
      </div>
    </section>
  );
}
