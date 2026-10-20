import { ARTICLE } from '../../../data/article';
import './Article.css';

export default function AuthorMeta() {
  const { author, date, readTime } = ARTICLE;
  const initials = author.name.split(' ').map((p) => p[0]).join('');
  return (
    <div className="author">
      <span className="author__avatar" aria-hidden="true">{initials}</span>
      <span><span className="author__name">By {author.name}</span><span className="author__role">{author.role}</span></span>
      <span className="author__sep" />
      <span className="author__meta">{date}</span>
      <span className="author__sep" />
      <span className="author__meta">{readTime}</span>
    </div>
  );
}
