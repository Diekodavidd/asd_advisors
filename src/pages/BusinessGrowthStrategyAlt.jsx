import PageHero from '../components/ui/PageHero';
import PillLink from '../components/ui/PillLink';
import PlayButton from '../components/ui/PlayButton';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionRail from '../components/ui/SectionRail';
import AltOverview from '../components/sections/strategy/AltOverview';
import AltChallenges from '../components/sections/strategy/AltChallenges';
import AltApproach from '../components/sections/strategy/AltApproach';
import AltImpact from '../components/sections/strategy/AltImpact';
import AltTalk from '../components/sections/strategy/AltTalk';
import RelatedServices from '../components/sections/strategy/RelatedServices';
import Footer from '../components/layout/Footer';
import { ALT_RAIL, ALT_RELATED, STRATEGY_ALT_IMAGES, STRATEGY_CRUMBS } from '../data/strategy';

/** Alternative layout for the Business Growth Strategy service page — keep whichever you prefer. */
export default function BusinessGrowthStrategyAlt() {
  return (
    <>
      <PageHero
        top={<Breadcrumb items={STRATEGY_CRUMBS} />}
        eyebrow="Our Service"
        lines={['Business', 'Growth Strategy']}
        sub={<>Clear strategies. Measurable growth.<br />A stronger tomorrow.</>}
        text="We help businesses define where they are, identify where they want to be, and create practical, data-driven strategies to achieve sustainable growth."
        image={STRATEGY_ALT_IMAGES.hero}
        alt="Executive at a curved glass window above the city"
        position="60% center"
        shape="curve"
        rail={<SectionRail items={ALT_RAIL} />}
      >
        <div className="hero-actions">
          <PillLink to="/contact" variant="gold">Speak to a Consultant</PillLink>
          <PlayButton />
        </div>
      </PageHero>
      <AltOverview />
      <AltChallenges />
      <AltApproach />
      <AltImpact />
      <RelatedServices items={ALT_RELATED} buttonStyle="pill" text="Our integrated services work together to deliver comprehensive solutions for your business." />
      <AltTalk />
      <Footer variant="full" />
    </>
  );
}
