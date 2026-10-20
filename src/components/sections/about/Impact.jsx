import Eyebrow from '../../ui/Eyebrow';
import Reveal from '../../motion/Reveal';
import Counter from '../../motion/Counter';
import { IMPACT_STATS } from '../../../data/content';
import './Impact.css';

export default function Impact() {
  return (
    <section id="impact" className="impact">
      <Eyebrow light rule={false}>Our Impact</Eyebrow>
      <div className="impact__grid">
        {IMPACT_STATS.map((s, i) => (
          <Reveal key={s.label} className="impact__item" delay={0.1 + i * 0.12}>
            <div className="impact__value"><Counter to={s.value} />+</div>
            <div className="impact__label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
