import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/** items: [{ label, to? }] — the last item is the current page. */
export default function Breadcrumb({ items, accent = false }) {
  return (
    <nav aria-label="Breadcrumb" className={'crumbs' + (accent ? ' crumbs--accent' : '')}>
      {items.map((it, i) => (
        <Fragment key={it.label}>
          {i > 0 && <span className="crumbs__sep">/</span>}
          {it.to ? <Link to={it.to}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}
