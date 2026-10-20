import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ARTICLE_PATH } from '../../data/insights';
import { PiArrowRight } from 'react-icons/pi';
import { EASE, fadeUpItem } from '../../lib/motion';
import './ArticleCard.css';

const MotionLink = motion(Link);

export default function ArticleCard({ article, featured = false }) {
  const { category, date, title, excerpt, img } = article;
  return (
    <MotionLink
      to={article.to || ARTICLE_PATH}
      className={'article' + (featured ? ' article--featured' : '')}
      variants={fadeUpItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: EASE }}
      layout
    >
      <div className="article__media"><img className="article__img" src={img} alt={title} loading="lazy" /></div>
      <div className="article__body">
        <div className="article__meta"><span className="article__cat">{category}</span>{date && <span>{date}</span>}</div>
        <h3 className="article__title">{title}</h3>
        {featured && <p className="article__excerpt">{excerpt}</p>}
        <span className="article__more">
          <span className={featured ? 'article__more-label' : ''}>Read More</span>
          <span className="article__more-icon"><PiArrowRight /></span>
        </span>
      </div>
    </MotionLink>
  );
}
