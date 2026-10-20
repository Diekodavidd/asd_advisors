import Reveal from '../motion/Reveal';
import OrbLink from './OrbLink';
import './SideCard.css';

export default function SideCard({ image, title, text, to = '/contact', label = 'Contact Us' }) {
  return (
    <Reveal className="side-card" delay={0.3}>
      <div className="side-card__media"><img src={image} alt="" loading="lazy" /></div>
      <div className="side-card__body">
        <h3 className="side-card__title">{title}</h3>
        <p className="side-card__text">{text}</p>
        <OrbLink to={to}>{label}</OrbLink>
      </div>
    </Reveal>
  );
}
