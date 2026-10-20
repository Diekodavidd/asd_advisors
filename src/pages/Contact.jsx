import PageHero from '../components/ui/PageHero';
import HeroBadges from '../components/sections/contact/HeroBadges';
import ContactSection from '../components/sections/contact/ContactSection';
import Location from '../components/sections/contact/Location';
import FAQ from '../components/sections/contact/FAQ';
import Footer from '../components/layout/Footer';
import { CONTACT_IMAGES } from '../data/contact';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        lines={['Let\u2019s Turn', 'Your Ambition', <span className="accent">Into Progress.</span>]}
        text="Speak to our team to discuss your business goals and explore how our advisory services can help you create a brighter, more sustainable future."
        image={CONTACT_IMAGES.hero}
        alt="Boardroom with floor-to-ceiling windows over the skyline at sunset"
        position="55% center"
        shape="curve"
        pillars={['Ideas', 'People', 'Capital', 'Opportunity']}
      >
        <HeroBadges />
      </PageHero>
      <ContactSection />
      <Location />
      <FAQ />
      <Footer variant="full" />
    </>
  );
}
