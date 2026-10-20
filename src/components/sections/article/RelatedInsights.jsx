import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Reveal from '../../motion/Reveal';
import { RELATED_INSIGHTS } from '../../../data/article';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Article.css';

export default function RelatedInsights() {
  return (
    <section className="arel">
      <Reveal dir="fade" className="arel__head">
        <span className="arel__label">Related Insights</span>
        <motion.span className="arel__rule" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEWPORT} transition={{ duration: 1.4, delay: 0.2, ease: EASE }} />
        <Link to="/insights" className="text-link arel__all">View all insights <PiArrowRight /></Link>
      </Reveal>
      <div className="arel__grid">
        {RELATED_INSIGHTS.map((r, i) => (
          <Reveal key={r.title} delay={0.15 + i * 0.12}>
            <Link to="/insights" className="arel__card">
              <div className="arel__media"><img src={r.img} alt="" loading="lazy" /></div>
              <div className="arel__cat">{r.category}</div>
              <div className="arel__row">
                <h3 className="arel__title">{r.title}</h3>
                <span className="rcard__arrow"><PiArrowRight /></span>
              </div>
              <div className="arel__meta">{r.date}  |  {r.readTime}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
