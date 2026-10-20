import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import Counter from '../../motion/Counter';
import ArcLines from '../../motion/ArcLines';
import { ALT_STATS } from '../../../data/strategy';
import './Strategy.css';

export default function AltImpact() {
  return (
    <section id="impact" className="sa-impact">
      <ArcLines
        className="sa-impact__arcs"
        viewBox="0 0 800 200"
        paths={[
          { d: 'M0 200 Q420 150 800 40', stroke: '#c39a64', opacity: 0.18, width: 26, duration: 2.6 },
          { d: 'M60 200 Q460 160 800 70', stroke: '#c39a64', opacity: 0.7, width: 1.2, duration: 2.6, delay: 0.3 },
        ]}
      />
      <div className="st-stack">
        <Eyebrow light rule={false}>The Impact</Eyebrow>
        <SplitLines className="display st-title st-title--sm" delay={0.1} lines={['Real Strategies.', 'Real Growth.']} />
        <Reveal as="p" className="lead st-text st-text--light st-text--sm" delay={0.3}>
          Our business growth strategies help organisations enter new markets, improve performance and unlock long-term value.
        </Reveal>
        <Reveal delay={0.42}><PillLink to="/insights" variant="cream">See Client Results</PillLink></Reveal>
      </div>
      <div className="sa-stats">
        {ALT_STATS.map((s, i) => (
          <Reveal key={s.label} className="sa-stat" delay={0.15 + i * 0.12}>
            <div className="sa-stat__value">{s.word ? s.word : <><Counter to={s.value} />{s.suffix}</>}</div>
            <div className="sa-stat__label">{s.label}</div>
            <div className="sa-stat__sub">{s.sub}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
