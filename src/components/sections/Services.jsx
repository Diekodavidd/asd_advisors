import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../ui/Eyebrow';
import ServiceCard from '../ui/ServiceCard';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import Magnetic from '../motion/Magnetic';
import ArcLines from '../motion/ArcLines';
import { SERVICES } from '../../data/content';
import { VIEWPORT, staggerContainer } from '../../lib/motion';
import './Services.css';

const ARCS = [
  { d: 'M100 400 Q500 380 800 60', stroke: '#c39a64', opacity: 0.5, duration: 2.4 },
  { d: 'M300 400 Q620 300 760 0', stroke: '#f2ece2', opacity: 0.25, duration: 2.4, delay: 0.3 },
  { d: 'M480 400 Q700 260 800 180', stroke: '#c39a64', opacity: 0.3, width: 40, duration: 2.6, delay: 0.5 },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <ArcLines className="services__arcs" viewBox="0 0 800 400" preserveAspectRatio="xMaxYMid slice" paths={ARCS} />

      <div className="services__head">
        <div className="services__intro">
          <Eyebrow light>Our Services</Eyebrow>
          <SplitLines className="display services__title" delay={0.1} lines={['Practical Solutions', 'for Real-World', 'Challenges.']} />
        </div>
        <div className="services__aside">
          <Reveal as="p" className="lead" delay={0.3}>
            From strategy and growth planning to operational improvements and new opportunities, we provide advisory services tailored to your goals.
          </Reveal>
          <Reveal delay={0.42}>
            <Magnetic strength={8}>
              <Link to="/services" className="pill pill--outline">
                View All Services
                <span className="pill__dot"><PiArrowRight /></span>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      <motion.div className="services__grid" variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
        {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
      </motion.div>
    </section>
  );
}
