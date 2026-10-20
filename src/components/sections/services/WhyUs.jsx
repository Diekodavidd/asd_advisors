import Eyebrow from '../../ui/Eyebrow';
import FeatureList from '../../ui/FeatureList';
import SplitLines from '../../motion/SplitLines';
import { WHY_US } from '../../../data/services';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section id="why" className="why">
      <div className="why__intro">
        <Eyebrow light rule={false}>Why Work With Us</Eyebrow>
        <SplitLines className="display why__title" delay={0.1} lines={['More Than', 'Advice. A Partner', 'in Progress.']} />
      </div>
      <FeatureList items={WHY_US} columns={2} />
    </section>
  );
}
