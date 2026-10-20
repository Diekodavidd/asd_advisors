import SplitHead from '../../ui/SplitHead';
import FeatureList from '../../ui/FeatureList';
import ArcLines from '../../motion/ArcLines';
import { ADVANTAGES } from '../../../data/industries';
import './Advantage.css';

export default function Advantage() {
  return (
    <section id="advantage" className="advantage">
      <ArcLines
        className="advantage__arc"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMaxYMid slice"
        paths={[{ d: 'M200 400 Q560 360 800 40', stroke: '#c39a64', opacity: 0.35, duration: 2.6 }]}
      />
      <SplitHead
        light
        eyebrow="Our Advantage"
        lines={['Industry Insight.', 'Real-World Solutions.']}
        text="We combine deep sector knowledge with cross-industry experience to deliver practical, innovative and measurable solutions. Our approach is tailored to the unique opportunities and challenges within each industry, helping you achieve long-term success."
      />
      <FeatureList items={ADVANTAGES} columns={4} className="advantage__list" />
    </section>
  );
}
