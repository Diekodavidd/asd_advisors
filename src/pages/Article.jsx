
import { useParams, Navigate } from 'react-router-dom';

import PageHero from '../components/ui/PageHero';
import Breadcrumb from '../components/ui/Breadcrumb';
import AuthorMeta from '../components/sections/article/AuthorMeta';
import ArticleBody from '../components/sections/article/ArticleBody';
import RelatedInsights from '../components/sections/article/RelatedInsights';
import ArticleCTA from '../components/sections/article/ArticleCTA';
import Footer from '../components/layout/Footer';

import { getArticleBySlug } from '../data/insights';
import { ARTICLE_CONTENT } from '../data/articleContent';
import { ARTICLE } from '../data/article';

export default function Article() {
  const { slug } = useParams();

  const selectedArticle = getArticleBySlug(slug);
  const content = ARTICLE_CONTENT[slug];

  if (!selectedArticle || !content) {
    return <Navigate to="/404" replace />;
  }

  const images = {
    hero: selectedArticle.img,
    inline: ARTICLE.images.inline,
    quote: ARTICLE.images.quote,
    cta: ARTICLE.images.cta,
  };

  const titleLines = slug === 'unlocking-sustainable-growth'
    ? ARTICLE.lines
    : [selectedArticle.title];

  return (
    <>
      <PageHero
        top={
          <Breadcrumb
            accent
            items={[
              { label: 'Insights', to: '/insights' },
              { label: selectedArticle.category },
            ]}
          />
        }
        lines={titleLines}
        titleClass="phero__title--article"
        text={content.dek}
        image={images.hero}
        alt={selectedArticle.title}
        shape="soft"
        rail={false}
        compact
      >
        <AuthorMeta />
      </PageHero>

      <ArticleBody article={content} images={images} />

      <RelatedInsights />

      <ArticleCTA images={images} />

      <Footer variant="full" />
    </>
  );
}
