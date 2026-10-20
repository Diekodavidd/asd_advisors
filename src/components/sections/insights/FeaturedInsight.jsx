import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import OrbLink from '../../ui/OrbLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { FEATURED_ARTICLE, INSIGHTS_IMAGES } from '../../../data/insights';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './FeaturedInsight.css';

export default function FeaturedInsight() {
  return (
    <section id="featured" className="featured">
      <div className="featured__copy">
        <Eyebrow light rule={false}>Featured Insight</Eyebrow>
        <SplitLines className="display featured__title" delay={0.1} lines={['Turning', 'Uncertainty Into', 'Opportunity.']} />
        <Reveal as="p" className="lead featured__lead" delay={0.35}>
          In a rapidly changing business environment, resilience and adaptability are more important than ever. Explore how forward-thinking businesses can navigate uncertainty and position themselves for long-term success.
        </Reveal>
        <Reveal delay={0.45}><OrbLink to="/insights/unlocking-sustainable-growth">Read the Full Insight</OrbLink></Reveal>
      </div>
      <div className="featured__card">
        <ParallaxImage className="featured__image" src={INSIGHTS_IMAGES.featured} alt="Skyline through a glass corridor at sunset" reveal="left" strength={0.4} />
        <Reveal dir="right" delay={0.4} className="featured__panel">
          <span className="featured__cat">{FEATURED_ARTICLE.category}</span>
          <h3 className="featured__card-title">{FEATURED_ARTICLE.title}</h3>
          <p className="featured__card-text">{FEATURED_ARTICLE.excerpt}</p>
          <motion.span
            className="featured__rule"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          />
        </Reveal>
      </div>
    </section>
  );
}
