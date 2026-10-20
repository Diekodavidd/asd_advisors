import Eyebrow from './Eyebrow';
import Motto from './Motto';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import ParallaxImage from '../motion/ParallaxImage';
import './CtaBand.css';

/** Dark closing band: copy + action on the left, curved photo on the right, optional motto rail. */
export default function CtaBand({ id = 'cta', eyebrow, lines, text, image, alt = '', motto = false, children }) {
  return (
    <section id={id} className={'cta-band' + (motto ? ' cta-band--motto' : '')}>
      <div className="cta-band__copy">
        {eyebrow && <Eyebrow light rule={false}>{eyebrow}</Eyebrow>}
        <SplitLines className="display cta-band__title" delay={0.1} lines={lines} />
        {text && <Reveal as="p" className="lead cta-band__text" delay={0.25}>{text}</Reveal>}
        <Reveal delay={0.38} className="cta-band__action">{children}</Reveal>
      </div>
      <ParallaxImage className="cta-band__image" src={image} alt={alt} reveal="left" strength={0.45} />
      {motto && <Motto />}
    </section>
  );
}
