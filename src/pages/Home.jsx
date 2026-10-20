import Hero from '../components/sections/Hero';
import AboutIntro from '../components/sections/About';
import Services from '../components/sections/Services';
import Approach from '../components/sections/Approach';
import Insights from '../components/sections/Insights';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Services />
      <Approach />
      <Insights />
      <CTA />
      <Footer />
    </>
  );
}
