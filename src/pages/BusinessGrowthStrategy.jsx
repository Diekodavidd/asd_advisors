import PageHero from '../components/ui/PageHero';
import PillLink from '../components/ui/PillLink';
import PlayButton from '../components/ui/PlayButton';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionRail from '../components/ui/SectionRail';
import StrategyQuote from '../components/sections/strategy/StrategyQuote';
import StrategyOverview from '../components/sections/strategy/StrategyOverview';
import StrategyChallenges from '../components/sections/strategy/StrategyChallenges';
import StrategyApproach from '../components/sections/strategy/StrategyApproach';
import StrategyOutcomes from '../components/sections/strategy/StrategyOutcomes';
import CaseExample from '../components/sections/strategy/CaseExample';
import RelatedServices from '../components/sections/strategy/RelatedServices';
import StrategyTalk from '../components/sections/strategy/StrategyTalk';
import Footer from '../components/layout/Footer';
import { RAIL_SECTIONS, RELATED, STRATEGY_CRUMBS, STRATEGY_IMAGES } from '../data/strategy';

export default function BusinessGrowthStrategy() {
  return (
    <>
      <PageHero
        top={<Breadcrumb items={STRATEGY_CRUMBS} />}
        eyebrow="Our Service"
        lines={['Business', <span className="accent" key="g">Growth Strategy</span>]}
        sub="Clear strategies. Measurable growth. A stronger tomorrow."
        text="We work with ambitious businesses to define where they are, identify where they want to be, and create practical, data-driven strategies to unlock new opportunities, improve performance and achieve long-term, sustainable growth."
        image={STRATEGY_IMAGES.hero}
        alt="Glass lounge overlooking the skyline at sunrise"
        shape="none"
        rail={<SectionRail items={RAIL_SECTIONS} />}
        overlay={<StrategyQuote>“A clear growth strategy turns ambition into measurable progress.”</StrategyQuote>}
      >
        <div className="hero-actions">
          <PillLink to="/contact" variant="gold">Speak to a Consultant</PillLink>
          <PlayButton />
        </div>
      </PageHero>
      <StrategyOverview />
      <StrategyChallenges />
      <StrategyApproach />
      <StrategyOutcomes />
      <CaseExample />
      <RelatedServices items={RELATED} />
      <StrategyTalk />
      <Footer variant="full" />
    </>
  );
}
