import PageHero from '../components/ui/PageHero';
import PageCTA from '../components/ui/PageCTA';
import OrbLink from '../components/ui/OrbLink';
import PillLink from '../components/ui/PillLink';
import Sectors from '../components/sections/industries/Sectors';
import Advantage from '../components/sections/industries/Advantage';
import Footer from '../components/layout/Footer';
import { INDUSTRIES_IMAGES } from '../data/industries';

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        lines={['Different', 'Sectors.', <span className="accent">A Shared</span>, <span className="accent">Ambition.</span>]}
        text="We work with ambitious businesses across diverse industries, providing tailored advisory services that address sector-specific challenges and unlock new opportunities for sustainable growth."
        image={INDUSTRIES_IMAGES.hero}
        alt="Executive overlooking the skyline through curved glass"
        position="62% center"
        shape="curve"
        pillars={['People', 'Ideas', 'Capital', 'Opportunity']}
      >
        <OrbLink href="#sectors">Explore Our Expertise</OrbLink>
      </PageHero>
      <Sectors />
      <Advantage />
      <PageCTA
        eyebrow="Let\u2019s Build What\u2019s Next"
        lines={['Ready to Explore', 'Opportunities in Your Industry?']}
        text="Speak to our team to discuss how our industry expertise can support your business goals and create a brighter, more sustainable future."
        image={INDUSTRIES_IMAGES.cta}
        alt="Curved architecture framing the skyline at sunset"
      >
        <PillLink to="/contact">Speak to a Consultant</PillLink>
      </PageCTA>
      <Footer variant="full" />
    </>
  );
}
