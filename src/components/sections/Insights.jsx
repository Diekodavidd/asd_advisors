import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../ui/Eyebrow';
import InsightCard from '../ui/InsightCard';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import { INSIGHTS } from '../../data/content';
import './Insights.css';

const GAP = 16;

export default function Insights() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + GAP : 300;
    const max = t.scrollWidth - t.clientWidth;
    if (dir > 0 && t.scrollLeft >= max - 4) t.scrollTo({ left: 0 });
    else if (dir < 0 && t.scrollLeft <= 4) t.scrollTo({ left: max });
    else t.scrollBy({ left: dir * step });
  };

  return (
    <section id="insights" className="insights">
      <div className="insights__intro">
        <Eyebrow rule={false}>Insights</Eyebrow>
        <SplitLines className="display insights__title" delay={0.1} lines={['Ideas.', 'Perspectives.', 'Opportunities.']} />
        <Reveal as="p" className="lead insights__lead" delay={0.35}>
          Explore practical insights, industry trends and expert perspectives to help you make informed decisions.
        </Reveal>
        <Reveal delay={0.45}>
          <Link to="/insights" className="circle-link">
            <span className="circle-link__label">View Insights</span>
            <span className="circle-link__icon"><PiArrowRight /></span>
          </Link>
        </Reveal>
      </div>

      <div className="insights__rail">
        <Reveal dir="fade" delay={0.3} className="insights__controls">
          <motion.button className="round-btn" onClick={() => scroll(-1)} aria-label="Previous insight" whileTap={{ scale: 0.9 }}>
            <PiArrowLeft />
          </motion.button>
          <motion.button className="round-btn round-btn--gold" onClick={() => scroll(1)} aria-label="Next insight" whileTap={{ scale: 0.9 }}>
            <PiArrowRight />
          </motion.button>
        </Reveal>
        <div className="insights__track" ref={trackRef}>
          {INSIGHTS.map((c, i) => <InsightCard key={c.title} {...c} delay={0.2 + i * 0.13} />)}
        </div>
      </div>
    </section>
  );
}
