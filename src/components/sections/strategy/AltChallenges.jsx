import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import { ALT_CHALLENGES } from '../../../data/strategy';
import './Strategy.css';

export default function AltChallenges() {
  return (
    <section id="challenges" className="sa-challenges">
      <div className="st-stack">
        <Eyebrow light rule={false}>Key Business Challenges</Eyebrow>
        <SplitLines className="display st-title" delay={0.1} lines={['What We Help', 'You Overcome.']} />
        <Reveal as="p" className="lead st-text st-text--light" delay={0.3}>
          Many businesses face critical growth challenges that can limit their potential. We work with you to address these challenges and create a clear path forward.
        </Reveal>
        <Reveal delay={0.42}><PillLink to="/contact" variant="cream">Discuss Your Challenges</PillLink></Reveal>
      </div>
      <div className="sa-cards">
        {ALT_CHALLENGES.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} className="sa-card" delay={0.2 + i * 0.11}>
            <span className="icols__icon sa-card__icon"><Icon /></span>
            <div><h3 className="sa-card__title">{title}</h3><p className="sa-card__text">{text}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
