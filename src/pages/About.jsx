import AboutHero from '../components/sections/about/AboutHero';
import Story from '../components/sections/about/Story';
import Purpose from '../components/sections/about/Purpose';
import AboutApproach from '../components/sections/about/AboutApproach';
import Impact from '../components/sections/about/Impact';
import Leadership from '../components/sections/about/Leadership';
import GlobalPerspective from '../components/sections/about/GlobalPerspective';
import AboutCTA from '../components/sections/about/AboutCTA';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <Purpose />
      <AboutApproach />
      <Impact />
      <Leadership />
      <GlobalPerspective />
      <AboutCTA />
      <Footer variant="full" />
    </>
  );
}
