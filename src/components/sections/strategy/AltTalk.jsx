import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import Motto from '../../ui/Motto';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import './Strategy.css';

export default function AltTalk() {
  return (
    <section id="talk" className="sa-talk">
      <div className="st-stack sa-talk__head">
        <Eyebrow rule={false}>Let’s Talk</Eyebrow>
        <SplitLines className="display st-title st-title--xs" delay={0.1} lines={['Ready to Build', 'a Stronger Future?']} />
      </div>
      <div className="st-stack sa-talk__body">
        <Reveal as="p" className="lead st-text st-text--xs" delay={0.25}>
          Speak to our team to discuss your growth ambitions and discover how our business growth strategy service can help you achieve measurable results.
        </Reveal>
        <Reveal delay={0.35}><PillLink to="/contact" variant="gold">Speak to a Consultant</PillLink></Reveal>
      </div>
      <Motto />
    </section>
  );
}
