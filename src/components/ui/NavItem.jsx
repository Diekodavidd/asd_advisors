import { Link, useLocation } from 'react-router-dom';

/**
 * Router-aware link: '#id' stays an in-page anchor, '/path' or '/path#id' uses React Router.
 * Active when the path matches the current page or one of its sub-pages (e.g. /services/...).
 */
export default function NavItem({ to, className = '', activeClass = 'is-active', children, ...rest }) {
  const { pathname } = useLocation();
  if (to.startsWith('#')) {
    return <a href={to} className={className} {...rest}>{children}</a>;
  }
  const active = to === pathname || (to !== '/' && pathname.startsWith(to + '/'));
  return (
    <Link to={to} className={className + (active && activeClass ? ' ' + activeClass : '')} aria-current={active ? 'page' : undefined} {...rest}>
      {children}
    </Link>
  );
}
