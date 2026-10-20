import { motion } from 'framer-motion';
import useScrollSpy from '../../lib/useScrollSpy';
import { EASE } from '../../lib/motion';
import './TableOfContents.css';

const ROW = 34;

/** Sticky "On this page" list with a gold marker that follows your reading position. */
export default function TableOfContents({ items, title = 'On this page' }) {
  const active = useScrollSpy(items.map((i) => i.id));
  const index = Math.max(0, items.findIndex((i) => i.id === active));
  return (
    <div className="toc">
      <div className="toc__title">{title}</div>
      <nav className="toc__list" aria-label={title}>
        <motion.span className="toc__marker" animate={{ y: index * ROW }} transition={{ duration: 0.5, ease: EASE }} />
        {items.map((it, i) => (
          <a key={it.id} href={'#' + it.id} className={'toc__link' + (it.id === active ? ' is-active' : '')} aria-current={it.id === active ? 'location' : undefined}>
            <span className="toc__n">{String(i + 1).padStart(2, '0')}</span>
            {it.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
