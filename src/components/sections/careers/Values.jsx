import SplitHead from '../../ui/SplitHead';
import Reveal from '../../motion/Reveal';
import { VALUES } from '../../../data/careers';
import './Careers.css';

export default function Values() {
  return (
    <section id="values" className="cr-values">
      <SplitHead
        light
        eyebrow="Our People"
        lines={['Values That', 'Guide Us.']}
        text="Our values shape how we work, make decisions and support each other. They are the foundation of a high-performing, people-first culture at ASD Advisors."
      />
      <div className="cr-values__list">
        {VALUES.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} className="cr-value" delay={0.15 + i * 0.11}>
            <span className="cr-value__icon"><Icon /></span>
            <div><div className="cr-value__title">{title}</div><div className="cr-value__text">{text}</div></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
