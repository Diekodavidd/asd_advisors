import { PiArrowRight } from 'react-icons/pi';
import Reveal from '../motion/Reveal';
import './InsightCard.css';

export default function InsightCard({ img, category, title, href, delay = 0 }) {
  return (
    <Reveal as="a" href={href} className="insight" delay={delay}>
      <div className="insight__media">
        <img className="insight__img" src={img} alt={title} loading="lazy" />
      </div>
      <div className="insight__cat">{category}</div>
      <div className="insight__title">{title}</div>
      <div className="insight__more">Read More <PiArrowRight /></div>
    </Reveal>
  );
}
