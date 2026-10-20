import Eyebrow from '../../ui/Eyebrow';
import IconColumns from '../../ui/IconColumns';
import SplitLines from '../../motion/SplitLines';
import { OUTCOMES } from '../../../data/strategy';
import './Strategy.css';

export default function StrategyOutcomes() {
  return (
    <section id="outcomes" className="st-outcomes">
      <div className="st-stack">
        <Eyebrow light rule={false}>Expected Outcomes</Eyebrow>
        <SplitLines className="display st-title st-title--sm" delay={0.1} lines={['Growth That', 'Creates Lasting Value.']} />
      </div>
      <IconColumns items={OUTCOMES} tone="light" />
    </section>
  );
}
