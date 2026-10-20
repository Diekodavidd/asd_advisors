import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Magnetic from '../motion/Magnetic';

/** Big gold circle + label — the hero call to action. */
export default function OrbLink({ to, href, children }) {
  const inner = (
    <>
      <span className="orb-link__dot"><PiArrowRight /></span>
      {children}
    </>
  );
  return (
    <Magnetic strength={12}>
      {to ? <Link to={to} className="orb-link">{inner}</Link> : <a href={href} className="orb-link">{inner}</a>}
    </Magnetic>
  );
}
