import Eyebrow from './Eyebrow';
import Motto from './Motto';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import ParallaxImage from '../motion/ParallaxImage';
import './PageCTA.css';

/** Closing band for inner pages: copy + action, curved photo, motto rail. */
export default function PageCTA({ id = 'cta', eyebrow, lines, text, image, alt, children }) {
  return (
    <section id={id} className="pcta">
      <div className="pcta__copy">
        <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        <SplitLines className="display pcta__title" delay={0.1} lines={lines} />
        {text && <Reveal as="p" className="lead pcta__lead" delay={0.25}>{text}</Reveal>}
        <Reveal delay={0.38} className="pcta__action">{children}</Reveal>
      </div>
      <ParallaxImage className="pcta__image" src={image} alt={alt} reveal="left" strength={0.45} />
      <Motto />
    </section>
  );
}
