import Eyebrow from '../../ui/Eyebrow';
import IconColumns from '../../ui/IconColumns';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import { OVERVIEW } from '../../../data/strategy';
import './Strategy.css';

export default function StrategyOverview() {
  return (
    <section id="overview" className="st-overview">
      <div className="st-stack">
        <Eyebrow rule={false}>Service Overview</Eyebrow>
        <SplitLines className="display st-title" delay={0.1} lines={['A Clear Path', 'to Sustainable Growth.']} />
        <Reveal as="p" className="lead st-text" delay={0.3}>
          Our Business Growth Strategy service helps you uncover new opportunities, strengthen your market position and build a resilient roadmap for long-term success. We combine deep industry knowledge with data-driven insights to develop strategies that are practical, adaptable and aligned with your business goals.
        </Reveal>
      </div>
      <IconColumns items={OVERVIEW} />
    </section>
  );
}
