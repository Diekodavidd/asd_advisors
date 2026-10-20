import { Link, useLocation } from 'react-router-dom';

/**
 * Router-aware link: '#id' stays an in-page anchor, '/path' or '/path#id' uses React Router.
 * Adds an active class when the link's path matches the current page.
 */
export default function NavItem({ to, className = '', activeClass = 'is-active', children, ...rest }) {
  const { pathname } = useLocation();
  if (to.startsWith('#')) {
    return <a href={to} className={className} {...rest}>{children}</a>;
  }
  const active = to === pathname;
  return (
    <Link to={to} className={className + (active ? ' ' + activeClass : '')} aria-current={active ? 'page' : undefined} {...rest}>
      {children}
    </Link>
  );
}
