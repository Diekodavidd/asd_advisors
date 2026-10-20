import PageHero from '../components/ui/PageHero';
import PageCTA from '../components/ui/PageCTA';
import OrbLink from '../components/ui/OrbLink';
import ArticleBrowser from '../components/sections/insights/ArticleBrowser';
import FeaturedInsight from '../components/sections/insights/FeaturedInsight';
import NewsletterForm from '../components/sections/insights/NewsletterForm';
import Footer from '../components/layout/Footer';
import { INSIGHTS_IMAGES } from '../data/insights';

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Perspectives"
        lines={['Ideas.', 'Perspectives.', <span className="accent">Opportunities.</span>]}
        text="Practical insights, industry trends and expert perspectives to help you make informed decisions and turn ambition into measurable progress."
        image={INSIGHTS_IMAGES.hero}
        alt="Executive standing at a window above the city at sunrise"
        position="60% center"
        shape="arch"
        pillars={['People', 'Ideas', 'Capital', 'Opportunity']}
      >
        <OrbLink href="#articles">Explore Insights</OrbLink>
      </PageHero>
      <ArticleBrowser />
      <FeaturedInsight />
      <PageCTA
        id="subscribe"
        eyebrow="Stay Informed"
        lines={['Get the Latest Insights']}
        text="Subscribe to receive our latest articles, insights and perspectives directly in your inbox."
        image={INSIGHTS_IMAGES.cta}
        alt="Curved architecture framing the skyline"
      >
        <NewsletterForm />
      </PageCTA>
      <Footer variant="full" />
    </>
  );
}
