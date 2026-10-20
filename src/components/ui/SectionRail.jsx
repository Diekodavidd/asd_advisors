import { motion } from 'framer-motion';
import useScrollSpy from '../../lib/useScrollSpy';
import { EASE, fadeUpOnMount } from '../../lib/motion';
import './SectionRail.css';

/** Numbered in-page nav for the hero rail; highlights whichever section you're reading. */
export default function SectionRail({ items }) {
  const active = useScrollSpy(items.map((i) => i.id));
  return (
    <motion.nav className="srail" aria-label="Page sections" {...fadeUpOnMount(1.1)}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <a key={it.id} href={'#' + it.id} className={'srail__item' + (on ? ' is-active' : '')}>
            <motion.span className="srail__text" animate={{ x: on ? 6 : 0 }} transition={{ duration: 0.5, ease: EASE }}>
              <span className="srail__n">{it.n}</span>
              <span className="srail__label">{it.label}</span>
            </motion.span>
            <motion.span className="srail__line" animate={{ scaleX: on ? 1 : 0 }} transition={{ duration: 0.6, ease: EASE }} />
          </a>
        );
      })}
    </motion.nav>
  );
}
