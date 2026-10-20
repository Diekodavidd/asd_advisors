import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import RelatedCards from '../../ui/RelatedCards';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import './Strategy.css';

/** buttonStyle: 'link' (text link) | 'pill' (outlined pill) */
export default function RelatedServices({ items, text, buttonStyle = 'link' }) {
  return (
    <section id="related" className="st-related">
      <div className="st-stack">
        <Eyebrow rule={false}>Related Services</Eyebrow>
        <SplitLines className="display st-title st-title--xxs" delay={0.1} lines={['Explore Complementary', 'Advisory Services.']} />
        {text && <Reveal as="p" className="lead st-text st-text--xs" delay={0.25}>{text}</Reveal>}
        <Reveal delay={0.32}>
          {buttonStyle === 'pill'
            ? <PillLink to="/services" variant="outline" magnet={8}>View All Services</PillLink>
            : <Link to="/services" className="text-link">View All Services <PiArrowRight /></Link>}
        </Reveal>
      </div>
      <RelatedCards items={items} />
    </section>
  );
}
