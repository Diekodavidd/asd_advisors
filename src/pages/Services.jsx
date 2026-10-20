import PageHero from '../components/ui/PageHero';
import PageCTA from '../components/ui/PageCTA';
import OrbLink from '../components/ui/OrbLink';
import PillLink from '../components/ui/PillLink';
import ServicesApproach from '../components/sections/services/ServicesApproach';
import ServiceGrid from '../components/sections/services/ServiceGrid';
import WhyUs from '../components/sections/services/WhyUs';
import Footer from '../components/layout/Footer';
import { SERVICES_IMAGES } from '../data/services';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        lines={['Practical', 'Solutions for', <span className="accent">Real-World</span>, <span className="accent">Challenges.</span>]}
        text="From strategy and growth planning to operational improvements and new opportunities, we provide advisory services tailored to your goals."
        image={SERVICES_IMAGES.hero}
        alt="Executive silhouetted against a glass tower at sunrise"
        position="58% center"
        shape="none"
        pillars={['Ideas', 'People', 'Capital', 'Opportunity']}
      >
        <OrbLink to="/contact">Speak to a Consultant</OrbLink>
      </PageHero>
      <ServicesApproach />
      <ServiceGrid />
      <WhyUs />
      <PageCTA
        eyebrow="Let\u2019s Work Together"
        lines={['Ready to Explore', 'How We Can Support You?']}
        text="Speak to our team to discuss your business goals and discover how our services can help you create a brighter, more sustainable future."
        image={SERVICES_IMAGES.cta}
        alt="Glass tower rising over the skyline at golden hour"
      >
        <PillLink to="/contact">Speak to a Consultant</PillLink>
      </PageCTA>
      <Footer variant="full" />
    </>
  );
}
