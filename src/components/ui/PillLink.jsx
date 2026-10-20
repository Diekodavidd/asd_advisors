import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Magnetic from '../motion/Magnetic';

const VARIANTS = {
  dark: 'pill--dark pill--compact',
  outline: 'pill--outline-dark',
  gold: 'pill--gold pill--compact',
  cream: 'pill--cream pill--compact',
};

/**
 * Rounded pill button with a dot. Pass 'to' for a router link or 'href' for a plain link.
 * variant: 'dark' | 'outline' | 'gold' | 'cream'
 */
export default function PillLink({ to, href, children, variant = 'dark', icon: Icon = PiArrowRight, magnet = 10, ...rest }) {
  const cls = 'pill ' + (VARIANTS[variant] || VARIANTS.dark);
  const inner = (
    <>
      {children}
      <span className="pill__dot"><Icon /></span>
    </>
  );
  const external = href && href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {};
  return (
    <Magnetic strength={magnet}>
      {to ? <Link to={to} className={cls} {...rest}>{inner}</Link> : <a href={href} className={cls} {...external} {...rest}>{inner}</a>}
    </Magnetic>
  );
}
