import Eyebrow from '../../ui/Eyebrow';
import Timeline from '../../ui/Timeline';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { PROCESS, STRATEGY_ALT_IMAGES } from '../../../data/strategy';
import './Strategy.css';

export default function AltApproach() {
  return (
    <section id="approach" className="sa-approach">
      <ParallaxImage className="sa-approach__image" src={STRATEGY_ALT_IMAGES.approach} alt="Executive walking along a curved terrace at sunset" reveal="right" position="30% center" />
      <div className="st-stack sa-approach__copy">
        <Eyebrow rule={false}>Our Approach</Eyebrow>
        <SplitLines className="display st-title st-title--sm" delay={0.1} lines={['A Proven Process', 'for Real Results.']} />
        <Reveal as="p" className="lead st-text st-text--sm" delay={0.3}>
          We take a structured and collaborative approach to ensure our strategies are practical, realistic and aligned with your business goals.
        </Reveal>
        <Timeline steps={PROCESS} />
      </div>
    </section>
  );
}
