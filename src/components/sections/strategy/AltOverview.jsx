import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { ALT_BADGES, STRATEGY_ALT_IMAGES } from '../../../data/strategy';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Strategy.css';

export default function AltOverview() {
  return (
    <section id="overview" className="sa-overview">
      <div className="st-stack sa-overview__copy">
        <Eyebrow rule={false}>Service Overview</Eyebrow>
        <SplitLines className="display st-title" delay={0.1} lines={['A Strategic Partner', 'for Sustainable Growth.']} />
        <Reveal as="p" className="lead st-text" delay={0.3}>
          Our business growth strategy service is designed to help organisations unlock new opportunities, optimize their operations and build a clear, actionable roadmap for long-term success.
        </Reveal>
        <div className="sa-badges">
          {ALT_BADGES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} className="sa-badge" delay={0.4 + i * 0.11}>
              <span className="icols__icon"><Icon /></span><span>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <ParallaxImage className="sa-overview__image" src={STRATEGY_ALT_IMAGES.overview} alt="Glass tower beside the skyline at sunset" reveal="up" />
      <Reveal dir="right" delay={0.3} className="sa-quote">
        <SplitLines as="blockquote" className="sa-quote__text" delay={0.4} stagger={0.09} lines={['“We don’t just', 'advise on growth,', 'we help you', 'build it.”']} />
        <motion.span className="sa-quote__rule" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEWPORT} transition={{ duration: 0.8, delay: 0.9, ease: EASE }} />
        <div className="sa-quote__pillars">Ideas<br />People<br />Capital<br />Opportunity</div>
      </Reveal>
    </section>
  );
}
