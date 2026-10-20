import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Reveal from '../motion/Reveal';
import './RelatedCards.css';

/** items: [{ title, img, to }] */
export default function RelatedCards({ items }) {
  return (
    <div className="related-cards">
      {items.map((r, i) => (
        <Reveal key={r.title} delay={0.15 + i * 0.12}>
          <Link to={r.to} className="rcard">
            <div className="rcard__media"><img src={r.img} alt="" loading="lazy" /></div>
            <div className="rcard__body">
              <span className="rcard__title">{r.title}</span>
              <span className="rcard__arrow"><PiArrowRight /></span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
