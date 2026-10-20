import PageHero from '../components/ui/PageHero';
import Breadcrumb from '../components/ui/Breadcrumb';
import AuthorMeta from '../components/sections/article/AuthorMeta';
import ArticleBody from '../components/sections/article/ArticleBody';
import RelatedInsights from '../components/sections/article/RelatedInsights';
import ArticleCTA from '../components/sections/article/ArticleCTA';
import Footer from '../components/layout/Footer';
import { ARTICLE } from '../data/article';

export default function Article() {
  return (
    <>
      <PageHero
        top={<Breadcrumb accent items={[{ label: 'Insights', to: '/insights' }, { label: ARTICLE.category }]} />}
        lines={ARTICLE.lines}
        titleClass="phero__title--article"
        text={ARTICLE.dek}
        image={ARTICLE.images.hero}
        alt="Lounge chair by a window overlooking the skyline at sunrise"
        shape="soft"
        rail={false}
        compact
      >
        <AuthorMeta />
      </PageHero>
      <ArticleBody />
      <RelatedInsights />
      <ArticleCTA />
      <Footer variant="full" />
    </>
  );
}
