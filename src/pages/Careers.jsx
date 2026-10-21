import PageHero from '../components/ui/PageHero';
import OrbLink from '../components/ui/OrbLink';
import PillLink from '../components/ui/PillLink';
import CtaBand from '../components/ui/CtaBand';
import Culture from '../components/sections/careers/Culture';
import Values from '../components/sections/careers/Values';
import LifeAtASD from '../components/sections/careers/LifeAtASD';
import Openings from '../components/sections/careers/Openings';
import Footer from '../components/layout/Footer';
import { CAREERS_IMAGES } from '../data/careers';

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        lines={['Build', <span className="accent" key="n">What’s Next.</span>]}
        text="Join a team of curious thinkers, problem-solvers and change-makers helping businesses turn ambition into measurable progress."
        image={CAREERS_IMAGES.hero}
        alt="Team meeting in a glass office above the skyline at sunset"
        shape="curve"
        pillars={['People', 'Ideas', 'Capital', 'Opportunity']}
      >
        <OrbLink href="#openings">Explore Opportunities</OrbLink>
      </PageHero>
      <Culture />
      <Values />
      <LifeAtASD />
      {/* <Openings /> */}
      <CtaBand
        eyebrow="Let’s Build Together"
        lines={['Ready to Be Part', 'of What’s Next?']}
        text="Explore our open roles and take the next step in your career with ASD Advisors."
        image={CAREERS_IMAGES.cta}
        alt="Curved corridor opening onto the skyline"
        motto
      >
        <PillLink href="#openings" variant="gold">View All Opportunities</PillLink>
      </CtaBand>
      <Footer variant="full" />
    </>
  );
}
