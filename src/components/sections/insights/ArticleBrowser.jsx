import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiMagnifyingGlass } from 'react-icons/pi';
import ArticleCard from '../../ui/ArticleCard';
import Reveal from '../../motion/Reveal';
import { ARTICLES, CATEGORIES } from '../../../data/insights';
import { EASE, staggerContainer } from '../../../lib/motion';
import './ArticleBrowser.css';

const ALL = CATEGORIES[0];

export default function ArticleBrowser() {
  const [filter, setFilter] = useState(ALL);
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [query]);

  const list = useMemo(() => {
    let out = ARTICLES.filter((a) =>
      (filter === ALL || a.category === filter) &&
      (!debounced || (a.title + ' ' + a.category).toLowerCase().includes(debounced))
    );
    // Default view mirrors the design: one lead story + four cards.
    if (filter === ALL && !debounced) out = out.slice(0, 5);
    return out;
  }, [filter, debounced]);

  const [lead, ...rest] = list;

  return (
    <section id="articles" className="browser">
      <Reveal dir="fade" className="browser__bar">
        <div className="browser__tabs" role="tablist" aria-label="Filter insights">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={c === filter}
              className={'browser__tab' + (c === filter ? ' is-active' : '')}
              onClick={() => setFilter(c)}
            >
              {c}
              {c === filter && <motion.span layoutId="browser-tab-line" className="browser__tab-line" transition={{ duration: 0.5, ease: EASE }} />}
            </button>
          ))}
        </div>
        <label className="browser__search">
          <PiMagnifyingGlass />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..." aria-label="Search articles" />
        </label>
      </Reveal>

      <AnimatePresence mode="wait">
        {list.length ? (
          <motion.div
            key={filter + '|' + debounced}
            className="browser__grid"
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            exit={{ opacity: 0, y: 12, transition: { duration: 0.25 } }}
          >
            <ArticleCard article={lead} featured />
            <div className="browser__rest">
              {rest.slice(0, 4).map((a) => <ArticleCard key={a.id} article={a} />)}
            </div>
          </motion.div>
        ) : (
          <motion.p key="empty" className="browser__empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            No articles match \u201C{query}\u201D.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
