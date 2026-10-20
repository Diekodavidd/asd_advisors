import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ArcLines from '../../motion/ArcLines';
import { PURPOSE } from '../../../data/content';
import { EASE, VIEWPORT, fadeUpItem, staggerContainer } from '../../../lib/motion';
import './Purpose.css';

export default function Purpose() {
  return (
    <section id="purpose" className="purpose">
      <ArcLines
        className="purpose__arc"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMaxYMid slice"
        paths={[{ d: 'M200 400 Q560 360 800 40', stroke: '#c39a64', opacity: 0.35, duration: 2.6 }]}
      />
      <div className="purpose__head">
        <div className="purpose__intro">
          <Eyebrow light rule={false}>Our Purpose</Eyebrow>
          <SplitLines className="display purpose__title" delay={0.1} lines={['Turning', 'Possibilities', 'Into Real Progress.']} />
        </div>
        <Reveal as="p" className="lead purpose__lead" delay={0.35}>
          We exist to help businesses see what’s next, make smarter decisions and turn ambition into measurable, lasting impact.
        </Reveal>
      </div>

      <motion.div className="purpose__grid" variants={staggerContainer(0.14, 0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
        {PURPOSE.map(({ icon: Icon, title, text }) => (
          <motion.article key={title} className="pcard" variants={fadeUpItem} whileHover={{ y: -6 }} transition={{ duration: 0.5, ease: EASE }}>
            <span className="pcard__icon"><Icon /></span>
            <h3 className="pcard__title">{title}</h3>
            <p className="pcard__text">{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
