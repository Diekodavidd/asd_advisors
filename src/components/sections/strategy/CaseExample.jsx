import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { KEY_RESULTS, STRATEGY_IMAGES } from '../../../data/strategy';
import './Strategy.css';

export default function CaseExample() {
  return (
    <section id="case" className="st-case">
      <div className="st-stack">
        <Eyebrow rule={false}>Case Example</Eyebrow>
        <SplitLines className="display st-title st-title--xs" delay={0.1} lines={['From Opportunity', 'to Measurable Growth.']} />
        <Reveal as="p" className="lead st-text st-text--sm" delay={0.3}>
          We partnered with a mid-sized financial services firm to identify new market opportunities, refine their go-to-market strategy and improve operational efficiency, resulting in a 3x increase in market opportunities within two years.
        </Reveal>
        <Reveal delay={0.4}><Link to="/insights" className="text-link">Read the Full Case Study <PiArrowRight /></Link></Reveal>
      </div>
      <ParallaxImage className="st-case__image" src={STRATEGY_IMAGES.case} alt="Glass towers catching the sunrise" reveal="left" strength={0.4} />
      <Reveal dir="right" delay={0.3} className="st-results">
        <div className="st-results__title">Key Results</div>
        {KEY_RESULTS.map(({ icon: Icon, text }, i) => (
          <Reveal key={text} className="st-result" delay={0.4 + i * 0.1}>
            <span className="st-result__icon"><Icon /></span>{text}
          </Reveal>
        ))}
      </Reveal>
    </section>
  );
}
