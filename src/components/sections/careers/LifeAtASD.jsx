import Eyebrow from '../../ui/Eyebrow';
import PillLink from '../../ui/PillLink';
import LabelsOverlay from '../../ui/LabelsOverlay';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { CAREERS_IMAGES } from '../../../data/careers';
import './Careers.css';

export default function LifeAtASD() {
  return (
    <section id="life" className="cr-life">
      <div className="cr-life__copy">
        <Eyebrow rule={false}>Life at ASD</Eyebrow>
        <SplitLines className="display cr-title" delay={0.1} lines={['More Than', 'a Workplace.']} />
        <Reveal as="p" className="lead cr-text" delay={0.3}>
          We offer a dynamic environment where you can learn, grow and make a real difference. From flexible working arrangements to exposure to high-impact projects, we invest in our people.
        </Reveal>
        <Reveal delay={0.42}><PillLink href="#openings">Discover Life at ASD</PillLink></Reveal>
      </div>
      <div className="cr-mosaic">
        <ParallaxImage className="cr-mosaic__big" src={CAREERS_IMAGES.life1} alt="Lounge overlooking the skyline at sunset" reveal="up" strength={0.4} />
        <ParallaxImage className="cr-mosaic__small" src={CAREERS_IMAGES.life2} alt="Spiral staircase in warm light" reveal="left" strength={0.35} delay={0.15}>
          <div className="cr-shade cr-shade--right" />
          <LabelsOverlay words={['Grow', 'Learn', 'Contribute', 'Belong']} className="cr-mosaic__labels" delay={0.4} />
        </ParallaxImage>
        <ParallaxImage className="cr-mosaic__small" src={CAREERS_IMAGES.life3} alt="Team meeting at a boardroom table at dusk" reveal="left" strength={0.35} delay={0.3} />
      </div>
    </section>
  );
}
